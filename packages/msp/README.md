# SuperOps MSP MCP Server

An MCP (Model Context Protocol) server that provides AI assistants with access to the SuperOps MSP GraphQL API documentation.

## What is SuperOps MSP?

SuperOps MSP is for **Managed Service Providers** - IT companies that manage technology for multiple client businesses. Key concepts:

- **Multi-tenant**: One MSP serves many clients
- **Client-based**: Data organized by Client → Site → Assets/Tickets
- **Billing included**: Invoice and billing features for client management

## Installation

```bash
npx superops-msp
```

Or install globally:

```bash
npm install -g superops-msp
```

## Configuration

### Claude Code

```bash
claude mcp add superops-msp -- npx -y superops-msp
```

<details>
<summary>Or manually add to settings</summary>

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

### Claude Desktop

Add to `~/Library/Application Support/Claude/claude_desktop_config.json` (macOS):

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
get_superops_operation({ name: "createClient" })
```

### `get_superops_type`

Get full details of a type definition.

```
get_superops_type({ name: "Ticket" })
get_superops_type({ name: "Client" })
```

### `list_superops_operations`

List all available operations.

```
list_superops_operations({ type: "queries" })
list_superops_operations({ type: "mutations" })
list_superops_operations({ type: "all" })
```

## API Endpoints

- **US**: `https://api.superops.ai/msp`
- **EU**: `https://euapi.superops.ai/msp`

## Example Usage

Once configured, ask Claude:

- "How do I create a ticket in SuperOps?"
- "What fields are available on the Client type?"
- "Search for invoice-related operations"
- "Show me how to update an asset"

## Related

- [superops-it](https://npmjs.com/package/superops-it) - For SuperOps IT Teams (internal IT departments)

## License

MIT
