import type {

  AddInventoryItemsRequest,
  CreateDraftItemRequest,
  CreateUploadUrlsRequest,
  DeleteEntityItemReviewsRequest,
  DeleteInventoryCollectionRequest,
  DeleteInventoryItemsRequest,
  DeleteItemRequest,
  ExecuteInventoryOperationsRequest,
  ExecuteTransferOperationsRequest,
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
  AddInventoryItemsResponse,
  CreateDraftItemResponse,
  CreateUploadUrlsResponse,
  DeleteEntityItemReviewsResponse,
  DeleteInventoryCollectionResponse,
  DeleteInventoryItemsResponse,
  DeleteItemResponse,
  ExecuteInventoryOperationsResponse,
  ExecuteTransferOperationsResponse,
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
} from "../types/PlayFabEconomyApi";
import { PlayFabCommon } from "../PlayFabCommon";

export default class PlayFabEconomyApi extends PlayFabCommon {

    /**
     * Add inventory items. Up to 10,000 stacks of items can be added to a single inventory collection. Stack size is uncapped.
     * https://docs.microsoft.com/rest/api/playfab/economy/inventory/addinventoryitems
     */
    AddInventoryItems (request: AddInventoryItemsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<AddInventoryItemsResponse>("/Inventory/AddInventoryItems", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Creates a new item in the working catalog using provided metadata. Note: SAS tokens provided are valid for 1 hour.
     * https://docs.microsoft.com/rest/api/playfab/economy/catalog/createdraftitem
     */
    CreateDraftItem (request: CreateDraftItemRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<CreateDraftItemResponse>("/Catalog/CreateDraftItem", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Creates one or more upload URLs which can be used by the client to upload raw file data. Content URls and uploaded
     * content will be garbage collected after 24 hours if not attached to a draft or published item. Detailed pricing info
     * around uploading content can be found here:
     * https://learn.microsoft.com/en-us/gaming/playfab/features/pricing/meters/catalog-meters
     * https://docs.microsoft.com/rest/api/playfab/economy/catalog/createuploadurls
     */
    CreateUploadUrls (request: CreateUploadUrlsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<CreateUploadUrlsResponse>("/Catalog/CreateUploadUrls", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Deletes all reviews, helpfulness votes, and ratings submitted by the entity specified.
     * https://docs.microsoft.com/rest/api/playfab/economy/catalog/deleteentityitemreviews
     */
    DeleteEntityItemReviews (request: DeleteEntityItemReviewsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<DeleteEntityItemReviewsResponse>("/Catalog/DeleteEntityItemReviews", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Delete an Inventory Collection. More information about Inventory Collections can be found here:
     * https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/inventory/collections
     * https://docs.microsoft.com/rest/api/playfab/economy/inventory/deleteinventorycollection
     */
    DeleteInventoryCollection (request: DeleteInventoryCollectionRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<DeleteInventoryCollectionResponse>("/Inventory/DeleteInventoryCollection", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Delete inventory items
     * https://docs.microsoft.com/rest/api/playfab/economy/inventory/deleteinventoryitems
     */
    DeleteInventoryItems (request: DeleteInventoryItemsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<DeleteInventoryItemsResponse>("/Inventory/DeleteInventoryItems", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Removes an item from working catalog and all published versions from the public catalog.
     * https://docs.microsoft.com/rest/api/playfab/economy/catalog/deleteitem
     */
    DeleteItem (request: DeleteItemRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<DeleteItemResponse>("/Catalog/DeleteItem", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Execute a list of Inventory Operations. A maximum list of 50 operations can be performed by a single request. There is
     * also a limit to 300 items that can be modified/added in a single request. For example, adding a bundle with 50 items
     * counts as 50 items modified. All operations must be done within a single inventory collection. This API has a reduced
     * RPS compared to an individual inventory operation with Player Entities limited to 60 requests in 90 seconds.
     * https://docs.microsoft.com/rest/api/playfab/economy/inventory/executeinventoryoperations
     */
    ExecuteInventoryOperations (request: ExecuteInventoryOperationsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ExecuteInventoryOperationsResponse>("/Inventory/ExecuteInventoryOperations", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Transfer a list of inventory items. A maximum list of 50 operations can be performed by a single request. When the
     * response code is 202, one or more operations did not complete within the timeframe of the request. You can identify the
     * pending operations by looking for OperationStatus = 'InProgress'. You can check on the operation status at anytime
     * within 1 day of the request by passing the TransactionToken to the GetInventoryOperationStatus API.
     * https://docs.microsoft.com/rest/api/playfab/economy/inventory/executetransferoperations
     */
    ExecuteTransferOperations (request: ExecuteTransferOperationsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ExecuteTransferOperationsResponse>("/Inventory/ExecuteTransferOperations", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Gets the configuration for the catalog. Only Title Entities can call this API. There is a limit of 100 requests in 10
     * seconds for this API. More information about the Catalog Config can be found here:
     * https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/settings
     * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getcatalogconfig
     */
    GetCatalogConfig (request: GetCatalogConfigRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetCatalogConfigResponse>("/Catalog/GetCatalogConfig", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Retrieves an item from the working catalog. This item represents the current working state of the item. GetDraftItem
     * does not work off a cache of the Catalog and should be used when trying to get recent item updates. However, please note
     * that item references data is cached and may take a few moments for changes to propagate. Note: SAS tokens provided are
     * valid for 1 hour.
     * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getdraftitem
     */
    GetDraftItem (request: GetDraftItemRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetDraftItemResponse>("/Catalog/GetDraftItem", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Retrieves a paginated list of the items from the draft catalog. Up to 50 IDs can be retrieved in a single request.
     * GetDraftItems does not work off a cache of the Catalog and should be used when trying to get recent item updates. Note:
     * SAS tokens provided are valid for 1 hour.
     * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getdraftitems
     */
    GetDraftItems (request: GetDraftItemsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetDraftItemsResponse>("/Catalog/GetDraftItems", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Retrieves a paginated list of the items from the draft catalog created by the Entity. Up to 50 items can be returned at
     * once. You can use continuation tokens to paginate through results that return greater than the limit.
     * GetEntityDraftItems does not work off a cache of the Catalog and should be used when trying to get recent item updates.
     * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getentitydraftitems
     */
    GetEntityDraftItems (request: GetEntityDraftItemsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetEntityDraftItemsResponse>("/Catalog/GetEntityDraftItems", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Gets the submitted review for the specified item by the authenticated entity. Individual ratings and reviews data update
     * in near real time with delays within a few seconds.
     * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getentityitemreview
     */
    GetEntityItemReview (request: GetEntityItemReviewRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetEntityItemReviewResponse>("/Catalog/GetEntityItemReview", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Get Inventory Collection Ids. Up to 50 Ids can be returned at once (or 250 with response compression enabled). You can
     * use continuation tokens to paginate through results that return greater than the limit. It can take a few seconds for
     * new collection Ids to show up.
     * https://docs.microsoft.com/rest/api/playfab/economy/inventory/getinventorycollectionids
     */
    GetInventoryCollectionIds (request: GetInventoryCollectionIdsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetInventoryCollectionIdsResponse>("/Inventory/GetInventoryCollectionIds", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Get current inventory items.
     * https://docs.microsoft.com/rest/api/playfab/economy/inventory/getinventoryitems
     */
    GetInventoryItems (request: GetInventoryItemsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetInventoryItemsResponse>("/Inventory/GetInventoryItems", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Get the status of an inventory operation using an OperationToken. You can check on the operation status at anytime
     * within 1 day of the request by passing the TransactionToken to the this API.
     * https://docs.microsoft.com/rest/api/playfab/economy/inventory/getinventoryoperationstatus
     */
    GetInventoryOperationStatus (request: GetInventoryOperationStatusRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetInventoryOperationStatusResponse>("/Inventory/GetInventoryOperationStatus", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Retrieves an item from the public catalog. GetItem does not work off a cache of the Catalog and should be used when
     * trying to get recent item updates. However, please note that item references data is cached and may take a few moments
     * for changes to propagate.
     * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getitem
     */
    GetItem (request: GetItemRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetItemResponse>("/Catalog/GetItem", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Search for a given item and return a set of bundles and stores containing the item. Up to 50 items can be returned at
     * once. You can use continuation tokens to paginate through results that return greater than the limit. This API is
     * intended for tooling/automation scenarios and has a reduced RPS with Player Entities limited to 30 requests in 300
     * seconds and Title Entities limited to 100 requests in 10 seconds.
     * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getitemcontainers
     */
    GetItemContainers (request: GetItemContainersRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetItemContainersResponse>("/Catalog/GetItemContainers", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Gets the moderation state for an item, including the concern category and string reason. More information about
     * moderation states can be found here: https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/ugc/moderation
     * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getitemmoderationstate
     */
    GetItemModerationState (request: GetItemModerationStateRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetItemModerationStateResponse>("/Catalog/GetItemModerationState", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Gets the status of a publish of an item.
     * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getitempublishstatus
     */
    GetItemPublishStatus (request: GetItemPublishStatusRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetItemPublishStatusResponse>("/Catalog/GetItemPublishStatus", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Get a paginated set of reviews associated with the specified item. Individual ratings and reviews data update in near
     * real time with delays within a few seconds.
     * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getitemreviews
     */
    GetItemReviews (request: GetItemReviewsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetItemReviewsResponse>("/Catalog/GetItemReviews", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Get a summary of all ratings and reviews associated with the specified item. Summary ratings data is cached with update
     * data coming within 15 minutes.
     * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getitemreviewsummary
     */
    GetItemReviewSummary (request: GetItemReviewSummaryRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetItemReviewSummaryResponse>("/Catalog/GetItemReviewSummary", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Retrieves items from the public catalog. Up to 50 items can be returned at once. GetItems does not work off a cache of
     * the Catalog and should be used when trying to get recent item updates. However, please note that item references data is
     * cached and may take a few moments for changes to propagate.
     * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getitems
     */
    GetItems (request: GetItemsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetItemsResponse>("/Catalog/GetItems", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Gets the access tokens.
     * https://docs.microsoft.com/rest/api/playfab/economy/inventory/getmicrosoftstoreaccesstokens
     */
    GetMicrosoftStoreAccessTokens (request: GetMicrosoftStoreAccessTokensRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetMicrosoftStoreAccessTokensResponse>("/Inventory/GetMicrosoftStoreAccessTokens", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Get transaction history for a player. Up to 250 Events can be returned at once. You can use continuation tokens to
     * paginate through results that return greater than the limit. Getting transaction history has a lower RPS limit than
     * getting a Player's inventory with Player Entities having a limit of 30 requests in 300 seconds.
     * https://docs.microsoft.com/rest/api/playfab/economy/inventory/gettransactionhistory
     */
    GetTransactionHistory (request: GetTransactionHistoryRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetTransactionHistoryResponse>("/Inventory/GetTransactionHistory", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Initiates a publish of an item from the working catalog to the public catalog. You can use the GetItemPublishStatus API
     * to track the state of the item publish.
     * https://docs.microsoft.com/rest/api/playfab/economy/catalog/publishdraftitem
     */
    PublishDraftItem (request: PublishDraftItemRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<PublishDraftItemResponse>("/Catalog/PublishDraftItem", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Purchase an item or bundle. Up to 10,000 stacks of items can be added to a single inventory collection. Stack size is
     * uncapped.
     * https://docs.microsoft.com/rest/api/playfab/economy/inventory/purchaseinventoryitems
     */
    PurchaseInventoryItems (request: PurchaseInventoryItemsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<PurchaseInventoryItemsResponse>("/Inventory/PurchaseInventoryItems", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Redeem items.
     * https://docs.microsoft.com/rest/api/playfab/economy/inventory/redeemappleappstoreinventoryitems
     */
    RedeemAppleAppStoreInventoryItems (request: RedeemAppleAppStoreInventoryItemsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<RedeemAppleAppStoreInventoryItemsResponse>("/Inventory/RedeemAppleAppStoreInventoryItems", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Redeem items.
     * https://docs.microsoft.com/rest/api/playfab/economy/inventory/redeemgoogleplayinventoryitems
     */
    RedeemGooglePlayInventoryItems (request: RedeemGooglePlayInventoryItemsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<RedeemGooglePlayInventoryItemsResponse>("/Inventory/RedeemGooglePlayInventoryItems", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Redeem items.
     * https://docs.microsoft.com/rest/api/playfab/economy/inventory/redeemmicrosoftstoreinventoryitems
     */
    RedeemMicrosoftStoreInventoryItems (request: RedeemMicrosoftStoreInventoryItemsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<RedeemMicrosoftStoreInventoryItemsResponse>("/Inventory/RedeemMicrosoftStoreInventoryItems", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Redeem items.
     * https://docs.microsoft.com/rest/api/playfab/economy/inventory/redeemnintendoeshopinventoryitems
     */
    RedeemNintendoEShopInventoryItems (request: RedeemNintendoEShopInventoryItemsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<RedeemNintendoEShopInventoryItemsResponse>("/Inventory/RedeemNintendoEShopInventoryItems", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Redeem items.
     * https://docs.microsoft.com/rest/api/playfab/economy/inventory/redeemplaystationstoreinventoryitems
     */
    RedeemPlayStationStoreInventoryItems (request: RedeemPlayStationStoreInventoryItemsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<RedeemPlayStationStoreInventoryItemsResponse>("/Inventory/RedeemPlayStationStoreInventoryItems", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Redeem items.
     * https://docs.microsoft.com/rest/api/playfab/economy/inventory/redeemsteaminventoryitems
     */
    RedeemSteamInventoryItems (request: RedeemSteamInventoryItemsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<RedeemSteamInventoryItemsResponse>("/Inventory/RedeemSteamInventoryItems", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Submit a report for an item, indicating in what way the item is inappropriate.
     * https://docs.microsoft.com/rest/api/playfab/economy/catalog/reportitem
     */
    ReportItem (request: ReportItemRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ReportItemResponse>("/Catalog/ReportItem", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Submit a report for a review
     * https://docs.microsoft.com/rest/api/playfab/economy/catalog/reportitemreview
     */
    ReportItemReview (request: ReportItemReviewRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ReportItemReviewResponse>("/Catalog/ReportItemReview", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Creates or updates a review for the specified item. More information around the caching surrounding item ratings and
     * reviews can be found here:
     * https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/catalog/ratings#ratings-design-and-caching
     * https://docs.microsoft.com/rest/api/playfab/economy/catalog/reviewitem
     */
    ReviewItem (request: ReviewItemRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ReviewItemResponse>("/Catalog/ReviewItem", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Executes a search against the public catalog using the provided search parameters and returns a set of paginated
     * results. SearchItems uses a cache of the catalog with item updates taking up to a few minutes to propagate. You should
     * use the GetItem API for when trying to immediately get recent item updates. More information about the Search API can be
     * found here: https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/catalog/search
     * https://docs.microsoft.com/rest/api/playfab/economy/catalog/searchitems
     */
    SearchItems (request: SearchItemsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<SearchItemsResponse>("/Catalog/SearchItems", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Sets the moderation state for an item, including the concern category and string reason. More information about
     * moderation states can be found here: https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/ugc/moderation
     * https://docs.microsoft.com/rest/api/playfab/economy/catalog/setitemmoderationstate
     */
    SetItemModerationState (request: SetItemModerationStateRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<SetItemModerationStateResponse>("/Catalog/SetItemModerationState", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Submit a vote for a review, indicating whether the review was helpful or unhelpful.
     * https://docs.microsoft.com/rest/api/playfab/economy/catalog/submititemreviewvote
     */
    SubmitItemReviewVote (request: SubmitItemReviewVoteRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<SubmitItemReviewVoteResponse>("/Catalog/SubmitItemReviewVote", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Subtract inventory items.
     * https://docs.microsoft.com/rest/api/playfab/economy/inventory/subtractinventoryitems
     */
    SubtractInventoryItems (request: SubtractInventoryItemsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<SubtractInventoryItemsResponse>("/Inventory/SubtractInventoryItems", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Submit a request to takedown one or more reviews.
     * https://docs.microsoft.com/rest/api/playfab/economy/catalog/takedownitemreviews
     */
    TakedownItemReviews (request: TakedownItemReviewsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<TakedownItemReviewsResponse>("/Catalog/TakedownItemReviews", request, "X-EntityToken", customData, extraHeaders);
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
    TransferInventoryItems (request: TransferInventoryItemsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<TransferInventoryItemsResponse>("/Inventory/TransferInventoryItems", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Updates the configuration for the catalog. Only Title Entities can call this API. There is a limit of 10 requests in 10
     * seconds for this API. More information about the Catalog Config can be found here:
     * https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/settings
     * https://docs.microsoft.com/rest/api/playfab/economy/catalog/updatecatalogconfig
     */
    UpdateCatalogConfig (request: UpdateCatalogConfigRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UpdateCatalogConfigResponse>("/Catalog/UpdateCatalogConfig", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Update the metadata for an item in the working catalog. Note: SAS tokens provided are valid for 1 hour.
     * https://docs.microsoft.com/rest/api/playfab/economy/catalog/updatedraftitem
     */
    UpdateDraftItem (request: UpdateDraftItemRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UpdateDraftItemResponse>("/Catalog/UpdateDraftItem", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Update inventory items
     * https://docs.microsoft.com/rest/api/playfab/economy/inventory/updateinventoryitems
     */
    UpdateInventoryItems (request: UpdateInventoryItemsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UpdateInventoryItemsResponse>("/Inventory/UpdateInventoryItems", request, "X-EntityToken", customData, extraHeaders);
    }

};
