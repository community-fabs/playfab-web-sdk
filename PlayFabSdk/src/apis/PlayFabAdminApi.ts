import type { EmptyResponse } from "../types/PlayFab";
import type {

  AbortTaskInstanceRequest,
  AddLocalizedNewsRequest,
  AddNewsRequest,
  AddPlayerTagRequest,
  AddUserVirtualCurrencyRequest,
  AddVirtualCurrencyTypesRequest,
  BanUsersRequest,
  CheckLimitedEditionItemAvailabilityRequest,
  CreateActionsOnPlayerSegmentTaskRequest,
  CreateCloudScriptTaskRequest,
  CreateInsightsScheduledScalingTaskRequest,
  CreateOpenIdConnectionRequest,
  CreatePlayerSharedSecretRequest,
  CreatePlayerStatisticDefinitionRequest,
  CreateSegmentRequest,
  DeleteContentRequest,
  DeleteMasterPlayerAccountRequest,
  DeleteMasterPlayerEventDataRequest,
  DeleteMembershipSubscriptionRequest,
  DeleteOpenIdConnectionRequest,
  DeletePlayerRequest,
  DeletePlayerCustomPropertiesRequest,
  DeletePlayerSharedSecretRequest,
  DeleteSegmentRequest,
  DeleteStoreRequest,
  DeleteTaskRequest,
  DeleteTitleRequest,
  DeleteTitleDataOverrideRequest,
  ExportMasterPlayerDataRequest,
  ExportPlayersInSegmentRequest,
  GetTaskInstanceRequest,
  GetAllSegmentsRequest,
  GetCatalogItemsRequest,
  GetCloudScriptRevisionRequest,
  GetCloudScriptVersionsRequest,
  GetContentListRequest,
  GetContentUploadUrlRequest,
  GetDataReportRequest,
  GetPlayedTitleListRequest,
  GetPlayerCustomPropertyRequest,
  GetPlayerIdFromAuthTokenRequest,
  GetPlayerProfileRequest,
  GetPlayersSegmentsRequest,
  GetPlayerSharedSecretsRequest,
  GetPlayersInSegmentRequest,
  GetPlayerStatisticDefinitionsRequest,
  GetPlayerStatisticVersionsRequest,
  GetPlayerTagsRequest,
  GetPolicyRequest,
  GetPublisherDataRequest,
  GetRandomResultTablesRequest,
  GetPlayersInSegmentExportRequest,
  GetSegmentsRequest,
  GetStoreItemsRequest,
  GetTaskInstancesRequest,
  GetTasksRequest,
  GetTitleDataRequest,
  LookupUserAccountInfoRequest,
  GetUserBansRequest,
  GetUserDataRequest,
  GetUserInventoryRequest,
  GrantItemsToUsersRequest,
  IncrementLimitedEditionItemAvailabilityRequest,
  IncrementPlayerStatisticVersionRequest,
  ListOpenIdConnectionRequest,
  ListPlayerCustomPropertiesRequest,
  ListVirtualCurrencyTypesRequest,
  RefundPurchaseRequest,
  RemovePlayerTagRequest,
  RemoveVirtualCurrencyTypesRequest,
  ResetCharacterStatisticsRequest,
  ResetPasswordRequest,
  ResetUserStatisticsRequest,
  ResolvePurchaseDisputeRequest,
  RevokeAllBansForUserRequest,
  RevokeBansRequest,
  RevokeInventoryItemRequest,
  RevokeInventoryItemsRequest,
  RunTaskRequest,
  SendAccountRecoveryEmailRequest,
  UpdateCatalogItemsRequest,
  SetMembershipOverrideRequest,
  SetPlayerSecretRequest,
  SetPublishedRevisionRequest,
  SetPublisherDataRequest,
  UpdateStoreItemsRequest,
  SetTitleDataRequest,
  SetTitleDataAndOverridesRequest,
  SetupPushNotificationRequest,
  SubtractUserVirtualCurrencyRequest,
  UpdateBansRequest,
  UpdateCloudScriptRequest,
  UpdateOpenIdConnectionRequest,
  UpdatePlayerCustomPropertiesRequest,
  UpdatePlayerSharedSecretRequest,
  UpdatePlayerStatisticDefinitionRequest,
  UpdatePolicyRequest,
  UpdateRandomResultTablesRequest,
  UpdateSegmentRequest,
  UpdateTaskRequest,
  UpdateUserDataRequest,
  UpdateUserInternalDataRequest,
  UpdateUserTitleDisplayNameRequest,
  AddLocalizedNewsResult,
  AddNewsResult,
  AddPlayerTagResult,
  ModifyUserVirtualCurrencyResult,
  BlankResult,
  BanUsersResult,
  CheckLimitedEditionItemAvailabilityResult,
  CreateTaskResult,
  CreatePlayerSharedSecretResult,
  CreatePlayerStatisticDefinitionResult,
  CreateSegmentResponse,
  DeleteMasterPlayerAccountResult,
  DeleteMasterPlayerEventDataResult,
  DeleteMembershipSubscriptionResult,
  DeletePlayerResult,
  DeletePlayerCustomPropertiesResult,
  DeletePlayerSharedSecretResult,
  DeleteSegmentsResponse,
  DeleteStoreResult,
  DeleteTitleResult,
  DeleteTitleDataOverrideResult,
  ExportMasterPlayerDataResult,
  ExportPlayersInSegmentResult,
  GetActionsOnPlayersInSegmentTaskInstanceResult,
  GetAllSegmentsResult,
  GetCatalogItemsResult,
  GetCloudScriptRevisionResult,
  GetCloudScriptTaskInstanceResult,
  GetCloudScriptVersionsResult,
  GetContentListResult,
  GetContentUploadUrlResult,
  GetDataReportResult,
  GetPlayedTitleListResult,
  GetPlayerCustomPropertyResult,
  GetPlayerIdFromAuthTokenResult,
  GetPlayerProfileResult,
  GetPlayerSegmentsResult,
  GetPlayerSharedSecretsResult,
  GetPlayersInSegmentResult,
  GetPlayerStatisticDefinitionsResult,
  GetPlayerStatisticVersionsResult,
  GetPlayerTagsResult,
  GetPolicyResponse,
  GetPublisherDataResult,
  GetRandomResultTablesResult,
  GetPlayersInSegmentExportResponse,
  GetSegmentsResponse,
  GetStoreItemsResult,
  GetTaskInstancesResult,
  GetTasksResult,
  GetTitleDataResult,
  LookupUserAccountInfoResult,
  GetUserBansResult,
  GetUserDataResult,
  GetUserInventoryResult,
  GrantItemsToUsersResult,
  IncrementLimitedEditionItemAvailabilityResult,
  IncrementPlayerStatisticVersionResult,
  ListOpenIdConnectionResponse,
  ListPlayerCustomPropertiesResult,
  ListVirtualCurrencyTypesResult,
  RefundPurchaseResponse,
  RemovePlayerTagResult,
  ResetCharacterStatisticsResult,
  ResetPasswordResult,
  ResetUserStatisticsResult,
  ResolvePurchaseDisputeResponse,
  RevokeAllBansForUserResult,
  RevokeBansResult,
  RevokeInventoryResult,
  RevokeInventoryItemsResult,
  RunTaskResult,
  SendAccountRecoveryEmailResult,
  UpdateCatalogItemsResult,
  SetMembershipOverrideResult,
  SetPlayerSecretResult,
  SetPublishedRevisionResult,
  SetPublisherDataResult,
  UpdateStoreItemsResult,
  SetTitleDataResult,
  SetTitleDataAndOverridesResult,
  SetupPushNotificationResult,
  UpdateBansResult,
  UpdateCloudScriptResult,
  UpdatePlayerCustomPropertiesResult,
  UpdatePlayerSharedSecretResult,
  UpdatePlayerStatisticDefinitionResult,
  UpdatePolicyResponse,
  UpdateRandomResultTablesResult,
  UpdateSegmentResponse,
  UpdateUserDataResult,
  UpdateUserTitleDisplayNameResult,
} from "../types/PlayFabAdminApi";
import { PlayFabCommon } from "../PlayFabCommon";

export default class PlayFabAdminApi extends PlayFabCommon {

    /**
     * Abort an ongoing task instance.
     * https://docs.microsoft.com/rest/api/playfab/admin/scheduledtask/aborttaskinstance
     */
    AbortTaskInstance (request: AbortTaskInstanceRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/Admin/AbortTaskInstance", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Update news item to include localized version
     * https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/addlocalizednews
     */
    AddLocalizedNews (request: AddLocalizedNewsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<AddLocalizedNewsResult>("/Admin/AddLocalizedNews", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Adds a new news item to the title's news feed
     * https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/addnews
     */
    AddNews (request: AddNewsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<AddNewsResult>("/Admin/AddNews", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Adds a given tag to a player profile. The tag's namespace is automatically generated based on the source of the tag.
     * https://docs.microsoft.com/rest/api/playfab/admin/playstream/addplayertag
     */
    AddPlayerTag (request: AddPlayerTagRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<AddPlayerTagResult>("/Admin/AddPlayerTag", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Increments the specified virtual currency by the stated amount
     * https://docs.microsoft.com/rest/api/playfab/admin/player-item-management/adduservirtualcurrency
     */
    AddUserVirtualCurrency (request: AddUserVirtualCurrencyRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ModifyUserVirtualCurrencyResult>("/Admin/AddUserVirtualCurrency", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Adds one or more virtual currencies to the set defined for the title. Virtual Currencies have a maximum
     * value of 2,147,483,647 when granted to a player. Any value over that will be discarded.
     * https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/addvirtualcurrencytypes
     */
    AddVirtualCurrencyTypes (request: AddVirtualCurrencyTypesRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<BlankResult>("/Admin/AddVirtualCurrencyTypes", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Bans users by PlayFab ID with optional IP address, or MAC address for the provided game.
     * https://docs.microsoft.com/rest/api/playfab/admin/account-management/banusers
     */
    BanUsers (request: BanUsersRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<BanUsersResult>("/Admin/BanUsers", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Checks the global count for the limited edition item.
     * https://docs.microsoft.com/rest/api/playfab/admin/player-item-management/checklimitededitionitemavailability
     */
    CheckLimitedEditionItemAvailability (request: CheckLimitedEditionItemAvailabilityRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<CheckLimitedEditionItemAvailabilityResult>("/Admin/CheckLimitedEditionItemAvailability", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Create an ActionsOnPlayersInSegment task, which iterates through all players in a segment to execute action.
     * https://docs.microsoft.com/rest/api/playfab/admin/scheduledtask/createactionsonplayersinsegmenttask
     */
    CreateActionsOnPlayersInSegmentTask (request: CreateActionsOnPlayerSegmentTaskRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<CreateTaskResult>("/Admin/CreateActionsOnPlayersInSegmentTask", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Create a CloudScript task, which can run a CloudScript on a schedule.
     * https://docs.microsoft.com/rest/api/playfab/admin/scheduledtask/createcloudscripttask
     */
    CreateCloudScriptTask (request: CreateCloudScriptTaskRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<CreateTaskResult>("/Admin/CreateCloudScriptTask", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Create a Insights Scheduled Scaling task, which can scale Insights Performance Units on a schedule
     * https://docs.microsoft.com/rest/api/playfab/admin/scheduledtask/createinsightsscheduledscalingtask
     */
    CreateInsightsScheduledScalingTask (request: CreateInsightsScheduledScalingTaskRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<CreateTaskResult>("/Admin/CreateInsightsScheduledScalingTask", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Registers a relationship between a title and an Open ID Connect provider.
     * https://docs.microsoft.com/rest/api/playfab/admin/authentication/createopenidconnection
     */
    CreateOpenIdConnection (request: CreateOpenIdConnectionRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/Admin/CreateOpenIdConnection", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Creates a new Player Shared Secret Key. It may take up to 5 minutes for this key to become generally available after
     * this API returns.
     * https://docs.microsoft.com/rest/api/playfab/admin/authentication/createplayersharedsecret
     */
    CreatePlayerSharedSecret (request: CreatePlayerSharedSecretRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<CreatePlayerSharedSecretResult>("/Admin/CreatePlayerSharedSecret", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Adds a new player statistic configuration to the title, optionally allowing the developer to specify a reset interval
     * and an aggregation method.
     * https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/createplayerstatisticdefinition
     */
    CreatePlayerStatisticDefinition (request: CreatePlayerStatisticDefinitionRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<CreatePlayerStatisticDefinitionResult>("/Admin/CreatePlayerStatisticDefinition", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Creates a new player segment by defining the conditions on player properties. Also, create actions to target the player
     * segments for a title.
     * https://docs.microsoft.com/rest/api/playfab/admin/segments/createsegment
     */
    CreateSegment (request: CreateSegmentRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<CreateSegmentResponse>("/Admin/CreateSegment", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Delete a content file from the title. When deleting a file that does not exist, it returns success.
     * https://docs.microsoft.com/rest/api/playfab/admin/content/deletecontent
     */
    DeleteContent (request: DeleteContentRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<BlankResult>("/Admin/DeleteContent", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Removes a master player account entirely from all titles and deletes all associated data
     * https://docs.microsoft.com/rest/api/playfab/admin/account-management/deletemasterplayeraccount
     */
    DeleteMasterPlayerAccount (request: DeleteMasterPlayerAccountRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<DeleteMasterPlayerAccountResult>("/Admin/DeleteMasterPlayerAccount", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Deletes PlayStream and telemetry event data associated with the master player account from PlayFab storage
     * https://docs.microsoft.com/rest/api/playfab/admin/account-management/deletemasterplayereventdata
     */
    DeleteMasterPlayerEventData (request: DeleteMasterPlayerEventDataRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<DeleteMasterPlayerEventDataResult>("/Admin/DeleteMasterPlayerEventData", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Deletes a player's subscription
     * https://docs.microsoft.com/rest/api/playfab/admin/account-management/deletemembershipsubscription
     */
    DeleteMembershipSubscription (request: DeleteMembershipSubscriptionRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<DeleteMembershipSubscriptionResult>("/Admin/DeleteMembershipSubscription", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Removes a relationship between a title and an OpenID Connect provider.
     * https://docs.microsoft.com/rest/api/playfab/admin/authentication/deleteopenidconnection
     */
    DeleteOpenIdConnection (request: DeleteOpenIdConnectionRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/Admin/DeleteOpenIdConnection", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Removes a user's player account from a title and deletes all associated data
     * https://docs.microsoft.com/rest/api/playfab/admin/account-management/deleteplayer
     */
    DeletePlayer (request: DeletePlayerRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<DeletePlayerResult>("/Admin/DeletePlayer", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Deletes title-specific custom properties for a player
     * https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/deleteplayercustomproperties
     */
    DeletePlayerCustomProperties (request: DeletePlayerCustomPropertiesRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<DeletePlayerCustomPropertiesResult>("/Admin/DeletePlayerCustomProperties", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Deletes an existing Player Shared Secret Key. It may take up to 5 minutes for this delete to be reflected after this API
     * returns.
     * https://docs.microsoft.com/rest/api/playfab/admin/authentication/deleteplayersharedsecret
     */
    DeletePlayerSharedSecret (request: DeletePlayerSharedSecretRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<DeletePlayerSharedSecretResult>("/Admin/DeletePlayerSharedSecret", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Deletes an existing player segment and its associated action(s) for a title.
     * https://docs.microsoft.com/rest/api/playfab/admin/segments/deletesegment
     */
    DeleteSegment (request: DeleteSegmentRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<DeleteSegmentsResponse>("/Admin/DeleteSegment", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Deletes an existing virtual item store
     * https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/deletestore
     */
    DeleteStore (request: DeleteStoreRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<DeleteStoreResult>("/Admin/DeleteStore", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Delete a task.
     * https://docs.microsoft.com/rest/api/playfab/admin/scheduledtask/deletetask
     */
    DeleteTask (request: DeleteTaskRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/Admin/DeleteTask", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Permanently deletes a title and all associated configuration
     * https://docs.microsoft.com/rest/api/playfab/admin/account-management/deletetitle
     */
    DeleteTitle (request: DeleteTitleRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<DeleteTitleResult>("/Admin/DeleteTitle", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Deletes a specified set of title data overrides.
     * https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/deletetitledataoverride
     */
    DeleteTitleDataOverride (request: DeleteTitleDataOverrideRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<DeleteTitleDataOverrideResult>("/Admin/DeleteTitleDataOverride", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Exports all associated data of a master player account
     * https://docs.microsoft.com/rest/api/playfab/admin/account-management/exportmasterplayerdata
     */
    ExportMasterPlayerData (request: ExportMasterPlayerDataRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ExportMasterPlayerDataResult>("/Admin/ExportMasterPlayerData", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Starts an export for the player profiles in a segment. This API creates a snapshot of all the player profiles which
     * match the segment definition at the time of the API call. Profiles which change while an export is in progress will not
     * be reflected in the results.
     * https://docs.microsoft.com/rest/api/playfab/admin/playstream/exportplayersinsegment
     */
    ExportPlayersInSegment (request: ExportPlayersInSegmentRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ExportPlayersInSegmentResult>("/Admin/ExportPlayersInSegment", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Get information about a ActionsOnPlayersInSegment task instance.
     * https://docs.microsoft.com/rest/api/playfab/admin/scheduledtask/getactionsonplayersinsegmenttaskinstance
     */
    GetActionsOnPlayersInSegmentTaskInstance (request: GetTaskInstanceRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetActionsOnPlayersInSegmentTaskInstanceResult>("/Admin/GetActionsOnPlayersInSegmentTaskInstance", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Retrieves an array of player segment definitions. Results from this can be used in subsequent API calls such as
     * GetPlayersInSegment which requires a Segment ID. While segment names can change the ID for that segment will not change.
     * https://docs.microsoft.com/rest/api/playfab/admin/playstream/getallsegments
     */
    GetAllSegments (request: GetAllSegmentsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetAllSegmentsResult>("/Admin/GetAllSegments", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Retrieves the specified version of the title's catalog of virtual goods, including all defined properties
     * https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/getcatalogitems
     */
    GetCatalogItems (request: GetCatalogItemsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetCatalogItemsResult>("/Admin/GetCatalogItems", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Gets the contents and information of a specific Cloud Script revision.
     * https://docs.microsoft.com/rest/api/playfab/admin/server-side-cloud-script/getcloudscriptrevision
     */
    GetCloudScriptRevision (request: GetCloudScriptRevisionRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetCloudScriptRevisionResult>("/Admin/GetCloudScriptRevision", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Get detail information about a CloudScript task instance.
     * https://docs.microsoft.com/rest/api/playfab/admin/scheduledtask/getcloudscripttaskinstance
     */
    GetCloudScriptTaskInstance (request: GetTaskInstanceRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetCloudScriptTaskInstanceResult>("/Admin/GetCloudScriptTaskInstance", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Lists all the current cloud script versions. For each version, information about the current published and latest
     * revisions is also listed.
     * https://docs.microsoft.com/rest/api/playfab/admin/server-side-cloud-script/getcloudscriptversions
     */
    GetCloudScriptVersions (request: GetCloudScriptVersionsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetCloudScriptVersionsResult>("/Admin/GetCloudScriptVersions", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * List all contents of the title and get statistics such as size
     * https://docs.microsoft.com/rest/api/playfab/admin/content/getcontentlist
     */
    GetContentList (request: GetContentListRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetContentListResult>("/Admin/GetContentList", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Retrieves the pre-signed URL for uploading a content file. A subsequent HTTP PUT to the returned URL uploads the
     * content. Also, please be aware that the Content service is specifically PlayFab's CDN offering, for which standard CDN
     * rates apply.
     * https://docs.microsoft.com/rest/api/playfab/admin/content/getcontentuploadurl
     */
    GetContentUploadUrl (request: GetContentUploadUrlRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetContentUploadUrlResult>("/Admin/GetContentUploadUrl", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Retrieves a download URL for the requested report
     * https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/getdatareport
     */
    GetDataReport (request: GetDataReportRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetDataReportResult>("/Admin/GetDataReport", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Get the list of titles that the player has played
     * https://docs.microsoft.com/rest/api/playfab/admin/account-management/getplayedtitlelist
     */
    GetPlayedTitleList (request: GetPlayedTitleListRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayedTitleListResult>("/Admin/GetPlayedTitleList", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Retrieves a title-specific custom property value for a player.
     * https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/getplayercustomproperty
     */
    GetPlayerCustomProperty (request: GetPlayerCustomPropertyRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayerCustomPropertyResult>("/Admin/GetPlayerCustomProperty", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Gets a player's ID from an auth token.
     * https://docs.microsoft.com/rest/api/playfab/admin/account-management/getplayeridfromauthtoken
     */
    GetPlayerIdFromAuthToken (request: GetPlayerIdFromAuthTokenRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayerIdFromAuthTokenResult>("/Admin/GetPlayerIdFromAuthToken", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Retrieves the player's profile
     * https://docs.microsoft.com/rest/api/playfab/admin/account-management/getplayerprofile
     */
    GetPlayerProfile (request: GetPlayerProfileRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayerProfileResult>("/Admin/GetPlayerProfile", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * List all segments that a player currently belongs to at this moment in time.
     * https://docs.microsoft.com/rest/api/playfab/admin/playstream/getplayersegments
     */
    GetPlayerSegments (request: GetPlayersSegmentsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayerSegmentsResult>("/Admin/GetPlayerSegments", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Returns all Player Shared Secret Keys including disabled and expired.
     * https://docs.microsoft.com/rest/api/playfab/admin/authentication/getplayersharedsecrets
     */
    GetPlayerSharedSecrets (request: GetPlayerSharedSecretsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayerSharedSecretsResult>("/Admin/GetPlayerSharedSecrets", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Allows for paging through all players in a given segment. This API creates a snapshot of all player profiles that match
     * the segment definition at the time of its creation and lives through the Total Seconds to Live, refreshing its life span
     * on each subsequent use of the Continuation Token. Profiles that change during the course of paging will not be reflected
     * in the results. AB Test segments are currently not supported by this operation. NOTE: This API is limited to being
     * called 30 times in one minute. You will be returned an error if you exceed this threshold.
     * https://docs.microsoft.com/rest/api/playfab/admin/playstream/getplayersinsegment
     */
    GetPlayersInSegment (request: GetPlayersInSegmentRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayersInSegmentResult>("/Admin/GetPlayersInSegment", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Retrieves the configuration information for all player statistics defined in the title, regardless of whether they have
     * a reset interval.
     * https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/getplayerstatisticdefinitions
     */
    GetPlayerStatisticDefinitions (request: GetPlayerStatisticDefinitionsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayerStatisticDefinitionsResult>("/Admin/GetPlayerStatisticDefinitions", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Retrieves the information on the available versions of the specified statistic.
     * https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/getplayerstatisticversions
     */
    GetPlayerStatisticVersions (request: GetPlayerStatisticVersionsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayerStatisticVersionsResult>("/Admin/GetPlayerStatisticVersions", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Get all tags with a given Namespace (optional) from a player profile.
     * https://docs.microsoft.com/rest/api/playfab/admin/playstream/getplayertags
     */
    GetPlayerTags (request: GetPlayerTagsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayerTagsResult>("/Admin/GetPlayerTags", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Gets the requested policy.
     * https://docs.microsoft.com/rest/api/playfab/admin/authentication/getpolicy
     */
    GetPolicy (request: GetPolicyRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPolicyResponse>("/Admin/GetPolicy", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Retrieves the key-value store of custom publisher settings
     * https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/getpublisherdata
     */
    GetPublisherData (request: GetPublisherDataRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPublisherDataResult>("/Admin/GetPublisherData", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Retrieves the random drop table configuration for the title
     * https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/getrandomresulttables
     */
    GetRandomResultTables (request: GetRandomResultTablesRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetRandomResultTablesResult>("/Admin/GetRandomResultTables", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Retrieves the result of an export started by ExportPlayersInSegment API. If the ExportPlayersInSegment is successful and
     * complete, this API returns the IndexUrl from which the index file can be downloaded. The index file has a list of urls
     * from which the files containing the player profile data can be downloaded. Otherwise, it returns the current 'State' of
     * the export
     * https://docs.microsoft.com/rest/api/playfab/admin/playstream/getsegmentexport
     */
    GetSegmentExport (request: GetPlayersInSegmentExportRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayersInSegmentExportResponse>("/Admin/GetSegmentExport", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Get detail information of a segment and its associated definition(s) and action(s) for a title.
     * https://docs.microsoft.com/rest/api/playfab/admin/segments/getsegments
     */
    GetSegments (request: GetSegmentsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetSegmentsResponse>("/Admin/GetSegments", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Retrieves the set of items defined for the specified store, including all prices defined
     * https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/getstoreitems
     */
    GetStoreItems (request: GetStoreItemsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetStoreItemsResult>("/Admin/GetStoreItems", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Query for task instances by task, status, or time range.
     * https://docs.microsoft.com/rest/api/playfab/admin/scheduledtask/gettaskinstances
     */
    GetTaskInstances (request: GetTaskInstancesRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetTaskInstancesResult>("/Admin/GetTaskInstances", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Get definition information on a specified task or all tasks within a title.
     * https://docs.microsoft.com/rest/api/playfab/admin/scheduledtask/gettasks
     */
    GetTasks (request: GetTasksRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetTasksResult>("/Admin/GetTasks", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Retrieves the key-value store of custom title settings which can be read by the client
     * https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/gettitledata
     */
    GetTitleData (request: GetTitleDataRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetTitleDataResult>("/Admin/GetTitleData", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Retrieves the key-value store of custom title settings which cannot be read by the client
     * https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/gettitleinternaldata
     */
    GetTitleInternalData (request: GetTitleDataRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetTitleDataResult>("/Admin/GetTitleInternalData", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Retrieves the relevant details for a specified user, based upon a match against a supplied unique identifier
     * https://docs.microsoft.com/rest/api/playfab/admin/account-management/getuseraccountinfo
     */
    GetUserAccountInfo (request: LookupUserAccountInfoRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<LookupUserAccountInfoResult>("/Admin/GetUserAccountInfo", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Gets all bans for a user.
     * https://docs.microsoft.com/rest/api/playfab/admin/account-management/getuserbans
     */
    GetUserBans (request: GetUserBansRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetUserBansResult>("/Admin/GetUserBans", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Retrieves the title-specific custom data for the user which is readable and writable by the client
     * https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/getuserdata
     */
    GetUserData (request: GetUserDataRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetUserDataResult>("/Admin/GetUserData", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Retrieves the title-specific custom data for the user which cannot be accessed by the client
     * https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/getuserinternaldata
     */
    GetUserInternalData (request: GetUserDataRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetUserDataResult>("/Admin/GetUserInternalData", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Retrieves the specified user's current inventory of virtual goods
     * https://docs.microsoft.com/rest/api/playfab/admin/player-item-management/getuserinventory
     */
    GetUserInventory (request: GetUserInventoryRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetUserInventoryResult>("/Admin/GetUserInventory", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Retrieves the publisher-specific custom data for the user which is readable and writable by the client
     * https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/getuserpublisherdata
     */
    GetUserPublisherData (request: GetUserDataRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetUserDataResult>("/Admin/GetUserPublisherData", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Retrieves the publisher-specific custom data for the user which cannot be accessed by the client
     * https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/getuserpublisherinternaldata
     */
    GetUserPublisherInternalData (request: GetUserDataRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetUserDataResult>("/Admin/GetUserPublisherInternalData", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Retrieves the publisher-specific custom data for the user which can only be read by the client
     * https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/getuserpublisherreadonlydata
     */
    GetUserPublisherReadOnlyData (request: GetUserDataRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetUserDataResult>("/Admin/GetUserPublisherReadOnlyData", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Retrieves the title-specific custom data for the user which can only be read by the client
     * https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/getuserreadonlydata
     */
    GetUserReadOnlyData (request: GetUserDataRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetUserDataResult>("/Admin/GetUserReadOnlyData", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Adds the specified items to the specified user inventories
     * https://docs.microsoft.com/rest/api/playfab/admin/player-item-management/grantitemstousers
     */
    GrantItemsToUsers (request: GrantItemsToUsersRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GrantItemsToUsersResult>("/Admin/GrantItemsToUsers", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Increases the global count for the given scarce resource.
     * https://docs.microsoft.com/rest/api/playfab/admin/player-item-management/incrementlimitededitionitemavailability
     */
    IncrementLimitedEditionItemAvailability (request: IncrementLimitedEditionItemAvailabilityRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<IncrementLimitedEditionItemAvailabilityResult>("/Admin/IncrementLimitedEditionItemAvailability", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Resets the indicated statistic, removing all player entries for it and backing up the old values.
     * https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/incrementplayerstatisticversion
     */
    IncrementPlayerStatisticVersion (request: IncrementPlayerStatisticVersionRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<IncrementPlayerStatisticVersionResult>("/Admin/IncrementPlayerStatisticVersion", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Retrieves a list of all Open ID Connect providers registered to a title.
     * https://docs.microsoft.com/rest/api/playfab/admin/authentication/listopenidconnection
     */
    ListOpenIdConnection (request: ListOpenIdConnectionRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ListOpenIdConnectionResponse>("/Admin/ListOpenIdConnection", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Retrieves title-specific custom property values for a player.
     * https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/listplayercustomproperties
     */
    ListPlayerCustomProperties (request: ListPlayerCustomPropertiesRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ListPlayerCustomPropertiesResult>("/Admin/ListPlayerCustomProperties", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Retuns the list of all defined virtual currencies for the title
     * https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/listvirtualcurrencytypes
     */
    ListVirtualCurrencyTypes (request: ListVirtualCurrencyTypesRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ListVirtualCurrencyTypesResult>("/Admin/ListVirtualCurrencyTypes", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Attempts to process an order refund through the original real money payment provider.
     * https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/refundpurchase
     */
    RefundPurchase (request: RefundPurchaseRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<RefundPurchaseResponse>("/Admin/RefundPurchase", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Remove a given tag from a player profile. The tag's namespace is automatically generated based on the source of the tag.
     * https://docs.microsoft.com/rest/api/playfab/admin/playstream/removeplayertag
     */
    RemovePlayerTag (request: RemovePlayerTagRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<RemovePlayerTagResult>("/Admin/RemovePlayerTag", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Removes one or more virtual currencies from the set defined for the title.
     * https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/removevirtualcurrencytypes
     */
    RemoveVirtualCurrencyTypes (request: RemoveVirtualCurrencyTypesRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<BlankResult>("/Admin/RemoveVirtualCurrencyTypes", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Completely removes all statistics for the specified character, for the current game
     * https://docs.microsoft.com/rest/api/playfab/admin/characters/resetcharacterstatistics
     */
    ResetCharacterStatistics (request: ResetCharacterStatisticsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ResetCharacterStatisticsResult>("/Admin/ResetCharacterStatistics", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Reset a player's password for a given title.
     * https://docs.microsoft.com/rest/api/playfab/admin/account-management/resetpassword
     */
    ResetPassword (request: ResetPasswordRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ResetPasswordResult>("/Admin/ResetPassword", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Completely removes all statistics for the specified user, for the current game
     * https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/resetuserstatistics
     */
    ResetUserStatistics (request: ResetUserStatisticsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ResetUserStatisticsResult>("/Admin/ResetUserStatistics", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Attempts to resolve a dispute with the original order's payment provider.
     * https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/resolvepurchasedispute
     */
    ResolvePurchaseDispute (request: ResolvePurchaseDisputeRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ResolvePurchaseDisputeResponse>("/Admin/ResolvePurchaseDispute", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Revoke all active bans for a user.
     * https://docs.microsoft.com/rest/api/playfab/admin/account-management/revokeallbansforuser
     */
    RevokeAllBansForUser (request: RevokeAllBansForUserRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<RevokeAllBansForUserResult>("/Admin/RevokeAllBansForUser", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Revoke all active bans specified with BanId.
     * https://docs.microsoft.com/rest/api/playfab/admin/account-management/revokebans
     */
    RevokeBans (request: RevokeBansRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<RevokeBansResult>("/Admin/RevokeBans", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Revokes access to an item in a user's inventory
     * https://docs.microsoft.com/rest/api/playfab/admin/player-item-management/revokeinventoryitem
     */
    RevokeInventoryItem (request: RevokeInventoryItemRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<RevokeInventoryResult>("/Admin/RevokeInventoryItem", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Revokes access for up to 25 items across multiple users and characters.
     * https://docs.microsoft.com/rest/api/playfab/admin/player-item-management/revokeinventoryitems
     */
    RevokeInventoryItems (request: RevokeInventoryItemsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<RevokeInventoryItemsResult>("/Admin/RevokeInventoryItems", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Run a task immediately regardless of its schedule.
     * https://docs.microsoft.com/rest/api/playfab/admin/scheduledtask/runtask
     */
    RunTask (request: RunTaskRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<RunTaskResult>("/Admin/RunTask", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Forces an email to be sent to the registered email address for the user's account, with a link allowing the user to
     * change the password.If an account recovery email template ID is provided, an email using the custom email template will
     * be used.
     * https://docs.microsoft.com/rest/api/playfab/admin/account-management/sendaccountrecoveryemail
     */
    SendAccountRecoveryEmail (request: SendAccountRecoveryEmailRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<SendAccountRecoveryEmailResult>("/Admin/SendAccountRecoveryEmail", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Creates the catalog configuration of all virtual goods for the specified catalog version
     * https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/setcatalogitems
     */
    SetCatalogItems (request: UpdateCatalogItemsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UpdateCatalogItemsResult>("/Admin/SetCatalogItems", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Sets the override expiration for a membership subscription
     * https://docs.microsoft.com/rest/api/playfab/admin/account-management/setmembershipoverride
     */
    SetMembershipOverride (request: SetMembershipOverrideRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<SetMembershipOverrideResult>("/Admin/SetMembershipOverride", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Sets or resets the player's secret. Player secrets are used to sign API requests.
     * https://docs.microsoft.com/rest/api/playfab/admin/authentication/setplayersecret
     */
    SetPlayerSecret (request: SetPlayerSecretRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<SetPlayerSecretResult>("/Admin/SetPlayerSecret", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Sets the currently published revision of a title Cloud Script
     * https://docs.microsoft.com/rest/api/playfab/admin/server-side-cloud-script/setpublishedrevision
     */
    SetPublishedRevision (request: SetPublishedRevisionRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<SetPublishedRevisionResult>("/Admin/SetPublishedRevision", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Updates the key-value store of custom publisher settings
     * https://docs.microsoft.com/rest/api/playfab/admin/shared-group-data/setpublisherdata
     */
    SetPublisherData (request: SetPublisherDataRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<SetPublisherDataResult>("/Admin/SetPublisherData", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Sets all the items in one virtual store
     * https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/setstoreitems
     */
    SetStoreItems (request: UpdateStoreItemsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UpdateStoreItemsResult>("/Admin/SetStoreItems", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Creates and updates the key-value store of custom title settings which can be read by the client. For example, a
     * developer could choose to store values which modify the user experience, such as enemy spawn rates, weapon strengths,
     * movement speeds, etc. This allows a developer to update the title without the need to create, test, and ship a new
     * build.
     * https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/settitledata
     */
    SetTitleData (request: SetTitleDataRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<SetTitleDataResult>("/Admin/SetTitleData", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Set and delete key-value pairs in a title data override instance.
     * https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/settitledataandoverrides
     */
    SetTitleDataAndOverrides (request: SetTitleDataAndOverridesRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<SetTitleDataAndOverridesResult>("/Admin/SetTitleDataAndOverrides", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Updates the key-value store of custom title settings which cannot be read by the client. These values can be used to
     * tweak settings used by game servers and Cloud Scripts without the need to update and re-deploy.
     * https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/settitleinternaldata
     */
    SetTitleInternalData (request: SetTitleDataRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<SetTitleDataResult>("/Admin/SetTitleInternalData", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Sets the Amazon Resource Name (ARN) for iOS and Android push notifications. Documentation on the exact restrictions can
     * be found at: http://docs.aws.amazon.com/sns/latest/api/API_CreatePlatformApplication.html. Currently, Amazon device
     * Messaging is not supported.
     * https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/setuppushnotification
     */
    SetupPushNotification (request: SetupPushNotificationRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<SetupPushNotificationResult>("/Admin/SetupPushNotification", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Decrements the specified virtual currency by the stated amount
     * https://docs.microsoft.com/rest/api/playfab/admin/player-item-management/subtractuservirtualcurrency
     */
    SubtractUserVirtualCurrency (request: SubtractUserVirtualCurrencyRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ModifyUserVirtualCurrencyResult>("/Admin/SubtractUserVirtualCurrency", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Updates information of a list of existing bans specified with Ban Ids.
     * https://docs.microsoft.com/rest/api/playfab/admin/account-management/updatebans
     */
    UpdateBans (request: UpdateBansRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UpdateBansResult>("/Admin/UpdateBans", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Updates the catalog configuration for virtual goods in the specified catalog version
     * https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/updatecatalogitems
     */
    UpdateCatalogItems (request: UpdateCatalogItemsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UpdateCatalogItemsResult>("/Admin/UpdateCatalogItems", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Creates a new Cloud Script revision and uploads source code to it. Note that at this time, only one file should be
     * submitted in the revision.
     * https://docs.microsoft.com/rest/api/playfab/admin/server-side-cloud-script/updatecloudscript
     */
    UpdateCloudScript (request: UpdateCloudScriptRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UpdateCloudScriptResult>("/Admin/UpdateCloudScript", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Modifies data and credentials for an existing relationship between a title and an Open ID Connect provider
     * https://docs.microsoft.com/rest/api/playfab/admin/authentication/updateopenidconnection
     */
    UpdateOpenIdConnection (request: UpdateOpenIdConnectionRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/Admin/UpdateOpenIdConnection", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Updates the title-specific custom property values for a player
     * https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/updateplayercustomproperties
     */
    UpdatePlayerCustomProperties (request: UpdatePlayerCustomPropertiesRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UpdatePlayerCustomPropertiesResult>("/Admin/UpdatePlayerCustomProperties", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Updates a existing Player Shared Secret Key. It may take up to 5 minutes for this update to become generally available
     * after this API returns.
     * https://docs.microsoft.com/rest/api/playfab/admin/authentication/updateplayersharedsecret
     */
    UpdatePlayerSharedSecret (request: UpdatePlayerSharedSecretRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UpdatePlayerSharedSecretResult>("/Admin/UpdatePlayerSharedSecret", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Updates a player statistic configuration for the title, optionally allowing the developer to specify a reset interval.
     * https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/updateplayerstatisticdefinition
     */
    UpdatePlayerStatisticDefinition (request: UpdatePlayerStatisticDefinitionRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UpdatePlayerStatisticDefinitionResult>("/Admin/UpdatePlayerStatisticDefinition", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Changes a policy for a title
     * https://docs.microsoft.com/rest/api/playfab/admin/authentication/updatepolicy
     */
    UpdatePolicy (request: UpdatePolicyRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UpdatePolicyResponse>("/Admin/UpdatePolicy", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Updates the random drop table configuration for the title
     * https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/updaterandomresulttables
     */
    UpdateRandomResultTables (request: UpdateRandomResultTablesRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UpdateRandomResultTablesResult>("/Admin/UpdateRandomResultTables", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Updates an existing player segment and its associated definition(s) and action(s) for a title.
     * https://docs.microsoft.com/rest/api/playfab/admin/segments/updatesegment
     */
    UpdateSegment (request: UpdateSegmentRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UpdateSegmentResponse>("/Admin/UpdateSegment", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Updates an existing virtual item store with new or modified items
     * https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/updatestoreitems
     */
    UpdateStoreItems (request: UpdateStoreItemsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UpdateStoreItemsResult>("/Admin/UpdateStoreItems", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Update an existing task.
     * https://docs.microsoft.com/rest/api/playfab/admin/scheduledtask/updatetask
     */
    UpdateTask (request: UpdateTaskRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/Admin/UpdateTask", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Updates the title-specific custom data for the user which is readable and writable by the client
     * https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/updateuserdata
     */
    UpdateUserData (request: UpdateUserDataRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UpdateUserDataResult>("/Admin/UpdateUserData", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Updates the title-specific custom data for the user which cannot be accessed by the client
     * https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/updateuserinternaldata
     */
    UpdateUserInternalData (request: UpdateUserInternalDataRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UpdateUserDataResult>("/Admin/UpdateUserInternalData", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Updates the publisher-specific custom data for the user which is readable and writable by the client
     * https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/updateuserpublisherdata
     */
    UpdateUserPublisherData (request: UpdateUserDataRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UpdateUserDataResult>("/Admin/UpdateUserPublisherData", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Updates the publisher-specific custom data for the user which cannot be accessed by the client
     * https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/updateuserpublisherinternaldata
     */
    UpdateUserPublisherInternalData (request: UpdateUserInternalDataRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UpdateUserDataResult>("/Admin/UpdateUserPublisherInternalData", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Updates the publisher-specific custom data for the user which can only be read by the client
     * https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/updateuserpublisherreadonlydata
     */
    UpdateUserPublisherReadOnlyData (request: UpdateUserDataRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UpdateUserDataResult>("/Admin/UpdateUserPublisherReadOnlyData", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Updates the title-specific custom data for the user which can only be read by the client
     * https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/updateuserreadonlydata
     */
    UpdateUserReadOnlyData (request: UpdateUserDataRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UpdateUserDataResult>("/Admin/UpdateUserReadOnlyData", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Updates the title specific display name for a user
     * https://docs.microsoft.com/rest/api/playfab/admin/account-management/updateusertitledisplayname
     */
    UpdateUserTitleDisplayName (request: UpdateUserTitleDisplayNameRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UpdateUserTitleDisplayNameResult>("/Admin/UpdateUserTitleDisplayName", request, "X-SecretKey", customData, extraHeaders);
    }

};
