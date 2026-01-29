# SuperOps MCP Servers

MCP (Model Context Protocol) servers for SuperOps API documentation. Enables AI assistants like Claude to search and query SuperOps APIs.

## Which Package Do You Need?

SuperOps offers two products with separate APIs:

| Package | Product | For | npm |
|---------|---------|-----|-----|
| `superops-msp` | SuperOps MSP | Managed Service Providers (IT companies serving multiple clients) | [![npm](https://img.shields.io/npm/v/superops-msp)](https://npmjs.com/package/superops-msp) |
| `superops-it` | SuperOps IT Teams | Internal IT Departments (single company) | [![npm](https://img.shields.io/npm/v/superops-it)](https://npmjs.com/package/superops-it) |

### SuperOps MSP

For **Managed Service Providers** - IT companies that manage technology for multiple businesses.

- Multi-tenant (one MSP, many clients)
- Client → Site → Assets/Tickets hierarchy
- Billing and invoicing features
- **Install**: `bunx superops-msp@latest` or `npx superops-msp@latest`

### SuperOps IT Teams

For **Internal IT Departments** - IT teams within a single organization.

- Single-tenant (one company)
- Department → Assets/Tickets hierarchy
- Internal service desk focus
- **Install**: `bunx superops-it@latest` or `npx superops-it@latest`

## Quick Start

We recommend using [bun](https://bun.sh) for faster startup times - MCP servers start on every request, so speed matters.

**For MSP Users:**

```bash
claude mcp add superops-msp \
  -e SUPEROPS_API_KEY=your-api-key \
  -e SUPEROPS_SUBDOMAIN=your-subdomain \
  -- bunx superops-msp@latest
```

**For IT Teams Users:**

```bash
claude mcp add superops-it \
  -e SUPEROPS_API_KEY=your-api-key \
  -e SUPEROPS_SUBDOMAIN=your-subdomain \
  -- bunx superops-it@latest
```

Get your API key from **SuperOps Admin > API Settings**. Your subdomain is the prefix from your SuperOps URL (e.g., `acme` from `acme.superops.ai`).

See the package READMEs for full configuration options:
- [superops-msp README](./packages/msp/README.md)
- [superops-it README](./packages/it/README.md)

## Available Tools

### SuperOps MSP (84 tools)

The MSP package includes comprehensive tools for:

| Category | Tools | Description |
|----------|-------|-------------|
| Tickets | 19 | Create, update, reply, assign, close tickets |
| Assets | 14 | View assets, software, patches, run scripts |
| Clients | 11 | Manage clients, contacts, sites |
| Alerts | 4 | View and resolve RMM alerts |
| Worklogs | 4 | Track time against tickets |
| Knowledge Base | 6 | Manage KB articles and collections |
| Scripts | 8 | Discover and execute scripts on assets |
| Lookups | 13 | Get valid values for statuses, priorities, etc. |
| API Docs | 5 | Search and explore the raw GraphQL API |

See the [MSP README](./packages/msp/README.md) for the full tool list.

### SuperOps IT Teams (5 tools)

The IT package provides API documentation tools:

| Tool | Description |
|------|-------------|
| `search_superops_api` | Search queries, mutations, and types |
| `get_superops_operation` | Get full details of a query or mutation |
| `get_superops_type` | Get type definitions with all fields |
| `list_superops_operations` | List all available operations |
| `execute_graphql` | Execute a GraphQL query or mutation |

See the [IT README](./packages/it/README.md) for details.

## API Endpoints

| Product | US | EU |
|---------|----|----|
| MSP | `https://api.superops.ai/msp` | `https://euapi.superops.ai/msp` |
| IT Teams | `https://api.superops.ai/it` | `https://euapi.superops.ai/it` |

## Repository Structure

```
superops-mcp/
├── packages/
│   ├── msp/          # superops-msp npm package
│   └── it/           # superops-it npm package
├── scripts/          # Documentation build scripts
└── source-docs/      # Raw API documentation
```

## License

GPL-3.0
