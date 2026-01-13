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
- **Install**: `npx superops-msp`

### SuperOps IT Teams

For **Internal IT Departments** - IT teams within a single organization.

- Single-tenant (one company)
- Department → Assets/Tickets hierarchy
- Internal service desk focus
- **Install**: `npx superops-it`

## Quick Start

### For MSP Users

```bash
claude mcp add superops-msp -- npx -y superops-msp
```

<details>
<summary>Or manually add to Claude Code settings</summary>

Add to `~/.claude/settings.json`:

```json
{
  "mcpServers": {
    "superops-msp": {
      "command": "npx",
      "args": ["-y", "superops-msp"]
    }
  }
}
```
</details>

### For IT Teams Users

```bash
claude mcp add superops-it -- npx -y superops-it
```

<details>
<summary>Or manually add to Claude Code settings</summary>

Add to `~/.claude/settings.json`:

```json
{
  "mcpServers": {
    "superops-it": {
      "command": "npx",
      "args": ["-y", "superops-it"]
    }
  }
}
```
</details>

## Available Tools

Both packages provide these tools:

| Tool | Description |
|------|-------------|
| `search_superops_api` | Search queries, mutations, and types |
| `get_superops_operation` | Get full details of a query or mutation |
| `get_superops_type` | Get type definitions with all fields |
| `list_superops_operations` | List all available operations |

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
