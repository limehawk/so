API Documentation - SuperOps
Welcome to the Superops MSP GraphQL API reference! This reference includes the complete set of GraphQL types, queries, mutations, and their parameters. For more tutorial-oriented API documentation, please check out our API Guide

Contact
Superops

support@superops.com

API Endpoints
/* US data center use the below URL

https://api.superops.ai/msp
/* EU data center use the below URL

https://euapi.superops.ai/msp
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
    client
    site
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
    deviceCategory
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
      "client": {
        "accountId": "7928838372746166998",
        "name": "Acme Management Pvt. Ltd."
      },
      "site": {"id": "7928838372746169876", "name": "Austin"},
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
      "lastReportedTime": "2023-08-22T19:23:22.678",
      "deviceCategory": {"id": "7642345678456", "name": "Windows Workstation"}
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
    showToClient
  }
}
Variables
{"input": ["xyz789"]}
Response
{
  "data": {
    "getAssetCustomFields": {
      "id": 4,
      "columnName": "udf1text",
      "label": "SSN",
      "description": "Social Security Number",
      "fieldType": "TEXT",
      "showToClient": false
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
      "discType": "abc123",
      "fileSystem": "xyz789",
      "maxFileLength": 987,
      "autoMounted": false,
      "compressed": true,
      "pageFile": true,
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
getAssetPatchStatus
 use Patch status in getAsset API
Fetches the asset's patch status.

Response
Returns a String

Arguments
Name	Description
input - AssetIdentifierInput!	
Query
query getAssetPatchStatus($input: AssetIdentifierInput!) {
  getAssetPatchStatus(input: $input)
}
Variables
{"input": AssetIdentifierInput}
Response
{"data": {"getAssetPatchStatus": "xyz789"}}
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
getBusinessFunctionList
Fetches the list of business functions.

Response
Returns [BusinessFunction]

Query
query getBusinessFunctionList {
  getBusinessFunctionList {
    businessFunctionId
    name
  }
}
Response
{
  "data": {
    "getBusinessFunctionList": {"businessFunctionId": 4, "name": "Finance"}
  }
}
Queries
getCategoryList
Fetches the list of available ticket categories.

Response
Returns [Category]

Query
query getCategoryList {
  getCategoryList {
    id
    name
    subCategories {
      ...SubCategoryFragment
    }
  }
}
Response
{
  "data": {
    "getCategoryList": {
      "id": 4,
      "name": "Hardware",
      "subCategories": [SubCategory]
    }
  }
}
Queries
getCauseList
Fetches the list of available ticket causes.

Response
Returns [Cause]

Query
query getCauseList {
  getCauseList {
    id
    name
    subCauses {
      ...SubCauseFragment
    }
  }
}
Response
{
  "data": {
    "getCauseList": {
      "id": 4,
      "name": "Capacity related",
      "subCauses": [SubCause]
    }
  }
}
Queries
getClient
Fetches a client.

Response
Returns a Client

Arguments
Name	Description
input - ClientIdentifierInput!	
Query
query getClient($input: ClientIdentifierInput!) {
  getClient(input: $input) {
    accountId
    name
    stage
    status
    emailDomains
    accountManager
    primaryContact
    secondaryContact
    hqSite
    technicianGroups
    customFields
  }
}
Variables
{"input": ClientIdentifierInput}
Response
{
  "data": {
    "getClient": {
      "accountId": 4,
      "name": "Globex Corporation",
      "stage": "Active",
      "status": "Paid",
      "emailDomains": ["acme.com"],
      "accountManager": {
        "userId": "7928838372746166271",
        "name": "Clovis Sonsimps"
      },
      "primaryContact": {
        "userId": "7928838372746166272",
        "name": "John Abraham"
      },
      "secondaryContact": {"userId": "7928838372746166272", "name": "Joseph"},
      "hqSite": {"id": "7928838372746166287", "name": "Austin"},
      "technicianGroups": [
        {"groupId": "7928838372746166256", "name": "Network Problems"}
      ],
      "customFields": {
        "udf1text": "value",
        "udf2date": "2022-05-06",
        "udf3dt": "2022-05-06T10:10:10",
        "udf5mselect": ["value1", "value1"]
      }
    }
  }
}
Queries
getClientContract
Fetches a client contract

Response
Returns a ClientContract

Arguments
Name	Description
input - ContractIdentifierInput!	
Query
query getClientContract($input: ContractIdentifierInput!) {
  getClientContract(input: $input) {
    contractId
    client
    contract {
      ...ContractFragment
    }
    startDate
    endDate
    contractStatus
  }
}
Variables
{"input": ContractIdentifierInput}
Response
{
  "data": {
    "getClientContract": {
      "contractId": "4",
      "client": {},
      "contract": Contract,
      "startDate": "xyz789",
      "endDate": "xyz789",
      "contractStatus": "DRAFT"
    }
  }
}
Queries
getClientContractList
Fetches a list of client contracts

Response
Returns a ClientContractList

Arguments
Name	Description
input - ListInfoInput	
Query
query getClientContractList($input: ListInfoInput) {
  getClientContractList(input: $input) {
    clientContracts {
      ...ClientContractFragment
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
    "getClientContractList": {
      "clientContracts": [ClientContract],
      "listInfo": ListInfo
    }
  }
}
Queries
getClientCustomField
Fetches a client custom field.

Response
Returns a CustomField

Arguments
Name	Description
input - CustomFieldIdentifierInput	
Query
query getClientCustomField($input: CustomFieldIdentifierInput) {
  getClientCustomField(input: $input) {
    id
    columnName
    label
    description
    fieldType
    showToClient
  }
}
Variables
{"input": CustomFieldIdentifierInput}
Response
{
  "data": {
    "getClientCustomField": {
      "id": "4",
      "columnName": "udf1text",
      "label": "SSN",
      "description": "Social Security Number",
      "fieldType": "TEXT",
      "showToClient": false
    }
  }
}
Queries
getClientCustomFieldList
Fetches the list of client custom fields.

Response
Returns [CustomField]

Query
query getClientCustomFieldList {
  getClientCustomFieldList {
    id
    columnName
    label
    description
    fieldType
    showToClient
  }
}
Response
{
  "data": {
    "getClientCustomFieldList": {
      "id": 4,
      "columnName": "udf1text",
      "label": "SSN",
      "description": "Social Security Number",
      "fieldType": "TEXT",
      "showToClient": true
    }
  }
}
Queries
getClientList
Fetches a list of clients.

Response
Returns a ClientList

Arguments
Name	Description
input - ListInfoInput!	
Query
query getClientList($input: ListInfoInput!) {
  getClientList(input: $input) {
    clients {
      ...ClientFragment
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
    "getClientList": {
      "clients": [Client],
      "listInfo": ListInfo
    }
  }
}
Queries
getClientSite
Fetch a client site.

Response
Returns a ClientSite

Arguments
Name	Description
input - ClientSiteIdentifierInput!	
Query
query getClientSite($input: ClientSiteIdentifierInput!) {
  getClientSite(input: $input) {
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
    line1
    line2
    line3
    city
    postalCode
    countryCode
    stateCode
    contactNumber
    client
    hq
    installerInfo {
      ...InstallerDetailsFragment
    }
  }
}
Variables
{"input": ClientSiteIdentifierInput}
Response
{
  "data": {
    "getClientSite": {
      "id": "4",
      "name": "Austin",
      "businessHour": [BusinessHour],
      "holidayList": HolidayList,
      "timezoneCode": "America/Los_Angeles",
      "working24x7": true,
      "line1": "Ap #867-859 Sit Rd.",
      "line2": "abc123",
      "line3": "xyz789",
      "city": "Azusa",
      "postalCode": "10005",
      "countryCode": "US",
      "stateCode": "NY",
      "contactNumber": "xyz789",
      "client": {
        "accountId": "7928838372746166276",
        "name": "Globex Corporation"
      },
      "hq": true,
      "installerInfo": [InstallerDetails]
    }
  }
}
Queries
getClientSiteList
Fetches a list of client sites.

Response
Returns a ClientSiteList

Arguments
Name	Description
input - GetClientSiteListInput!	
Query
query getClientSiteList($input: GetClientSiteListInput!) {
  getClientSiteList(input: $input) {
    sites {
      ...ClientSiteFragment
    }
    listInfo {
      ...ListInfoFragment
    }
  }
}
Variables
{"input": GetClientSiteListInput}
Response
{
  "data": {
    "getClientSiteList": {
      "sites": [ClientSite],
      "listInfo": ListInfo
    }
  }
}
Queries
getClientStageList
Fetches a list of client stages.

Response
Returns [ClientStage]

Query
query getClientStageList {
  getClientStageList {
    stageId
    name
    constant
    statuses {
      ...ClientStatusFragment
    }
  }
}
Response
{
  "data": {
    "getClientStageList": {
      "stageId": "4",
      "name": "Active",
      "constant": "ACTIVE",
      "statuses": [ClientStatus]
    }
  }
}
Queries
getClientUser
Fetches a client user.

Response
Returns a ClientUser

Arguments
Name	Description
input - ClientUserIdentifierInput!	
Query
query getClientUser($input: ClientUserIdentifierInput!) {
  getClientUser(input: $input) {
    userId
    firstName
    lastName
    name
    email
    contactNumber
    reportingManager
    site
    role
    client
    customFields
  }
}
Variables
{"input": ClientUserIdentifierInput}
Response
{
  "data": {
    "getClientUser": {
      "userId": 4,
      "firstName": "Ryan",
      "lastName": "Howard",
      "name": "Ryan Howard",
      "email": "ryan.howard@dundermifflin.com",
      "contactNumber": "+16412349876",
      "reportingManager": {
        "userId": "79288383727461662754",
        "name": "Joseph John"
      },
      "site": {"id": "79288383727461662786", "name": "Austin"},
      "role": {"roleId": "4", "name": "Requester"},
      "client": {
        "accountId": "7928838372746166276",
        "name": "Globex Corporation"
      },
      "customFields": {}
    }
  }
}
Queries
getClientUserAssociationList
Fetches a list of client user associations.

Response
Returns a ClientUserAssociationList

Arguments
Name	Description
input - ListInfoInput!	
Query
query getClientUserAssociationList($input: ListInfoInput!) {
  getClientUserAssociationList(input: $input) {
    associations {
      ...ClientUserAssociationFragment
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
    "getClientUserAssociationList": {
      "associations": [ClientUserAssociation],
      "listInfo": ListInfo
    }
  }
}
Queries
getClientUserList
Fetches a list of client users.

Response
Returns a ClientUserList

Arguments
Name	Description
input - GetClientUserListInput!	
Query
query getClientUserList($input: GetClientUserListInput!) {
  getClientUserList(input: $input) {
    userList {
      ...ClientUserFragment
    }
    listInfo {
      ...ListInfoFragment
    }
  }
}
Variables
{"input": GetClientUserListInput}
Response
{
  "data": {
    "getClientUserList": {
      "userList": [ClientUser],
      "listInfo": ListInfo
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
      "deviceCategoryId": 9567898545678,
      "name": "Windows Workstation",
      "custom": true,
      "assetClass": {"classId": "1", "name": "Windows Machine"},
      "createdTime": "2022-11-29T15:54:16.270"
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
{"data": {"getHolidayList": {"id": 4, "name": "USA Holidays"}}}
Queries
getImpactList
Fetches the list of available impact levels.

Response
Returns [Impact]

Query
query getImpactList {
  getImpactList {
    id
    name
  }
}
Response
{"data": {"getImpactList": {"id": 4, "name": "High"}}}
Queries
getInvoice
Fetches an invoice.

Response
Returns an Invoice

Arguments
Name	Description
input - InvoiceIdentifierInput!	
Query
query getInvoice($input: InvoiceIdentifierInput!) {
  getInvoice(input: $input) {
    invoiceId
    displayId
    client
    site
    invoiceDate
    dueDate
    statusEnum
    sentToClient
    items {
      ...InvoiceItemFragment
    }
    taxes {
      ...InvoiceTaxItemFragment
    }
    discountAmount
    additionalDiscount
    additionalDiscountRate
    totalAmount
    notes
    paymentDate
    paymentMethod
    paymentReference
    invoicePaymentTerm
  }
}
Variables
{"input": InvoiceIdentifierInput}
Response
{
  "data": {
    "getInvoice": {
      "invoiceId": "4",
      "displayId": "061422-0001",
      "client": {"accountId": "7929754851606401024", "name": "Acme"},
      "site": {"id": "7929754852373958656", "name": "Austin"},
      "invoiceDate": "2022-06-14",
      "dueDate": "2022-06-25",
      "statusEnum": "DRAFT",
      "sentToClient": true,
      "items": [InvoiceItem],
      "taxes": [InvoiceTaxItem],
      "discountAmount": "1250.25",
      "additionalDiscount": "1000",
      "additionalDiscountRate": "10",
      "totalAmount": "10000",
      "notes": "The additional discount offered by Adam",
      "paymentDate": "abc123",
      "paymentMethod": {},
      "paymentReference": "xyz789",
      "invoicePaymentTerm": {}
    }
  }
}
Queries
getInvoiceItemList
Fetches a list of all the invoice items.

Response
Returns an InvoiceItemList

Arguments
Name	Description
input - ListInfoInput!	
Query
query getInvoiceItemList($input: ListInfoInput!) {
  getInvoiceItemList(input: $input) {
    items {
      ...InvoiceItemFragment
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
    "getInvoiceItemList": {
      "items": [InvoiceItem],
      "listInfo": ListInfo
    }
  }
}
Queries
getInvoiceList
Fetches a list of invoices.

Response
Returns an InvoiceList

Arguments
Name	Description
input - ListInfoInput!	
Query
query getInvoiceList($input: ListInfoInput!) {
  getInvoiceList(input: $input) {
    invoices {
      ...InvoiceFragment
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
    "getInvoiceList": {
      "invoices": [Invoice],
      "listInfo": ListInfo
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
    client
    site
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
      "name": "abc123",
      "client": {},
      "site": {},
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
      "description": "xyz789",
      "status": "DRAFT",
      "createdBy": {},
      "createdOn": "xyz789",
      "lastModifiedBy": {},
      "lastModifiedOn": "xyz789",
      "viewCount": 987,
      "articleType": "HTML",
      "visibility": [DocumentSharedDetails],
      "loginRequired": false
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
getOfferedItems
Fetches a list of the offered services

Response
Returns an OfferedItemList

Arguments
Name	Description
input - ListInfoInput	
Query
query getOfferedItems($input: ListInfoInput) {
  getOfferedItems(input: $input) {
    items {
      ...OfferedItemFragment
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
    "getOfferedItems": {
      "items": [OfferedItem],
      "listInfo": ListInfo
    }
  }
}
Queries
getPaymentMethodList
Fetches the list of payment method list.

Response
Returns [PaymentMethod]

Query
query getPaymentMethodList {
  getPaymentMethodList {
    paymentMethodId
    paymentMethodName
  }
}
Response
{
  "data": {
    "getPaymentMethodList": {
      "paymentMethodId": 4,
      "paymentMethodName": "xyz789"
    }
  }
}
Queries
getPaymentTermList
Fetches the list of payment terms.

Response
Returns [PaymentTerm]

Query
query getPaymentTermList {
  getPaymentTermList {
    paymentTermId
    paymentTermName
    paymentTermValue
  }
}
Response
{
  "data": {
    "getPaymentTermList": {
      "paymentTermId": "4",
      "paymentTermName": "abc123",
      "paymentTermValue": 123
    }
  }
}
Queries
getPriorityList
Fetches the list of available priority levels.

Response
Returns [Priority]

Query
query getPriorityList {
  getPriorityList {
    id
    name
    colorCode
  }
}
Response
{
  "data": {
    "getPriorityList": {"id": 4, "name": "Critical", "colorCode": "#EE4338"}
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
    roleUserList
  }
}
Response
{
  "data": {
    "getRequesterRoleList": {
      "roleId": "4",
      "name": "Client Admin",
      "description": "Client Administrator",
      "roleType": RoleType,
      "roleFeatureList": [RoleFeature],
      "roleUserList": [
        {"userId": "7928838372746166222", "name": "user1"},
        {"userId": "7928838372746166223", "name": "user2"}
      ]
    }
  }
}
Queries
getResolutionCodeList
Fetches the list of resolution codes.

Response
Returns [ResolutionCode]

Query
query getResolutionCodeList {
  getResolutionCodeList {
    id
    name
    description
  }
}
Response
{
  "data": {
    "getResolutionCodeList": {
      "id": 4,
      "name": "Workaround",
      "description": "A temporary fix has been provided, underlying issue still exists"
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
{"data": {"getSLAList": {"id": 4, "name": "VIP SLA"}}}
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
    itemType
    offerAsWorklogItem
    status
    taxable
    salesTax {
      ...TaxFragment
    }
    sellingPrice {
      ...PricingModelFragment
    }
    costPrice {
      ...PricingModelFragment
    }
    serviceTypeItem {
      ...ServiceTypeItemFragment
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
      "description": "Seagate One Touch 1TB USB 3.0 Hard Disk Drive",
      "category": ServiceCategory,
      "itemType": "PRODUCT",
      "offerAsWorklogItem": true,
      "status": "ACTIVE",
      "taxable": false,
      "salesTax": Tax,
      "sellingPrice": PricingModel,
      "costPrice": PricingModel,
      "serviceTypeItem": ServiceTypeItem
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
{
  "data": {
    "getServiceCategoryList": {
      "categoryId": "4",
      "name": "Hardware"
    }
  }
}
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
    quantityType
    category {
      ...ServiceCategoryFragment
    }
    useAsWorklogItem
    unitPrice
    businessHoursUnitPrice
    afterHoursUnitPrice
    roundUpValue
    quantity
    amount
    adjustBlockItemAgainstAllItems
    blockItemAdjustedItems {
      ...ServiceItemFragment
    }
    blockItemUsedIn
    salesTaxEnabled
    salesTax {
      ...TaxFragment
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
      "description": "abc123",
      "quantityType": "UNITS",
      "category": ServiceCategory,
      "useAsWorklogItem": false,
      "unitPrice": "xyz789",
      "businessHoursUnitPrice": "abc123",
      "afterHoursUnitPrice": "xyz789",
      "roundUpValue": 123,
      "quantity": "abc123",
      "amount": "abc123",
      "adjustBlockItemAgainstAllItems": false,
      "blockItemAdjustedItems": [ServiceItem],
      "blockItemUsedIn": "ALL_HOURS",
      "salesTaxEnabled": true,
      "salesTax": Tax
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
getStatusList
Fetch the list of available ticket statuses.

Response
Returns [Status]

Query
query getStatusList {
  getStatusList {
    id
    name
    description
  }
}
Response
{
  "data": {
    "getStatusList": {
      "id": 4,
      "name": "Assigned",
      "description": "Denotes the ticket is assigned to a technician"
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
input - GetTaskInput!	
Query
query getTask($input: GetTaskInput!) {
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
    module
    ticket
    workItem
  }
}
Variables
{"input": GetTaskInput}
Response
{
  "data": {
    "getTask": {
      "taskId": "4",
      "displayId": "062822-0001",
      "title": "Install Antivirus",
      "description": "abc123",
      "status": "Planned",
      "estimatedTime": 500,
      "scheduledStartDate": "2022-07-16T09:00:00",
      "dueDate": "2022-07-25T16:00:00",
      "overdue": false,
      "actualStartDate": "2022-07-15T09:00:00",
      "actualEndDate": "2022-07-22T09:00:00",
      "technician": {"userId": "7928838372746166256", "name": "user3"},
      "techGroup": {
        "groupId": "7928838372746166657",
        "name": "Hardware Problems"
      },
      "module": "TICKET",
      "ticket": {
        "ticketId": "7928838372746166987",
        "displayId": "062822-0005",
        "subject": "Help! Internet is not working!"
      },
      "workItem": {}
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
input - GetTaskListInput!	
Query
query getTaskList($input: GetTaskListInput!) {
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
{"input": GetTaskListInput}
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
getTax
Fetches a tax rate from the list of saved tax rates.

Response
Returns a Tax

Arguments
Name	Description
input - TaxIdentifierInput!	
Query
query getTax($input: TaxIdentifierInput!) {
  getTax(input: $input) {
    taxId
    name
    rates {
      ...TaxRateFragment
    }
    totalRate
  }
}
Variables
{"input": TaxIdentifierInput}
Response
{
  "data": {
    "getTax": {
      "taxId": "4",
      "name": "abc123",
      "rates": [TaxRate],
      "totalRate": "xyz789"
    }
  }
}
Queries
getTaxList
Fetches all the tax rates saved in SuperOps.ai.

Response
Returns a TaxList

Arguments
Name	Description
input - ListInfoInput!	
Query
query getTaxList($input: ListInfoInput!) {
  getTaxList(input: $input) {
    taxes {
      ...TaxFragment
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
    "getTaxList": {
      "taxes": [Tax],
      "listInfo": ListInfo
    }
  }
}
Queries
getTeamList
Fetches the list of teams.

Response
Returns [Team]

Query
query getTeamList {
  getTeamList {
    teamId
    name
  }
}
Response
{
  "data": {
    "getTeamList": {
      "teamId": "4",
      "name": "Network specialist"
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
Fetches the list of technicians.

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
    roleUserList
  }
}
Response
{
  "data": {
    "getTechnicianRoleList": {
      "roleId": 4,
      "name": "Client Admin",
      "description": "Client Administrator",
      "roleType": RoleType,
      "roleFeatureList": [RoleFeature],
      "roleUserList": [
        {"userId": "7928838372746166222", "name": "user1"},
        {"userId": "7928838372746166223", "name": "user2"}
      ]
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
    ticketType
    requestType
    source
    client
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
      "ticketType": "INCIDENT",
      "requestType": "abc123",
      "source": "FORM",
      "client": {
        "accountId": "7928838372746166998",
        "name": "Acme Management Pvt. Ltd."
      },
      "site": {"id": "7928838372746169876", "name": "Austin"},
      "requester": {"userId": "5928838372746169876", "name": "John Williams"},
      "additionalRequester": [
        {"userId": "5928838372746169098", "name": "Howard Stern"}
      ],
      "followers": {},
      "techGroup": {"groupId": "3928838372746169098", "name": "Network"},
      "technician": {"userId": "5928838372746160987", "name": "Jason Wheeler"},
      "status": "New",
      "priority": "xyz789",
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
getTicketCustomField
Fetches a ticket custom field.

Response
Returns a CustomField

Arguments
Name	Description
input - CustomFieldIdentifierInput	
Query
query getTicketCustomField($input: CustomFieldIdentifierInput) {
  getTicketCustomField(input: $input) {
    id
    columnName
    label
    description
    fieldType
    showToClient
  }
}
Variables
{"input": CustomFieldIdentifierInput}
Response
{
  "data": {
    "getTicketCustomField": {
      "id": "4",
      "columnName": "udf1text",
      "label": "SSN",
      "description": "Social Security Number",
      "fieldType": "TEXT",
      "showToClient": false
    }
  }
}
Queries
getTicketCustomFieldList
Fetches the list of ticket custom fields.

Response
Returns [CustomField]

Query
query getTicketCustomFieldList {
  getTicketCustomFieldList {
    id
    columnName
    label
    description
    fieldType
    showToClient
  }
}
Response
{
  "data": {
    "getTicketCustomFieldList": {
      "id": "4",
      "columnName": "udf1text",
      "label": "SSN",
      "description": "Social Security Number",
      "fieldType": "TEXT",
      "showToClient": false
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
getUrgencyList
Fetches the list of available urgency levels.

Response
Returns [Urgency]

Query
query getUrgencyList {
  getUrgencyList {
    id
    name
  }
}
Response
{"data": {"getUrgencyList": {"id": 4, "name": "High"}}}
Queries
getWorkStatusList
Fetches a list of work (task/project) statuses.

Response
Returns [WorkStatus]

Query
query getWorkStatusList {
  getWorkStatusList {
    statusId
    name
    state
  }
}
Response
{
  "data": {
    "getWorkStatusList": {"statusId": 4, "name": "Planned", "state": "PLANNED"}
  }
}
Queries
getWorklogEntries
Fetches worklog Entries.

Response
Returns a WorklogEntryList

Arguments
Name	Description
input - GetWorklogEntriesInput!	
Query
query getWorklogEntries($input: GetWorklogEntriesInput!) {
  getWorklogEntries(input: $input) {
    entries {
      ...WorklogEntryFragment
    }
    listInfo {
      ...ListInfoFragment
    }
  }
}
Variables
{"input": GetWorklogEntriesInput}
Response
{
  "data": {
    "getWorklogEntries": {
      "entries": [WorklogEntry],
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
        "client": {
          "accountId": "7928838372746166998",
          "name": "Acme Management Pvt. Ltd."
        },
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
createCategories
Creates new ticket categories.

Response
Returns [Category]

Arguments
Name	Description
input - [CreateCategoryInput!]!	
Query
mutation createCategories($input: [CreateCategoryInput!]!) {
  createCategories(input: $input) {
    id
    name
    subCategories {
      ...SubCategoryFragment
    }
  }
}
Variables
{"input": [CreateCategoryInput]}
Response
{
  "data": {
    "createCategories": {
      "id": 4,
      "name": "Hardware",
      "subCategories": [SubCategory]
    }
  }
}
Mutations
createCauses
Creates new ticket causes.

Response
Returns [Cause]

Arguments
Name	Description
input - [CreateCauseInput!]!	
Query
mutation createCauses($input: [CreateCauseInput!]!) {
  createCauses(input: $input) {
    id
    name
    subCauses {
      ...SubCauseFragment
    }
  }
}
Variables
{"input": [CreateCauseInput]}
Response
{
  "data": {
    "createCauses": {
      "id": "4",
      "name": "Capacity related",
      "subCauses": [SubCause]
    }
  }
}
Mutations
createClient
Creates a client. @deprecated(reason: "Use 'createClientV2' instead.")

Response
Returns a Client

Arguments
Name	Description
input - CreateClientInput!	
Query
mutation createClient($input: CreateClientInput!) {
  createClient(input: $input) {
    accountId
    name
    stage
    status
    emailDomains
    accountManager
    primaryContact
    secondaryContact
    hqSite
    technicianGroups
    customFields
  }
}
Variables
{"input": CreateClientInput}
Response
{
  "data": {
    "createClient": {
      "accountId": "4",
      "name": "Globex Corporation",
      "stage": "Active",
      "status": "Paid",
      "emailDomains": ["acme.com"],
      "accountManager": {
        "userId": "7928838372746166271",
        "name": "Clovis Sonsimps"
      },
      "primaryContact": {
        "userId": "7928838372746166272",
        "name": "John Abraham"
      },
      "secondaryContact": {"userId": "7928838372746166272", "name": "Joseph"},
      "hqSite": {"id": "7928838372746166287", "name": "Austin"},
      "technicianGroups": [
        {"groupId": "7928838372746166256", "name": "Network Problems"}
      ],
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
createClientContract
Creates a new usage based client contract.

Response
Returns an ID!

Arguments
Name	Description
input - CreateClientContractInput!	
Query
mutation createClientContract($input: CreateClientContractInput!) {
  createClientContract(input: $input)
}
Variables
{"input": CreateClientContractInput}
Response
{"data": {"createClientContract": "4"}}
Mutations
createClientCustomField
Creates a client custom field.

Response
Returns a CustomField

Arguments
Name	Description
input - CreateCustomFieldInput!	
Query
mutation createClientCustomField($input: CreateCustomFieldInput!) {
  createClientCustomField(input: $input) {
    id
    columnName
    label
    description
    fieldType
    showToClient
  }
}
Variables
{"input": CreateCustomFieldInput}
Response
{
  "data": {
    "createClientCustomField": {
      "id": "4",
      "columnName": "udf1text",
      "label": "SSN",
      "description": "Social Security Number",
      "fieldType": "TEXT",
      "showToClient": true
    }
  }
}
Mutations
createClientSite
Creates a client site.

Response
Returns a ClientSite

Arguments
Name	Description
input - CreateClientSiteInput!	
Query
mutation createClientSite($input: CreateClientSiteInput!) {
  createClientSite(input: $input) {
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
    line1
    line2
    line3
    city
    postalCode
    countryCode
    stateCode
    contactNumber
    client
    hq
    installerInfo {
      ...InstallerDetailsFragment
    }
  }
}
Variables
{"input": CreateClientSiteInput}
Response
{
  "data": {
    "createClientSite": {
      "id": 4,
      "name": "Austin",
      "businessHour": [BusinessHour],
      "holidayList": HolidayList,
      "timezoneCode": "America/Los_Angeles",
      "working24x7": true,
      "line1": "Ap #867-859 Sit Rd.",
      "line2": "xyz789",
      "line3": "abc123",
      "city": "Azusa",
      "postalCode": "10005",
      "countryCode": "US",
      "stateCode": "NY",
      "contactNumber": "xyz789",
      "client": {
        "accountId": "7928838372746166276",
        "name": "Globex Corporation"
      },
      "hq": false,
      "installerInfo": [InstallerDetails]
    }
  }
}
Mutations
createClientUser
Creates a new client user.

Response
Returns a ClientUser

Arguments
Name	Description
input - CreateClientUserInput!	
Query
mutation createClientUser($input: CreateClientUserInput!) {
  createClientUser(input: $input) {
    userId
    firstName
    lastName
    name
    email
    contactNumber
    reportingManager
    site
    role
    client
    customFields
  }
}
Variables
{"input": CreateClientUserInput}
Response
{
  "data": {
    "createClientUser": {
      "userId": 4,
      "firstName": "Ryan",
      "lastName": "Howard",
      "name": "Ryan Howard",
      "email": "ryan.howard@dundermifflin.com",
      "contactNumber": "+16412349876",
      "reportingManager": {
        "userId": "79288383727461662754",
        "name": "Joseph John"
      },
      "site": {"id": "79288383727461662786", "name": "Austin"},
      "role": {"roleId": "4", "name": "Requester"},
      "client": {
        "accountId": "7928838372746166276",
        "name": "Globex Corporation"
      },
      "customFields": {}
    }
  }
}
Mutations
createClientUserAssociations
Creates client user associations

Response
Returns [ClientUserAssociation]

Arguments
Name	Description
input - [CreateClientUserAssociationInput!]!	
Query
mutation createClientUserAssociations($input: [CreateClientUserAssociationInput!]!) {
  createClientUserAssociations(input: $input) {
    id
    client {
      ...ClientFragment
    }
    site {
      ...ClientSiteFragment
    }
    user {
      ...ClientUserFragment
    }
  }
}
Variables
{"input": [CreateClientUserAssociationInput]}
Response
{
  "data": {
    "createClientUserAssociations": {
      "id": 4,
      "client": Client,
      "site": ClientSite,
      "user": ClientUser
    }
  }
}
Mutations
createClientV2
Creates a client.

Response
Returns a Client

Arguments
Name	Description
input - CreateClientInputV2!	
Query
mutation createClientV2($input: CreateClientInputV2!) {
  createClientV2(input: $input) {
    accountId
    name
    stage
    status
    emailDomains
    accountManager
    primaryContact
    secondaryContact
    hqSite
    technicianGroups
    customFields
  }
}
Variables
{"input": CreateClientInputV2}
Response
{
  "data": {
    "createClientV2": {
      "accountId": "4",
      "name": "Globex Corporation",
      "stage": "Active",
      "status": "Paid",
      "emailDomains": ["acme.com"],
      "accountManager": {
        "userId": "7928838372746166271",
        "name": "Clovis Sonsimps"
      },
      "primaryContact": {
        "userId": "7928838372746166272",
        "name": "John Abraham"
      },
      "secondaryContact": {"userId": "7928838372746166272", "name": "Joseph"},
      "hqSite": {"id": "7928838372746166287", "name": "Austin"},
      "technicianGroups": [
        {"groupId": "7928838372746166256", "name": "Network Problems"}
      ],
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
createInvoice
Creates an invoice.

Response
Returns an Invoice

Arguments
Name	Description
input - CreateInvoiceInput!	
Query
mutation createInvoice($input: CreateInvoiceInput!) {
  createInvoice(input: $input) {
    invoiceId
    displayId
    client
    site
    invoiceDate
    dueDate
    statusEnum
    sentToClient
    items {
      ...InvoiceItemFragment
    }
    taxes {
      ...InvoiceTaxItemFragment
    }
    discountAmount
    additionalDiscount
    additionalDiscountRate
    totalAmount
    notes
    paymentDate
    paymentMethod
    paymentReference
    invoicePaymentTerm
  }
}
Variables
{"input": CreateInvoiceInput}
Response
{
  "data": {
    "createInvoice": {
      "invoiceId": "4",
      "displayId": "061422-0001",
      "client": {"accountId": "7929754851606401024", "name": "Acme"},
      "site": {"id": "7929754852373958656", "name": "Austin"},
      "invoiceDate": "2022-06-14",
      "dueDate": "2022-06-25",
      "statusEnum": "DRAFT",
      "sentToClient": true,
      "items": [InvoiceItem],
      "taxes": [InvoiceTaxItem],
      "discountAmount": "1250.25",
      "additionalDiscount": "1000",
      "additionalDiscountRate": "10",
      "totalAmount": "10000",
      "notes": "The additional discount offered by Adam",
      "paymentDate": "xyz789",
      "paymentMethod": {},
      "paymentReference": "xyz789",
      "invoicePaymentTerm": {}
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
    client
    site
    customFields
  }
}
Variables
{"input": CreateItDocumentationInput}
Response
{
  "data": {
    "createItDocumentation": {
      "itDocId": "4",
      "name": "abc123",
      "client": {},
      "site": {},
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
    itemType
    offerAsWorklogItem
    status
    taxable
    salesTax {
      ...TaxFragment
    }
    sellingPrice {
      ...PricingModelFragment
    }
    costPrice {
      ...PricingModelFragment
    }
    serviceTypeItem {
      ...ServiceTypeItemFragment
    }
  }
}
Variables
{"input": CreateServiceCatalogItemInput}
Response
{
  "data": {
    "createServiceCatalogItem": {
      "itemId": "4",
      "name": "Hard Disc",
      "description": "Seagate One Touch 1TB USB 3.0 Hard Disk Drive",
      "category": ServiceCategory,
      "itemType": "PRODUCT",
      "offerAsWorklogItem": false,
      "status": "ACTIVE",
      "taxable": true,
      "salesTax": Tax,
      "sellingPrice": PricingModel,
      "costPrice": PricingModel,
      "serviceTypeItem": ServiceTypeItem
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
{"data": {"createServiceCategory": {"categoryId": 4, "name": "Hardware"}}}
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
    quantityType
    category {
      ...ServiceCategoryFragment
    }
    useAsWorklogItem
    unitPrice
    businessHoursUnitPrice
    afterHoursUnitPrice
    roundUpValue
    quantity
    amount
    adjustBlockItemAgainstAllItems
    blockItemAdjustedItems {
      ...ServiceItemFragment
    }
    blockItemUsedIn
    salesTaxEnabled
    salesTax {
      ...TaxFragment
    }
  }
}
Variables
{"input": CreateServiceItemInput}
Response
{
  "data": {
    "createServiceItem": {
      "itemId": 4,
      "name": "Hard Disc",
      "description": "xyz789",
      "quantityType": "UNITS",
      "category": ServiceCategory,
      "useAsWorklogItem": true,
      "unitPrice": "abc123",
      "businessHoursUnitPrice": "xyz789",
      "afterHoursUnitPrice": "xyz789",
      "roundUpValue": 123,
      "quantity": "abc123",
      "amount": "xyz789",
      "adjustBlockItemAgainstAllItems": false,
      "blockItemAdjustedItems": [ServiceItem],
      "blockItemUsedIn": "ALL_HOURS",
      "salesTaxEnabled": false,
      "salesTax": Tax
    }
  }
}
Mutations
createStatus
Creates new ticket statuses.

Response
Returns [Status]

Arguments
Name	Description
input - [CreateStatusInput!]!	
Query
mutation createStatus($input: [CreateStatusInput!]!) {
  createStatus(input: $input) {
    id
    name
    description
  }
}
Variables
{"input": [CreateStatusInput]}
Response
{
  "data": {
    "createStatus": {
      "id": 4,
      "name": "Assigned",
      "description": "Denotes the ticket is assigned to a technician"
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
    module
    ticket
    workItem
  }
}
Variables
{"input": CreateTaskInput}
Response
{
  "data": {
    "createTask": {
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
      "techGroup": {
        "groupId": "7928838372746166657",
        "name": "Hardware Problems"
      },
      "module": "TICKET",
      "ticket": {
        "ticketId": "7928838372746166987",
        "displayId": "062822-0005",
        "subject": "Help! Internet is not working!"
      },
      "workItem": {}
    }
  }
}
Mutations
createTax
Creates a new tax rate.

Response
Returns a Tax

Arguments
Name	Description
input - CreateTaxInput!	
Query
mutation createTax($input: CreateTaxInput!) {
  createTax(input: $input) {
    taxId
    name
    rates {
      ...TaxRateFragment
    }
    totalRate
  }
}
Variables
{"input": CreateTaxInput}
Response
{
  "data": {
    "createTax": {
      "taxId": "4",
      "name": "abc123",
      "rates": [TaxRate],
      "totalRate": "abc123"
    }
  }
}
Mutations
createTechnician
Creates a new technician.

Response
Returns a Technician

Arguments
Name	Description
input - CreateTechnicianInput	
Query
mutation createTechnician($input: CreateTechnicianInput) {
  createTechnician(input: $input) {
    userId
    firstName
    lastName
    name
    email
    contactNumber
    emailSignature
    designation
    businessFunction
    team
    reportingManager
    role
    groups
  }
}
Variables
{"input": CreateTechnicianInput}
Response
{
  "data": {
    "createTechnician": {
      "userId": 4,
      "firstName": "Jason",
      "lastName": "Wheeler",
      "name": "Jason Wheeler",
      "email": "jason.wheeler@acme.com",
      "contactNumber": "212-504-4115",
      "emailSignature": "<p>Thanks and Regards,</p><p>Jason Wheeler</p><p><br></p>",
      "designation": {
        "designationId": "7928838372746166998",
        "name": "Manager"
      },
      "businessFunction": {
        "businessFunctionId": "7928838372746166923",
        "name": "Management"
      },
      "team": {"teamId": "7928838372746166764", "name": "Network specialist"},
      "reportingManager": {
        "userId": "6928838372746166764",
        "name": "Howard Stern"
      },
      "role": {"roleId": "3", "name": "Technician"},
      "groups": [{"groupId": "7928838372746166689", "name": "Network"}]
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
    ticketType
    requestType
    source
    client
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
      "ticketType": "INCIDENT",
      "requestType": "xyz789",
      "source": "FORM",
      "client": {
        "accountId": "7928838372746166998",
        "name": "Acme Management Pvt. Ltd."
      },
      "site": {"id": "7928838372746169876", "name": "Austin"},
      "requester": {"userId": "5928838372746169876", "name": "John Williams"},
      "additionalRequester": [
        {"userId": "5928838372746169098", "name": "Howard Stern"}
      ],
      "followers": {},
      "techGroup": {"groupId": "3928838372746169098", "name": "Network"},
      "technician": {"userId": "5928838372746160987", "name": "Jason Wheeler"},
      "status": "New",
      "priority": "abc123",
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
createTicketCustomField
Creates a ticket custom field.

Response
Returns a CustomField

Arguments
Name	Description
input - CreateCustomFieldInput!	
Query
mutation createTicketCustomField($input: CreateCustomFieldInput!) {
  createTicketCustomField(input: $input) {
    id
    columnName
    label
    description
    fieldType
    showToClient
  }
}
Variables
{"input": CreateCustomFieldInput}
Response
{
  "data": {
    "createTicketCustomField": {
      "id": "4",
      "columnName": "udf1text",
      "label": "SSN",
      "description": "Social Security Number",
      "fieldType": "TEXT",
      "showToClient": false
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
createWorklogEntries
Creates new worklog entries

Response
Returns [WorklogEntry]

Arguments
Name	Description
input - [CreateWorklogEntryInput!]!	
Query
mutation createWorklogEntries($input: [CreateWorklogEntryInput!]!) {
  createWorklogEntries(input: $input) {
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
  }
}
Variables
{"input": [CreateWorklogEntryInput]}
Response
{
  "data": {
    "createWorklogEntries": {
      "itemId": "4",
      "status": "PENDING",
      "serviceItem": {},
      "billable": false,
      "afterHours": false,
      "qty": "xyz789",
      "unitPrice": "abc123",
      "billDateTime": "abc123",
      "technician": {},
      "notes": "abc123",
      "workItem": {}
    }
  }
}
Mutations
deleteClientSites
Deletes the specified existing client sites. Deletion of the HQ site is not allowed.

Response
Returns [ID]

Arguments
Name	Description
input - [ClientSiteIdentifierInput!]!	
Query
mutation deleteClientSites($input: [ClientSiteIdentifierInput!]!) {
  deleteClientSites(input: $input)
}
Variables
{"input": [ClientSiteIdentifierInput]}
Response
{"data": {"deleteClientSites": [4]}}
Mutations
deleteClientUser
Deletes the records of an existing client user.

Response
Returns an ID!

Arguments
Name	Description
input - DeleteUserInput!	
Query
mutation deleteClientUser($input: DeleteUserInput!) {
  deleteClientUser(input: $input)
}
Variables
{"input": DeleteUserInput}
Response
{"data": {"deleteClientUser": "4"}}
Mutations
deleteClientUserAssociations
Deletes existing client user associations.

Response
Returns [ID]

Arguments
Name	Description
input - [ClientUserAssociationIdentifierInput!]!	
Query
mutation deleteClientUserAssociations($input: [ClientUserAssociationIdentifierInput!]!) {
  deleteClientUserAssociations(input: $input)
}
Variables
{"input": [ClientUserAssociationIdentifierInput]}
Response
{
  "data": {
    "deleteClientUserAssociations": ["4"]
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
{"data": {"deleteKbArticle": false}}
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
{"data": {"deleteKbCollection": false}}
Mutations
deleteTechnician
Deletes the records of an existing technician.

Response
Returns an ID

Arguments
Name	Description
input - DeleteUserInput!	
Query
mutation deleteTechnician($input: DeleteUserInput!) {
  deleteTechnician(input: $input)
}
Variables
{"input": DeleteUserInput}
Response
{"data": {"deleteTechnician": "4"}}
Mutations
deleteWorklogEntry
Delete a worklog entry

Response
Returns a Boolean

Arguments
Name	Description
input - WorklogEntryIdentifier!	
Query
mutation deleteWorklogEntry($input: WorklogEntryIdentifier!) {
  deleteWorklogEntry(input: $input)
}
Variables
{"input": WorklogEntryIdentifier}
Response
{"data": {"deleteWorklogEntry": false}}
Mutations
hardDeleteClients
Trashed clients will be deleted from the system automatically after 30 days. This mutation can be used to permanently delete clients in the trash.

Response
Returns a Boolean

Arguments
Name	Description
input - [ClientIdentifierInput!]!	
Query
mutation hardDeleteClients($input: [ClientIdentifierInput!]!) {
  hardDeleteClients(input: $input)
}
Variables
{"input": [ClientIdentifierInput]}
Response
{"data": {"hardDeleteClients": false}}
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
{"data": {"resolveAlerts": true}}
Mutations
restoreClients
Restores trashed clients.

Response
Returns a Boolean

Arguments
Name	Description
input - [ClientIdentifierInput!]!	
Query
mutation restoreClients($input: [ClientIdentifierInput!]!) {
  restoreClients(input: $input)
}
Variables
{"input": [ClientIdentifierInput]}
Response
{"data": {"restoreClients": true}}
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
softDeleteClients
Trash i.,e soft delete an existing client.

Response
Returns a Boolean

Arguments
Name	Description
input - [ClientIdentifierInput!]!	
Query
mutation softDeleteClients($input: [ClientIdentifierInput!]!) {
  softDeleteClients(input: $input)
}
Variables
{"input": [ClientIdentifierInput]}
Response
{"data": {"softDeleteClients": true}}
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
    client
    site
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
      "client": {
        "accountId": "7928838372746166998",
        "name": "Acme Management Pvt. Ltd."
      },
      "site": {"id": "7928838372746169876", "name": "Austin"},
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
updateClient
Updates information of an existing client.

Response
Returns a Client

Arguments
Name	Description
input - UpdateClientInput!	
Query
mutation updateClient($input: UpdateClientInput!) {
  updateClient(input: $input) {
    accountId
    name
    stage
    status
    emailDomains
    accountManager
    primaryContact
    secondaryContact
    hqSite
    technicianGroups
    customFields
  }
}
Variables
{"input": UpdateClientInput}
Response
{
  "data": {
    "updateClient": {
      "accountId": "4",
      "name": "Globex Corporation",
      "stage": "Active",
      "status": "Paid",
      "emailDomains": ["acme.com"],
      "accountManager": {
        "userId": "7928838372746166271",
        "name": "Clovis Sonsimps"
      },
      "primaryContact": {
        "userId": "7928838372746166272",
        "name": "John Abraham"
      },
      "secondaryContact": {"userId": "7928838372746166272", "name": "Joseph"},
      "hqSite": {"id": "7928838372746166287", "name": "Austin"},
      "technicianGroups": [
        {"groupId": "7928838372746166256", "name": "Network Problems"}
      ],
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
updateClientContract
Updates an existing usage or recurring client contract.

Response
Returns an ID!

Arguments
Name	Description
input - UpdateClientContractInput!	
Query
mutation updateClientContract($input: UpdateClientContractInput!) {
  updateClientContract(input: $input)
}
Variables
{"input": UpdateClientContractInput}
Response
{"data": {"updateClientContract": 4}}
Mutations
updateClientSite
Updates an existing site in a client

Response
Returns a ClientSite

Arguments
Name	Description
input - UpdateClientSiteInput!	
Query
mutation updateClientSite($input: UpdateClientSiteInput!) {
  updateClientSite(input: $input) {
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
    line1
    line2
    line3
    city
    postalCode
    countryCode
    stateCode
    contactNumber
    client
    hq
    installerInfo {
      ...InstallerDetailsFragment
    }
  }
}
Variables
{"input": UpdateClientSiteInput}
Response
{
  "data": {
    "updateClientSite": {
      "id": 4,
      "name": "Austin",
      "businessHour": [BusinessHour],
      "holidayList": HolidayList,
      "timezoneCode": "America/Los_Angeles",
      "working24x7": true,
      "line1": "Ap #867-859 Sit Rd.",
      "line2": "abc123",
      "line3": "abc123",
      "city": "Azusa",
      "postalCode": "10005",
      "countryCode": "US",
      "stateCode": "NY",
      "contactNumber": "abc123",
      "client": {
        "accountId": "7928838372746166276",
        "name": "Globex Corporation"
      },
      "hq": false,
      "installerInfo": [InstallerDetails]
    }
  }
}
Mutations
updateClientUser
Updates information of an existing client user.

Response
Returns a ClientUser

Arguments
Name	Description
input - UpdateClientUserInput!	
Query
mutation updateClientUser($input: UpdateClientUserInput!) {
  updateClientUser(input: $input) {
    userId
    firstName
    lastName
    name
    email
    contactNumber
    reportingManager
    site
    role
    client
    customFields
  }
}
Variables
{"input": UpdateClientUserInput}
Response
{
  "data": {
    "updateClientUser": {
      "userId": "4",
      "firstName": "Ryan",
      "lastName": "Howard",
      "name": "Ryan Howard",
      "email": "ryan.howard@dundermifflin.com",
      "contactNumber": "+16412349876",
      "reportingManager": {
        "userId": "79288383727461662754",
        "name": "Joseph John"
      },
      "site": {"id": "79288383727461662786", "name": "Austin"},
      "role": {"roleId": "4", "name": "Requester"},
      "client": {
        "accountId": "7928838372746166276",
        "name": "Globex Corporation"
      },
      "customFields": {}
    }
  }
}
Mutations
updateClientUserAssociations
Updates existing client user associations.

Response
Returns [ClientUserAssociation]

Arguments
Name	Description
input - [UpdateClientUserAssociationInput!]!	
Query
mutation updateClientUserAssociations($input: [UpdateClientUserAssociationInput!]!) {
  updateClientUserAssociations(input: $input) {
    id
    client {
      ...ClientFragment
    }
    site {
      ...ClientSiteFragment
    }
    user {
      ...ClientUserFragment
    }
  }
}
Variables
{"input": [UpdateClientUserAssociationInput]}
Response
{
  "data": {
    "updateClientUserAssociations": {
      "id": "4",
      "client": Client,
      "site": ClientSite,
      "user": ClientUser
    }
  }
}
Mutations
updateInvoice
Updates an existing invoice

Response
Returns an Invoice

Arguments
Name	Description
input - UpdateInvoiceInput!	
Query
mutation updateInvoice($input: UpdateInvoiceInput!) {
  updateInvoice(input: $input) {
    invoiceId
    displayId
    client
    site
    invoiceDate
    dueDate
    statusEnum
    sentToClient
    items {
      ...InvoiceItemFragment
    }
    taxes {
      ...InvoiceTaxItemFragment
    }
    discountAmount
    additionalDiscount
    additionalDiscountRate
    totalAmount
    notes
    paymentDate
    paymentMethod
    paymentReference
    invoicePaymentTerm
  }
}
Variables
{"input": UpdateInvoiceInput}
Response
{
  "data": {
    "updateInvoice": {
      "invoiceId": "4",
      "displayId": "061422-0001",
      "client": {"accountId": "7929754851606401024", "name": "Acme"},
      "site": {"id": "7929754852373958656", "name": "Austin"},
      "invoiceDate": "2022-06-14",
      "dueDate": "2022-06-25",
      "statusEnum": "DRAFT",
      "sentToClient": false,
      "items": [InvoiceItem],
      "taxes": [InvoiceTaxItem],
      "discountAmount": "1250.25",
      "additionalDiscount": "1000",
      "additionalDiscountRate": "10",
      "totalAmount": "10000",
      "notes": "The additional discount offered by Adam",
      "paymentDate": "abc123",
      "paymentMethod": {},
      "paymentReference": "xyz789",
      "invoicePaymentTerm": {}
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
    client
    site
    customFields
  }
}
Variables
{"input": UpdateItDocumentationInput}
Response
{
  "data": {
    "updateItDocumentation": {
      "itDocId": "4",
      "name": "xyz789",
      "client": {},
      "site": {},
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
Updates an existing service catalog item

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
    itemType
    offerAsWorklogItem
    status
    taxable
    salesTax {
      ...TaxFragment
    }
    sellingPrice {
      ...PricingModelFragment
    }
    costPrice {
      ...PricingModelFragment
    }
    serviceTypeItem {
      ...ServiceTypeItemFragment
    }
  }
}
Variables
{"input": UpdateServiceCatalogItemInput}
Response
{
  "data": {
    "updateServiceCatalogItem": {
      "itemId": "4",
      "name": "Hard Disc",
      "description": "Seagate One Touch 1TB USB 3.0 Hard Disk Drive",
      "category": ServiceCategory,
      "itemType": "PRODUCT",
      "offerAsWorklogItem": true,
      "status": "ACTIVE",
      "taxable": true,
      "salesTax": Tax,
      "sellingPrice": PricingModel,
      "costPrice": PricingModel,
      "serviceTypeItem": ServiceTypeItem
    }
  }
}
Mutations
updateTechnician
Updates information of an existing technician.

Response
Returns a Technician

Arguments
Name	Description
input - UpdateTechnicianInput	
Query
mutation updateTechnician($input: UpdateTechnicianInput) {
  updateTechnician(input: $input) {
    userId
    firstName
    lastName
    name
    email
    contactNumber
    emailSignature
    designation
    businessFunction
    team
    reportingManager
    role
    groups
  }
}
Variables
{"input": UpdateTechnicianInput}
Response
{
  "data": {
    "updateTechnician": {
      "userId": 4,
      "firstName": "Jason",
      "lastName": "Wheeler",
      "name": "Jason Wheeler",
      "email": "jason.wheeler@acme.com",
      "contactNumber": "212-504-4115",
      "emailSignature": "<p>Thanks and Regards,</p><p>Jason Wheeler</p><p><br></p>",
      "designation": {
        "designationId": "7928838372746166998",
        "name": "Manager"
      },
      "businessFunction": {
        "businessFunctionId": "7928838372746166923",
        "name": "Management"
      },
      "team": {"teamId": "7928838372746166764", "name": "Network specialist"},
      "reportingManager": {
        "userId": "6928838372746166764",
        "name": "Howard Stern"
      },
      "role": {"roleId": "3", "name": "Technician"},
      "groups": [{"groupId": "7928838372746166689", "name": "Network"}]
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
    ticketType
    requestType
    source
    client
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
      "ticketType": "INCIDENT",
      "requestType": "abc123",
      "source": "FORM",
      "client": {
        "accountId": "7928838372746166998",
        "name": "Acme Management Pvt. Ltd."
      },
      "site": {"id": "7928838372746169876", "name": "Austin"},
      "requester": {"userId": "5928838372746169876", "name": "John Williams"},
      "additionalRequester": [
        {"userId": "5928838372746169098", "name": "Howard Stern"}
      ],
      "followers": {},
      "techGroup": {"groupId": "3928838372746169098", "name": "Network"},
      "technician": {"userId": "5928838372746160987", "name": "Jason Wheeler"},
      "status": "New",
      "priority": "xyz789",
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
      "worklogTimespent": "100.00"
    }
  }
}
Mutations
updateWorklogEntry
Updates a worklog entry

Response
Returns a WorklogEntry

Arguments
Name	Description
input - UpdateWorklogEntryInput!	
Query
mutation updateWorklogEntry($input: UpdateWorklogEntryInput!) {
  updateWorklogEntry(input: $input) {
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
  }
}
Variables
{"input": UpdateWorklogEntryInput}
Response
{
  "data": {
    "updateWorklogEntry": {
      "itemId": 4,
      "status": "PENDING",
      "serviceItem": {},
      "billable": false,
      "afterHours": true,
      "qty": "xyz789",
      "unitPrice": "abc123",
      "billDateTime": "xyz789",
      "technician": {},
      "notes": "xyz789",
      "workItem": {}
    }
  }
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
    "client": {
      "accountId": "7928838372746166998",
      "name": "Acme Management Pvt. Ltd."
    },
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
client - JSON!	Client details of the asset
site - JSON!	Site details of the asset
requester - JSON!	The requester of the asset
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
deviceCategory - JSON	The Device Category of the asset
Example
{
  "assetId": "9001114136934215681",
  "name": "DESKTOP-I9QFDTE",
  "assetClass": {"classId": "1", "name": "Windows Machine"},
  "client": {
    "accountId": "7928838372746166998",
    "name": "Acme Management Pvt. Ltd."
  },
  "site": {"id": "7928838372746169876", "name": "Austin"},
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
  "lastReportedTime": "2023-08-22T19:23:22.678",
  "deviceCategory": {"id": "7642345678456", "name": "Windows Workstation"}
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
  "activityId": "4",
  "module": "xyz789",
  "activityType": "xyz789",
  "activityData": {},
  "createdBy": {},
  "createdTime": "xyz789"
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
  "drive": "xyz789",
  "discType": "abc123",
  "fileSystem": "abc123",
  "maxFileLength": 123,
  "autoMounted": true,
  "compressed": true,
  "pageFile": false,
  "indexed": false,
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
BLOCK_ITEM_USAGE_TYPE
Specifies the usage type of the block item.

Enum Value	Description
ALL_HOURS

Denotes that the usage type is set to all hours.
BUSINESS_HOURS

Denotes that the usage type is set to business hours.
Example
"ALL_HOURS"
Types
BillableContract
Specifies the billable contract.

Field Name	Description
contractId - ID!	The ID of the contract.
chargeItem - JSON!	The charge item associated with the contract.
quantityCalculationType - ContractQuantityCalculationType!	The contract's quantity calculation type.
sellingPriceCalculationType - ContractSellingPriceCalculationType!	The contract's selling price calculation type.
provisionRule - JSON	The provision rule associated with the contract if the contracts quantity calculation type is 'DYNAMIC'.
sellingPriceOverridden - Boolean	Indicates whether the selling price is overridden.
sellingPrice - PricingModel	The selling price of the contract.
discountRate - String	The discount rate applied to the contract.
frequencyType - ContractFrequencyType!	The contract's frequency type.
includedItems - [JSON!]	The items included in the contract.
billableSiteType - BillableSiteType!	The billable site type of the contract.
sites - [JSON!]	The billable sites mentioned in the contract when the billable site type is 'INCLUDED'.
recurringContract - RecurringContract	The recurring contract details.
redeemableContract - RedeemableContract	The redeemable contract details.
perpetualContract - PerpetualContract	The perpetual contract details.
changes - [BillableContractQuantityChange!]	The contract quantity change list.
project - JSON	The project assoicated with the contract.
blockItemsInfo - [BlockItemInfo]	The block item balance details.
Example
{
  "contractId": 4,
  "chargeItem": {},
  "quantityCalculationType": "FIXED",
  "sellingPriceCalculationType": "FIXED",
  "provisionRule": {},
  "sellingPriceOverridden": true,
  "sellingPrice": PricingModel,
  "discountRate": "abc123",
  "frequencyType": "ONCE",
  "includedItems": [{}],
  "billableSiteType": "HQ",
  "sites": [{}],
  "recurringContract": RecurringContract,
  "redeemableContract": RedeemableContract,
  "perpetualContract": PerpetualContract,
  "changes": [BillableContractQuantityChange],
  "project": {},
  "blockItemsInfo": [BlockItemInfo]
}
Types
BillableContractQuantityChange
Specifies the contract quantity change.

Field Name	Description
changeId - ID!	The ID of the contract quantity change.
effectiveDate - String	The effective date for the contract quantity change.
endDate - String	The end date for the contract quantity change.
quantity - String	The quantity of the billable contract.
quantityChangeOperation - BillableContractQuantityChangeOperation!	The quantity change operation of the contract.
Example
{
  "changeId": "4",
  "effectiveDate": "abc123",
  "endDate": "abc123",
  "quantity": "abc123",
  "quantityChangeOperation": "INCREASE"
}
Types
BillableContractQuantityChangeInput
Specifies the input required for a contract quantity change.

Input Field	Description
changeId - ID	
The quantity change id of the billable contract.

effectiveDate - String	
The effective date of the billable contract.

quantity - String	
The quantity of the billable contract.

quantityChangeOperation - BillableContractQuantityChangeOperation	
The quantity change operation date of the billable contract.

Example
{
  "changeId": 4,
  "effectiveDate": "abc123",
  "quantity": "xyz789",
  "quantityChangeOperation": "INCREASE"
}
Types
BillableContractQuantityChangeOperation
Specifies the quantity change operation for a billable contract.

Enum Value	Description
INCREASE

Indicates that the contract's quantity has increased.
DECREASE

Indicates that the contract's quantity has decreased.
BASELINE

Indicates the initial quantity value for the contract.
Example
"INCREASE"
Types
BillableSiteType
Specifies the type of billable site for the contract.

Enum Value	Description
HQ

Indicates the contract will be billed to client's headquarters.
ALL

Indicates the contract will be billed to all the client sites.
INCLUDED

Indicates the contract will be billed to the specified client sites.
Example
"HQ"
Types
BlockItemInfo
Specifies the block item balance information.

Field Name	Description
blockItemId - ID	The ID of the block item.
balance - String	Specifies the block item balance.
Example
{"blockItemId": 4, "balance": "xyz789"}
Types
Boolean
The Boolean scalar type represents true or false.

Types
BusinessFunction
Business function of the technician.

Field Name	Description
businessFunctionId - ID!	The ID of the business function.
name - String!	The name of the business function.
Example
{
  "businessFunctionId": "4",
  "name": "Finance"
}
Types
BusinessFunctionIdentifierInput
Specifies the identifier input for the business function.

Input Field	Description
businessFunctionId - ID!	
The ID of the business function.

Example
{"businessFunctionId": 4}
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
Category
The ticket category.

Field Name	Description
id - ID!	The ID of the category.
name - String!	The name of the category.
subCategories - [SubCategory]	The list of subcategories.
Example
{
  "id": "4",
  "name": "Hardware",
  "subCategories": [SubCategory]
}
Types
Cause
The ticket cause.

Field Name	Description
id - ID!	The ID of the cause.
name - String!	The name of the cause.
subCauses - [SubCause]	The list of sub causes.
Example
{
  "id": "4",
  "name": "Capacity related",
  "subCauses": [SubCause]
}
Types
Client
The MSP's clients.

Field Name	Description
accountId - ID!	The ID of the client.
name - String!	The name of the client.
stage - String!	The stage of the client.
status - String	The status of the client.
emailDomains - [String]	The list of email domains (for example, acme.com) of the client. These domains will be used to identify the client when receiving emails from the client user.
accountManager - JSON	The account manager of the client i.,e the technician who is the point of contact for the client. The actual type of this field is Technician. Returns userId and name fields as JSON. The name, email fields of Technician can be used in the filter condition.
primaryContact - JSON	The primary contact of the client. The primary contact is mandatory, it is recommended to update primary contact for the client after creation. The actual type of this field is ClientUser. Returns userId and name fields as JSON. The name, email fields of ClientUser can be used in the filter condition.
secondaryContact - JSON	The secondary contact of the client. The actual type of this field is ClientUser. Returns userId and name fields as JSON. The name, email fields of ClientUser can be used in the filter condition.
hqSite - JSON	The headquarters/main site of the client. The headquarters site is mandatory, it is recommended to update the headquarters site for the client after creation. The actual type of this field is ClientSite. Returns id, name fields as JSON.
technicianGroups - JSON	The list of technician groups associated to the client. The actual type of this field is TechnicianGroup. Returns array of object as JSON, each object contains groupId and name fields.
customFields - JSON	A JSON contains the values for the client custom fields.
Arguments
fields - [String]
Example
{
  "accountId": "4",
  "name": "Globex Corporation",
  "stage": "Active",
  "status": "Paid",
  "emailDomains": ["acme.com"],
  "accountManager": {
    "userId": "7928838372746166271",
    "name": "Clovis Sonsimps"
  },
  "primaryContact": {"userId": "7928838372746166272", "name": "John Abraham"},
  "secondaryContact": {"userId": "7928838372746166272", "name": "Joseph"},
  "hqSite": {"id": "7928838372746166287", "name": "Austin"},
  "technicianGroups": [
    {"groupId": "7928838372746166256", "name": "Network Problems"}
  ],
  "customFields": {
    "udf1text": "value",
    "udf2date": "2022-05-06",
    "udf3dt": "2022-05-06T10:10:10",
    "udf5mselect": ["value1", "value1"]
  }
}
Types
ClientContract
Specifies the client contract.

Field Name	Description
contractId - ID	The ID of the contract.
client - JSON!	The client associated with the contract.
contract - Contract!	Details of the contract.
startDate - String!	The start date of the cleint contract.
endDate - String	The end date of the client contract.
contractStatus - ClientContractStatus!	The status of the client contract.
Example
{
  "contractId": "4",
  "client": {},
  "contract": Contract,
  "startDate": "abc123",
  "endDate": "abc123",
  "contractStatus": "DRAFT"
}
Types
ClientContractList
Specifies the client contract list.

Field Name	Description
clientContracts - [ClientContract!]	The list of client contracts.
listInfo - ListInfo	Details about the list.
Example
{
  "clientContracts": [ClientContract],
  "listInfo": ListInfo
}
Types
ClientContractStatus
Specifies the status of a client contract.

Enum Value	Description
DRAFT

Indicates that the client contract is in draft state. This could mean the start date is in the future or the contract hasn't been billed yet.
ACTIVE

Indicates that the client contract is currently active and in effect.
INACTIVE

Indicates that the client contract is inactive and not in effect.
Example
"DRAFT"
Types
ClientIdentifierInput
Specifies the identifier input for the client.

Input Field	Description
accountId - ID!	
The ID of the client.

Example
{"accountId": "4"}
Types
ClientList
The response payload for list of clients fetched.

Field Name	Description
clients - [Client]	The list of clients.
listInfo - ListInfo	The detail about the list.
Example
{
  "clients": [Client],
  "listInfo": ListInfo
}
Types
ClientSharedType
Defines how access is granted to clients.

Enum Value	Description
AllClients

Client

Example
"AllClients"
Types
ClientSite
The site of a client.

Field Name	Description
id - ID!	The ID of the site.
name - String!	The name of the site.
businessHour - [BusinessHour]	The operation hours of the site.
holidayList - HolidayList	The holiday list of the site.
timezoneCode - String!	The timezone of the site.
working24x7 - Boolean!	Denotes whether the site has specific business hours or works 24x7.
line1 - String	The address line 1 of the site.
line2 - String	The address line 2 of the site.
line3 - String	The address line 3 of the site.
city - String	The city of the site.
postalCode - String	The postal code of the site.
countryCode - String	The country of the site.
stateCode - String	The state/subdivision of the site.
contactNumber - String	The contact number of the site.
client - JSON!	The client to which this site belongs to.
hq - Boolean	Specifies whether the site is the headquarters.
installerInfo - [InstallerDetails]	The agent Installer Details
Example
{
  "id": "4",
  "name": "Austin",
  "businessHour": [BusinessHour],
  "holidayList": HolidayList,
  "timezoneCode": "America/Los_Angeles",
  "working24x7": true,
  "line1": "Ap #867-859 Sit Rd.",
  "line2": "xyz789",
  "line3": "xyz789",
  "city": "Azusa",
  "postalCode": "10005",
  "countryCode": "US",
  "stateCode": "NY",
  "contactNumber": "abc123",
  "client": {"accountId": "7928838372746166276", "name": "Globex Corporation"},
  "hq": true,
  "installerInfo": [InstallerDetails]
}
Types
ClientSiteIdentifierInput
Specifies the identifier input for the client site.

Input Field	Description
id - ID!	
The ID of the client site.

Example
{"id": "4"}
Types
ClientSiteList
The response payload for list of client sites fetched.

Field Name	Description
sites - [ClientSite]	The list of sites.
listInfo - ListInfo	The detail about the list.
Example
{
  "sites": [ClientSite],
  "listInfo": ListInfo
}
Types
ClientStage
The stage of the client.

Field Name	Description
stageId - ID!	The ID of the client stage.
name - String!	The name of the client stage.
constant - String	The system-generated unique name to identify the default client stages provided by the system.
statuses - [ClientStatus]	The list of client statuses of the client stage.
Example
{
  "stageId": 4,
  "name": "Active",
  "constant": "ACTIVE",
  "statuses": [ClientStatus]
}
Types
ClientStatus
The status of the client.

Field Name	Description
statusId - ID!	The ID of the client status.
name - String	The name of the client status.
constant - String	The system-generated unique name to identify the default client statuses provided by the system.
Example
{"statusId": 4, "name": "Paid", "constant": "PAID"}
Types
ClientUser
The client user ie. requester.

Field Name	Description
userId - ID!	The ID of the client user.
firstName - String!	The first name of the client user.
lastName - String	The last name of the client user.
name - String!	The full name of the client user.
email - String!	The email address of the client user.
contactNumber - String	The contact number of the client user. It is recommended to provide the value in the standard format [+][country code][area code][local phone number].
reportingManager - JSON	The reporting manager of the client user. The actual type of this field is ClientUser. This field returns userId and name fields as JSON. The name and email fields can be used in the filter condition.
site - JSON	The site to which the client user is associated. The actual type of this field is ClientSite. This field returns id and name fields as JSON. The name field can be used in the filter condition. As a client user can now be associated to multiple clients.
role - JSON!	The application role of the client user. The actual type of this field is Role. This field returns roleId and name fields as JSON. The name field can be used in the filter condition.
client - JSON	The client to which this requester belongs to. The actual type of this field is Client. This field returns accountId and name fields as JSON. The name field can be used in the filter condition. As a client user can now be associated to multiple clients.
customFields - JSON	
Specifies the custom fields values for the client user. Each entry in the JSON would be key-value. The key will be a system-generated, unique name of the custom field (columnName field of CustomField type). The value for text, paragraph, radio, select, numeric, decimal, date, datetime should be given as a string. The value for checkbox, multi-select should be an array of string.

For example, the value could be {"udf1text": "value", "udf2mselect": ["value1", "value2"]}

Arguments
fields - [String]
Example
{
  "userId": 4,
  "firstName": "Ryan",
  "lastName": "Howard",
  "name": "Ryan Howard",
  "email": "ryan.howard@dundermifflin.com",
  "contactNumber": "+16412349876",
  "reportingManager": {"userId": "79288383727461662754", "name": "Joseph John"},
  "site": {"id": "79288383727461662786", "name": "Austin"},
  "role": {"roleId": "4", "name": "Requester"},
  "client": {"accountId": "7928838372746166276", "name": "Globex Corporation"},
  "customFields": {}
}
Types
ClientUserAssociation
All the clients and sites associated with a client user. A client user can have one or more associations.

Field Name	Description
id - ID!	The ID of the association.
client - Client!	The client to which the client user is associated.
site - ClientSite!	The site to which the client user is associated.
user - ClientUser!	The client user.
Example
{
  "id": 4,
  "client": Client,
  "site": ClientSite,
  "user": ClientUser
}
Types
ClientUserAssociationIdentifierInput
Specifies the identifier input for the client user association.

Input Field	Description
id - ID!	
Specifies the ID of the requester association.

Example
{"id": 4}
Types
ClientUserAssociationList
The response payload for the list of client user associations.

Field Name	Description
associations - [ClientUserAssociation]	The list of client user associations.
listInfo - ListInfo	Information about the list of associations.
Example
{
  "associations": [ClientUserAssociation],
  "listInfo": ListInfo
}
Types
ClientUserIdentifierInput
Specifies the identifier input for the client user.

Input Field	Description
userId - ID!	
The ID of the client user.

Example
{"userId": "4"}
Types
ClientUserList
The response payload for list of client users fetched.

Field Name	Description
userList - [ClientUser]	The list of client users.
listInfo - ListInfo	The detail about the list.
Example
{
  "userList": [ClientUser],
  "listInfo": ListInfo
}
Types
Contract
Specifies the contract.

Field Name	Description
contractId - ID!	The ID of the contract.
name - String	The name of the contract.
description - String	The description of the contract.
contractType - ContractType!	The contract's type.
billableContract - BillableContract	The billable contract details.
Example
{
  "contractId": 4,
  "name": "xyz789",
  "description": "xyz789",
  "contractType": "SERVICE",
  "billableContract": BillableContract
}
Types
ContractFrequencyType
Specifies the frequency type of the contract.

Enum Value	Description
ONCE

Indicates the contract's frequency type is 'ONCE'.
PERPETUAL

Indicates the contract's frequency type is 'PERPETUAL'.
RECURRING

Indicates the contract's frequency type is 'RECURRING'.
Example
"ONCE"
Types
ContractIdentifierInput
Specifies the identifier input for contract.

Input Field	Description
contractId - ID!	
The ID of the contract.

Example
{"contractId": "4"}
Types
ContractQuantityCalculationType
Specifies the quantity calculation type for the contract.

Enum Value	Description
FIXED

Indicates the quantity calculation type is 'FIXED'.
DYNAMIC

Indicates the quantity calculation type is 'DYNAMIC'.
Example
"FIXED"
Types
ContractSellingPriceCalculationType
Specifies how the selling price of the contract is calculated.

Enum Value	Description
FIXED

Indicates the selling price calculation type is 'FIXED'.
DYNAMIC

Indicates the selling price calculation type is 'DYNAMIC'.
Example
"FIXED"
Types
ContractType
Specifies the type of client contract.

Enum Value	Description
SERVICE

USAGE

ONE_TIME

TIME_AND_MATERIAL

Example
"SERVICE"
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
CreateBillableContractInput
Specifies the input required to create a billable contract.

Input Field	Description
chargeItem - ServiceCatalogItemIdentifierInput!	
Specifies the charge item to be associated with the billable contract. This input is mandatory.

sellingPriceOverridden - Boolean!	
Indicates whether the contract's selling price is overridden.

sellingPrice - PricingModelInput	
The selling price of the contract, applicable if the price is overridden.

discountRate - String	
The discount rate input for the contract.

billableSiteType - BillableSiteType!	
The billable site type for the contract.

addSites - [ClientSiteIdentifierInput!]	
The sites to be billable for the contract if the billable site type is 'INCLUDED'.

recurringContract - RecurringContractInput!	
Specifies the recurring contract input details. This input is mandatory.

change - BillableContractQuantityChangeInput!	
Specifies the billable contract quantity change input details. This input is mandatory.

Example
{
  "chargeItem": ServiceCatalogItemIdentifierInput,
  "sellingPriceOverridden": true,
  "sellingPrice": PricingModelInput,
  "discountRate": "abc123",
  "billableSiteType": "HQ",
  "addSites": [ClientSiteIdentifierInput],
  "recurringContract": RecurringContractInput,
  "change": BillableContractQuantityChangeInput
}
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
CreateCategoryInput
Specifies the input required to create a new ticket category.

Input Field	Description
name - String!	
Specifies the name of the category. This input should be mandatory and unique.

addSubCategories - [CreateSubCategoryInput]	
Specifies the input to create subcategories.

Example
{
  "name": "Hardware",
  "addSubCategories": [CreateSubCategoryInput]
}
Types
CreateCauseInput
Specifies the input create ticket cause.

Input Field	Description
name - String!	
Specifies the name of the cause.

addSubCauses - [CreateSubCauseInput]	
Specifies the input to create sub causes.

Example
{
  "name": "Capacity related",
  "addSubCauses": [CreateSubCauseInput]
}
Types
CreateClientContractInput
Specifies the input required to create a client contract.

Input Field	Description
client - ClientIdentifierInput!	
Specifies the client to be associated with the contract.

contract - CreateContractInput!	
Specifies the contract input details.

startDate - String!	
Specifies the contract's start date.

endDate - String	
Specifies the contract's end date.

Example
{
  "client": ClientIdentifierInput,
  "contract": CreateContractInput,
  "startDate": "abc123",
  "endDate": "xyz789"
}
Types
CreateClientInput
Specifies the input required to create a new client. @deprecated(reason: "Use 'CreateClientInputV2' input instead.")

Input Field	Description
name - String!	
Specifies the name of the client. This input should be mandatory and unique.

stage - String	
Specifies the stage of the client. The stage will be set to Active if not specified.

status - String	
Specifies the status of the client. The status will be set to Paid if not specified.

emailDomains - [String]	
Specifies the list of email domains (for example, acme.com) of the client. These domains will be used to identify the client when receiving emails from the client user. This input must be unique.

accountManager - TechnicianIdentifierInput	
Specifies the account manager of the client.

addTechnicianGroups - [TechnicianGroupIdentifierInput]	
Specifies the list of technician groups to be associated to the client.

customFields - JSON	
Specifies the custom field values for the client. Each entry in the JSON would be key-value. The key will be a system-generated unique name of the custom field (columnName field of CustomField type). The value for text, paragraph, radio, select, numeric, decimal, date, datetime should be given as a string. The value for checkbox, multi-select should be an array of string.

For example, the value could be {"udf1text": "value", "udf2mselect": ["value1", "value2"]}

Example
{
  "name": "Globex Corporation",
  "stage": "Active",
  "status": "Paid",
  "emailDomains": ["acme.com"],
  "accountManager": TechnicianIdentifierInput,
  "addTechnicianGroups": [TechnicianGroupIdentifierInput],
  "customFields": {
    "udf1text": "value",
    "udf2date": "2022-05-06",
    "udf3dt": "2022-05-06T10:10:10",
    "udf5mselect": ["value1", "value1"]
  }
}
Types
CreateClientInputV2
Specifies the input required to create a new client.

Input Field	Description
name - String!	
Specifies the name of the client. This input should be mandatory and unique.

stage - String	
Specifies the stage of the client. The stage will be set to Active if not specified.

status - String	
Specifies the status of the client. The status will be set to Paid if not specified.

emailDomains - [String]	
Specifies the list of email domains (for example, acme.com) of the client. These domains will be used to identify the client when receiving emails from the client user. This input must be unique.

accountManager - TechnicianIdentifierInput	
Specifies the account manager of the client.

addTechnicianGroups - [TechnicianGroupIdentifierInput]	
Specifies the list of technician groups to be associated to the client.

customFields - JSON	
Specifies the custom field values for the client. Each entry in the JSON would be key-value. The key will be a system-generated unique name of the custom field (columnName field of CustomField type). The value for text, paragraph, radio, select, numeric, decimal, date, datetime should be given as a string. The value for checkbox, multi-select should be an array of string.

For example, the value could be {"udf1text": "value", "udf2mselect": ["value1", "value2"]}

hqSite - CreateClientSiteInput!	
Specifies the headquarters site of the client.

Example
{
  "name": "xyz789",
  "stage": "xyz789",
  "status": "xyz789",
  "emailDomains": ["xyz789"],
  "accountManager": TechnicianIdentifierInput,
  "addTechnicianGroups": [TechnicianGroupIdentifierInput],
  "customFields": {},
  "hqSite": CreateClientSiteInput
}
Types
CreateClientSiteInput
Specifies the input required to create a client site.

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
Specifies the site's timezone. The value should be provided using the IANA time zone database format (e.g., America/New_York). This input is mandatory.

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

client - ClientIdentifierInput	
Specifies the client identifier input for the site to be created. When CreateClientSiteInput is used as part of a new client creation, this field is not mandatory; otherwise, it is required

Example
{
  "name": "Austin",
  "working24x7": false,
  "businessHour": [CreateBusinessHourInput],
  "holidayList": HolidayListIdentifierInput,
  "timezoneCode": "America/Los_Angeles",
  "line1": "Ap #867-859 Sit Rd.",
  "line2": "abc123",
  "line3": "abc123",
  "city": "Azusa",
  "postalCode": "10005",
  "countryCode": "US",
  "stateCode": "NY",
  "client": ClientIdentifierInput
}
Types
CreateClientUserAssociationInput
Specifies the input required to create a user association.

Input Field	Description
client - ClientIdentifierInput!	
Specifies the client which will be associated to the client user.

site - ClientSiteIdentifierInput!	
Specifies the client site that will be associated to the client user.

user - ClientUserIdentifierInput	
Specifies the requester who will be associated. This attribute is optional when creating a new client user.

Example
{
  "client": ClientIdentifierInput,
  "site": ClientSiteIdentifierInput,
  "user": ClientUserIdentifierInput
}
Types
CreateClientUserInput
Specifies the input required to create client user.

Input Field	Description
firstName - String!	
Specifies the first name of the client user. This input is mandatory.

lastName - String	
Specifies the last name of the client user.

email - String!	
Specifies the email address of the client user which is unique across the technicians and client users. The email will be used for login. This input should be mandatory and unique.

contactNumber - String	
Specifies the contact number of the client user. It is recommended to provide the value in the standard format [+][country code][area code][local phone number].

reportingManager - ClientUserIdentifierInput	
Specifies the reporting manager identifier input for the client user.

role - RoleIdentifierInput!	
Specifies the application role identifier input for the client user. This input is mandatory.

addAssociations - [CreateClientUserAssociationInput]	
Specifies the associated clients and sites. The user attribute is optional when creating a new client user.

customFields - JSON	
Specifies the custom fields values for the client user. Each entry in the JSON would be key-value. The key will be a system-generated, unique name of the custom field (columnName field of CustomField type). The value for text, paragraph, radio, select, numeric, decimal, date, datetime should be given as a string. The value for checkbox, multi-select should be an array of string.

For example, the value could be {"udf1text": "value", "udf2mselect": ["value1", "value2"]}

Example
{
  "firstName": "Ryan",
  "lastName": "Howard",
  "email": "ryan.howard@dundermifflin.com",
  "contactNumber": "+16412349876",
  "reportingManager": ClientUserIdentifierInput,
  "role": RoleIdentifierInput,
  "addAssociations": [CreateClientUserAssociationInput],
  "customFields": {}
}
Types
CreateContractInput
Specifies the input required to create a contract.

Input Field	Description
description - String	
Specifies the description of the contract.

billableContract - CreateBillableContractInput!	
Specifies the billable contract input details.

Example
{
  "description": "abc123",
  "billableContract": CreateBillableContractInput
}
Types
CreateCustomFieldInput
Specifies the input to create a custom filed.

Input Field	Description
label - String!	
Specifies the label of the custom field. This input should be mandatory and unique.

description - String	
Specifies the description of the custom field.

fieldType - CustomFieldType!	
Specifies the type of the custom field.

options - [String]	
Specifies the options for select/radio/checkbox/multi select field.

showToClient - Boolean!	
Specifies whether the custom filed is visible for the client. This input is mandatory.

Example
{
  "label": "VIP User",
  "description": "Denotes VIP user",
  "fieldType": "RADIO",
  "options": ["no"],
  "showToClient": false
}
Types
CreateDocumentShareInput
Used to assign initial sharing configurations to a document.

Input Field	Description
added - [NewShareDetailsInput!]!	
New share configurations to add.

Example
{"added": [NewShareDetailsInput]}
Types
CreateHourlyServiceTypeItemInput
Input for details in a for a HOURS SERVICE item

Input Field	Description
roundUpValue - Int!	
Value to which a time spent is rounded up to

Example
{"roundUpValue": 123}
Types
CreateInvoiceInput
Specifies the input required to create an invoice.

Input Field	Description
client - ClientIdentifierInput!	
Specifies the client to which the invoice belongs to.

site - ClientSiteIdentifierInput!	
Specifies the site to which the invoice belongs to.

statusEnum - InvoiceStatus!	
Specifies the status of the invoice.

invoiceDate - String!	
Specifies the creation date of the invoice.

dueDate - String	
Specifies the due date of the invoice.

addItems - [CreateInvoiceItemInput]!	
Specifies the list of service items to be added to the invoice.

additionalDiscount - String	
Specifies the additional discount amount applied on the invoice.

additionalDiscountRate - String	
Specifies the additional discount rate applied on the invoice.

memo - String	
Specifies the memo of the invoice.

title - String	
Specifies the title of the invoice.

footer - String	
Specifies the footer of the invoice.

paymentTerm - PaymentTermIdentifierInput	
Specifies the payment term of the invoice.

Example
{
  "client": ClientIdentifierInput,
  "site": ClientSiteIdentifierInput,
  "statusEnum": "DRAFT",
  "invoiceDate": "2025-01-01",
  "dueDate": "2025-02-01",
  "addItems": [CreateInvoiceItemInput],
  "additionalDiscount": "50",
  "additionalDiscountRate": "5",
  "memo": "abc123",
  "title": "abc123",
  "footer": "abc123",
  "paymentTerm": PaymentTermIdentifierInput
}
Types
CreateInvoiceItemInput
Specifies the input required to create an invoice item.

Input Field	Description
billedDate - String!	
Specifies the date in which the line item is billed.

serviceItem - ServiceItemIdentifierInput!	
Specifies the service item.

details - String	
Specifies the details of the line item.

quantity - String!	
Specifies the quantity of the line item.

unitPrice - String!	
Specifies the unit price of the line item.

discountRate - String	
Specifies the discount rate applied for the line item.

discountAmount - String	
Specifies the discount amount applied for the line item.

taxable - Boolean	
Specifies whether the line item is taxable or not.

tax - TaxIdentifierInput	
Specifies the applicable tax for the line item.

Example
{
  "billedDate": "2025-01-01",
  "serviceItem": ServiceItemIdentifierInput,
  "details": "abc123",
  "quantity": "2",
  "unitPrice": "100",
  "discountRate": "5",
  "discountAmount": "20",
  "taxable": true,
  "tax": TaxIdentifierInput
}
Types
CreateItDocumentationInput
Specifies the input required to create a new IT Document Record

Input Field	Description
typeId - ID!	
Specifies the type ID of IT document category to create a new IT document

name - String!	
Name of the IT document

client - ClientIdentifierInput	
Client details of the IT document record

site - ClientSiteIdentifierInput	
Site details of the IT document record

customFields - JSON	
Custom field details of the IT document record

Example
{
  "typeId": "3077519261260693504",
  "name": "edited It Doc Record",
  "client": {"accountId": "4567898545678"},
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
CreateRedeemableServiceBundleInput
Input for Retainer

Input Field	Description
applicableType - RedeemableBundleApplicableType!	
Can a retainer be consumed by all items or items specified under it

applicableHours - RedeemableBundleApplicableHours!	
Can a retainer be consumed in business hours, after hours and all hours

redeemableQuantity - String!	
Amount that can be consumed by the items under this item

Example
{
  "applicableType": "INCLUDED_ITEMS",
  "applicableHours": "ALL_HOURS",
  "redeemableQuantity": "1500"
}
Types
CreateServiceCatalogItemInput
Specifies a input for service catalog item

Input Field	Description
name - String!	
Name of the item. must be unique in the list

description - String	
Description of the item which can be used in invoice

category - ServiceCategoryIdentifierInput	
Category under which the item is created.

itemType - ServiceCatalogItemType!	
Type of an Item

offerAsWorklogItem - Boolean	
Set to true to offer this item in worklog

taxable - Boolean!	
Set to true to apply tax for this item

salesTax - TaxIdentifierInput	
Tax to be set for this item

costPrice - PricingModelInput	
The cost price when item is purchased

sellingPrice - PricingModelInput	
Price at which item is offered to a client

serviceTypeItem - CreateServiceTypeItemInput	
Details needed for a SERVICE type item

Example
{
  "name": "Antivirus",
  "description": "Used to protect your computer from viruses",
  "category": ServiceCategoryIdentifierInput,
  "itemType": "PRODUCT",
  "offerAsWorklogItem": false,
  "taxable": true,
  "salesTax": TaxIdentifierInput,
  "costPrice": PricingModelInput,
  "sellingPrice": PricingModelInput,
  "serviceTypeItem": CreateServiceTypeItemInput
}
Types
CreateServiceCategoryInput
Specifies the input for the service category.

Input Field	Description
name - String!	
The name of the category.

Example
{"name": "xyz789"}
Types
CreateServiceItemInput
Specifies the input for the service item.

Input Field	Description
name - String!	
The name of the service item.

description - String	
A short description of the service item.

quantityType - ServiceItemQuantityType!	
The type of service item.

category - ServiceCategoryIdentifierInput	
The category of the service item.

useAsWorklogItem - Boolean	
Denotes whether the service item is a worklog item.

unitPrice - String	
The unit price of the service item.

businessHoursUnitPrice - String	
The unit price of the service item for business hours.

afterHoursUnitPrice - String	
The unit price of the service item for after-hours.

roundUpValue - Int	
The rounded value of the service item.

quantity - String	
Denotes the quantity of the service item.

amount - String	
The amount of the service item.

adjustBlockItemAgainstAllItems - Boolean	
Denotes whether the service item is adjusted against all items.

addBlockItemAdjustedItems - [ServiceItemIdentifierInput]	
The list of identifier input for BlockItem.

blockItemUsedIn - BLOCK_ITEM_USAGE_TYPE	
Denotes the usage type of the service item.

salesTaxEnabled - Boolean	
Denotes whether sales tax is enabled for the service item.

salesTax - TaxIdentifierInput	
The identifier input for sales tax.

Example
{
  "name": "xyz789",
  "description": "abc123",
  "quantityType": "UNITS",
  "category": ServiceCategoryIdentifierInput,
  "useAsWorklogItem": true,
  "unitPrice": "abc123",
  "businessHoursUnitPrice": "abc123",
  "afterHoursUnitPrice": "xyz789",
  "roundUpValue": 123,
  "quantity": "abc123",
  "amount": "xyz789",
  "adjustBlockItemAgainstAllItems": true,
  "addBlockItemAdjustedItems": [
    ServiceItemIdentifierInput
  ],
  "blockItemUsedIn": "ALL_HOURS",
  "salesTaxEnabled": true,
  "salesTax": TaxIdentifierInput
}
Types
CreateServiceTypeItemInput
Input details for a SERVICE type item

Input Field	Description
offeringType - ServiceTypeItemOfferingType!	
Denotes type by which a SERVICE item is offered a client

addBundledItems - [ServiceCatalogItemIdentifierInput!]	
Items bundled under this item, used when creating a Package or Retainer

hourlyServiceTypeItem - CreateHourlyServiceTypeItemInput	
input for details needed for a HOURS type SERVICE item

redeemableServiceBundle - CreateRedeemableServiceBundleInput	
Input for details needed for a Retainer item

Example
{
  "offeringType": "QUANTITY",
  "addBundledItems": [ServiceCatalogItemIdentifierInput],
  "hourlyServiceTypeItem": CreateHourlyServiceTypeItemInput,
  "redeemableServiceBundle": CreateRedeemableServiceBundleInput
}
Types
CreateStatusInput
Specifies the input required to create a new ticket status.

Input Field	Description
name - String!	
The name of the status.

description - String	
The description of the status.

Example
{"name": "Cancelled", "description": "Used to mark the cancelled tickets"}
Types
CreateSubCategoryInput
Specifies the input required to create a new ticket subcategory.

Input Field	Description
name - String!	
The name of the subcategory. Mandatory and unique within the category.

Example
{"name": "CPU"}
Types
CreateSubCauseInput
Specifies the input to create a sub cause.

Input Field	Description
name - String!	
Specifies the name of the sub-cause.

description - String	
Specifies the description of the cause.

Example
{
  "name": "PC Performance",
  "description": "xyz789"
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

technician - TechnicianIdentifierInput	
Specifies the technician to whom the task is assigned.

techGroup - TechnicianGroupIdentifierInput	
Specifies the technician group to which the task is assigned.

module - TaskModule!	
Specifies the entity for which the task is created.

ticket - TicketIdentifierInput	
Specifies the ticket identifier under which the task is created. This input is mandatory if the module is TICKET.

Example
{
  "title": "Install Antivirus",
  "description": "abc123",
  "status": "xyz789",
  "estimatedTime": 500,
  "scheduledStartDate": "2022-07-15T09:00:00",
  "dueDate": "2022-07-25T16:00:00",
  "technician": TechnicianIdentifierInput,
  "techGroup": TechnicianGroupIdentifierInput,
  "module": "TICKET",
  "ticket": TicketIdentifierInput
}
Types
CreateTaxInput
Specifies the input for the tax.

Input Field	Description
name - String!	
The name of the tax.

addRates - [CreateTaxRateInput]!	
The list of inputs for the tax rate.

Example
{
  "name": "abc123",
  "addRates": [CreateTaxRateInput]
}
Types
CreateTaxRateInput
Specifies the inputs for the tax rate.

Input Field	Description
name - String!	
The name of the tax rate.

rateValue - String!	
The value of the tax rate.

Example
{
  "name": "xyz789",
  "rateValue": "abc123"
}
Types
CreateTechnicianInput
Specifies the input required to create a new technician.

Input Field	Description
firstName - String!	
The first name of the technician. This input is mandatory.

lastName - String	
The last name of the technician.

email - String!	
The email address of the technician. This is unique across technicians and client users. The email will be used for login. This input should be mandatory and unique.

contactNumber - String	
The contact number of the technician. It is recommended to provide the value in the standard format [+][country code][area code][local phone number].

emailSignature - String	
The email signature of the technician which will be used in their email responses.

designation - DesignationIdentifierInput	
Specifies the designation of the technician.

businessFunction - BusinessFunctionIdentifierInput	
Specifies the business function of the technician.

team - TeamIdentifierInput	
Specifies the technician's team.

reportingManager - TechnicianIdentifierInput	
Specifies the technician's reporting manager.

addGroups - [TechnicianGroupIdentifierInput]	
Specifies the list of technician groups that the technician will be associated with.

role - RoleIdentifierInput!	
Specifies the application role of the technician. This input is mandatory.

Example
{
  "firstName": "Jason",
  "lastName": "Wheeler",
  "email": "jason.wheeler@acme.com",
  "contactNumber": "212-504-4115",
  "emailSignature": "xyz789",
  "designation": DesignationIdentifierInput,
  "businessFunction": BusinessFunctionIdentifierInput,
  "team": TeamIdentifierInput,
  "reportingManager": TechnicianIdentifierInput,
  "addGroups": [TechnicianGroupIdentifierInput],
  "role": RoleIdentifierInput
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

client - ClientIdentifierInput!	
Specifies the client to whom the ticket is associated. This input is mandatory.

site - ClientSiteIdentifierInput	
Specifies the site to which the ticket is associated. The site of the requester will be assigned by the system if not specified.

requester - ClientUserIdentifierInput	
Specifies the requester for whom the ticket is created.

techGroup - TechnicianGroupIdentifierInput	
Specifies the technician group to which the ticket is assigned.

technician - TechnicianIdentifierInput	
Specifies the technician to whom the ticket is assigned.

status - String	
Specifies the status of the ticket. The value should be from the Status (name field) type. This input is mandatory.

requestType - String	
The type of the ticket.

source - TicketSource!	
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
Specifies the custom fields values for the client. Each entry in the JSON would be a key-value. The key will be a system-generated, unique name of the custom field (columnName field of CustomField type). The value for text, paragraph, radio, select, numeric, decimal, date, datetime should be given as a string. The value for checkbox, multi-select should be an array of string.

For example, the value could be {"udf1text": "value", "udf2mselect": ["value1", "value2"]}

addAdditionalRequester - [ClientUserIdentifierInput]	
Specifies the additional requesters to be added.

addFollowers - [TechnicianIdentifierInput]	
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

Example
{
  "subject": "Help! Internet is not working!",
  "description": "I cannot access my internet! I'm not sure what's happening!",
  "descriptionAttachments": [CreateAttachmentInput],
  "client": ClientIdentifierInput,
  "site": ClientSiteIdentifierInput,
  "requester": ClientUserIdentifierInput,
  "techGroup": TechnicianGroupIdentifierInput,
  "technician": TechnicianIdentifierInput,
  "status": "New",
  "requestType": "Incident",
  "source": "FORM",
  "priority": "xyz789",
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
  "addAdditionalRequester": [ClientUserIdentifierInput],
  "addFollowers": [TechnicianIdentifierInput],
  "createdTime": "2022-05-05T10:30:00",
  "updatedTime": "2022-05-06T10:05:00",
  "subSource": "xyz789",
  "sourceReferenceId": "xyz789",
  "addAssets": [AssetIdentifierInput],
  "suppressCloseNotification": false,
  "firstResponseTime": "2022-05-06T10:05:00",
  "resolutionTime": "2022-05-06T10:05:00"
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
CreateWorklogEntryInput
Input Field	Description
serviceItem - ServiceItemIdentifierInput	
Specifies the service item.

billable - Boolean	
Denotes whether the service item is billable or not.

afterHours - Boolean	
Denotes whether the service is provided after business hours.

qty - String!	
The number of offered units/hours. The unit is hours if service item is HOURS type.

unitPrice - String	
The unit price of the worklog item.

billDateTime - String!	
The datetime of the worklog.

notes - String	
The notes of the worklog.

workItem - WorkItemIdentifierInput!	
Specifies the Work identifier under which the worklog is created.

technician - TechnicianIdentifierInput	
Specifies the technician of the worklog.

Example
{
  "serviceItem": ServiceItemIdentifierInput,
  "billable": true,
  "afterHours": false,
  "qty": "xyz789",
  "unitPrice": "abc123",
  "billDateTime": "xyz789",
  "notes": "abc123",
  "workItem": WorkItemIdentifierInput,
  "technician": TechnicianIdentifierInput
}
Types
CustomField
The custom fields created by the user.

Field Name	Description
id - ID!	The ID of custom field.
columnName - String!	The system-generated name of the custom field. This name is unique and will be used to identify the field.
label - String!	The label of the custom field.
description - String	The description of the custom field.
fieldType - CustomFieldType!	The type of the custom field.
showToClient - Boolean!	Denotes whether the field is visible for the client.
Example
{
  "id": "4",
  "columnName": "udf1text",
  "label": "SSN",
  "description": "Social Security Number",
  "fieldType": "TEXT",
  "showToClient": true
}
Types
CustomFieldIdentifierInput
Specifies the identifier input for the custom field.

Input Field	Description
fieldId - ID!	
The ID of the custom field.

Example
{"fieldId": 4}
Types
CustomFieldType
The type of the custom field created by the user.

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
Example
"TEXT"
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
Specifies the input to delete client user.

Input Field	Description
userId - ID!	
The ID of the client user who is going to be deleted.

forget - Boolean	
The user will be soft deleted by default. The personally identifiable information (PII) will be anonymized by specifying true for this attribute.

Example
{"userId": 4, "forget": false}
Types
Designation
Designation of the technician.

Field Name	Description
designationId - ID!	The ID of the designation.
name - String!	The name of the designation.
Example
{"designationId": 4, "name": "CEO"}
Types
DesignationIdentifierInput
Specifies the identifier input for the designation.

Input Field	Description
designationId - ID!	
The ID of the designation.

Example
{"designationId": 4}
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
  "deviceCategoryId": 9567898545678,
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
clientSharedType - ClientSharedType	Type of client-based sharing.
siteSharedType - SiteSharedType	Type of requester site-based sharing.
userRoleSharedType - UserRoleSharedType	Type of requester role-based sharing.
client - JSON	Details of the shared client.
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
  "clientSharedType": "Client",
  "siteSharedType": "Site",
  "userRoleSharedType": "Role",
  "client": {"accountId": "6028532731226112000", "name": "Dunder Mifflin"},
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

clientSharedType - ClientSharedType	
Type of client-based sharing. Applicable only when the portalType is REQUESTER.

accountId - ID	
ID of the associated client. Applicable only when the clientSharedType is Client.

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
  "clientSharedType": "AllClients",
  "accountId": "4",
  "siteSharedType": "AllSites",
  "siteId": "4",
  "userRoleSharedType": "Role",
  "addedRoleIds": ["5"],
  "deletedRoleIds": ["4"],
  "userSharedType": "AllUsers",
  "addedUserIds": ["4"],
  "deletedUserIds": ["4"],
  "groupSharedType": "AllGroups",
  "addedGroupIds": ["4"],
  "deletedGroupIds": [4]
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
FrequencyDurationUnit
Specifies the frequency duration unit for a recurring contract.

Enum Value	Description
MONTH

Indicates the contract's recurring duration is based on 'MONTH'.
DAY

Indicates the contract's recurring duration is based on 'DAY'.
WEEK

Indicates the contract's recurring duration is based on 'WEEK'.
YEAR

Indicates the contract's recurring duration is based on 'YEAR'.
Example
"MONTH"
Types
GetClientSiteListInput
Specifies the input required to fetch the client site.

Input Field	Description
listInfo - ListInfoInput	
Specifies the list input required to fetch multiple records

clientId - ID	
The ID of the client. This optional input attribute can be used to fetch sites that belong to a particular client.

Example
{"listInfo": ListInfoInput, "clientId": 4}
Types
GetClientUserListInput
Specifies the input required to fetch client users.

Input Field	Description
listInfo - ListInfoInput	
Specifies the list input to fetch multiple records.

clientId - ID	
The ID of the client. This optional input attribute can be used to fetch sites that belong to a particular client.

Example
{
  "listInfo": ListInfoInput,
  "clientId": "4"
}
Types
GetTaskInput
Specifies the input required to fetch a task.

Input Field	Description
taskId - ID!	
The ID of the task. This input is mandatory.

Example
{"taskId": 4}
Types
GetTaskListInput
Specifies the input required to fetch a list of tasks.

Input Field	Description
listInfo - ListInfoInput	
Specifies the list input to fetch multiple records.

Example
{"listInfo": ListInfoInput}
Types
GetWorklogEntriesInput
Specifies the input required to fetch worklog entries.

Input Field	Description
module - WorkModule	
The worklog can be created under different entities such as tickets, projects, etc. and this specifies the entity under which the worklog is created.

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
HourlyServiceTypeItem
Contains details for a HOURS type SERVICE item

Field Name	Description
itemId - ID!	Identifier of the item
roundUpValue - Int!	Denotes the value to which a HOURS item quantity must be rounded up to during computation
defaultItem - Boolean!	Denotes whether the item is used in default when a work is logged
Example
{
  "itemId": "4",
  "roundUpValue": "15",
  "defaultItem": true
}
Types
ID
The ID scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as "4") or integer (such as 4) input value will be accepted as an ID.

Example
"4"
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
Impact
The ticket's impact.

Field Name	Description
id - ID!	The ID of the impact.
name - String!	The name of the impact.
Example
{"id": "4", "name": "High"}
Types
InstallerDetails
Specifies the installer Information of a specific client-site

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
  "os": "abc123"
}
Types
Int
The Int scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.

Example
123
Types
Invoice
Field Name	Description
invoiceId - ID!	The ID of the invoice
displayId - String!	The system-generated, human-readable ID of the invoice.
client - JSON	The client to whom the invoice is created.
site - JSON	The client site to which the invoice is created.
invoiceDate - String!	The invoice creation date.
dueDate - String	The due date of the invoice i.,e the invoice should be paid on or before the due date. Otherwise the invoice will be marked as overdue.
statusEnum - InvoiceStatus	The invoice status.
sentToClient - Boolean	Denotes whether the invoice has been sent to the client.
items - [InvoiceItem]	The list of line items.
taxes - [InvoiceTaxItem]	The list of tax line items.
discountAmount - String	The sum of discount amounts applied on each line items.
additionalDiscount - String	The additional discount amount applied on the invoice.
additionalDiscountRate - String	The additional discount rate applied on the invoice.
totalAmount - String	The total amount of the invoice includes all the discounts and taxes.
notes - String	The notes about the invoice.
paymentDate - String	The payment date of the invoice.
paymentMethod - JSON	The payment method of the invoice.
paymentReference - String	Denotes the comments, notes, or references related to a payment, providing additional context or information.
invoicePaymentTerm - JSON	The payment term of the invoice.
Example
{
  "invoiceId": 4,
  "displayId": "061422-0001",
  "client": {"accountId": "7929754851606401024", "name": "Acme"},
  "site": {"id": "7929754852373958656", "name": "Austin"},
  "invoiceDate": "2022-06-14",
  "dueDate": "2022-06-25",
  "statusEnum": "DRAFT",
  "sentToClient": true,
  "items": [InvoiceItem],
  "taxes": [InvoiceTaxItem],
  "discountAmount": "1250.25",
  "additionalDiscount": "1000",
  "additionalDiscountRate": "10",
  "totalAmount": "10000",
  "notes": "The additional discount offered by Adam",
  "paymentDate": "abc123",
  "paymentMethod": {},
  "paymentReference": "xyz789",
  "invoicePaymentTerm": {}
}
Types
InvoiceIdentifierInput
Specifies the identifier input for the invoice.

Input Field	Description
invoiceId - ID!	
The ID of the invoice.

Example
{"invoiceId": 4}
Types
InvoiceItem
Denotes the line items on the invoice

Field Name	Description
itemId - ID!	The ID of the invoice line item.
billedDate - String!	The offered/billed date of the line item
details - String	The details about the line item.
quantity - String!	The quantity of the line item.
unitPrice - String!	The unit price of the line item.
discountRate - String	The discount rate applied for the line item.
amount - String	The total amount of the line item, excluding tax i.,e (unitPrice * quantity) - discount
taxable - Boolean	Specifies whether the line item is taxable or not.
tax - JSON	The applicable tax for the line item.
serviceItem - JSON	The offered service item.
taxAmount - String	Shows the tax amount applied for the line item.
totalAmount - String	Indicates the total amount for the line item. This includes the total of all the charges and the taxes.
invoice - Invoice	The invoice for the line item
Example
{
  "itemId": "4",
  "billedDate": "2022-05-31",
  "details": "Seagate One Touch 1TB USB 3.0 Hard Disk Drive",
  "quantity": "10",
  "unitPrice": "125.75",
  "discountRate": "12.75",
  "amount": "1097.17",
  "taxable": true,
  "tax": {"taxId": "7929754852373958658", "name": "Austin Tax"},
  "serviceItem": {
    "itemId": "7929754852373958672",
    "name": "Hard Disk",
    "quantityType": "UNITS"
  },
  "taxAmount": "abc123",
  "totalAmount": "abc123",
  "invoice": Invoice
}
Types
InvoiceItemList
The response payload for a list of invoice items.

Field Name	Description
items - [InvoiceItem]	The list of invoice items.
listInfo - ListInfo	The details about the list
Example
{
  "items": [InvoiceItem],
  "listInfo": ListInfo
}
Types
InvoiceList
The response payload for list of invoices fetched.

Field Name	Description
invoices - [Invoice]	The list of invoices.
listInfo - ListInfo	The detail about the list.
Example
{
  "invoices": [Invoice],
  "listInfo": ListInfo
}
Types
InvoiceStatus
Specifies the status of the invoice.

Enum Value	Description
DRAFT

Denotes that the invoice has been created.
APPROVED

Denotes that the invoice has been finalized. The invoice is moved to this status when it is sent to the client or synced with bookkeeping tools such as QuickBooks or Xero.
PAID

Denotes that the invoice has been paid.
OVERDUE

Denotes that the invoice has not paid on or before the due date.
VOID

Denotes that the invoice has been marked as void.
Example
"DRAFT"
Types
InvoiceTaxItem
The invoice tax line item.

Field Name	Description
tax - JSON!	The tax. The actual type of this field is Tax. This field returns taxId and name fields of Tax as JSON.
taxRate - String!	The rate of the tax.
taxableAmount - String!	The taxable amount.
taxAmount - String!	The tax amount.
id - ID!	Id of the tax Item.
rate - JSON!	The rate under a tax.
Example
{
  "tax": {"taxId": "7929754852373958658", "name": "Austin Tax"},
  "taxRate": "10",
  "taxableAmount": "10000.75",
  "taxAmount": "1000.08",
  "id": "4",
  "rate": {}
}
Types
ItDocumentation
Specifies the IT document Record Details

Field Name	Description
itDocId - ID!	ID of the IT Document
name - String	Name of the IT document record
client - JSON	Client Details of the IT document record
site - JSON	Site details of the IT document record
customFields - JSON	Custom field details of the IT document record
Arguments
fields - [String]
Example
{
  "itDocId": 4,
  "name": "abc123",
  "client": {},
  "site": {},
  "customFields": {}
}
Types
ItDocumentationIdentifierInput
Specifies the identifier input for the IT Document.

Input Field	Description
itDocId - ID!	
The ID of the IT Document.

Example
{"itDocId": "4"}
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
{"itemId": 4}
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
  "description": "xyz789",
  "status": "DRAFT",
  "createdBy": {},
  "createdOn": "xyz789",
  "lastModifiedBy": {},
  "lastModifiedOn": "xyz789",
  "viewCount": 123,
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
  "hasMore": false,
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

clientSharedType - ClientSharedType	
Type of client-based sharing. Applicable only when the portalType is REQUESTER.

accountId - ID	
ID of the associated client. Applicable only when the clientSharedType is Client.

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
  "clientSharedType": "AllClients",
  "accountId": 4,
  "siteSharedType": "AllSites",
  "siteId": "4",
  "userRoleSharedType": "AllRoles",
  "addedRoleIds": ["4"],
  "userSharedType": "AllUsers",
  "addedUserIds": [4],
  "groupSharedType": "AllGroups",
  "addedGroupIds": ["4"]
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
OfferedItem
The offered items

Field Name	Description
itemId - ID!	The ID of the offered item
type - OfferedItemType!	Indicates whether the offered item is from the contract or worklog.
billDate - String!	The offered date.
status - OfferedItemAuditStatus!	Indicates the audit state of the offered item
serviceItem - JSON!	The offered service item. The actual type of this field is ServiceItem. Returns itemId, name, quantityType fields as JSON.
client - JSON	The client to whom the offered item belongs. The actual type of this field is Client. Returns accountId, name fields as JSON.
site - JSON	The client site to which the offered item belongs. The actual type of this field is ClientSite. Returns id, name fields as JSON.
workItem - JSON	If the type is WORK, it indicates the work item (ticket/project) to which the offered item belongs. The actual type of this field is WorkItem. Returns workId, displayId, module fields as JSON.
technician - JSON	If the type is WORK, it indicates the technician who offered the item.
afterHours - Boolean	If the type is WORK, it indicates whether the service is offered after hours
unitPrice - String	The actual unit price of the offered item.
qty - String	The actual quantity of the offered item.
discountRate - String	The actual discount rate of the offered item.
amount - String	The actual amount of the offered item.
revisedUnitPrice - String	The revised unit price of the offered item after the audit.
revisedQuantity - String	The revised quantity of the offered item after the audit.
revisedDiscountRate - String	The revised discount rate of the offered item after the audit.
revisedAmount - String	The revised amount of the offered item after the audit.
adjustedBlockMoney - String	If the type is WORK, and the offered item was adjusted from block money, it indicates the amount adjusted from the block money
adjustedBlockHour - String	If the type is WORK, and the offered item was adjusted from block hour, it indicates the quantity adjusted from the block hour
notes - String	The notes of the offered item.
createdTime - String	The created time of the offered item.
updatedTime - String	The updated time of the offered item.
Example
{
  "itemId": "4",
  "type": "CONTRACT",
  "billDate": "xyz789",
  "status": "PENDING",
  "serviceItem": {},
  "client": {},
  "site": {},
  "workItem": {},
  "technician": {},
  "afterHours": false,
  "unitPrice": "xyz789",
  "qty": "xyz789",
  "discountRate": "xyz789",
  "amount": "xyz789",
  "revisedUnitPrice": "abc123",
  "revisedQuantity": "xyz789",
  "revisedDiscountRate": "abc123",
  "revisedAmount": "xyz789",
  "adjustedBlockMoney": "abc123",
  "adjustedBlockHour": "abc123",
  "notes": "xyz789",
  "createdTime": "abc123",
  "updatedTime": "xyz789"
}
Types
OfferedItemAuditStatus
The status of the services/products offered to the requester.

Enum Value	Description
PENDING

Denotes that the service/product is offered and waiting for invoicing approval.
APPROVED

Denotes that the service/product is approved for invoicing.
IGNORED

Denotes that the service/product is ignored from the invoicing.
INVOICED

Denotes that the service/product is invoiced.
UNDER_CONTRACT

Indicates that the service/product is bundled under a contract.
Example
"PENDING"
Types
OfferedItemList
The response payload for the list of offered items.

Field Name	Description
items - [OfferedItem]	The list of offered items
listInfo - ListInfo	The details about the list.
Example
{
  "items": [OfferedItem],
  "listInfo": ListInfo
}
Types
OfferedItemType
Specifies the offered item type.

Enum Value	Description
CONTRACT

The specified item is under a contract.
WORK

The specified item is part of a ticket/project.
Example
"CONTRACT"
Types
Operation
A system-defined operation like Add, Edit, Delete, View, Allow which is used along with the feature to define the user authorization under a role.

Field Name	Description
operationId - ID!	The ID of the operation.
name - String!	The name of the operation.
Example
{"operationId": "4", "name": "View"}
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
PaymentMethod
Payment method is the specific way or channel used to transfer funds for a purchase, like credit card, bank transfer, or cash

Field Name	Description
paymentMethodId - ID!	The ID of the payment method.
paymentMethodName - String!	The name of the payment method.
Example
{
  "paymentMethodId": "4",
  "paymentMethodName": "xyz789"
}
Types
PaymentMethodIdentifierInput
Specifies the identifier input for the payment method.

Input Field	Description
paymentMethodId - ID!	
The ID of the payment method.

Example
{"paymentMethodId": "4"}
Types
PaymentTerm
Payment term specifies when and how a customer is expected to make a payment in a business transaction, such as "Net 30" meaning payment due within 30 days.

Field Name	Description
paymentTermId - ID!	The ID of the payment term.
paymentTermName - String!	The name of the payemnt term.
paymentTermValue - Int	The number of days.
Example
{
  "paymentTermId": "4",
  "paymentTermName": "abc123",
  "paymentTermValue": 987
}
Types
PaymentTermIdentifierInput
Specifies the identifier input for the payment term.

Input Field	Description
paymentTermId - ID!	
The ID of the payment term.

Example
{"paymentTermId": "4"}
Types
PerpetualContract
Specifies the perpetual contract.

Field Name	Description
contractId - ID!	The ID of the contract.
autoRenew - Boolean!	Indicates whether the autoRenew option is enabled.
Example
{"contractId": 4, "autoRenew": false}
Types
PricingModel
Specifies the pricing model.

Field Name	Description
model - PricingModelType!	The pricing model type.
details - [PricingModelDetail!]!	The pricing model details.
Example
{"model": "PER_UNIT", "details": [PricingModelDetail]}
Types
PricingModelDetail
Specifies the pricing model detail.

Field Name	Description
value - String!	The business hours price value.
afterHoursValue - String	The after hours price value.
Example
{
  "value": "100",
  "afterHoursValue": "xyz789"
}
Types
PricingModelDetailsInput
Specifies the input details of a pricing model.

Input Field	Description
value - String!	
Indicates the business hours price value.

afterHoursValue - String	
Indicates the after hours price value.

Example
{
  "value": "xyz789",
  "afterHoursValue": "abc123"
}
Types
PricingModelInput
Specifies the input for the pricing model and its details.

Input Field	Description
model - PricingModelType!	
Specifies the pricing model type.

details - [PricingModelDetailsInput!]!	
Specifies the pricing model details.

Example
{
  "model": "PER_UNIT",
  "details": [PricingModelDetailsInput]
}
Types
PricingModelType
Specifies the pricing model type.

Enum Value	Description
PER_UNIT

Example
"PER_UNIT"
Types
Priority
The ticket's priority.

Field Name	Description
id - ID!	The ID of the priority.
name - String!	The name of the priority.
colorCode - String	The color code of the priority. The value should be CSS color code like #00FFFF.
Example
{
  "id": "4",
  "name": "Critical",
  "colorCode": "#EE4338"
}
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
RecurringContract
Specifies the recurring contract.

Field Name	Description
contractId - ID!	The ID of the contract.
recurringMode - RecurringMode!	The recurring mode of the recurring contract.
frequencyDurationUnit - FrequencyDurationUnit!	The frequency duration unit of the recurring contract.
frequencyInterval - Int!	The frequency interval of the recurring contract.
billingOffset - Int!	The billing offset of the recurring contract.
nextBillDate - String	The next bill date of the recurring contract.
Example
{
  "contractId": 4,
  "recurringMode": "ARREAR",
  "frequencyDurationUnit": "MONTH",
  "frequencyInterval": 123,
  "billingOffset": 123,
  "nextBillDate": "xyz789"
}
Types
RecurringContractInput
Specifies the input required for a recurring contract.

Input Field	Description
recurringMode - RecurringMode!	
The recurring mode of a recurring contract. This input is mandatory.

frequencyDurationUnit - FrequencyDurationUnit!	
The frequency duration unit of a recurring contract. This input is mandatory.

frequencyInterval - Int!	
The frequency interval of a recurring contract. This input is mandatory.

billingOffset - Int	
The billing offset recurring contract. This input is mandatory if the recurring mode is 'ADVANCE'.

Example
{
  "recurringMode": "ARREAR",
  "frequencyDurationUnit": "MONTH",
  "frequencyInterval": 987,
  "billingOffset": 987
}
Types
RecurringMode
Specifies the recurring mode of a recurring contract.

Enum Value	Description
ARREAR

Indicates the contract's recurring mode is 'ARREAR'.
UPFRONT

Indicates the contract's recurring mode is 'UPFRONT'.
ADVANCE

Indicates the contract's recurring mode is 'ADVANCE'.
Example
"ARREAR"
Types
RedeemableBundleApplicableHours
Specifies the applicable hours type for a redeemable bundle.

Enum Value	Description
BUSINESS_HOURS

Indicates that the redeemable bundle is applicable in business hours.
AFTER_HOURS

Indicates that the redeemable bundle is applicable in after hours.
ALL_HOURS

Indicates that the redeemable bundle is applicable in all hours.
Example
"BUSINESS_HOURS"
Types
RedeemableBundleApplicableType
Specifies the applicable items for a redeemable bundle.

Enum Value	Description
ALL_ITEMS

Indicates that redeemable bundle is applicable for all items.
INCLUDED_ITEMS

Indicates that redeemable bundle is applicable for the included items.
Example
"ALL_ITEMS"
Types
RedeemableContract
Specifies the redeemable contract.

Field Name	Description
contractId - ID!	The ID of the contract.
applicableType - RedeemableBundleApplicableType!	Specifies the applicable type of the redeemable bundle.
applicableHours - RedeemableBundleApplicableHours!	Specifies the applicable type of the redeemable bundle.
carryForwardRemainingQuantity - Boolean!	Specifies the applicable type of the redeemable bundle.
Example
{
  "contractId": "4",
  "applicableType": "ALL_ITEMS",
  "applicableHours": "BUSINESS_HOURS",
  "carryForwardRemainingQuantity": true
}
Types
RedeemableServiceBundle
Contains Details for a Retainer(BLOCK_HOUR/BLOCK_MONEY).

Field Name	Description
itemId - ID!	Identifier of the item
applicableType - RedeemableBundleApplicableType!	Denotes Whether the retainer can be used for all items or only included items. If INCLUDED_ITEMS is used it is mandatory to add items under bundledItems
applicableHours - RedeemableBundleApplicableHours!	Denotes when the retainer can be applied
redeemableQuantity - String!	Quantity that the retainer can be redeemed
Example
{
  "itemId": "4",
  "applicableType": "INCLUDED_ITEMS",
  "applicableHours": "ALL_HOURS",
  "redeemableQuantity": "30"
}
Types
ResolutionCode
The ticket's resolution code.

Field Name	Description
id - ID!	The ID of the resolution code.
name - String!	The name of the resolution code.
description - String	The description of the resolution code.
Example
{
  "id": 4,
  "name": "Workaround",
  "description": "A temporary fix has been provided, underlying issue still exists"
}
Types
ResolveAlertInput
Specifies the input required to resolve an existing alert.

Input Field	Description
id - ID!	
ID of the Alert need to be Resolved

Example
{"id": "4"}
Types
Role
The role defines access permissions for user authorization.

Field Name	Description
roleId - ID!	The ID of the role.
name - String!	The name of the role.
description - String	The description of the role.
roleType - RoleType	The role type denotes whether the role belongs to a technician or a client user.
roleFeatureList - [RoleFeature]	The set of allowed features and permissions.
roleUserList - JSON	The set of users who has the particular role. The actual type of this field is User. Returns array of objects as JSON, each object contains userId and name fields.
Example
{
  "roleId": 4,
  "name": "Client Admin",
  "description": "Client Administrator",
  "roleType": RoleType,
  "roleFeatureList": [RoleFeature],
  "roleUserList": [
    {"userId": "7928838372746166222", "name": "user1"},
    {"userId": "7928838372746166223", "name": "user2"}
  ]
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
The role type denotes whether a role belongs to a technician or a client user.

Field Name	Description
roleTypeId - ID!	The ID of the role type.
name - String!	The name of the role.
Example
{"roleTypeId": "2", "name": "User role type"}
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
  "assetId": 4,
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
{"id": 4}
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
  "runTimeVariables": ["xyz789"],
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
The service catalog item

Field Name	Description
itemId - ID!	The ID of the service catalog item.
name - String!	The name of the service catalog item. It is unique in the Catalog.
description - String	The service catalog item's description.
category - ServiceCategory	The category of the service catalog item.
itemType - ServiceCatalogItemType!	The type of the service catalog item.
offerAsWorklogItem - Boolean	If the itemType is PRODUCT or itemType is SERVICE and offeringType is QUANTITY, it denotes whether the service catalog item can be used in worklog.
status - ServiceCatalogItemStatus	It denotes the status of the service catalog item
taxable - Boolean	It is set to true if the item is taxable
salesTax - Tax	Sales tax for the item
sellingPrice - PricingModel	The selling price of the item.
costPrice - PricingModel	The cost price of the item.
serviceTypeItem - ServiceTypeItem	Details of an Item for itemType SERVICE.
Example
{
  "itemId": 4,
  "name": "Hard Disc",
  "description": "Seagate One Touch 1TB USB 3.0 Hard Disk Drive",
  "category": ServiceCategory,
  "itemType": "PRODUCT",
  "offerAsWorklogItem": false,
  "status": "ACTIVE",
  "taxable": true,
  "salesTax": Tax,
  "sellingPrice": PricingModel,
  "costPrice": PricingModel,
  "serviceTypeItem": ServiceTypeItem
}
Types
ServiceCatalogItemIdentifierInput
Specifies the identifier input for service catalog item.

Input Field	Description
itemId - ID!	
The ID of the service catalog item.

Example
{"itemId": 4}
Types
ServiceCatalogItemList
The response payload for list of service catalog items fetched.

Field Name	Description
items - [ServiceCatalogItem]	The list of service catalog items.
listInfo - ListInfo	The detail about the list.
Example
{
  "items": [ServiceCatalogItem],
  "listInfo": ListInfo
}
Types
ServiceCatalogItemStatus
Specifies the status of the item

Enum Value	Description
ACTIVE

Indicates that the listed item is available for use.
INACTIVE

Indicates that the listed item is currently unavailable for use.
Example
"ACTIVE"
Types
ServiceCatalogItemType
Defines the type of item.

Enum Value	Description
PRODUCT

Represents an item that is a product for sale.
SERVICE

Represents an item that is a service being offered.
Example
"PRODUCT"
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
ServiceItem
The service item

Field Name	Description
itemId - ID!	The ID of the service item.
name - String!	The name of the service item.
description - String	The service item's description.
quantityType - ServiceItemQuantityType!	The type of the service item.
category - ServiceCategory	The category of the service item.
useAsWorklogItem - Boolean	If the quantityType is UNITS, it denotes whether the service item can be used in worklog.
unitPrice - String	The unit price of the service item.
businessHoursUnitPrice - String	The unit price of the service item for business hours.
afterHoursUnitPrice - String	The unit price of the service item for after hours.
roundUpValue - Int	The rounded value of the service item.
quantity - String	The quantity of the service item (applicable for block hour/money items).
amount - String	The amount of the service item (applicable for block hour/money items).
adjustBlockItemAgainstAllItems - Boolean	Denotes whether block money/items can be adjusted for the service item against all items.
blockItemAdjustedItems - [ServiceItem]	The list of identifier inputs for block items.
blockItemUsedIn - BLOCK_ITEM_USAGE_TYPE	Denotes the usage type of the block item.
salesTaxEnabled - Boolean	Denotes whether the sales tax has been enabled.
salesTax - Tax	Returns the specified tax rate.
Example
{
  "itemId": "4",
  "name": "Hard Disc",
  "description": "abc123",
  "quantityType": "UNITS",
  "category": ServiceCategory,
  "useAsWorklogItem": false,
  "unitPrice": "abc123",
  "businessHoursUnitPrice": "xyz789",
  "afterHoursUnitPrice": "abc123",
  "roundUpValue": 123,
  "quantity": "abc123",
  "amount": "xyz789",
  "adjustBlockItemAgainstAllItems": true,
  "blockItemAdjustedItems": [ServiceItem],
  "blockItemUsedIn": "ALL_HOURS",
  "salesTaxEnabled": true,
  "salesTax": Tax
}
Types
ServiceItemIdentifierInput
Specifies the identifier input for the service item.

Input Field	Description
itemId - ID!	
The ID of the service item.

Example
{"itemId": "4"}
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
ServiceItemQuantityType
The type of the service item.

Enum Value	Description
UNITS

Denotes the product.
HOURS

Denotes the service.
BLOCK_HOURS

Denotes the block hour service.
BLOCK_MONEY

Denotes the block money service.
Example
"UNITS"
Types
ServiceTypeItem
Contains additional details specific to the SERVICE itemType of an Item

Field Name	Description
itemId - ID!	Identifier of the item
offeringType - ServiceTypeItemOfferingType!	Denotes the type in which the SERVICE itemType item is offered to a client
bundledItems - [ServiceCatalogItem!]	Contains a list of item which can be use by a Package or a Retainer Item. It is mandatory for offering type BLOCK_HOUR, BLOCK_MONEY, SERVICE_BUNDLE.
hourlyServiceTypeItem - HourlyServiceTypeItem	Contains details for HOURS type SERVICE item
redeemableServiceBundle - RedeemableServiceBundle	Contains details required by a Retainer. It is mandatory for BLOCK_HOUR and BLOCK_MONEY
Example
{
  "itemId": 4,
  "offeringType": "HOURS",
  "bundledItems": [ServiceCatalogItem],
  "hourlyServiceTypeItem": HourlyServiceTypeItem,
  "redeemableServiceBundle": RedeemableServiceBundle
}
Types
ServiceTypeItemOfferingType
Denotes how the SERVICE item is offered to clients

Enum Value	Description
QUANTITY

A product is offered as a service to a client
HOURS

Used for manual service offered for the client
BLOCK_HOUR

A block of Hours Prepaid, Available for consumption by the items included under it
BLOCK_MONEY

A block of Money Prepaid, Available for consumption by the items included under it
SERVICE_BUNDLE

A package of items bundled which is offered to a client
Example
"QUANTITY"
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

Example
{"attribute": "technician.email", "order": "ASC"}
Types
SortOrder
Specifies the order in which the records will be sorted ie. ascending or descending.

Enum Value	Description
ASC

DESC

Example
"ASC"
Types
Status
The ticket status.

Field Name	Description
id - ID!	The ID of the status.
name - String!	The name of the status.
description - String	The description of the status.
Example
{
  "id": "4",
  "name": "Assigned",
  "description": "Denotes the ticket is assigned to a technician"
}
Types
String
The String scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.

Example
"xyz789"
Types
SubCategory
The ticket subcategory.

Field Name	Description
id - ID!	The ID of the subcategory.
name - String!	The name of the subcategory
Example
{"id": 4, "name": "Antivirus"}
Types
SubCause
The ticket sub cause.

Field Name	Description
id - ID!	The ID of the sub cause.
name - String!	The name of the sub cause.
description - String	The description of the sub cause.
Example
{
  "id": 4,
  "name": "Server Performance",
  "description": "abc123"
}
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
  "tpEndpointIds": ["xyz789"],
  "integrationRefId": 4
}
Types
TPEndpointAssetInfo
Specifies The SuperOps Asset Info for Given TP Endpoint Ids

Field Name	Description
tpEndpointId - String	The Endpoint ID of the ThirdParty Integration
superOpsAssetInfo - Asset	SuperOps Asset Info For Respective ThirdParty Integration Endpoint ID
Example
{
  "tpEndpointId": "xyz789",
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
overdue - Boolean	Indicates whether the task is overdue i.e, crossed the due time.
actualStartDate - String	The actual start datetime of the task i.,e when the task status is set to PROGRESS first time.
actualEndDate - String	The actual end datetime of the task i.,e when the task status is set to COMPLETED.
technician - JSON	The technician to whom the task is assigned. The actual type of this field is Technician. Returns userId and name fields as JSON. The name and email fields can be used in the filter condition.
techGroup - JSON	The technician group to which the task is assigned. The actual type of this field is TechnicianGroup. Returns groupId and name fields as JSON. The name field can be used in the filter condition.
module - TaskModule	The entity for which the task is created. The module field within the workItem field replaces this field
ticket - JSON	The ticket under which the task is created. Available only if the module is TICKET. The actual type of this field is Ticket. Returns ticketId, displayId, subject fields as JSON. The displayId and subject can be used in the filter condition. The workItem field replaces this field
workItem - JSON	It indicates the work item (ticket/project) to which the task belongs. The actual type of this field is WorkItem. It returns workId, displayId, and module fields as JSON
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
  "module": "TICKET",
  "ticket": {
    "ticketId": "7928838372746166987",
    "displayId": "062822-0005",
    "subject": "Help! Internet is not working!"
  },
  "workItem": {}
}
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
TaskModule
Represents the entity/type.

Enum Value	Description
TICKET

The ticket entity.
Example
"TICKET"
Types
Tax
The response payload for the tax.

Field Name	Description
taxId - ID!	The ID of the tax.
name - String!	The name of the tax.
rates - [TaxRate]	The list of tax rates.
totalRate - String	The sum of all the tax rates.
Example
{
  "taxId": 4,
  "name": "xyz789",
  "rates": [TaxRate],
  "totalRate": "xyz789"
}
Types
TaxIdentifierInput
Specifies the identifier input for the tax.

Input Field	Description
taxId - ID!	
The ID of the tax.

Example
{"taxId": 4}
Types
TaxList
The response payload for the list of taxes.

Field Name	Description
taxes - [Tax]	The list of taxes.
listInfo - ListInfo	The details about the list.
Example
{
  "taxes": [Tax],
  "listInfo": ListInfo
}
Types
TaxRate
Specifies the response for tax rates.

Field Name	Description
rateId - ID!	The ID of the tax rate.
name - String!	The name of the tax rate.
rateValue - String!	The value of the tax rate.
Example
{
  "rateId": "4",
  "name": "abc123",
  "rateValue": "abc123"
}
Types
Team
The technician's team.

Field Name	Description
teamId - ID!	The ID of the team.
name - String!	The name of the team.
Example
{
  "teamId": "4",
  "name": "Network specialist"
}
Types
TeamIdentifierInput
Specifies the identifier input for the technician's team.

Input Field	Description
teamId - ID!	
The ID of the team.

Example
{"teamId": 4}
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
businessFunction - JSON	The business function of the technician. The actual type of this field is BusinessFunction. Returns as JSON, object contains businessFunctionId and name fields.
team - JSON	The technician's team. The actual type of this field is Team. Returns as JSON, object contains teamId and name fields.
reportingManager - JSON	The technician's reporting manager. The actual type of this field is User. Returns as JSON, object contains userId and name fields.
role - JSON	The application role of the technician. The actual type of this field is Role. Returns as JSON, object contains roleId and name fields.
groups - JSON	The list of technician groups to which the technician is associated. The actual type of this field is Technician Group. Returns array of objects as JSON, each object contains groupId and name fields.
Example
{
  "userId": 4,
  "firstName": "Jason",
  "lastName": "Wheeler",
  "name": "Jason Wheeler",
  "email": "jason.wheeler@acme.com",
  "contactNumber": "212-504-4115",
  "emailSignature": "<p>Thanks and Regards,</p><p>Jason Wheeler</p><p><br></p>",
  "designation": {"designationId": "7928838372746166998", "name": "Manager"},
  "businessFunction": {
    "businessFunctionId": "7928838372746166923",
    "name": "Management"
  },
  "team": {"teamId": "7928838372746166764", "name": "Network specialist"},
  "reportingManager": {"userId": "6928838372746166764", "name": "Howard Stern"},
  "role": {"roleId": "3", "name": "Technician"},
  "groups": [{"groupId": "7928838372746166689", "name": "Network"}]
}
Types
TechnicianGroup
Technician groups help group a set of technicians together based on function, expertise, etc for the purpose of easy assignment of tickets. Clients can be associated to one or more technician groups so that the technicians in those groups can access the client's data.

Field Name	Description
groupId - ID!	The ID of the technician group.
name - String!	The name of the technician group.
Example
{"groupId": 4, "name": "Network"}
Types
TechnicianGroupIdentifierInput
Specifies the identifier input for the technician group.

Input Field	Description
groupId - ID!	
The ID of the technician group.

Example
{"groupId": 4}
Types
TechnicianIdentifierInput
Specifies the identifier input for the technician.

Input Field	Description
userId - ID!	
The ID of the technician.

Example
{"userId": 4}
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
The ticket type that denotes whether it's an Incident or a Service Request.

Field Name	Description
ticketId - ID!	The ID of the ticket.
displayId - String!	The system-generated, human-readable ID of the ticket.
subject - String!	The subject of the ticket.
ticketType - TicketType	The type of the ticket. Use requestType instead of ticketType
requestType - String	The type of the ticket.
source - TicketSource!	The creation source of the ticket.
client - JSON	The client to whom the ticket is associated. The actual type of this field is Client. Returns accountId and name fields as JSON. The name field can be used in the filter condition.
site - JSON	The site to which the ticket is associated. The actual type of this field is ClientSite. Returns ID and name fields as JSON. The name field can be used in the filter condition.
requester - JSON	The client user for whom the ticket is created. The actual type of this field is ClientUser. Returns userId and name fields as JSON. The name and email fields can be used in the filter condition.
additionalRequester - JSON	The list of client users who act as additional requesters. The actual type of this field is ClientUser. Returns array of objects as JSON, each object contains userId and name fields.
followers - JSON	The list of technicians who follow the ticket. The actual type of this field is Technician. Returns array of objects as JSON, each object contains userId and name fields.
techGroup - JSON	The technician group to which the ticket is assigned. The actual type of this field is TechnicianGroup. Returns groupId and name fields as JSON. The name field can be used in the filter condition.
technician - JSON	The technician to whom the ticket is assigned. The actual type of this field is Technician. Returns userId and name fields as JSON. The name and email fields can be used in the filter condition.
status - String	The status of the ticket.
priority - String	The priority of the ticket.
impact - String	The impact of the ticket.
urgency - String	The urgency of the ticket.
category - String	The category of the ticket.
subcategory - String	The subcategory of the ticket.
cause - String	The cause of the ticket.
subcause - String	The sub cause of the ticket.
resolutionCode - String	The resolution code of the ticket.
sla - JSON	The SLA of the ticket. The actual type of this field is SLA. Returns id and name fields as JSON.
createdTime - String	The time when the ticket was created.
updatedTime - String	The time when the ticket was updated.
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
worklogTimespent - String	The Worklog Time Spent (In Minutes) on the ticket.
Example
{
  "ticketId": "7928838372746166987",
  "displayId": "062822-0005",
  "subject": "Help! Internet is not working!",
  "ticketType": "INCIDENT",
  "requestType": "abc123",
  "source": "FORM",
  "client": {
    "accountId": "7928838372746166998",
    "name": "Acme Management Pvt. Ltd."
  },
  "site": {"id": "7928838372746169876", "name": "Austin"},
  "requester": {"userId": "5928838372746169876", "name": "John Williams"},
  "additionalRequester": [
    {"userId": "5928838372746169098", "name": "Howard Stern"}
  ],
  "followers": {},
  "techGroup": {"groupId": "3928838372746169098", "name": "Network"},
  "technician": {"userId": "5928838372746160987", "name": "Jason Wheeler"},
  "status": "New",
  "priority": "xyz789",
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
  "firstResponseViolated": true,
  "resolutionDueTime": "2022-06-29T10:25:10",
  "resolutionTime": "2022-06-29T10:25:10",
  "resolutionViolated": false,
  "customFields": {
    "udf1text": "value",
    "udf2date": "2022-05-06",
    "udf3dt": "2022-05-06T10:10:10",
    "udf5mselect": ["value1", "value1"]
  },
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
  "conversationId": 4,
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
{"ticketId": "4"}
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
TicketSource
The creation source of the ticket.

Enum Value	Description
FORM

Denotes the ticket is created from the form.
AGENT

Denotes the ticket is created from SuperOps agent (i.,e from tray icon).
EMAIL

Denotes the ticket is created from email.
AI

Denotes the ticket is created from AI
PHONE

Denotes the ticket is created from Phone.
INTEGRATION

Denotes the ticket is created via Integration Platform.
Example
"FORM"
Types
TicketType
The ticket's type.

Enum Value	Description
INCIDENT

Denotes incident ticket.
SERVICE_REQUEST

Denotes service ticket.
Example
"INCIDENT"
Types
UpdateAssetInput
specifies the input to update an Asset API

Input Field	Description
assetId - ID!	
The ID of the asset which needs to be updated

name - String	
Name of the asset to be updated

client - ClientIdentifierInput	
Client details of the asset to be updated

site - ClientSiteIdentifierInput	
Site details of the asset to be updated

customFields - JSON	
The custom fields that need to be updated

requester - ClientUserIdentifierInput	
The requester that needs to be updated

warrantyExpiryDate - String	
The Warranty Expiration Date of the Asset

purchasedDate - String	
The Purchased Date of the Asset

Example
{
  "assetId": "8001114136934215681",
  "name": "HostName Changed",
  "client": {"accountId": "7001114136934215681"},
  "site": {"id": "3001114136934215681"},
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
UpdateBillableContractInput
Specifies the input required to update a billable contract.

Input Field	Description
sellingPriceOverridden - Boolean	
Indicates whether the contract's selling price is overridden.

sellingPrice - PricingModelInput	
The selling price of the contract, applicable if the price is overridden.

change - BillableContractQuantityChangeInput	
Specifies the billable contract quantity change input details.

Example
{
  "sellingPriceOverridden": false,
  "sellingPrice": PricingModelInput,
  "change": BillableContractQuantityChangeInput
}
Types
UpdateClientContractInput
Specifies the input required to update a client contract.

Input Field	Description
contract - UpdateContractInput!	
Specifies the contract input.

endDate - String	
Specifies the contract's end date.

Example
{
  "contract": UpdateContractInput,
  "endDate": "xyz789"
}
Types
UpdateClientInput
Specifies input required to update an existing client.

Input Field	Description
accountId - ID!	
The ID of the client who is going to be updated.

name - String	
Specifies the name of the client. Cannot be set to null.

stage - String	
Specifies the stage of the client. Cannot be set to null.

status - String	
Specifies the status of the client.

emailDomains - [String]	
Specifies the list of email domains (for example, acme.com) of the client. These domains will be used to identify the client when receiving emails from the client user. This input must be unique.

accountManager - TechnicianIdentifierInput	
Specifies the account manager of the client.

primaryContact - ClientUserIdentifierInput	
Specifies the primary contact of the client.

secondaryContact - ClientUserIdentifierInput	
Specifies the secondary contact of the client.

hqSite - ClientSiteIdentifierInput	
Specifies the headquarters site of the client.

addTechnicianGroups - [TechnicianGroupIdentifierInput]	
Specifies the list of technician groups to be associated to the client.

deleteTechnicianGroups - [TechnicianGroupIdentifierInput]	
Specifies the list of technician groups to be disassociated to the client.

customFields - JSON	
Specifies the custom fields values for the client. Each entry in the JSON would be key-value. The key will be system generated unique name of the custom field (columnName field of CustomField type). The value for text, paragraph, radio, select, numeric, decimal, date, datetime should be given as a string. The value for checkbox, multi select should be array of string.

For example, the value could be {"udf1text": "value", "udf2mselect": ["value1", "value2"]}

Example
{
  "accountId": "4",
  "name": "Globex Corporation",
  "stage": "Active",
  "status": "Paid",
  "emailDomains": ["acme.com"],
  "accountManager": TechnicianIdentifierInput,
  "primaryContact": ClientUserIdentifierInput,
  "secondaryContact": ClientUserIdentifierInput,
  "hqSite": ClientSiteIdentifierInput,
  "addTechnicianGroups": [TechnicianGroupIdentifierInput],
  "deleteTechnicianGroups": [
    TechnicianGroupIdentifierInput
  ],
  "customFields": {
    "udf1text": "value",
    "udf2date": "2022-05-06",
    "udf3dt": "2022-05-06T10:10:10",
    "udf5mselect": ["value1", "value1"]
  }
}
Types
UpdateClientSiteInput
Specifies the input required to update a site.

Input Field	Description
id - ID!	
The ID of the site.

name - String	
The name of the site.

timezoneCode - String	
Specifies the timezone of the site. The value should be specified in the IANA time zone database, for example, America/New_York.

working24x7 - Boolean	
Specifies whether the site has specific business hours or works 24x7

businessHour - [CreateBusinessHourInput]	
Specifies the business hours of the site if working 24x7 is false.

holidayList - HolidayListIdentifierInput	
Specifies the holiday list of the site.

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

contactNumber - String	
The contact number of the site.

hq - Boolean	
Specifies whether the site is a headquarters. Each client must have exactly one headquarters.

Example
{
  "id": "1223572839",
  "name": "Austin",
  "timezoneCode": "America/Los_Angeles",
  "working24x7": "false",
  "businessHour": [
    {"day": "MONDAY", "start": "09:00", "end": "17:00"},
    {"day": "TUESDAY", "start": "09:00", "end": "17:00"}
  ],
  "holidayList": {"id": "1234332"},
  "line1": "line 1",
  "line2": "line 2",
  "line3": "line 3",
  "city": "Azusa",
  "postalCode": "10005",
  "countryCode": "US",
  "stateCode": "NY",
  "contactNumber": "372017304730",
  "hq": "true"
}
Types
UpdateClientUserAssociationInput
Specifies the input required to update the client user association.

Input Field	Description
id - ID!	
Specifies the ID of the association.

site - ClientSiteIdentifierInput!	
Specifies the site which will be updated.

Example
{
  "id": "4",
  "site": ClientSiteIdentifierInput
}
Types
UpdateClientUserInput
Specifies the input required to update the information of an existing client user ie. requester.

Input Field	Description
userId - ID!	
Specifies ID of the client user whose recored is to be updated.

firstName - String	
Specifies the first name of the client user. Cannot be set to null.

lastName - String	
Specifies the last name of the client user.

email - String	
Specifies the email address of the client user. Cannot be set to null.

contactNumber - String	
Specifies the contact number of the client user. It is recommended to provide the value in the standard format [+][country code][area code][local phone number].

reportingManager - ClientUserIdentifierInput	
Specifies the reporting manager identifier input for the client user.

site - ClientSiteIdentifierInput	
Specifies the site identifier input for the client user. Cannot be set to null.

role - RoleIdentifierInput	
Specifies the application role identifier input for the client user. Cannot be set to null.

customFields - JSON	
Specifies the custom fields values for the client user. Each entry in the JSON would be key-value. The key will be a system-generated, unique name of the custom field (columnName field of CustomField type). The value for text, paragraph, radio, select, numeric, decimal, date, datetime should be given as a string. The value for checkbox, multi-select should be an array of string.

For example, the value could be {"udf1text": "value", "udf2mselect": ["value1", "value2"]}

Example
{
  "userId": "4",
  "firstName": "Ryan",
  "lastName": "Howard",
  "email": "ryan.howard@dundermifflin.com",
  "contactNumber": "+16412349876",
  "reportingManager": ClientUserIdentifierInput,
  "site": ClientSiteIdentifierInput,
  "role": RoleIdentifierInput,
  "customFields": {}
}
Types
UpdateContractInput
Specifies the input required to update a contract.

Input Field	Description
contractId - ID!	
The ID of the contract to be updated.

billableContract - UpdateBillableContractInput	
Specifies the billable contract input.

Example
{
  "contractId": "4",
  "billableContract": UpdateBillableContractInput
}
Types
UpdateHourlyServiceTypeItemInput
Specifies the input required to update a HOURS type SERVICE item.

Input Field	Description
roundUpValue - Int	
Value to which a time spent is rounded up to

Example
{"roundUpValue": 123}
Types
UpdateInvoiceInput
Specifies the input required to update an existing invoice.

Input Field	Description
invoiceId - ID!	
The ID of the invoice going to be updated.

statusEnum - InvoiceStatus	
The status of the invoice.

invoiceDate - String	
The creation date of the invoice.

dueDate - String	
The due date of the invoice

paymentDate - String	
The payment date of the invoice.

paymentMethod - PaymentMethodIdentifierInput	
The payment method of the invoice.

paymentReference - String	
Specifies comments, notes, or references related to a payment, providing additional context or information. The maximum length of the value is 255 characters.

invoicePaymentTerm - PaymentTermIdentifierInput	
The payment term of the invoice.

Example
{
  "invoiceId": "4",
  "statusEnum": "DRAFT",
  "invoiceDate": "xyz789",
  "dueDate": "xyz789",
  "paymentDate": "xyz789",
  "paymentMethod": PaymentMethodIdentifierInput,
  "paymentReference": "abc123",
  "invoicePaymentTerm": PaymentTermIdentifierInput
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

client - ClientIdentifierInput	
Client details that need to be updated

site - ClientSiteIdentifierInput	
Site details that need to be updated

customFields - JSON	
Custom fields that need to be updated

Example
{
  "typeId": "3077519261260693504",
  "itDocId": "8001114136934215681",
  "name": "edited It Doc Record",
  "client": {"accountId": "4567898545678"},
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
  "itemId": 4,
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
UpdateRedeemableServiceBundleInput
Specifies the input required to update a retainer.

Input Field	Description
applicableType - RedeemableBundleApplicableType	
The applicable type of the redeemable bundle.

applicableHours - RedeemableBundleApplicableHours	
The applicable hours of the redeemable bundle.

redeemableQuantity - String	
The quantity of the redeemable bundle.

Example
{
  "applicableType": "INCLUDED_ITEMS",
  "applicableHours": "ALL_HOURS",
  "redeemableQuantity": "1500"
}
Types
UpdateServiceCatalogItemInput
Specifies a input for service catalog item

Input Field	Description
itemId - ID!	
The ID of the service catalog item.

name - String	
Name of the item. must be unique in the list

description - String	
Description of the item which can be used in invoice

category - ServiceCategoryIdentifierInput	
Category under which the item is created.

offerAsWorklogItem - Boolean	
Set to true to offer this item in worklog

taxable - Boolean	
Set to true to apply tax for this item

salesTax - TaxIdentifierInput	
Tax to be set for this item

costPrice - PricingModelInput	
The cost price when item is purchased

sellingPrice - PricingModelInput	
Price at which item is offered to a client

serviceTypeItem - UpdateServiceTypeItemInput	
Details needed for a SERVICE type item

Example
{
  "itemId": "4",
  "name": "Antivirus",
  "description": "Used to protect your computer from viruses",
  "category": ServiceCategoryIdentifierInput,
  "offerAsWorklogItem": false,
  "taxable": true,
  "salesTax": TaxIdentifierInput,
  "costPrice": PricingModelInput,
  "sellingPrice": PricingModelInput,
  "serviceTypeItem": UpdateServiceTypeItemInput
}
Types
UpdateServiceTypeItemInput
Specifies the input required to update a service type item.

Input Field	Description
addBundledItems - [ServiceCatalogItemIdentifierInput!]	
Items to be added under this item, used for a Package or Retainer

deleteBundledItems - [ServiceCatalogItemIdentifierInput!]	
Items to be removed from this item, used for a Package or Retainer

hourlyServiceTypeItem - UpdateHourlyServiceTypeItemInput	
Details needed for a HOURS type SERVICE item

redeemableServiceBundle - UpdateRedeemableServiceBundleInput	
Input for details needed for a Retainer item

Example
{
  "addBundledItems": [ServiceCatalogItemIdentifierInput],
  "deleteBundledItems": [
    ServiceCatalogItemIdentifierInput
  ],
  "hourlyServiceTypeItem": UpdateHourlyServiceTypeItemInput,
  "redeemableServiceBundle": UpdateRedeemableServiceBundleInput
}
Types
UpdateTechnicianInput
Specifies the input required to update the information of an existing technician.

Input Field	Description
userId - ID!	
The ID of the technician who is going to be updated. This input is mandatory.

firstName - String	
The first name of the technician. This input cannot be set to null.

lastName - String	
The last name of the technician.

email - String	
The email address of the technician. This input cannot be set to null.

contactNumber - String	
The contact number of the technician. It is recommended to provide the value in the standard format [+][country code][area code][local phone number].

emailSignature - String	
The email signature of the technician which will be used in email reply.

designation - DesignationIdentifierInput	
Specifies the designation of the technician.

businessFunction - BusinessFunctionIdentifierInput	
Specifies the business function of the technician.

team - TeamIdentifierInput	
Specifies the technician's team.

reportingManager - TechnicianIdentifierInput	
Specifies the reporting manager of the technician.

addGroups - [TechnicianGroupIdentifierInput]	
Specifies the list of technician groups that the technician will be associated with.

deleteGroups - [TechnicianGroupIdentifierInput]	
Specified the list of technician groups from which the technician will be disassociated.

role - RoleIdentifierInput	
Specifies the application role of the technician. This input cannot be set to null.

Example
{
  "userId": "4",
  "firstName": "Jason",
  "lastName": "Wheeler",
  "email": "jason.wheeler@acme.com",
  "contactNumber": "212-504-4115",
  "emailSignature": "abc123",
  "designation": DesignationIdentifierInput,
  "businessFunction": BusinessFunctionIdentifierInput,
  "team": TeamIdentifierInput,
  "reportingManager": TechnicianIdentifierInput,
  "addGroups": [TechnicianGroupIdentifierInput],
  "deleteGroups": [TechnicianGroupIdentifierInput],
  "role": RoleIdentifierInput
}
Types
UpdateTicketInput
Specifies the input required to update an existing ticket.

Input Field	Description
ticketId - ID!	
The ID of the ticket going to be updated.

subject - String	
Specifies the subject of the ticket.

client - ClientIdentifierInput	
Specifies the client to whom the ticket is associated. Cannot be set to null.

site - ClientSiteIdentifierInput	
Specifies the site to which the ticket is associated. Cannot be set to null.

requester - ClientUserIdentifierInput	
Specifies the requester for whom the ticket is created.

techGroup - TechnicianGroupIdentifierInput	
Specifies the technician group to which the ticket is assigned.

technician - TechnicianIdentifierInput	
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

requestType - String	
Specifies the type of the ticket.

source - TicketSource	
Specifies the creation source of the ticket. Cannot be set to null.

customFields - JSON	
Specifies the custom fields values for the client. Each entry in the JSON would be key-value. The key will be a system-generated, unique name of the custom field (columnName field of CustomField type). The value for text, paragraph, radio, select, numeric, decimal, date, datetime should be given as a string. The value for checkbox, multi-select should be an array of string.

For example, the value could be {"udf1text": "value", "udf2mselect": ["value1", "value2"]}

addAdditionalRequester - [ClientUserIdentifierInput]	
Specifies the additional requesters to be added.

deleteAdditionalRequester - [ClientUserIdentifierInput]	
Specifies the additional requesters to be deleted.

addFollowers - [TechnicianIdentifierInput]	
Specifies the followers to be added.

deleteFollowers - [TechnicianIdentifierInput]	
Specifies the followers to be deleted.

suppressCloseNotification - Boolean	
Indicates whether the close notification has to be suppressed while closing the ticket

firstResponseTime - String	
The first response time of the ticket.

resolutionTime - String	
The resolution time of the ticket.

Example
{
  "ticketId": 4,
  "subject": "Help! Internet is not working!",
  "client": ClientIdentifierInput,
  "site": ClientSiteIdentifierInput,
  "requester": ClientUserIdentifierInput,
  "techGroup": TechnicianGroupIdentifierInput,
  "technician": TechnicianIdentifierInput,
  "status": "New",
  "priority": "xyz789",
  "impact": "High",
  "urgency": "High",
  "category": "Network",
  "subcategory": "Wireless",
  "cause": "Component issue",
  "subcause": "Hardware Issue",
  "resolutionCode": "Permanent Fix",
  "requestType": "abc123",
  "source": "FORM",
  "customFields": {
    "udf1text": "value",
    "udf2date": "2022-05-06",
    "udf3dt": "2022-05-06T10:10:10",
    "udf5mselect": ["value1", "value1"]
  },
  "addAdditionalRequester": [ClientUserIdentifierInput],
  "deleteAdditionalRequester": [
    ClientUserIdentifierInput
  ],
  "addFollowers": [TechnicianIdentifierInput],
  "deleteFollowers": [TechnicianIdentifierInput],
  "suppressCloseNotification": true,
  "firstResponseTime": "abc123",
  "resolutionTime": "abc123"
}
Types
UpdateWorklogEntryInput
Input Field	Description
itemId - ID!	
The ID of the worklog item.

serviceItem - ServiceItemIdentifierInput	
Specifies the service item.

billable - Boolean	
Denotes whether the service item is billable or not.

afterHours - Boolean	
Denotes whether the service is provided after the business hours.

qty - String	
The number of offered units/hours. The unit is hrs for HOURS type item.

unitPrice - String	
The unit price of the worklog item.

billDateTime - String	
The date and time that the worklog was added.

notes - String	
The notes added to the worklog.

Example
{
  "itemId": 4,
  "serviceItem": ServiceItemIdentifierInput,
  "billable": false,
  "afterHours": false,
  "qty": "xyz789",
  "unitPrice": "abc123",
  "billDateTime": "xyz789",
  "notes": "xyz789"
}
Types
UpdatedAsset
Specifies the details about the updated asset

Field Name	Description
assetId - ID	ID of the asset
name - String!	Name of the asset
assetClass - JSON!	Asset class details of the asset
client - JSON!	Client details of the asset
site - JSON!	Site details of the asset
requester - JSON!	The requester of the asset
customFields - JSON	Custom field details of the asset
Example
{
  "assetId": "9001114136934215681",
  "name": "DESKTOP-I9QFDTE",
  "assetClass": {"classId": "1", "name": "Windows Machine"},
  "client": {
    "accountId": "7928838372746166998",
    "name": "Acme Management Pvt. Ltd."
  },
  "site": {"id": "7928838372746169876", "name": "Austin"},
  "requester": {"userId": "5928838372746169876", "name": "John Williams"},
  "customFields": {
    "udf1text": "value",
    "udf2date": "2022-05-06",
    "udf3dt": "2022-05-06T10:10:10",
    "udf5mselect": ["value1", "value1"]
  }
}
Types
Urgency
The ticket's urgency.

Field Name	Description
id - ID!	The ID of the urgency.
name - String!	The name of the urgency.
Example
{"id": 4, "name": "High"}
Types
UserIdentifierInput
Specifies the identifier input for the technician or client user.

Input Field	Description
userId - ID!	
The ID of the user.

Example
{"userId": "4"}
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
Types
WorkState
The system defined constants used to identify the task/project statuses programmatically.

Enum Value	Description
PLANNED

Denotes that the work is planned.
PROGRESS

Denotes that the work is in progress.
BLOCKED

Denotes that the work is blocked/on hold.
COMPLETED

Denotes that the work is completed.
CANCELLED

Denotes that the work is cancelled.
Example
"PLANNED"
Types
WorkStatus
The work status. It is used to define the status for task and project.

Field Name	Description
statusId - ID!	The ID of the status.
name - String!	The name of the status.
state - WorkState	The system defined constant used to identify the status programmatically.
Example
{
  "statusId": "4",
  "name": "Planned",
  "state": "PLANNED"
}
Types
WorklogEntry
Field Name	Description
itemId - ID!	The ID of the worklog item.
status - OfferedItemAuditStatus!	The invoicing status of the worklog item.
serviceItem - JSON!	The offered service item. The actual type of this field is ServiceItem. Returns itemId and name fields as JSON.
billable - Boolean!	Denotes whether the service item is billable or not.
afterHours - Boolean!	Denotes whether the service is provided after business hours.
qty - String!	The number of offered units/hours. The unit is hrs for HOURS type item.
unitPrice - String	The unit price of the worklog item.
billDateTime - String!	The datetime of the worklog.
technician - JSON!	The technician who logged the work. The actual type of this field is Technician. Returns userId and name fields as JSON.
notes - String	The notes added to the worklog.
workItem - JSON!	The WorkItem under which the worklog is created.
Example
{
  "itemId": 4,
  "status": "PENDING",
  "serviceItem": {},
  "billable": true,
  "afterHours": false,
  "qty": "abc123",
  "unitPrice": "abc123",
  "billDateTime": "abc123",
  "technician": {},
  "notes": "abc123",
  "workItem": {}
}
Types
WorklogEntryIdentifier
Specifies the identifier input for the worklog.

Input Field	Description
itemId - ID!	
The ID of the worklog.

Example
{"itemId": "4"}
Types
WorklogEntryList
The response payload for a list of worklog entries

Field Name	Description
entries - [WorklogEntry]	The list of worklog entries.
listInfo - ListInfo	The details about the list
Example
{
  "entries": [WorklogEntry],
  "listInfo": ListInfo
}
Documentation by SuperOps