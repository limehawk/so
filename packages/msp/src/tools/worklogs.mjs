/**
 * Time Tracking / Worklog Tools for SuperOps MCP
 *
 * Provides tools for managing worklog entries:
 * - get_worklogs: Fetch worklog entries (by ticket, technician, date)
 * - add_worklog: Log time against a ticket
 * - update_worklog: Edit a worklog entry
 * - delete_worklog: Remove a worklog entry
 *
 * Knowledge Base Tools:
 * - search_kb: Search KB articles and collections
 * - get_kb_article: Get full article content
 * - create_kb_article: Create a new KB article
 * - update_kb_article: Edit an existing article
 * - create_kb_collection: Create a collection/folder
 * - delete_kb_article: Remove an article
 */

// ============================================================================
// Tool Definitions
// ============================================================================

export const worklogTools = [
  // Time Tracking / Worklogs (4 tools)
  {
    name: 'get_worklogs',
    description: `Fetch worklog entries from SuperOps. Filter by ticket ID, technician, or date range.

Examples:
- Get all worklogs for a ticket: { "ticketId": "123456" }
- Get worklogs by technician: { "technicianEmail": "tech@company.com" }
- Paginated results: { "ticketId": "123456", "page": 1, "pageSize": 20 }`,
    inputSchema: {
      type: 'object',
      properties: {
        ticketId: {
          type: 'string',
          description: 'Filter worklogs by ticket ID'
        },
        projectId: {
          type: 'string',
          description: 'Filter worklogs by project ID'
        },
        technicianEmail: {
          type: 'string',
          description: 'Filter worklogs by technician email'
        },
        module: {
          type: 'string',
          enum: ['TICKET', 'PROJECT'],
          description: 'Work module type (defaults to TICKET)'
        },
        page: {
          type: 'integer',
          description: 'Page number for pagination (default: 1)',
          minimum: 1
        },
        pageSize: {
          type: 'integer',
          description: 'Number of results per page (default: 50)',
          minimum: 1,
          maximum: 100
        }
      }
    }
  },
  {
    name: 'add_worklog',
    description: `Log time against a ticket or project.

Required fields:
- ticketId or projectId: The work item to log time against
- qty: Time quantity (e.g., "1.5" for 1.5 hours)
- billDateTime: When the work was performed (ISO 8601 format)

Examples:
- Log 2 hours: { "ticketId": "123", "qty": "2", "billDateTime": "2024-01-15T10:00:00" }
- With notes: { "ticketId": "123", "qty": "1.5", "billDateTime": "2024-01-15T10:00:00", "notes": "Fixed printer issue" }
- Billable time: { "ticketId": "123", "qty": "1", "billDateTime": "2024-01-15T10:00:00", "billable": true }`,
    inputSchema: {
      type: 'object',
      properties: {
        ticketId: {
          type: 'string',
          description: 'Ticket ID to log time against'
        },
        projectId: {
          type: 'string',
          description: 'Project ID to log time against (alternative to ticketId)'
        },
        qty: {
          type: 'string',
          description: 'Time quantity in hours (e.g., "1.5" for 1.5 hours)'
        },
        billDateTime: {
          type: 'string',
          description: 'When the work was performed (ISO 8601 format, e.g., "2024-01-15T10:00:00")'
        },
        notes: {
          type: 'string',
          description: 'Description of work performed'
        },
        billable: {
          type: 'boolean',
          description: 'Whether this time is billable (default: false)'
        },
        afterHours: {
          type: 'boolean',
          description: 'Whether work was performed after business hours (default: false)'
        },
        serviceItemId: {
          type: 'string',
          description: 'Service item ID for billing categorization'
        },
        unitPrice: {
          type: 'string',
          description: 'Unit price for billing'
        },
        technicianId: {
          type: 'string',
          description: 'Technician ID (defaults to API user)'
        }
      },
      required: ['qty', 'billDateTime']
    }
  },
  {
    name: 'update_worklog',
    description: `Edit an existing worklog entry.

Required: itemId (the worklog entry ID)
All other fields are optional - only provide fields you want to change.

Examples:
- Update time: { "itemId": "456", "qty": "2.5" }
- Update notes: { "itemId": "456", "notes": "Updated description of work" }
- Mark as billable: { "itemId": "456", "billable": true }`,
    inputSchema: {
      type: 'object',
      properties: {
        itemId: {
          type: 'string',
          description: 'Worklog entry ID to update'
        },
        qty: {
          type: 'string',
          description: 'Updated time quantity in hours'
        },
        billDateTime: {
          type: 'string',
          description: 'Updated datetime (ISO 8601 format)'
        },
        notes: {
          type: 'string',
          description: 'Updated notes/description'
        },
        billable: {
          type: 'boolean',
          description: 'Whether this time is billable'
        },
        afterHours: {
          type: 'boolean',
          description: 'Whether work was performed after business hours'
        },
        serviceItemId: {
          type: 'string',
          description: 'Updated service item ID'
        },
        unitPrice: {
          type: 'string',
          description: 'Updated unit price'
        }
      },
      required: ['itemId']
    }
  },
  {
    name: 'delete_worklog',
    description: `Remove a worklog entry.

Example: { "itemId": "456789" }`,
    inputSchema: {
      type: 'object',
      properties: {
        itemId: {
          type: 'string',
          description: 'Worklog entry ID to delete'
        }
      },
      required: ['itemId']
    }
  },

  // Knowledge Base (6 tools)
  {
    name: 'search_kb',
    description: `Search Knowledge Base articles and collections.

Examples:
- Search by name: { "search": "printer setup" }
- Filter by type: { "itemType": "KB_ARTICLE" }
- Filter by status: { "status": "PUBLISHED" }
- Paginated: { "search": "network", "page": 1, "pageSize": 20 }`,
    inputSchema: {
      type: 'object',
      properties: {
        search: {
          type: 'string',
          description: 'Search term to find in article/collection names'
        },
        itemType: {
          type: 'string',
          enum: ['KB_ARTICLE', 'KB_COLLECTION'],
          description: 'Filter by item type (article or collection)'
        },
        status: {
          type: 'string',
          enum: ['DRAFT', 'PUBLISHED'],
          description: 'Filter articles by status'
        },
        parentId: {
          type: 'string',
          description: 'Filter by parent collection ID'
        },
        page: {
          type: 'integer',
          description: 'Page number for pagination (default: 1)',
          minimum: 1
        },
        pageSize: {
          type: 'integer',
          description: 'Number of results per page (default: 50)',
          minimum: 1,
          maximum: 100
        }
      }
    }
  },
  {
    name: 'get_kb_article',
    description: `Get full details of a Knowledge Base article or collection by ID.

Example: { "itemId": "549210276118249300" }

Returns article metadata including title, status, content type, visibility settings, and parent collection.
Note: Article content (HTML body) must be downloaded separately via the SuperOps download API.`,
    inputSchema: {
      type: 'object',
      properties: {
        itemId: {
          type: 'string',
          description: 'KB item ID (article or collection)'
        }
      },
      required: ['itemId']
    }
  },
  {
    name: 'create_kb_article',
    description: `Create a new Knowledge Base article.

Required fields:
- name: Article title
- parentId: Parent collection ID
- content: HTML content of the article
- status: DRAFT or PUBLISHED

Visibility determines who can see the article. At minimum, specify portalType.

Examples:
- Simple article (visible to all requesters):
  {
    "name": "How to Reset Password",
    "parentId": "123456",
    "content": "<h1>Reset Password</h1><p>Follow these steps...</p>",
    "status": "DRAFT",
    "visibility": { "portalType": "REQUESTER", "clientSharedType": "AllClients" }
  }

- Published article for technicians:
  {
    "name": "Server Maintenance Guide",
    "parentId": "123456",
    "content": "<h1>Maintenance</h1><p>Steps...</p>",
    "status": "PUBLISHED",
    "visibility": { "portalType": "TECHNICIAN", "userSharedType": "AllUsers" }
  }`,
    inputSchema: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          description: 'Article title'
        },
        parentId: {
          type: 'string',
          description: 'Parent collection ID'
        },
        content: {
          type: 'string',
          description: 'HTML content of the article'
        },
        status: {
          type: 'string',
          enum: ['DRAFT', 'PUBLISHED'],
          description: 'Publication status'
        },
        visibility: {
          type: 'object',
          description: 'Sharing configuration',
          properties: {
            portalType: {
              type: 'string',
              enum: ['REQUESTER', 'TECHNICIAN'],
              description: 'Portal type for sharing'
            },
            clientSharedType: {
              type: 'string',
              enum: ['AllClients', 'Client'],
              description: 'Client sharing type (for REQUESTER portal)'
            },
            accountId: {
              type: 'string',
              description: 'Specific client ID (when clientSharedType is Client)'
            },
            siteSharedType: {
              type: 'string',
              enum: ['AllSites', 'Site'],
              description: 'Site sharing type (for REQUESTER portal)'
            },
            siteId: {
              type: 'string',
              description: 'Specific site ID (when siteSharedType is Site)'
            },
            userSharedType: {
              type: 'string',
              enum: ['AllUsers', 'User'],
              description: 'User sharing type (for TECHNICIAN portal)'
            },
            addedUserIds: {
              type: 'array',
              items: { type: 'string' },
              description: 'Specific technician user IDs (when userSharedType is User)'
            },
            groupSharedType: {
              type: 'string',
              enum: ['AllGroups', 'Group'],
              description: 'Group sharing type (for TECHNICIAN portal)'
            },
            addedGroupIds: {
              type: 'array',
              items: { type: 'string' },
              description: 'Specific group IDs (when groupSharedType is Group)'
            }
          }
        },
        loginRequired: {
          type: 'boolean',
          description: 'Whether login is required to view (default: true)'
        }
      },
      required: ['name', 'parentId', 'content', 'status', 'visibility']
    }
  },
  {
    name: 'update_kb_article',
    description: `Edit an existing Knowledge Base article.

Required: itemId
All other fields are optional - only provide fields you want to change.

Examples:
- Update title: { "itemId": "123", "name": "New Title" }
- Publish draft: { "itemId": "123", "status": "PUBLISHED" }
- Update content: { "itemId": "123", "content": "<h1>Updated</h1><p>New content...</p>" }
- Move to different collection: { "itemId": "123", "parentId": "456" }`,
    inputSchema: {
      type: 'object',
      properties: {
        itemId: {
          type: 'string',
          description: 'Article ID to update'
        },
        name: {
          type: 'string',
          description: 'Updated article title'
        },
        parentId: {
          type: 'string',
          description: 'New parent collection ID'
        },
        content: {
          type: 'string',
          description: 'Updated HTML content'
        },
        status: {
          type: 'string',
          enum: ['DRAFT', 'PUBLISHED'],
          description: 'Updated publication status'
        },
        loginRequired: {
          type: 'boolean',
          description: 'Whether login is required to view'
        },
        addVisibility: {
          type: 'array',
          description: 'New visibility rules to add',
          items: {
            type: 'object',
            properties: {
              portalType: { type: 'string', enum: ['REQUESTER', 'TECHNICIAN'] },
              clientSharedType: { type: 'string' },
              accountId: { type: 'string' },
              userSharedType: { type: 'string' },
              addedUserIds: { type: 'array', items: { type: 'string' } }
            }
          }
        },
        deleteVisibilityIds: {
          type: 'array',
          description: 'Visibility mapping IDs to remove',
          items: { type: 'string' }
        }
      },
      required: ['itemId']
    }
  },
  {
    name: 'create_kb_collection',
    description: `Create a new Knowledge Base collection (folder) to organize articles.

Examples:
- Root-level collection: { "name": "Network Troubleshooting" }
- Nested collection: { "name": "Printer Issues", "parentId": "123456" }`,
    inputSchema: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          description: 'Collection name'
        },
        parentId: {
          type: 'string',
          description: 'Parent collection ID (omit for root-level collection)'
        }
      },
      required: ['name']
    }
  },
  {
    name: 'delete_kb_article',
    description: `Remove a Knowledge Base article.

Example: { "itemId": "549210276118249300" }

Warning: This permanently deletes the article.`,
    inputSchema: {
      type: 'object',
      properties: {
        itemId: {
          type: 'string',
          description: 'Article ID to delete'
        }
      },
      required: ['itemId']
    }
  }
];

// ============================================================================
// GraphQL Queries and Mutations
// ============================================================================

const WORKLOG_FIELDS = `
  itemId
  status
  serviceItem
  billable
  afterHours
  qty
  unitPrice
  billDateTime
  technician
  notes
  workItem
`;

const KB_ITEM_FIELDS = `
  itemId
  name
  parent {
    itemId
    name
  }
  itemType
  description
  status
  createdBy
  createdOn
  lastModifiedBy
  lastModifiedOn
  viewCount
  articleType
  loginRequired
`;

const KB_ARTICLE_FIELDS = `
  itemId
  name
  parent {
    itemId
    name
  }
  description
  status
  createdBy
  createdOn
  lastModifiedBy
  lastModifiedOn
  viewCount
  articleType
  visibility {
    mappingId
    portalType
    clientSharedType
    siteSharedType
    userRoleSharedType
    userSharedType
    groupSharedType
  }
  loginRequired
`;

const KB_COLLECTION_FIELDS = `
  itemId
  name
  parent {
    itemId
    name
  }
`;

// ============================================================================
// Tool Handler
// ============================================================================

export async function handleWorklogTool(name, args, client) {
  switch (name) {
    // ========================================================================
    // Time Tracking / Worklogs
    // ========================================================================

    case 'get_worklogs': {
      const module = args.module || 'TICKET';
      const listInfo = {
        page: args.page || 1,
        pageSize: args.pageSize || 50
      };

      // Build condition if filtering
      if (args.ticketId) {
        listInfo.condition = {
          attribute: 'workItem.workId',
          operator: 'is',
          value: args.ticketId
        };
      } else if (args.projectId) {
        listInfo.condition = {
          attribute: 'workItem.workId',
          operator: 'is',
          value: args.projectId
        };
      } else if (args.technicianEmail) {
        listInfo.condition = {
          attribute: 'technician.email',
          operator: 'is',
          value: args.technicianEmail
        };
      }

      const query = `
        query getWorklogEntries($input: GetWorklogEntriesInput!) {
          getWorklogEntries(input: $input) {
            entries {
              ${WORKLOG_FIELDS}
            }
            listInfo {
              page
              pageSize
              totalCount
            }
          }
        }
      `;

      const result = await client.execute(query, {
        input: { module, listInfo }
      });

      return formatWorklogList(result.getWorklogEntries);
    }

    case 'add_worklog': {
      if (!args.ticketId && !args.projectId) {
        throw new Error('Either ticketId or projectId is required');
      }

      const workItem = {
        workId: args.ticketId || args.projectId,
        module: args.ticketId ? 'TICKET' : 'PROJECT'
      };

      const input = {
        workItem,
        qty: args.qty,
        billDateTime: args.billDateTime
      };

      if (args.notes !== undefined) input.notes = args.notes;
      if (args.billable !== undefined) input.billable = args.billable;
      if (args.afterHours !== undefined) input.afterHours = args.afterHours;
      if (args.unitPrice !== undefined) input.unitPrice = args.unitPrice;
      if (args.serviceItemId) {
        input.serviceItem = { itemId: args.serviceItemId };
      }
      if (args.technicianId) {
        input.technician = { userId: args.technicianId };
      }

      const mutation = `
        mutation createWorklogEntries($input: [CreateWorklogEntryInput!]!) {
          createWorklogEntries(input: $input) {
            ${WORKLOG_FIELDS}
          }
        }
      `;

      const result = await client.execute(mutation, { input: [input] });
      const entry = result.createWorklogEntries[0];

      return formatWorklogEntry(entry, 'Worklog entry created');
    }

    case 'update_worklog': {
      const input = { itemId: args.itemId };

      if (args.qty !== undefined) input.qty = args.qty;
      if (args.billDateTime !== undefined) input.billDateTime = args.billDateTime;
      if (args.notes !== undefined) input.notes = args.notes;
      if (args.billable !== undefined) input.billable = args.billable;
      if (args.afterHours !== undefined) input.afterHours = args.afterHours;
      if (args.unitPrice !== undefined) input.unitPrice = args.unitPrice;
      if (args.serviceItemId) {
        input.serviceItem = { itemId: args.serviceItemId };
      }

      const mutation = `
        mutation updateWorklogEntry($input: UpdateWorklogEntryInput!) {
          updateWorklogEntry(input: $input) {
            ${WORKLOG_FIELDS}
          }
        }
      `;

      const result = await client.execute(mutation, { input });

      return formatWorklogEntry(result.updateWorklogEntry, 'Worklog entry updated');
    }

    case 'delete_worklog': {
      const mutation = `
        mutation deleteWorklogEntry($input: WorklogEntryIdentifier!) {
          deleteWorklogEntry(input: $input)
        }
      `;

      const result = await client.execute(mutation, {
        input: { itemId: args.itemId }
      });

      return {
        success: result.deleteWorklogEntry,
        message: result.deleteWorklogEntry
          ? `Worklog entry ${args.itemId} deleted successfully`
          : `Failed to delete worklog entry ${args.itemId}`
      };
    }

    // ========================================================================
    // Knowledge Base
    // ========================================================================

    case 'search_kb': {
      const listInfo = {
        page: args.page || 1,
        pageSize: args.pageSize || 50
      };

      // Build conditions array
      const conditions = [];

      if (args.search) {
        conditions.push({
          attribute: 'name',
          operator: 'contains',
          value: args.search
        });
      }

      if (args.itemType) {
        conditions.push({
          attribute: 'itemType',
          operator: 'is',
          value: args.itemType
        });
      }

      if (args.status) {
        conditions.push({
          attribute: 'status',
          operator: 'is',
          value: args.status
        });
      }

      if (args.parentId) {
        conditions.push({
          attribute: 'parent.itemId',
          operator: 'is',
          value: args.parentId
        });
      }

      // If multiple conditions, use first one (API limitation)
      // For more complex filtering, may need to filter client-side
      if (conditions.length > 0) {
        listInfo.condition = conditions[0];
      }

      const query = `
        query getKbItems($listInfo: ListInfoInput!) {
          getKbItems(listInfo: $listInfo) {
            items {
              ${KB_ITEM_FIELDS}
            }
            listInfo {
              page
              pageSize
              totalCount
            }
          }
        }
      `;

      const result = await client.execute(query, { listInfo });

      return formatKbItemList(result.getKbItems);
    }

    case 'get_kb_article': {
      const query = `
        query getKbItem($input: KBItemIdentifierInput!) {
          getKbItem(input: $input) {
            ${KB_ITEM_FIELDS}
            visibility {
              mappingId
              portalType
              clientSharedType
              siteSharedType
              userRoleSharedType
              userSharedType
              groupSharedType
            }
          }
        }
      `;

      const result = await client.execute(query, {
        input: { itemId: args.itemId }
      });

      return formatKbItem(result.getKbItem);
    }

    case 'create_kb_article': {
      const input = {
        name: args.name,
        parent: { itemId: args.parentId },
        status: args.status,
        content: args.content,
        visibility: {
          added: [buildVisibilityInput(args.visibility)]
        }
      };

      if (args.loginRequired !== undefined) {
        input.loginRequired = args.loginRequired;
      }

      const mutation = `
        mutation createKbArticle($input: CreateKbArticleInput!) {
          createKbArticle(input: $input) {
            ${KB_ARTICLE_FIELDS}
          }
        }
      `;

      const result = await client.execute(mutation, { input });

      return formatKbArticle(result.createKbArticle, 'KB article created');
    }

    case 'update_kb_article': {
      const input = { itemId: args.itemId };

      if (args.name !== undefined) input.name = args.name;
      if (args.parentId !== undefined) input.parent = { itemId: args.parentId };
      if (args.status !== undefined) input.status = args.status;
      if (args.content !== undefined) input.content = args.content;
      if (args.loginRequired !== undefined) input.loginRequired = args.loginRequired;

      // Handle visibility updates
      if (args.addVisibility || args.deleteVisibilityIds) {
        input.visibility = {};
        if (args.addVisibility) {
          input.visibility.added = args.addVisibility.map(buildVisibilityInput);
        }
        if (args.deleteVisibilityIds) {
          input.visibility.deleted = args.deleteVisibilityIds;
        }
      }

      const mutation = `
        mutation updateKbArticle($input: UpdateKbArticleInput!) {
          updateKbArticle(input: $input) {
            ${KB_ARTICLE_FIELDS}
          }
        }
      `;

      const result = await client.execute(mutation, { input });

      return formatKbArticle(result.updateKbArticle, 'KB article updated');
    }

    case 'create_kb_collection': {
      const input = { name: args.name };

      if (args.parentId) {
        input.parent = { itemId: args.parentId };
      }

      const mutation = `
        mutation createKbCollection($input: CreateKbCollectionInput!) {
          createKbCollection(input: $input) {
            ${KB_COLLECTION_FIELDS}
          }
        }
      `;

      const result = await client.execute(mutation, { input });

      return formatKbCollection(result.createKbCollection, 'KB collection created');
    }

    case 'delete_kb_article': {
      const mutation = `
        mutation deleteKbArticle($input: DeleteKbArticleInput!) {
          deleteKbArticle(input: $input)
        }
      `;

      const result = await client.execute(mutation, {
        input: { article: { itemId: args.itemId } }
      });

      return {
        success: result.deleteKbArticle,
        message: result.deleteKbArticle
          ? `KB article ${args.itemId} deleted successfully`
          : `Failed to delete KB article ${args.itemId}`
      };
    }

    default:
      throw new Error(`Unknown worklog/KB tool: ${name}`);
  }
}

// ============================================================================
// Tool Name Checker
// ============================================================================

export function isWorklogTool(name) {
  return worklogTools.some(t => t.name === name);
}

// ============================================================================
// Helper Functions
// ============================================================================

function buildVisibilityInput(visibility) {
  const input = {};

  if (visibility.portalType) input.portalType = visibility.portalType;
  if (visibility.clientSharedType) input.clientSharedType = visibility.clientSharedType;
  if (visibility.accountId) input.accountId = visibility.accountId;
  if (visibility.siteSharedType) input.siteSharedType = visibility.siteSharedType;
  if (visibility.siteId) input.siteId = visibility.siteId;
  if (visibility.userRoleSharedType) input.userRoleSharedType = visibility.userRoleSharedType;
  if (visibility.addedRoleIds) input.addedRoleIds = visibility.addedRoleIds;
  if (visibility.userSharedType) input.userSharedType = visibility.userSharedType;
  if (visibility.addedUserIds) input.addedUserIds = visibility.addedUserIds;
  if (visibility.groupSharedType) input.groupSharedType = visibility.groupSharedType;
  if (visibility.addedGroupIds) input.addedGroupIds = visibility.addedGroupIds;

  return input;
}

// ============================================================================
// Formatters
// ============================================================================

function formatWorklogList(data) {
  const { entries, listInfo } = data;

  if (!entries || entries.length === 0) {
    return {
      message: 'No worklog entries found',
      entries: [],
      pagination: listInfo
    };
  }

  return {
    message: `Found ${listInfo.totalCount} worklog entries (showing ${entries.length})`,
    entries: entries.map(formatWorklogEntryCompact),
    pagination: {
      page: listInfo.page,
      pageSize: listInfo.pageSize,
      totalCount: listInfo.totalCount,
      hasMore: listInfo.page * listInfo.pageSize < listInfo.totalCount
    }
  };
}

function formatWorklogEntryCompact(entry) {
  return {
    itemId: entry.itemId,
    hours: entry.qty,
    date: entry.billDateTime,
    technician: entry.technician?.name || entry.technician,
    notes: entry.notes,
    billable: entry.billable,
    afterHours: entry.afterHours,
    status: entry.status,
    workItem: entry.workItem,
    serviceItem: entry.serviceItem?.name || entry.serviceItem
  };
}

function formatWorklogEntry(entry, message) {
  return {
    message,
    worklog: {
      itemId: entry.itemId,
      hours: entry.qty,
      date: entry.billDateTime,
      technician: entry.technician,
      notes: entry.notes,
      billable: entry.billable,
      afterHours: entry.afterHours,
      status: entry.status,
      unitPrice: entry.unitPrice,
      workItem: entry.workItem,
      serviceItem: entry.serviceItem
    }
  };
}

function formatKbItemList(data) {
  const { items, listInfo } = data;

  if (!items || items.length === 0) {
    return {
      message: 'No KB items found',
      items: [],
      pagination: listInfo
    };
  }

  return {
    message: `Found ${listInfo.totalCount} KB items (showing ${items.length})`,
    items: items.map(formatKbItemCompact),
    pagination: {
      page: listInfo.page,
      pageSize: listInfo.pageSize,
      totalCount: listInfo.totalCount,
      hasMore: listInfo.page * listInfo.pageSize < listInfo.totalCount
    }
  };
}

function formatKbItemCompact(item) {
  const result = {
    itemId: item.itemId,
    name: item.name,
    type: item.itemType,
    parent: item.parent ? { itemId: item.parent.itemId, name: item.parent.name } : null
  };

  // Add article-specific fields
  if (item.itemType === 'KB_ARTICLE') {
    result.status = item.status;
    result.description = item.description;
    result.viewCount = item.viewCount;
    result.articleType = item.articleType;
    result.createdOn = item.createdOn;
    result.lastModifiedOn = item.lastModifiedOn;
  }

  return result;
}

function formatKbItem(item) {
  const result = {
    itemId: item.itemId,
    name: item.name,
    type: item.itemType,
    parent: item.parent ? { itemId: item.parent.itemId, name: item.parent.name } : null
  };

  if (item.itemType === 'KB_ARTICLE') {
    result.status = item.status;
    result.description = item.description;
    result.articleType = item.articleType;
    result.viewCount = item.viewCount;
    result.loginRequired = item.loginRequired;
    result.createdBy = item.createdBy;
    result.createdOn = item.createdOn;
    result.lastModifiedBy = item.lastModifiedBy;
    result.lastModifiedOn = item.lastModifiedOn;
    result.visibility = item.visibility;

    // Note about content
    result.contentNote = 'Article content must be downloaded via SuperOps download API with itemId parameter';
  }

  return result;
}

function formatKbArticle(article, message) {
  return {
    message,
    article: {
      itemId: article.itemId,
      name: article.name,
      status: article.status,
      articleType: article.articleType,
      parent: article.parent ? { itemId: article.parent.itemId, name: article.parent.name } : null,
      description: article.description,
      viewCount: article.viewCount,
      loginRequired: article.loginRequired,
      createdBy: article.createdBy,
      createdOn: article.createdOn,
      lastModifiedBy: article.lastModifiedBy,
      lastModifiedOn: article.lastModifiedOn,
      visibility: article.visibility
    }
  };
}

function formatKbCollection(collection, message) {
  return {
    message,
    collection: {
      itemId: collection.itemId,
      name: collection.name,
      parent: collection.parent ? { itemId: collection.parent.itemId, name: collection.parent.name } : null
    }
  };
}
