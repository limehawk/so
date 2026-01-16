import { readFile, writeFile, mkdir } from 'fs/promises';

// Configuration for MSP
const INPUT_FILE = './source-docs/API Documentation MSP - SuperOps.md';
const OUTPUT_BASE = './packages/msp/docs';
const PRODUCT_TITLE = 'SuperOps MSP GraphQL API';
const ENDPOINTS = {
    us: 'https://api.superops.ai/msp',
    eu: 'https://euapi.superops.ai/msp'
};

// Read source file
const content = await readFile(INPUT_FILE, 'utf-8');
const lines = content.split('\n');

// Create output directory
await mkdir(OUTPUT_BASE, { recursive: true });

// Find first category marker
let firstCategoryLine = lines.findIndex(line =>
    line.trim() === 'Queries' || line.trim() === 'Mutations' || line.trim() === 'Types'
);

// Parse items
let currentCategory = null;
let currentItem = null;
let currentLines = [];
let items = [];

function saveCurrentItem() {
    if (currentItem && currentLines.length > 0) {
        items.push({
            category: currentCategory,
            name: currentItem,
            rawContent: currentLines.join('\n').trim()
        });
    }
    currentLines = [];
    currentItem = null;
}

for (let i = firstCategoryLine; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    if (trimmed === 'Queries' || trimmed === 'Mutations' || trimmed === 'Types') {
        saveCurrentItem();
        currentCategory = trimmed.toLowerCase();

        let j = i + 1;
        while (j < lines.length && lines[j].trim() === '') j++;

        if (j < lines.length) {
            currentItem = lines[j].trim();
            currentLines = [];
            i = j;
        }
        continue;
    }

    if (currentItem) {
        currentLines.push(line);
    }
}
saveCurrentItem();

// Parse query/mutation content into structured JSON
function parseOperation(rawContent, name, category) {
    const lines = rawContent.split('\n');
    const result = {
        name,
        type: category === 'queries' ? 'query' : 'mutation',
        description: '',
        returns: '',
        arguments: [],
        graphql: '',
        variables: null,
        exampleResponse: null
    };

    let i = 0;

    // First non-empty line is description
    while (i < lines.length && !lines[i].trim()) i++;
    if (i < lines.length && !['Response', 'Arguments', 'Query'].includes(lines[i].trim())) {
        result.description = lines[i].trim();
        i++;
    }

    while (i < lines.length) {
        const trimmed = lines[i].trim();

        if (trimmed === 'Response' && i + 1 < lines.length && lines[i + 1].trim().startsWith('Returns')) {
            i++;
            result.returns = lines[i].trim().replace('Returns ', '').replace('an ', '').replace('a ', '');
            i++;
            continue;
        }

        if (trimmed === 'Arguments') {
            i++;
            // Skip header line "Name\tDescription"
            if (i < lines.length && lines[i].includes('Name')) i++;

            while (i < lines.length) {
                const argLine = lines[i].trim();
                if (!argLine || argLine === 'Query') break;

                const parts = lines[i].split('\t').filter(p => p.trim());
                if (parts.length >= 1) {
                    const argParts = parts[0].trim().split(' - ');
                    result.arguments.push({
                        name: argParts[0]?.trim() || '',
                        type: argParts[1]?.trim() || '',
                        description: parts.slice(1).join(' ').trim()
                    });
                }
                i++;
            }
            continue;
        }

        if (trimmed === 'Query') {
            i++;
            let queryLines = [];
            while (i < lines.length && lines[i].trim() !== 'Variables') {
                queryLines.push(lines[i]);
                i++;
            }
            result.graphql = queryLines.join('\n').trim();
            continue;
        }

        if (trimmed === 'Variables') {
            i++;
            let varLines = [];
            while (i < lines.length && lines[i].trim() !== 'Response') {
                varLines.push(lines[i]);
                i++;
            }
            const varStr = varLines.join('\n').trim();
            try {
                result.variables = JSON.parse(varStr);
            } catch {
                result.variables = varStr;
            }
            continue;
        }

        if (trimmed === 'Response' && result.graphql) {
            i++;
            let respLines = [];
            while (i < lines.length) {
                respLines.push(lines[i]);
                i++;
            }
            const respStr = respLines.join('\n').trim();
            try {
                result.exampleResponse = JSON.parse(respStr);
            } catch {
                result.exampleResponse = respStr;
            }
            continue;
        }

        i++;
    }

    return result;
}

// Parse type content into structured JSON
function parseType(rawContent, name) {
    const lines = rawContent.split('\n');
    const result = {
        name,
        type: 'type',
        kind: 'object',
        description: '',
        fields: [],
        example: null
    };

    let i = 0;

    // First non-empty line is description
    while (i < lines.length && !lines[i].trim()) i++;
    if (i < lines.length) {
        const firstLine = lines[i].trim();
        if (!['Field Name', 'Enum Value', 'Input Field', 'Example'].some(h => firstLine.startsWith(h))) {
            result.description = firstLine;
            i++;
        }
    }

    while (i < lines.length) {
        const trimmed = lines[i].trim();

        // Detect type kind and parse fields
        if (trimmed.startsWith('Field Name')) {
            result.kind = 'object';
            i++;
            while (i < lines.length) {
                const fieldLine = lines[i].trim();
                if (fieldLine === 'Example' || fieldLine === 'Arguments' || !fieldLine) {
                    if (!fieldLine) { i++; continue; }
                    break;
                }
                const parts = lines[i].split('\t');
                if (parts[0]?.trim()) {
                    const fieldParts = parts[0].trim().split(' - ');
                    result.fields.push({
                        name: fieldParts[0]?.trim() || '',
                        type: fieldParts[1]?.trim() || '',
                        description: parts.slice(1).join(' ').trim()
                    });
                }
                i++;
            }
            continue;
        }

        if (trimmed.startsWith('Enum Value')) {
            result.kind = 'enum';
            i++;
            while (i < lines.length) {
                const enumLine = lines[i].trim();
                if (enumLine === 'Example') break;
                if (!enumLine) { i++; continue; }

                if (enumLine.match(/^[A-Z][A-Z0-9_]*$/)) {
                    const valueName = enumLine;
                    i++;
                    while (i < lines.length && !lines[i].trim()) i++;
                    let desc = '';
                    if (i < lines.length && lines[i].trim() !== 'Example' && !lines[i].trim().match(/^[A-Z][A-Z0-9_]*$/)) {
                        desc = lines[i].trim();
                        i++;
                    }
                    result.fields.push({
                        name: valueName,
                        description: desc
                    });
                } else {
                    i++;
                }
            }
            continue;
        }

        if (trimmed.startsWith('Input Field')) {
            result.kind = 'input';
            i++;
            while (i < lines.length) {
                const fieldLine = lines[i].trim();
                if (fieldLine === 'Example') break;
                if (!fieldLine) { i++; continue; }

                const parts = lines[i].split('\t');
                if (parts[0]?.trim()) {
                    const fieldParts = parts[0].trim().split(' - ');
                    let desc = parts.slice(1).join(' ').trim();
                    i++;
                    if (i < lines.length && lines[i].trim() && !lines[i].includes(' - ') && lines[i].trim() !== 'Example') {
                        desc = lines[i].trim();
                        i++;
                    }
                    result.fields.push({
                        name: fieldParts[0]?.trim() || '',
                        type: fieldParts[1]?.trim() || '',
                        description: desc
                    });
                    continue;
                }
                i++;
            }
            continue;
        }

        if (trimmed === 'Example') {
            i++;
            let exampleLines = [];
            while (i < lines.length) {
                exampleLines.push(lines[i]);
                i++;
            }
            const exStr = exampleLines.join('\n').trim();
            try {
                result.example = JSON.parse(exStr);
            } catch {
                result.example = exStr;
            }
            continue;
        }

        i++;
    }

    if (result.fields.length === 0 && result.kind === 'object') {
        result.kind = 'scalar';
    }

    return result;
}

// Process all items
const counts = { queries: 0, mutations: 0, types: 0 };
const allItems = { queries: [], mutations: [], types: [] };

for (const item of items) {
    let parsed;
    if (item.category === 'queries' || item.category === 'mutations') {
        parsed = parseOperation(item.rawContent, item.name, item.category);
    } else {
        parsed = parseType(item.rawContent, item.name);
    }

    allItems[item.category].push(parsed);
    counts[item.category]++;
}

// Create combined index file
const index = {
    meta: {
        title: PRODUCT_TITLE,
        endpoints: ENDPOINTS,
        totalQueries: counts.queries,
        totalMutations: counts.mutations,
        totalTypes: counts.types
    },
    queries: allItems.queries,
    mutations: allItems.mutations,
    types: allItems.types
};

await writeFile(`${OUTPUT_BASE}/api-index.json`, JSON.stringify(index, null, 2));
console.log(`Created: ${OUTPUT_BASE}/api-index.json`);

console.log(`\nSplit complete for ${PRODUCT_TITLE}!`);
console.log(`  Queries:   ${counts.queries}`);
console.log(`  Mutations: ${counts.mutations}`);
console.log(`  Types:     ${counts.types}`);
console.log(`  Total:     ${counts.queries + counts.mutations + counts.types}`);
