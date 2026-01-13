API Documentation - SuperOps
Welcome to the Superops IT GraphQL API reference! This reference includes the complete set of GraphQL types, queries, mutations, and their parameters. For more tutorial-oriented API documentation, please check out our API Guide

Contact
Superops

support@superops.com

API Endpoints
/* US data center use the below URL

https://api.superops.ai/it
/* EU data center use the below URL

https://euapi.superops.ai/it
Queries
getAlertList
Fetches the list of all your alerts.

Response
Returns an AlertList

Arguments
Name	Description
input - ListInfoInput!	
Query
query getAlertList($input: ListInfoInput!) {
  getAlertList(input: $input) {
    alerts {
      ...AlertFragment
    }
    listInfo {
      ...ListInfoFragment
    }
  }
}
Variables
{"input": ListInfoInput}
Response
{
  "data": {
    "getAlertList": {
      "alerts": [Alert],
      "listInfo": ListInfo
    }
  }
}
Queries
getAlertsForAsset
Fetches the list of alerts of an asset.

Response
Returns an AlertList

Arguments
Name	Description
input - AssetDetailsListInput!	
Query
query getAlertsForAsset($input: AssetDetailsListInput!) {
  getAlertsForAsset(input: $input) {
    alerts {
      ...AlertFragment
    }
    listInfo {
      ...ListInfoFragment
    }
  }
}
Variables
{"input": AssetDetailsListInput}
Response
{
  "data": {
    "getAlertsForAsset": {
      "alerts": [Alert],
      "listInfo": ListInfo
    }
  }
}
Queries
getAllFields
Fetches all the fields for a Module, Ex: TICKET,COMPANY_USER,...

Response
Returns [Field]

Arguments
Name	Description
input - String!	
Query
query getAllFields($input: String!) {
  getAllFields(input: $input) {
    id
    module
    columnName
    label
    description
    fieldType
    options {
      ...OptionFragment
    }
    showToRequester
    fieldCategory
    mandatoryOnCreate
    mandatoryOnClosure
  }
}
Variables
{"input": "abc123"}
Response
{
  "data": {
    "getAllFields": {
      "id": 4,
      "module": "TICKET",
      "columnName": "udf1text",
      "label": "SSN",
      "description": "Social Security Number",
      "fieldType": "TEXT",
      "options": [Option],
      "showToRequester": false,
      "fieldCategory": "CUSTOM",
      "mandatoryOnCreate": false,
      "mandatoryOnClosure": true
    }
  }
}
Queries
getAsset
Fetches an asset.

Response
Returns an Asset

Arguments
Name	Description
input - AssetIdentifierInput!	
Query
query getAsset($input: AssetIdentifierInput!) {
  getAsset(input: $input) {
    assetId
    name
    assetClass
    site
    department
    requester
    primaryMac
    loggedInUser
    serialNumber
    manufacturer
    model
    hostName
    publicIp
    gateway
    platform
    domain
    status
    sysUptime
    lastCommunicatedTime
    agentVersion
    platformFamily
    platformCategory
    platformVersion
    patchStatus
    warrantyExpiryDate
    purchasedDate
    customFields
    lastReportedTime
  }
}
Variables
{"input": AssetIdentifierInput}
Response
{
  "data": {
    "getAsset": {
      "assetId": "9001114136934215681",
      "name": "DESKTOP-I9QFDTE",
      "assetClass": {"classId": "1", "name": "Windows Machine"},
      "site": {"id": "7928838372746169876", "name": "Austin"},
      "department": {"departmentId": "7928838372746166998", "name": "Sales"},
      "requester": {"userId": "5928838372746169876", "name": "John Williams"},
      "primaryMac": "18:cc:18:e0:6f:92",
      "loggedInUser": "John Williams",
      "serialNumber": "15CD10509R721",
      "manufacturer": "HP",
      "model": "HP Pavilion Laptop 14-dv0xxx",
      "hostName": "DESKTOP-9J8RLGD",
      "publicIp": "178.181.11.21",
      "gateway": "10.2.236.1",
      "platform": "Microsoft Windows 10 Home Single Language",
      "domain": "WORKGROUP",
      "status": "ONLINE",
      "sysUptime": "1 hour 38 minutes",
      "lastCommunicatedTime": "2022-11-29T15:54:16.270",
      "agentVersion": "202211151251",
      "platformFamily": "Standalone Workstation",
      "platformCategory": "WORKSTATION",
      "platformVersion": "10.0.19044 Build 19044 (21H2)",
      "patchStatus": "Fully Patched",
      "warrantyExpiryDate": "2023-05-27",
      "purchasedDate": "2030-05-27",
      "customFields": {
        "udf1text": "value",
        "udf2date": "2022-05-06",
        "udf3dt": "2022-05-06T10:10:10",
        "udf5mselect": ["value1", "value1"]
      },
      "lastReportedTime": "2023-08-22T19:23:22.678"
    }
  }
}
Queries
getAssetActivity
Fetches the list of asset activities.

Response
Returns an AssetActivityList

Arguments
Name	Description
input - AssetDetailsListInput!	
Query
query getAssetActivity($input: AssetDetailsListInput!) {
  getAssetActivity(input: $input) {
    activities {
      ...AssetActivityDataFragment
    }
    listInfo {
      ...ListInfoFragment
    }
  }
}
Variables
{"input": AssetDetailsListInput}
Response
{
  "data": {
    "getAssetActivity": {
      "activities": [AssetActivityData],
      "listInfo": ListInfo
    }
  }
}
Queries
getAssetCustomFields
Fetches the list of asset custom fields based on module Ex: Windows, Mac

Response
Returns [CustomField]

Arguments
Name	Description
input - [String!]	
Query
query getAssetCustomFields($input: [String!]) {
  getAssetCustomFields(input: $input) {
    id
    columnName
    label
    description
    fieldType
    isMandatory
  }
}
Variables
{"input": ["abc123"]}
Response
{
  "data": {
    "getAssetCustomFields": {
      "id": 4,
      "columnName": "udf1text",
      "label": "SSN",
      "description": "Social Security Number",
      "fieldType": "TEXT",
      "isMandatory": false
    }
  }
}
Queries
getAssetDiskDetails
To Fetch Asset Disk Details.

Response
Returns [AssetDisk]

Arguments
Name	Description
input - AssetIdentifierInput!	
Query
query getAssetDiskDetails($input: AssetIdentifierInput!) {
  getAssetDiskDetails(input: $input) {
    drive
    discType
    fileSystem
    maxFileLength
    autoMounted
    compressed
    pageFile
    indexed
    size
    freeSize
    activeTime
    responseTime
    readSpeed
    writeSpeed
    driveUsage
  }
}
Variables
{"input": AssetIdentifierInput}
Response
{
  "data": {
    "getAssetDiskDetails": {
      "drive": "xyz789",
      "discType": "xyz789",
      "fileSystem": "xyz789",
      "maxFileLength": 987,
      "autoMounted": false,
      "compressed": false,
      "pageFile": false,
      "indexed": true,
      "size": {},
      "freeSize": {},
      "activeTime": {},
      "responseTime": {},
      "readSpeed": {},
      "writeSpeed": {},
      "driveUsage": {}
    }
  }
}
Queries
getAssetInfoByTPEndpointIds
Fetch Asset Info By TP EndpointIds

Response
Returns [TPEndpointAssetInfo]

Arguments
Name	Description
input - TPAssetInfoInput	
Query
query getAssetInfoByTPEndpointIds($input: TPAssetInfoInput) {
  getAssetInfoByTPEndpointIds(input: $input) {
    tpEndpointId
    superOpsAssetInfo {
      ...AssetFragment
    }
  }
}
Variables
{"input": TPAssetInfoInput}
Response
{
  "data": {
    "getAssetInfoByTPEndpointIds": {
      "tpEndpointId": "xyz789",
      "superOpsAssetInfo": Asset
    }
  }
}
Queries
getAssetList
Fetches the list of assets.

Response
Returns an AssetList

Arguments
Name	Description
input - ListInfoInput!	
Query
query getAssetList($input: ListInfoInput!) {
  getAssetList(input: $input) {
    assets {
      ...AssetFragment
    }
    listInfo {
      ...ListInfoFragment
    }
  }
}
Variables
{"input": ListInfoInput}
Response
{
  "data": {
    "getAssetList": {
      "assets": [Asset],
      "listInfo": ListInfo
    }
  }
}
Queries
getAssetPatchDetails
Fetches all the patch details of an asset.

Response
Returns an AssetPatchList

Arguments
Name	Description
input - AssetDetailsListInput!	
Query
query getAssetPatchDetails($input: AssetDetailsListInput!) {
  getAssetPatchDetails(input: $input) {
    assetPatches {
      ...PatchDataFragment
    }
    listInfo {
      ...ListInfoFragment
    }
  }
}
Variables
{"input": AssetDetailsListInput}
Response
{
  "data": {
    "getAssetPatchDetails": {
      "assetPatches": [PatchData],
      "listInfo": ListInfo
    }
  }
}
Queries
getAssetSoftwareList
Fetch Asset's Softwares

Response
Returns an AssetSoftwareList

Arguments
Name	Description
input - AssetDetailsListInput!	
Query
query getAssetSoftwareList($input: AssetDetailsListInput!) {
  getAssetSoftwareList(input: $input) {
    assetSoftwares {
      ...AssetSoftwareFragment
    }
    listInfo {
      ...ListInfoFragment
    }
  }
}
Variables
{"input": AssetDetailsListInput}
Response
{
  "data": {
    "getAssetSoftwareList": {
      "assetSoftwares": [AssetSoftware],
      "listInfo": ListInfo
    }
  }
}
Queries
getAssetSummary
Fetches the asset's summary details.

Response
Returns an AssetSummary

Arguments
Name	Description
input - AssetIdentifierInput!	
Query
query getAssetSummary($input: AssetIdentifierInput!) {
  getAssetSummary(input: $input) {
    cpu {
      ...AssetCPUFragment
    }
    memory {
      ...AssetMemoryFragment
    }
    disk {
      ...DisksFragment
    }
    assetInterface {
      ...AssetInterfaceFragment
    }
    lastUserLog {
      ...AssetUserLogFragment
    }
  }
}
Variables
{"input": AssetIdentifierInput}
Response
{
  "data": {
    "getAssetSummary": {
      "cpu": AssetCPU,
      "memory": AssetMemory,
      "disk": Disks,
      "assetInterface": AssetInterface,
      "lastUserLog": AssetUserLog
    }
  }
}
Queries
getAssetUserLog
Fetches the asset's user logs.

Response
Returns [AssetUserLog]

Arguments
Name	Description
input - AssetIdentifierInput!	
Query
query getAssetUserLog($input: AssetIdentifierInput!) {
  getAssetUserLog(input: $input) {
    id
    name
    lastLoginTime
  }
}
Variables
{"input": AssetIdentifierInput}
Response
{
  "data": {
    "getAssetUserLog": {
      "id": "4299375678745489509",
      "name": "DESKTOPNNHN1T8\\test",
      "lastLoginTime": "2022-11-30T14:18:44"
    }
  }
}
Queries
getDepartmentList
Fetches the list of business functions.

Response
Returns [Department]

Query
query getDepartmentList {
  getDepartmentList {
    departmentId
    name
    head
  }
}
Response
{
  "data": {
    "getDepartmentList": {
      "departmentId": 4,
      "name": "Finance",
      "head": {"userId": "7928838372746166271", "name": "Clovis Sonsimps"}
    }
  }
}
Queries
getDesignationList
Fetches the list of designations.

Response
Returns [Designation]

Query
query getDesignationList {
  getDesignationList {
    designationId
    name
  }
}
Response
{
  "data": {
    "getDesignationList": {
      "designationId": "4",
      "name": "CEO"
    }
  }
}
Queries
getDeviceCategories
Fetches a list of device categories.

Response
Returns [DeviceCategory]

Arguments
Name	Description
input - DeviceCategoryIdentifierInput	
Query
query getDeviceCategories($input: DeviceCategoryIdentifierInput) {
  getDeviceCategories(input: $input) {
    deviceCategoryId
    name
    custom
    assetClass
    createdTime
  }
}
Variables
{"input": DeviceCategoryIdentifierInput}
Response
{
  "data": {
    "getDeviceCategories": {
      "deviceCategoryId": [9567898545678],
      "name": "Windows Workstation",
      "custom": true,
      "assetClass": {"classId": "1", "name": "Windows Machine"},
      "createdTime": "2022-11-29T15:54:16.270"
    }
  }
}
Queries
getField
Fetches a field by module.

Response
Returns a Field

Arguments
Name	Description
input - FieldIdentifierInput!	
Query
query getField($input: FieldIdentifierInput!) {
  getField(input: $input) {
    id
    module
    columnName
    label
    description
    fieldType
    options {
      ...OptionFragment
    }
    showToRequester
    fieldCategory
    mandatoryOnCreate
    mandatoryOnClosure
  }
}
Variables
{"input": FieldIdentifierInput}
Response
{
  "data": {
    "getField": {
      "id": 4,
      "module": "TICKET",
      "columnName": "udf1text",
      "label": "SSN",
      "description": "Social Security Number",
      "fieldType": "TEXT",
      "options": [Option],
      "showToRequester": false,
      "fieldCategory": "CUSTOM",
      "mandatoryOnCreate": false,
      "mandatoryOnClosure": false
    }
  }
}
Queries
getFields
Fetches the fields's of entities.

Response
Returns [Field]

Arguments
Name	Description
input - [FieldIdentifierInput!]!	
Query
query getFields($input: [FieldIdentifierInput!]!) {
  getFields(input: $input) {
    id
    module
    columnName
    label
    description
    fieldType
    options {
      ...OptionFragment
    }
    showToRequester
    fieldCategory
    mandatoryOnCreate
    mandatoryOnClosure
  }
}
Variables
{"input": [FieldIdentifierInput]}
Response
{
  "data": {
    "getFields": {
      "id": "4",
      "module": "TICKET",
      "columnName": "udf1text",
      "label": "SSN",
      "description": "Social Security Number",
      "fieldType": "TEXT",
      "options": [Option],
      "showToRequester": true,
      "fieldCategory": "CUSTOM",
      "mandatoryOnCreate": true,
      "mandatoryOnClosure": true
    }
  }
}
Queries
getHolidayList
Fetches the list of holiday lists.

Response
Returns [HolidayList]

Query
query getHolidayList {
  getHolidayList {
    id
    name
  }
}
Response
{
  "data": {
    "getHolidayList": {
      "id": "4",
      "name": "USA Holidays"
    }
  }
}
Queries
getItDocumentation
Fetches an IT document's details.

Response
Returns an ItDocumentation

Arguments
Name	Description
input - ItDocumentationIdentifierInput!	
Query
query getItDocumentation($input: ItDocumentationIdentifierInput!) {
  getItDocumentation(input: $input) {
    itDocId
    name
    customFields
  }
}
Variables
{"input": ItDocumentationIdentifierInput}
Response
{
  "data": {
    "getItDocumentation": {
      "itDocId": 4,
      "name": "xyz789",
      "customFields": {}
    }
  }
}
Queries
getItDocumentationCategories
Fetches all available IT document categories.

Response
Returns [ITDocumentationType]

Query
query getItDocumentationCategories {
  getItDocumentationCategories {
    typeId
    name
    description
    entityName
    lastUpdatedTime
    customFields
  }
}
Response
{
  "data": {
    "getItDocumentationCategories": {
      "typeId": "12312123123123",
      "name": "Printer Documents",
      "description": "abc123",
      "entityName": "ac7126132948214128641",
      "lastUpdatedTime": "2022-11-29T13:59:55.372",
      "customFields": [
        {
          "id": "2915174238148190208",
          "columnName": "udf106text",
          "label": "JustAPlainText",
          "description": "Describe the field",
          "fieldType": "TEXT",
          "options": null
        }
      ]
    }
  }
}
Queries
getItDocumentationList
Fetches all the IT documents under a category.

Response
Returns an ItDocumentationList

Arguments
Name	Description
input - ItDocumentationListInput!	
Query
query getItDocumentationList($input: ItDocumentationListInput!) {
  getItDocumentationList(input: $input) {
    documents {
      ...ItDocumentationFragment
    }
    listInfo {
      ...ListInfoFragment
    }
  }
}
Variables
{"input": ItDocumentationListInput}
Response
{
  "data": {
    "getItDocumentationList": {
      "documents": [ItDocumentation],
      "listInfo": ListInfo
    }
  }
}
Queries
getKbItem
Fetches the details of a specific KB Item (either a collection or an article) by its unique identifier.

Response
Returns a KbItem

Arguments
Name	Description
input - KBItemIdentifierInput!	
Query
query getKbItem($input: KBItemIdentifierInput!) {
  getKbItem(input: $input) {
    itemId
    name
    parent {
      ...KbCollectionFragment
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
    visibility {
      ...DocumentSharedDetailsFragment
    }
    loginRequired
  }
}
Variables
{"input": KBItemIdentifierInput}
Response
{
  "data": {
    "getKbItem": {
      "itemId": "549210276118249300",
      "name": "Printers",
      "parent": KbCollection,
      "itemType": "KB_COLLECTION",
      "description": "abc123",
      "status": "DRAFT",
      "createdBy": {},
      "createdOn": "xyz789",
      "lastModifiedBy": {},
      "lastModifiedOn": "abc123",
      "viewCount": 987,
      "articleType": "HTML",
      "visibility": [DocumentSharedDetails],
      "loginRequired": true
    }
  }
}
Queries
getKbItems
Fetches a paginated list of KB Items, which can be either collections or articles.

Response
Returns a KbItemList

Arguments
Name	Description
listInfo - ListInfoInput!	
Query
query getKbItems($listInfo: ListInfoInput!) {
  getKbItems(listInfo: $listInfo) {
    items {
      ...KbItemFragment
    }
    listInfo {
      ...ListInfoFragment
    }
  }
}
Variables
{"listInfo": ListInfoInput}
Response
{
  "data": {
    "getKbItems": {
      "items": [KbItem],
      "listInfo": ListInfo
    }
  }
}
Queries
getRequesterRoleList
Fetches the list of requester-type roles.

Response
Returns [Role]

Query
query getRequesterRoleList {
  getRequesterRoleList {
    roleId
    name
    description
    roleType {
      ...RoleTypeFragment
    }
    roleFeatureList {
      ...RoleFeatureFragment
    }
  }
}
Response
{
  "data": {
    "getRequesterRoleList": {
      "roleId": 4,
      "name": "Client Admin",
      "description": "Client Administrator",
      "roleType": RoleType,
      "roleFeatureList": [RoleFeature]
    }
  }
}
Queries
getSLAList
Fetch a list of available SLAs.

Response
Returns [SLA]

Query
query getSLAList {
  getSLAList {
    id
    name
  }
}
Response
{
  "data": {
    "getSLAList": {
      "id": "4",
      "name": "VIP SLA"
    }
  }
}
Queries
getScriptList
Fetches all available scripts.

Response
Returns a ScriptList

Arguments
Name	Description
input - ListInfoInput!	
Query
query getScriptList($input: ListInfoInput!) {
  getScriptList(input: $input) {
    scripts {
      ...ScriptFragment
    }
    listInfo {
      ...ListInfoFragment
    }
  }
}
Variables
{"input": ListInfoInput}
Response
{
  "data": {
    "getScriptList": {
      "scripts": [Script],
      "listInfo": ListInfo
    }
  }
}
Queries
getScriptListByType
Fetches all the Scripts supported to particular OS type Ex :Windows

Response
Returns a ScriptList

Arguments
Name	Description
input - ScriptListByTypeInput!	
Query
query getScriptListByType($input: ScriptListByTypeInput!) {
  getScriptListByType(input: $input) {
    scripts {
      ...ScriptFragment
    }
    listInfo {
      ...ListInfoFragment
    }
  }
}
Variables
{"input": ScriptListByTypeInput}
Response
{
  "data": {
    "getScriptListByType": {
      "scripts": [Script],
      "listInfo": ListInfo
    }
  }
}
Queries
getServiceCatalogItem
Retrieves a product or service.

Response
Returns a ServiceCatalogItem

Arguments
Name	Description
input - ServiceCatalogItemIdentifierInput!	
Query
query getServiceCatalogItem($input: ServiceCatalogItemIdentifierInput!) {
  getServiceCatalogItem(input: $input) {
    itemId
    name
    description
    category {
      ...ServiceCategoryFragment
    }
  }
}
Variables
{"input": ServiceCatalogItemIdentifierInput}
Response
{
  "data": {
    "getServiceCatalogItem": {
      "itemId": "4",
      "name": "Hard Disc",
      "description": "abc123",
      "category": ServiceCategory
    }
  }
}
Queries
getServiceCatalogItemList
Retrieves a list of all products and services.

Response
Returns a ServiceCatalogItemList

Arguments
Name	Description
input - ListInfoInput!	
Query
query getServiceCatalogItemList($input: ListInfoInput!) {
  getServiceCatalogItemList(input: $input) {
    items {
      ...ServiceCatalogItemFragment
    }
    listInfo {
      ...ListInfoFragment
    }
  }
}
Variables
{"input": ListInfoInput}
Response
{
  "data": {
    "getServiceCatalogItemList": {
      "items": [ServiceCatalogItem],
      "listInfo": ListInfo
    }
  }
}
Queries
getServiceCategoryList
Fetches a list of all the service categories created in the service catalog. Fetches a list of all the service categories created in the service catalog.

Response
Returns [ServiceCategory]

Query
query getServiceCategoryList {
  getServiceCategoryList {
    categoryId
    name
  }
}
Response
{"data": {"getServiceCategoryList": {"categoryId": 4, "name": "Hardware"}}}
Queries
getServiceItem
Fetch a service item.

Response
Returns a ServiceItem

Arguments
Name	Description
input - ServiceItemIdentifierInput!	
Query
query getServiceItem($input: ServiceItemIdentifierInput!) {
  getServiceItem(input: $input) {
    itemId
    name
    description
    category {
      ...ServiceCategoryFragment
    }
  }
}
Variables
{"input": ServiceItemIdentifierInput}
Response
{
  "data": {
    "getServiceItem": {
      "itemId": 4,
      "name": "Hard Disc",
      "description": "xyz789",
      "category": ServiceCategory
    }
  }
}
Queries
getServiceItemList
Fetches a list of service items.

Response
Returns a ServiceItemList

Arguments
Name	Description
input - ListInfoInput!	
Query
query getServiceItemList($input: ListInfoInput!) {
  getServiceItemList(input: $input) {
    items {
      ...ServiceItemFragment
    }
    listInfo {
      ...ListInfoFragment
    }
  }
}
Variables
{"input": ListInfoInput}
Response
{
  "data": {
    "getServiceItemList": {
      "items": [ServiceItem],
      "listInfo": ListInfo
    }
  }
}
Queries
getServiceOfferingList
Fetches the services offered through work items, such as tickets.

Response
Returns a ServiceOfferingList

Arguments
Name	Description
input - GetServiceEntriesInput!	
Query
query getServiceOfferingList($input: GetServiceEntriesInput!) {
  getServiceOfferingList(input: $input) {
    entries {
      ...ServiceOfferingFragment
    }
    listInfo {
      ...ListInfoFragment
    }
  }
}
Variables
{"input": GetServiceEntriesInput}
Response
{
  "data": {
    "getServiceOfferingList": {
      "entries": [ServiceOffering],
      "listInfo": ListInfo
    }
  }
}
Queries
getSite
Fetch a site.

Response
Returns a Site

Arguments
Name	Description
input - SiteIdentifierInput!	
Query
query getSite($input: SiteIdentifierInput!) {
  getSite(input: $input) {
    id
    name
    businessHour {
      ...BusinessHourFragment
    }
    holidayList {
      ...HolidayListFragment
    }
    timezoneCode
    working24x7
    address {
      ...AddressFragment
    }
    contactNumber
    installerInfo {
      ...InstallerDetailsFragment
    }
  }
}
Variables
{"input": SiteIdentifierInput}
Response
{
  "data": {
    "getSite": {
      "id": 4,
      "name": "Austin",
      "businessHour": [BusinessHour],
      "holidayList": HolidayList,
      "timezoneCode": "America/Los_Angeles",
      "working24x7": false,
      "address": Address,
      "contactNumber": "212-504-4115",
      "installerInfo": [InstallerDetails]
    }
  }
}
Queries
getSiteList
Fetches a list of sites.

Response
Returns a SiteList

Arguments
Name	Description
input - ListInfoInput!	
Query
query getSiteList($input: ListInfoInput!) {
  getSiteList(input: $input) {
    sites {
      ...SiteFragment
    }
    listInfo {
      ...ListInfoFragment
    }
  }
}
Variables
{"input": ListInfoInput}
Response
{
  "data": {
    "getSiteList": {
      "sites": [Site],
      "listInfo": ListInfo
    }
  }
}
Queries
getTask
Fetches a task.

Response
Returns a Task

Arguments
Name	Description
input - TaskIdentifierInput!	
Query
query getTask($input: TaskIdentifierInput!) {
  getTask(input: $input) {
    taskId
    displayId
    title
    description
    status
    estimatedTime
    scheduledStartDate
    dueDate
    overdue
    actualStartDate
    actualEndDate
    technician
    techGroup
    workItem
    taskOrder
  }
}
Variables
{"input": TaskIdentifierInput}
Response
{
  "data": {
    "getTask": {
      "taskId": "4",
      "displayId": "062822-0001",
      "title": "Install Antivirus",
      "description": "xyz789",
      "status": "Planned",
      "estimatedTime": 500,
      "scheduledStartDate": "2022-07-16T09:00:00",
      "dueDate": "2022-07-25T16:00:00",
      "overdue": true,
      "actualStartDate": "2022-07-15T09:00:00",
      "actualEndDate": "2022-07-22T09:00:00",
      "technician": {"userId": "7928838372746166256", "name": "user3"},
      "techGroup": {
        "groupId": "7928838372746166657",
        "name": "Hardware Problems"
      },
      "workItem": {},
      "taskOrder": 123
    }
  }
}
Queries
getTaskList
Fetches a list of tasks.

Response
Returns a TaskList

Arguments
Name	Description
input - ListInfoInput!	
Query
query getTaskList($input: ListInfoInput!) {
  getTaskList(input: $input) {
    tasks {
      ...TaskFragment
    }
    listInfo {
      ...ListInfoFragment
    }
  }
}
Variables
{"input": ListInfoInput}
Response
{
  "data": {
    "getTaskList": {
      "tasks": [Task],
      "listInfo": ListInfo
    }
  }
}
Queries
getTechnicianGroupList
Fetches the list of technician groups.

Response
Returns [TechnicianGroup]

Query
query getTechnicianGroupList {
  getTechnicianGroupList {
    groupId
    name
  }
}
Response
{"data": {"getTechnicianGroupList": {"groupId": 4, "name": "Network"}}}
Queries
getTechnicianList
Fetches a list of users who has technician role.

Response
Returns a TechnicianList

Arguments
Name	Description
input - ListInfoInput!	
Query
query getTechnicianList($input: ListInfoInput!) {
  getTechnicianList(input: $input) {
    userList {
      ...TechnicianFragment
    }
    listInfo {
      ...ListInfoFragment
    }
  }
}
Variables
{"input": ListInfoInput}
Response
{
  "data": {
    "getTechnicianList": {
      "userList": [Technician],
      "listInfo": ListInfo
    }
  }
}
Queries
getTechnicianRoleList
Fetches the list of technician-type roles.

Response
Returns [Role]

Query
query getTechnicianRoleList {
  getTechnicianRoleList {
    roleId
    name
    description
    roleType {
      ...RoleTypeFragment
    }
    roleFeatureList {
      ...RoleFeatureFragment
    }
  }
}
Response
{
  "data": {
    "getTechnicianRoleList": {
      "roleId": "4",
      "name": "Client Admin",
      "description": "Client Administrator",
      "roleType": RoleType,
      "roleFeatureList": [RoleFeature]
    }
  }
}
Queries
getTicket
Fetches a ticket.

Response
Returns a Ticket

Arguments
Name	Description
input - TicketIdentifierInput!	
Query
query getTicket($input: TicketIdentifierInput!) {
  getTicket(input: $input) {
    ticketId
    displayId
    subject
    source
    department
    site
    requester
    additionalRequester
    followers
    techGroup
    technician
    status
    priority
    impact
    urgency
    category
    subcategory
    cause
    subcause
    resolutionCode
    sla
    createdTime
    updatedTime
    firstResponseDueTime
    firstResponseTime
    firstResponseViolated
    resolutionDueTime
    resolutionTime
    resolutionViolated
    customFields
    requestType
    worklogTimespent
  }
}
Variables
{"input": TicketIdentifierInput}
Response
{
  "data": {
    "getTicket": {
      "ticketId": "7928838372746166987",
      "displayId": "062822-0005",
      "subject": "Help! Internet is not working!",
      "source": "FORM",
      "department": {},
      "site": {"id": "7928838372746169876", "name": "Austin"},
      "requester": {"userId": "5928838372746169876", "name": "John Williams"},
      "additionalRequester": [
        {"userId": "5928838372746169098", "name": "Howard Stern"}
      ],
      "followers": {},
      "techGroup": {"groupId": "3928838372746169098", "name": "Network"},
      "technician": {"userId": "5928838372746160987", "name": "Jason Wheeler"},
      "status": "New",
      "priority": "Critical",
      "impact": "High",
      "urgency": "High",
      "category": "Network",
      "subcategory": "Wireless",
      "cause": "Component issue",
      "subcause": "Hardware Issue",
      "resolutionCode": "Permanent Fix",
      "sla": {"id": "3928838372746169012", "name": "VIP SLA"},
      "createdTime": "2022-06-28T05:25:10",
      "updatedTime": "2022-06-29T10:25:10",
      "firstResponseDueTime": "2022-06-29T10:25:10",
      "firstResponseTime": "2022-06-29T10:25:10",
      "firstResponseViolated": false,
      "resolutionDueTime": "2022-06-29T10:25:10",
      "resolutionTime": "2022-06-29T10:25:10",
      "resolutionViolated": true,
      "customFields": {
        "udf1text": "value",
        "udf2date": "2022-05-06",
        "udf3dt": "2022-05-06T10:10:10",
        "udf5mselect": ["value1", "value1"]
      },
      "requestType": "xyz789",
      "worklogTimespent": "100.00"
    }
  }
}
Queries
getTicketConversationList
Fetches the list of conversations in a ticket.

Response
Returns [TicketConversation]

Arguments
Name	Description
input - TicketIdentifierInput!	
Query
query getTicketConversationList($input: TicketIdentifierInput!) {
  getTicketConversationList(input: $input) {
    conversationId
    content
    time
    user
    toUsers {
      ...RecipientInfoFragment
    }
    ccUsers {
      ...RecipientInfoFragment
    }
    bccUsers {
      ...RecipientInfoFragment
    }
    attachments {
      ...AttachmentFragment
    }
    type
  }
}
Variables
{"input": TicketIdentifierInput}
Response
{
  "data": {
    "getTicketConversationList": {
      "conversationId": "4",
      "content": "I cannot access my internet! I'm not sure what's happening!",
      "time": "2022-06-29T10:25:10",
      "user": {
        "userId": "3928838372746169098",
        "name": "Joseph John",
        "email": "joseph.john@acme.com"
      },
      "toUsers": [RecipientInfo],
      "ccUsers": [RecipientInfo],
      "bccUsers": [RecipientInfo],
      "attachments": [Attachment],
      "type": "REQ_REPLY"
    }
  }
}
Queries
getTicketList
Fetches a list of tickets.

Response
Returns a TicketList

Arguments
Name	Description
input - ListInfoInput!	
Query
query getTicketList($input: ListInfoInput!) {
  getTicketList(input: $input) {
    tickets {
      ...TicketFragment
    }
    listInfo {
      ...ListInfoFragment
    }
  }
}
Variables
{"input": ListInfoInput}
Response
{
  "data": {
    "getTicketList": {
      "tickets": [Ticket],
      "listInfo": ListInfo
    }
  }
}
Queries
getTicketNoteList
Fetches the list of notes in a ticket.

Response
Returns [Note]

Arguments
Name	Description
input - TicketIdentifierInput!	
Query
query getTicketNoteList($input: TicketIdentifierInput!) {
  getTicketNoteList(input: $input) {
    noteId
    addedBy
    addedOn
    content
    attachments {
      ...AttachmentFragment
    }
    privacyType
  }
}
Variables
{"input": TicketIdentifierInput}
Response
{
  "data": {
    "getTicketNoteList": {
      "noteId": "4",
      "addedBy": {"userId": "7928838372746166271", "name": "Clovis Sonsimps"},
      "addedOn": "2022-06-30T10:10:15",
      "content": "I cannot access my internet! I'm not sure what's happening!",
      "attachments": [Attachment],
      "privacyType": "PUBLIC"
    }
  }
}
Queries
getUnMonitoredAssetList
Fetches the list of unmonitored assets.

Response
Returns an AssetList

Arguments
Name	Description
input - ListInfoInput!	
Query
query getUnMonitoredAssetList($input: ListInfoInput!) {
  getUnMonitoredAssetList(input: $input) {
    assets {
      ...AssetFragment
    }
    listInfo {
      ...ListInfoFragment
    }
  }
}
Variables
{"input": ListInfoInput}
Response
{
  "data": {
    "getUnMonitoredAssetList": {
      "assets": [Asset],
      "listInfo": ListInfo
    }
  }
}
Queries
getUser
Fetches a user.

Response
Returns a User

Arguments
Name	Description
input - UserIdentifierInput!	
Query
query getUser($input: UserIdentifierInput!) {
  getUser(input: $input) {
    userId
    firstName
    lastName
    name
    email
    contactNumber
    reportingManager
    roles
    department
    associations
    customFields
  }
}
Variables
{"input": UserIdentifierInput}
Response
{
  "data": {
    "getUser": {
      "userId": 4,
      "firstName": "xyz789",
      "lastName": "xyz789",
      "name": "abc123",
      "email": "abc123",
      "contactNumber": "abc123",
      "reportingManager": {},
      "roles": {},
      "department": {},
      "associations": {},
      "customFields": {}
    }
  }
}
Queries
getUserList
Fetches a list of users.

Response
Returns a UserList

Arguments
Name	Description
input - ListInfoInput!	
Query
query getUserList($input: ListInfoInput!) {
  getUserList(input: $input) {
    userList {
      ...UserFragment
    }
    listInfo {
      ...ListInfoFragment
    }
  }
}
Variables
{"input": ListInfoInput}
Response
{
  "data": {
    "getUserList": {
      "userList": [User],
      "listInfo": ListInfo
    }
  }
}
Mutations
assignDeviceCategory
Assign Device Category to Assets.

Response
Returns a Boolean

Arguments
Name	Description
input - AssignDeviceCategoryInput	
Query
mutation assignDeviceCategory($input: AssignDeviceCategoryInput) {
  assignDeviceCategory(input: $input)
}
Variables
{"input": AssignDeviceCategoryInput}
Response
{"data": {"assignDeviceCategory": true}}
Mutations
createAlert
Creates an alert for an asset

Response
Returns an Alert

Arguments
Name	Description
input - CreateAlertInput!	
Query
mutation createAlert($input: CreateAlertInput!) {
  createAlert(input: $input) {
    id
    message
    createdTime
    status
    severity
    description
    asset
    policy
  }
}
Variables
{"input": CreateAlertInput}
Response
{
  "data": {
    "createAlert": {
      "id": "5150178940650622977",
      "message": "Low Disk Space",
      "createdTime": "2021-12-18T15:35",
      "status": "Resolved",
      "severity": "Critical",
      "description": "Actual free disk space at 2021-12-18T10:05 UTC is [c: : 17.0%] Alert condition:  Disk free space is less than 30.0% for 10 minutes",
      "asset": {
        "assetId": "9001114136934215681",
        "name": "DESKTOP-I9QFDTE",
        "owner": {"name": "John Williams", "email": "john@log.com"},
        "site": {"id": "7928838372746169876", "name": "Austin"}
      },
      "policy": {
        "name": "Medium CPU Usage",
        "policyType": "Hardware Performance Monitoring"
      }
    }
  }
}
Mutations
createDepartment
Creates a department.

Response
Returns a Department

Arguments
Name	Description
input - CreateDepartmentInput!	
Query
mutation createDepartment($input: CreateDepartmentInput!) {
  createDepartment(input: $input) {
    departmentId
    name
    head
  }
}
Variables
{"input": CreateDepartmentInput}
Response
{
  "data": {
    "createDepartment": {
      "departmentId": 4,
      "name": "Finance",
      "head": {"userId": "7928838372746166271", "name": "Clovis Sonsimps"}
    }
  }
}
Mutations
createItDocumentation
Creates a new IT document record.

Response
Returns an ItDocumentation

Arguments
Name	Description
input - CreateItDocumentationInput!	
Query
mutation createItDocumentation($input: CreateItDocumentationInput!) {
  createItDocumentation(input: $input) {
    itDocId
    name
    customFields
  }
}
Variables
{"input": CreateItDocumentationInput}
Response
{
  "data": {
    "createItDocumentation": {
      "itDocId": 4,
      "name": "abc123",
      "customFields": {}
    }
  }
}
Mutations
createKbArticle
Creates a KB Article

Response
Returns a KbArticle

Arguments
Name	Description
input - CreateKbArticleInput!	
Query
mutation createKbArticle($input: CreateKbArticleInput!) {
  createKbArticle(input: $input) {
    itemId
    name
    parent {
      ...KbCollectionFragment
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
      ...DocumentSharedDetailsFragment
    }
    loginRequired
  }
}
Variables
{"input": CreateKbArticleInput}
Response
{
  "data": {
    "createKbArticle": {
      "itemId": "3047341892401414939",
      "name": "How to Set Up a Printer on Your Device",
      "parent": KbCollection,
      "description": "A step-by-step guide to help you connect and configure a printer on your computer or mobile device.",
      "status": "PUBLISHED",
      "createdBy": {
        "userId": "9001114136934215681",
        "name": "John Williams",
        "email": "john@log.com"
      },
      "createdOn": "2025-07-01T12:12:16.892",
      "lastModifiedBy": {
        "userId": "9001114136934215681",
        "name": "John Williams",
        "email": "john@log.com"
      },
      "lastModifiedOn": "2025-07-01T12:12:16.892",
      "viewCount": 1,
      "articleType": "HTML",
      "visibility": [DocumentSharedDetails],
      "loginRequired": true
    }
  }
}
Mutations
createKbCollection
Creates a KB Collection

Response
Returns a KbCollection

Arguments
Name	Description
input - CreateKbCollectionInput!	
Query
mutation createKbCollection($input: CreateKbCollectionInput!) {
  createKbCollection(input: $input) {
    itemId
    name
    parent {
      ...KbCollectionFragment
    }
  }
}
Variables
{"input": CreateKbCollectionInput}
Response
{
  "data": {
    "createKbCollection": {
      "itemId": "549210276118249300",
      "name": "Printers",
      "parent": KbCollection
    }
  }
}
Mutations
createServiceCatalogItem
Creates a new item in the Products and Services catalog

Response
Returns a ServiceCatalogItem

Arguments
Name	Description
input - CreateServiceCatalogItemInput!	
Query
mutation createServiceCatalogItem($input: CreateServiceCatalogItemInput!) {
  createServiceCatalogItem(input: $input) {
    itemId
    name
    description
    category {
      ...ServiceCategoryFragment
    }
  }
}
Variables
{"input": CreateServiceCatalogItemInput}
Response
{
  "data": {
    "createServiceCatalogItem": {
      "itemId": 4,
      "name": "Hard Disc",
      "description": "abc123",
      "category": ServiceCategory
    }
  }
}
Mutations
createServiceCategory
Creates a new service category in the service catalog.

Response
Returns a ServiceCategory

Arguments
Name	Description
input - CreateServiceCategoryInput!	
Query
mutation createServiceCategory($input: CreateServiceCategoryInput!) {
  createServiceCategory(input: $input) {
    categoryId
    name
  }
}
Variables
{"input": CreateServiceCategoryInput}
Response
{
  "data": {
    "createServiceCategory": {
      "categoryId": "4",
      "name": "Hardware"
    }
  }
}
Mutations
createServiceItem
Creates a new service item in the service catalog.

Response
Returns a ServiceItem

Arguments
Name	Description
input - CreateServiceItemInput!	
Query
mutation createServiceItem($input: CreateServiceItemInput!) {
  createServiceItem(input: $input) {
    itemId
    name
    description
    category {
      ...ServiceCategoryFragment
    }
  }
}
Variables
{"input": CreateServiceItemInput}
Response
{
  "data": {
    "createServiceItem": {
      "itemId": "4",
      "name": "Hard Disc",
      "description": "xyz789",
      "category": ServiceCategory
    }
  }
}
Mutations
createServiceOfferings
Creates service offerings.

Response
Returns [ServiceOffering]

Arguments
Name	Description
input - [CreateServiceOfferingInput!]!	
Query
mutation createServiceOfferings($input: [CreateServiceOfferingInput!]!) {
  createServiceOfferings(input: $input) {
    itemId
    serviceItem
    qty
    billDateTime
    notes
    workItem
  }
}
Variables
{"input": [CreateServiceOfferingInput]}
Response
{
  "data": {
    "createServiceOfferings": {
      "itemId": "4",
      "serviceItem": {},
      "qty": "xyz789",
      "billDateTime": "abc123",
      "notes": "abc123",
      "workItem": {}
    }
  }
}
Mutations
createSite
Creates a site.

Response
Returns a Site

Arguments
Name	Description
input - CreateSiteInput!	
Query
mutation createSite($input: CreateSiteInput!) {
  createSite(input: $input) {
    id
    name
    businessHour {
      ...BusinessHourFragment
    }
    holidayList {
      ...HolidayListFragment
    }
    timezoneCode
    working24x7
    address {
      ...AddressFragment
    }
    contactNumber
    installerInfo {
      ...InstallerDetailsFragment
    }
  }
}
Variables
{"input": CreateSiteInput}
Response
{
  "data": {
    "createSite": {
      "id": 4,
      "name": "Austin",
      "businessHour": [BusinessHour],
      "holidayList": HolidayList,
      "timezoneCode": "America/Los_Angeles",
      "working24x7": false,
      "address": Address,
      "contactNumber": "212-504-4115",
      "installerInfo": [InstallerDetails]
    }
  }
}
Mutations
createTask
Creates a task

Response
Returns a Task

Arguments
Name	Description
input - CreateTaskInput!	
Query
mutation createTask($input: CreateTaskInput!) {
  createTask(input: $input) {
    taskId
    displayId
    title
    description
    status
    estimatedTime
    scheduledStartDate
    dueDate
    overdue
    actualStartDate
    actualEndDate
    technician
    techGroup
    workItem
    taskOrder
  }
}
Variables
{"input": CreateTaskInput}
Response
{
  "data": {
    "createTask": {
      "taskId": "4",
      "displayId": "062822-0001",
      "title": "Install Antivirus",
      "description": "xyz789",
      "status": "Planned",
      "estimatedTime": 500,
      "scheduledStartDate": "2022-07-16T09:00:00",
      "dueDate": "2022-07-25T16:00:00",
      "overdue": true,
      "actualStartDate": "2022-07-15T09:00:00",
      "actualEndDate": "2022-07-22T09:00:00",
      "technician": {"userId": "7928838372746166256", "name": "user3"},
      "techGroup": {
        "groupId": "7928838372746166657",
        "name": "Hardware Problems"
      },
      "workItem": {},
      "taskOrder": 987
    }
  }
}
Mutations
createTicket
Creates a new ticket

Response
Returns a Ticket

Arguments
Name	Description
input - CreateTicketInput!	
Query
mutation createTicket($input: CreateTicketInput!) {
  createTicket(input: $input) {
    ticketId
    displayId
    subject
    source
    department
    site
    requester
    additionalRequester
    followers
    techGroup
    technician
    status
    priority
    impact
    urgency
    category
    subcategory
    cause
    subcause
    resolutionCode
    sla
    createdTime
    updatedTime
    firstResponseDueTime
    firstResponseTime
    firstResponseViolated
    resolutionDueTime
    resolutionTime
    resolutionViolated
    customFields
    requestType
    worklogTimespent
  }
}
Variables
{"input": CreateTicketInput}
Response
{
  "data": {
    "createTicket": {
      "ticketId": "7928838372746166987",
      "displayId": "062822-0005",
      "subject": "Help! Internet is not working!",
      "source": "FORM",
      "department": {},
      "site": {"id": "7928838372746169876", "name": "Austin"},
      "requester": {"userId": "5928838372746169876", "name": "John Williams"},
      "additionalRequester": [
        {"userId": "5928838372746169098", "name": "Howard Stern"}
      ],
      "followers": {},
      "techGroup": {"groupId": "3928838372746169098", "name": "Network"},
      "technician": {"userId": "5928838372746160987", "name": "Jason Wheeler"},
      "status": "New",
      "priority": "Critical",
      "impact": "High",
      "urgency": "High",
      "category": "Network",
      "subcategory": "Wireless",
      "cause": "Component issue",
      "subcause": "Hardware Issue",
      "resolutionCode": "Permanent Fix",
      "sla": {"id": "3928838372746169012", "name": "VIP SLA"},
      "createdTime": "2022-06-28T05:25:10",
      "updatedTime": "2022-06-29T10:25:10",
      "firstResponseDueTime": "2022-06-29T10:25:10",
      "firstResponseTime": "2022-06-29T10:25:10",
      "firstResponseViolated": false,
      "resolutionDueTime": "2022-06-29T10:25:10",
      "resolutionTime": "2022-06-29T10:25:10",
      "resolutionViolated": true,
      "customFields": {
        "udf1text": "value",
        "udf2date": "2022-05-06",
        "udf3dt": "2022-05-06T10:10:10",
        "udf5mselect": ["value1", "value1"]
      },
      "requestType": "xyz789",
      "worklogTimespent": "100.00"
    }
  }
}
Mutations
createTicketConversation
Creates a new ticket conversation.

Response
Returns a TicketConversation

Arguments
Name	Description
input - CreateTicketConversationInput!	
Query
mutation createTicketConversation($input: CreateTicketConversationInput!) {
  createTicketConversation(input: $input) {
    conversationId
    content
    time
    user
    toUsers {
      ...RecipientInfoFragment
    }
    ccUsers {
      ...RecipientInfoFragment
    }
    bccUsers {
      ...RecipientInfoFragment
    }
    attachments {
      ...AttachmentFragment
    }
    type
  }
}
Variables
{"input": CreateTicketConversationInput}
Response
{
  "data": {
    "createTicketConversation": {
      "conversationId": "4",
      "content": "I cannot access my internet! I'm not sure what's happening!",
      "time": "2022-06-29T10:25:10",
      "user": {
        "userId": "3928838372746169098",
        "name": "Joseph John",
        "email": "joseph.john@acme.com"
      },
      "toUsers": [RecipientInfo],
      "ccUsers": [RecipientInfo],
      "bccUsers": [RecipientInfo],
      "attachments": [Attachment],
      "type": "REQ_REPLY"
    }
  }
}
Mutations
createTicketNote
Creates a new ticket note.

Response
Returns a Note

Arguments
Name	Description
input - CreateTicketNoteInput!	
Query
mutation createTicketNote($input: CreateTicketNoteInput!) {
  createTicketNote(input: $input) {
    noteId
    addedBy
    addedOn
    content
    attachments {
      ...AttachmentFragment
    }
    privacyType
  }
}
Variables
{"input": CreateTicketNoteInput}
Response
{
  "data": {
    "createTicketNote": {
      "noteId": "4",
      "addedBy": {"userId": "7928838372746166271", "name": "Clovis Sonsimps"},
      "addedOn": "2022-06-30T10:10:15",
      "content": "I cannot access my internet! I'm not sure what's happening!",
      "attachments": [Attachment],
      "privacyType": "PUBLIC"
    }
  }
}
Mutations
createUser
Creates a new user.

Response
Returns a User

Arguments
Name	Description
input - CreateUserInput!	
Query
mutation createUser($input: CreateUserInput!) {
  createUser(input: $input) {
    userId
    firstName
    lastName
    name
    email
    contactNumber
    reportingManager
    roles
    department
    associations
    customFields
  }
}
Variables
{"input": CreateUserInput}
Response
{
  "data": {
    "createUser": {
      "userId": 4,
      "firstName": "xyz789",
      "lastName": "abc123",
      "name": "abc123",
      "email": "xyz789",
      "contactNumber": "abc123",
      "reportingManager": {},
      "roles": {},
      "department": {},
      "associations": {},
      "customFields": {}
    }
  }
}
Mutations
deleteItDocumentation
Deletes an IT document record.

Response
Returns a Boolean

Arguments
Name	Description
input - ItDocumentationIdentifierInput!	
Query
mutation deleteItDocumentation($input: ItDocumentationIdentifierInput!) {
  deleteItDocumentation(input: $input)
}
Variables
{"input": ItDocumentationIdentifierInput}
Response
{"data": {"deleteItDocumentation": true}}
Mutations
deleteKbArticle
Deletes a KB Article

Response
Returns a Boolean

Arguments
Name	Description
input - DeleteKbArticleInput!	
Query
mutation deleteKbArticle($input: DeleteKbArticleInput!) {
  deleteKbArticle(input: $input)
}
Variables
{"input": DeleteKbArticleInput}
Response
{"data": {"deleteKbArticle": true}}
Mutations
deleteKbCollection
Deletes a KB Collection

Response
Returns a Boolean

Arguments
Name	Description
input - DeleteKbCollectionInput!	
Query
mutation deleteKbCollection($input: DeleteKbCollectionInput!) {
  deleteKbCollection(input: $input)
}
Variables
{"input": DeleteKbCollectionInput}
Response
{"data": {"deleteKbCollection": true}}
Mutations
deleteServiceOffering
Delete a service offering

Response
Returns a Boolean

Arguments
Name	Description
input - ServiceEntryIdentifierInput!	
Query
mutation deleteServiceOffering($input: ServiceEntryIdentifierInput!) {
  deleteServiceOffering(input: $input)
}
Variables
{"input": ServiceEntryIdentifierInput}
Response
{"data": {"deleteServiceOffering": true}}
Mutations
deleteSites
Deletes the sites.

Response
Returns [ID]

Arguments
Name	Description
input - [SiteIdentifierInput!]!	
Query
mutation deleteSites($input: [SiteIdentifierInput!]!) {
  deleteSites(input: $input)
}
Variables
{"input": [SiteIdentifierInput]}
Response
{"data": {"deleteSites": ["4"]}}
Mutations
deleteUser
Deletes the records of an existing user.

Response
Returns an ID!

Arguments
Name	Description
input - DeleteUserInput!	
Query
mutation deleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input)
}
Variables
{"input": DeleteUserInput}
Response
{"data": {"deleteUser": "4"}}
Mutations
deleteWorklog
Delete a worklog

Response
Returns a Boolean

Arguments
Name	Description
input - ServiceEntryIdentifierInput!	
Query
mutation deleteWorklog($input: ServiceEntryIdentifierInput!) {
  deleteWorklog(input: $input)
}
Variables
{"input": ServiceEntryIdentifierInput}
Response
{"data": {"deleteWorklog": true}}
Mutations
hardDeleteTickets
Trashed tickets will be deleted from the system automatically after 30 days. This mutation can be used to delete tickets from the trash.

Response
Returns a Boolean

Arguments
Name	Description
input - [TicketIdentifierInput]	
Query
mutation hardDeleteTickets($input: [TicketIdentifierInput]) {
  hardDeleteTickets(input: $input)
}
Variables
{"input": [TicketIdentifierInput]}
Response
{"data": {"hardDeleteTickets": true}}
Mutations
resolveAlerts
Resolves a list of alerts.

Response
Returns a Boolean

Arguments
Name	Description
input - [ResolveAlertInput]	
Query
mutation resolveAlerts($input: [ResolveAlertInput]) {
  resolveAlerts(input: $input)
}
Variables
{"input": [ResolveAlertInput]}
Response
{"data": {"resolveAlerts": false}}
Mutations
restoreTickets
Restores trashed tickets.

Response
Returns a Boolean

Arguments
Name	Description
input - [TicketIdentifierInput]	
Query
mutation restoreTickets($input: [TicketIdentifierInput]) {
  restoreTickets(input: $input)
}
Variables
{"input": [TicketIdentifierInput]}
Response
{"data": {"restoreTickets": false}}
Mutations
runScriptOnAsset
Runs a script on an asset.

Response
Returns a RunScriptData

Arguments
Name	Description
input - RunScriptInput!	
Query
mutation runScriptOnAsset($input: RunScriptInput!) {
  runScriptOnAsset(input: $input) {
    actionConfigId
    script
    scriptArguments
    addedBy
  }
}
Variables
{"input": RunScriptInput}
Response
{
  "data": {
    "runScriptOnAsset": {
      "actionConfigId": "2861598057825157120",
      "script": {
        "scriptId": "1",
        "name": "ClearTempFiles",
        "language": "PowerShell",
        "custom": true
      },
      "scriptArguments": [{"name": "runtimeVar", "value": "thisisruntime"}],
      "addedBy": {"name": "John snow"}
    }
  }
}
Mutations
softDeleteAsset
Soft-deletes an asset from the platform.

Response
Returns a Boolean

Arguments
Name	Description
input - AssetIdentifierInput	
Query
mutation softDeleteAsset($input: AssetIdentifierInput) {
  softDeleteAsset(input: $input)
}
Variables
{"input": AssetIdentifierInput}
Response
{"data": {"softDeleteAsset": false}}
Mutations
softDeleteTickets
Trash i.,e soft delete tickets.

Response
Returns a Boolean

Arguments
Name	Description
input - [TicketIdentifierInput]	
Query
mutation softDeleteTickets($input: [TicketIdentifierInput]) {
  softDeleteTickets(input: $input)
}
Variables
{"input": [TicketIdentifierInput]}
Response
{"data": {"softDeleteTickets": true}}
Mutations
updateAsset
Updates an asset's data.

Response
Returns an UpdatedAsset

Arguments
Name	Description
input - UpdateAssetInput!	
Query
mutation updateAsset($input: UpdateAssetInput!) {
  updateAsset(input: $input) {
    assetId
    name
    assetClass
    site
    department
    requester
    customFields
  }
}
Variables
{"input": UpdateAssetInput}
Response
{
  "data": {
    "updateAsset": {
      "assetId": "9001114136934215681",
      "name": "DESKTOP-I9QFDTE",
      "assetClass": {"classId": "1", "name": "Windows Machine"},
      "site": {"id": "7928838372746169876", "name": "Austin"},
      "department": {"departmentId": "7928838372746166998", "name": "Sales"},
      "requester": {"userId": "5928838372746169876", "name": "John Williams"},
      "customFields": {
        "udf1text": "value",
        "udf2date": "2022-05-06",
        "udf3dt": "2022-05-06T10:10:10",
        "udf5mselect": ["value1", "value1"]
      }
    }
  }
}
Mutations
updateItDocumentation
Updates an existing IT document record.

Response
Returns an ItDocumentation

Arguments
Name	Description
input - UpdateItDocumentationInput!	
Query
mutation updateItDocumentation($input: UpdateItDocumentationInput!) {
  updateItDocumentation(input: $input) {
    itDocId
    name
    customFields
  }
}
Variables
{"input": UpdateItDocumentationInput}
Response
{
  "data": {
    "updateItDocumentation": {
      "itDocId": 4,
      "name": "xyz789",
      "customFields": {}
    }
  }
}
Mutations
updateKbArticle
Creates a KB Article

Response
Returns a KbArticle

Arguments
Name	Description
input - UpdateKbArticleInput!	
Query
mutation updateKbArticle($input: UpdateKbArticleInput!) {
  updateKbArticle(input: $input) {
    itemId
    name
    parent {
      ...KbCollectionFragment
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
      ...DocumentSharedDetailsFragment
    }
    loginRequired
  }
}
Variables
{"input": UpdateKbArticleInput}
Response
{
  "data": {
    "updateKbArticle": {
      "itemId": "3047341892401414939",
      "name": "How to Set Up a Printer on Your Device",
      "parent": KbCollection,
      "description": "A step-by-step guide to help you connect and configure a printer on your computer or mobile device.",
      "status": "PUBLISHED",
      "createdBy": {
        "userId": "9001114136934215681",
        "name": "John Williams",
        "email": "john@log.com"
      },
      "createdOn": "2025-07-01T12:12:16.892",
      "lastModifiedBy": {
        "userId": "9001114136934215681",
        "name": "John Williams",
        "email": "john@log.com"
      },
      "lastModifiedOn": "2025-07-01T12:12:16.892",
      "viewCount": 1,
      "articleType": "HTML",
      "visibility": [DocumentSharedDetails],
      "loginRequired": true
    }
  }
}
Mutations
updateKbCollection
Updates a KB Collection

Response
Returns a KbCollection

Arguments
Name	Description
input - UpdateKbCollectionInput!	
Query
mutation updateKbCollection($input: UpdateKbCollectionInput!) {
  updateKbCollection(input: $input) {
    itemId
    name
    parent {
      ...KbCollectionFragment
    }
  }
}
Variables
{"input": UpdateKbCollectionInput}
Response
{
  "data": {
    "updateKbCollection": {
      "itemId": "549210276118249300",
      "name": "Printers",
      "parent": KbCollection
    }
  }
}
Mutations
updateServiceCatalogItem
Updates an existing item in the Products and Services catalog

Response
Returns a ServiceCatalogItem

Arguments
Name	Description
input - UpdateServiceCatalogItemInput!	
Query
mutation updateServiceCatalogItem($input: UpdateServiceCatalogItemInput!) {
  updateServiceCatalogItem(input: $input) {
    itemId
    name
    description
    category {
      ...ServiceCategoryFragment
    }
  }
}
Variables
{"input": UpdateServiceCatalogItemInput}
Response
{
  "data": {
    "updateServiceCatalogItem": {
      "itemId": 4,
      "name": "Hard Disc",
      "description": "abc123",
      "category": ServiceCategory
    }
  }
}
Mutations
updateServiceOffering
Updates a service offering

Response
Returns a ServiceOffering

Arguments
Name	Description
input - UpdateServiceOfferingInput!	
Query
mutation updateServiceOffering($input: UpdateServiceOfferingInput!) {
  updateServiceOffering(input: $input) {
    itemId
    serviceItem
    qty
    billDateTime
    notes
    workItem
  }
}
Variables
{"input": UpdateServiceOfferingInput}
Response
{
  "data": {
    "updateServiceOffering": {
      "itemId": 4,
      "serviceItem": {},
      "qty": "xyz789",
      "billDateTime": "xyz789",
      "notes": "xyz789",
      "workItem": {}
    }
  }
}
Mutations
updateSite
Updates a site.

Response
Returns a Site

Arguments
Name	Description
input - UpdateSiteInput!	
Query
mutation updateSite($input: UpdateSiteInput!) {
  updateSite(input: $input) {
    id
    name
    businessHour {
      ...BusinessHourFragment
    }
    holidayList {
      ...HolidayListFragment
    }
    timezoneCode
    working24x7
    address {
      ...AddressFragment
    }
    contactNumber
    installerInfo {
      ...InstallerDetailsFragment
    }
  }
}
Variables
{"input": UpdateSiteInput}
Response
{
  "data": {
    "updateSite": {
      "id": "4",
      "name": "Austin",
      "businessHour": [BusinessHour],
      "holidayList": HolidayList,
      "timezoneCode": "America/Los_Angeles",
      "working24x7": true,
      "address": Address,
      "contactNumber": "212-504-4115",
      "installerInfo": [InstallerDetails]
    }
  }
}
Mutations
updateTicket
Updates an existing ticket

Response
Returns a Ticket

Arguments
Name	Description
input - UpdateTicketInput!	
Query
mutation updateTicket($input: UpdateTicketInput!) {
  updateTicket(input: $input) {
    ticketId
    displayId
    subject
    source
    department
    site
    requester
    additionalRequester
    followers
    techGroup
    technician
    status
    priority
    impact
    urgency
    category
    subcategory
    cause
    subcause
    resolutionCode
    sla
    createdTime
    updatedTime
    firstResponseDueTime
    firstResponseTime
    firstResponseViolated
    resolutionDueTime
    resolutionTime
    resolutionViolated
    customFields
    requestType
    worklogTimespent
  }
}
Variables
{"input": UpdateTicketInput}
Response
{
  "data": {
    "updateTicket": {
      "ticketId": "7928838372746166987",
      "displayId": "062822-0005",
      "subject": "Help! Internet is not working!",
      "source": "FORM",
      "department": {},
      "site": {"id": "7928838372746169876", "name": "Austin"},
      "requester": {"userId": "5928838372746169876", "name": "John Williams"},
      "additionalRequester": [
        {"userId": "5928838372746169098", "name": "Howard Stern"}
      ],
      "followers": {},
      "techGroup": {"groupId": "3928838372746169098", "name": "Network"},
      "technician": {"userId": "5928838372746160987", "name": "Jason Wheeler"},
      "status": "New",
      "priority": "Critical",
      "impact": "High",
      "urgency": "High",
      "category": "Network",
      "subcategory": "Wireless",
      "cause": "Component issue",
      "subcause": "Hardware Issue",
      "resolutionCode": "Permanent Fix",
      "sla": {"id": "3928838372746169012", "name": "VIP SLA"},
      "createdTime": "2022-06-28T05:25:10",
      "updatedTime": "2022-06-29T10:25:10",
      "firstResponseDueTime": "2022-06-29T10:25:10",
      "firstResponseTime": "2022-06-29T10:25:10",
      "firstResponseViolated": false,
      "resolutionDueTime": "2022-06-29T10:25:10",
      "resolutionTime": "2022-06-29T10:25:10",
      "resolutionViolated": false,
      "customFields": {
        "udf1text": "value",
        "udf2date": "2022-05-06",
        "udf3dt": "2022-05-06T10:10:10",
        "udf5mselect": ["value1", "value1"]
      },
      "requestType": "xyz789",
      "worklogTimespent": "100.00"
    }
  }
}
Mutations
updateUser
Updates information of an existing user.

Response
Returns a User

Arguments
Name	Description
input - UpdateUserInput!	
Query
mutation updateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    userId
    firstName
    lastName
    name
    email
    contactNumber
    reportingManager
    roles
    department
    associations
    customFields
  }
}
Variables
{"input": UpdateUserInput}
Response
{
  "data": {
    "updateUser": {
      "userId": "4",
      "firstName": "abc123",
      "lastName": "xyz789",
      "name": "xyz789",
      "email": "abc123",
      "contactNumber": "xyz789",
      "reportingManager": {},
      "roles": {},
      "department": {},
      "associations": {},
      "customFields": {}
    }
  }
}
Types
Address
Field Name	Description
addressId - ID	The ID of the address.
line1 - String	The address line 1 of the site.
line2 - String	The address line 2 of the site.
line3 - String	The address line 3 of the site.
city - String	The city of the site.
postalCode - String	The postal code of the site.
countryCode - String	The country of the site.
stateCode - String	The state/subdivision of the site.
Example
{
  "addressId": "4",
  "line1": "Ap #867-859 Sit Rd.",
  "line2": "xyz789",
  "line3": "xyz789",
  "city": "Azusa",
  "postalCode": "10005",
  "countryCode": "US",
  "stateCode": "NY"
}
Types
Alert
Specifies an alert's data

Field Name	Description
id - ID	ID of the alert
message - String	The alert message
createdTime - String	The time of creation of the alert
status - String	The alert's status
severity - String	The severity of the alert
description - String	The alert's description
asset - JSON	The asset that the alert is associated to
policy - JSON	The policy through which the alert is created
Example
{
  "id": "5150178940650622977",
  "message": "Low Disk Space",
  "createdTime": "2021-12-18T15:35",
  "status": "Resolved",
  "severity": "Critical",
  "description": "Actual free disk space at 2021-12-18T10:05 UTC is [c: : 17.0%] Alert condition:  Disk free space is less than 30.0% for 10 minutes",
  "asset": {
    "assetId": "9001114136934215681",
    "name": "DESKTOP-I9QFDTE",
    "owner": {"name": "John Williams", "email": "john@log.com"},
    "site": {"id": "7928838372746169876", "name": "Austin"}
  },
  "policy": {
    "name": "Medium CPU Usage",
    "policyType": "Hardware Performance Monitoring"
  }
}
Types
AlertList
The list of data for Alert details.

Field Name	Description
alerts - [Alert]	Data about the list of alerts.
listInfo - ListInfo	Details about the list.
Example
{
  "alerts": [Alert],
  "listInfo": ListInfo
}
Types
ArticleStatus
Defines the publication status of a KB Article.

Enum Value	Description
DRAFT

PUBLISHED

Example
"DRAFT"
Types
ArticleType
Defines the content format of a KB Article.

Enum Value	Description
HTML

PDF

Example
"HTML"
Types
Asset
Specifies the asset's data.

Field Name	Description
assetId - ID	ID of the asset
name - String!	Name of the asset
assetClass - JSON!	Asset class details of the asset
site - JSON!	Site details of the asset
department - JSON	Department of the asset
requester - JSON	The requester of the asset
primaryMac - String	Primary mac address of the asset
loggedInUser - String	The asset's current logged-in user
serialNumber - String	Serial number of the asset
manufacturer - String	Manufacturer of the asset
model - String	Model of the asset
hostName - String	Hostname of the asset
publicIp - String	The public IP of the asset
gateway - String	Gateway of the asset
platform - String	The platform of the asset
domain - String	The domain of the asset
status - String	ONLINE/ OFFLINE Status of the asset
sysUptime - String	System uptime of the asset
lastCommunicatedTime - String	The last communicated time of the asset to SuperOps.ai
agentVersion - String	The asset's SuperOps.ai agent version
platformFamily - String	The platform family of the asset
platformCategory - String	The platform category of the asset
platformVersion - String	The platform version of the asset
patchStatus - String	The patch status of the asset
warrantyExpiryDate - String	The Warranty Expiration Date of the Asset
purchasedDate - String	The Purchased Date of the Asset
customFields - JSON	Custom field details of the asset
Arguments
fields - [String]
lastReportedTime - String	The last reported time of the asset to SuperOps.ai
Example
{
  "assetId": "9001114136934215681",
  "name": "DESKTOP-I9QFDTE",
  "assetClass": {"classId": "1", "name": "Windows Machine"},
  "site": {"id": "7928838372746169876", "name": "Austin"},
  "department": {"departmentId": "7928838372746166998", "name": "Sales"},
  "requester": {"userId": "5928838372746169876", "name": "John Williams"},
  "primaryMac": "18:cc:18:e0:6f:92",
  "loggedInUser": "John Williams",
  "serialNumber": "15CD10509R721",
  "manufacturer": "HP",
  "model": "HP Pavilion Laptop 14-dv0xxx",
  "hostName": "DESKTOP-9J8RLGD",
  "publicIp": "178.181.11.21",
  "gateway": "10.2.236.1",
  "platform": "Microsoft Windows 10 Home Single Language",
  "domain": "WORKGROUP",
  "status": "ONLINE",
  "sysUptime": "1 hour 38 minutes",
  "lastCommunicatedTime": "2022-11-29T15:54:16.270",
  "agentVersion": "202211151251",
  "platformFamily": "Standalone Workstation",
  "platformCategory": "WORKSTATION",
  "platformVersion": "10.0.19044 Build 19044 (21H2)",
  "patchStatus": "Fully Patched",
  "warrantyExpiryDate": "2023-05-27",
  "purchasedDate": "2030-05-27",
  "customFields": {
    "udf1text": "value",
    "udf2date": "2022-05-06",
    "udf3dt": "2022-05-06T10:10:10",
    "udf5mselect": ["value1", "value1"]
  },
  "lastReportedTime": "2023-08-22T19:23:22.678"
}
Types
AssetActivityData
Specifies the activity data of an asset.

Field Name	Description
activityId - ID	The ID of the activity data
module - String	The module name of the activity
activityType - String	The type of the activity
activityData - JSON	The activity's data
createdBy - JSON	Specifies the user that triggered the activity
createdTime - String	The time of creation of the activity
Example
{
  "activityId": 4,
  "module": "abc123",
  "activityType": "xyz789",
  "activityData": {},
  "createdBy": {},
  "createdTime": "abc123"
}
Types
AssetActivityList
Specifies the Response of AssetActivity

Field Name	Description
activities - [AssetActivityData]	Specifies the list of activities on the asset.
listInfo - ListInfo	Details about the list.
Example
{
  "activities": [AssetActivityData],
  "listInfo": ListInfo
}
Types
AssetCPU
Specifies the CPU Details

Field Name	Description
assetId - ID!	The ID of the asset
cpuName - String	Specifies the asset's CPU name.
currentSpeed - JSON	Specifies the current CPU speed of the asset.
maxSpeed - JSON	Specifies the maximum CPU speed of the asset.
physicalCore - Int	Specifies the physical core count of the CPU.
logicalCore - Int	Specifies the logical core count of the CPU.
architecture - String	Specifies the CPU's architecture.
l1Cache - JSON	Specifies the details of the L1 cache.
l2Cache - JSON	Specifies the Details of the L2 cache.
l3Cache - JSON	Specifies the Details of the L3 cache.
processCount - String	Specifies the total number of processes.
threadsCount - String	Specifies the total thread count of the CPU.
handlesCount - String	Specifies the total number of handles of the CPU.
cpuUsage - JSON	specifies the asset's current CPU usage.
Example
{
  "assetId": "9001114136934215681",
  "cpuName": "Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz",
  "currentSpeed": {"actualValue": 3725.3184, "value": "3.725", "unit": "GHz"},
  "maxSpeed": {"actualValue": 1800, "value": "1.8", "unit": "GHz"},
  "physicalCore": 4,
  "logicalCore": 8,
  "architecture": "x86_64",
  "l1Cache": {"actualValue": 262144, "value": "256", "unit": "KB"},
  "l2Cache": {"actualValue": 1048576, "value": "1", "unit": "MB"},
  "l3Cache": {"actualValue": 6291456, "value": "6", "unit": "MB"},
  "processCount": "237",
  "threadsCount": "2869",
  "handlesCount": "117046",
  "cpuUsage": {"value": "36.52", "unit": "%", "actualValue": "36.52"}
}
Types
AssetDetailsListInput
Specifies the input required to fetch asset details

Input Field	Description
assetId - ID!	
The ID of the asset.

listInfo - ListInfoInput	
Specifies the input required to fetch multiple records.

Example
{"assetId": "9001114136934215681", "listInfo": {"page": 1, "pageSize": 10}}
Types
AssetDisk
Specifies the data in each partition

Field Name	Description
drive - String	Name of the disk partition Ex:"c:"
discType - String	Disk type of the partition Ex:"Local Disk"
fileSystem - String	Type of file system Ex: "NTFS"
maxFileLength - Int	Specifies that maximum file size length in the partition
autoMounted - Boolean	Specifies whether the partition is autoMounted
compressed - Boolean	Specifies whether the partition is compressed
pageFile - Boolean	Specifies whether pagefile is enabled in the partition
indexed - Boolean	Specifies whether the partition is indexed
size - JSON	Total space allocated to the partition
freeSize - JSON	Free size available in the partition
activeTime - JSON	Specifies the disk's active time
responseTime - JSON	Specifies the response time of the partition
readSpeed - JSON	Specifies the reading speed of the partition
writeSpeed - JSON	Specifies the writing speed of the partition
driveUsage - JSON	Specifies the drive usage of the partition drive
Example
{
  "drive": "abc123",
  "discType": "abc123",
  "fileSystem": "xyz789",
  "maxFileLength": 123,
  "autoMounted": true,
  "compressed": false,
  "pageFile": false,
  "indexed": true,
  "size": {},
  "freeSize": {},
  "activeTime": {},
  "responseTime": {},
  "readSpeed": {},
  "writeSpeed": {},
  "driveUsage": {}
}
Types
AssetIdentifierInput
Specifies the identifier input for the asset.

Input Field	Description
assetId - ID!	
The ID of the asset.

Example
{"assetId": "9001114136934215681"}
Types
AssetInterface
Specifies the primary network interface's details

Field Name	Description
name - String	Specifies the interface name Ex: Ethernet
mac - String	Specifies the mac address of the interface
ipv4Address - String	Specifies ipv4 address of the interface
ipv6Address - String	Specifies ipv6 address of the interface
infIndex - Int	Specifies the unique identifying number associated with a physical or logical interface
mtu - String	Size of the maximum transmission unit of the interface
connectType - String	Specifies the connection type Ex: Ethernet 802.3
lineSpeed - JSON	Specifies the line speed of the interface
dataInPerSec - JSON	Specifies the interface data in per sec
dataOutPerSec - JSON	Specifies the interface data out per sec
adapterName - String	Specifies the adapter name Ex:Intel(R) PRO/1000 MT Desktop Adapter
Example
{
  "name": "Wi-Fi 2",
  "mac": "f7:af:65:f9:2c:8d",
  "ipv4Address": "11.3.234.124",
  "ipv6Address": "fe70::1d65:4b4:62cc:f085",
  "infIndex": 9,
  "mtu": "1500",
  "connectType": "Ethernet 802.3",
  "lineSpeed": {"actualValue": 725850000, "value": "725.85", "unit": "Mbps"},
  "dataInPerSec": {
    "actualValue": 29802.828125,
    "value": "29.803",
    "unit": "Kbps"
  },
  "dataOutPerSec": {
    "actualValue": 7459.25244140625,
    "value": "7.459",
    "unit": "Kbps"
  },
  "adapterName": "Intel(R) Wireless-AC 9560 #2"
}
Types
AssetList
The list of data for asset details.

Field Name	Description
assets - [Asset]	The list of assets.
listInfo - ListInfo	Details about the list.
Example
{
  "assets": [Asset],
  "listInfo": ListInfo
}
Types
AssetMemory
Specifies the memory details of the asset

Field Name	Description
totalMemory - JSON	Specifies the asset's total memory
usedMemory - JSON	Specifies the used memory in the asset
availableMemory - JSON	Specifies the available memory in the asset
cachedMemory - JSON	Specifies the asset's cache memory details
pagedPoolByte - JSON	Specifies the pagedPoolByte size
nonPagedPoolByte - JSON	Specifies the nonPagedPoolByte size
memoryUsage - JSON	Specifies how much memory was used (in %)
swapTotalMemory - JSON	Specifies the total swap memory
swapAvailableMemory - JSON	Specifies the available swap memory
swapUsedMemory - JSON	Specifies the used swap memory
Example
{
  "totalMemory": {"actualValue": 8460263424, "value": "7.88", "unit": "GB"},
  "usedMemory": {"actualValue": 5809172480, "value": "5.41", "unit": "GB"},
  "availableMemory": {"actualValue": 2651090944, "value": "2.47", "unit": "GB"},
  "cachedMemory": {"actualValue": 2697728000, "value": "2.51", "unit": "GB"},
  "pagedPoolByte": {"actualValue": 490795008, "value": "468.06", "unit": "MB"},
  "nonPagedPoolByte": {
    "actualValue": 878739456,
    "value": "838.03",
    "unit": "MB"
  },
  "memoryUsage": {"value": "68.66", "unit": "%", "actualValue": "68.66"},
  "swapTotalMemory": {"actualValue": 0, "value": "0", "unit": "bytes"},
  "swapAvailableMemory": {"actualValue": 0, "value": "0", "unit": "bytes"},
  "swapUsedMemory": {"actualValue": 0, "value": "0", "unit": "bytes"}
}
Types
AssetPatchList
Specifies the patch list data

Field Name	Description
assetPatches - [PatchData]	Specifies the list of asset patch details
listInfo - ListInfo	The detail about the list.
Example
{
  "assetPatches": [PatchData],
  "listInfo": ListInfo
}
Types
AssetSoftware
Specifies the asset software details

Field Name	Description
id - ID	The ID of the Software Inventory
software - JSON	Specifies the details about the software
version - String	Version of the software
installedDate - String	Installed date of the software
bitVersion - String	Bit version of the software
installedPath - String	Installed path of the software
Example
{
  "id": "8647756412135241530",
  "software": {
    "softwareId": "6536746415185346560",
    "name": "AirDrop",
    "manufacturer": "apple"
  },
  "version": "1.0",
  "installedDate": "2022-08-11T06:44:38",
  "bitVersion": "ARM 64-Bit",
  "installedPath": "/System/Library/CoreServices/Finder.app/Contents/Applications/AirDrop.app"
}
Types
AssetSoftwareList
Specifies the asset software list data

Field Name	Description
assetSoftwares - [AssetSoftware]	Specifies the list of asset softwares
listInfo - ListInfo	The detail about the list.
Example
{
  "assetSoftwares": [AssetSoftware],
  "listInfo": ListInfo
}
Types
AssetSummary
Specifies the Summary Details of Asset including CPU,Memory,disk,netinterface,userlog

Field Name	Description
cpu - AssetCPU	specifies the cpu details of the Asset
memory - AssetMemory	specifies the memory details of the Asset
disk - Disks	specifies the disk details of the Asset
assetInterface - AssetInterface	specifies the interface details of the Asset
lastUserLog - AssetUserLog	user logs details of the Asset
Example
{
  "cpu": AssetCPU,
  "memory": AssetMemory,
  "disk": Disks,
  "assetInterface": AssetInterface,
  "lastUserLog": AssetUserLog
}
Types
AssetUserLog
Specifies an asset's user log details

Field Name	Description
id - ID	Specifies the ID of the user log record
name - String	Specifies the user who last logged in to the asset
lastLoginTime - String	Specifies the last logged-in time of the user
Example
{
  "id": "4299375678745489509",
  "name": "DESKTOPNNHN1T8\\test",
  "lastLoginTime": "2022-11-30T14:18:44"
}
Types
AssignDeviceCategoryInput
Specifies the input required to assign device category to assets.

Input Field	Description
assetIds - [ID!]!	
Specifies the list of assetIds whose device categories need to be updated.

deviceCategoryId - ID!	
Specifies the device categories ID.

Example
{"assetIds": [4567898545679], "deviceCategoryId": 4567898595679}
Types
Attachment
The attachment.

Field Name	Description
fileName - String!	The sanitized file name.
originalFileName - String!	The original file name.
fileSize - String!	The file size.
Example
{"fileName": "acme.pdf", "originalFileName": "acme.pdf", "fileSize": "20485"}
Types
Boolean
The Boolean scalar type represents true or false.

Example
true
Types
BusinessHour
The operating hours definition.

Field Name	Description
day - DayOfWeek!	The day of the week.
start - String!	The start time of the day.
end - String!	The end time of the day.
Example
{"day": "MONDAY", "start": "09:30", "end": "18:30"}
Types
CreateAddressInput
Input Field	Description
line1 - String	
Specifies the address line 1 of the site.

line2 - String	
Specifies the address line 2 of the site.

line3 - String	
Specifies the address line 3 of the site.

city - String	
Specifies the city of the site.

postalCode - String	
Specifies the postal code of the site.

countryCode - String	
Specifies the country of the site. The value should be specified as ISO 3166 two letter country code.

stateCode - String	
Specifies the state/subdivision of the site. The value should be specified as an ISO 3166 state/subdivision code.

Example
{
  "line1": "Ap #867-859 Sit Rd.",
  "line2": "abc123",
  "line3": "xyz789",
  "city": "Azusa",
  "postalCode": "10005",
  "countryCode": "US",
  "stateCode": "NY"
}
Types
CreateAlertInput
Input Field	Description
assetId - ID!	
ID of the Asset

message - String!	
The alert message

description - String	
The alert's description

severity - String	
The severity of the alert

Example
{
  "assetId": "86414574192018566776",
  "message": "High CPU Usage",
  "description": "CPU Usage is very higher than usual",
  "severity": "High"
}
Types
CreateAttachmentInput
Specifies the input required to create an attachment.

Input Field	Description
fileName - String!	
The name of the file. This input is mandatory.

originalFileName - String!	
The original file name of the file. This input is mandatory.

fileSize - String!	
The size of the file. This input is mandatory.

Example
{"fileName": "acme.pdf", "originalFileName": "acme.pdf", "fileSize": "12556"}
Types
CreateBusinessHourInput
Specifies the input to create business hours.

Input Field	Description
day - DayOfWeek!	
The day of the week. This input is mandatory.

start - String!	
The start time of the day. The value should be in the format of HH:MM i.,e between 00:00 to 23:59. This input is mandatory.

end - String!	
The end time of the day. The value should be in the format of HH:MM i.,e between 00:00 to 23:59. This input is mandatory.

Example
{"day": "MONDAY", "start": "09:00", "end": "18:00"}
Types
CreateDepartmentInput
Specifies the input required to create a department

Input Field	Description
name - String!	
The name of the department. The input is mandatory.

head - UserIdentifierInput	
Specifies the head of the department.

Example
{"name": "Sales", "head": UserIdentifierInput}
Types
CreateDocumentShareInput
Used to assign initial sharing configurations to a document.

Input Field	Description
added - [NewShareDetailsInput!]!	
New share configurations to add.

Example
{"added": [NewShareDetailsInput]}
Types
CreateItDocumentationInput
Specifies the input required to create a new IT Document Record

Input Field	Description
typeId - ID!	
Specifies the type ID of IT document category to create a new IT document

name - String!	
Name of the IT document

site - SiteIdentifierInput	
Site details of the IT document record

customFields - JSON	
Custom field details of the IT document record

Example
{
  "typeId": "3077519261260693504",
  "name": "edited It Doc Record",
  "site": {"id": "1234323434"},
  "customFields": {
    "udf1text": "value",
    "udf2date": "2022-05-06",
    "udf3dt": "2022-05-06T10:10:10",
    "udf5mselect": ["value1", "value1"]
  }
}
Types
CreateKbArticleInput
Used to create a new KB Article.

Input Field	Description
name - String!	
Title of the article.

parent - KBItemIdentifierInput!	
Identifier of the parent collection.

status - ArticleStatus!	
Status of the article.

content - String!	
Body of the article (only HTML).

visibility - CreateDocumentShareInput!	
Sharing configuration.

loginRequired - Boolean	
Boolean indicating if login is required to view the article.

Example
{
  "name": "Troubleshooting Your Wi-Fi Connection",
  "parent": KBItemIdentifierInput,
  "status": "DRAFT",
  "content": "<html><body>This article describes you about troubleshooting the Wi-Fi connection</body></html>",
  "visibility": CreateDocumentShareInput,
  "loginRequired": true
}
Types
CreateKbCollectionInput
Used to create a new KB Collection.

Input Field	Description
name - String!	
Name of the collection.

parent - KBItemIdentifierInput	
Parent collection identifier.

Example
{
  "name": "Network Connectivity",
  "parent": KBItemIdentifierInput
}
Types
CreateServiceCatalogItemInput
Input for creating a Product

Input Field	Description
name - String!	
Name of item, must be unique in the service catalog

description - String	
A Short description about the Product

category - ServiceCategoryIdentifierInput	
Identifier of the category under which the item is created

Example
{
  "name": "abc123",
  "description": "abc123",
  "category": ServiceCategoryIdentifierInput
}
Types
CreateServiceCategoryInput
Specifies the input for the service category.

Input Field	Description
name - String!	
The name of the category.

Example
{"name": "abc123"}
Types
CreateServiceItemInput
Specifies the input for the service item.

Input Field	Description
name - String!	
The name of the service item.

description - String	
A short description of the service item.

category - ServiceCategoryIdentifierInput	
The category of the service item.

Example
{
  "name": "xyz789",
  "description": "abc123",
  "category": ServiceCategoryIdentifierInput
}
Types
CreateServiceOfferingInput
Input Field	Description
serviceItem - ServiceItemIdentifierInput	
Specifies the service item.

qty - String!	
The number of offered units.

billDateTime - String!	
The datetime of the worklog.

notes - String	
The notes of the worklog.

workItem - WorkItemIdentifierInput!	
Specifies the Work identifier under which the worklog is created.

Example
{
  "serviceItem": ServiceItemIdentifierInput,
  "qty": "abc123",
  "billDateTime": "abc123",
  "notes": "xyz789",
  "workItem": WorkItemIdentifierInput
}
Types
CreateSiteInput
Specifies the input required to create a site.

Input Field	Description
name - String!	
The name of the site. This input is mandatory.

working24x7 - Boolean!	
Specifies whether the site has specific business hours or works 24x7. This input is mandatory.

businessHour - [CreateBusinessHourInput]	
Specifies the business hours of the site if working 24x7 is false.

holidayList - HolidayListIdentifierInput	
Specifies the holiday list of the site.

timezoneCode - String!	
Specifies the timezone of the site. The value should be specified in the IANA time zone database, for example, America/New_York. This input is mandatory.

address - CreateAddressInput	
Specifies the address of the site.

contactNumber - String	
The contact number of the site.

Example
{
  "name": "Austin",
  "working24x7": false,
  "businessHour": [CreateBusinessHourInput],
  "holidayList": HolidayListIdentifierInput,
  "timezoneCode": "America/Los_Angeles",
  "address": CreateAddressInput,
  "contactNumber": "+16412349876"
}
Types
CreateTaskInput
Specifies the input required to create a task.

Input Field	Description
title - String!	
Specifies the title of the task. This input is mandatory.

description - String	
Specifies the description of the task.

status - String!	
Specifies the status of the task. The value should be from the WorkStatus (name field) type.

estimatedTime - Int	
Specifies the estimated time of the task in minutes.

scheduledStartDate - String	
Specifies the scheduled start datetime of the task. The datetime value should be specified in ISO 8601 format i.e., 2022-08-15T13:15:30

dueDate - String	
Specifies the due datetime of the task. The datetime value should be specified in ISO 8601 format i.e., 2022-08-15T13:15:30

technician - UserIdentifierInput	
Specifies the technician to whom the task is assigned.

techGroup - TechnicianGroupIdentifierInput	
Specifies the technician group to which the task is assigned.

taskOrder - Int	
The Order in which the tasks should be displayed in UI

workItem - WorkItemIdentifierInput	
The workItem to which the task is associated.

Example
{
  "title": "Install Antivirus",
  "description": "abc123",
  "status": "xyz789",
  "estimatedTime": 500,
  "scheduledStartDate": "2022-07-15T09:00:00",
  "dueDate": "2022-07-25T16:00:00",
  "technician": UserIdentifierInput,
  "techGroup": TechnicianGroupIdentifierInput,
  "taskOrder": 123,
  "workItem": WorkItemIdentifierInput
}
Types
CreateTicketConversationInput
Specifies the input required to create a ticket conversation.

Input Field	Description
content - String	
Specifies the conversation content.

user - UserIdentifierInput	
Specifies the user who creates the conversation.

time - String	
Specifies the datetime when the conversation was created.

toUsers - [RecipientIdentifierInput]	
Specifies the list of TO recipients.

ccUsers - [RecipientIdentifierInput]	
Specifies the list of CC recipients.

bccUsers - [RecipientIdentifierInput]	
Specifies the list of BCC recipients.

attachments - [CreateAttachmentInput]	
Specifies the list of attachments

ticket - TicketIdentifierInput!	
Specifies the ticket under which the conversation will be created.

sendMail - Boolean	
An email will be send for the conversation initiated by the technician. This attribute specifies whether an email need to be send or not.

Example
{
  "content": "I cannot access my internet! I'm not sure what's happening!",
  "user": UserIdentifierInput,
  "time": "2025:01:10T10:10:10",
  "toUsers": [RecipientIdentifierInput],
  "ccUsers": [RecipientIdentifierInput],
  "bccUsers": [RecipientIdentifierInput],
  "attachments": [CreateAttachmentInput],
  "ticket": TicketIdentifierInput,
  "sendMail": true
}
Types
CreateTicketInput
Specifies the input required to create a ticket.

Input Field	Description
subject - String!	
Specifies the subject of the ticket. This input is mandatory.

description - String	
Specifies the description of the ticket.

descriptionAttachments - [CreateAttachmentInput]	
Specifies the description attachments of the ticket.

site - SiteIdentifierInput!	
Specifies the site to which the ticket is associated.

department - DepartmentIdentifierInput	
Specifies the department to which the ticket is associated.

requester - UserIdentifierInput	
Specifies the requester for whom the ticket is created.

techGroup - TechnicianGroupIdentifierInput	
Specifies the technician group to which the ticket is assigned.

technician - UserIdentifierInput	
Specifies the technician to whom the ticket is assigned.

status - String	
Specifies the status of the ticket. The value should be from the Status (name field) type.

source - String!	
Specifies the creation source of the ticket. This input is mandatory.

priority - String	
Specifies the priority of the ticket. The value should be from the Priority (name field) type.

impact - String	
Specifies the impact of the ticket. The value should be from the Impact (name field) type.

urgency - String	
Specifies the urgency of the ticket. The value should be from the Urgency (name field) type.

category - String	
Specifies the category of the ticket. The value should be from the Category (name field) type.

subcategory - String	
Specifies the subcategory of the ticket. The value should be from the SubCategory (name field) type.

cause - String	
Specifies the cause of the ticket. The value should be from the Cause (name field) type.

subcause - String	
Specifies the sub-cause of the ticket. The value should be from the SubCause (name field) type.

sla - SLAIdentifierInput	
Specifies the SLA of the ticket.

resolutionCode - String	
Specifies the resolution code of the ticket.

customFields - JSON	
Specifies the custom fields values for the ticket. Each entry in the JSON would be a key-value. The key will be a system-generated, unique name of the custom field (columnName field of CustomField type). The value for text, paragraph, radio, select, numeric, decimal, date, datetime should be given as a string. The value for checkbox, multi-select should be an array of string.

For example, the value could be {"udf1text": "value", "udf2mselect": ["value1", "value2"]}

addAdditionalRequester - [UserIdentifierInput]	
Specifies the additional requesters to be added.

addFollowers - [UserIdentifierInput]	
Specifies the followers to be added.

createdTime - String	
Specifies the datetime when the ticket was created.

updatedTime - String	
Specifies the datetime when the ticket was updated.

subSource - String	
Specifies the source with which integration the ticket was created from.

sourceReferenceId - String	
Specifies the referenceId of the ticket in the integration the ticket was created from.

addAssets - [AssetIdentifierInput]	
Specifies the assets to be added

suppressCloseNotification - Boolean	
Indicates whether the close notification has to be suppressed while closing the ticket

firstResponseTime - String	
The first response time of the ticket.

resolutionTime - String	
The resolution time of the ticket.

requestType - String	
Specifies the type of the ticket. This input is mandatory.

Example
{
  "subject": "Help! Internet is not working!",
  "description": "I cannot access my internet! I'm not sure what's happening!",
  "descriptionAttachments": [CreateAttachmentInput],
  "site": SiteIdentifierInput,
  "department": DepartmentIdentifierInput,
  "requester": UserIdentifierInput,
  "techGroup": TechnicianGroupIdentifierInput,
  "technician": UserIdentifierInput,
  "status": "New",
  "source": "FORM",
  "priority": "Critical",
  "impact": "High",
  "urgency": "High",
  "category": "Network",
  "subcategory": "Wireless",
  "cause": "Component issue",
  "subcause": "Hardware Issue",
  "sla": SLAIdentifierInput,
  "resolutionCode": "Permanent Fix",
  "customFields": {
    "udf1text": "value",
    "udf2date": "2022-05-06",
    "udf3dt": "2022-05-06T10:10:10",
    "udf5mselect": ["value1", "value1"]
  },
  "addAdditionalRequester": [UserIdentifierInput],
  "addFollowers": [UserIdentifierInput],
  "createdTime": "2022-05-05T10:30:00",
  "updatedTime": "2022-05-06T10:05:00",
  "subSource": "abc123",
  "sourceReferenceId": "xyz789",
  "addAssets": [AssetIdentifierInput],
  "suppressCloseNotification": true,
  "firstResponseTime": "2022-05-06T10:05:00",
  "resolutionTime": "2022-05-06T10:05:00",
  "requestType": "Incident"
}
Types
CreateTicketNoteInput
Specifies the input to create ticket note.

Input Field	Description
ticket - TicketIdentifierInput!	
Specifies the ticket under which the note will be created.

content - String!	
Specifies the content of the note.

attachments - [CreateAttachmentInput]	
Specifies the attachments of the note.

addedBy - UserIdentifierInput	
Specifies the technician who created the note.

addedOn - String	
Specifies the datetime when the note was created.

privacyType - NotePrivacyType	
Set to PUBLIC if the note should be shown to the requester; otherwise, set to PRIVATE. The default is PRIVATE.

Example
{
  "ticket": TicketIdentifierInput,
  "content": "The network access points need to be replaced",
  "attachments": [CreateAttachmentInput],
  "addedBy": UserIdentifierInput,
  "addedOn": "2025-01-05T10:10:10",
  "privacyType": "PUBLIC"
}
Types
CreateUserAssociationInput
Specifies the input required to create a user association.

Input Field	Description
site - SiteIdentifierInput!	
Specifies the site that will be associated to the user.

Example
{"site": SiteIdentifierInput}
Types
CreateUserInput
Specifies the input required to create user.

Input Field	Description
firstName - String!	
Specifies the first name of the user. This input is mandatory.

lastName - String	
Specifies the last name of the user.

email - String!	
Specifies the email address of the user which is unique across the technicians and users. The email will be used for login. This input should be mandatory and unique.

contactNumber - String	
Specifies the contact number of the user. It is recommended to provide the value in the standard format [+][country code][area code][local phone number].

reportingManager - UserIdentifierInput	
Specifies the reporting manager identifier input for the user.

roles - [RoleIdentifierInput!]	
Specifies the application role identifier input for the user. This input is mandatory.

department - DepartmentIdentifierInput	
Specifies the department of the user.

addAssociations - [CreateUserAssociationInput]	
Specifies the associated sites.

addGroups - [TechnicianGroupIdentifierInput]	
Specifies the list of technician groups that the user will be associated with if he has TECHNICIAN type role.

customFields - JSON	
Specifies the custom fields values for the user. Each entry in the JSON would be key-value. The key will be a system-generated, unique name of the custom field (columnName field of CustomField type). The value for text, paragraph, radio, select, numeric, decimal, date, datetime should be given as a string. The value for checkbox, multi-select should be an array of string.

For example, the value could be {"udf1text": "value", "udf2mselect": ["value1", "value2"]}

Example
{
  "firstName": "Ryan",
  "lastName": "Howard",
  "email": "ryan.howard@dundermifflin.com",
  "contactNumber": "+16412349876",
  "reportingManager": UserIdentifierInput,
  "roles": [RoleIdentifierInput],
  "department": DepartmentIdentifierInput,
  "addAssociations": [CreateUserAssociationInput],
  "addGroups": [TechnicianGroupIdentifierInput],
  "customFields": {}
}
Types
CustomField
The custom fields created by the user.

Field Name	Description
id - ID!	The ID of custom field.
columnName - String!	The system-generated name of the custom field. This name is unique and will be used to identify the field.
label - String!	The label of the custom field.
description - String	The description of the custom field.
fieldType - FieldType!	The type of the custom field.
isMandatory - Boolean	Defines the boolean value, which represents the field must be filled compulsory or not.
Example
{
  "id": 4,
  "columnName": "udf1text",
  "label": "SSN",
  "description": "Social Security Number",
  "fieldType": "TEXT",
  "isMandatory": true
}
Types
DayOfWeek
The day of the week.

Enum Value	Description
MONDAY

TUESDAY

WEDNESDAY

THURSDAY

FRIDAY

SATURDAY

SUNDAY

Example
"MONDAY"
Types
DeleteKbArticleInput
Used to delete a KB Article.

Input Field	Description
article - KBItemIdentifierInput!	
Identifier of the article to delete.

Example
{"article": KBItemIdentifierInput}
Types
DeleteKbCollectionInput
Used to delete a KB Collection.

Input Field	Description
kbCollection - KBItemIdentifierInput!	
Identifier of the collection to delete.

Example
{"kbCollection": KBItemIdentifierInput}
Types
DeleteUserInput
Specifies the input to delete user.

Input Field	Description
userId - ID!	
The ID of the user who is going to be deleted.

forget - Boolean	
The user will be soft deleted by default. The personally identifiable information (PII) will be anonymized by specifying true for this attribute.

Example
{"userId": 4, "forget": true}
Types
Department
Department of the technician.

Field Name	Description
departmentId - ID!	The ID of the department.
name - String!	The name of the department.
head - JSON	The head of the department
Example
{
  "departmentId": "4",
  "name": "Finance",
  "head": {"userId": "7928838372746166271", "name": "Clovis Sonsimps"}
}
Types
DepartmentIdentifierInput
Specifies the identifier input for the department.

Input Field	Description
departmentId - ID!	
The ID of the department.

Example
{"departmentId": "4"}
Types
Designation
Designation of the technician.

Field Name	Description
designationId - ID!	The ID of the designation.
name - String!	The name of the designation.
Example
{"designationId": 4, "name": "CEO"}
Types
DeviceCategory
Specifies the device category.

Field Name	Description
deviceCategoryId - ID!	Specifies the device category ID.
name - String	Specifies the device category name.
custom - Boolean	Specifies the device category is default or custom.
assetClass - JSON	Specifies the asset class that device category belongs to.
createdTime - String	Specifies the created time of device category.
Example
{
  "deviceCategoryId": [9567898545678],
  "name": "Windows Workstation",
  "custom": true,
  "assetClass": {"classId": "1", "name": "Windows Machine"},
  "createdTime": "2022-11-29T15:54:16.270"
}
Types
DeviceCategoryIdentifierInput
Specifies the input required to get list of device categories.

Input Field	Description
module - [String]	
Specifies the list of modules whose device categories need to be fetched i.e., ENDPOINT/NM_ASSET.

custom - Boolean	
Specifies whether device categories should be default or custom.

classId - ID	
Specifies device categories of classId to fetch.

Example
{"module": ["ENDPOINT"], "custom": true, "classId": 4567898545678}
Types
Disks
Specifies the asset's disk data

Field Name	Description
disks - [AssetDisk]	disk partition details
totalFreeSpace - JSON	Total free space available in the disk
totalSize - JSON	Total size of the disk
Example
{
  "disks": [AssetDisk],
  "totalFreeSpace": {},
  "totalSize": {}
}
Types
DocumentSharedDetails
Specifies the accessibility configuration for a document.

Field Name	Description
mappingId - ID!	Unique identifier for the sharing configuration.
portalType - RoleTypeEnum	Type of portal (e.g., requester or technician) through which the document is shared.
siteSharedType - SiteSharedType	Type of requester site-based sharing.
userRoleSharedType - UserRoleSharedType	Type of requester role-based sharing.
site - JSON	Details of the requester shared site.
roles - [JSON]	Details of the requester roles with access.
userSharedType - UserSharedType	Type of technician user-based sharing.
groupSharedType - GroupSharedType	Type of technician group-based sharing.
users - [JSON]	Details of the technician users with access.
groups - [JSON]	Details of the technician groups with access.
Example
{
  "mappingId": 4,
  "portalType": "REQUESTER",
  "siteSharedType": "Site",
  "userRoleSharedType": "Role",
  "site": {"id": "6028538986044866560", "name": "Globe Town"},
  "roles": [{"roleId": "1", "name": "Admin"}],
  "userSharedType": "AllUsers",
  "groupSharedType": "AllGroups",
  "users": [{}],
  "groups": [{}]
}
Types
DocumentSharedDetailsInput
Used to modify access rules for a document.

Input Field	Description
mappingId - ID	
Identifier for existing configuration

portalType - RoleTypeEnum	
Type of portal (e.g., requester or technician) through which the document is shared.

siteSharedType - SiteSharedType	
Type of requester site-based sharing. Applicable only when the portalType is REQUESTER.

siteId - ID	
ID of the associated site. Applicable only when the siteSharedType is Site.

userRoleSharedType - UserRoleSharedType	
Type of requester role-based sharing. Applicable only when the portalType is REQUESTER.

addedRoleIds - [ID]	
IDs of roles being granted access. Applicable only when the userRoleSharedType is Role.

deletedRoleIds - [ID]	
Roles whose access is being removed. Applicable only when the userRoleSharedType is Role.

userSharedType - UserSharedType	
Type of technician user-based sharing. Applicable only when the portalType is TECHNICIAN.

addedUserIds - [ID]	
Technician users being granted access. Applicable only when the userSharedType is User.

deletedUserIds - [ID]	
Technician users whose access is being removed. Applicable only when the userSharedType is User.

groupSharedType - GroupSharedType	
Type of technician group-based sharing. Applicable only when the portalType is TECHNICIAN.

addedGroupIds - [ID]	
Technician groups being granted access. Applicable only when the groupSharedType is Group.

deletedGroupIds - [ID]	
Technician groups whose access is being removed. Applicable only when the groupSharedType is Group.

Example
{
  "mappingId": "6041728476492791808",
  "portalType": "REQUESTER",
  "siteSharedType": "AllSites",
  "siteId": "4",
  "userRoleSharedType": "Role",
  "addedRoleIds": ["5"],
  "deletedRoleIds": [4],
  "userSharedType": "AllUsers",
  "addedUserIds": ["4"],
  "deletedUserIds": ["4"],
  "groupSharedType": "AllGroups",
  "addedGroupIds": ["4"],
  "deletedGroupIds": ["4"]
}
Types
DocumentSharedUpdateInput
Used to create new or update existing access settings for a document.

Input Field	Description
added - [NewShareDetailsInput]	
New share configurations to add.

updated - [DocumentSharedDetailsInput]	
Existing configurations to modify.

deleted - [ID]	
List of configuration mappingId values to remove.

Example
{
  "added": [NewShareDetailsInput],
  "updated": [DocumentSharedDetailsInput],
  "deleted": [4]
}
Types
Feature
This is a system-defined feature which is used along with the operation to define the user authorization under a role.

Field Name	Description
featureId - ID!	The ID of the feature.
name - String!	The name of the feature.
key - String!	The constant value used to identify the feature programmatically.
Example
{
  "featureId": "4",
  "name": "Ticket",
  "key": "ticket"
}
Types
Field
The field of the entity.

Field Name	Description
id - ID!	The ID of the Field.
module - String!	The module of the field i.e. TICKET, COMPANY_USER
columnName - String!	The name of the column of the field
label - String!	The label of the field
description - String	The description of the field
fieldType - FieldType!	The type of the field
options - [Option]	The options of the fields if fieldType is RADIO, CHECKBOX, SELECT or MULTI_SELECT
showToRequester - Boolean!	The field which denotes whether field should be visible to requesters or not
fieldCategory - FieldCategory	The category of the field.
mandatoryOnCreate - Boolean	This is for fields of TICKET module whether the field value is mandatory when ticket is created
mandatoryOnClosure - Boolean	This is for fields of TICKET module whether the field value is mandatory when ticket is closed
Example
{
  "id": 4,
  "module": "TICKET",
  "columnName": "udf1text",
  "label": "SSN",
  "description": "Social Security Number",
  "fieldType": "TEXT",
  "options": [Option],
  "showToRequester": true,
  "fieldCategory": "CUSTOM",
  "mandatoryOnCreate": true,
  "mandatoryOnClosure": true
}
Types
FieldCategory
The category of the field which denotes whether the field is CUSTOM or DEFAULT.

Enum Value	Description
CUSTOM

DEFAULT

Example
"CUSTOM"
Types
FieldIdentifierInput
Specifies the identifier input for the module field.

Input Field	Description
id - ID	
The ID of the Field.

columnName - String	
The name of the column of the field

module - String!	
The module of the field i.e. TICKET, COMPANY_USER

Example
{"id": 4, "columnName": "udf1text", "module": "TICKET"}
Types
FieldType
The type of the field.

Enum Value	Description
TEXT

The text field. The maximum length of the text value is 255 characters.
PARAGRAPH

The paragraph/multi-line field. The maximum length of the paragraph value is 65,535 characters. The maximum number of paragraph fields is 5.
NUMERIC

The whole number field. The maximum number of digits is 10.
DECIMAL

The decimal number field. The maximum number of digits is 10 and maximum number of digits in the fractional part is 2.
DATE

The date field. The date value should be specified in the ISO 8601 format i.e., 2022-08-15
DATETIME

The datetime filed. The datetime value should be specified in the ISO 8601 format i.e., 2022-08-15T13:15:30
RADIO

The radio field. The maximum length of an option value is 255 characters.
CHECKBOX

The checkbox field. The maximum length of an option value is 255 characters. The maximum number of checkbox fields is 64.
SELECT

The select/dropdown field. The maximum length of an option value is 255 characters.
MULTI_SELECT

The multi select field. The maximum length of an option value is 255 characters. The maximum number of checkbox fields is 64.
RICH_TEXT

The rich text field. used to store large formatted Text
PASSWORD

The password field. used to store password value.
SECURE_TEXT

The Secure text field. used to store secure text
URL

The URL field. used to store an url in secured text field type
Example
"TEXT"
Types
GetServiceEntriesInput
Defines the input required to fetch the service offerings or work logs of a work item.

Input Field	Description
module - WorkModule	
Service offerings, work logs can be created under various work item entities, such as tickets, projects, etc. This field specifies the work item entity under which the service offering or work log is created.

listInfo - ListInfoInput	
Specifies the list input required to fetch multiple records, with conditions, pagination etc..

Example
{"module": "TICKET", "listInfo": ListInfoInput}
Types
GroupSharedType
Defines how access is granted to technician groups

Enum Value	Description
AllGroups

Group

Example
"AllGroups"
Types
HolidayList
The list of holidays.

Field Name	Description
id - ID!	The ID of the holiday list.
name - String!	The name of the holiday list.
Example
{"id": 4, "name": "USA Holidays"}
Types
HolidayListIdentifierInput
Specifies the identifier input for the holiday list.

Input Field	Description
id - ID!	
The ID of the holiday list.

Example
{"id": "4"}
Types
ID
The ID scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as "4") or integer (such as 4) input value will be accepted as an ID.

Example
4
Types
ITDocumentationType
Specifies the IT Documentation Class created in SuperOps.ai

Field Name	Description
typeId - ID	Type ID of the IT document category
name - String	Name of the IT document category
description - String	Description of the IT document category
entityName - String	Entity name of the IT document category
lastUpdatedTime - String	Last Updated Time of the IT Documentation Class
customFields - JSON	Specifies the custom field information of the IT document category
Example
{
  "typeId": "12312123123123",
  "name": "Printer Documents",
  "description": "xyz789",
  "entityName": "ac7126132948214128641",
  "lastUpdatedTime": "2022-11-29T13:59:55.372",
  "customFields": [
    {
      "id": "2915174238148190208",
      "columnName": "udf106text",
      "label": "JustAPlainText",
      "description": "Describe the field",
      "fieldType": "TEXT",
      "options": null
    }
  ]
}
Types
InstallerDetails
Specifies the installer Information of a specific site

Field Name	Description
id - String	ID of the SuperOps Agent installer
installerDownloadUrl - String	Download URL of the SuperOps Agent
installerName - String	Agent installer name
os - String	OS type of the Installer
Example
{
  "id": "abc123",
  "installerDownloadUrl": "xyz789",
  "installerName": "abc123",
  "os": "xyz789"
}
Types
Int
The Int scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.

Example
123
Types
ItDocumentation
Specifies the IT document Record Details

Field Name	Description
itDocId - ID!	ID of the IT Document
name - String	Name of the IT document record
customFields - JSON	Custom field details of the IT document record
Arguments
fields - [String]
Example
{
  "itDocId": "4",
  "name": "abc123",
  "customFields": {}
}
Types
ItDocumentationIdentifierInput
Specifies the identifier input for the IT Document.

Input Field	Description
itDocId - ID!	
The ID of the IT Document.

Example
{"itDocId": 4}
Types
ItDocumentationList
Specifies the list of IT Documents that are fetched

Field Name	Description
documents - [ItDocumentation]	list of IT documents
listInfo - ListInfo	The detail about the list.
Example
{
  "documents": [ItDocumentation],
  "listInfo": ListInfo
}
Types
ItDocumentationListInput
specifies the input required to fetch a list of IT documents under one type ID

Input Field	Description
typeId - ID	
type ID of the IT document

listInfo - ListInfoInput	
list info details

Example
{
  "typeId": "4",
  "listInfo": ListInfoInput
}
Types
JSON
Represents the JSON value.

Example
{}
Types
KBItemIdentifierInput
Specifies the identifier input parameters of a KB Item.

Input Field	Description
itemId - ID!	
Unique identifier of the item.

Example
{"itemId": "4"}
Types
KbArticle
Represents an article in the knowledge base. The article content can be downloaded using the download API with the below query parameters:

module=KB_ARTICLE_CONTENT
details={"kbArticleId": KB ARTICLE ID}
Field Name	Description
itemId - ID	Unique identifier.
name - String	Title of the article.
parent - KbCollection	Parent KB Collection.
description - String	Summary of the article.
status - ArticleStatus	Status of the article.
createdBy - JSON	Details of the creator.
createdOn - String	Timestamp of when the article is created.
lastModifiedBy - JSON	Details of the last editor.
lastModifiedOn - String	Timestamp of when the article is last modified.
viewCount - Int	Number of times the article has been viewed by the requesters.
articleType - ArticleType	Format of the content.
visibility - [DocumentSharedDetails]	Sharing configurations.
loginRequired - Boolean	Whether user login is required to access the article.
Example
{
  "itemId": "3047341892401414939",
  "name": "How to Set Up a Printer on Your Device",
  "parent": KbCollection,
  "description": "A step-by-step guide to help you connect and configure a printer on your computer or mobile device.",
  "status": "PUBLISHED",
  "createdBy": {
    "userId": "9001114136934215681",
    "name": "John Williams",
    "email": "john@log.com"
  },
  "createdOn": "2025-07-01T12:12:16.892",
  "lastModifiedBy": {
    "userId": "9001114136934215681",
    "name": "John Williams",
    "email": "john@log.com"
  },
  "lastModifiedOn": "2025-07-01T12:12:16.892",
  "viewCount": 1,
  "articleType": "HTML",
  "visibility": [DocumentSharedDetails],
  "loginRequired": true
}
Types
KbCollection
Represents a collection in the knowledge base.

Field Name	Description
itemId - ID!	Unique identifier.
name - String!	Name of the collection.
parent - KbCollection	Parent collection, if nested.
Example
{
  "itemId": "549210276118249300",
  "name": "Printers",
  "parent": KbCollection
}
Types
KbItem
Generic representation of any KB item (article or collection). Irrelevant fields are returned as null.

Field Name	Description
itemId - ID	Unique identifier of the KB item.
name - String	Name/Title of the KB item.
parent - KbCollection	Parent of the KB item, if any.
itemType - KbItemType	Type of the KB item, collection or article.
description - String	Description of the KB item. Applicable only to article.
status - ArticleStatus	Status of the KB item. Applicable only to article.
createdBy - JSON	Details of the creator. Applicable only to article.
createdOn - String	Timestamp of when the KB Item is created. Applicable only to article.
lastModifiedBy - JSON	Details of the last editor. Applicable only to article.
lastModifiedOn - String	Timestamp of when the KB Item is last modified. Applicable only to article.
viewCount - Int	Number of times the KB Item has been viewed by the requesters. Applicable only to article.
articleType - ArticleType	Format of the content. Applicable only to article.
visibility - [DocumentSharedDetails]	Sharing configurations. Applicable only to article and supported only in the getKbItem API.
loginRequired - Boolean	Whether user login is required to access the KB Item. Applicable only to article.
Example
{
  "itemId": "549210276118249300",
  "name": "Printers",
  "parent": KbCollection,
  "itemType": "KB_COLLECTION",
  "description": "abc123",
  "status": "DRAFT",
  "createdBy": {},
  "createdOn": "abc123",
  "lastModifiedBy": {},
  "lastModifiedOn": "abc123",
  "viewCount": 987,
  "articleType": "HTML",
  "visibility": [DocumentSharedDetails],
  "loginRequired": true
}
Types
KbItemList
Paginated list of KB items (both collections and articles).

Field Name	Description
items - [KbItem]	KbItem objects.
listInfo - ListInfo	Metadata related to pagination.
Example
{
  "items": [KbItem],
  "listInfo": ListInfo
}
Types
KbItemType
Defines whether a KB Item is a collection or an article.

Enum Value	Description
KB_COLLECTION

KB_ARTICLE

Example
"KB_COLLECTION"
Types
ListInfo
Displays details about the list when multiple records are fetched.

Field Name	Description
page - Int	The page number starts from 1 during pagination.
pageSize - Int	The maximum number of records per page.
sort - [Sort]	Sort definition.
condition - JSON	Filter condition.
hasMore - Boolean	Denotes whether more number of records still present during pagination.
totalCount - Int	Denotes the total number of available records.
Example
{
  "page": 1,
  "pageSize": 10,
  "sort": [Sort],
  "condition": {
    "joinOperator": "OR",
    "operands": [
      {"attribute": "name", "operator": "startsWith", "value": "John"},
      {"attribute": "email", "operator": "contains", "value": "john"}
    ]
  },
  "hasMore": true,
  "totalCount": "98"
}
Types
ListInfoInput
Specifies the input required to fetch multiple records.

Input Field	Description
page - Int	
Specifies the page number for pagination.

pageSize - Int	
Specifies the maximum number of records per page for pagination.

condition - RuleConditionInput	
Specifies the filter condition.

sort - [SortInput]	
Specifies the sorting.

Example
{
  "page": 1,
  "pageSize": 10,
  "condition": RuleConditionInput,
  "sort": [SortInput]
}
Types
NewShareDetailsInput
Used to define access rules for a document.

Input Field	Description
portalType - RoleTypeEnum	
Type of portal (e.g., requester or technician) through which the document is shared.

siteSharedType - SiteSharedType	
Type of requester site-based sharing. Applicable only when the portalType is REQUESTER.

siteId - ID	
ID of the associated site. Applicable only when the siteSharedType is Site.

userRoleSharedType - UserRoleSharedType	
Type of requester role-based sharing. Applicable only when the portalType is REQUESTER.

addedRoleIds - [ID]	
IDs of roles being granted access. Applicable only when the userRoleSharedType is Role.

userSharedType - UserSharedType	
Type of technician user-based sharing. Applicable only when the portalType is TECHNICIAN.

addedUserIds - [ID]	
Technician users being granted access. Applicable only when the userSharedType is User.

groupSharedType - GroupSharedType	
Type of technician group-based sharing. Applicable only when the portalType is TECHNICIAN.

addedGroupIds - [ID]	
Technician groups being granted access. Applicable only when the groupSharedType is Group.

Example
{
  "portalType": "REQUESTER",
  "siteSharedType": "AllSites",
  "siteId": 4,
  "userRoleSharedType": "AllRoles",
  "addedRoleIds": ["4"],
  "userSharedType": "AllUsers",
  "addedUserIds": ["4"],
  "groupSharedType": "AllGroups",
  "addedGroupIds": [4]
}
Types
Note
The note added by a technician.

Field Name	Description
noteId - ID!	The ID of the note.
addedBy - JSON	The technician who created the note. The actual type of this field is Technician. Returns userId and name fields as JSON.
addedOn - String!	The created datetime of the note.
content - String!	The content of the note.
attachments - [Attachment]	The list of attachments.
privacyType - NotePrivacyType	Indicates whether the note can be shown to the requester if set to PUBLIC; otherwise, it can be shown to the technician only.
Example
{
  "noteId": "4",
  "addedBy": {"userId": "7928838372746166271", "name": "Clovis Sonsimps"},
  "addedOn": "2022-06-30T10:10:15",
  "content": "I cannot access my internet! I'm not sure what's happening!",
  "attachments": [Attachment],
  "privacyType": "PUBLIC"
}
Types
NotePrivacyType
Enum Value	Description
PUBLIC

PRIVATE

Example
"PUBLIC"
Types
Operation
A system-defined operation like Add, Edit, Delete, View, Allow which is used along with the feature to define the user authorization under a role.

Field Name	Description
operationId - ID!	The ID of the operation.
name - String!	The name of the operation.
Example
{"operationId": 4, "name": "View"}
Types
Option
Option of the field

Field Name	Description
id - ID!	
value - String	
description - String	
order - Int!	
Example
{
  "id": 4,
  "value": "Capacity",
  "description": "abc123",
  "order": "1"
}
Types
PatchData
Specifies all the details of a particular patch

Field Name	Description
patchDetail - PatchDetails	Specifies the patch details
approvalStatus - String	The approval status of that patch in that asset
installationTime - String	The installation time of that patch, if installed
installationStatus - String	Patch installation status of the asset
failedMessage - String	The failure message, if the patch installation failed
Example
{
  "patchDetail": PatchDetails,
  "approvalStatus": "Pending",
  "installationTime": "2022-12-05",
  "installationStatus": "Installed",
  "failedMessage": "some Error while Installing Patch"
}
Types
PatchDetails
Specifies the patch details

Field Name	Description
patchId - ID!	The patch ID of the patch's data
patchKey - String	The patch key of the patch's data
title - String	The title of the patch
publishedDate - String	The published data of the patch
category - String	The category of the patch
severity - String	The severity of the patch
kbNumbers - [PatchKb]	The KB numbers of the patch
restartRequired - Boolean	Specifies whether a restart is required after patch installation
Example
{
  "patchId": "8152339192747253760",
  "patchKey": "dc2fb66a-2904-4c55-ad15-a29890c55b26",
  "title": "Security Intelligence Update for Microsoft Defender Antivirus - KB2267602 (Version 1.379.1435.0)",
  "publishedDate": "2022-12-05",
  "category": "Definition Updates",
  "severity": "Others",
  "kbNumbers": [{"kbNumber": "2267602"}],
  "restartRequired": true
}
Types
PatchKb
Specifies the PatchKb numbers of a patch

Field Name	Description
kbNumber - String	KB number associated with the patch
Example
{"kbNumber": "xyz789"}
Types
RecipientIdentifierInput
Specifies the identifier input for the conversation recipient.

Input Field	Description
email - String!	
The Recepient's email.

Example
{"email": "joseph.john@acme.com"}
Types
RecipientInfo
The conversation recipient.

Field Name	Description
user - JSON!	The recipient of the conversation. The actual type of this field is User. Returns userId, name and email fields as JSON It is possible that the email conversation can be sent to a user who does not exist in the system, in which case, only the email field will be returned.
Example
{
  "user": {
    "userId": "7928838372746166271",
    "name": "Joseph John",
    "email": "joseph.john@acme.com"
  }
}
Types
ResolveAlertInput
Specifies the input required to resolve an existing alert.

Input Field	Description
id - ID!	
ID of the Alert need to be Resolved

Example
{"id": 4}
Types
Role
The role defines access permissions for user authorization.

Field Name	Description
roleId - ID!	The ID of the role.
name - String!	The name of the role.
description - String	The description of the role.
roleType - RoleType	The type of role, indicating the category to which it belongs.
roleFeatureList - [RoleFeature]	The set of allowed features and permissions.
Example
{
  "roleId": "4",
  "name": "Client Admin",
  "description": "Client Administrator",
  "roleType": RoleType,
  "roleFeatureList": [RoleFeature]
}
Types
RoleFeature
The combination of a feature and permitted operations.

Field Name	Description
feature - Feature!	The feature.
operationList - [Operation]!	The permitted operations.
Example
{
  "feature": Feature,
  "operationList": [Operation]
}
Types
RoleIdentifierInput
Specifies the identifier input for the role.

Input Field	Description
roleId - ID!	
The ID of the role.

Example
{"roleId": "4"}
Types
RoleType
The role type denotes the type of a role and its classification.

Field Name	Description
roleTypeId - ID!	The ID of the role type.
type - RoleTypeEnum	The type of the role i.e. TECHNICIAN or REQUESTER
Example
{"roleTypeId": "2", "type": "TECHNICIAN"}
Types
RoleTypeEnum
Represents the type of the role

Enum Value	Description
TECHNICIAN

REQUESTER

Example
"TECHNICIAN"
Types
RuleConditionInput
Specifies the conditional input used to filter the records.

Input Field	Description
attribute - String	
The Condition attribute.

operator - String	
The Condition operator.

value - JSON	
The Condition value.

Example
{
  "attribute": "technician.email",
  "operator": "includes",
  "value": ["user1@acme.com", "user2@acme.com"]
}
Types
RunScriptData
Specifies the output response of the Run Script Action on an asset

Field Name	Description
actionConfigId - ID	The action ID Related to the action
script - JSON	The configured script for the action
scriptArguments - JSON	The script arguments passed to the script while running
addedBy - JSON	Specifies the user who created the action
Example
{
  "actionConfigId": "2861598057825157120",
  "script": {
    "scriptId": "1",
    "name": "ClearTempFiles",
    "language": "PowerShell",
    "custom": true
  },
  "scriptArguments": [{"name": "runtimeVar", "value": "thisisruntime"}],
  "addedBy": {"name": "John snow"}
}
Types
RunScriptInput
Specifies the input required to run a script on an asset

Input Field	Description
assetId - ID!	
The ID of the asset on which the script needs to be run on

scriptId - ID!	
The ID of the script needs to be triggered

scriptArguments - JSON	
The script's runtime arguments that need to be passed to run this script ex:[{"name": "appName", "value": "SuperOps.ai"},{"name": "downloadURL", "value": "superops.ai/download"}] here appName is used inside script like $appName for that variable the value will be "SuperOps.ai"

Example
{
  "assetId": "4",
  "scriptId": "6001114136934215681",
  "scriptArguments": [{"name": "url", "value": "superops.ai"}]
}
Types
SLA
The SLA for ticket.

Field Name	Description
id - ID!	The ID of the SLA.
name - String!	The name of the SLA.
Example
{"id": 4, "name": "VIP SLA"}
Types
SLAIdentifierInput
Specifies the identifier input for the SLA.

Input Field	Description
id - ID!	
The ID of the SLA.

Example
{"id": "4"}
Types
Script
Specifies the script's details

Field Name	Description
scriptId - ID!	ID of the script
name - String	Name of the script
description - String	Description of the script
language - String	Language of the script
addedBy - JSON	The user that created the script
createdTime - String	The time of creation of the Script
favourite - Boolean	Specifies whether this script marked as a Favourite
runAs - String	'Run as' configuration of the script. Ex: run as SystemUser/LoggedInUser
runTimeVariables - [String]	Script runtime variable that needs to be passed while running this script
timeOut - Int	Timeout of the script, in seconds
tags - JSON	Tags of the script
readMe - String	ReadMe content of the script
Example
{
  "scriptId": "4453149652361826304",
  "name": "Delete Temp files powershell script",
  "description": "use this script to delete temp folder inside c:",
  "language": "PowerShell",
  "addedBy": {"name": "John Smith"},
  "createdTime": "2022-12-08T12:47:06.774",
  "favourite": true,
  "runAs": "SYSTEM_USER",
  "runTimeVariables": ["abc123"],
  "timeOut": 50,
  "tags": ["Administration", "Applications", "Antivirus"],
  "readMe": "this is a powershell script to clear all the temp files."
}
Types
ScriptList
Specifies the list of scripts that are fetched

Field Name	Description
scripts - [Script]	specifies the list of scripts
listInfo - ListInfo	details about the list
Example
{
  "scripts": [Script],
  "listInfo": ListInfo
}
Types
ScriptListByTypeInput
Specifies the input required to fetch a script list, including predefined scripts by OS type

Input Field	Description
type - String!	
Specifies the type of script Ex: WINDOWS or MAC

listInfo - ListInfoInput	
List info details

Example
{"type": "WINDOWS", "listInfo": {"page": 1, "pageSize": 10}}
Types
ServiceCatalogItem
Product and Services

Field Name	Description
itemId - ID!	Identifier unique to a Item
name - String!	Name of the item. It is unique in the Catalog.
description - String	Description of the item
category - ServiceCategory	Category under which an item is created
Example
{
  "itemId": "4",
  "name": "Hard Disc",
  "description": "abc123",
  "category": ServiceCategory
}
Types
ServiceCatalogItemIdentifierInput
Specifies the identifier input for the service catalog item.

Input Field	Description
itemId - ID!	
The ID of the service item.

Example
{"itemId": "4"}
Types
ServiceCatalogItemList
Response containing requested service catalog items

Field Name	Description
items - [ServiceCatalogItem]	List of items
listInfo - ListInfo	Meta information about the list
Example
{
  "items": [ServiceCatalogItem],
  "listInfo": ListInfo
}
Types
ServiceCategory
The response payload for the service category.

Field Name	Description
categoryId - ID!	The ID of the service category.
name - String!	The name of the service category.
Example
{"categoryId": 4, "name": "Hardware"}
Types
ServiceCategoryIdentifierInput
Specifies the identifier input for the service category.

Input Field	Description
categoryId - ID!	
The ID of the category.

Example
{"categoryId": "4"}
Types
ServiceEntryIdentifierInput
Specifies the identifier input for the service offering or work log.

Input Field	Description
itemId - ID!	
Example
{"itemId": 4}
Types
ServiceItem
The service item

Field Name	Description
itemId - ID!	The ID of the service item.
name - String!	The name of the service item.
description - String	The service item's description.
category - ServiceCategory	The category of the service item.
Example
{
  "itemId": "4",
  "name": "Hard Disc",
  "description": "xyz789",
  "category": ServiceCategory
}
Types
ServiceItemIdentifierInput
Specifies the identifier input for the service item.

Input Field	Description
itemId - ID!	
The ID of the service item.

Example
{"itemId": 4}
Types
ServiceItemList
The response payload for list of service items fetched.

Field Name	Description
items - [ServiceItem]	The list of service items.
listInfo - ListInfo	The detail about the list.
Example
{
  "items": [ServiceItem],
  "listInfo": ListInfo
}
Types
ServiceOffering
Field Name	Description
itemId - ID!	The ID of the service offering.
serviceItem - JSON!	The offered service item. The actual type of this field is ServiceItem. Returns itemId and name fields as JSON.
qty - String!	The number of offered units.
billDateTime - String!	The date and time of the service offered.
notes - String	The notes added to the service offering.
workItem - JSON!	The WorkItem under which the service offering is created.
Example
{
  "itemId": "4",
  "serviceItem": {},
  "qty": "abc123",
  "billDateTime": "abc123",
  "notes": "abc123",
  "workItem": {}
}
Types
ServiceOfferingList
The response payload for a list of service offerings.

Field Name	Description
entries - [ServiceOffering]	The list of service offerings.
listInfo - ListInfo	The details about the list
Example
{
  "entries": [ServiceOffering],
  "listInfo": ListInfo
}
Types
Site
The site in the organization.

Field Name	Description
id - ID!	The ID of the site.
name - String!	The name of the site.
businessHour - [BusinessHour]	The operation hours of the site.
holidayList - HolidayList	The holiday list of the site.
timezoneCode - String!	The timezone of the site.
working24x7 - Boolean!	Denotes whether the site has specific business hours or works 24x7.
address - Address	The address of the site
contactNumber - String	The contact number of the site.
installerInfo - [InstallerDetails]	The agent Installer Details
Example
{
  "id": "4",
  "name": "Austin",
  "businessHour": [BusinessHour],
  "holidayList": HolidayList,
  "timezoneCode": "America/Los_Angeles",
  "working24x7": false,
  "address": Address,
  "contactNumber": "212-504-4115",
  "installerInfo": [InstallerDetails]
}
Types
SiteIdentifierInput
Specifies the identifier input for the site.

Input Field	Description
id - ID!	
The ID of the site.

Example
{"id": 4}
Types
SiteList
The response payload for list of sites fetched.

Field Name	Description
sites - [Site]	The list of sites.
listInfo - ListInfo	The detail about the list.
Example
{
  "sites": [Site],
  "listInfo": ListInfo
}
Types
SiteSharedType
Defines how access is granted to requester sites.

Enum Value	Description
AllSites

Site

Example
"AllSites"
Types
Sort
Defines how the available records will be sorted.

Field Name	Description
attribute - String	The sort attribute.
order - SortOrder	Denotes the order of the sorting.
Example
{"attribute": "technician.email", "order": "ASC"}
Types
SortInput
Specifies the input required for sorting.

Input Field	Description
attribute - String	
The sort attribute.

order - SortOrder	
Denotes the order of the sorting.

emptyAtLast - Boolean	
Moves the null values to the end of the list

Example
{"attribute": "technician.email", "order": "ASC", "emptyAtLast": false}
Types
SortOrder
Specifies the order in which the records will be sorted ie. ascending or descending.

Enum Value	Description
ASC

DESC

Example
"ASC"
Types
String
The String scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.

Example
"abc123"
Types
TPAssetInfoInput
Specifies The input Required to fetch SuperOps Asset Info

Input Field	Description
tpEndpointIds - [String!]	
The Endpoint ID of the ThirdParty Integration

integrationRefId - ID!	
SuperOps ThirdParty Integration Reference ID

Example
{
  "tpEndpointIds": ["abc123"],
  "integrationRefId": "4"
}
Types
TPEndpointAssetInfo
Specifies The SuperOps Asset Info for Given TP Endpoint Ids

Field Name	Description
tpEndpointId - String	The Endpoint ID of the ThirdParty Integration
superOpsAssetInfo - Asset	SuperOps Asset Info For Respective ThirdParty Integration Endpoint ID
Example
{
  "tpEndpointId": "abc123",
  "superOpsAssetInfo": Asset
}
Types
Task
The major work (ticket or project) can be divided into multiple units of tasks. The task can also delegated to other technicians.

Field Name	Description
taskId - ID!	The ID of the task.
displayId - ID!	The human readable ID of the task.
title - String!	The title of the task.
description - String	The description of the task.
status - String!	The status of the task.
estimatedTime - Int	The estimated time of the task in minutes.
scheduledStartDate - String	The scheduled start datetime of the task.
dueDate - String	The due datetime of the task
overdue - Boolean	z Indicates whether the task is overdue i.e, crossed the due time.
actualStartDate - String	The actual start datetime of the task i.,e when the task status is set to PROGRESS first time.
actualEndDate - String	The actual end datetime of the task i.,e when the task status is set to COMPLETED.
technician - JSON	The technician to whom the task is assigned. The actual type of this field is Technician. Returns userId and name fields as JSON. The name and email fields can be used in the filter condition.
techGroup - JSON	The technician group to which the task is assigned. The actual type of this field is TechnicianGroup. Returns groupId and name fields as JSON. The name field can be used in the filter condition.
workItem - JSON	It indicates the work item (ticket/project) to which the task belongs. The actual type of this field is WorkItem. Returns workId, displayId, module fields as JSON
taskOrder - Int	The Order in which the tasks should be displayed in UI
Example
{
  "taskId": 4,
  "displayId": "062822-0001",
  "title": "Install Antivirus",
  "description": "abc123",
  "status": "Planned",
  "estimatedTime": 500,
  "scheduledStartDate": "2022-07-16T09:00:00",
  "dueDate": "2022-07-25T16:00:00",
  "overdue": true,
  "actualStartDate": "2022-07-15T09:00:00",
  "actualEndDate": "2022-07-22T09:00:00",
  "technician": {"userId": "7928838372746166256", "name": "user3"},
  "techGroup": {"groupId": "7928838372746166657", "name": "Hardware Problems"},
  "workItem": {},
  "taskOrder": 123
}
Types
TaskIdentifierInput
Specifies the identifier input for the task.

Input Field	Description
taskId - ID!	
The ID of the task.

Example
{"taskId": 4}
Types
TaskList
The response payload for list of tasks fetched.

Field Name	Description
tasks - [Task]	The list of tasks.
listInfo - ListInfo	The detail about the list.
Example
{
  "tasks": [Task],
  "listInfo": ListInfo
}
Types
Technician
The user of the MSP.

Field Name	Description
userId - ID!	The ID of the technician.
firstName - String!	The first name of the technician.
lastName - String	The last name of the technician.
name - String!	The full name of the technician.
email - String!	The email address of the technician.
contactNumber - String	The contact number of the technician. It is recommended to provide the value in the standard format [+][country code][area code][local phone number].
emailSignature - String	The email signature of the technician which will be used in their email responses.
designation - JSON	The designation of the technician. The actual type of this field is Designation. Returns as JSON, object contains designationId and name fields.
department - JSON	The department of the technician. The actual type of this field is Department. Returns as JSON, object contains departmentId and name fields.
associations - JSON	The list of association of site present for the user. The actual type of this field is UserAssociation. This field returns associationId and site fields as JSON. The siteId can be used in the filter condition.
team - JSON	The technician's team. The actual type of this field is Team. Returns as JSON, object contains teamId and name fields.
reportingManager - JSON	The technician's reporting manager. The actual type of this field is User. Returns as JSON, object contains userId and name fields.
roles - JSON	The application role of the technician. The actual type of this field is Role. Returns as JSON, object contains roleId and name fields.
groups - JSON	The list of technician groups to which the technician is associated. The actual type of this field is Technician Group. Returns array of objects as JSON, each object contains groupId and name fields.
Example
{
  "userId": "4",
  "firstName": "Jason",
  "lastName": "Wheeler",
  "name": "Jason Wheeler",
  "email": "jason.wheeler@acme.com",
  "contactNumber": "212-504-4115",
  "emailSignature": "<p>Thanks and Regards,</p><p>Jason Wheeler</p><p><br></p>",
  "designation": {"designationId": "7928838372746166998", "name": "Manager"},
  "department": {},
  "associations": {},
  "team": {"teamId": "7928838372746166764", "name": "Network specialist"},
  "reportingManager": {"userId": "6928838372746166764", "name": "Howard Stern"},
  "roles": {},
  "groups": [{"groupId": "7928838372746166689", "name": "Network"}]
}
Types
TechnicianGroup
Technician groups help group a set of technicians together based on function, expertise, etc for the purpose of easy assignment of tickets. Sites can be associated to one or more technician groups so that the technicians in those groups can access the site's data.

Field Name	Description
groupId - ID!	The ID of the technician group.
name - String!	The name of the technician group.
Example
{"groupId": "4", "name": "Network"}
Types
TechnicianGroupIdentifierInput
Specifies the identifier input for the technician group.

Input Field	Description
groupId - ID!	
The ID of the technician group.

Example
{"groupId": "4"}
Types
TechnicianList
The response payload for list of technicians fetched.

Field Name	Description
userList - [Technician]	The list of technicians.
listInfo - ListInfo	The detail about the list.
Example
{
  "userList": [Technician],
  "listInfo": ListInfo
}
Types
Ticket
The ticket is a type of record used to track and manage issues or requests

Field Name	Description
ticketId - ID!	The ID of the ticket.
displayId - String!	The system-generated, human-readable ID of the ticket.
subject - String!	The subject of the ticket.
source - String!	The creation source of the ticket.
department - JSON	The department to which the ticket is associated The actual type of this field is Department. Returns ID and name fields as JSON. The name field can be used in the filter condition.
site - JSON	The site to which the ticket is associated. The actual type of this field is Site. Returns ID and name fields as JSON. The name field can be used in the filter condition.
requester - JSON	The user for whom the ticket is created. The actual type of this field is User. Returns userId and name fields as JSON. The name and email fields can be used in the filter condition.
additionalRequester - JSON	The list of users who act as additional requesters. The actual type of this field is User. Returns array of objects as JSON, each object contains userId and name fields.
followers - JSON	The list of technicians who follow the ticket. The actual type of this field is User. Returns array of objects as JSON, each object contains userId and name fields.
techGroup - JSON	The technician group to which the ticket is assigned. The actual type of this field is TechnicianGroup. Returns groupId and name fields as JSON. The name field can be used in the filter condition.
technician - JSON	The technician to whom the ticket is assigned. The actual type of this field is Technician. Returns userId and name fields as JSON. The name and email fields can be used in the filter condition.
status - String!	The status of the ticket.
priority - String	The priority of the ticket.
impact - String	The impact of the ticket.
urgency - String	The urgency of the ticket.
category - String	The category of the ticket.
subcategory - String	The subcategory of the ticket.
cause - String	The cause of the ticket.
subcause - String	The sub cause of the ticket.
resolutionCode - String	The resolution code of the ticket.
sla - JSON	The SLA of the ticket. The actual type of this field is SLA. Returns id and name fields as JSON.
createdTime - String!	The time when the ticket was created.
updatedTime - String!	The time when the ticket was updated.
firstResponseDueTime - String	The due time of first response metric.
firstResponseTime - String	The first response time of the ticket.
firstResponseViolated - Boolean	Denotes whether the first response metric is violated.
resolutionDueTime - String	The due time of resolution metric.
resolutionTime - String	The resolution time of the ticket.
resolutionViolated - Boolean	Denotes whether the resolution metric is violated.
customFields - JSON	
Specifies the custom field values for the ticket. Each entry in the JSON would be a key-value. The key will be a system-generated unique name of the custom field (columnName field of CustomField type). The value for text, paragraph, radio, select, numeric, decimal, date, datetime should be given as a string. The value for checkbox, multi-select should be an array of string.

For example, the value could be {"udf1text": "value", "udf2mselect": ["value1", "value2"]}

Arguments
fields - [String]
requestType - String	Specifies the type of the ticket.
worklogTimespent - String	The Worklog Time Spent (In Minutes) on the ticket.
Example
{
  "ticketId": "7928838372746166987",
  "displayId": "062822-0005",
  "subject": "Help! Internet is not working!",
  "source": "FORM",
  "department": {},
  "site": {"id": "7928838372746169876", "name": "Austin"},
  "requester": {"userId": "5928838372746169876", "name": "John Williams"},
  "additionalRequester": [
    {"userId": "5928838372746169098", "name": "Howard Stern"}
  ],
  "followers": {},
  "techGroup": {"groupId": "3928838372746169098", "name": "Network"},
  "technician": {"userId": "5928838372746160987", "name": "Jason Wheeler"},
  "status": "New",
  "priority": "Critical",
  "impact": "High",
  "urgency": "High",
  "category": "Network",
  "subcategory": "Wireless",
  "cause": "Component issue",
  "subcause": "Hardware Issue",
  "resolutionCode": "Permanent Fix",
  "sla": {"id": "3928838372746169012", "name": "VIP SLA"},
  "createdTime": "2022-06-28T05:25:10",
  "updatedTime": "2022-06-29T10:25:10",
  "firstResponseDueTime": "2022-06-29T10:25:10",
  "firstResponseTime": "2022-06-29T10:25:10",
  "firstResponseViolated": false,
  "resolutionDueTime": "2022-06-29T10:25:10",
  "resolutionTime": "2022-06-29T10:25:10",
  "resolutionViolated": false,
  "customFields": {
    "udf1text": "value",
    "udf2date": "2022-05-06",
    "udf3dt": "2022-05-06T10:10:10",
    "udf5mselect": ["value1", "value1"]
  },
  "requestType": "abc123",
  "worklogTimespent": "100.00"
}
Types
TicketConversation
The conversations of the ticket.

Field Name	Description
conversationId - ID!	The ID of the conversation
content - String	The content/description of the conversation.
time - String!	The created datetime of the conversation.
user - JSON	The user who created the conversation. The actual type of this field is User. Returns userId, name and email fields as JSON. It is possible that the user who not exist in the system can create the conversation (through email), returns email field only in that case.
toUsers - [RecipientInfo]	The list of TO recipients.
ccUsers - [RecipientInfo]	The list of CC recipients.
bccUsers - [RecipientInfo]	The list of BCC recipients.
attachments - [Attachment]	The list of attachments.
type - TicketConversationType!	The type of the ticket conversation.
Example
{
  "conversationId": "4",
  "content": "I cannot access my internet! I'm not sure what's happening!",
  "time": "2022-06-29T10:25:10",
  "user": {
    "userId": "3928838372746169098",
    "name": "Joseph John",
    "email": "joseph.john@acme.com"
  },
  "toUsers": [RecipientInfo],
  "ccUsers": [RecipientInfo],
  "bccUsers": [RecipientInfo],
  "attachments": [Attachment],
  "type": "REQ_REPLY"
}
Types
TicketConversationType
Denotes the type of the ticket conversation.

Enum Value	Description
DESCRIPTION

Denotes the description of the ticket since it will be created as the first message of a conversation.
REQ_REPLY

Denotes the requester reply.
REQ_NOTIFICATION

Denotes the requester notification.
TECH_REPLY

Denotes the technician reply.
TECH_NOTIFICATION

Denotes the technician notification.
Example
"DESCRIPTION"
Types
TicketIdentifierInput
Specifies the identifier input for the ticket.

Input Field	Description
ticketId - ID!	
The ID of the ticket.

Example
{"ticketId": 4}
Types
TicketList
The response payload for list of tickets fetched.

Field Name	Description
tickets - [Ticket]	The list of tickets.
listInfo - ListInfo	The detail about the list.
Example
{
  "tickets": [Ticket],
  "listInfo": ListInfo
}
Types
UpdateAddressInput
Input Field	Description
addressId - ID!	
The ID of the address.

line1 - String	
Specifies the address line 1 of the site.

line2 - String	
Specifies the address line 2 of the site.

line3 - String	
Specifies the address line 3 of the site.

city - String	
Specifies the city of the site.

postalCode - String	
Specifies the postal code of the site.

countryCode - String	
Specifies the country of the site. The value should be specified as ISO 3166 two letter country code.

stateCode - String	
Specifies the state/subdivision of the site. The value should be specified as an ISO 3166 state/subdivision code.

Example
{
  "addressId": 4,
  "line1": "Ap #867-859 Sit Rd.",
  "line2": "abc123",
  "line3": "abc123",
  "city": "Azusa",
  "postalCode": "10005",
  "countryCode": "US",
  "stateCode": "NY"
}
Types
UpdateAssetInput
specifies the input to update an Asset API

Input Field	Description
assetId - ID!	
The ID of the asset which needs to be updated

name - String	
Name of the asset to be updated

site - SiteIdentifierInput	
Site details of the asset to be updated

department - DepartmentIdentifierInput	
Department details of the asset to be updated

customFields - JSON	
The custom fields that need to be updated

requester - UserIdentifierInput	
The requester that needs to be updated

warrantyExpiryDate - String	
The Warranty Expiration Date of the Asset

purchasedDate - String	
The Purchased Date of the Asset

Example
{
  "assetId": "8001114136934215681",
  "name": "HostName Changed",
  "site": {"id": "3001114136934215681"},
  "department": DepartmentIdentifierInput,
  "customFields": {
    "udf1text": "some text value",
    "udf2date": "2022-05-06",
    "udf3dt": "2022-05-06T10:10:10",
    "udf5mselect": ["value1", "value1"]
  },
  "requester": {"userId": 4},
  "warrantyExpiryDate": "2030-05-27",
  "purchasedDate": "2023-05-27"
}
Types
UpdateItDocumentationInput
Specifies the input required to update an existing IT document

Input Field	Description
typeId - ID!	
Type ID of the IT document category

itDocId - ID!	
The ID of the IT document that needs to be updated

name - String	
The name that needs to be updated for the IT document

site - SiteIdentifierInput	
Site details that need to be updated

customFields - JSON	
Custom fields that need to be updated

Example
{
  "typeId": "3077519261260693504",
  "itDocId": "8001114136934215681",
  "name": "edited It Doc Record",
  "site": {"id": "1234323434"},
  "customFields": {
    "udf1text": "value",
    "udf2date": "2022-05-06",
    "udf3dt": "2022-05-06T10:10:10",
    "udf5mselect": ["value1", "value1"]
  }
}
Types
UpdateKbArticleInput
Used to update details of an existing KB Article.

Input Field	Description
itemId - ID!	
Identifier of the article.

name - String	
Updated title of the article.

parent - KBItemIdentifierInput	
Updated parent collection.

status - ArticleStatus	
New status of the article.

content - String	
Updated article body (Applicable only to HTML articles).

visibility - DocumentSharedUpdateInput	
Updated sharing settings

loginRequired - Boolean	
Update login requirement.

Example
{
  "itemId": "4",
  "name": "Troubleshooting Your Wi-Fi Connection",
  "parent": KBItemIdentifierInput,
  "status": "DRAFT",
  "content": "<html><body>This article describes you about troubleshooting the Wi-Fi connection</body></html>",
  "visibility": DocumentSharedUpdateInput,
  "loginRequired": true
}
Types
UpdateKbCollectionInput
Used to modify the existing KB Collection.

Input Field	Description
itemId - ID!	
Unique identifier of the collection.

name - String!	
New name for the collection.

Example
{"itemId": 4, "name": "Network Connectivity"}
Types
UpdateServiceCatalogItemInput
Input for updating a Product

Input Field	Description
itemId - ID!	
Identifier of the item

name - String	
Name of item, must be unique in the service catalog

description - String	
A Short description about the Product

category - ServiceCategoryIdentifierInput	
Identifier of the category under which the item is created

Example
{
  "itemId": "4",
  "name": "xyz789",
  "description": "xyz789",
  "category": ServiceCategoryIdentifierInput
}
Types
UpdateServiceOfferingInput
Input Field	Description
itemId - ID!	
The ID of the worklog item.

serviceItem - ServiceItemIdentifierInput	
Specifies the service item.

qty - String	
The number of offered units/hours. The unit is hrs for HOURS type item.

billDateTime - String	
The date and time that the worklog was added.

notes - String	
The notes added to the worklog.

Example
{
  "itemId": 4,
  "serviceItem": ServiceItemIdentifierInput,
  "qty": "xyz789",
  "billDateTime": "xyz789",
  "notes": "abc123"
}
Types
UpdateSiteInput
Specifies the input required to create a site.

Input Field	Description
id - ID!	
The ID of the site.

name - String!	
The name of the site. This input is mandatory.

working24x7 - Boolean!	
Specifies whether the site has specific business hours or works 24x7. This input is mandatory.

businessHour - [CreateBusinessHourInput]	
Specifies the business hours of the site if working 24x7 is false.

holidayList - HolidayListIdentifierInput	
Specifies the holiday list of the site.

timezoneCode - String!	
Specifies the timezone of the site. The value should be specified in the IANA time zone database, for example, America/New_York. This input is mandatory.

address - UpdateAddressInput	
Specifies the address of the site.

contactNumber - String	
The contact number of the site.

Example
{
  "id": 4,
  "name": "abc123",
  "working24x7": true,
  "businessHour": [CreateBusinessHourInput],
  "holidayList": HolidayListIdentifierInput,
  "timezoneCode": "xyz789",
  "address": UpdateAddressInput,
  "contactNumber": "xyz789"
}
Types
UpdateTicketInput
Specifies the input required to update an existing ticket.

Input Field	Description
ticketId - ID!	
The ID of the ticket going to be updated.

subject - String	
Specifies the subject of the ticket.

site - SiteIdentifierInput	
Specifies the site to which the ticket is associated. Cannot be set to null.

department - DepartmentIdentifierInput	
Specifies the department to which the ticket is associated.

requester - UserIdentifierInput	
Specifies the requester for whom the ticket is created.

techGroup - TechnicianGroupIdentifierInput	
Specifies the technician group to which the ticket is assigned.

technician - UserIdentifierInput	
Specifies the technician to whom the ticket is assigned.

status - String	
Specifies the status of the ticket. The value should be from the Status (name field) type. Cannot be set to null.

priority - String	
Specifies the priority of the ticket. The value should be from the Priority (name field) type.

impact - String	
Specifies the impact of the ticket. The value should be from the Impact (name field) type.

urgency - String	
Specifies the urgency of the ticket. The value should be from the Urgency (name field) type.

category - String	
Specifies the category of the ticket. The value should be from the Category (name field) type.

subcategory - String	
Specifies the subcategory of the ticket. The value should be from the SubCategory (name field) type.

cause - String	
Specifies the cause of the ticket. The value should be from the Cause (name field) type.

subcause - String	
Specifies the sub cause of the ticket. The value should be from the SubCause (name field) type.

resolutionCode - String	
Specifies the resolution code of the ticket.

source - String	
Specifies the creation source of the ticket. Cannot be set to null.

customFields - JSON	
Specifies the custom fields values for the ticket. Each entry in the JSON would be key-value. The key will be a system-generated, unique name of the custom field (columnName field of CustomField type). The value for text, paragraph, radio, select, numeric, decimal, date, datetime should be given as a string. The value for checkbox, multi-select should be an array of string.

For example, the value could be {"udf1text": "value", "udf2mselect": ["value1", "value2"]}

addAdditionalRequester - [UserIdentifierInput]	
Specifies the additional requesters to be added.

deleteAdditionalRequester - [UserIdentifierInput]	
Specifies the additional requesters to be deleted.

addFollowers - [UserIdentifierInput]	
Specifies the followers to be added.

deleteFollowers - [UserIdentifierInput]	
Specifies the followers to be deleted.

suppressCloseNotification - Boolean	
Indicates whether the close notification has to be suppressed while closing the ticket

firstResponseTime - String	
The first response time of the ticket.

resolutionTime - String	
The resolution time of the ticket.

requestType - String	
Specifies the type of the ticket. Cannot be set to null.

Example
{
  "ticketId": 4,
  "subject": "Help! Internet is not working!",
  "site": SiteIdentifierInput,
  "department": DepartmentIdentifierInput,
  "requester": UserIdentifierInput,
  "techGroup": TechnicianGroupIdentifierInput,
  "technician": UserIdentifierInput,
  "status": "New",
  "priority": "Critical",
  "impact": "High",
  "urgency": "High",
  "category": "Network",
  "subcategory": "Wireless",
  "cause": "Component issue",
  "subcause": "Hardware Issue",
  "resolutionCode": "Permanent Fix",
  "source": "FORM",
  "customFields": {
    "udf1text": "value",
    "udf2date": "2022-05-06",
    "udf3dt": "2022-05-06T10:10:10",
    "udf5mselect": ["value1", "value1"]
  },
  "addAdditionalRequester": [UserIdentifierInput],
  "deleteAdditionalRequester": [UserIdentifierInput],
  "addFollowers": [UserIdentifierInput],
  "deleteFollowers": [UserIdentifierInput],
  "suppressCloseNotification": true,
  "firstResponseTime": "abc123",
  "resolutionTime": "xyz789",
  "requestType": "abc123"
}
Types
UpdateUserAssociationInput
Specifies the input required to update the user association.

Input Field	Description
id - ID!	
Specifies the ID of the association.

site - SiteIdentifierInput!	
Specifies the site which will be updated.

Example
{
  "id": "4",
  "site": SiteIdentifierInput
}
Types
UpdateUserInput
Specifies the input required to update the information of an existing user.

Input Field	Description
userId - ID!	
Specifies ID of the user whose recored is to be updated.

firstName - String	
Specifies the first name of the user. Cannot be set to null.

lastName - String	
Specifies the last name of the user.

email - String	
Specifies the email address of the user. Cannot be set to null.

contactNumber - String	
Specifies the contact number of the user. It is recommended to provide the value in the standard format [+][country code][area code][local phone number].

reportingManager - UserIdentifierInput	
Specifies the reporting manager identifier input for the user.

roles - [RoleIdentifierInput]	
Specifies the application role identifier input for the user. Cannot be set to null.

customFields - JSON	
Specifies the custom fields values for the user. Each entry in the JSON would be key-value. The key will be a system-generated, unique name of the custom field (columnName field of CustomField type). The value for text, paragraph, radio, select, numeric, decimal, date, datetime should be given as a string. The value for checkbox, multi-select should be an array of string.

For example, the value could be {"udf1text": "value", "udf2mselect": ["value1", "value2"]}

addGroups - [TechnicianGroupIdentifierInput]	
Specifies the list of technician groups that the technician will be associated with.

deleteGroups - [TechnicianGroupIdentifierInput]	
Specified the list of technician groups from which the technician will be disassociated.

department - DepartmentIdentifierInput	
Specifies the department that the user belongs to.

updateAssociations - [UpdateUserAssociationInput]	
Specifies the input required to update a user association i.e site.

Example
{
  "userId": 4,
  "firstName": "abc123",
  "lastName": "abc123",
  "email": "abc123",
  "contactNumber": "xyz789",
  "reportingManager": UserIdentifierInput,
  "roles": [RoleIdentifierInput],
  "customFields": {},
  "addGroups": [TechnicianGroupIdentifierInput],
  "deleteGroups": [TechnicianGroupIdentifierInput],
  "department": DepartmentIdentifierInput,
  "updateAssociations": [UpdateUserAssociationInput]
}
Types
UpdatedAsset
Specifies the details about the updated asset

Field Name	Description
assetId - ID	ID of the asset
name - String!	Name of the asset
assetClass - JSON!	Asset class details of the asset
site - JSON!	Site details of the asset
department - JSON	Department details of the asset
requester - JSON!	The requester of the asset
customFields - JSON	Custom field details of the asset
Example
{
  "assetId": "9001114136934215681",
  "name": "DESKTOP-I9QFDTE",
  "assetClass": {"classId": "1", "name": "Windows Machine"},
  "site": {"id": "7928838372746169876", "name": "Austin"},
  "department": {"departmentId": "7928838372746166998", "name": "Sales"},
  "requester": {"userId": "5928838372746169876", "name": "John Williams"},
  "customFields": {
    "udf1text": "value",
    "udf2date": "2022-05-06",
    "udf3dt": "2022-05-06T10:10:10",
    "udf5mselect": ["value1", "value1"]
  }
}
Types
User
The user in organization

Field Name	Description
userId - ID!	The ID of the user.
firstName - String!	The first name of the user.
lastName - String	The last name of the user.
name - String!	The full name of the user.
email - String!	The email address of the user.
contactNumber - String	The contact number of the user. It is recommended to provide the value in the standard format [+][country code][area code][local phone number].
reportingManager - JSON	The reporting manager of the user. The actual type of this field is User. This field returns userId and name fields as JSON. The name and email fields can be used in the filter condition.
roles - JSON	The list of roles of the user. The actual type of this field is Roles. This field returns roleId and name fields as JSON.
department - JSON	The department of the user. The actual type of this field is Department. This field returns department and name fields as JSON. The name field can be used in the filter condition.
associations - JSON	The list of association of site present for the user. The actual type of this field is UserAssociation. This field returns associationId and site fields as JSON. The siteId can be used in the filter condition.
customFields - JSON	
Specifies the custom fields values for the user. Each entry in the JSON would be key-value. The key will be a system-generated, unique name of the custom field (columnName field of CustomField type). The value for text, paragraph, radio, select, numeric, decimal, date, datetime should be given as a string. The value for checkbox, multi-select should be an array of string.

For example, the value could be {"udf1text": "value", "udf2mselect": ["value1", "value2"]}

Arguments
fields - [String]
Example
{
  "userId": "4",
  "firstName": "abc123",
  "lastName": "abc123",
  "name": "abc123",
  "email": "abc123",
  "contactNumber": "xyz789",
  "reportingManager": {},
  "roles": {},
  "department": {},
  "associations": {},
  "customFields": {}
}
Types
UserIdentifierInput
Specifies the identifier input for the user.

Input Field	Description
userId - ID!	
The ID of the user.

Example
{"userId": "4"}
Types
UserList
The response payload for list of users fetched.

Field Name	Description
userList - [User]	The list of users.
listInfo - ListInfo	The detail about the list.
Example
{
  "userList": [User],
  "listInfo": ListInfo
}
Types
UserRoleSharedType
Defines how access is granted based on requester user roles.

Enum Value	Description
AllRoles

Role

Example
"AllRoles"
Types
UserSharedType
Defines how access is granted to technician users.

Enum Value	Description
AllUsers

User

Example
"AllUsers"
Types
WorkItemIdentifierInput
Specifies the identifier input for the work.

Input Field	Description
workId - ID!	
The ID of the work item

module - WorkModule!	
Used to distinguish the work item.

Example
{"workId": 4, "module": "TICKET"}
Types
WorkModule
Enum Value	Description
TICKET

PROJECT

Example
"TICKET"
Documentation by SuperOps