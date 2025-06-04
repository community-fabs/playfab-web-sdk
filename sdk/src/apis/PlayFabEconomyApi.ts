import type { EmptyResponse } from "../types/PlayFab";
import type {
  AddInventoryItemsRequest,
  CompleteVersionedCatalogUploadRequest,
  CreateDraftItemRequest,
  CreateUploadUrlsRequest,
  CreateVersionedCatalogUploadURLRequest,
  CreateViewRequest,
  DeleteEntityItemReviewsRequest,
  DeleteInventoryCollectionRequest,
  DeleteInventoryItemsRequest,
  DeleteItemRequest,
  DeleteVersionedCatalogRequest,
  DeleteViewRequest,
  ExecuteInventoryOperationsRequest,
  ExecuteTransferOperationsRequest,
  ExportVersionedCatalogRequest,
  GetCatalogConfigRequest,
  GetDraftItemRequest,
  GetDraftItemsRequest,
  GetEntityDraftItemsRequest,
  GetEntityItemReviewRequest,
  GetInventoryCollectionIdsRequest,
  GetInventoryItemsRequest,
  GetInventoryOperationStatusRequest,
  GetItemRequest,
  GetItemContainersRequest,
  GetItemModerationStateRequest,
  GetItemPublishStatusRequest,
  GetItemReviewsRequest,
  GetItemReviewSummaryRequest,
  GetItemsRequest,
  GetMicrosoftStoreAccessTokensRequest,
  GetTransactionHistoryRequest,
  GetVersionedCatalogItemRequest,
  GetVersionedCatalogUploadStatusRequest,
  GetViewRequest,
  GetViewsRequest,
  ListVersionedCatalogsRequest,
  PublishDraftItemRequest,
  PurchaseInventoryItemsRequest,
  RedeemAppleAppStoreInventoryItemsRequest,
  RedeemGooglePlayInventoryItemsRequest,
  RedeemMicrosoftStoreInventoryItemsRequest,
  RedeemNintendoEShopInventoryItemsRequest,
  RedeemPlayStationStoreInventoryItemsRequest,
  RedeemSteamInventoryItemsRequest,
  ReportItemRequest,
  ReportItemReviewRequest,
  ReviewItemRequest,
  SearchItemsRequest,
  SetItemModerationStateRequest,
  SubmitItemReviewVoteRequest,
  SubtractInventoryItemsRequest,
  TakedownItemReviewsRequest,
  TransferInventoryItemsRequest,
  UpdateCatalogConfigRequest,
  UpdateDraftItemRequest,
  UpdateInventoryItemsRequest,
  UpdateViewRequest,
  AddInventoryItemsResponse,
  CompleteVersionedCatalogUploadResponse,
  CreateDraftItemResponse,
  CreateUploadUrlsResponse,
  CreateVersionedCatalogUploadURLResponse,
  CreateViewResponse,
  DeleteEntityItemReviewsResponse,
  DeleteInventoryCollectionResponse,
  DeleteInventoryItemsResponse,
  DeleteItemResponse,
  DeleteViewResponse,
  ExecuteInventoryOperationsResponse,
  ExecuteTransferOperationsResponse,
  IActionResult,
  GetCatalogConfigResponse,
  GetDraftItemResponse,
  GetDraftItemsResponse,
  GetEntityDraftItemsResponse,
  GetEntityItemReviewResponse,
  GetInventoryCollectionIdsResponse,
  GetInventoryItemsResponse,
  GetInventoryOperationStatusResponse,
  GetItemResponse,
  GetItemContainersResponse,
  GetItemModerationStateResponse,
  GetItemPublishStatusResponse,
  GetItemReviewsResponse,
  GetItemReviewSummaryResponse,
  GetItemsResponse,
  GetMicrosoftStoreAccessTokensResponse,
  GetTransactionHistoryResponse,
  GetVersionedCatalogItemResponse,
  GetVersionedCatalogUploadStatusResponse,
  GetViewResponse,
  GetViewsResponse,
  ListVersionedCatalogsResponse,
  PublishDraftItemResponse,
  PurchaseInventoryItemsResponse,
  RedeemAppleAppStoreInventoryItemsResponse,
  RedeemGooglePlayInventoryItemsResponse,
  RedeemMicrosoftStoreInventoryItemsResponse,
  RedeemNintendoEShopInventoryItemsResponse,
  RedeemPlayStationStoreInventoryItemsResponse,
  RedeemSteamInventoryItemsResponse,
  ReportItemResponse,
  ReportItemReviewResponse,
  ReviewItemResponse,
  SearchItemsResponse,
  SetItemModerationStateResponse,
  SubmitItemReviewVoteResponse,
  SubtractInventoryItemsResponse,
  TakedownItemReviewsResponse,
  TransferInventoryItemsResponse,
  UpdateCatalogConfigResponse,
  UpdateDraftItemResponse,
  UpdateInventoryItemsResponse,
  UpdateViewResponse,
} from "../types/PlayFabEconomyApi";
import { PlayFabCommon } from "../PlayFabCommon";

export default class PlayFabEconomyApi extends PlayFabCommon {

  /**
   * Add inventory items. Up to 10,000 stacks of items can be added to a single inventory collection. Stack size is uncapped.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/inventory/inventory/addinventoryitems Microsoft Documentation}
   * @example
   * await inventoryClient.AddInventoryItems({
   *   "Item": {
   *     "Id": "11111111-1111-1111-1111-111111111111"
   *   },
   *   "Amount": 3,
   *   "ReturnInventory": false
   * });
   */
  AddInventoryItems (request: AddInventoryItemsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<AddInventoryItemsResponse>("/Inventory/AddInventoryItems", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Given an existing Versioned Catalog, begin the process of validating the uploaded JSON and creating the described items.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/versionedcatalog/versionedcatalog/completeversionedcatalogupload Microsoft Documentation}
   * @example
   * await versionedcatalogClient.CompleteVersionedCatalogUpload({});
   */
  CompleteVersionedCatalogUpload (request: CompleteVersionedCatalogUploadRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CompleteVersionedCatalogUploadResponse>("/VersionedCatalog/CompleteVersionedCatalogUpload", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Creates a new item in the working catalog using provided metadata. Note: SAS tokens provided are valid for 1 hour.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/catalog/catalog/createdraftitem Microsoft Documentation}
   * @example
   * await catalogClient.CreateDraftItem({
   *   "Item": {
   *     "Type": "ugc",
   *     "Title": {
   *       "NEUTRAL": "Neutral title",
   *       "en-US": "US English title"
   *     },
   *     "Description": {
   *       "NEUTRAL": "Neutral description",
   *       "en-US": "US English description"
   *     },
   *     "Keywords": {
   *       "NEUTRAL": {
   *         "Values": [
   *           "Keyword_1",
   *           "Keyword_2"
   *         ]
   *       }
   *     },
   *     "ContentType": "example item",
   *     "CreatorEntity": {
   *       "Id": "someId",
   *       "Type": "title_player_account",
   *       "TypeString": "title_player_account"
   *     },
   *     "IsHidden": false,
   *     "Tags": [
   *       "pirates",
   *       "holiday"
   *     ],
   *     "DisplayVersion": "1.0.0",
   *     "CreationDate": "2018-08-17T22:32:10.472Z",
   *     "Contents": [
   *       {
   *         "Id": "00000000-0000-0000-0000-000000000001",
   *         "Url": "https://endpoint.blob.core.windows.net/some-identifier-private/00000000-0000-0000-0000-000000000001/textures.zip",
   *         "MaxClientVersion": "2.4.1",
   *         "MinClientVersion": "2.0.0"
   *       }
   *     ],
   *     "Images": [
   *       {
   *         "Id": "00000000-0000-0000-0000-000000000003",
   *         "Type": "Thumbnail",
   *         "Url": "https://endpoint.blob.core.windows.net/some-identifier-private/00000000-0000-0000-0000-000000000003/splashscreen_thumb.jpg"
   *       }
   *     ],
   *     "DisplayProperties": {
   *       "mapDetails": {
   *         "mapType": "desertIsland",
   *         "gameMode": "capture",
   *         "maxPlayers": 16
   *       },
   *       "averageMatchLengthInSeconds": 947
   *     },
   *     "DefaultStackId": "Static_Default_Stack_Id"
   *   },
   *   "Publish": false
   * });
   */
  CreateDraftItem (request: CreateDraftItemRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateDraftItemResponse>("/Catalog/CreateDraftItem", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Creates one or more upload URLs which can be used by the client to upload raw file data. Content URls and uploaded
   * content will be garbage collected after 24 hours if not attached to a draft or published item. Detailed pricing info
   * around uploading content can be found here:
   * https://learn.microsoft.com/en-us/gaming/playfab/features/pricing/meters/catalog-meters
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/catalog/catalog/createuploadurls Microsoft Documentation}
   * @example
   * await catalogClient.CreateUploadUrls({
   *   "Files": [
   *     {
   *       "FileName": "textures.zip"
   *     },
   *     {
   *       "FileName": "sprites.png"
   *     }
   *   ]
   * });
   */
  CreateUploadUrls (request: CreateUploadUrlsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateUploadUrlsResponse>("/Catalog/CreateUploadUrls", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Given an existing Catalog Version, create an URL location where titles can upload a JSON schema of a catalog, if the
   * catalog is empty.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/versionedcatalog/versionedcatalog/createversionedcataloguploadurl Microsoft Documentation}
   * @example
   * await versionedcatalogClient.CreateVersionedCatalogUploadURL({});
   */
  CreateVersionedCatalogUploadURL (request: CreateVersionedCatalogUploadURLRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateVersionedCatalogUploadURLResponse>("/VersionedCatalog/CreateVersionedCatalogUploadURL", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Creates a new view in the catalog using provided metadata.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/catalog/catalog/createview Microsoft Documentation}
   * @example
   * await catalogClient.CreateView({
   *   "View": {
   *     "FriendlyId": "exampleView",
   *     "IsTitleView": false,
   *     "Count": 10,
   *     "Filter": "tags/any(t:t eq 'desert') and contentType eq 'map'",
   *     "Language": "en-US",
   *     "FileFormat": "JsonLines"
   *   }
   * });
   */
  CreateView (request: CreateViewRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateViewResponse>("/Catalog/CreateView", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Deletes all reviews, helpfulness votes, and ratings submitted by the entity specified.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/catalog/catalog/deleteentityitemreviews Microsoft Documentation}
   * @example
   * await catalogClient.DeleteEntityItemReviews({
   *   "Entity": {
   *     "Id": "ABC123",
   *     "Type": "title_player_account",
   *     "TypeString": "title_player_account"
   *   }
   * });
   */
  DeleteEntityItemReviews (request: DeleteEntityItemReviewsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeleteEntityItemReviewsResponse>("/Catalog/DeleteEntityItemReviews", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Delete an Inventory Collection. More information about Inventory Collections can be found here:
   * https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/inventory/collections
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/inventory/inventory/deleteinventorycollection Microsoft Documentation}
   * @example
   * await inventoryClient.DeleteInventoryCollection({
   *   "CollectionId": "backpack"
   * });
   */
  DeleteInventoryCollection (request: DeleteInventoryCollectionRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeleteInventoryCollectionResponse>("/Inventory/DeleteInventoryCollection", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Delete inventory items
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/inventory/inventory/deleteinventoryitems Microsoft Documentation}
   * @example
   * await inventoryClient.DeleteInventoryItems({
   *   "Item": {
   *     "Id": "11111111-1111-1111-1111-111111111111"
   *   }
   * });
   */
  DeleteInventoryItems (request: DeleteInventoryItemsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeleteInventoryItemsResponse>("/Inventory/DeleteInventoryItems", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Removes an item from working catalog and all published versions from the public catalog.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/catalog/catalog/deleteitem Microsoft Documentation}
   * @example
   * await catalogClient.DeleteItem({
   *   "Id": "dddddddd-dddd-dddd-dddd-dddddddddddd"
   * });
   */
  DeleteItem (request: DeleteItemRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeleteItemResponse>("/Catalog/DeleteItem", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Delete versioned catalog.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/versionedcatalog/versionedcatalog/deleteversionedcatalog Microsoft Documentation}
   * @example
   * await versionedcatalogClient.DeleteVersionedCatalog({});
   */
  DeleteVersionedCatalog (request: DeleteVersionedCatalogRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/VersionedCatalog/DeleteVersionedCatalog", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Deletes a catalog view and the associated blob.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/catalog/catalog/deleteview Microsoft Documentation}
   * @example
   * await catalogClient.DeleteView({
   *   "Id": "dddddddd-dddd-dddd-dddd-dddddddddddd"
   * });
   */
  DeleteView (request: DeleteViewRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeleteViewResponse>("/Catalog/DeleteView", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Execute a list of Inventory Operations. A maximum list of 50 operations can be performed by a single request. There is
   * also a limit to 300 items that can be modified/added in a single request. For example, adding a bundle with 50 items
   * counts as 50 items modified. All operations must be done within a single inventory collection. This API has a reduced
   * RPS compared to an individual inventory operation with Player Entities limited to 60 requests in 90 seconds.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/inventory/inventory/executeinventoryoperations Microsoft Documentation}
   * @example
   * await inventoryClient.ExecuteInventoryOperations({
   *   "Operations": [
   *     {
   *       "Add": {
   *         "Item": {
   *           "Id": "11111111-1111-1111-1111-111111111111"
   *         },
   *         "Amount": 3
   *       }
   *     },
   *     {
   *       "Subtract": {
   *         "Item": {
   *           "Id": "11111111-1111-1111-1111-111111111111"
   *         },
   *         "Amount": 3,
   *         "DeleteEmptyStacks": false
   *       }
   *     }
   *   ]
   * });
   */
  ExecuteInventoryOperations (request: ExecuteInventoryOperationsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ExecuteInventoryOperationsResponse>("/Inventory/ExecuteInventoryOperations", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Transfer a list of inventory items. A maximum list of 50 operations can be performed by a single request. When the
   * response code is 202, one or more operations did not complete within the timeframe of the request. You can identify the
   * pending operations by looking for OperationStatus = 'InProgress'. You can check on the operation status at anytime
   * within 1 day of the request by passing the TransactionToken to the GetInventoryOperationStatus API.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/inventory/inventory/executetransferoperations Microsoft Documentation}
   * @example
   * await inventoryClient.ExecuteTransferOperations({
   *   "Operations": [
   *     {
   *       "GivingItem": {
   *         "Id": "11111111-1111-1111-1111-111111111111",
   *         "StackId": "default"
   *       },
   *       "ReceivingItem": {
   *         "Id": "11111111-1111-1111-1111-111111111111",
   *         "StackId": "default"
   *       },
   *       "Amount": 1,
   *       "DeleteEmptyStacks": false
   *     }
   *   ],
   *   "GivingEntity": {
   *     "Id": "someId1",
   *     "Type": "title_player_account",
   *     "TypeString": "title_player_account"
   *   },
   *   "ReceivingEntity": {
   *     "Id": "someId2",
   *     "Type": "title_player_account",
   *     "TypeString": "title_player_account"
   *   },
   *   "GivingCollectionId": "default",
   *   "ReceivingCollectionId": "backpack"
   * });
   */
  ExecuteTransferOperations (request: ExecuteTransferOperationsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ExecuteTransferOperationsResponse>("/Inventory/ExecuteTransferOperations", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Export versioned catalog.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/versionedcatalog/versionedcatalog/exportversionedcatalog Microsoft Documentation}
   * @example
   * await versionedcatalogClient.ExportVersionedCatalog({});
   */
  ExportVersionedCatalog (request: ExportVersionedCatalogRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<IActionResult>("/VersionedCatalog/ExportVersionedCatalog", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets the configuration for the catalog. Only Title Entities can call this API. There is a limit of 100 requests in 10
   * seconds for this API. More information about the Catalog Config can be found here:
   * https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/settings
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/catalog/catalog/getcatalogconfig Microsoft Documentation}
   * @example
   * await catalogClient.GetCatalogConfig({});
   */
  GetCatalogConfig (request: GetCatalogConfigRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetCatalogConfigResponse>("/Catalog/GetCatalogConfig", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Retrieves an item from the working catalog. This item represents the current working state of the item. GetDraftItem
   * does not work off a cache of the Catalog and should be used when trying to get recent item updates. However, please note
   * that item references data is cached and may take a few moments for changes to propagate. Note: SAS tokens provided are
   * valid for 1 hour.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/catalog/catalog/getdraftitem Microsoft Documentation}
   * @example
   * await catalogClient.GetDraftItem({
   *   "Id": "dddddddd-dddd-dddd-dddd-dddddddddddd"
   * });
   */
  GetDraftItem (request: GetDraftItemRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetDraftItemResponse>("/Catalog/GetDraftItem", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Retrieves a paginated list of the items from the draft catalog. Up to 50 IDs can be retrieved in a single request.
   * GetDraftItems does not work off a cache of the Catalog and should be used when trying to get recent item updates. Note:
   * SAS tokens provided are valid for 1 hour.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/catalog/catalog/getdraftitems Microsoft Documentation}
   * @example
   * await catalogClient.GetDraftItems({
   *   "Ids": [
   *     "dddddddd-dddd-dddd-dddd-dddddddddddd",
   *     "eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee"
   *   ]
   * });
   */
  GetDraftItems (request: GetDraftItemsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetDraftItemsResponse>("/Catalog/GetDraftItems", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Retrieves a paginated list of the items from the draft catalog created by the Entity. Up to 50 items can be returned at
   * once. You can use continuation tokens to paginate through results that return greater than the limit.
   * GetEntityDraftItems does not work off a cache of the Catalog and should be used when trying to get recent item updates.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/catalog/catalog/getentitydraftitems Microsoft Documentation}
   * @example
   * await catalogClient.GetEntityDraftItems({
   *   "Count": 2,
   *   "Entity": {
   *     "Id": "someId",
   *     "Type": "title_player_account",
   *     "TypeString": "title_player_account"
   *   }
   * });
   */
  GetEntityDraftItems (request: GetEntityDraftItemsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetEntityDraftItemsResponse>("/Catalog/GetEntityDraftItems", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets the submitted review for the specified item by the authenticated entity. Individual ratings and reviews data update
   * in near real time with delays within a few seconds.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/catalog/catalog/getentityitemreview Microsoft Documentation}
   * @example
   * await catalogClient.GetEntityItemReview({
   *   "Id": "dddddddd-dddd-dddd-dddd-dddddddddddd"
   * });
   */
  GetEntityItemReview (request: GetEntityItemReviewRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetEntityItemReviewResponse>("/Catalog/GetEntityItemReview", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Get Inventory Collection Ids. Up to 50 Ids can be returned at once (or 250 with response compression enabled). You can
   * use continuation tokens to paginate through results that return greater than the limit. It can take a few seconds for
   * new collection Ids to show up.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/inventory/inventory/getinventorycollectionids Microsoft Documentation}
   * @example
   * await inventoryClient.GetInventoryCollectionIds({
   *   "Count": 5
   * });
   */
  GetInventoryCollectionIds (request: GetInventoryCollectionIdsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetInventoryCollectionIdsResponse>("/Inventory/GetInventoryCollectionIds", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Get current inventory items.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/inventory/inventory/getinventoryitems Microsoft Documentation}
   * @example
   * await inventoryClient.GetInventoryItems({
   *   "Count": 5
   * });
   */
  GetInventoryItems (request: GetInventoryItemsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetInventoryItemsResponse>("/Inventory/GetInventoryItems", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Get the status of an inventory operation using an OperationToken. You can check on the operation status at anytime
   * within 1 day of the request by passing the TransactionToken to the this API.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/inventory/inventory/getinventoryoperationstatus Microsoft Documentation}
   * @example
   * await inventoryClient.GetInventoryOperationStatus({});
   */
  GetInventoryOperationStatus (request: GetInventoryOperationStatusRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetInventoryOperationStatusResponse>("/Inventory/GetInventoryOperationStatus", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Retrieves an item from the public catalog. GetItem does not work off a cache of the Catalog and should be used when
   * trying to get recent item updates. However, please note that item references data is cached and may take a few moments
   * for changes to propagate.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/catalog/catalog/getitem Microsoft Documentation}
   * @example
   * await catalogClient.GetItem({
   *   "Id": "dddddddd-dddd-dddd-dddd-dddddddddddd"
   * });
   */
  GetItem (request: GetItemRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetItemResponse>("/Catalog/GetItem", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Search for a given item and return a set of bundles and stores containing the item. Up to 50 items can be returned at
   * once. You can use continuation tokens to paginate through results that return greater than the limit. This API is
   * intended for tooling/automation scenarios and has a reduced RPS with Player Entities limited to 30 requests in 300
   * seconds and Title Entities limited to 100 requests in 10 seconds.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/catalog/catalog/getitemcontainers Microsoft Documentation}
   * @example
   * await catalogClient.GetItemContainers({
   *   "Count": 5,
   *   "Id": "dddddddd-dddd-dddd-dddd-dddddddddddd"
   * });
   */
  GetItemContainers (request: GetItemContainersRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetItemContainersResponse>("/Catalog/GetItemContainers", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets the moderation state for an item, including the concern category and string reason. More information about
   * moderation states can be found here: https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/ugc/moderation
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/catalog/catalog/getitemmoderationstate Microsoft Documentation}
   * @example
   * await catalogClient.GetItemModerationState({
   *   "Id": "dddddddd-dddd-dddd-dddd-dddddddddddd"
   * });
   */
  GetItemModerationState (request: GetItemModerationStateRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetItemModerationStateResponse>("/Catalog/GetItemModerationState", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets the status of a publish of an item.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/catalog/catalog/getitempublishstatus Microsoft Documentation}
   * @example
   * await catalogClient.GetItemPublishStatus({
   *   "Id": "dddddddd-dddd-dddd-dddd-dddddddddddd"
   * });
   */
  GetItemPublishStatus (request: GetItemPublishStatusRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetItemPublishStatusResponse>("/Catalog/GetItemPublishStatus", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Get a paginated set of reviews associated with the specified item. Individual ratings and reviews data update in near
   * real time with delays within a few seconds.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/catalog/catalog/getitemreviews Microsoft Documentation}
   * @example
   * await catalogClient.GetItemReviews({
   *   "Count": 2,
   *   "Id": "dddddddd-dddd-dddd-dddd-dddddddddddd"
   * });
   */
  GetItemReviews (request: GetItemReviewsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetItemReviewsResponse>("/Catalog/GetItemReviews", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Get a summary of all ratings and reviews associated with the specified item. Summary ratings data is cached with update
   * data coming within 15 minutes.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/catalog/catalog/getitemreviewsummary Microsoft Documentation}
   * @example
   * await catalogClient.GetItemReviewSummary({
   *   "Id": "dddddddd-dddd-dddd-dddd-dddddddddddd"
   * });
   */
  GetItemReviewSummary (request: GetItemReviewSummaryRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetItemReviewSummaryResponse>("/Catalog/GetItemReviewSummary", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Retrieves items from the public catalog. Up to 50 items can be returned at once. GetItems does not work off a cache of
   * the Catalog and should be used when trying to get recent item updates. However, please note that item references data is
   * cached and may take a few moments for changes to propagate.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/catalog/catalog/getitems Microsoft Documentation}
   * @example
   * await catalogClient.GetItems({
   *   "Ids": [
   *     "dddddddd-dddd-dddd-dddd-dddddddddddd",
   *     "eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee"
   *   ]
   * });
   */
  GetItems (request: GetItemsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetItemsResponse>("/Catalog/GetItems", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets the access tokens.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/inventory/inventory/getmicrosoftstoreaccesstokens Microsoft Documentation}
   * @example
   * await inventoryClient.GetMicrosoftStoreAccessTokens({});
   */
  GetMicrosoftStoreAccessTokens (request: GetMicrosoftStoreAccessTokensRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetMicrosoftStoreAccessTokensResponse>("/Inventory/GetMicrosoftStoreAccessTokens", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Get transaction history for a player. Up to 250 Events can be returned at once. You can use continuation tokens to
   * paginate through results that return greater than the limit. Getting transaction history has a lower RPS limit than
   * getting a Player's inventory with Player Entities having a limit of 30 requests in 300 seconds.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/inventory/inventory/gettransactionhistory Microsoft Documentation}
   * @example
   * await inventoryClient.GetTransactionHistory({
   *   "Count": 10,
   *   "CollectionId": "default"
   * });
   */
  GetTransactionHistory (request: GetTransactionHistoryRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetTransactionHistoryResponse>("/Inventory/GetTransactionHistory", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Get versioned catalog item.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/versionedcatalog/versionedcatalog/getversionedcatalogitem Microsoft Documentation}
   * @example
   * await versionedcatalogClient.GetVersionedCatalogItem({});
   */
  GetVersionedCatalogItem (request: GetVersionedCatalogItemRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetVersionedCatalogItemResponse>("/VersionedCatalog/GetVersionedCatalogItem", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Returns the current status of a Versioned Catalog upload.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/versionedcatalog/versionedcatalog/getversionedcataloguploadstatus Microsoft Documentation}
   * @example
   * await versionedcatalogClient.GetVersionedCatalogUploadStatus({});
   */
  GetVersionedCatalogUploadStatus (request: GetVersionedCatalogUploadStatusRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetVersionedCatalogUploadStatusResponse>("/VersionedCatalog/GetVersionedCatalogUploadStatus", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Retrieves a specific catalog view.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/catalog/catalog/getview Microsoft Documentation}
   * @example
   * await catalogClient.GetView({
   *   "Id": "dddddddd-dddd-dddd-dddd-dddddddddddd"
   * });
   */
  GetView (request: GetViewRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetViewResponse>("/Catalog/GetView", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Retrieves a paginated list of the catalog views.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/catalog/catalog/getviews Microsoft Documentation}
   * @example
   * await catalogClient.GetViews({
   *   "Count": 5,
   *   "Entity": {
   *     "Id": "someId",
   *     "Type": "title_player_account",
   *     "TypeString": "title_player_account"
   *   }
   * });
   */
  GetViews (request: GetViewsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetViewsResponse>("/Catalog/GetViews", request, "X-EntityToken", extraHeaders);
  }

  /**
   * List versioned catalogs.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/versionedcatalog/versionedcatalog/listversionedcatalogs Microsoft Documentation}
   * @example
   * await versionedcatalogClient.ListVersionedCatalogs({});
   */
  ListVersionedCatalogs (request: ListVersionedCatalogsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListVersionedCatalogsResponse>("/VersionedCatalog/ListVersionedCatalogs", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Initiates a publish of an item from the working catalog to the public catalog. You can use the GetItemPublishStatus API
   * to track the state of the item publish.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/catalog/catalog/publishdraftitem Microsoft Documentation}
   * @example
   * await catalogClient.PublishDraftItem({
   *   "Id": "dddddddd-dddd-dddd-dddd-dddddddddddd"
   * });
   */
  PublishDraftItem (request: PublishDraftItemRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<PublishDraftItemResponse>("/Catalog/PublishDraftItem", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Purchase an item or bundle. Up to 10,000 stacks of items can be added to a single inventory collection. Stack size is
   * uncapped.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/inventory/inventory/purchaseinventoryitems Microsoft Documentation}
   * @example
   * await inventoryClient.PurchaseInventoryItems({
   *   "Item": {
   *     "Id": "11111111-1111-1111-1111-111111111111"
   *   },
   *   "Amount": 1,
   *   "PriceAmounts": [
   *     {
   *       "ItemId": "cccccccc-cccc-cccc-cccc-cccccccccccc",
   *       "Amount": 15
   *     }
   *   ],
   *   "DeleteEmptyStacks": false
   * });
   */
  PurchaseInventoryItems (request: PurchaseInventoryItemsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<PurchaseInventoryItemsResponse>("/Inventory/PurchaseInventoryItems", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Redeem items.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/inventory/inventory/redeemappleappstoreinventoryitems Microsoft Documentation}
   * @example
   * await inventoryClient.RedeemAppleAppStoreInventoryItems({
   *   "Receipt": "receipt"
   * });
   */
  RedeemAppleAppStoreInventoryItems (request: RedeemAppleAppStoreInventoryItemsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<RedeemAppleAppStoreInventoryItemsResponse>("/Inventory/RedeemAppleAppStoreInventoryItems", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Redeem items.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/inventory/inventory/redeemgoogleplayinventoryitems Microsoft Documentation}
   * @example
   * await inventoryClient.RedeemGooglePlayInventoryItems({
   *   "Purchases": [
   *     {
   *       "ProductId": "productId",
   *       "Token": "token"
   *     }
   *   ]
   * });
   */
  RedeemGooglePlayInventoryItems (request: RedeemGooglePlayInventoryItemsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<RedeemGooglePlayInventoryItemsResponse>("/Inventory/RedeemGooglePlayInventoryItems", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Redeem items.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/inventory/inventory/redeemmicrosoftstoreinventoryitems Microsoft Documentation}
   * @example
   * await inventoryClient.RedeemMicrosoftStoreInventoryItems({
   *   "CollectionsIdKey": "collectionsIdKey"
   * });
   */
  RedeemMicrosoftStoreInventoryItems (request: RedeemMicrosoftStoreInventoryItemsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<RedeemMicrosoftStoreInventoryItemsResponse>("/Inventory/RedeemMicrosoftStoreInventoryItems", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Redeem items.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/inventory/inventory/redeemnintendoeshopinventoryitems Microsoft Documentation}
   * @example
   * await inventoryClient.RedeemNintendoEShopInventoryItems({
   *   "NintendoServiceAccountIdToken": "nsaIdToken"
   * });
   */
  RedeemNintendoEShopInventoryItems (request: RedeemNintendoEShopInventoryItemsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<RedeemNintendoEShopInventoryItemsResponse>("/Inventory/RedeemNintendoEShopInventoryItems", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Redeem items.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/inventory/inventory/redeemplaystationstoreinventoryitems Microsoft Documentation}
   * @example
   * await inventoryClient.RedeemPlayStationStoreInventoryItems({
   *   "AuthorizationCode": "authorizationCode",
   *   "RedirectUri": "orbis://games",
   *   "ServiceLabel": "0"
   * });
   */
  RedeemPlayStationStoreInventoryItems (request: RedeemPlayStationStoreInventoryItemsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<RedeemPlayStationStoreInventoryItemsResponse>("/Inventory/RedeemPlayStationStoreInventoryItems", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Redeem items.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/inventory/inventory/redeemsteaminventoryitems Microsoft Documentation}
   * @example
   * await inventoryClient.RedeemSteamInventoryItems({});
   */
  RedeemSteamInventoryItems (request: RedeemSteamInventoryItemsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<RedeemSteamInventoryItemsResponse>("/Inventory/RedeemSteamInventoryItems", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Submit a report for an item, indicating in what way the item is inappropriate.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/catalog/catalog/reportitem Microsoft Documentation}
   * @example
   * await catalogClient.ReportItem({
   *   "ConcernCategory": "Profanity",
   *   "Reason": "There was swearing in the description.",
   *   "Id": "dddddddd-dddd-dddd-dddd-dddddddddddd"
   * });
   */
  ReportItem (request: ReportItemRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ReportItemResponse>("/Catalog/ReportItem", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Submit a report for a review
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/catalog/catalog/reportitemreview Microsoft Documentation}
   * @example
   * await catalogClient.ReportItemReview({
   *   "ReviewId": "dddddddd-dddd-dddd-dddd-dddddddddddd",
   *   "ItemId": "eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee",
   *   "ConcernCategory": "OffensiveContent",
   *   "Reason": "Foul language."
   * });
   */
  ReportItemReview (request: ReportItemReviewRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ReportItemReviewResponse>("/Catalog/ReportItemReview", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Creates or updates a review for the specified item. More information around the caching surrounding item ratings and
   * reviews can be found here:
   * https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/catalog/ratings#ratings-design-and-caching
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/catalog/catalog/reviewitem Microsoft Documentation}
   * @example
   * await catalogClient.ReviewItem({
   *   "Review": {
   *     "ItemVersion": "2.4.1",
   *     "Title": "Best Game Ever",
   *     "ReviewText": "I play this game every day. It's my favorite game yet.",
   *     "Rating": 5,
   *     "IsInstalled": true,
   *     "HelpfulPositive": 0,
   *     "HelpfulNegative": 0,
   *     "Submitted": "0001-01-01T00:00:00Z"
   *   },
   *   "Id": "dddddddd-dddd-dddd-dddd-dddddddddddd"
   * });
   */
  ReviewItem (request: ReviewItemRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ReviewItemResponse>("/Catalog/ReviewItem", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Executes a search against the public catalog using the provided search parameters and returns a set of paginated
   * results. SearchItems uses a cache of the catalog with item updates taking up to a few minutes to propagate. You should
   * use the GetItem API for when trying to immediately get recent item updates. More information about the Search API can be
   * found here: https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/catalog/search
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/catalog/catalog/searchitems Microsoft Documentation}
   * @example
   * await catalogClient.SearchItems({
   *   "Search": "Pirates",
   *   "Filter": "tags/any(t:t eq 'desert') and contentType eq 'map'",
   *   "OrderBy": "lastModifiedDate asc",
   *   "ContinuationToken": "abc=",
   *   "Count": 2
   * });
   */
  SearchItems (request: SearchItemsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<SearchItemsResponse>("/Catalog/SearchItems", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Sets the moderation state for an item, including the concern category and string reason. More information about
   * moderation states can be found here: https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/ugc/moderation
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/catalog/catalog/setitemmoderationstate Microsoft Documentation}
   * @example
   * await catalogClient.SetItemModerationState({
   *   "Status": "AwaitingModeration",
   *   "Reason": "User reports over threshold",
   *   "Id": "dddddddd-dddd-dddd-dddd-dddddddddddd"
   * });
   */
  SetItemModerationState (request: SetItemModerationStateRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<SetItemModerationStateResponse>("/Catalog/SetItemModerationState", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Submit a vote for a review, indicating whether the review was helpful or unhelpful.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/catalog/catalog/submititemreviewvote Microsoft Documentation}
   * @example
   * await catalogClient.SubmitItemReviewVote({
   *   "ReviewId": "dddddddd-dddd-dddd-dddd-dddddddddddd",
   *   "ItemId": "eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee",
   *   "Vote": "Helpful"
   * });
   */
  SubmitItemReviewVote (request: SubmitItemReviewVoteRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<SubmitItemReviewVoteResponse>("/Catalog/SubmitItemReviewVote", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Subtract inventory items.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/inventory/inventory/subtractinventoryitems Microsoft Documentation}
   * @example
   * await inventoryClient.SubtractInventoryItems({
   *   "Item": {
   *     "Id": "11111111-1111-1111-1111-111111111111"
   *   },
   *   "Amount": 3,
   *   "DeleteEmptyStacks": false,
   *   "ReturnInventory": false
   * });
   */
  SubtractInventoryItems (request: SubtractInventoryItemsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<SubtractInventoryItemsResponse>("/Inventory/SubtractInventoryItems", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Submit a request to takedown one or more reviews.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/catalog/catalog/takedownitemreviews Microsoft Documentation}
   * @example
   * await catalogClient.TakedownItemReviews({
   *   "Reviews": [
   *     {
   *       "ItemId": "00000000-0000-0000-0000-000000000003",
   *       "ReviewId": "dddddddd-dddd-dddd-dddd-dddddddddddd"
   *     }
   *   ]
   * });
   */
  TakedownItemReviews (request: TakedownItemReviewsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<TakedownItemReviewsResponse>("/Catalog/TakedownItemReviews", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Transfer inventory items. When transferring across collections, a 202 response indicates that the transfer did not
   * complete within the timeframe of the request. You can identify the pending operations by looking for OperationStatus =
   * 'InProgress'. You can check on the operation status at anytime within 1 day of the request by passing the
   * TransactionToken to the GetInventoryOperationStatus API. More information about item transfer scenarios can be found
   * here:
   * https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/inventory/?tabs=inventory-game-manager#transfer-inventory-items
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/inventory/inventory/transferinventoryitems Microsoft Documentation}
   * @example
   * await inventoryClient.TransferInventoryItems({
   *   "GivingItem": {
   *     "Id": "11111111-1111-1111-1111-111111111111"
   *   },
   *   "ReceivingItem": {
   *     "Id": "11111111-1111-1111-1111-111111111111"
   *   },
   *   "Amount": 1,
   *   "DeleteEmptyStacks": false,
   *   "GivingCollectionId": "default",
   *   "ReceivingCollectionId": "backpack"
   * });
   */
  TransferInventoryItems (request: TransferInventoryItemsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<TransferInventoryItemsResponse>("/Inventory/TransferInventoryItems", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Updates the configuration for the catalog. Only Title Entities can call this API. There is a limit of 10 requests in 10
   * seconds for this API. More information about the Catalog Config can be found here:
   * https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/settings
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/catalog/catalog/updatecatalogconfig Microsoft Documentation}
   * @example
   * await catalogClient.UpdateCatalogConfig({
   *   "Config": {
   *     "IsCatalogEnabled": true,
   *     "AdminEntities": [
   *       {
   *         "Id": "ABC123",
   *         "Type": "title_player_account",
   *         "TypeString": "title_player_account"
   *       }
   *     ],
   *     "DisplayPropertyIndexInfos": [
   *       {
   *         "Name": "damage",
   *         "Type": "QueryDouble"
   *       }
   *     ],
   *     "ReviewerEntities": [
   *       {
   *         "Id": "ABC123",
   *         "Type": "title_player_account",
   *         "TypeString": "title_player_account"
   *       }
   *     ],
   *     "UserGeneratedContent": {
   *       "ContentTypes": [
   *         "skin",
   *         "map",
   *         "example item"
   *       ],
   *       "Tags": [
   *         "pirate",
   *         "holiday"
   *       ]
   *     }
   *   }
   * });
   */
  UpdateCatalogConfig (request: UpdateCatalogConfigRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdateCatalogConfigResponse>("/Catalog/UpdateCatalogConfig", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Update the metadata for an item in the working catalog. Note: SAS tokens provided are valid for 1 hour.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/catalog/catalog/updatedraftitem Microsoft Documentation}
   * @example
   * await catalogClient.UpdateDraftItem({
   *   "Item": {
   *     "Id": "qqqqqqqq-qqqq-qqqq-qqqq-qqqqqqqqqqqq",
   *     "Type": "ugc",
   *     "Title": {
   *       "NEUTRAL": "Neutral title",
   *       "en-US": "US English title"
   *     },
   *     "Description": {
   *       "NEUTRAL": "Neutral description",
   *       "en-US": "US English description"
   *     },
   *     "Keywords": {
   *       "NEUTRAL": {
   *         "Values": [
   *           "Keyword_1",
   *           "Keyword_2"
   *         ]
   *       }
   *     },
   *     "ContentType": "example item",
   *     "CreatorEntity": {
   *       "Id": "someId",
   *       "Type": "title_player_account",
   *       "TypeString": "title_player_account"
   *     },
   *     "IsHidden": false,
   *     "Tags": [
   *       "pirates",
   *       "holiday"
   *     ],
   *     "DisplayVersion": "1.0.0",
   *     "CreationDate": "2018-08-17T22:32:10.472Z",
   *     "Contents": [
   *       {
   *         "Id": "00000000-0000-0000-0000-000000000001",
   *         "Url": "https://endpoint.blob.core.windows.net/some-identifier-private/00000000-0000-0000-0000-000000000001/textures.zip",
   *         "MaxClientVersion": "2.4.1",
   *         "MinClientVersion": "2.0.0"
   *       }
   *     ],
   *     "Images": [
   *       {
   *         "Id": "00000000-0000-0000-0000-000000000003",
   *         "Type": "Thumbnail",
   *         "Url": "https://endpoint.blob.core.windows.net/some-identifier-private/00000000-0000-0000-0000-000000000003/splashscreen_thumb.jpg"
   *       }
   *     ],
   *     "DisplayProperties": {
   *       "mapDetails": {
   *         "mapType": "desertIsland",
   *         "gameMode": "capture",
   *         "maxPlayers": 16
   *       },
   *       "averageMatchLengthInSeconds": 947
   *     },
   *     "DefaultStackId": "Static_Default_Stack_Id"
   *   },
   *   "Publish": false
   * });
   */
  UpdateDraftItem (request: UpdateDraftItemRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdateDraftItemResponse>("/Catalog/UpdateDraftItem", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Update inventory items
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/inventory/inventory/updateinventoryitems Microsoft Documentation}
   * @example
   * await inventoryClient.UpdateInventoryItems({
   *   "Item": {
   *     "Id": "11111111-1111-1111-1111-111111111111",
   *     "Amount": 3
   *   },
   *   "ReturnInventory": false
   * });
   */
  UpdateInventoryItems (request: UpdateInventoryItemsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdateInventoryItemsResponse>("/Inventory/UpdateInventoryItems", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Updates an existing view in the catalog using provided metadata.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/catalog/catalog/updateview Microsoft Documentation}
   * @example
   * await catalogClient.UpdateView({
   *   "View": {
   *     "Id": "dddddddd-dddd-dddd-dddd-dddddddddddd",
   *     "FriendlyId": "exampleView",
   *     "IsTitleView": false,
   *     "Count": 10,
   *     "Filter": "tags/any(t:t eq 'desert') and contentType eq 'map'",
   *     "Language": "en-US",
   *     "FileFormat": "JsonLines",
   *     "Url": "https://views.prod.catalog.playfab.com/title-identifier/dddddddd-dddd-dddd-dddd-dddddddddddd.json",
   *     "LastModifiedDate": "2023-08-17T22:32:31.911Z",
   *     "CreationDate": "2023-08-17T22:32:10.472Z",
   *     "LastViewDiagnostics": {
   *       "GeneratedDate": "2023-08-18T23:32:10.322Z",
   *       "Status": "Unknown"
   *     },
   *     "ETag": "opaqueString"
   *   }
   * });
   */
  UpdateView (request: UpdateViewRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdateViewResponse>("/Catalog/UpdateView", request, "X-EntityToken", extraHeaders);
  }

};
