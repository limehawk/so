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
- **Install**: `bunx superops-msp` or `npx superops-msp`

### SuperOps IT Teams

For **Internal IT Departments** - IT teams within a single organization.

- Single-tenant (one company)
- Department → Assets/Tickets hierarchy
- Internal service desk focus
- **Install**: `bunx superops-it` or `npx superops-it`

## Quick Start

We recommend using [bun](https://bun.sh) for faster startup times - MCP servers start on every request, so speed matters.

### 1. Add the MCP Server

**For MSP Users:**

```bash
claude mcp add superops-msp -- bunx superops-msp@latest
```

**For IT Teams Users:**

```bash
claude mcp add superops-it -- bunx superops-it@latest
```

### 2. Configure Environment (for API execution)

Create a `.env` file in your working directory:

```bash
SUPEROPS_API_KEY=your-api-key
SUPEROPS_SUBDOMAIN=your-subdomain
```

Get your API key from **SuperOps Admin > API Settings**. Your subdomain is the prefix from your SuperOps URL (e.g., `acme` from `acme.superops.ai`).

See the package READMEs for full configuration options:
- [superops-msp README](./packages/msp/README.md)
- [superops-it README](./packages/it/README.md)

## Available Tools

Both packages provide these tools:

| Tool | Description |
|------|-------------|
| `search_superops_api` | Search queries, mutations, and types |
| `get_superops_operation` | Get full details of a query or mutation |
| `get_superops_type` | Get type definitions with all fields |
| `list_superops_operations` | List all available operations |
| `execute_graphql` | Execute a GraphQL query or mutation (requires API key) |

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

MIT
