import type { ApiCallback } from "../types/Playfab";
import type {
  AddInventoryItemsRequest,
  AddInventoryItemsResponse,
  CreateDraftItemRequest,
  CreateDraftItemResponse,
  CreateUploadUrlsRequest,
  CreateUploadUrlsResponse,
  DeleteEntityItemReviewsRequest,
  DeleteEntityItemReviewsResponse,
  DeleteInventoryCollectionRequest,
  DeleteInventoryCollectionResponse,
  DeleteInventoryItemsRequest,
  DeleteInventoryItemsResponse,
  DeleteItemRequest,
  DeleteItemResponse,
  ExecuteInventoryOperationsRequest,
  ExecuteInventoryOperationsResponse,
  ExecuteTransferOperationsRequest,
  ExecuteTransferOperationsResponse,
  GetCatalogConfigRequest,
  GetCatalogConfigResponse,
  GetDraftItemRequest,
  GetDraftItemResponse,
  GetDraftItemsRequest,
  GetDraftItemsResponse,
  GetEntityDraftItemsRequest,
  GetEntityDraftItemsResponse,
  GetEntityItemReviewRequest,
  GetEntityItemReviewResponse,
  GetInventoryCollectionIdsRequest,
  GetInventoryCollectionIdsResponse,
  GetInventoryItemsRequest,
  GetInventoryItemsResponse,
  GetInventoryOperationStatusRequest,
  GetInventoryOperationStatusResponse,
  GetItemRequest,
  GetItemResponse,
  GetItemContainersRequest,
  GetItemContainersResponse,
  GetItemModerationStateRequest,
  GetItemModerationStateResponse,
  GetItemPublishStatusRequest,
  GetItemPublishStatusResponse,
  GetItemReviewsRequest,
  GetItemReviewsResponse,
  GetItemReviewSummaryRequest,
  GetItemReviewSummaryResponse,
  GetItemsRequest,
  GetItemsResponse,
  GetMicrosoftStoreAccessTokensRequest,
  GetMicrosoftStoreAccessTokensResponse,
  GetTransactionHistoryRequest,
  GetTransactionHistoryResponse,
  PublishDraftItemRequest,
  PublishDraftItemResponse,
  PurchaseInventoryItemsRequest,
  PurchaseInventoryItemsResponse,
  RedeemAppleAppStoreInventoryItemsRequest,
  RedeemAppleAppStoreInventoryItemsResponse,
  RedeemGooglePlayInventoryItemsRequest,
  RedeemGooglePlayInventoryItemsResponse,
  RedeemMicrosoftStoreInventoryItemsRequest,
  RedeemMicrosoftStoreInventoryItemsResponse,
  RedeemNintendoEShopInventoryItemsRequest,
  RedeemNintendoEShopInventoryItemsResponse,
  RedeemPlayStationStoreInventoryItemsRequest,
  RedeemPlayStationStoreInventoryItemsResponse,
  RedeemSteamInventoryItemsRequest,
  RedeemSteamInventoryItemsResponse,
  ReportItemRequest,
  ReportItemResponse,
  ReportItemReviewRequest,
  ReportItemReviewResponse,
  ReviewItemRequest,
  ReviewItemResponse,
  SearchItemsRequest,
  SearchItemsResponse,
  SetItemModerationStateRequest,
  SetItemModerationStateResponse,
  SubmitItemReviewVoteRequest,
  SubmitItemReviewVoteResponse,
  SubtractInventoryItemsRequest,
  SubtractInventoryItemsResponse,
  TakedownItemReviewsRequest,
  TakedownItemReviewsResponse,
  TransferInventoryItemsRequest,
  TransferInventoryItemsResponse,
  UpdateCatalogConfigRequest,
  UpdateCatalogConfigResponse,
  UpdateDraftItemRequest,
  UpdateDraftItemResponse,
  UpdateInventoryItemsRequest,
  UpdateInventoryItemsResponse,
} from "../types/PlayFabEconomyApi";
import { PlayFabCommon } from "../PlayFabCommon";

export class PlayFabEconomyApi extends PlayFabCommon {
  /**
   * Add inventory items. Up to 10,000 stacks of items can be added to a single inventory collection. Stack size is uncapped.
   * https://docs.microsoft.com/rest/api/playfab/economy/inventory/addinventoryitems
   */
  AddInventoryItems(
    request: AddInventoryItemsRequest,
    callback: ApiCallback<AddInventoryItemsResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Inventory/AddInventoryItems",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Creates a new item in the working catalog using provided metadata. Note: SAS tokens provided are valid for 1 hour.
   * https://docs.microsoft.com/rest/api/playfab/economy/catalog/createdraftitem
   */
  CreateDraftItem(
    request: CreateDraftItemRequest,
    callback: ApiCallback<CreateDraftItemResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Catalog/CreateDraftItem",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Creates one or more upload URLs which can be used by the client to upload raw file data. Content URls and uploaded
   * content will be garbage collected after 24 hours if not attached to a draft or published item. Detailed pricing info
   * around uploading content can be found here:
   * https://learn.microsoft.com/en-us/gaming/playfab/features/pricing/meters/catalog-meters
   * https://docs.microsoft.com/rest/api/playfab/economy/catalog/createuploadurls
   */
  CreateUploadUrls(
    request: CreateUploadUrlsRequest,
    callback: ApiCallback<CreateUploadUrlsResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Catalog/CreateUploadUrls",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Deletes all reviews, helpfulness votes, and ratings submitted by the entity specified.
   * https://docs.microsoft.com/rest/api/playfab/economy/catalog/deleteentityitemreviews
   */
  DeleteEntityItemReviews(
    request: DeleteEntityItemReviewsRequest,
    callback: ApiCallback<DeleteEntityItemReviewsResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Catalog/DeleteEntityItemReviews",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Delete an Inventory Collection. More information about Inventory Collections can be found here:
   * https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/inventory/collections
   * https://docs.microsoft.com/rest/api/playfab/economy/inventory/deleteinventorycollection
   */
  DeleteInventoryCollection(
    request: DeleteInventoryCollectionRequest,
    callback: ApiCallback<DeleteInventoryCollectionResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Inventory/DeleteInventoryCollection",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Delete inventory items
   * https://docs.microsoft.com/rest/api/playfab/economy/inventory/deleteinventoryitems
   */
  DeleteInventoryItems(
    request: DeleteInventoryItemsRequest,
    callback: ApiCallback<DeleteInventoryItemsResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Inventory/DeleteInventoryItems",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Removes an item from working catalog and all published versions from the public catalog.
   * https://docs.microsoft.com/rest/api/playfab/economy/catalog/deleteitem
   */
  DeleteItem(
    request: DeleteItemRequest,
    callback: ApiCallback<DeleteItemResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Catalog/DeleteItem",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Execute a list of Inventory Operations. A maximum list of 50 operations can be performed by a single request. There is
   * also a limit to 300 items that can be modified/added in a single request. For example, adding a bundle with 50 items
   * counts as 50 items modified. All operations must be done within a single inventory collection. This API has a reduced
   * RPS compared to an individual inventory operation with Player Entities limited to 60 requests in 90 seconds.
   * https://docs.microsoft.com/rest/api/playfab/economy/inventory/executeinventoryoperations
   */
  ExecuteInventoryOperations(
    request: ExecuteInventoryOperationsRequest,
    callback: ApiCallback<ExecuteInventoryOperationsResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Inventory/ExecuteInventoryOperations",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Transfer a list of inventory items. A maximum list of 50 operations can be performed by a single request. When the
   * response code is 202, one or more operations did not complete within the timeframe of the request. You can identify the
   * pending operations by looking for OperationStatus = 'InProgress'. You can check on the operation status at anytime
   * within 1 day of the request by passing the TransactionToken to the GetInventoryOperationStatus API.
   * https://docs.microsoft.com/rest/api/playfab/economy/inventory/executetransferoperations
   */
  ExecuteTransferOperations(
    request: ExecuteTransferOperationsRequest,
    callback: ApiCallback<ExecuteTransferOperationsResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Inventory/ExecuteTransferOperations",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Gets the configuration for the catalog. Only Title Entities can call this API. There is a limit of 100 requests in 10
   * seconds for this API. More information about the Catalog Config can be found here:
   * https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/settings
   * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getcatalogconfig
   */
  GetCatalogConfig(
    request: GetCatalogConfigRequest,
    callback: ApiCallback<GetCatalogConfigResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Catalog/GetCatalogConfig",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Retrieves an item from the working catalog. This item represents the current working state of the item. GetDraftItem
   * does not work off a cache of the Catalog and should be used when trying to get recent item updates. However, please note
   * that item references data is cached and may take a few moments for changes to propagate. Note: SAS tokens provided are
   * valid for 1 hour.
   * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getdraftitem
   */
  GetDraftItem(
    request: GetDraftItemRequest,
    callback: ApiCallback<GetDraftItemResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Catalog/GetDraftItem",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Retrieves a paginated list of the items from the draft catalog. Up to 50 IDs can be retrieved in a single request.
   * GetDraftItems does not work off a cache of the Catalog and should be used when trying to get recent item updates. Note:
   * SAS tokens provided are valid for 1 hour.
   * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getdraftitems
   */
  GetDraftItems(
    request: GetDraftItemsRequest,
    callback: ApiCallback<GetDraftItemsResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Catalog/GetDraftItems",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Retrieves a paginated list of the items from the draft catalog created by the Entity. Up to 50 items can be returned at
   * once. You can use continuation tokens to paginate through results that return greater than the limit.
   * GetEntityDraftItems does not work off a cache of the Catalog and should be used when trying to get recent item updates.
   * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getentitydraftitems
   */
  GetEntityDraftItems(
    request: GetEntityDraftItemsRequest,
    callback: ApiCallback<GetEntityDraftItemsResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Catalog/GetEntityDraftItems",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Gets the submitted review for the specified item by the authenticated entity. Individual ratings and reviews data update
   * in near real time with delays within a few seconds.
   * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getentityitemreview
   */
  GetEntityItemReview(
    request: GetEntityItemReviewRequest,
    callback: ApiCallback<GetEntityItemReviewResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Catalog/GetEntityItemReview",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Get Inventory Collection Ids. Up to 50 Ids can be returned at once (or 250 with response compression enabled). You can
   * use continuation tokens to paginate through results that return greater than the limit. It can take a few seconds for
   * new collection Ids to show up.
   * https://docs.microsoft.com/rest/api/playfab/economy/inventory/getinventorycollectionids
   */
  GetInventoryCollectionIds(
    request: GetInventoryCollectionIdsRequest,
    callback: ApiCallback<GetInventoryCollectionIdsResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Inventory/GetInventoryCollectionIds",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Get current inventory items.
   * https://docs.microsoft.com/rest/api/playfab/economy/inventory/getinventoryitems
   */
  GetInventoryItems(
    request: GetInventoryItemsRequest,
    callback: ApiCallback<GetInventoryItemsResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Inventory/GetInventoryItems",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Get the status of an inventory operation using an OperationToken. You can check on the operation status at anytime
   * within 1 day of the request by passing the TransactionToken to the this API.
   * https://docs.microsoft.com/rest/api/playfab/economy/inventory/getinventoryoperationstatus
   */
  GetInventoryOperationStatus(
    request: GetInventoryOperationStatusRequest,
    callback: ApiCallback<GetInventoryOperationStatusResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Inventory/GetInventoryOperationStatus",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Retrieves an item from the public catalog. GetItem does not work off a cache of the Catalog and should be used when
   * trying to get recent item updates. However, please note that item references data is cached and may take a few moments
   * for changes to propagate.
   * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getitem
   */
  GetItem(
    request: GetItemRequest,
    callback: ApiCallback<GetItemResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Catalog/GetItem",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Search for a given item and return a set of bundles and stores containing the item. Up to 50 items can be returned at
   * once. You can use continuation tokens to paginate through results that return greater than the limit. This API is
   * intended for tooling/automation scenarios and has a reduced RPS with Player Entities limited to 30 requests in 300
   * seconds and Title Entities limited to 100 requests in 10 seconds.
   * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getitemcontainers
   */
  GetItemContainers(
    request: GetItemContainersRequest,
    callback: ApiCallback<GetItemContainersResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Catalog/GetItemContainers",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Gets the moderation state for an item, including the concern category and string reason. More information about
   * moderation states can be found here: https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/ugc/moderation
   * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getitemmoderationstate
   */
  GetItemModerationState(
    request: GetItemModerationStateRequest,
    callback: ApiCallback<GetItemModerationStateResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Catalog/GetItemModerationState",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Gets the status of a publish of an item.
   * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getitempublishstatus
   */
  GetItemPublishStatus(
    request: GetItemPublishStatusRequest,
    callback: ApiCallback<GetItemPublishStatusResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Catalog/GetItemPublishStatus",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Get a paginated set of reviews associated with the specified item. Individual ratings and reviews data update in near
   * real time with delays within a few seconds.
   * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getitemreviews
   */
  GetItemReviews(
    request: GetItemReviewsRequest,
    callback: ApiCallback<GetItemReviewsResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Catalog/GetItemReviews",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Get a summary of all ratings and reviews associated with the specified item. Summary ratings data is cached with update
   * data coming within 15 minutes.
   * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getitemreviewsummary
   */
  GetItemReviewSummary(
    request: GetItemReviewSummaryRequest,
    callback: ApiCallback<GetItemReviewSummaryResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Catalog/GetItemReviewSummary",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Retrieves items from the public catalog. Up to 50 items can be returned at once. GetItems does not work off a cache of
   * the Catalog and should be used when trying to get recent item updates. However, please note that item references data is
   * cached and may take a few moments for changes to propagate.
   * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getitems
   */
  GetItems(
    request: GetItemsRequest,
    callback: ApiCallback<GetItemsResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Catalog/GetItems",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Gets the access tokens.
   * https://docs.microsoft.com/rest/api/playfab/economy/inventory/getmicrosoftstoreaccesstokens
   */
  GetMicrosoftStoreAccessTokens(
    request: GetMicrosoftStoreAccessTokensRequest,
    callback: ApiCallback<GetMicrosoftStoreAccessTokensResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Inventory/GetMicrosoftStoreAccessTokens",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Get transaction history for a player. Up to 250 Events can be returned at once. You can use continuation tokens to
   * paginate through results that return greater than the limit. Getting transaction history has a lower RPS limit than
   * getting a Player's inventory with Player Entities having a limit of 30 requests in 300 seconds.
   * https://docs.microsoft.com/rest/api/playfab/economy/inventory/gettransactionhistory
   */
  GetTransactionHistory(
    request: GetTransactionHistoryRequest,
    callback: ApiCallback<GetTransactionHistoryResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Inventory/GetTransactionHistory",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Initiates a publish of an item from the working catalog to the public catalog. You can use the GetItemPublishStatus API
   * to track the state of the item publish.
   * https://docs.microsoft.com/rest/api/playfab/economy/catalog/publishdraftitem
   */
  PublishDraftItem(
    request: PublishDraftItemRequest,
    callback: ApiCallback<PublishDraftItemResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Catalog/PublishDraftItem",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Purchase an item or bundle. Up to 10,000 stacks of items can be added to a single inventory collection. Stack size is
   * uncapped.
   * https://docs.microsoft.com/rest/api/playfab/economy/inventory/purchaseinventoryitems
   */
  PurchaseInventoryItems(
    request: PurchaseInventoryItemsRequest,
    callback: ApiCallback<PurchaseInventoryItemsResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Inventory/PurchaseInventoryItems",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Redeem items.
   * https://docs.microsoft.com/rest/api/playfab/economy/inventory/redeemappleappstoreinventoryitems
   */
  RedeemAppleAppStoreInventoryItems(
    request: RedeemAppleAppStoreInventoryItemsRequest,
    callback: ApiCallback<RedeemAppleAppStoreInventoryItemsResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Inventory/RedeemAppleAppStoreInventoryItems",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Redeem items.
   * https://docs.microsoft.com/rest/api/playfab/economy/inventory/redeemgoogleplayinventoryitems
   */
  RedeemGooglePlayInventoryItems(
    request: RedeemGooglePlayInventoryItemsRequest,
    callback: ApiCallback<RedeemGooglePlayInventoryItemsResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Inventory/RedeemGooglePlayInventoryItems",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Redeem items.
   * https://docs.microsoft.com/rest/api/playfab/economy/inventory/redeemmicrosoftstoreinventoryitems
   */
  RedeemMicrosoftStoreInventoryItems(
    request: RedeemMicrosoftStoreInventoryItemsRequest,
    callback: ApiCallback<RedeemMicrosoftStoreInventoryItemsResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Inventory/RedeemMicrosoftStoreInventoryItems",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Redeem items.
   * https://docs.microsoft.com/rest/api/playfab/economy/inventory/redeemnintendoeshopinventoryitems
   */
  RedeemNintendoEShopInventoryItems(
    request: RedeemNintendoEShopInventoryItemsRequest,
    callback: ApiCallback<RedeemNintendoEShopInventoryItemsResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Inventory/RedeemNintendoEShopInventoryItems",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Redeem items.
   * https://docs.microsoft.com/rest/api/playfab/economy/inventory/redeemplaystationstoreinventoryitems
   */
  RedeemPlayStationStoreInventoryItems(
    request: RedeemPlayStationStoreInventoryItemsRequest,
    callback: ApiCallback<RedeemPlayStationStoreInventoryItemsResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Inventory/RedeemPlayStationStoreInventoryItems",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Redeem items.
   * https://docs.microsoft.com/rest/api/playfab/economy/inventory/redeemsteaminventoryitems
   */
  RedeemSteamInventoryItems(
    request: RedeemSteamInventoryItemsRequest,
    callback: ApiCallback<RedeemSteamInventoryItemsResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Inventory/RedeemSteamInventoryItems",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Submit a report for an item, indicating in what way the item is inappropriate.
   * https://docs.microsoft.com/rest/api/playfab/economy/catalog/reportitem
   */
  ReportItem(
    request: ReportItemRequest,
    callback: ApiCallback<ReportItemResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Catalog/ReportItem",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Submit a report for a review
   * https://docs.microsoft.com/rest/api/playfab/economy/catalog/reportitemreview
   */
  ReportItemReview(
    request: ReportItemReviewRequest,
    callback: ApiCallback<ReportItemReviewResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Catalog/ReportItemReview",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Creates or updates a review for the specified item. More information around the caching surrounding item ratings and
   * reviews can be found here:
   * https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/catalog/ratings#ratings-design-and-caching
   * https://docs.microsoft.com/rest/api/playfab/economy/catalog/reviewitem
   */
  ReviewItem(
    request: ReviewItemRequest,
    callback: ApiCallback<ReviewItemResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Catalog/ReviewItem",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Executes a search against the public catalog using the provided search parameters and returns a set of paginated
   * results. SearchItems uses a cache of the catalog with item updates taking up to a few minutes to propagate. You should
   * use the GetItem API for when trying to immediately get recent item updates. More information about the Search API can be
   * found here: https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/catalog/search
   * https://docs.microsoft.com/rest/api/playfab/economy/catalog/searchitems
   */
  SearchItems(
    request: SearchItemsRequest,
    callback: ApiCallback<SearchItemsResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Catalog/SearchItems",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Sets the moderation state for an item, including the concern category and string reason. More information about
   * moderation states can be found here: https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/ugc/moderation
   * https://docs.microsoft.com/rest/api/playfab/economy/catalog/setitemmoderationstate
   */
  SetItemModerationState(
    request: SetItemModerationStateRequest,
    callback: ApiCallback<SetItemModerationStateResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Catalog/SetItemModerationState",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Submit a vote for a review, indicating whether the review was helpful or unhelpful.
   * https://docs.microsoft.com/rest/api/playfab/economy/catalog/submititemreviewvote
   */
  SubmitItemReviewVote(
    request: SubmitItemReviewVoteRequest,
    callback: ApiCallback<SubmitItemReviewVoteResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Catalog/SubmitItemReviewVote",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Subtract inventory items.
   * https://docs.microsoft.com/rest/api/playfab/economy/inventory/subtractinventoryitems
   */
  SubtractInventoryItems(
    request: SubtractInventoryItemsRequest,
    callback: ApiCallback<SubtractInventoryItemsResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Inventory/SubtractInventoryItems",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Submit a request to takedown one or more reviews.
   * https://docs.microsoft.com/rest/api/playfab/economy/catalog/takedownitemreviews
   */
  TakedownItemReviews(
    request: TakedownItemReviewsRequest,
    callback: ApiCallback<TakedownItemReviewsResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Catalog/TakedownItemReviews",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Transfer inventory items. When transferring across collections, a 202 response indicates that the transfer did not
   * complete within the timeframe of the request. You can identify the pending operations by looking for OperationStatus =
   * 'InProgress'. You can check on the operation status at anytime within 1 day of the request by passing the
   * TransactionToken to the GetInventoryOperationStatus API. More information about item transfer scenarios can be found
   * here:
   * https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/inventory/?tabs=inventory-game-manager#transfer-inventory-items
   * https://docs.microsoft.com/rest/api/playfab/economy/inventory/transferinventoryitems
   */
  TransferInventoryItems(
    request: TransferInventoryItemsRequest,
    callback: ApiCallback<TransferInventoryItemsResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Inventory/TransferInventoryItems",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Updates the configuration for the catalog. Only Title Entities can call this API. There is a limit of 10 requests in 10
   * seconds for this API. More information about the Catalog Config can be found here:
   * https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/settings
   * https://docs.microsoft.com/rest/api/playfab/economy/catalog/updatecatalogconfig
   */
  UpdateCatalogConfig(
    request: UpdateCatalogConfigRequest,
    callback: ApiCallback<UpdateCatalogConfigResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Catalog/UpdateCatalogConfig",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Update the metadata for an item in the working catalog. Note: SAS tokens provided are valid for 1 hour.
   * https://docs.microsoft.com/rest/api/playfab/economy/catalog/updatedraftitem
   */
  UpdateDraftItem(
    request: UpdateDraftItemRequest,
    callback: ApiCallback<UpdateDraftItemResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Catalog/UpdateDraftItem",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Update inventory items
   * https://docs.microsoft.com/rest/api/playfab/economy/inventory/updateinventoryitems
   */
  UpdateInventoryItems(
    request: UpdateInventoryItemsRequest,
    callback: ApiCallback<UpdateInventoryItemsResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Inventory/UpdateInventoryItems",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
}
