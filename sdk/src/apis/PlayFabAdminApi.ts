import type { EmptyResponse } from "../types/PlayFab";
import type {
  AbortTaskInstanceRequest,
  AddLocalizedNewsRequest,
  AddNewsRequest,
  AddPlayerTagRequest,
  AddServerBuildRequest,
  AddUserVirtualCurrencyRequest,
  AddVirtualCurrencyTypesRequest,
  BanUsersRequest,
  CheckLimitedEditionItemAvailabilityRequest,
  CreateActionsOnPlayerSegmentTaskRequest,
  CreateCloudScriptAzureFunctionsTaskRequest,
  CreateCloudScriptTaskRequest,
  CreateInsightsScheduledScalingTaskRequest,
  CreateOpenIdConnectionRequest,
  CreatePlayerSharedSecretRequest,
  CreatePlayerStatisticDefinitionRequest,
  CreateSegmentRequest,
  DeleteContentRequest,
  DeleteEventSinkRequest,
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
  DeleteUsersRequest,
  ExportMasterPlayerDataRequest,
  ExportPlayersInSegmentRequest,
  GetTaskInstanceRequest,
  GetAllActionGroupsRequest,
  GetAllSegmentsRequest,
  GetCatalogItemsRequest,
  GetCloudScriptRevisionRequest,
  GetCloudScriptVersionsRequest,
  GetContentListRequest,
  GetContentUploadUrlRequest,
  GetDataReportRequest,
  GetEventSinksRequest,
  GetMatchmakerGameInfoRequest,
  GetMatchmakerGameModesRequest,
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
  GetServerBuildInfoRequest,
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
  ListBuildsRequest,
  ListVirtualCurrencyTypesRequest,
  ModifyMatchmakerGameModesRequest,
  ModifyServerBuildRequest,
  RefundPurchaseRequest,
  RemovePlayerTagRequest,
  RemoveServerBuildRequest,
  RemoveVirtualCurrencyTypesRequest,
  ResetCharacterStatisticsRequest,
  ResetPasswordRequest,
  ResetUsersRequest,
  ResetUserStatisticsRequest,
  ResolvePurchaseDisputeRequest,
  RevokeAllBansForUserRequest,
  RevokeBansRequest,
  RevokeInventoryItemRequest,
  RevokeInventoryItemsRequest,
  RunTaskRequest,
  SendAccountRecoveryEmailRequest,
  UpdateCatalogItemsRequest,
  SetEventSinkRequest,
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
  AddServerBuildResult,
  ModifyUserVirtualCurrencyResult,
  BlankResult,
  BanUsersResult,
  CheckLimitedEditionItemAvailabilityResult,
  CreateTaskResult,
  CreatePlayerSharedSecretResult,
  CreatePlayerStatisticDefinitionResult,
  CreateSegmentResponse,
  DeleteEventSinkResult,
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
  DeleteUsersResult,
  ExportMasterPlayerDataResult,
  ExportPlayersInSegmentResult,
  GetActionsOnPlayersInSegmentTaskInstanceResult,
  GetAllActionGroupsResult,
  GetAllSegmentsResult,
  GetCatalogItemsResult,
  GetCloudScriptAzureFunctionsTaskInstanceResult,
  GetCloudScriptRevisionResult,
  GetCloudScriptTaskInstanceResult,
  GetCloudScriptVersionsResult,
  GetContentListResult,
  GetContentUploadUrlResult,
  GetDataReportResult,
  GetEventSinksResult,
  GetMatchmakerGameInfoResult,
  GetMatchmakerGameModesResult,
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
  GetServerBuildInfoResult,
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
  ListBuildsResult,
  ListVirtualCurrencyTypesResult,
  ModifyMatchmakerGameModesResult,
  ModifyServerBuildResult,
  RefundPurchaseResponse,
  RemovePlayerTagResult,
  RemoveServerBuildResult,
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
  SetEventSinkResult,
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
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/scheduledtask/aborttaskinstance
   */
  AbortTaskInstance (request: AbortTaskInstanceRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Admin/AbortTaskInstance", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Update news item to include localized version
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/addlocalizednews
   */
  AddLocalizedNews (request: AddLocalizedNewsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<AddLocalizedNewsResult>("/Admin/AddLocalizedNews", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Adds a new news item to the title's news feed
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/addnews
   */
  AddNews (request: AddNewsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<AddNewsResult>("/Admin/AddNews", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Adds a given tag to a player profile. The tag's namespace is automatically generated based on the source of the tag.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/playstream/addplayertag
   */
  AddPlayerTag (request: AddPlayerTagRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<AddPlayerTagResult>("/Admin/AddPlayerTag", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Adds the game server executable specified (previously uploaded - see GetServerBuildUploadUrl) to the set of those a
   * client is permitted to request in a call to StartGame
   * @deprecated Do not use
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/custom-server-management/addserverbuild
   */
  AddServerBuild (request: AddServerBuildRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<AddServerBuildResult>("/Admin/AddServerBuild", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Increments the specified virtual currency by the stated amount
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/player-item-management/adduservirtualcurrency
   */
  AddUserVirtualCurrency (request: AddUserVirtualCurrencyRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ModifyUserVirtualCurrencyResult>("/Admin/AddUserVirtualCurrency", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Adds one or more virtual currencies to the set defined for the title. Virtual Currencies have a maximum
   * value of 2,147,483,647 when granted to a player. Any value over that will be discarded.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/addvirtualcurrencytypes
   */
  AddVirtualCurrencyTypes (request: AddVirtualCurrencyTypesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<BlankResult>("/Admin/AddVirtualCurrencyTypes", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Bans users by PlayFab ID with optional IP address, or MAC address for the provided game.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/account-management/banusers
   */
  BanUsers (request: BanUsersRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<BanUsersResult>("/Admin/BanUsers", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Checks the global count for the limited edition item.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/player-item-management/checklimitededitionitemavailability
   */
  CheckLimitedEditionItemAvailability (request: CheckLimitedEditionItemAvailabilityRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CheckLimitedEditionItemAvailabilityResult>("/Admin/CheckLimitedEditionItemAvailability", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Create an ActionsOnPlayersInSegment task, which iterates through all players in a segment to execute action.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/scheduledtask/createactionsonplayersinsegmenttask
   */
  CreateActionsOnPlayersInSegmentTask (request: CreateActionsOnPlayerSegmentTaskRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateTaskResult>("/Admin/CreateActionsOnPlayersInSegmentTask", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Create a CloudScript task, which can run a CloudScript on a schedule.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/scheduledtask/createcloudscriptazurefunctionstask
   */
  CreateCloudScriptAzureFunctionsTask (request: CreateCloudScriptAzureFunctionsTaskRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateTaskResult>("/Admin/CreateCloudScriptAzureFunctionsTask", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Create a CloudScript task, which can run a CloudScript on a schedule.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/scheduledtask/createcloudscripttask
   */
  CreateCloudScriptTask (request: CreateCloudScriptTaskRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateTaskResult>("/Admin/CreateCloudScriptTask", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Create a Insights Scheduled Scaling task, which can scale Insights Performance Units on a schedule
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/scheduledtask/createinsightsscheduledscalingtask
   */
  CreateInsightsScheduledScalingTask (request: CreateInsightsScheduledScalingTaskRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateTaskResult>("/Admin/CreateInsightsScheduledScalingTask", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Registers a relationship between a title and an Open ID Connect provider.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/authentication/createopenidconnection
   */
  CreateOpenIdConnection (request: CreateOpenIdConnectionRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Admin/CreateOpenIdConnection", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Creates a new Player Shared Secret Key. It may take up to 5 minutes for this key to become generally available after
   * this API returns.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/authentication/createplayersharedsecret
   */
  CreatePlayerSharedSecret (request: CreatePlayerSharedSecretRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreatePlayerSharedSecretResult>("/Admin/CreatePlayerSharedSecret", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Adds a new player statistic configuration to the title, optionally allowing the developer to specify a reset interval
   * and an aggregation method.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/createplayerstatisticdefinition
   */
  CreatePlayerStatisticDefinition (request: CreatePlayerStatisticDefinitionRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreatePlayerStatisticDefinitionResult>("/Admin/CreatePlayerStatisticDefinition", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Creates a new player segment by defining the conditions on player properties. Also, create actions to target the player
   * segments for a title.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/segments/createsegment
   */
  CreateSegment (request: CreateSegmentRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateSegmentResponse>("/Admin/CreateSegment", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Delete a content file from the title. When deleting a file that does not exist, it returns success.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/content/deletecontent
   */
  DeleteContent (request: DeleteContentRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<BlankResult>("/Admin/DeleteContent", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Deletes a sink to stop sending PlayStream and Telemetry event data
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/playstream/deleteeventsink
   */
  DeleteEventSink (request: DeleteEventSinkRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeleteEventSinkResult>("/Admin/DeleteEventSink", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Removes a master player account entirely from all titles and deletes all associated data
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/account-management/deletemasterplayeraccount
   */
  DeleteMasterPlayerAccount (request: DeleteMasterPlayerAccountRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeleteMasterPlayerAccountResult>("/Admin/DeleteMasterPlayerAccount", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Deletes PlayStream and telemetry event data associated with the master player account from PlayFab storage
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/account-management/deletemasterplayereventdata
   */
  DeleteMasterPlayerEventData (request: DeleteMasterPlayerEventDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeleteMasterPlayerEventDataResult>("/Admin/DeleteMasterPlayerEventData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Deletes a player's subscription
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/account-management/deletemembershipsubscription
   */
  DeleteMembershipSubscription (request: DeleteMembershipSubscriptionRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeleteMembershipSubscriptionResult>("/Admin/DeleteMembershipSubscription", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Removes a relationship between a title and an OpenID Connect provider.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/authentication/deleteopenidconnection
   */
  DeleteOpenIdConnection (request: DeleteOpenIdConnectionRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Admin/DeleteOpenIdConnection", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Removes a user's player account from a title and deletes all associated data
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/account-management/deleteplayer
   */
  DeletePlayer (request: DeletePlayerRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeletePlayerResult>("/Admin/DeletePlayer", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Deletes title-specific custom properties for a player
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/deleteplayercustomproperties
   */
  DeletePlayerCustomProperties (request: DeletePlayerCustomPropertiesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeletePlayerCustomPropertiesResult>("/Admin/DeletePlayerCustomProperties", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Deletes an existing Player Shared Secret Key. It may take up to 5 minutes for this delete to be reflected after this API
   * returns.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/authentication/deleteplayersharedsecret
   */
  DeletePlayerSharedSecret (request: DeletePlayerSharedSecretRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeletePlayerSharedSecretResult>("/Admin/DeletePlayerSharedSecret", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Deletes an existing player segment and its associated action(s) for a title.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/segments/deletesegment
   */
  DeleteSegment (request: DeleteSegmentRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeleteSegmentsResponse>("/Admin/DeleteSegment", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Deletes an existing virtual item store
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/deletestore
   */
  DeleteStore (request: DeleteStoreRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeleteStoreResult>("/Admin/DeleteStore", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Delete a task.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/scheduledtask/deletetask
   */
  DeleteTask (request: DeleteTaskRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Admin/DeleteTask", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Permanently deletes a title and all associated configuration
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/account-management/deletetitle
   */
  DeleteTitle (request: DeleteTitleRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeleteTitleResult>("/Admin/DeleteTitle", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Deletes a specified set of title data overrides.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/deletetitledataoverride
   */
  DeleteTitleDataOverride (request: DeleteTitleDataOverrideRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeleteTitleDataOverrideResult>("/Admin/DeleteTitleDataOverride", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Deletes the users for the provided game. Deletes custom data, all account linkages, and statistics. This method does not
   * remove the player's event history, login history, inventory items, nor virtual currencies.
   * @deprecated Please use DeletePlayer instead.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/deleteusers
   */
  DeleteUsers (request: DeleteUsersRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeleteUsersResult>("/Admin/DeleteUsers", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Exports all associated data of a master player account
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/account-management/exportmasterplayerdata
   */
  ExportMasterPlayerData (request: ExportMasterPlayerDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ExportMasterPlayerDataResult>("/Admin/ExportMasterPlayerData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Starts an export for the player profiles in a segment. This API creates a snapshot of all the player profiles which
   * match the segment definition at the time of the API call. Profiles which change while an export is in progress will not
   * be reflected in the results.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/playstream/exportplayersinsegment
   */
  ExportPlayersInSegment (request: ExportPlayersInSegmentRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ExportPlayersInSegmentResult>("/Admin/ExportPlayersInSegment", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Get information about a ActionsOnPlayersInSegment task instance.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/scheduledtask/getactionsonplayersinsegmenttaskinstance
   */
  GetActionsOnPlayersInSegmentTaskInstance (request: GetTaskInstanceRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetActionsOnPlayersInSegmentTaskInstanceResult>("/Admin/GetActionsOnPlayersInSegmentTaskInstance", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieve a list of all PlayStream actions groups.
   * @deprecated Please use GetTasks instead.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/playstream/getallactiongroups
   */
  GetAllActionGroups (request: GetAllActionGroupsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetAllActionGroupsResult>("/Admin/GetAllActionGroups", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves an array of player segment definitions. Results from this can be used in subsequent API calls such as
   * GetPlayersInSegment which requires a Segment ID. While segment names can change the ID for that segment will not change.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/playstream/getallsegments
   */
  GetAllSegments (request: GetAllSegmentsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetAllSegmentsResult>("/Admin/GetAllSegments", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Retrieves the specified version of the title's catalog of virtual goods, including all defined properties
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/getcatalogitems
   */
  GetCatalogItems (request: GetCatalogItemsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetCatalogItemsResult>("/Admin/GetCatalogItems", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Get detail information about a CloudScript Azure Functions task instance.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/scheduledtask/getcloudscriptazurefunctionstaskinstance
   */
  GetCloudScriptAzureFunctionsTaskInstance (request: GetTaskInstanceRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetCloudScriptAzureFunctionsTaskInstanceResult>("/Admin/GetCloudScriptAzureFunctionsTaskInstance", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Gets the contents and information of a specific Cloud Script revision.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/server-side-cloud-script/getcloudscriptrevision
   */
  GetCloudScriptRevision (request: GetCloudScriptRevisionRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetCloudScriptRevisionResult>("/Admin/GetCloudScriptRevision", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Get detail information about a CloudScript task instance.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/scheduledtask/getcloudscripttaskinstance
   */
  GetCloudScriptTaskInstance (request: GetTaskInstanceRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetCloudScriptTaskInstanceResult>("/Admin/GetCloudScriptTaskInstance", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Lists all the current cloud script versions. For each version, information about the current published and latest
   * revisions is also listed.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/server-side-cloud-script/getcloudscriptversions
   */
  GetCloudScriptVersions (request: GetCloudScriptVersionsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetCloudScriptVersionsResult>("/Admin/GetCloudScriptVersions", request, "X-SecretKey", extraHeaders);
  }

  /**
   * List all contents of the title and get statistics such as size
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/content/getcontentlist
   */
  GetContentList (request: GetContentListRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetContentListResult>("/Admin/GetContentList", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the pre-signed URL for uploading a content file. A subsequent HTTP PUT to the returned URL uploads the
   * content. Also, please be aware that the Content service is specifically PlayFab's CDN offering, for which standard CDN
   * rates apply.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/content/getcontentuploadurl
   */
  GetContentUploadUrl (request: GetContentUploadUrlRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetContentUploadUrlResult>("/Admin/GetContentUploadUrl", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves a download URL for the requested report
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/getdatareport
   */
  GetDataReport (request: GetDataReportRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetDataReportResult>("/Admin/GetDataReport", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the set of sinks to which to route PlayStream and Telemetry event data.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/playstream/geteventsinks
   */
  GetEventSinks (request: GetEventSinksRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetEventSinksResult>("/Admin/GetEventSinks", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the details for a specific completed session, including links to standard out and standard error logs
   * @deprecated Please use MultiplayerServer/GetMultiplayerSessionLogsBySessionId instead.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/matchmaking/getmatchmakergameinfo
   */
  GetMatchmakerGameInfo (request: GetMatchmakerGameInfoRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetMatchmakerGameInfoResult>("/Admin/GetMatchmakerGameInfo", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the details of defined game modes for the specified game server executable
   * @deprecated Do not use
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/matchmaking/getmatchmakergamemodes
   */
  GetMatchmakerGameModes (request: GetMatchmakerGameModesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetMatchmakerGameModesResult>("/Admin/GetMatchmakerGameModes", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Get the list of titles that the player has played
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/account-management/getplayedtitlelist
   */
  GetPlayedTitleList (request: GetPlayedTitleListRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayedTitleListResult>("/Admin/GetPlayedTitleList", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves a title-specific custom property value for a player.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/getplayercustomproperty
   */
  GetPlayerCustomProperty (request: GetPlayerCustomPropertyRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayerCustomPropertyResult>("/Admin/GetPlayerCustomProperty", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Gets a player's ID from an auth token.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/account-management/getplayeridfromauthtoken
   */
  GetPlayerIdFromAuthToken (request: GetPlayerIdFromAuthTokenRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayerIdFromAuthTokenResult>("/Admin/GetPlayerIdFromAuthToken", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the player's profile
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/account-management/getplayerprofile
   */
  GetPlayerProfile (request: GetPlayerProfileRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayerProfileResult>("/Admin/GetPlayerProfile", request, "X-SecretKey", extraHeaders);
  }

  /**
   * List all segments that a player currently belongs to at this moment in time.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/playstream/getplayersegments
   */
  GetPlayerSegments (request: GetPlayersSegmentsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayerSegmentsResult>("/Admin/GetPlayerSegments", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Returns all Player Shared Secret Keys including disabled and expired.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/authentication/getplayersharedsecrets
   */
  GetPlayerSharedSecrets (request: GetPlayerSharedSecretsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayerSharedSecretsResult>("/Admin/GetPlayerSharedSecrets", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Allows for paging through all players in a given segment. This API creates a snapshot of all player profiles that match
   * the segment definition at the time of its creation and lives through the Total Seconds to Live, refreshing its life span
   * on each subsequent use of the Continuation Token. Profiles that change during the course of paging will not be reflected
   * in the results. AB Test segments are currently not supported by this operation. NOTE: This API is limited to being
   * called 30 times in one minute. You will be returned an error if you exceed this threshold.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/playstream/getplayersinsegment
   */
  GetPlayersInSegment (request: GetPlayersInSegmentRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayersInSegmentResult>("/Admin/GetPlayersInSegment", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the configuration information for all player statistics defined in the title, regardless of whether they have
   * a reset interval.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/getplayerstatisticdefinitions
   */
  GetPlayerStatisticDefinitions (request: GetPlayerStatisticDefinitionsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayerStatisticDefinitionsResult>("/Admin/GetPlayerStatisticDefinitions", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the information on the available versions of the specified statistic.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/getplayerstatisticversions
   */
  GetPlayerStatisticVersions (request: GetPlayerStatisticVersionsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayerStatisticVersionsResult>("/Admin/GetPlayerStatisticVersions", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Get all tags with a given Namespace (optional) from a player profile.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/playstream/getplayertags
   */
  GetPlayerTags (request: GetPlayerTagsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayerTagsResult>("/Admin/GetPlayerTags", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Gets the requested policy.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/authentication/getpolicy
   */
  GetPolicy (request: GetPolicyRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPolicyResponse>("/Admin/GetPolicy", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the key-value store of custom publisher settings
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/getpublisherdata
   */
  GetPublisherData (request: GetPublisherDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPublisherDataResult>("/Admin/GetPublisherData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Retrieves the random drop table configuration for the title
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/getrandomresulttables
   */
  GetRandomResultTables (request: GetRandomResultTablesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetRandomResultTablesResult>("/Admin/GetRandomResultTables", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the result of an export started by ExportPlayersInSegment API. If the ExportPlayersInSegment is successful and
   * complete, this API returns the IndexUrl from which the index file can be downloaded. The index file has a list of urls
   * from which the files containing the player profile data can be downloaded. Otherwise, it returns the current 'State' of
   * the export
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/playstream/getsegmentexport
   */
  GetSegmentExport (request: GetPlayersInSegmentExportRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayersInSegmentExportResponse>("/Admin/GetSegmentExport", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Get detail information of a segment and its associated definition(s) and action(s) for a title.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/segments/getsegments
   */
  GetSegments (request: GetSegmentsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetSegmentsResponse>("/Admin/GetSegments", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the build details for the specified game server executable
   * @deprecated Do not use
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/custom-server-management/getserverbuildinfo
   */
  GetServerBuildInfo (request: GetServerBuildInfoRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetServerBuildInfoResult>("/Admin/GetServerBuildInfo", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Retrieves the set of items defined for the specified store, including all prices defined
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/getstoreitems
   */
  GetStoreItems (request: GetStoreItemsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetStoreItemsResult>("/Admin/GetStoreItems", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Query for task instances by task, status, or time range.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/scheduledtask/gettaskinstances
   */
  GetTaskInstances (request: GetTaskInstancesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetTaskInstancesResult>("/Admin/GetTaskInstances", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Get definition information on a specified task or all tasks within a title.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/scheduledtask/gettasks
   */
  GetTasks (request: GetTasksRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetTasksResult>("/Admin/GetTasks", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the key-value store of custom title settings which can be read by the client
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/gettitledata
   */
  GetTitleData (request: GetTitleDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetTitleDataResult>("/Admin/GetTitleData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the key-value store of custom title settings which cannot be read by the client
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/gettitleinternaldata
   */
  GetTitleInternalData (request: GetTitleDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetTitleDataResult>("/Admin/GetTitleInternalData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the relevant details for a specified user, based upon a match against a supplied unique identifier
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/account-management/getuseraccountinfo
   */
  GetUserAccountInfo (request: LookupUserAccountInfoRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<LookupUserAccountInfoResult>("/Admin/GetUserAccountInfo", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Gets all bans for a user.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/account-management/getuserbans
   */
  GetUserBans (request: GetUserBansRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetUserBansResult>("/Admin/GetUserBans", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the title-specific custom data for the user which is readable and writable by the client
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/getuserdata
   */
  GetUserData (request: GetUserDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetUserDataResult>("/Admin/GetUserData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the title-specific custom data for the user which cannot be accessed by the client
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/getuserinternaldata
   */
  GetUserInternalData (request: GetUserDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetUserDataResult>("/Admin/GetUserInternalData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Retrieves the specified user's current inventory of virtual goods
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/player-item-management/getuserinventory
   */
  GetUserInventory (request: GetUserInventoryRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetUserInventoryResult>("/Admin/GetUserInventory", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the publisher-specific custom data for the user which is readable and writable by the client
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/getuserpublisherdata
   */
  GetUserPublisherData (request: GetUserDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetUserDataResult>("/Admin/GetUserPublisherData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the publisher-specific custom data for the user which cannot be accessed by the client
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/getuserpublisherinternaldata
   */
  GetUserPublisherInternalData (request: GetUserDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetUserDataResult>("/Admin/GetUserPublisherInternalData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the publisher-specific custom data for the user which can only be read by the client
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/getuserpublisherreadonlydata
   */
  GetUserPublisherReadOnlyData (request: GetUserDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetUserDataResult>("/Admin/GetUserPublisherReadOnlyData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the title-specific custom data for the user which can only be read by the client
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/getuserreadonlydata
   */
  GetUserReadOnlyData (request: GetUserDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetUserDataResult>("/Admin/GetUserReadOnlyData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Adds the specified items to the specified user inventories
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/player-item-management/grantitemstousers
   */
  GrantItemsToUsers (request: GrantItemsToUsersRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GrantItemsToUsersResult>("/Admin/GrantItemsToUsers", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Increases the global count for the given scarce resource.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/player-item-management/incrementlimitededitionitemavailability
   */
  IncrementLimitedEditionItemAvailability (request: IncrementLimitedEditionItemAvailabilityRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<IncrementLimitedEditionItemAvailabilityResult>("/Admin/IncrementLimitedEditionItemAvailability", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Resets the indicated statistic, removing all player entries for it and backing up the old values.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/incrementplayerstatisticversion
   */
  IncrementPlayerStatisticVersion (request: IncrementPlayerStatisticVersionRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<IncrementPlayerStatisticVersionResult>("/Admin/IncrementPlayerStatisticVersion", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves a list of all Open ID Connect providers registered to a title.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/authentication/listopenidconnection
   */
  ListOpenIdConnection (request: ListOpenIdConnectionRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListOpenIdConnectionResponse>("/Admin/ListOpenIdConnection", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves title-specific custom property values for a player.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/listplayercustomproperties
   */
  ListPlayerCustomProperties (request: ListPlayerCustomPropertiesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListPlayerCustomPropertiesResult>("/Admin/ListPlayerCustomProperties", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the build details for all game server executables which are currently defined for the title
   * @deprecated Do not use
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/custom-server-management/listserverbuilds
   */
  ListServerBuilds (request: ListBuildsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListBuildsResult>("/Admin/ListServerBuilds", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Retuns the list of all defined virtual currencies for the title
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/listvirtualcurrencytypes
   */
  ListVirtualCurrencyTypes (request: ListVirtualCurrencyTypesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListVirtualCurrencyTypesResult>("/Admin/ListVirtualCurrencyTypes", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Updates the game server mode details for the specified game server executable
   * @deprecated Do not use
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/matchmaking/modifymatchmakergamemodes
   */
  ModifyMatchmakerGameModes (request: ModifyMatchmakerGameModesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ModifyMatchmakerGameModesResult>("/Admin/ModifyMatchmakerGameModes", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Updates the build details for the specified game server executable
   * @deprecated Do not use
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/custom-server-management/modifyserverbuild
   */
  ModifyServerBuild (request: ModifyServerBuildRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ModifyServerBuildResult>("/Admin/ModifyServerBuild", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Attempts to process an order refund through the original real money payment provider.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/refundpurchase
   */
  RefundPurchase (request: RefundPurchaseRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<RefundPurchaseResponse>("/Admin/RefundPurchase", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Remove a given tag from a player profile. The tag's namespace is automatically generated based on the source of the tag.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/playstream/removeplayertag
   */
  RemovePlayerTag (request: RemovePlayerTagRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<RemovePlayerTagResult>("/Admin/RemovePlayerTag", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Removes the game server executable specified from the set of those a client is permitted to request in a call to
   * StartGame
   * @deprecated Do not use
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/custom-server-management/removeserverbuild
   */
  RemoveServerBuild (request: RemoveServerBuildRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<RemoveServerBuildResult>("/Admin/RemoveServerBuild", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Removes one or more virtual currencies from the set defined for the title.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/removevirtualcurrencytypes
   */
  RemoveVirtualCurrencyTypes (request: RemoveVirtualCurrencyTypesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<BlankResult>("/Admin/RemoveVirtualCurrencyTypes", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Completely removes all statistics for the specified character, for the current game
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/characters/resetcharacterstatistics
   */
  ResetCharacterStatistics (request: ResetCharacterStatisticsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ResetCharacterStatisticsResult>("/Admin/ResetCharacterStatistics", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Reset a player's password for a given title.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/account-management/resetpassword
   */
  ResetPassword (request: ResetPasswordRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ResetPasswordResult>("/Admin/ResetPassword", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Resets all title-specific information about a particular account, including user data, virtual currency balances,
   * inventory, purchase history, and statistics
   * @deprecated Please use DeletePlayer instead.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/account-management/resetusers
   */
  ResetUsers (request: ResetUsersRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<BlankResult>("/Admin/ResetUsers", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Completely removes all statistics for the specified user, for the current game
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/resetuserstatistics
   */
  ResetUserStatistics (request: ResetUserStatisticsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ResetUserStatisticsResult>("/Admin/ResetUserStatistics", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Attempts to resolve a dispute with the original order's payment provider.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/resolvepurchasedispute
   */
  ResolvePurchaseDispute (request: ResolvePurchaseDisputeRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ResolvePurchaseDisputeResponse>("/Admin/ResolvePurchaseDispute", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Revoke all active bans for a user.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/account-management/revokeallbansforuser
   */
  RevokeAllBansForUser (request: RevokeAllBansForUserRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<RevokeAllBansForUserResult>("/Admin/RevokeAllBansForUser", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Revoke all active bans specified with BanId.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/account-management/revokebans
   */
  RevokeBans (request: RevokeBansRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<RevokeBansResult>("/Admin/RevokeBans", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Revokes access to an item in a user's inventory
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/player-item-management/revokeinventoryitem
   */
  RevokeInventoryItem (request: RevokeInventoryItemRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<RevokeInventoryResult>("/Admin/RevokeInventoryItem", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Revokes access for up to 25 items across multiple users and characters.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/player-item-management/revokeinventoryitems
   */
  RevokeInventoryItems (request: RevokeInventoryItemsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<RevokeInventoryItemsResult>("/Admin/RevokeInventoryItems", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Run a task immediately regardless of its schedule.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/scheduledtask/runtask
   */
  RunTask (request: RunTaskRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<RunTaskResult>("/Admin/RunTask", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Forces an email to be sent to the registered email address for the user's account, with a link allowing the user to
   * change the password.If an account recovery email template ID is provided, an email using the custom email template will
   * be used.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/account-management/sendaccountrecoveryemail
   */
  SendAccountRecoveryEmail (request: SendAccountRecoveryEmailRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<SendAccountRecoveryEmailResult>("/Admin/SendAccountRecoveryEmail", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Creates the catalog configuration of all virtual goods for the specified catalog version
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/setcatalogitems
   */
  SetCatalogItems (request: UpdateCatalogItemsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdateCatalogItemsResult>("/Admin/SetCatalogItems", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Updates the sink to which to route PlayStream and Telemetry event data.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/playstream/seteventsink
   */
  SetEventSink (request: SetEventSinkRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<SetEventSinkResult>("/Admin/SetEventSink", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Sets the override expiration for a membership subscription
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/account-management/setmembershipoverride
   */
  SetMembershipOverride (request: SetMembershipOverrideRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<SetMembershipOverrideResult>("/Admin/SetMembershipOverride", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Sets or resets the player's secret. Player secrets are used to sign API requests.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/authentication/setplayersecret
   */
  SetPlayerSecret (request: SetPlayerSecretRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<SetPlayerSecretResult>("/Admin/SetPlayerSecret", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Sets the currently published revision of a title Cloud Script
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/server-side-cloud-script/setpublishedrevision
   */
  SetPublishedRevision (request: SetPublishedRevisionRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<SetPublishedRevisionResult>("/Admin/SetPublishedRevision", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Updates the key-value store of custom publisher settings
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/shared-group-data/setpublisherdata
   */
  SetPublisherData (request: SetPublisherDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<SetPublisherDataResult>("/Admin/SetPublisherData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Sets all the items in one virtual store
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/setstoreitems
   */
  SetStoreItems (request: UpdateStoreItemsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdateStoreItemsResult>("/Admin/SetStoreItems", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Creates and updates the key-value store of custom title settings which can be read by the client. For example, a
   * developer could choose to store values which modify the user experience, such as enemy spawn rates, weapon strengths,
   * movement speeds, etc. This allows a developer to update the title without the need to create, test, and ship a new
   * build.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/settitledata
   */
  SetTitleData (request: SetTitleDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<SetTitleDataResult>("/Admin/SetTitleData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Set and delete key-value pairs in a title data override instance.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/settitledataandoverrides
   */
  SetTitleDataAndOverrides (request: SetTitleDataAndOverridesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<SetTitleDataAndOverridesResult>("/Admin/SetTitleDataAndOverrides", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Updates the key-value store of custom title settings which cannot be read by the client. These values can be used to
   * tweak settings used by game servers and Cloud Scripts without the need to update and re-deploy.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/settitleinternaldata
   */
  SetTitleInternalData (request: SetTitleDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<SetTitleDataResult>("/Admin/SetTitleInternalData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Sets the Amazon Resource Name (ARN) for iOS and Android push notifications. Documentation on the exact restrictions can
   * be found at: http://docs.aws.amazon.com/sns/latest/api/API_CreatePlatformApplication.html. Currently, Amazon device
   * Messaging is not supported.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/setuppushnotification
   */
  SetupPushNotification (request: SetupPushNotificationRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<SetupPushNotificationResult>("/Admin/SetupPushNotification", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Decrements the specified virtual currency by the stated amount
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/player-item-management/subtractuservirtualcurrency
   */
  SubtractUserVirtualCurrency (request: SubtractUserVirtualCurrencyRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ModifyUserVirtualCurrencyResult>("/Admin/SubtractUserVirtualCurrency", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Updates information of a list of existing bans specified with Ban Ids.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/account-management/updatebans
   */
  UpdateBans (request: UpdateBansRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdateBansResult>("/Admin/UpdateBans", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Updates the catalog configuration for virtual goods in the specified catalog version
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/updatecatalogitems
   */
  UpdateCatalogItems (request: UpdateCatalogItemsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdateCatalogItemsResult>("/Admin/UpdateCatalogItems", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Creates a new Cloud Script revision and uploads source code to it. Note that at this time, only one file should be
   * submitted in the revision.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/server-side-cloud-script/updatecloudscript
   */
  UpdateCloudScript (request: UpdateCloudScriptRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdateCloudScriptResult>("/Admin/UpdateCloudScript", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Modifies data and credentials for an existing relationship between a title and an Open ID Connect provider
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/authentication/updateopenidconnection
   */
  UpdateOpenIdConnection (request: UpdateOpenIdConnectionRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Admin/UpdateOpenIdConnection", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Updates the title-specific custom property values for a player
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/updateplayercustomproperties
   */
  UpdatePlayerCustomProperties (request: UpdatePlayerCustomPropertiesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdatePlayerCustomPropertiesResult>("/Admin/UpdatePlayerCustomProperties", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Updates a existing Player Shared Secret Key. It may take up to 5 minutes for this update to become generally available
   * after this API returns.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/authentication/updateplayersharedsecret
   */
  UpdatePlayerSharedSecret (request: UpdatePlayerSharedSecretRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdatePlayerSharedSecretResult>("/Admin/UpdatePlayerSharedSecret", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Updates a player statistic configuration for the title, optionally allowing the developer to specify a reset interval.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/updateplayerstatisticdefinition
   */
  UpdatePlayerStatisticDefinition (request: UpdatePlayerStatisticDefinitionRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdatePlayerStatisticDefinitionResult>("/Admin/UpdatePlayerStatisticDefinition", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Changes a policy for a title
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/authentication/updatepolicy
   */
  UpdatePolicy (request: UpdatePolicyRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdatePolicyResponse>("/Admin/UpdatePolicy", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Updates the random drop table configuration for the title
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/updaterandomresulttables
   */
  UpdateRandomResultTables (request: UpdateRandomResultTablesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdateRandomResultTablesResult>("/Admin/UpdateRandomResultTables", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Updates an existing player segment and its associated definition(s) and action(s) for a title.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/segments/updatesegment
   */
  UpdateSegment (request: UpdateSegmentRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdateSegmentResponse>("/Admin/UpdateSegment", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Updates an existing virtual item store with new or modified items
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/updatestoreitems
   */
  UpdateStoreItems (request: UpdateStoreItemsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdateStoreItemsResult>("/Admin/UpdateStoreItems", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Update an existing task.
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/scheduledtask/updatetask
   */
  UpdateTask (request: UpdateTaskRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Admin/UpdateTask", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Updates the title-specific custom data for the user which is readable and writable by the client
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/updateuserdata
   */
  UpdateUserData (request: UpdateUserDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdateUserDataResult>("/Admin/UpdateUserData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Updates the title-specific custom data for the user which cannot be accessed by the client
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/updateuserinternaldata
   */
  UpdateUserInternalData (request: UpdateUserInternalDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdateUserDataResult>("/Admin/UpdateUserInternalData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Updates the publisher-specific custom data for the user which is readable and writable by the client
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/updateuserpublisherdata
   */
  UpdateUserPublisherData (request: UpdateUserDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdateUserDataResult>("/Admin/UpdateUserPublisherData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Updates the publisher-specific custom data for the user which cannot be accessed by the client
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/updateuserpublisherinternaldata
   */
  UpdateUserPublisherInternalData (request: UpdateUserInternalDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdateUserDataResult>("/Admin/UpdateUserPublisherInternalData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Updates the publisher-specific custom data for the user which can only be read by the client
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/updateuserpublisherreadonlydata
   */
  UpdateUserPublisherReadOnlyData (request: UpdateUserDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdateUserDataResult>("/Admin/UpdateUserPublisherReadOnlyData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Updates the title-specific custom data for the user which can only be read by the client
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/updateuserreadonlydata
   */
  UpdateUserReadOnlyData (request: UpdateUserDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdateUserDataResult>("/Admin/UpdateUserReadOnlyData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Updates the title specific display name for a user
   * Reference: https://docs.microsoft.com/rest/api/playfab/admin/account-management/updateusertitledisplayname
   */
  UpdateUserTitleDisplayName (request: UpdateUserTitleDisplayNameRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdateUserTitleDisplayNameResult>("/Admin/UpdateUserTitleDisplayName", request, "X-SecretKey", extraHeaders);
  }

};
