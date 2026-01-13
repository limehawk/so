# SuperOps IT Teams MCP Server

An MCP (Model Context Protocol) server that provides AI assistants with access to the SuperOps IT Teams GraphQL API documentation.

## What is SuperOps IT Teams?

SuperOps IT Teams is for **internal IT departments** - IT teams within a single organization. Key concepts:

- **Single-tenant**: One company, one IT department
- **Department-based**: Data organized by Department → Assets/Tickets
- **Internal focus**: Service desk for employees, not external clients

## Installation

```bash
npx superops-it
```

Or install globally:

```bash
npm install -g superops-it
```

## Configuration

### Claude Code

```bash
claude mcp add superops-it -- npx -y superops-it
```

Or add to `~/.claude/settings.json`:

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

### Claude Desktop

Add to `~/Library/Application Support/Claude/claude_desktop_config.json` (macOS):

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

## Available Tools

### `search_superops_api`

Search the API documentation for queries, mutations, and types.

```
search_superops_api({ query: "ticket" })
```

### `get_superops_operation`

Get full details of a specific query or mutation.

```
get_superops_operation({ name: "getTicket" })
get_superops_operation({ name: "getAsset" })
```

### `get_superops_type`

Get full details of a type definition.

```
get_superops_type({ name: "Ticket" })
get_superops_type({ name: "Department" })
```

### `list_superops_operations`

List all available operations.

```
list_superops_operations({ type: "queries" })
list_superops_operations({ type: "mutations" })
list_superops_operations({ type: "all" })
```

## API Endpoints

- **US**: `https://api.superops.ai/it`
- **EU**: `https://euapi.superops.ai/it`

## Example Usage

Once configured, ask Claude:

- "How do I create a ticket in SuperOps?"
- "What fields are available on the Asset type?"
- "Search for department-related operations"
- "Show me how to update a user"

## Related

- [superops-msp](https://npmjs.com/package/superops-msp) - For SuperOps MSP (managed service providers)

## License

MIT
