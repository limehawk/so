# SuperOps MSP MCP Server

An MCP (Model Context Protocol) server that provides AI assistants with access to the SuperOps MSP GraphQL API documentation.

## What is SuperOps MSP?

SuperOps MSP is for **Managed Service Providers** - IT companies that manage technology for multiple client businesses. Key concepts:

- **Multi-tenant**: One MSP serves many clients
- **Client-based**: Data organized by Client → Site → Assets/Tickets
- **Billing included**: Invoice and billing features for client management

## Installation

We recommend using [bun](https://bun.sh) for faster startup times - MCP servers start on every request, so speed matters.

```bash
bunx superops-msp@latest
```

Or with npx:

```bash
npx superops-msp@latest
```

Or install globally:

```bash
bun install -g superops-msp@latest
```

```bash
npm install -g superops-msp@latest
```

## Configuration

### Claude Code

```bash
claude mcp add superops-msp \
  -e SUPEROPS_API_KEY=your-api-key \
  -e SUPEROPS_SUBDOMAIN=your-subdomain \
  -- bunx superops-msp@latest
```

#### Installation Scopes

MCP servers can be configured at three different scopes:

**Local scope** (default) - Private to you, only accessible in the current project:
```bash
claude mcp add superops-msp \
  -e SUPEROPS_API_KEY=your-api-key \
  -e SUPEROPS_SUBDOMAIN=your-subdomain \
  --scope local \
  -- bunx superops-msp@latest
```

**Project scope** - Shared with your team via `.mcp.json` (checked into version control):
```bash
claude mcp add superops-msp \
  -e SUPEROPS_API_KEY=your-api-key \
  -e SUPEROPS_SUBDOMAIN=your-subdomain \
  --scope project \
  -- bunx superops-msp@latest
```

**User scope** - Available across all your projects:
```bash
claude mcp add superops-msp \
  -e SUPEROPS_API_KEY=your-api-key \
  -e SUPEROPS_SUBDOMAIN=your-subdomain \
  --scope user \
  -- bunx superops-msp@latest
```

| Scope | Storage | Best For |
|-------|---------|----------|
| Local | `~/.claude.json` (project path) | Personal servers, sensitive credentials |
| Project | `.mcp.json` in project root | Team collaboration, shared tools |
| User | `~/.claude.json` (global) | Personal utilities across projects |

### Claude Desktop

Add to `~/Library/Application Support/Claude/claude_desktop_config.json` (macOS):

```json
{
  "mcpServers": {
    "superops-msp": {
      "command": "bunx",
      "args": ["superops-msp@latest"],
      "env": {
        "SUPEROPS_API_KEY": "your-api-key",
        "SUPEROPS_SUBDOMAIN": "your-subdomain"
      }
    }
  }
}
```

### Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `SUPEROPS_API_KEY` | Yes | Your SuperOps API key |
| `SUPEROPS_SUBDOMAIN` | Yes | Your subdomain (e.g., `acme` from `acme.superops.ai`) |
| `SUPEROPS_REGION` | No | `us` (default) or `eu` |
| `SUPEROPS_TIMEOUT` | No | Request timeout in ms (default: 30000) |
| `SUPEROPS_READ_ONLY` | No | Set to `true` to block mutations |

Get your API key from **SuperOps Admin > API Settings**.

## Available Tools (84 total)

### Tickets (19 tools)

| Tool | Description |
|------|-------------|
| `get_ticket` | Get full details of a specific ticket |
| `get_open_tickets` | List open tickets with optional filters |
| `get_my_tickets` | Get tickets assigned to a technician |
| `get_new_tickets` | Get tickets created within the last N hours |
| `get_urgent_tickets` | Get high priority or SLA-violated tickets |
| `get_tickets_by_client` | Get all tickets for a specific client |
| `get_ticket_conversation` | Get the full conversation thread |
| `get_ticket_notes` | Get internal notes on a ticket |
| `create_ticket` | Create a new ticket |
| `reply_to_ticket` | Send a reply to the requester |
| `add_ticket_note` | Add an internal or public note |
| `update_ticket_status` | Change ticket status |
| `update_ticket_priority` | Change ticket priority |
| `update_ticket_category` | Change ticket category/subcategory |
| `assign_ticket` | Assign to technician and/or group |
| `change_ticket_requester` | Change who the ticket is for |
| `add_ticket_follower` | Add a technician as follower |
| `close_ticket` | Close with optional resolution code |
| `delete_ticket` | Soft delete (trash) a ticket |

### Assets (14 tools)

| Tool | Description |
|------|-------------|
| `get_asset` | Get full details of an asset |
| `get_assets` | List assets with filters |
| `get_asset_summary` | Quick overview (CPU, memory, disk, network) |
| `get_asset_software` | List installed software |
| `get_asset_patches` | Patch status and details |
| `get_asset_disks` | Disk/partition details |
| `get_asset_activity` | Full activity log |
| `get_asset_script_history` | Script execution history |
| `get_asset_patch_history` | Patch operation history |
| `get_asset_user_log` | User login/logout history |
| `get_unmonitored_assets` | Assets not being monitored |
| `update_asset` | Update asset metadata |
| `assign_device_category` | Categorize assets |
| `delete_asset` | Remove an asset |

### Clients (11 tools)

| Tool | Description |
|------|-------------|
| `get_client` | Get full details of a client |
| `get_clients` | List all clients with filtering |
| `get_client_sites` | List sites/locations for a client |
| `get_client_users` | List contacts/users for a client |
| `get_client_contracts` | List contracts for a client |
| `create_client` | Create a new client with HQ site |
| `create_client_user` | Add a contact to a client |
| `create_client_site` | Add a site to a client |
| `update_client` | Update client information |
| `update_client_user` | Update a client contact |
| `search_contacts` | Search contacts across all clients |

### Alerts (4 tools)

| Tool | Description |
|------|-------------|
| `get_alerts` | List all RMM alerts |
| `get_asset_alerts` | Get alerts for a specific asset |
| `resolve_alerts` | Mark alerts as resolved |
| `create_alert` | Create a manual alert on an asset |

### Worklogs (4 tools)

| Tool | Description |
|------|-------------|
| `get_worklogs` | Fetch worklog entries |
| `add_worklog` | Log time against a ticket |
| `update_worklog` | Edit a worklog entry |
| `delete_worklog` | Remove a worklog entry |

### Knowledge Base (6 tools)

| Tool | Description |
|------|-------------|
| `search_kb` | Search KB articles and collections |
| `get_kb_article` | Get full article details |
| `create_kb_article` | Create a new KB article |
| `update_kb_article` | Edit an existing article |
| `create_kb_collection` | Create a collection/folder |
| `delete_kb_article` | Remove an article |

### Scripts (8 tools)

| Tool | Description |
|------|-------------|
| `list_scripts` | List all scripts with metadata |
| `list_scripts_by_os` | List scripts for an OS (Windows/Mac/Linux) |
| `list_scripts_by_language` | List scripts by language (PowerShell/Bash/etc) |
| `list_scripts_by_tag` | List scripts by tag/category |
| `search_scripts` | Search scripts by name or description |
| `get_script` | Get full script details |
| `run_script` | Run a script on an asset |
| `get_script_runs` | Get script execution history |

### Lookups (13 tools)

| Tool | Description |
|------|-------------|
| `get_statuses` | Get valid ticket statuses |
| `get_priorities` | Get priority levels |
| `get_categories` | Get ticket categories/subcategories |
| `get_causes` | Get ticket causes/subcauses |
| `get_impacts` | Get impact levels |
| `get_urgencies` | Get urgency levels |
| `get_resolution_codes` | Get resolution codes |
| `get_slas` | Get available SLAs |
| `get_technicians` | Get list of technicians |
| `get_technician_groups` | Get technician groups |
| `get_teams` | Get teams |
| `get_device_categories` | Get device categories for assets |
| `get_client_stages` | Get client lifecycle stages |

### API Documentation (5 tools)

| Tool | Description |
|------|-------------|
| `search_superops_api` | Search queries, mutations, and types |
| `get_superops_operation` | Get full details of a query or mutation |
| `get_superops_type` | Get type definitions with all fields |
| `list_superops_operations` | List all available operations |
| `execute_graphql` | Execute a raw GraphQL query or mutation |

**API limits and notes:**
- Maximum 800 API requests per minute
- Date/time values must be in UTC timezone with ISO format (e.g., `2022-04-10T10:15:30`)
- Use `null` to clear/reset attribute values

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

GPL-3.0
