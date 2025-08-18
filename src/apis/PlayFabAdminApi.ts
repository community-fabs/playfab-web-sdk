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
  StoreMetricsRequest,
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
  StoreMetricsResponse,
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
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/scheduledtask/aborttaskinstance Microsoft Documentation}
   * @example
   * await adminClient.AbortTaskInstance({
   *   "TaskInstanceId": "E52531B47B1761C7-4"
   * });
   */
  AbortTaskInstance (request: AbortTaskInstanceRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Admin/AbortTaskInstance", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Update news item to include localized version
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/addlocalizednews Microsoft Documentation}
   * @example
   * await adminClient.AddLocalizedNews({
   *   "NewsId": "74623b12-6c80-ee4b-7c3b-58e638aa62bd",
   *   "Language": "en",
   *   "Title": "News of the Day",
   *   "Body": "<b>We have a new object to buy!</b>"
   * });
   */
  AddLocalizedNews (request: AddLocalizedNewsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<AddLocalizedNewsResult>("/Admin/AddLocalizedNews", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Adds a new news item to the title's news feed
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/addnews Microsoft Documentation}
   * @example
   * await adminClient.AddNews({
   *   "Timestamp": "2014-04-06T00:00:00Z",
   *   "Title": "News of the Day",
   *   "Body": "<b>We have a new object to buy!</b>"
   * });
   */
  AddNews (request: AddNewsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<AddNewsResult>("/Admin/AddNews", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Adds a given tag to a player profile. The tag's namespace is automatically generated based on the source of the tag.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/playstream/addplayertag Microsoft Documentation}
   * @example
   * await adminClient.AddPlayerTag({
   *   "PlayFabId": "10931252888739651331",
   *   "TagName": "MostKilled"
   * });
   */
  AddPlayerTag (request: AddPlayerTagRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<AddPlayerTagResult>("/Admin/AddPlayerTag", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Adds the game server executable specified (previously uploaded - see GetServerBuildUploadUrl) to the set of those a
   * client is permitted to request in a call to StartGame
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/custom-server-management/addserverbuild Microsoft Documentation}
   * @deprecated Do not use
   */
  AddServerBuild (request: AddServerBuildRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<AddServerBuildResult>("/Admin/AddServerBuild", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Increments the specified virtual currency by the stated amount
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/player-item-management/adduservirtualcurrency Microsoft Documentation}
   * @example
   * await adminClient.AddUserVirtualCurrency({
   *   "PlayFabId": "20394883",
   *   "VirtualCurrency": "GC",
   *   "Amount": 100
   * });
   */
  AddUserVirtualCurrency (request: AddUserVirtualCurrencyRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ModifyUserVirtualCurrencyResult>("/Admin/AddUserVirtualCurrency", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Adds one or more virtual currencies to the set defined for the title. Virtual Currencies have a maximum
   * value of 2,147,483,647 when granted to a player. Any value over that will be discarded.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/addvirtualcurrencytypes Microsoft Documentation}
   * @example
   * await adminClient.AddVirtualCurrencyTypes({
   *   "VirtualCurrencies": [
   *     {
   *       "CurrencyCode": "CC",
   *       "DisplayName": "Chump Coins",
   *       "InitialDeposit": 100,
   *       "RechargeRate": 1000,
   *       "RechargeMax": 1000
   *     },
   *     {
   *       "CurrencyCode": "GC"
   *     }
   *   ]
   * });
   */
  AddVirtualCurrencyTypes (request: AddVirtualCurrencyTypesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<BlankResult>("/Admin/AddVirtualCurrencyTypes", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Bans users by PlayFab ID with optional IP address, or MAC address for the provided game.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/account-management/banusers Microsoft Documentation}
   * @example
   * await adminClient.BanUsers({
   *   "Bans": [
   *     {
   *       "PlayFabId": "1679AF5CD04BD838",
   *       "IPAddress": "192.168.1.1",
   *       "Reason": "You cheated!",
   *       "DurationInHours": 7
   *     },
   *     {
   *       "PlayFabId": "2329AF5CD04BF513",
   *       "Reason": "Caught you using speed hack!"
   *     }
   *   ]
   * });
   */
  BanUsers (request: BanUsersRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<BanUsersResult>("/Admin/BanUsers", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Checks the global count for the limited edition item.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/player-item-management/checklimitededitionitemavailability Microsoft Documentation}
   * @example
   * await adminClient.CheckLimitedEditionItemAvailability({
   *   "CatalogVersion": "Rares",
   *   "ItemId": "FreeHoodie"
   * });
   */
  CheckLimitedEditionItemAvailability (request: CheckLimitedEditionItemAvailabilityRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CheckLimitedEditionItemAvailabilityResult>("/Admin/CheckLimitedEditionItemAvailability", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Create an ActionsOnPlayersInSegment task, which iterates through all players in a segment to execute action.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/scheduledtask/createactionsonplayersinsegmenttask Microsoft Documentation}
   * @example
   * await adminClient.CreateActionsOnPlayersInSegmentTask({
   *   "Name": "PushNotificationVIP_Halloween",
   *   "Description": "Send push notification to VIP players about Halloween event",
   *   "IsActive": false,
   *   "Parameter": {
   *     "SegmentId": "274828AF93F13472",
   *     "Actions": [
   *       {
   *         "GrantItemContent": {
   *           "CatalogVersion": "foo",
   *           "ItemId": "bar",
   *           "ItemQuantity": 1
   *         }
   *       }
   *     ]
   *   }
   * });
   */
  CreateActionsOnPlayersInSegmentTask (request: CreateActionsOnPlayerSegmentTaskRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateTaskResult>("/Admin/CreateActionsOnPlayersInSegmentTask", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Create a CloudScript task, which can run a CloudScript on a schedule.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/scheduledtask/createcloudscriptazurefunctionstask Microsoft Documentation}
   * @example
   * await adminClient.CreateCloudScriptAzureFunctionsTask({
   *   "Name": "EnableWeekdayHappyHour",
   *   "Description": "Turn on special pricing for weekday happy hour.",
   *   "Schedule": "0 17 * * 1-5",
   *   "IsActive": false,
   *   "Parameter": {
   *     "FunctionName": "applyStorePreset",
   *     "Argument": {
   *       "preset": "WeekdayHappyHour"
   *     }
   *   }
   * });
   */
  CreateCloudScriptAzureFunctionsTask (request: CreateCloudScriptAzureFunctionsTaskRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateTaskResult>("/Admin/CreateCloudScriptAzureFunctionsTask", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Create a CloudScript task, which can run a CloudScript on a schedule.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/scheduledtask/createcloudscripttask Microsoft Documentation}
   * @example
   * await adminClient.CreateCloudScriptTask({
   *   "Name": "EnableWeekdayHappyHour",
   *   "Description": "Turn on special pricing for weekday happy hour.",
   *   "Schedule": "0 17 * * 1-5",
   *   "IsActive": false,
   *   "Parameter": {
   *     "FunctionName": "applyStorePreset",
   *     "Argument": {
   *       "preset": "WeekdayHappyHour"
   *     }
   *   }
   * });
   */
  CreateCloudScriptTask (request: CreateCloudScriptTaskRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateTaskResult>("/Admin/CreateCloudScriptTask", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Create a Insights Scheduled Scaling task, which can scale Insights Performance Units on a schedule
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/scheduledtask/createinsightsscheduledscalingtask Microsoft Documentation}
   * @example
   * await adminClient.CreateInsightsScheduledScalingTask({
   *   "Name": "EnableWeekdayPerformance",
   *   "Description": "Scale up Insights Performance Units during weekdays.",
   *   "Schedule": "0 0 * * 1-5",
   *   "IsActive": false,
   *   "Parameter": {
   *     "Level": 3
   *   }
   * });
   */
  CreateInsightsScheduledScalingTask (request: CreateInsightsScheduledScalingTaskRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateTaskResult>("/Admin/CreateInsightsScheduledScalingTask", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Registers a relationship between a title and an Open ID Connect provider.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/authentication/createopenidconnection Microsoft Documentation}
   * @example
   * await adminClient.CreateOpenIdConnection({
   *   "ConnectionId": "oidconnection1",
   *   "ClientId": "example_id_1",
   *   "ClientSecret": "example_secret_1",
   *   "IssuerInformation": {
   *     "Issuer": "https://issuer.example.com/",
   *     "AuthorizationUrl": "https://issuer.example.com/authorize",
   *     "TokenUrl": "https://issuer.example.com/oauth2/token",
   *     "JsonWebKeySet": {
   *       "keys": [
   *         "..."
   *       ]
   *     }
   *   },
   *   "IssuerOverride": "https://issueroverride.example.com/",
   *   "IgnoreNonce": true
   * });
   */
  CreateOpenIdConnection (request: CreateOpenIdConnectionRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Admin/CreateOpenIdConnection", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Creates a new Player Shared Secret Key. It may take up to 5 minutes for this key to become generally available after
   * this API returns.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/authentication/createplayersharedsecret Microsoft Documentation}
   * @example
   * await adminClient.CreatePlayerSharedSecret({
   *   "FriendlyName": "iOS Users"
   * });
   */
  CreatePlayerSharedSecret (request: CreatePlayerSharedSecretRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreatePlayerSharedSecretResult>("/Admin/CreatePlayerSharedSecret", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Adds a new player statistic configuration to the title, optionally allowing the developer to specify a reset interval
   * and an aggregation method.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/createplayerstatisticdefinition Microsoft Documentation}
   * @example
   * await adminClient.CreatePlayerStatisticDefinition({
   *   "StatisticName": "headshots",
   *   "VersionChangeInterval": "Never",
   *   "ShouldProvisionLeaderboard": false
   * });
   */
  CreatePlayerStatisticDefinition (request: CreatePlayerStatisticDefinitionRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreatePlayerStatisticDefinitionResult>("/Admin/CreatePlayerStatisticDefinition", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Creates a new player segment by defining the conditions on player properties. Also, create actions to target the player
   * segments for a title.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/segments/createsegment Microsoft Documentation}
   * @example
   * await adminClient.CreateSegment({
   *   "SegmentModel": {
   *     "Name": "My user segment",
   *     "LastUpdateTime": "0001-01-01T00:00:00Z",
   *     "SegmentOrDefinitions": [
   *       {
   *         "SegmentAndDefinitions": [
   *           {
   *             "AllPlayersFilter": {}
   *           }
   *         ]
   *       }
   *     ],
   *     "EnteredSegmentActions": [
   *       {
   *         "BanPlayerAction": {
   *           "BanHours": 2,
   *           "ReasonForBan": "Not played for a year"
   *         }
   *       }
   *     ],
   *     "LeftSegmentActions": [
   *       {
   *         "ExecuteAzureFunctionAction": {
   *           "AzureFunction": "AzureFunction1",
   *           "FunctionParameter": "{\"InputParam\": \"1\"}",
   *           "GenerateFunctionExecutedEvents": false
   *         }
   *       }
   *     ]
   *   }
   * });
   */
  CreateSegment (request: CreateSegmentRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateSegmentResponse>("/Admin/CreateSegment", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Delete a content file from the title. When deleting a file that does not exist, it returns success.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/content/deletecontent Microsoft Documentation}
   * @example
   * await adminClient.DeleteContent({
   *   "Key": "images/sword_icon.png"
   * });
   */
  DeleteContent (request: DeleteContentRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<BlankResult>("/Admin/DeleteContent", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Deletes a sink to stop sending PlayStream and Telemetry event data
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/playstream/deleteeventsink Microsoft Documentation}
   * @example
   * await adminClient.DeleteEventSink({
   *   "Name": "MyStorage"
   * });
   */
  DeleteEventSink (request: DeleteEventSinkRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeleteEventSinkResult>("/Admin/DeleteEventSink", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Removes a master player account entirely from all titles and deletes all associated data
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/account-management/deletemasterplayeraccount Microsoft Documentation}
   * @example
   * await adminClient.DeleteMasterPlayerAccount({
   *   "PlayFabId": "A68C908B66C23C5",
   *   "MetaData": "Identifying info"
   * });
   */
  DeleteMasterPlayerAccount (request: DeleteMasterPlayerAccountRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeleteMasterPlayerAccountResult>("/Admin/DeleteMasterPlayerAccount", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Deletes PlayStream and telemetry event data associated with the master player account from PlayFab storage
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/account-management/deletemasterplayereventdata Microsoft Documentation}
   * @example
   * await adminClient.DeleteMasterPlayerEventData({
   *   "PlayFabId": "A68C908B66C23C5"
   * });
   */
  DeleteMasterPlayerEventData (request: DeleteMasterPlayerEventDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeleteMasterPlayerEventDataResult>("/Admin/DeleteMasterPlayerEventData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Deletes a player's subscription
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/account-management/deletemembershipsubscription Microsoft Documentation}
   * @example
   * await adminClient.DeleteMembershipSubscription({
   *   "MembershipId": "ShieldBonusMembership",
   *   "SubscriptionId": "39F6B89A-0F0C-4D96-B12C-BA89543A11A1",
   *   "PlayFabId": "204883457"
   * });
   */
  DeleteMembershipSubscription (request: DeleteMembershipSubscriptionRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeleteMembershipSubscriptionResult>("/Admin/DeleteMembershipSubscription", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Removes a relationship between a title and an OpenID Connect provider.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/authentication/deleteopenidconnection Microsoft Documentation}
   * @example
   * await adminClient.DeleteOpenIdConnection({
   *   "ConnectionId": "oidconnection1"
   * });
   */
  DeleteOpenIdConnection (request: DeleteOpenIdConnectionRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Admin/DeleteOpenIdConnection", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Removes a user's player account from a title and deletes all associated data
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/account-management/deleteplayer Microsoft Documentation}
   * @example
   * await adminClient.DeletePlayer({
   *   "PlayFabId": "A68C908B66C23C5"
   * });
   */
  DeletePlayer (request: DeletePlayerRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeletePlayerResult>("/Admin/DeletePlayer", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Deletes title-specific custom properties for a player
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/deleteplayercustomproperties Microsoft Documentation}
   * @example
   * await adminClient.DeletePlayerCustomProperties({
   *   "PlayFabId": "2039475",
   *   "PropertyNames": [
   *     "level",
   *     "created"
   *   ],
   *   "ExpectedPropertiesVersion": 12
   * });
   */
  DeletePlayerCustomProperties (request: DeletePlayerCustomPropertiesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeletePlayerCustomPropertiesResult>("/Admin/DeletePlayerCustomProperties", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Deletes an existing Player Shared Secret Key. It may take up to 5 minutes for this delete to be reflected after this API
   * returns.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/authentication/deleteplayersharedsecret Microsoft Documentation}
   * @example
   * await adminClient.DeletePlayerSharedSecret({
   *   "SecretKey": "keysaresecret"
   * });
   */
  DeletePlayerSharedSecret (request: DeletePlayerSharedSecretRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeletePlayerSharedSecretResult>("/Admin/DeletePlayerSharedSecret", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Deletes an existing player segment and its associated action(s) for a title.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/segments/deletesegment Microsoft Documentation}
   * @example
   * await adminClient.DeleteSegment({
   *   "SegmentId": "97EF0E9302CBE996"
   * });
   */
  DeleteSegment (request: DeleteSegmentRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeleteSegmentsResponse>("/Admin/DeleteSegment", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Deletes an existing virtual item store
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/deletestore Microsoft Documentation}
   * @example
   * await adminClient.DeleteStore({
   *   "StoreId": "BonusStore"
   * });
   */
  DeleteStore (request: DeleteStoreRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeleteStoreResult>("/Admin/DeleteStore", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Delete a task.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/scheduledtask/deletetask Microsoft Documentation}
   * @example
   * await adminClient.DeleteTask({
   *   "Identifier": {
   *     "Id": "E1772FD927D8539D"
   *   }
   * });
   */
  DeleteTask (request: DeleteTaskRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Admin/DeleteTask", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Permanently deletes a title and all associated configuration
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/account-management/deletetitle Microsoft Documentation}
   * @example
   * await adminClient.DeleteTitle({});
   */
  DeleteTitle (request: DeleteTitleRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeleteTitleResult>("/Admin/DeleteTitle", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Deletes a specified set of title data overrides.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/deletetitledataoverride Microsoft Documentation}
   * @example
   * await adminClient.DeleteTitleDataOverride({
   *   "OverrideLabel": "LaunchData"
   * });
   */
  DeleteTitleDataOverride (request: DeleteTitleDataOverrideRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeleteTitleDataOverrideResult>("/Admin/DeleteTitleDataOverride", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Deletes the users for the provided game. Deletes custom data, all account linkages, and statistics. This method does not
   * remove the player's event history, login history, inventory items, nor virtual currencies.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/deleteusers Microsoft Documentation}
   * @deprecated Please use DeletePlayer instead.
   */
  DeleteUsers (request: DeleteUsersRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeleteUsersResult>("/Admin/DeleteUsers", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Exports all associated data of a master player account
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/account-management/exportmasterplayerdata Microsoft Documentation}
   * @example
   * await adminClient.ExportMasterPlayerData({
   *   "PlayFabId": "A68C908B66C23C5"
   * });
   */
  ExportMasterPlayerData (request: ExportMasterPlayerDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ExportMasterPlayerDataResult>("/Admin/ExportMasterPlayerData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Starts an export for the player profiles in a segment. This API creates a snapshot of all the player profiles which
   * match the segment definition at the time of the API call. Profiles which change while an export is in progress will not
   * be reflected in the results.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/playstream/exportplayersinsegment Microsoft Documentation}
   * @example
   * await adminClient.ExportPlayersInSegment({
   *   "SegmentId": "ABCDEF1234567890"
   * });
   */
  ExportPlayersInSegment (request: ExportPlayersInSegmentRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ExportPlayersInSegmentResult>("/Admin/ExportPlayersInSegment", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Get information about a ActionsOnPlayersInSegment task instance.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/scheduledtask/getactionsonplayersinsegmenttaskinstance Microsoft Documentation}
   * @example
   * await adminClient.GetActionsOnPlayersInSegmentTaskInstance({
   *   "TaskInstanceId": "E52531B47B1761C7-4"
   * });
   */
  GetActionsOnPlayersInSegmentTaskInstance (request: GetTaskInstanceRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetActionsOnPlayersInSegmentTaskInstanceResult>("/Admin/GetActionsOnPlayersInSegmentTaskInstance", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieve a list of all PlayStream actions groups.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/playstream/getallactiongroups Microsoft Documentation}
   * @deprecated Please use GetTasks instead.
   */
  GetAllActionGroups (request: GetAllActionGroupsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetAllActionGroupsResult>("/Admin/GetAllActionGroups", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves an array of player segment definitions. Results from this can be used in subsequent API calls such as
   * GetPlayersInSegment which requires a Segment ID. While segment names can change the ID for that segment will not change.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/playstream/getallsegments Microsoft Documentation}
   * @example
   * await adminClient.GetAllSegments({});
   */
  GetAllSegments (request: GetAllSegmentsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetAllSegmentsResult>("/Admin/GetAllSegments", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Retrieves the specified version of the title's catalog of virtual goods, including all defined properties
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/getcatalogitems Microsoft Documentation}
   * @example
   * await adminClient.GetCatalogItems({
   *   "CatalogVersion": "1"
   * });
   */
  GetCatalogItems (request: GetCatalogItemsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetCatalogItemsResult>("/Admin/GetCatalogItems", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Get detail information about a CloudScript Azure Functions task instance.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/scheduledtask/getcloudscriptazurefunctionstaskinstance Microsoft Documentation}
   * @example
   * await adminClient.GetCloudScriptAzureFunctionsTaskInstance({
   *   "TaskInstanceId": "E52531B47B1761C7-4"
   * });
   */
  GetCloudScriptAzureFunctionsTaskInstance (request: GetTaskInstanceRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetCloudScriptAzureFunctionsTaskInstanceResult>("/Admin/GetCloudScriptAzureFunctionsTaskInstance", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Gets the contents and information of a specific Cloud Script revision.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/server-side-cloud-script/getcloudscriptrevision Microsoft Documentation}
   * @example
   * await adminClient.GetCloudScriptRevision({
   *   "Version": 1,
   *   "Revision": 3
   * });
   */
  GetCloudScriptRevision (request: GetCloudScriptRevisionRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetCloudScriptRevisionResult>("/Admin/GetCloudScriptRevision", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Get detail information about a CloudScript task instance.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/scheduledtask/getcloudscripttaskinstance Microsoft Documentation}
   * @example
   * await adminClient.GetCloudScriptTaskInstance({
   *   "TaskInstanceId": "E52531B47B1761C7-4"
   * });
   */
  GetCloudScriptTaskInstance (request: GetTaskInstanceRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetCloudScriptTaskInstanceResult>("/Admin/GetCloudScriptTaskInstance", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Lists all the current cloud script versions. For each version, information about the current published and latest
   * revisions is also listed.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/server-side-cloud-script/getcloudscriptversions Microsoft Documentation}
   * @example
   * await adminClient.GetCloudScriptVersions({});
   */
  GetCloudScriptVersions (request: GetCloudScriptVersionsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetCloudScriptVersionsResult>("/Admin/GetCloudScriptVersions", request, "X-SecretKey", extraHeaders);
  }

  /**
   * List all contents of the title and get statistics such as size
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/content/getcontentlist Microsoft Documentation}
   * @example
   * await adminClient.GetContentList({
   *   "Prefix": "2016/1"
   * });
   */
  GetContentList (request: GetContentListRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetContentListResult>("/Admin/GetContentList", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the pre-signed URL for uploading a content file. A subsequent HTTP PUT to the returned URL uploads the
   * content. Also, please be aware that the Content service is specifically PlayFab's CDN offering, for which standard CDN
   * rates apply.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/content/getcontentuploadurl Microsoft Documentation}
   * @example
   * await adminClient.GetContentUploadUrl({
   *   "Key": "images/sword_icon.png",
   *   "ContentType": "image/png"
   * });
   */
  GetContentUploadUrl (request: GetContentUploadUrlRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetContentUploadUrlResult>("/Admin/GetContentUploadUrl", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves a download URL for the requested report
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/getdatareport Microsoft Documentation}
   * @example
   * await adminClient.GetDataReport({
   *   "ReportName": "PurchaseDataReport",
   *   "Year": 2014,
   *   "Month": 12,
   *   "Day": 5
   * });
   */
  GetDataReport (request: GetDataReportRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetDataReportResult>("/Admin/GetDataReport", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the set of sinks to which to route PlayStream and Telemetry event data.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/playstream/geteventsinks Microsoft Documentation}
   * @example
   * await adminClient.GetEventSinks({});
   */
  GetEventSinks (request: GetEventSinksRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetEventSinksResult>("/Admin/GetEventSinks", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the details for a specific completed session, including links to standard out and standard error logs
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/matchmaking/getmatchmakergameinfo Microsoft Documentation}
   * @deprecated Please use MultiplayerServer/GetMultiplayerSessionLogsBySessionId instead.
   */
  GetMatchmakerGameInfo (request: GetMatchmakerGameInfoRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetMatchmakerGameInfoResult>("/Admin/GetMatchmakerGameInfo", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the details of defined game modes for the specified game server executable
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/matchmaking/getmatchmakergamemodes Microsoft Documentation}
   * @deprecated Do not use
   */
  GetMatchmakerGameModes (request: GetMatchmakerGameModesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetMatchmakerGameModesResult>("/Admin/GetMatchmakerGameModes", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Get the list of titles that the player has played
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/account-management/getplayedtitlelist Microsoft Documentation}
   * @example
   * await adminClient.GetPlayedTitleList({
   *   "PlayFabId": "A68C908B66C23C5"
   * });
   */
  GetPlayedTitleList (request: GetPlayedTitleListRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayedTitleListResult>("/Admin/GetPlayedTitleList", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves a title-specific custom property value for a player.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/getplayercustomproperty Microsoft Documentation}
   * @example
   * await adminClient.GetPlayerCustomProperty({
   *   "PlayFabId": "2039475",
   *   "PropertyName": "level"
   * });
   */
  GetPlayerCustomProperty (request: GetPlayerCustomPropertyRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayerCustomPropertyResult>("/Admin/GetPlayerCustomProperty", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Gets a player's ID from an auth token.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/account-management/getplayeridfromauthtoken Microsoft Documentation}
   * @example
   * await adminClient.GetPlayerIdFromAuthToken({
   *   "Token": "3F584AD0EF943E2",
   *   "TokenType": "Email"
   * });
   */
  GetPlayerIdFromAuthToken (request: GetPlayerIdFromAuthTokenRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayerIdFromAuthTokenResult>("/Admin/GetPlayerIdFromAuthToken", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the player's profile
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/account-management/getplayerprofile Microsoft Documentation}
   * @example
   * await adminClient.GetPlayerProfile({
   *   "PlayFabId": "621EF20237534A44"
   * });
   */
  GetPlayerProfile (request: GetPlayerProfileRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayerProfileResult>("/Admin/GetPlayerProfile", request, "X-SecretKey", extraHeaders);
  }

  /**
   * List all segments that a player currently belongs to at this moment in time.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/playstream/getplayersegments Microsoft Documentation}
   * @example
   * await adminClient.GetPlayerSegments({
   *   "PlayFabId": "1337AA00"
   * });
   */
  GetPlayerSegments (request: GetPlayersSegmentsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayerSegmentsResult>("/Admin/GetPlayerSegments", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Returns all Player Shared Secret Keys including disabled and expired.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/authentication/getplayersharedsecrets Microsoft Documentation}
   * @example
   * await adminClient.GetPlayerSharedSecrets({});
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
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/playstream/getplayersinsegment Microsoft Documentation}
   * @deprecated Please use ExportPlayersInSegment instead.
   */
  GetPlayersInSegment (request: GetPlayersInSegmentRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayersInSegmentResult>("/Admin/GetPlayersInSegment", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the configuration information for all player statistics defined in the title, regardless of whether they have
   * a reset interval.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/getplayerstatisticdefinitions Microsoft Documentation}
   * @example
   * await adminClient.GetPlayerStatisticDefinitions({});
   */
  GetPlayerStatisticDefinitions (request: GetPlayerStatisticDefinitionsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayerStatisticDefinitionsResult>("/Admin/GetPlayerStatisticDefinitions", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the information on the available versions of the specified statistic.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/getplayerstatisticversions Microsoft Documentation}
   * @example
   * await adminClient.GetPlayerStatisticVersions({
   *   "StatisticName": "headshots"
   * });
   */
  GetPlayerStatisticVersions (request: GetPlayerStatisticVersionsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayerStatisticVersionsResult>("/Admin/GetPlayerStatisticVersions", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Get all tags with a given Namespace (optional) from a player profile.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/playstream/getplayertags Microsoft Documentation}
   * @example
   * await adminClient.GetPlayerTags({
   *   "PlayFabId": "10931252888739651331",
   *   "Namespace": "title.AAA"
   * });
   */
  GetPlayerTags (request: GetPlayerTagsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayerTagsResult>("/Admin/GetPlayerTags", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Gets the requested policy.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/authentication/getpolicy Microsoft Documentation}
   * @example
   * await adminClient.GetPolicy({
   *   "PolicyName": "ApiPolicy"
   * });
   */
  GetPolicy (request: GetPolicyRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPolicyResponse>("/Admin/GetPolicy", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the key-value store of custom publisher settings
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/getpublisherdata Microsoft Documentation}
   * @example
   * await adminClient.GetPublisherData({
   *   "Keys": [
   *     "color",
   *     "propertyA"
   *   ]
   * });
   */
  GetPublisherData (request: GetPublisherDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPublisherDataResult>("/Admin/GetPublisherData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Retrieves the random drop table configuration for the title
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/getrandomresulttables Microsoft Documentation}
   * @example
   * await adminClient.GetRandomResultTables({});
   */
  GetRandomResultTables (request: GetRandomResultTablesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetRandomResultTablesResult>("/Admin/GetRandomResultTables", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the result of an export started by ExportPlayersInSegment API. If the ExportPlayersInSegment is successful and
   * complete, this API returns the IndexUrl from which the index file can be downloaded. The index file has a list of urls
   * from which the files containing the player profile data can be downloaded. Otherwise, it returns the current 'State' of
   * the export
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/playstream/getsegmentexport Microsoft Documentation}
   * @example
   * await adminClient.GetSegmentExport({
   *   "ExportId": "ABCDEF1234567890"
   * });
   */
  GetSegmentExport (request: GetPlayersInSegmentExportRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayersInSegmentExportResponse>("/Admin/GetSegmentExport", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Get detail information of a segment and its associated definition(s) and action(s) for a title.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/segments/getsegments Microsoft Documentation}
   * @example
   * await adminClient.GetSegments({
   *   "SegmentIds": [
   *     "B05FC8CB558A6570",
   *     "97EF0E9302CBE996"
   *   ]
   * });
   */
  GetSegments (request: GetSegmentsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetSegmentsResponse>("/Admin/GetSegments", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the build details for the specified game server executable
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/custom-server-management/getserverbuildinfo Microsoft Documentation}
   * @deprecated Do not use
   */
  GetServerBuildInfo (request: GetServerBuildInfoRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetServerBuildInfoResult>("/Admin/GetServerBuildInfo", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Retrieves the set of items defined for the specified store, including all prices defined
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/getstoreitems Microsoft Documentation}
   * @example
   * await adminClient.GetStoreItems({
   *   "StoreId": "BonusStore"
   * });
   */
  GetStoreItems (request: GetStoreItemsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetStoreItemsResult>("/Admin/GetStoreItems", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves Xbox Store metric data for the authenticated title, based on the specified metric name, reporting period and
   * metric dimension values.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/xbox-store/getstoremetrics Microsoft Documentation}
   * @example
   * await adminClient.GetStoreMetrics({
   *   "MetricName": "page_view_count",
   *   "MetricPeriod": "24h",
   *   "DimensionFilters": {
   *     "AgeGroup": "Youth",
   *     "Campaign": "Summer Sale",
   *     "Country": "USA",
   *     "Currency": "USD",
   *     "DeviceType": "PC",
   *     "ProductId": "ABC123",
   *     "Source": "Homepage",
   *     "StoreFront": "Xbox",
   *     "HasInSale": "true",
   *     "XboxTitleId": "XYZ456"
   *   }
   * });
   */
  GetStoreMetrics (request: StoreMetricsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<StoreMetricsResponse>("/Admin/GetStoreMetrics", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Query for task instances by task, status, or time range.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/scheduledtask/gettaskinstances Microsoft Documentation}
   * @example
   * await adminClient.GetTaskInstances({
   *   "StatusFilter": "Failed",
   *   "StartedAtRangeFrom": "2016-08-23T11:00:00Z"
   * });
   */
  GetTaskInstances (request: GetTaskInstancesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetTaskInstancesResult>("/Admin/GetTaskInstances", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Get definition information on a specified task or all tasks within a title.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/scheduledtask/gettasks Microsoft Documentation}
   * @example
   * await adminClient.GetTasks({
   *   "Identifier": {
   *     "Name": "EnableDailyHappyHour"
   *   }
   * });
   */
  GetTasks (request: GetTasksRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetTasksResult>("/Admin/GetTasks", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the key-value store of custom title settings which can be read by the client
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/gettitledata Microsoft Documentation}
   * @example
   * await adminClient.GetTitleData({
   *   "Keys": [
   *     "color",
   *     "propertyA"
   *   ]
   * });
   */
  GetTitleData (request: GetTitleDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetTitleDataResult>("/Admin/GetTitleData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the key-value store of custom title settings which cannot be read by the client
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/gettitleinternaldata Microsoft Documentation}
   * @example
   * await adminClient.GetTitleInternalData({
   *   "Keys": [
   *     "color",
   *     "propertyA"
   *   ]
   * });
   */
  GetTitleInternalData (request: GetTitleDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetTitleDataResult>("/Admin/GetTitleInternalData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the relevant details for a specified user, based upon a match against a supplied unique identifier
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/account-management/getuseraccountinfo Microsoft Documentation}
   * @example
   * await adminClient.GetUserAccountInfo({
   *   "PlayFabId": "293753934",
   *   "IgnoreMissingTitleActivation": false
   * });
   */
  GetUserAccountInfo (request: LookupUserAccountInfoRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<LookupUserAccountInfoResult>("/Admin/GetUserAccountInfo", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Gets all bans for a user.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/account-management/getuserbans Microsoft Documentation}
   * @example
   * await adminClient.GetUserBans({
   *   "PlayFabId": "1679AF5CD04BD838"
   * });
   */
  GetUserBans (request: GetUserBansRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetUserBansResult>("/Admin/GetUserBans", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the title-specific custom data for the user which is readable and writable by the client
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/getuserdata Microsoft Documentation}
   * @example
   * await adminClient.GetUserData({
   *   "PlayFabId": "2039475",
   *   "Keys": [
   *     "preferences",
   *     "progress"
   *   ],
   *   "IfChangedFromDataVersion": 13
   * });
   */
  GetUserData (request: GetUserDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetUserDataResult>("/Admin/GetUserData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the title-specific custom data for the user which cannot be accessed by the client
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/getuserinternaldata Microsoft Documentation}
   * @example
   * await adminClient.GetUserInternalData({
   *   "PlayFabId": "2039475",
   *   "Keys": [
   *     "preferences",
   *     "progress"
   *   ],
   *   "IfChangedFromDataVersion": 13
   * });
   */
  GetUserInternalData (request: GetUserDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetUserDataResult>("/Admin/GetUserInternalData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Retrieves the specified user's current inventory of virtual goods
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/player-item-management/getuserinventory Microsoft Documentation}
   * @example
   * await adminClient.GetUserInventory({
   *   "PlayFabId": "204883457"
   * });
   */
  GetUserInventory (request: GetUserInventoryRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetUserInventoryResult>("/Admin/GetUserInventory", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the publisher-specific custom data for the user which is readable and writable by the client
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/getuserpublisherdata Microsoft Documentation}
   * @example
   * await adminClient.GetUserPublisherData({
   *   "PlayFabId": "2039475",
   *   "Keys": [
   *     "preferences",
   *     "progress"
   *   ],
   *   "IfChangedFromDataVersion": 13
   * });
   */
  GetUserPublisherData (request: GetUserDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetUserDataResult>("/Admin/GetUserPublisherData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the publisher-specific custom data for the user which cannot be accessed by the client
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/getuserpublisherinternaldata Microsoft Documentation}
   * @example
   * await adminClient.GetUserPublisherInternalData({
   *   "PlayFabId": "2039475",
   *   "Keys": [
   *     "preferences",
   *     "progress"
   *   ],
   *   "IfChangedFromDataVersion": 13
   * });
   */
  GetUserPublisherInternalData (request: GetUserDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetUserDataResult>("/Admin/GetUserPublisherInternalData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the publisher-specific custom data for the user which can only be read by the client
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/getuserpublisherreadonlydata Microsoft Documentation}
   * @example
   * await adminClient.GetUserPublisherReadOnlyData({
   *   "PlayFabId": "2039475",
   *   "Keys": [
   *     "preferences",
   *     "progress"
   *   ],
   *   "IfChangedFromDataVersion": 13
   * });
   */
  GetUserPublisherReadOnlyData (request: GetUserDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetUserDataResult>("/Admin/GetUserPublisherReadOnlyData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the title-specific custom data for the user which can only be read by the client
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/getuserreadonlydata Microsoft Documentation}
   * @example
   * await adminClient.GetUserReadOnlyData({
   *   "PlayFabId": "2039475",
   *   "Keys": [
   *     "preferences",
   *     "progress"
   *   ],
   *   "IfChangedFromDataVersion": 13
   * });
   */
  GetUserReadOnlyData (request: GetUserDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetUserDataResult>("/Admin/GetUserReadOnlyData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Adds the specified items to the specified user inventories
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/player-item-management/grantitemstousers Microsoft Documentation}
   * @example
   * await adminClient.GrantItemsToUsers({
   *   "CatalogVersion": "5",
   *   "ItemGrants": [
   *     {
   *       "PlayFabId": "20394883",
   *       "ItemId": "shield_level_1",
   *       "Annotation": "Entered Level 2"
   *     },
   *     {
   *       "PlayFabId": "20394883",
   *       "ItemId": "shield_level_2",
   *       "Annotation": "Entered Level 2",
   *       "Data": {
   *         "Equipped": "True",
   *         "Slot": "Head"
   *       }
   *     }
   *   ]
   * });
   */
  GrantItemsToUsers (request: GrantItemsToUsersRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GrantItemsToUsersResult>("/Admin/GrantItemsToUsers", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Increases the global count for the given scarce resource.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/player-item-management/incrementlimitededitionitemavailability Microsoft Documentation}
   * @example
   * await adminClient.IncrementLimitedEditionItemAvailability({
   *   "CatalogVersion": "Rares",
   *   "ItemId": "FreeHoodie",
   *   "Amount": 50
   * });
   */
  IncrementLimitedEditionItemAvailability (request: IncrementLimitedEditionItemAvailabilityRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<IncrementLimitedEditionItemAvailabilityResult>("/Admin/IncrementLimitedEditionItemAvailability", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Resets the indicated statistic, removing all player entries for it and backing up the old values.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/incrementplayerstatisticversion Microsoft Documentation}
   * @example
   * await adminClient.IncrementPlayerStatisticVersion({
   *   "StatisticName": "headshots"
   * });
   */
  IncrementPlayerStatisticVersion (request: IncrementPlayerStatisticVersionRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<IncrementPlayerStatisticVersionResult>("/Admin/IncrementPlayerStatisticVersion", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves a list of all Open ID Connect providers registered to a title.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/authentication/listopenidconnection Microsoft Documentation}
   * @example
   * await adminClient.ListOpenIdConnection({});
   */
  ListOpenIdConnection (request: ListOpenIdConnectionRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListOpenIdConnectionResponse>("/Admin/ListOpenIdConnection", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves title-specific custom property values for a player.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/listplayercustomproperties Microsoft Documentation}
   * @example
   * await adminClient.ListPlayerCustomProperties({
   *   "PlayFabId": "2039475"
   * });
   */
  ListPlayerCustomProperties (request: ListPlayerCustomPropertiesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListPlayerCustomPropertiesResult>("/Admin/ListPlayerCustomProperties", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the build details for all game server executables which are currently defined for the title
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/custom-server-management/listserverbuilds Microsoft Documentation}
   * @deprecated Do not use
   */
  ListServerBuilds (request: ListBuildsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListBuildsResult>("/Admin/ListServerBuilds", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Retuns the list of all defined virtual currencies for the title
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/listvirtualcurrencytypes Microsoft Documentation}
   * @example
   * await adminClient.ListVirtualCurrencyTypes({});
   */
  ListVirtualCurrencyTypes (request: ListVirtualCurrencyTypesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListVirtualCurrencyTypesResult>("/Admin/ListVirtualCurrencyTypes", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Updates the game server mode details for the specified game server executable
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/matchmaking/modifymatchmakergamemodes Microsoft Documentation}
   * @deprecated Do not use
   */
  ModifyMatchmakerGameModes (request: ModifyMatchmakerGameModesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ModifyMatchmakerGameModesResult>("/Admin/ModifyMatchmakerGameModes", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Updates the build details for the specified game server executable
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/custom-server-management/modifyserverbuild Microsoft Documentation}
   * @deprecated Do not use
   */
  ModifyServerBuild (request: ModifyServerBuildRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ModifyServerBuildResult>("/Admin/ModifyServerBuild", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Attempts to process an order refund through the original real money payment provider.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/refundpurchase Microsoft Documentation}
   * @example
   * await adminClient.RefundPurchase({
   *   "PlayFabId": "20394883",
   *   "OrderId": "B456AE0",
   *   "Reason": "Customer Request"
   * });
   */
  RefundPurchase (request: RefundPurchaseRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<RefundPurchaseResponse>("/Admin/RefundPurchase", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Remove a given tag from a player profile. The tag's namespace is automatically generated based on the source of the tag.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/playstream/removeplayertag Microsoft Documentation}
   * @example
   * await adminClient.RemovePlayerTag({
   *   "PlayFabId": "10931252888739651331",
   *   "TagName": "MostKilled"
   * });
   */
  RemovePlayerTag (request: RemovePlayerTagRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<RemovePlayerTagResult>("/Admin/RemovePlayerTag", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Removes the game server executable specified from the set of those a client is permitted to request in a call to
   * StartGame
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/custom-server-management/removeserverbuild Microsoft Documentation}
   * @deprecated Do not use
   */
  RemoveServerBuild (request: RemoveServerBuildRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<RemoveServerBuildResult>("/Admin/RemoveServerBuild", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Removes one or more virtual currencies from the set defined for the title.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/removevirtualcurrencytypes Microsoft Documentation}
   * @example
   * await adminClient.RemoveVirtualCurrencyTypes({
   *   "VirtualCurrencies": [
   *     {
   *       "CurrencyCode": "CC"
   *     },
   *     {
   *       "CurrencyCode": "GC"
   *     }
   *   ]
   * });
   */
  RemoveVirtualCurrencyTypes (request: RemoveVirtualCurrencyTypesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<BlankResult>("/Admin/RemoveVirtualCurrencyTypes", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Completely removes all statistics for the specified character, for the current game
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/characters/resetcharacterstatistics Microsoft Documentation}
   * @example
   * await adminClient.ResetCharacterStatistics({
   *   "PlayFabId": "293753934",
   *   "CharacterId": "7654321"
   * });
   */
  ResetCharacterStatistics (request: ResetCharacterStatisticsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ResetCharacterStatisticsResult>("/Admin/ResetCharacterStatistics", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Reset a player's password for a given title.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/account-management/resetpassword Microsoft Documentation}
   * @example
   * await adminClient.ResetPassword({
   *   "Token": "2B584FA1DF645E4",
   *   "Password": "ExampleSecret@r"
   * });
   */
  ResetPassword (request: ResetPasswordRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ResetPasswordResult>("/Admin/ResetPassword", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Resets all title-specific information about a particular account, including user data, virtual currency balances,
   * inventory, purchase history, and statistics
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/account-management/resetusers Microsoft Documentation}
   * @deprecated Please use DeletePlayer instead.
   */
  ResetUsers (request: ResetUsersRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<BlankResult>("/Admin/ResetUsers", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Completely removes all statistics for the specified user, for the current game
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/resetuserstatistics Microsoft Documentation}
   * @example
   * await adminClient.ResetUserStatistics({
   *   "PlayFabId": "293753934"
   * });
   */
  ResetUserStatistics (request: ResetUserStatisticsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ResetUserStatisticsResult>("/Admin/ResetUserStatistics", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Attempts to resolve a dispute with the original order's payment provider.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/resolvepurchasedispute Microsoft Documentation}
   * @example
   * await adminClient.ResolvePurchaseDispute({
   *   "PlayFabId": "20394883",
   *   "OrderId": "B456AE0",
   *   "Reason": "Customer Request",
   *   "Outcome": "Reinstate"
   * });
   */
  ResolvePurchaseDispute (request: ResolvePurchaseDisputeRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ResolvePurchaseDisputeResponse>("/Admin/ResolvePurchaseDispute", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Revoke all active bans for a user.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/account-management/revokeallbansforuser Microsoft Documentation}
   * @example
   * await adminClient.RevokeAllBansForUser({
   *   "PlayFabId": "1679AF5CD04BD838"
   * });
   */
  RevokeAllBansForUser (request: RevokeAllBansForUserRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<RevokeAllBansForUserResult>("/Admin/RevokeAllBansForUser", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Revoke all active bans specified with BanId.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/account-management/revokebans Microsoft Documentation}
   * @example
   * await adminClient.RevokeBans({
   *   "BanIds": [
   *     "E0B5FF89542D413C",
   *     "EF43FF89542G1546"
   *   ]
   * });
   */
  RevokeBans (request: RevokeBansRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<RevokeBansResult>("/Admin/RevokeBans", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Revokes access to an item in a user's inventory
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/player-item-management/revokeinventoryitem Microsoft Documentation}
   * @example
   * await adminClient.RevokeInventoryItem({
   *   "PlayFabId": "203945882",
   *   "ItemInstanceId": "2048583045"
   * });
   */
  RevokeInventoryItem (request: RevokeInventoryItemRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<RevokeInventoryResult>("/Admin/RevokeInventoryItem", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Revokes access for up to 25 items across multiple users and characters.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/player-item-management/revokeinventoryitems Microsoft Documentation}
   * @example
   * await adminClient.RevokeInventoryItems({
   *   "Items": [
   *     {
   *       "PlayFabId": "203945882",
   *       "ItemInstanceId": "2048583045"
   *     }
   *   ]
   * });
   */
  RevokeInventoryItems (request: RevokeInventoryItemsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<RevokeInventoryItemsResult>("/Admin/RevokeInventoryItems", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Run a task immediately regardless of its schedule.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/scheduledtask/runtask Microsoft Documentation}
   * @example
   * await adminClient.RunTask({
   *   "Identifier": {
   *     "Id": "E1772FD927D8539D"
   *   }
   * });
   */
  RunTask (request: RunTaskRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<RunTaskResult>("/Admin/RunTask", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Forces an email to be sent to the registered email address for the user's account, with a link allowing the user to
   * change the password.If an account recovery email template ID is provided, an email using the custom email template will
   * be used.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/account-management/sendaccountrecoveryemail Microsoft Documentation}
   * @example
   * await adminClient.SendAccountRecoveryEmail({
   *   "Email": "assignedemail@here.com",
   *   "EmailTemplateId": "D53AB15D8F12E330"
   * });
   */
  SendAccountRecoveryEmail (request: SendAccountRecoveryEmailRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<SendAccountRecoveryEmailResult>("/Admin/SendAccountRecoveryEmail", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Creates the catalog configuration of all virtual goods for the specified catalog version
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/setcatalogitems Microsoft Documentation}
   * @example
   * await adminClient.SetCatalogItems({
   *   "CatalogVersion": "5",
   *   "Catalog": [
   *     {
   *       "ItemId": "shield_level_5",
   *       "ItemClass": "shields",
   *       "DisplayName": "Level 5 Shield",
   *       "Description": "Strong defense against projectile attacks",
   *       "VirtualCurrencyPrices": {
   *         "RM": 199,
   *         "GV": 25
   *       },
   *       "RealCurrencyPrices": {
   *         "GBP": 149,
   *         "EUR": 169
   *       },
   *       "CanBecomeCharacter": false,
   *       "IsStackable": false,
   *       "IsTradable": false,
   *       "IsLimitedEdition": false,
   *       "InitialLimitedEditionCount": 0
   *     },
   *     {
   *       "ItemId": "energy_boost_1",
   *       "ItemClass": "boosts",
   *       "DisplayName": "Energy Drink Six-Pack",
   *       "Description": "Get a quick burst of energy whenever you need it",
   *       "VirtualCurrencyPrices": {
   *         "RM": 199,
   *         "GV": 25
   *       },
   *       "CanBecomeCharacter": false,
   *       "IsStackable": false,
   *       "IsTradable": false,
   *       "IsLimitedEdition": false,
   *       "InitialLimitedEditionCount": 0
   *     },
   *     {
   *       "ItemId": "required_item_for_grant_a_1",
   *       "ItemClass": "sets",
   *       "DisplayName": "Grant Set Item 1",
   *       "Description": "Item 1 from the set of items needed to get Granted Item A for free",
   *       "VirtualCurrencyPrices": {
   *         "RM": 249,
   *         "GV": 1500
   *       },
   *       "CanBecomeCharacter": false,
   *       "IsStackable": false,
   *       "IsTradable": false,
   *       "IsLimitedEdition": false,
   *       "InitialLimitedEditionCount": 0
   *     },
   *     {
   *       "ItemId": "required_item_for_grant_a_2",
   *       "ItemClass": "sets",
   *       "DisplayName": "Grant Set Item 2",
   *       "Description": "Item 2 from the set of items needed to get Granted Item A for free",
   *       "VirtualCurrencyPrices": {
   *         "RM": 249,
   *         "GV": 1500
   *       },
   *       "CanBecomeCharacter": false,
   *       "IsStackable": false,
   *       "IsTradable": false,
   *       "IsLimitedEdition": false,
   *       "InitialLimitedEditionCount": 0
   *     },
   *     {
   *       "ItemId": "required_item_for_grant_a_3",
   *       "ItemClass": "sets",
   *       "DisplayName": "Grant Set Item 3",
   *       "Description": "Item 3 from the set of items needed to get Granted Item A for free",
   *       "VirtualCurrencyPrices": {
   *         "RM": 249,
   *         "GV": 1500
   *       },
   *       "CanBecomeCharacter": false,
   *       "IsStackable": false,
   *       "IsTradable": false,
   *       "IsLimitedEdition": false,
   *       "InitialLimitedEditionCount": 0
   *     },
   *     {
   *       "ItemId": "required_item_for_grant_a_4",
   *       "ItemClass": "sets",
   *       "DisplayName": "Grant Set Item 4",
   *       "Description": "Item 4 from the set of items needed to get Granted Item A for free",
   *       "VirtualCurrencyPrices": {
   *         "RM": 249,
   *         "GV": 1500
   *       },
   *       "CanBecomeCharacter": false,
   *       "IsStackable": false,
   *       "IsTradable": false,
   *       "IsLimitedEdition": false,
   *       "InitialLimitedEditionCount": 0
   *     },
   *     {
   *       "ItemId": "granted_item_a",
   *       "ItemClass": "sets",
   *       "DisplayName": "Granted Item A",
   *       "Description": "Bonus item granted for free once the full set of 4 Grant Set items are collected",
   *       "CanBecomeCharacter": false,
   *       "IsStackable": false,
   *       "IsTradable": false,
   *       "IsLimitedEdition": false,
   *       "InitialLimitedEditionCount": 0
   *     },
   *     {
   *       "ItemId": "consumable_item_1",
   *       "ItemClass": "Consumables",
   *       "DisplayName": "Consumable Item 1",
   *       "Description": "Item demonstrating usage-based consumables",
   *       "VirtualCurrencyPrices": {
   *         "GV": 500
   *       },
   *       "Consumable": {
   *         "UsageCount": 3
   *       },
   *       "CanBecomeCharacter": false,
   *       "IsStackable": false,
   *       "IsTradable": false,
   *       "IsLimitedEdition": false,
   *       "InitialLimitedEditionCount": 0
   *     },
   *     {
   *       "ItemId": "consumable_item_2",
   *       "ItemClass": "Consumables",
   *       "DisplayName": "Consumable Item 2",
   *       "Description": "Item demonstrating time-based consumables",
   *       "VirtualCurrencyPrices": {
   *         "GV": 750
   *       },
   *       "Consumable": {
   *         "UsagePeriod": 3600,
   *         "UsagePeriodGroup": "usage_group_1"
   *       },
   *       "CanBecomeCharacter": false,
   *       "IsStackable": false,
   *       "IsTradable": false,
   *       "IsLimitedEdition": false,
   *       "InitialLimitedEditionCount": 0
   *     },
   *     {
   *       "ItemId": "sub_bundle_item_1",
   *       "ItemClass": "Bundles",
   *       "DisplayName": "Bundled Item 1",
   *       "Description": "Item which is added to the user inventory as part of a bundle",
   *       "CanBecomeCharacter": false,
   *       "IsStackable": false,
   *       "IsTradable": false,
   *       "IsLimitedEdition": false,
   *       "InitialLimitedEditionCount": 0
   *     },
   *     {
   *       "ItemId": "sub_bundle_item_2",
   *       "ItemClass": "Bundles",
   *       "DisplayName": "Bundled Item 2",
   *       "Description": "Item which is added to the user inventory as part of a bundle",
   *       "CanBecomeCharacter": false,
   *       "IsStackable": false,
   *       "IsTradable": false,
   *       "IsLimitedEdition": false,
   *       "InitialLimitedEditionCount": 0
   *     },
   *     {
   *       "ItemId": "item_bundle_1",
   *       "ItemClass": "Bundles",
   *       "DisplayName": "Item bundle 1",
   *       "Description": "Item which, when added to the user inventory, also adds other bundled items",
   *       "VirtualCurrencyPrices": {
   *         "RM": 599
   *       },
   *       "Bundle": {
   *         "BundledItems": [
   *           "sub_bundle_item_1",
   *           "sub_bundle_item_2"
   *         ],
   *         "BundledResultTables": [
   *           "random_result_1"
   *         ],
   *         "BundledVirtualCurrencies": {
   *           "GV": 1000
   *         }
   *       },
   *       "CanBecomeCharacter": false,
   *       "IsStackable": false,
   *       "IsTradable": false,
   *       "IsLimitedEdition": false,
   *       "InitialLimitedEditionCount": 0
   *     },
   *     {
   *       "ItemId": "key_item_1",
   *       "ItemClass": "Containers",
   *       "DisplayName": "Key Item 1",
   *       "Description": "Key used to unlock Container 1",
   *       "VirtualCurrencyPrices": {
   *         "RM": 199
   *       },
   *       "CanBecomeCharacter": false,
   *       "IsStackable": false,
   *       "IsTradable": false,
   *       "IsLimitedEdition": false,
   *       "InitialLimitedEditionCount": 0
   *     },
   *     {
   *       "ItemId": "sub_container_item_1",
   *       "ItemClass": "Containers",
   *       "DisplayName": "Container Item 1",
   *       "Description": "Item which is added to the user inventory as part of opening a container",
   *       "CanBecomeCharacter": false,
   *       "IsStackable": false,
   *       "IsTradable": false,
   *       "IsLimitedEdition": false,
   *       "InitialLimitedEditionCount": 0
   *     },
   *     {
   *       "ItemId": "sub_container_item_2",
   *       "ItemClass": "Containers",
   *       "DisplayName": "Container Item 2",
   *       "Description": "Item which is added to the user inventory as part of opening a container",
   *       "CanBecomeCharacter": false,
   *       "IsStackable": false,
   *       "IsTradable": false,
   *       "IsLimitedEdition": false,
   *       "InitialLimitedEditionCount": 0
   *     },
   *     {
   *       "ItemId": "item_container_1",
   *       "ItemClass": "Containers",
   *       "DisplayName": "Item Container 1",
   *       "Description": "Item which, when opened with Key Item 1, also adds the items it holds to the user inventory",
   *       "VirtualCurrencyPrices": {
   *         "RM": 499
   *       },
   *       "Consumable": {
   *         "UsageCount": 1
   *       },
   *       "Container": {
   *         "KeyItemId": "key_item_1",
   *         "ItemContents": [
   *           "sub_container_item_1",
   *           "sub_container_item_2"
   *         ],
   *         "ResultTableContents": [
   *           "random_result_1"
   *         ],
   *         "VirtualCurrencyContents": {
   *           "GV": 1000
   *         }
   *       },
   *       "CanBecomeCharacter": false,
   *       "IsStackable": false,
   *       "IsTradable": false,
   *       "IsLimitedEdition": false,
   *       "InitialLimitedEditionCount": 0
   *     },
   *     {
   *       "ItemId": "item_container_2",
   *       "ItemClass": "Containers",
   *       "DisplayName": "Item Container 2",
   *       "Description": "Item which, when opened (no key needed), adds the items it holds to the user inventory",
   *       "VirtualCurrencyPrices": {
   *         "RM": 99
   *       },
   *       "Consumable": {
   *         "UsageCount": 1
   *       },
   *       "Container": {
   *         "VirtualCurrencyContents": {
   *           "GV": 1000
   *         }
   *       },
   *       "CanBecomeCharacter": false,
   *       "IsStackable": false,
   *       "IsTradable": false,
   *       "IsLimitedEdition": false,
   *       "InitialLimitedEditionCount": 0
   *     },
   *     {
   *       "ItemId": "starterpack_1",
   *       "ItemClass": "starterpacks",
   *       "DisplayName": "Super Starter Pack",
   *       "Description": "Everything you need to get started fast track at the right price",
   *       "CanBecomeCharacter": false,
   *       "IsStackable": false,
   *       "IsTradable": false,
   *       "IsLimitedEdition": false,
   *       "InitialLimitedEditionCount": 0
   *     }
   *   ]
   * });
   */
  SetCatalogItems (request: UpdateCatalogItemsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdateCatalogItemsResult>("/Admin/SetCatalogItems", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Updates the sink to which to route PlayStream and Telemetry event data.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/playstream/seteventsink Microsoft Documentation}
   * @example
   * await adminClient.SetEventSink({
   *   "Sink": {
   *     "Name": "MyStorage",
   *     "DestinationType": "AzureBlobStorage",
   *     "IsEnabled": true,
   *     "SinkSettings": {
   *       "AccountName": "mystorageaccount",
   *       "ContainerName": "mycontainername",
   *       "TenantId": null,
   *       "Credentials": {
   *         "Secret": ""
   *       }
   *     }
   *   }
   * });
   */
  SetEventSink (request: SetEventSinkRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<SetEventSinkResult>("/Admin/SetEventSink", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Sets the override expiration for a membership subscription
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/account-management/setmembershipoverride Microsoft Documentation}
   * @example
   * await adminClient.SetMembershipOverride({
   *   "ExpirationTime": "2014-04-06T00:00:00Z",
   *   "MembershipId": "ShieldBonusMembership",
   *   "PlayFabId": "204883457"
   * });
   */
  SetMembershipOverride (request: SetMembershipOverrideRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<SetMembershipOverrideResult>("/Admin/SetMembershipOverride", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Sets or resets the player's secret. Player secrets are used to sign API requests.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/authentication/setplayersecret Microsoft Documentation}
   * @example
   * await adminClient.SetPlayerSecret({
   *   "PlayerSecret": "ExampleSecret",
   *   "PlayFabId": "ABCD1234"
   * });
   */
  SetPlayerSecret (request: SetPlayerSecretRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<SetPlayerSecretResult>("/Admin/SetPlayerSecret", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Sets the currently published revision of a title Cloud Script
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/server-side-cloud-script/setpublishedrevision Microsoft Documentation}
   * @example
   * await adminClient.SetPublishedRevision({
   *   "Version": 1,
   *   "Revision": 3
   * });
   */
  SetPublishedRevision (request: SetPublishedRevisionRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<SetPublishedRevisionResult>("/Admin/SetPublishedRevision", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Updates the key-value store of custom publisher settings
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/shared-group-data/setpublisherdata Microsoft Documentation}
   * @example
   * await adminClient.SetPublisherData({
   *   "Key": "Running Speed",
   *   "Value": "1.03"
   * });
   */
  SetPublisherData (request: SetPublisherDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<SetPublisherDataResult>("/Admin/SetPublisherData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Sets all the items in one virtual store
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/setstoreitems Microsoft Documentation}
   * @example
   * await adminClient.SetStoreItems({
   *   "StoreId": "BonusStore",
   *   "Store": [
   *     {
   *       "ItemId": "shield_level_5",
   *       "VirtualCurrencyPrices": {
   *         "RM": 180,
   *         "GV": 20
   *       },
   *       "RealCurrencyPrices": {
   *         "GBP": 100
   *       }
   *     },
   *     {
   *       "ItemId": "energy_boost_1",
   *       "VirtualCurrencyPrices": {
   *         "RM": 250,
   *         "GV": 30
   *       }
   *     },
   *     {
   *       "ItemId": "starterpack_1",
   *       "VirtualCurrencyPrices": {
   *         "RM": 399
   *       }
   *     }
   *   ]
   * });
   */
  SetStoreItems (request: UpdateStoreItemsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdateStoreItemsResult>("/Admin/SetStoreItems", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Creates and updates the key-value store of custom title settings which can be read by the client. For example, a
   * developer could choose to store values which modify the user experience, such as enemy spawn rates, weapon strengths,
   * movement speeds, etc. This allows a developer to update the title without the need to create, test, and ship a new
   * build.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/settitledata Microsoft Documentation}
   * @example
   * await adminClient.SetTitleData({
   *   "Key": "Running Speed",
   *   "Value": "1.03"
   * });
   */
  SetTitleData (request: SetTitleDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<SetTitleDataResult>("/Admin/SetTitleData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Set and delete key-value pairs in a title data override instance.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/settitledataandoverrides Microsoft Documentation}
   * @example
   * await adminClient.SetTitleDataAndOverrides({
   *   "OverrideLabel": "Holiday title data",
   *   "TitleId": "8FF3A797",
   *   "KeyValues": [
   *     {
   *       "Key": "Running Speed",
   *       "Value": "1.03"
   *     },
   *     {
   *       "Key": "Walking Speed",
   *       "Value": "0.05"
   *     }
   *   ]
   * });
   */
  SetTitleDataAndOverrides (request: SetTitleDataAndOverridesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<SetTitleDataAndOverridesResult>("/Admin/SetTitleDataAndOverrides", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Updates the key-value store of custom title settings which cannot be read by the client. These values can be used to
   * tweak settings used by game servers and Cloud Scripts without the need to update and re-deploy.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/settitleinternaldata Microsoft Documentation}
   * @example
   * await adminClient.SetTitleInternalData({
   *   "Key": "Running Speed",
   *   "Value": "1.03"
   * });
   */
  SetTitleInternalData (request: SetTitleDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<SetTitleDataResult>("/Admin/SetTitleInternalData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Sets the Amazon Resource Name (ARN) for iOS and Android push notifications. Documentation on the exact restrictions can
   * be found at: http://docs.aws.amazon.com/sns/latest/api/API_CreatePlatformApplication.html. Currently, Amazon device
   * Messaging is not supported.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/setuppushnotification Microsoft Documentation}
   * @example
   * await adminClient.SetupPushNotification({
   *   "Platform": "APNS_SANDBOX",
   *   "Key": "MyKey123",
   *   "Credential": "MyCredentialsXYZ",
   *   "OverwriteOldARN": false
   * });
   */
  SetupPushNotification (request: SetupPushNotificationRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<SetupPushNotificationResult>("/Admin/SetupPushNotification", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Decrements the specified virtual currency by the stated amount
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/player-item-management/subtractuservirtualcurrency Microsoft Documentation}
   * @example
   * await adminClient.SubtractUserVirtualCurrency({
   *   "PlayFabId": "20394883",
   *   "VirtualCurrency": "GC",
   *   "Amount": 100
   * });
   */
  SubtractUserVirtualCurrency (request: SubtractUserVirtualCurrencyRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ModifyUserVirtualCurrencyResult>("/Admin/SubtractUserVirtualCurrency", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Updates information of a list of existing bans specified with Ban Ids.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/account-management/updatebans Microsoft Documentation}
   * @example
   * await adminClient.UpdateBans({
   *   "Bans": [
   *     {
   *       "BanId": "E0B5FF89542D413C",
   *       "Permanent": true,
   *       "Active": true
   *     },
   *     {
   *       "BanId": "EF43FF89542G1546",
   *       "Reason": "Royal pardon",
   *       "Expires": "2016-07-04T00:00:00Z"
   *     }
   *   ]
   * });
   */
  UpdateBans (request: UpdateBansRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdateBansResult>("/Admin/UpdateBans", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Updates the catalog configuration for virtual goods in the specified catalog version
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/updatecatalogitems Microsoft Documentation}
   * @example
   * await adminClient.UpdateCatalogItems({
   *   "CatalogVersion": "5",
   *   "Catalog": [
   *     {
   *       "ItemId": "shield_level_5",
   *       "ItemClass": "shields",
   *       "DisplayName": "Level 5 Shield",
   *       "Description": "Strong defense against projectile attacks",
   *       "VirtualCurrencyPrices": {
   *         "RM": 199,
   *         "GV": 25
   *       },
   *       "RealCurrencyPrices": {
   *         "GBP": 149,
   *         "EUR": 169
   *       },
   *       "CanBecomeCharacter": false,
   *       "IsStackable": false,
   *       "IsTradable": false,
   *       "IsLimitedEdition": false,
   *       "InitialLimitedEditionCount": 0
   *     },
   *     {
   *       "ItemId": "energy_boost_1",
   *       "ItemClass": "boosts",
   *       "DisplayName": "Energy Drink Six-Pack",
   *       "Description": "Get a quick burst of energy whenever you need it",
   *       "VirtualCurrencyPrices": {
   *         "RM": 199,
   *         "GV": 25
   *       },
   *       "CanBecomeCharacter": false,
   *       "IsStackable": false,
   *       "IsTradable": false,
   *       "IsLimitedEdition": false,
   *       "InitialLimitedEditionCount": 0
   *     },
   *     {
   *       "ItemId": "required_item_for_grant_a_1",
   *       "ItemClass": "sets",
   *       "DisplayName": "Grant Set Item 1",
   *       "Description": "Item 1 from the set of items needed to get Granted Item A for free",
   *       "VirtualCurrencyPrices": {
   *         "RM": 249,
   *         "GV": 1500
   *       },
   *       "CanBecomeCharacter": false,
   *       "IsStackable": false,
   *       "IsTradable": false,
   *       "IsLimitedEdition": false,
   *       "InitialLimitedEditionCount": 0
   *     },
   *     {
   *       "ItemId": "required_item_for_grant_a_2",
   *       "ItemClass": "sets",
   *       "DisplayName": "Grant Set Item 2",
   *       "Description": "Item 2 from the set of items needed to get Granted Item A for free",
   *       "VirtualCurrencyPrices": {
   *         "RM": 249,
   *         "GV": 1500
   *       },
   *       "CanBecomeCharacter": false,
   *       "IsStackable": false,
   *       "IsTradable": false,
   *       "IsLimitedEdition": false,
   *       "InitialLimitedEditionCount": 0
   *     },
   *     {
   *       "ItemId": "required_item_for_grant_a_3",
   *       "ItemClass": "sets",
   *       "DisplayName": "Grant Set Item 3",
   *       "Description": "Item 3 from the set of items needed to get Granted Item A for free",
   *       "VirtualCurrencyPrices": {
   *         "RM": 249,
   *         "GV": 1500
   *       },
   *       "CanBecomeCharacter": false,
   *       "IsStackable": false,
   *       "IsTradable": false,
   *       "IsLimitedEdition": false,
   *       "InitialLimitedEditionCount": 0
   *     },
   *     {
   *       "ItemId": "required_item_for_grant_a_4",
   *       "ItemClass": "sets",
   *       "DisplayName": "Grant Set Item 4",
   *       "Description": "Item 4 from the set of items needed to get Granted Item A for free",
   *       "VirtualCurrencyPrices": {
   *         "RM": 249,
   *         "GV": 1500
   *       },
   *       "CanBecomeCharacter": false,
   *       "IsStackable": false,
   *       "IsTradable": false,
   *       "IsLimitedEdition": false,
   *       "InitialLimitedEditionCount": 0
   *     },
   *     {
   *       "ItemId": "granted_item_a",
   *       "ItemClass": "sets",
   *       "DisplayName": "Granted Item A",
   *       "Description": "Bonus item granted for free once the full set of 4 Grant Set items are collected",
   *       "CanBecomeCharacter": false,
   *       "IsStackable": false,
   *       "IsTradable": false,
   *       "IsLimitedEdition": false,
   *       "InitialLimitedEditionCount": 0
   *     },
   *     {
   *       "ItemId": "consumable_item_1",
   *       "ItemClass": "Consumables",
   *       "DisplayName": "Consumable Item 1",
   *       "Description": "Item demonstrating usage-based consumables",
   *       "VirtualCurrencyPrices": {
   *         "GV": 500
   *       },
   *       "Consumable": {
   *         "UsageCount": 3
   *       },
   *       "CanBecomeCharacter": false,
   *       "IsStackable": false,
   *       "IsTradable": false,
   *       "IsLimitedEdition": false,
   *       "InitialLimitedEditionCount": 0
   *     },
   *     {
   *       "ItemId": "consumable_item_2",
   *       "ItemClass": "Consumables",
   *       "DisplayName": "Consumable Item 2",
   *       "Description": "Item demonstrating time-based consumables",
   *       "VirtualCurrencyPrices": {
   *         "GV": 750
   *       },
   *       "Consumable": {
   *         "UsagePeriod": 3600,
   *         "UsagePeriodGroup": "usage_group_1"
   *       },
   *       "CanBecomeCharacter": false,
   *       "IsStackable": false,
   *       "IsTradable": false,
   *       "IsLimitedEdition": false,
   *       "InitialLimitedEditionCount": 0
   *     },
   *     {
   *       "ItemId": "sub_bundle_item_1",
   *       "ItemClass": "Bundles",
   *       "DisplayName": "Bundled Item 1",
   *       "Description": "Item which is added to the user inventory as part of a bundle",
   *       "CanBecomeCharacter": false,
   *       "IsStackable": false,
   *       "IsTradable": false,
   *       "IsLimitedEdition": false,
   *       "InitialLimitedEditionCount": 0
   *     },
   *     {
   *       "ItemId": "sub_bundle_item_2",
   *       "ItemClass": "Bundles",
   *       "DisplayName": "Bundled Item 2",
   *       "Description": "Item which is added to the user inventory as part of a bundle",
   *       "CanBecomeCharacter": false,
   *       "IsStackable": false,
   *       "IsTradable": false,
   *       "IsLimitedEdition": false,
   *       "InitialLimitedEditionCount": 0
   *     },
   *     {
   *       "ItemId": "item_bundle_1",
   *       "ItemClass": "Bundles",
   *       "DisplayName": "Item bundle 1",
   *       "Description": "Item which, when added to the user inventory, also adds other bundled items",
   *       "VirtualCurrencyPrices": {
   *         "RM": 599
   *       },
   *       "Bundle": {
   *         "BundledItems": [
   *           "sub_bundle_item_1",
   *           "sub_bundle_item_2"
   *         ],
   *         "BundledResultTables": [
   *           "random_result_1"
   *         ],
   *         "BundledVirtualCurrencies": {
   *           "GV": 1000
   *         }
   *       },
   *       "CanBecomeCharacter": false,
   *       "IsStackable": false,
   *       "IsTradable": false,
   *       "IsLimitedEdition": false,
   *       "InitialLimitedEditionCount": 0
   *     },
   *     {
   *       "ItemId": "key_item_1",
   *       "ItemClass": "Containers",
   *       "DisplayName": "Key Item 1",
   *       "Description": "Key used to unlock Container 1",
   *       "VirtualCurrencyPrices": {
   *         "RM": 199
   *       },
   *       "CanBecomeCharacter": false,
   *       "IsStackable": false,
   *       "IsTradable": false,
   *       "IsLimitedEdition": false,
   *       "InitialLimitedEditionCount": 0
   *     },
   *     {
   *       "ItemId": "sub_container_item_1",
   *       "ItemClass": "Containers",
   *       "DisplayName": "Container Item 1",
   *       "Description": "Item which is added to the user inventory as part of opening a container",
   *       "CanBecomeCharacter": false,
   *       "IsStackable": false,
   *       "IsTradable": false,
   *       "IsLimitedEdition": false,
   *       "InitialLimitedEditionCount": 0
   *     },
   *     {
   *       "ItemId": "sub_container_item_2",
   *       "ItemClass": "Containers",
   *       "DisplayName": "Container Item 2",
   *       "Description": "Item which is added to the user inventory as part of opening a container",
   *       "CanBecomeCharacter": false,
   *       "IsStackable": false,
   *       "IsTradable": false,
   *       "IsLimitedEdition": false,
   *       "InitialLimitedEditionCount": 0
   *     },
   *     {
   *       "ItemId": "item_container_1",
   *       "ItemClass": "Containers",
   *       "DisplayName": "Item Container 1",
   *       "Description": "Item which, when opened with Key Item 1, also adds the items it holds to the user inventory",
   *       "VirtualCurrencyPrices": {
   *         "RM": 499
   *       },
   *       "Consumable": {
   *         "UsageCount": 1
   *       },
   *       "Container": {
   *         "KeyItemId": "key_item_1",
   *         "ItemContents": [
   *           "sub_container_item_1",
   *           "sub_container_item_2"
   *         ],
   *         "ResultTableContents": [
   *           "random_result_1"
   *         ],
   *         "VirtualCurrencyContents": {
   *           "GV": 1000
   *         }
   *       },
   *       "CanBecomeCharacter": false,
   *       "IsStackable": false,
   *       "IsTradable": false,
   *       "IsLimitedEdition": false,
   *       "InitialLimitedEditionCount": 0
   *     },
   *     {
   *       "ItemId": "item_container_2",
   *       "ItemClass": "Containers",
   *       "DisplayName": "Item Container 2",
   *       "Description": "Item which, when opened (no key needed), adds the items it holds to the user inventory",
   *       "VirtualCurrencyPrices": {
   *         "RM": 99
   *       },
   *       "Consumable": {
   *         "UsageCount": 1
   *       },
   *       "Container": {
   *         "VirtualCurrencyContents": {
   *           "GV": 1000
   *         }
   *       },
   *       "CanBecomeCharacter": false,
   *       "IsStackable": false,
   *       "IsTradable": false,
   *       "IsLimitedEdition": false,
   *       "InitialLimitedEditionCount": 0
   *     },
   *     {
   *       "ItemId": "starterpack_1",
   *       "ItemClass": "starterpacks",
   *       "DisplayName": "Super Starter Pack",
   *       "Description": "Everything you need to get started fast track at the right price",
   *       "CanBecomeCharacter": false,
   *       "IsStackable": false,
   *       "IsTradable": false,
   *       "IsLimitedEdition": false,
   *       "InitialLimitedEditionCount": 0
   *     }
   *   ]
   * });
   */
  UpdateCatalogItems (request: UpdateCatalogItemsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdateCatalogItemsResult>("/Admin/UpdateCatalogItems", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Creates a new Cloud Script revision and uploads source code to it. Note that at this time, only one file should be
   * submitted in the revision.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/server-side-cloud-script/updatecloudscript Microsoft Documentation}
   * @example
   * await adminClient.UpdateCloudScript({
   *   "Files": [
   *     {
   *       "Filename": "main.js",
   *       "FileContents": "var LevelRewards =\r\n[\r\n\t[\"TestItem1\"],\r\n\t[\"TestItem2\"],\r\n\t[\"TestItem3\"],\r\n\t[\"TestItem1\", \"TestItem2\"],\r\n\t[\"TestItem2\", \"TestItem2\"],\r\n\t[\"TestItem3\", \"TestItem3\"]\r\n]\r\n\r\nhandlers.onLevelComplete = function(args)\r\n{\r\n\tvar levelNum = args.level;\r\n\t\r\n\t// Do some basic input validation\r\n\tif(levelNum < 0 || levelNum >= LevelRewards.length)\r\n\t{\r\n\t\tlog.info(\"Invalid level \"+levelNum+\" completed by \"+currentPlayerId);\r\n\t\treturn {};\r\n\t}\r\n\t\r\n\tvar levelCompleteKey = \"LevelCompleted\"+levelNum;\r\n\t\r\n\t// Get the user's internal data\r\n\tvar playerInternalData = server.GetUserInternalData(\r\n\t{\r\n\t\tPlayFabId: currentPlayerId,\r\n\t\tKeys: [levelCompleteKey]\r\n\t});\r\n\t\r\n\t// Did they already complete this level?\r\n\tif(playerInternalData.Data[levelCompleteKey])\r\n\t{\r\n\t\tlog.info(\"Player \"+currentPlayerId+\" already completed level \"+levelNum);\r\n\t\treturn {};\r\n\t}\r\n\t\r\n\tvar rewards = LevelRewards[levelNum];\r\n\t\r\n\tvar resultItems = null;\r\n\tif(rewards)\r\n\t{\r\n\t\t// Grant reward items to player for completing the level\r\n\t\tvar itemGrantResult = server.GrantItemsToUser(\r\n\t\t{\r\n\t\t\tPlayFabId: currentPlayerId,\r\n\t\t\tAnnotation: \"Given by completing level \"+levelNum,\r\n\t\t\tItemIds: rewards\r\n\t\t});\r\n\t\t\r\n\t\tresultItems = itemGrantResult.ItemGrantResults;\r\n\t}\r\n\t\r\n\t// Mark the level as being completed so they can't get the reward again\r\n\tvar saveData = {};\r\n\tsaveData[levelCompleteKey] = \"true\";\r\n\tserver.UpdateUserInternalData(\r\n\t{\r\n\t\tPlayFabId: currentPlayerId,\r\n\t\tData: saveData\r\n\t});\r\n\r\n\t// Return the results of the item grant so the client can see what they got\r\n\treturn {\r\n\t\trewards: resultItems\r\n\t};\r\n}\r\n\r\nvar monsterRewards =\r\n{\r\n\t\"skrill\" : { \"ChumpCoins\" : 100},\r\n\t\"lumpur\" : { \"ChumpCoins\" : 200}\r\n}\r\n\r\nvar killCoolDown = 60;\r\n\r\nfunction currTimeSeconds()\r\n{\r\n\tvar now = new Date();\r\n\treturn now.getTime() / 1000;\r\n}\r\n\r\nhandlers.monsterKilled = function(args)\r\n{\r\n\tvar monsterType = args.type;\r\n\t\r\n\tvar now = currTimeSeconds();\r\n\t\r\n\t// Get the user's internal data\r\n\tvar playerInternalData = server.GetUserInternalData(\r\n\t{\r\n\t\tPlayFabId: currentPlayerId,\r\n\t\tKeys: [\"lastKill\"]\r\n\t});\r\n\t\r\n\t// Check when the last time they killed a monster was \r\n\tvar lastKill = playerInternalData.Data[\"lastKill\"];\r\n\tif(lastKill)\r\n\t{\r\n\t\t// We have a value, see when it is\r\n\t\tvar lastKillTime = parseInt(lastKill.Value);\r\n\t\tif(now - lastKillTime < killCoolDown)\r\n\t\t{\r\n\t\t\t// In this particular game, it should not be possible to kill a monster more often than once a minute, so they might be cheating\r\n\t\t\tlog.info(\"Player \"+currentPlayerId+\" killed \"+monsterType+\" again too quickly!\");\r\n\t\t\treturn {};\r\n\t\t}\r\n\t}\r\n\t\r\n\tvar killReward = monsterRewards[monsterType];\r\n\t\r\n\tif(killReward)\r\n\t{\r\n\t\tfor(var currency in killReward)\r\n\t\t{\r\n\t\t\tvar amount = killReward[currency];\r\n\t\t\tserver.AddUserVirtualCurrency({ PlayFabId: currentPlayerId, VirtualCurrency: currency, Amount: amount });\r\n\t\t}\r\n\t}\r\n\t\r\n\t// Reset the kill timer\r\n\tserver.UpdateUserInternalData(\r\n\t{\r\n\t\tPlayFabId: currentPlayerId,\r\n\t\tData: {\r\n\t\t\t\"lastKill\" : String(now)\r\n\t\t}\r\n\t});\r\n\t\r\n\treturn {\r\n\t\trewards: killReward\r\n\t};\r\n}"
   *     }
   *   ],
   *   "Publish": false
   * });
   */
  UpdateCloudScript (request: UpdateCloudScriptRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdateCloudScriptResult>("/Admin/UpdateCloudScript", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Modifies data and credentials for an existing relationship between a title and an Open ID Connect provider
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/authentication/updateopenidconnection Microsoft Documentation}
   * @example
   * await adminClient.UpdateOpenIdConnection({
   *   "ConnectionId": "oidconnection1",
   *   "ClientId": "example_id_1",
   *   "ClientSecret": "new_example_secret",
   *   "IssuerInformation": {
   *     "Issuer": "https://issuer.example.com/",
   *     "AuthorizationUrl": "https://issuer.example.com/authorize",
   *     "TokenUrl": "https://issuer.example.com/oauth2/token",
   *     "JsonWebKeySet": {
   *       "keys": [
   *         "..."
   *       ]
   *     }
   *   },
   *   "IssuerOverride": "https://issueroverride.example.com/"
   * });
   */
  UpdateOpenIdConnection (request: UpdateOpenIdConnectionRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Admin/UpdateOpenIdConnection", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Updates the title-specific custom property values for a player
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/updateplayercustomproperties Microsoft Documentation}
   * @example
   * await adminClient.UpdatePlayerCustomProperties({
   *   "PlayFabId": "2039475",
   *   "Properties": [
   *     {
   *       "Name": "level",
   *       "Value": 5
   *     },
   *     {
   *       "Name": "created",
   *       "Value": false
   *     }
   *   ],
   *   "ExpectedPropertiesVersion": 12
   * });
   */
  UpdatePlayerCustomProperties (request: UpdatePlayerCustomPropertiesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdatePlayerCustomPropertiesResult>("/Admin/UpdatePlayerCustomProperties", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Updates a existing Player Shared Secret Key. It may take up to 5 minutes for this update to become generally available
   * after this API returns.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/authentication/updateplayersharedsecret Microsoft Documentation}
   * @example
   * await adminClient.UpdatePlayerSharedSecret({
   *   "SecretKey": "keysaresecret",
   *   "FriendlyName": "XBox Users",
   *   "Disabled": false
   * });
   */
  UpdatePlayerSharedSecret (request: UpdatePlayerSharedSecretRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdatePlayerSharedSecretResult>("/Admin/UpdatePlayerSharedSecret", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Updates a player statistic configuration for the title, optionally allowing the developer to specify a reset interval.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/updateplayerstatisticdefinition Microsoft Documentation}
   * @example
   * await adminClient.UpdatePlayerStatisticDefinition({
   *   "StatisticName": "headshots",
   *   "VersionChangeInterval": "Day",
   *   "ShouldProvisionLeaderboard": false
   * });
   */
  UpdatePlayerStatisticDefinition (request: UpdatePlayerStatisticDefinitionRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdatePlayerStatisticDefinitionResult>("/Admin/UpdatePlayerStatisticDefinition", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Changes a policy for a title
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/authentication/updatepolicy Microsoft Documentation}
   * @example
   * await adminClient.UpdatePolicy({
   *   "PolicyName": "ApiPolicy",
   *   "Statements": [
   *     {
   *       "Resource": "pfrn:api--*",
   *       "Action": "*",
   *       "Effect": "Allow",
   *       "Principal": "*",
   *       "Comment": "The default allow all policy"
   *     },
   *     {
   *       "Resource": "pfrn:api--/Client/ConfirmPurchase",
   *       "Action": "*",
   *       "Effect": "Allow",
   *       "Principal": "*",
   *       "Comment": "This statement allows only request to ConfirmPurchase"
   *     }
   *   ],
   *   "OverwritePolicy": false,
   *   "PolicyVersion": 0
   * });
   */
  UpdatePolicy (request: UpdatePolicyRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdatePolicyResponse>("/Admin/UpdatePolicy", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Updates the random drop table configuration for the title
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/updaterandomresulttables Microsoft Documentation}
   * @example
   * await adminClient.UpdateRandomResultTables({
   *   "Tables": [
   *     {
   *       "TableId": "DropTable 1",
   *       "Nodes": [
   *         {
   *           "ResultItemType": "ItemId",
   *           "ResultItem": "Gold Crown 1",
   *           "Weight": 20
   *         },
   *         {
   *           "ResultItemType": "ItemId",
   *           "ResultItem": "Magic Sword 3",
   *           "Weight": 50
   *         },
   *         {
   *           "ResultItemType": "ItemId",
   *           "ResultItem": "Clear Shield 3",
   *           "Weight": 70
   *         }
   *       ]
   *     }
   *   ]
   * });
   */
  UpdateRandomResultTables (request: UpdateRandomResultTablesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdateRandomResultTablesResult>("/Admin/UpdateRandomResultTables", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Updates an existing player segment and its associated definition(s) and action(s) for a title.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/segments/updatesegment Microsoft Documentation}
   * @example
   * await adminClient.UpdateSegment({
   *   "SegmentModel": {
   *     "SegmentId": "B05FC8CB558A6570",
   *     "Name": "My user segment",
   *     "LastUpdateTime": "0001-01-01T00:00:00Z",
   *     "SegmentOrDefinitions": [
   *       {
   *         "SegmentAndDefinitions": [
   *           {
   *             "AllPlayersFilter": {}
   *           }
   *         ]
   *       }
   *     ],
   *     "EnteredSegmentActions": [
   *       {
   *         "BanPlayerAction": {
   *           "BanHours": 2,
   *           "ReasonForBan": "Not played for a year"
   *         }
   *       }
   *     ],
   *     "LeftSegmentActions": [
   *       {
   *         "ExecuteAzureFunctionAction": {
   *           "AzureFunction": "AzureFunction1",
   *           "FunctionParameter": "{\"InputParam\": \"1\"}",
   *           "GenerateFunctionExecutedEvents": false
   *         }
   *       }
   *     ]
   *   }
   * });
   */
  UpdateSegment (request: UpdateSegmentRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdateSegmentResponse>("/Admin/UpdateSegment", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Updates an existing virtual item store with new or modified items
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/updatestoreitems Microsoft Documentation}
   * @example
   * await adminClient.UpdateStoreItems({
   *   "StoreId": "BonusStore",
   *   "Store": [
   *     {
   *       "ItemId": "shield_level_5",
   *       "VirtualCurrencyPrices": {
   *         "RM": 180,
   *         "GV": 20
   *       },
   *       "RealCurrencyPrices": {
   *         "GBP": 100
   *       }
   *     },
   *     {
   *       "ItemId": "energy_boost_1",
   *       "VirtualCurrencyPrices": {
   *         "RM": 250,
   *         "GV": 30
   *       }
   *     },
   *     {
   *       "ItemId": "starterpack_1",
   *       "VirtualCurrencyPrices": {
   *         "RM": 399
   *       }
   *     }
   *   ]
   * });
   */
  UpdateStoreItems (request: UpdateStoreItemsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdateStoreItemsResult>("/Admin/UpdateStoreItems", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Update an existing task.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/scheduledtask/updatetask Microsoft Documentation}
   * @example
   * await adminClient.UpdateTask({
   *   "Identifier": {
   *     "Name": "PushEventNotificationVIP_Halloween"
   *   },
   *   "Name": "PushEventNotificationVIP_Thanksgiving",
   *   "Description": "Send push notification to VIP about Thanksgiving event",
   *   "IsActive": false,
   *   "Type": "ActionsOnPlayerSegment",
   *   "Parameter": {
   *     "SegmentId": "E2B0F9C19B02D796",
   *     "Actions": [
   *       {
   *         "GrantItemContent": {
   *           "CatalogVersion": "foo",
   *           "ItemId": "bar",
   *           "ItemQuantity": 1
   *         }
   *       }
   *     ]
   *   }
   * });
   */
  UpdateTask (request: UpdateTaskRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Admin/UpdateTask", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Updates the title-specific custom data for the user which is readable and writable by the client
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/updateuserdata Microsoft Documentation}
   * @example
   * await adminClient.UpdateUserData({
   *   "PlayFabId": "2039475",
   *   "Data": {
   *     "Class": "Fighter",
   *     "Gender": "Female",
   *     "Icon": "Guard 3",
   *     "Theme": "Colorful"
   *   },
   *   "Permission": "Public"
   * });
   */
  UpdateUserData (request: UpdateUserDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdateUserDataResult>("/Admin/UpdateUserData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Updates the title-specific custom data for the user which cannot be accessed by the client
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/updateuserinternaldata Microsoft Documentation}
   * @example
   * await adminClient.UpdateUserInternalData({
   *   "PlayFabId": "2039475",
   *   "Data": {
   *     "Class": "Fighter",
   *     "Gender": "Female",
   *     "Icon": "Guard 3",
   *     "Theme": "Colorful"
   *   }
   * });
   */
  UpdateUserInternalData (request: UpdateUserInternalDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdateUserDataResult>("/Admin/UpdateUserInternalData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Updates the publisher-specific custom data for the user which is readable and writable by the client
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/updateuserpublisherdata Microsoft Documentation}
   * @example
   * await adminClient.UpdateUserPublisherData({
   *   "PlayFabId": "2039475",
   *   "Data": {
   *     "Class": "Fighter",
   *     "Gender": "Female",
   *     "Icon": "Guard 3",
   *     "Theme": "Colorful"
   *   },
   *   "Permission": "Public"
   * });
   */
  UpdateUserPublisherData (request: UpdateUserDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdateUserDataResult>("/Admin/UpdateUserPublisherData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Updates the publisher-specific custom data for the user which cannot be accessed by the client
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/updateuserpublisherinternaldata Microsoft Documentation}
   * @example
   * await adminClient.UpdateUserPublisherInternalData({
   *   "PlayFabId": "2039475",
   *   "Data": {
   *     "Class": "Fighter",
   *     "Gender": "Female",
   *     "Icon": "Guard 3",
   *     "Theme": "Colorful"
   *   }
   * });
   */
  UpdateUserPublisherInternalData (request: UpdateUserInternalDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdateUserDataResult>("/Admin/UpdateUserPublisherInternalData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Updates the publisher-specific custom data for the user which can only be read by the client
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/updateuserpublisherreadonlydata Microsoft Documentation}
   * @example
   * await adminClient.UpdateUserPublisherReadOnlyData({
   *   "PlayFabId": "2039475",
   *   "Data": {
   *     "Class": "Fighter",
   *     "Gender": "Female",
   *     "Icon": "Guard 3",
   *     "Theme": "Colorful"
   *   },
   *   "Permission": "Public"
   * });
   */
  UpdateUserPublisherReadOnlyData (request: UpdateUserDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdateUserDataResult>("/Admin/UpdateUserPublisherReadOnlyData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Updates the title-specific custom data for the user which can only be read by the client
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/updateuserreadonlydata Microsoft Documentation}
   * @example
   * await adminClient.UpdateUserReadOnlyData({
   *   "PlayFabId": "2039475",
   *   "Data": {
   *     "Class": "Fighter",
   *     "Gender": "Female",
   *     "Icon": "Guard 3",
   *     "Theme": "Colorful"
   *   },
   *   "Permission": "Public"
   * });
   */
  UpdateUserReadOnlyData (request: UpdateUserDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdateUserDataResult>("/Admin/UpdateUserReadOnlyData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Updates the title specific display name for a user
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/admin/account-management/updateusertitledisplayname Microsoft Documentation}
   * @example
   * await adminClient.UpdateUserTitleDisplayName({
   *   "PlayFabId": "293438",
   *   "DisplayName": "New Display Name"
   * });
   */
  UpdateUserTitleDisplayName (request: UpdateUserTitleDisplayNameRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdateUserTitleDisplayNameResult>("/Admin/UpdateUserTitleDisplayName", request, "X-SecretKey", extraHeaders);
  }

};
