/**
 * SuperOps MCP Script Tools
 *
 * Tools for discovering, searching, and executing scripts on assets.
 * Includes tools for viewing script execution history.
 */

// Available script tags for filtering
const SCRIPT_TAGS = [
  'Administration',
  'Applications',
  'Antivirus',
  'Backup',
  'Cleanup',
  'Disk',
  'Linux',
  'Logs',
  'Maintenance',
  'Monitoring',
  'Network',
  'Patch',
  'Security',
  'Services',
  'Software',
  'Windows'
];

// Valid OS types for filtering
const OS_TYPES = ['WINDOWS', 'MAC', 'LINUX'];

// Common script languages
const SCRIPT_LANGUAGES = ['PowerShell', 'Bash', 'Python', 'Batch'];

// GraphQL fragment for script fields
const SCRIPT_FIELDS = `
  scriptId
  name
  description
  language
  runAs
  runTimeVariables
  timeOut
  tags
  favourite
  readMe
  addedBy
  createdTime
`;

// GraphQL fragment for activity fields
const ACTIVITY_FIELDS = `
  activityId
  module
  activityType
  activityData
  createdBy
  createdTime
`;

/**
 * Tool definitions for script operations
 */
export const scriptTools = [
  {
    name: 'list_scripts',
    description: `List all scripts with metadata. Returns script name, description, language, tags, and runtime variables.

Use this to browse available scripts before running them on assets.`,
    inputSchema: {
      type: 'object',
      properties: {
        page: {
          type: 'integer',
          description: 'Page number for pagination (default: 1)',
          minimum: 1
        },
        pageSize: {
          type: 'integer',
          description: 'Number of scripts per page (default: 25, max: 100)',
          minimum: 1,
          maximum: 100
        },
        favouritesOnly: {
          type: 'boolean',
          description: 'Only return scripts marked as favourites'
        }
      }
    }
  },
  {
    name: 'list_scripts_by_os',
    description: `List scripts available for a specific operating system.

Valid OS types: ${OS_TYPES.join(', ')}`,
    inputSchema: {
      type: 'object',
      properties: {
        os: {
          type: 'string',
          enum: OS_TYPES,
          description: 'Operating system type'
        },
        page: {
          type: 'integer',
          description: 'Page number for pagination (default: 1)',
          minimum: 1
        },
        pageSize: {
          type: 'integer',
          description: 'Number of scripts per page (default: 25, max: 100)',
          minimum: 1,
          maximum: 100
        }
      },
      required: ['os']
    }
  },
  {
    name: 'list_scripts_by_language',
    description: `List scripts written in a specific language.

Common languages: ${SCRIPT_LANGUAGES.join(', ')}`,
    inputSchema: {
      type: 'object',
      properties: {
        language: {
          type: 'string',
          description: 'Script language (e.g., PowerShell, Bash, Python)'
        },
        page: {
          type: 'integer',
          description: 'Page number for pagination (default: 1)',
          minimum: 1
        },
        pageSize: {
          type: 'integer',
          description: 'Number of scripts per page (default: 25, max: 100)',
          minimum: 1,
          maximum: 100
        }
      },
      required: ['language']
    }
  },
  {
    name: 'list_scripts_by_tag',
    description: `List scripts with a specific tag/category.

Available tags: ${SCRIPT_TAGS.join(', ')}`,
    inputSchema: {
      type: 'object',
      properties: {
        tag: {
          type: 'string',
          enum: SCRIPT_TAGS,
          description: 'Script tag/category'
        },
        page: {
          type: 'integer',
          description: 'Page number for pagination (default: 1)',
          minimum: 1
        },
        pageSize: {
          type: 'integer',
          description: 'Number of scripts per page (default: 25, max: 100)',
          minimum: 1,
          maximum: 100
        }
      },
      required: ['tag']
    }
  },
  {
    name: 'search_scripts',
    description: `Search scripts by name or description.

Returns scripts matching the search term in their name or description.`,
    inputSchema: {
      type: 'object',
      properties: {
        query: {
          type: 'string',
          description: 'Search term to match against script name or description'
        },
        page: {
          type: 'integer',
          description: 'Page number for pagination (default: 1)',
          minimum: 1
        },
        pageSize: {
          type: 'integer',
          description: 'Number of scripts per page (default: 25, max: 100)',
          minimum: 1,
          maximum: 100
        }
      },
      required: ['query']
    }
  },
  {
    name: 'get_script',
    description: `Get full details of a specific script by ID.

Returns complete script information including readme documentation and runtime variables.`,
    inputSchema: {
      type: 'object',
      properties: {
        scriptId: {
          type: 'string',
          description: 'The unique ID of the script'
        }
      },
      required: ['scriptId']
    }
  },
  {
    name: 'run_script',
    description: `Run a script on an asset.

IMPORTANT: Script output (stdout/stderr) is NOT available via the API - only execution metadata is returned. Check the SuperOps UI for actual script output.

Runtime arguments can be passed as key-value pairs if the script requires them.`,
    inputSchema: {
      type: 'object',
      properties: {
        assetId: {
          type: 'string',
          description: 'The ID of the asset to run the script on'
        },
        scriptId: {
          type: 'string',
          description: 'The ID of the script to run'
        },
        arguments: {
          type: 'object',
          description: 'Runtime arguments as key-value pairs (e.g., {"appName": "MyApp", "url": "https://example.com"})',
          additionalProperties: {
            type: 'string'
          }
        }
      },
      required: ['assetId', 'scriptId']
    }
  },
  {
    name: 'get_script_runs',
    description: `Get recent script executions on an asset.

Returns script execution history including script name, status, and who triggered it.

NOTE: Script output/stdout is NOT available via the API - only execution metadata.`,
    inputSchema: {
      type: 'object',
      properties: {
        assetId: {
          type: 'string',
          description: 'The ID of the asset'
        },
        page: {
          type: 'integer',
          description: 'Page number for pagination (default: 1)',
          minimum: 1
        },
        pageSize: {
          type: 'integer',
          description: 'Number of records per page (default: 25, max: 100)',
          minimum: 1,
          maximum: 100
        }
      },
      required: ['assetId']
    }
  }
];

/**
 * Check if a tool name belongs to the script tools module
 */
export function isScriptTool(name) {
  return scriptTools.some(t => t.name === name);
}

/**
 * Format a script object for human-readable output
 */
function formatScript(script, includeReadme = false) {
  const formatted = {
    scriptId: script.scriptId,
    name: script.name,
    description: script.description || '(no description)',
    language: script.language,
    runAs: script.runAs,
    timeout: script.timeOut ? `${script.timeOut} seconds` : 'default',
    favourite: script.favourite || false
  };

  if (script.runTimeVariables?.length > 0) {
    formatted.runtimeVariables = script.runTimeVariables;
  }

  if (script.tags?.length > 0) {
    formatted.tags = script.tags;
  }

  if (script.addedBy) {
    formatted.addedBy = script.addedBy.name || script.addedBy;
  }

  if (script.createdTime) {
    formatted.createdTime = script.createdTime;
  }

  if (includeReadme && script.readMe) {
    formatted.readme = script.readMe;
  }

  return formatted;
}

/**
 * Format script execution activity for human-readable output
 */
function formatScriptActivity(activity) {
  const data = activity.activityData || {};
  return {
    activityId: activity.activityId,
    scriptId: data.scriptId,
    scriptName: data.name,
    status: data.status,
    activityType: activity.activityType,
    triggeredBy: activity.createdBy?.name || activity.createdBy,
    timestamp: activity.createdTime
  };
}

/**
 * Build ListInfoInput for pagination and filtering
 */
function buildListInfo(args, condition = null) {
  const listInfo = {
    page: args.page || 1,
    pageSize: Math.min(args.pageSize || 25, 100)
  };

  if (condition) {
    listInfo.condition = condition;
  }

  return listInfo;
}

/**
 * Handle script tool calls
 */
export async function handleScriptTool(name, args, client) {
  switch (name) {
    case 'list_scripts': {
      let condition = null;
      if (args.favouritesOnly) {
        condition = {
          attribute: 'favourite',
          operator: 'is',
          value: true
        };
      }

      const query = `
        query getScriptList($input: ListInfoInput!) {
          getScriptList(input: $input) {
            scripts {
              ${SCRIPT_FIELDS}
            }
            listInfo {
              totalCount
              page
              pageSize
            }
          }
        }
      `;

      const result = await client.execute(query, {
        input: buildListInfo(args, condition)
      });

      const scripts = result.getScriptList.scripts || [];
      const listInfo = result.getScriptList.listInfo || {};

      return {
        content: [{
          type: 'text',
          text: JSON.stringify({
            scripts: scripts.map(s => formatScript(s)),
            pagination: {
              page: listInfo.page,
              pageSize: listInfo.pageSize,
              totalCount: listInfo.totalCount
            }
          }, null, 2)
        }]
      };
    }

    case 'list_scripts_by_os': {
      const query = `
        query getScriptListByType($input: ScriptListByTypeInput!) {
          getScriptListByType(input: $input) {
            scripts {
              ${SCRIPT_FIELDS}
            }
            listInfo {
              totalCount
              page
              pageSize
            }
          }
        }
      `;

      const result = await client.execute(query, {
        input: {
          type: args.os.toUpperCase(),
          listInfo: buildListInfo(args)
        }
      });

      const scripts = result.getScriptListByType.scripts || [];
      const listInfo = result.getScriptListByType.listInfo || {};

      return {
        content: [{
          type: 'text',
          text: JSON.stringify({
            os: args.os.toUpperCase(),
            scripts: scripts.map(s => formatScript(s)),
            pagination: {
              page: listInfo.page,
              pageSize: listInfo.pageSize,
              totalCount: listInfo.totalCount
            }
          }, null, 2)
        }]
      };
    }

    case 'list_scripts_by_language': {
      const condition = {
        attribute: 'language',
        operator: 'is',
        value: args.language
      };

      const query = `
        query getScriptList($input: ListInfoInput!) {
          getScriptList(input: $input) {
            scripts {
              ${SCRIPT_FIELDS}
            }
            listInfo {
              totalCount
              page
              pageSize
            }
          }
        }
      `;

      const result = await client.execute(query, {
        input: buildListInfo(args, condition)
      });

      const scripts = result.getScriptList.scripts || [];
      const listInfo = result.getScriptList.listInfo || {};

      return {
        content: [{
          type: 'text',
          text: JSON.stringify({
            language: args.language,
            scripts: scripts.map(s => formatScript(s)),
            pagination: {
              page: listInfo.page,
              pageSize: listInfo.pageSize,
              totalCount: listInfo.totalCount
            }
          }, null, 2)
        }]
      };
    }

    case 'list_scripts_by_tag': {
      const condition = {
        attribute: 'tags',
        operator: 'includes',
        value: [args.tag]
      };

      const query = `
        query getScriptList($input: ListInfoInput!) {
          getScriptList(input: $input) {
            scripts {
              ${SCRIPT_FIELDS}
            }
            listInfo {
              totalCount
              page
              pageSize
            }
          }
        }
      `;

      const result = await client.execute(query, {
        input: buildListInfo(args, condition)
      });

      const scripts = result.getScriptList.scripts || [];
      const listInfo = result.getScriptList.listInfo || {};

      return {
        content: [{
          type: 'text',
          text: JSON.stringify({
            tag: args.tag,
            scripts: scripts.map(s => formatScript(s)),
            pagination: {
              page: listInfo.page,
              pageSize: listInfo.pageSize,
              totalCount: listInfo.totalCount
            }
          }, null, 2)
        }]
      };
    }

    case 'search_scripts': {
      const condition = {
        attribute: 'name',
        operator: 'contains',
        value: args.query
      };

      const query = `
        query getScriptList($input: ListInfoInput!) {
          getScriptList(input: $input) {
            scripts {
              ${SCRIPT_FIELDS}
            }
            listInfo {
              totalCount
              page
              pageSize
            }
          }
        }
      `;

      const result = await client.execute(query, {
        input: buildListInfo(args, condition)
      });

      const scripts = result.getScriptList.scripts || [];
      const listInfo = result.getScriptList.listInfo || {};

      return {
        content: [{
          type: 'text',
          text: JSON.stringify({
            query: args.query,
            scripts: scripts.map(s => formatScript(s)),
            pagination: {
              page: listInfo.page,
              pageSize: listInfo.pageSize,
              totalCount: listInfo.totalCount
            }
          }, null, 2)
        }]
      };
    }

    case 'get_script': {
      const condition = {
        attribute: 'scriptId',
        operator: 'is',
        value: args.scriptId
      };

      const query = `
        query getScriptList($input: ListInfoInput!) {
          getScriptList(input: $input) {
            scripts {
              ${SCRIPT_FIELDS}
            }
          }
        }
      `;

      const result = await client.execute(query, {
        input: {
          page: 1,
          pageSize: 1,
          condition
        }
      });

      const scripts = result.getScriptList.scripts || [];

      if (scripts.length === 0) {
        return {
          content: [{
            type: 'text',
            text: `Script with ID "${args.scriptId}" not found.`
          }],
          isError: true
        };
      }

      return {
        content: [{
          type: 'text',
          text: JSON.stringify(formatScript(scripts[0], true), null, 2)
        }]
      };
    }

    case 'run_script': {
      const mutation = `
        mutation runScriptOnAsset($input: RunScriptInput!) {
          runScriptOnAsset(input: $input) {
            actionConfigId
            script
            scriptArguments
            addedBy
          }
        }
      `;

      // Convert arguments object to array format expected by API
      let scriptArguments = null;
      if (args.arguments && Object.keys(args.arguments).length > 0) {
        scriptArguments = Object.entries(args.arguments).map(([name, value]) => ({
          name,
          value: String(value)
        }));
      }

      const input = {
        assetId: args.assetId,
        scriptId: args.scriptId
      };

      if (scriptArguments) {
        input.scriptArguments = scriptArguments;
      }

      const result = await client.execute(mutation, { input });

      const data = result.runScriptOnAsset;

      return {
        content: [{
          type: 'text',
          text: JSON.stringify({
            success: true,
            message: 'Script execution initiated. Note: Script output is only visible in the SuperOps UI.',
            actionConfigId: data.actionConfigId,
            script: data.script,
            arguments: data.scriptArguments,
            initiatedBy: data.addedBy?.name || data.addedBy
          }, null, 2)
        }]
      };
    }

    case 'get_script_runs': {
      const condition = {
        attribute: 'module',
        operator: 'is',
        value: 'SCRIPT'
      };

      const query = `
        query getAssetActivity($input: AssetDetailsListInput!) {
          getAssetActivity(input: $input) {
            activities {
              ${ACTIVITY_FIELDS}
            }
            listInfo {
              totalCount
              page
              pageSize
            }
          }
        }
      `;

      const result = await client.execute(query, {
        input: {
          assetId: args.assetId,
          listInfo: buildListInfo(args, condition)
        }
      });

      const activities = result.getAssetActivity.activities || [];
      const listInfo = result.getAssetActivity.listInfo || {};

      return {
        content: [{
          type: 'text',
          text: JSON.stringify({
            assetId: args.assetId,
            note: 'Script output/stdout is NOT available via the API - only execution metadata.',
            scriptRuns: activities.map(a => formatScriptActivity(a)),
            pagination: {
              page: listInfo.page,
              pageSize: listInfo.pageSize,
              totalCount: listInfo.totalCount
            }
          }, null, 2)
        }]
      };
    }

    default:
      return {
        content: [{
          type: 'text',
          text: `Unknown script tool: ${name}`
        }],
        isError: true
      };
  }
}
