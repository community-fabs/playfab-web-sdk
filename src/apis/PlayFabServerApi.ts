import type { EmptyResponse } from "../types/PlayFab";
import type {
  AddCharacterVirtualCurrencyRequest,
  AddFriendRequest,
  AddGenericIDRequest,
  AddPlayerTagRequest,
  AddSharedGroupMembersRequest,
  AddUserVirtualCurrencyRequest,
  AuthenticateSessionTicketRequest,
  AwardSteamAchievementRequest,
  BanUsersRequest,
  ConsumeItemRequest,
  CreateSharedGroupRequest,
  DeleteCharacterFromUserRequest,
  DeletePlayerRequest,
  DeletePlayerCustomPropertiesRequest,
  DeletePushNotificationTemplateRequest,
  DeleteSharedGroupRequest,
  DeleteUsersRequest,
  DeregisterGameRequest,
  EvaluateRandomResultTableRequest,
  ExecuteCloudScriptServerRequest,
  GetAllActionGroupsRequest,
  GetAllSegmentsRequest,
  ListUsersCharactersRequest,
  GetCatalogItemsRequest,
  GetCharacterDataRequest,
  GetCharacterInventoryRequest,
  GetCharacterLeaderboardRequest,
  GetCharacterStatisticsRequest,
  GetContentDownloadUrlRequest,
  GetFriendLeaderboardRequest,
  GetFriendsListRequest,
  GetLeaderboardRequest,
  GetLeaderboardAroundCharacterRequest,
  GetLeaderboardAroundUserRequest,
  GetLeaderboardForUsersCharactersRequest,
  GetPlayerCombinedInfoRequest,
  GetPlayerCustomPropertyRequest,
  GetPlayerProfileRequest,
  GetPlayersSegmentsRequest,
  GetPlayersInSegmentRequest,
  GetPlayerStatisticsRequest,
  GetPlayerStatisticVersionsRequest,
  GetPlayerTagsRequest,
  GetPlayFabIDsFromBattleNetAccountIdsRequest,
  GetPlayFabIDsFromFacebookIDsRequest,
  GetPlayFabIDsFromFacebookInstantGamesIdsRequest,
  GetPlayFabIDsFromGenericIDsRequest,
  GetPlayFabIDsFromNintendoServiceAccountIdsRequest,
  GetPlayFabIDsFromNintendoSwitchDeviceIdsRequest,
  GetPlayFabIDsFromOpenIdsRequest,
  GetPlayFabIDsFromPSNAccountIDsRequest,
  GetPlayFabIDsFromPSNOnlineIDsRequest,
  GetPlayFabIDsFromSteamIDsRequest,
  GetPlayFabIDsFromSteamNamesRequest,
  GetPlayFabIDsFromTwitchIDsRequest,
  GetPlayFabIDsFromXboxLiveIDsRequest,
  GetPublisherDataRequest,
  GetRandomResultTablesRequest,
  GetServerCustomIDsFromPlayFabIDsRequest,
  GetSharedGroupDataRequest,
  GetStoreItemsServerRequest,
  GetTimeRequest,
  GetTitleDataRequest,
  GetTitleNewsRequest,
  GetUserAccountInfoRequest,
  GetUserBansRequest,
  GetUserDataRequest,
  GetUserInventoryRequest,
  GetUserStatisticsRequest,
  GrantCharacterToUserRequest,
  GrantItemsToCharacterRequest,
  GrantItemsToUserRequest,
  GrantItemsToUsersRequest,
  LinkBattleNetAccountRequest,
  LinkNintendoServiceAccountRequest,
  LinkNintendoServiceAccountSubjectRequest,
  LinkNintendoSwitchDeviceIdRequest,
  LinkPSNAccountRequest,
  LinkPSNIdRequest,
  LinkServerCustomIdRequest,
  LinkSteamIdRequest,
  LinkTwitchAccountRequest,
  LinkXboxAccountRequest,
  LinkXboxIdRequest,
  ListPlayerCustomPropertiesRequest,
  LogEventRequest,
  LoginWithAndroidDeviceIDRequest,
  LoginWithBattleNetRequest,
  LoginWithCustomIDRequest,
  LoginWithIOSDeviceIDRequest,
  LoginWithPSNRequest,
  LoginWithServerCustomIdRequest,
  LoginWithSteamIdRequest,
  LoginWithTwitchRequest,
  LoginWithXboxRequest,
  LoginWithXboxIdRequest,
  ModifyItemUsesRequest,
  MoveItemToCharacterFromCharacterRequest,
  MoveItemToCharacterFromUserRequest,
  MoveItemToUserFromCharacterRequest,
  NotifyMatchmakerPlayerLeftRequest,
  RedeemCouponRequest,
  RedeemMatchmakerTicketRequest,
  RefreshGameServerInstanceHeartbeatRequest,
  RegisterGameRequest,
  RemoveFriendRequest,
  RemoveGenericIDRequest,
  RemovePlayerTagRequest,
  RemoveSharedGroupMembersRequest,
  ReportPlayerServerRequest,
  RevokeAllBansForUserRequest,
  RevokeBansRequest,
  RevokeInventoryItemRequest,
  RevokeInventoryItemsRequest,
  SavePushNotificationTemplateRequest,
  SendCustomAccountRecoveryEmailRequest,
  SendEmailFromTemplateRequest,
  SendPushNotificationRequest,
  SendPushNotificationFromTemplateRequest,
  SetFriendTagsRequest,
  SetGameServerInstanceDataRequest,
  SetGameServerInstanceStateRequest,
  SetGameServerInstanceTagsRequest,
  SetPlayerSecretRequest,
  SetPublisherDataRequest,
  SetTitleDataRequest,
  SubtractCharacterVirtualCurrencyRequest,
  SubtractUserVirtualCurrencyRequest,
  UnlinkBattleNetAccountRequest,
  UnlinkFacebookAccountRequest,
  UnlinkFacebookInstantGamesIdRequest,
  UnlinkNintendoServiceAccountRequest,
  UnlinkNintendoSwitchDeviceIdRequest,
  UnlinkPSNAccountRequest,
  UnlinkServerCustomIdRequest,
  UnlinkSteamIdRequest,
  UnlinkTwitchAccountRequest,
  UnlinkXboxAccountRequest,
  UnlockContainerInstanceRequest,
  UnlockContainerItemRequest,
  UpdateAvatarUrlRequest,
  UpdateBansRequest,
  UpdateCharacterDataRequest,
  UpdateCharacterStatisticsRequest,
  UpdatePlayerCustomPropertiesRequest,
  UpdatePlayerStatisticsRequest,
  UpdateSharedGroupDataRequest,
  UpdateUserDataRequest,
  UpdateUserInternalDataRequest,
  UpdateUserInventoryItemDataRequest,
  UpdateUserStatisticsRequest,
  WriteServerCharacterEventRequest,
  WriteServerPlayerEventRequest,
  WriteTitleEventRequest,
  ModifyCharacterVirtualCurrencyResult,
  EmptyResult,
  AddPlayerTagResult,
  AddSharedGroupMembersResult,
  ModifyUserVirtualCurrencyResult,
  AuthenticateSessionTicketResult,
  AwardSteamAchievementResult,
  BanUsersResult,
  ConsumeItemResult,
  CreateSharedGroupResult,
  DeleteCharacterFromUserResult,
  DeletePlayerResult,
  DeletePlayerCustomPropertiesResult,
  DeletePushNotificationTemplateResult,
  DeleteUsersResult,
  DeregisterGameResponse,
  EvaluateRandomResultTableResult,
  ExecuteCloudScriptResult,
  GetAllActionGroupsResult,
  GetAllSegmentsResult,
  ListUsersCharactersResult,
  GetCatalogItemsResult,
  GetCharacterDataResult,
  GetCharacterInventoryResult,
  GetCharacterLeaderboardResult,
  GetCharacterStatisticsResult,
  GetContentDownloadUrlResult,
  GetLeaderboardResult,
  GetFriendsListResult,
  GetLeaderboardAroundCharacterResult,
  GetLeaderboardAroundUserResult,
  GetLeaderboardForUsersCharactersResult,
  GetPlayerCombinedInfoResult,
  GetPlayerCustomPropertyResult,
  GetPlayerProfileResult,
  GetPlayerSegmentsResult,
  GetPlayersInSegmentResult,
  GetPlayerStatisticsResult,
  GetPlayerStatisticVersionsResult,
  GetPlayerTagsResult,
  GetPlayFabIDsFromBattleNetAccountIdsResult,
  GetPlayFabIDsFromFacebookIDsResult,
  GetPlayFabIDsFromFacebookInstantGamesIdsResult,
  GetPlayFabIDsFromGenericIDsResult,
  GetPlayFabIDsFromNintendoServiceAccountIdsResult,
  GetPlayFabIDsFromNintendoSwitchDeviceIdsResult,
  GetPlayFabIDsFromOpenIdsResult,
  GetPlayFabIDsFromPSNAccountIDsResult,
  GetPlayFabIDsFromPSNOnlineIDsResult,
  GetPlayFabIDsFromSteamIDsResult,
  GetPlayFabIDsFromSteamNamesResult,
  GetPlayFabIDsFromTwitchIDsResult,
  GetPlayFabIDsFromXboxLiveIDsResult,
  GetPublisherDataResult,
  GetRandomResultTablesResult,
  GetServerCustomIDsFromPlayFabIDsResult,
  GetSharedGroupDataResult,
  GetStoreItemsResult,
  GetTimeResult,
  GetTitleDataResult,
  GetTitleNewsResult,
  GetUserAccountInfoResult,
  GetUserBansResult,
  GetUserDataResult,
  GetUserInventoryResult,
  GetUserStatisticsResult,
  GrantCharacterToUserResult,
  GrantItemsToCharacterResult,
  GrantItemsToUserResult,
  GrantItemsToUsersResult,
  LinkNintendoSwitchDeviceIdResult,
  LinkPSNAccountResult,
  LinkPSNIdResponse,
  LinkServerCustomIdResult,
  LinkSteamIdResult,
  LinkXboxAccountResult,
  ListPlayerCustomPropertiesResult,
  LogEventResult,
  ServerLoginResult,
  ModifyItemUsesResult,
  MoveItemToCharacterFromCharacterResult,
  MoveItemToCharacterFromUserResult,
  MoveItemToUserFromCharacterResult,
  NotifyMatchmakerPlayerLeftResult,
  RedeemCouponResult,
  RedeemMatchmakerTicketResult,
  RefreshGameServerInstanceHeartbeatResult,
  RegisterGameResponse,
  RemovePlayerTagResult,
  RemoveSharedGroupMembersResult,
  ReportPlayerServerResult,
  RevokeAllBansForUserResult,
  RevokeBansResult,
  RevokeInventoryResult,
  RevokeInventoryItemsResult,
  SavePushNotificationTemplateResult,
  SendCustomAccountRecoveryEmailResult,
  SendEmailFromTemplateResult,
  SendPushNotificationResult,
  SetGameServerInstanceDataResult,
  SetGameServerInstanceStateResult,
  SetGameServerInstanceTagsResult,
  SetPlayerSecretResult,
  SetPublisherDataResult,
  SetTitleDataResult,
  UnlinkFacebookAccountResult,
  UnlinkFacebookInstantGamesIdResult,
  UnlinkNintendoSwitchDeviceIdResult,
  UnlinkPSNAccountResult,
  UnlinkServerCustomIdResult,
  UnlinkSteamIdResult,
  UnlinkXboxAccountResult,
  UnlockContainerItemResult,
  UpdateBansResult,
  UpdateCharacterDataResult,
  UpdateCharacterStatisticsResult,
  UpdatePlayerCustomPropertiesResult,
  UpdatePlayerStatisticsResult,
  UpdateSharedGroupDataResult,
  UpdateUserDataResult,
  UpdateUserStatisticsResult,
  WriteEventResponse,
} from "../types/PlayFabServerApi";
import { PlayFabCommon } from "../PlayFabCommon";

export default class PlayFabServerApi extends PlayFabCommon {

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Increments the character's balance of the specified virtual currency by the stated amount
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/player-item-management/addcharactervirtualcurrency Microsoft Documentation}
   * @example
   * await serverClient.AddCharacterVirtualCurrency({
   *   "PlayFabId": "20394883",
   *   "CharacterId": "23424524523",
   *   "VirtualCurrency": "GC",
   *   "Amount": 100
   * });
   */
  AddCharacterVirtualCurrency (request: AddCharacterVirtualCurrencyRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ModifyCharacterVirtualCurrencyResult>("/Server/AddCharacterVirtualCurrency", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Adds the Friend user to the friendlist of the user with PlayFabId. At least one of
   * FriendPlayFabId,FriendUsername,FriendEmail, or FriendTitleDisplayName should be initialized.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/friend-list-management/addfriend Microsoft Documentation}
   * @example
   * await serverClient.AddFriend({
   *   "PlayFabId": "10931252888739651331",
   *   "FriendPlayFabId": "20394883"
   * });
   */
  AddFriend (request: AddFriendRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Server/AddFriend", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Adds the specified generic service identifier to the player's PlayFab account. This is designed to allow for a PlayFab
   * ID lookup of any arbitrary service identifier a title wants to add. This identifier should never be used as
   * authentication credentials, as the intent is that it is easily accessible by other players.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/account-management/addgenericid Microsoft Documentation}
   * @example
   * await serverClient.AddGenericID({
   *   "GenericId": {
   *     "ServiceName": "BigBizSocial",
   *     "UserId": "1234567890"
   *   }
   * });
   */
  AddGenericID (request: AddGenericIDRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResult>("/Server/AddGenericID", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Adds a given tag to a player profile. The tag's namespace is automatically generated based on the source of the tag.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/playstream/addplayertag Microsoft Documentation}
   * @example
   * await serverClient.AddPlayerTag({
   *   "PlayFabId": "10931252888739651331",
   *   "TagName": "MostKilled"
   * });
   */
  AddPlayerTag (request: AddPlayerTagRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<AddPlayerTagResult>("/Server/AddPlayerTag", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Adds users to the set of those able to update both the shared data, as well as the set of users in the group. Only users
   * in the group (and the server) can add new members. Shared Groups are designed for sharing data between a very small
   * number of players, please see our guide:
   * https://docs.microsoft.com/gaming/playfab/features/social/groups/using-shared-group-data
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/shared-group-data/addsharedgroupmembers Microsoft Documentation}
   * @example
   * await serverClient.AddSharedGroupMembers({
   *   "SharedGroupId": "Clan Data",
   *   "PlayFabIds": [
   *     "D984A64B832",
   *     "F74A523E1562"
   *   ]
   * });
   */
  AddSharedGroupMembers (request: AddSharedGroupMembersRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<AddSharedGroupMembersResult>("/Server/AddSharedGroupMembers", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Increments the user's balance of the specified virtual currency by the stated amount
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/player-item-management/adduservirtualcurrency Microsoft Documentation}
   * @example
   * await serverClient.AddUserVirtualCurrency({
   *   "PlayFabId": "20394883",
   *   "VirtualCurrency": "GC",
   *   "Amount": 100
   * });
   */
  AddUserVirtualCurrency (request: AddUserVirtualCurrencyRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ModifyUserVirtualCurrencyResult>("/Server/AddUserVirtualCurrency", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Validated a client's session ticket, and if successful, returns details for that user
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/authentication/authenticatesessionticket Microsoft Documentation}
   * @example
   * await serverClient.AuthenticateSessionTicket({
   *   "SessionTicket": "4D2----8D11F4249A80000-7C64AB0A9F1D8D1A.CD803BF233CE76CC"
   * });
   */
  AuthenticateSessionTicket (request: AuthenticateSessionTicketRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<AuthenticateSessionTicketResult>("/Server/AuthenticateSessionTicket", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Awards the specified users the specified Steam achievements
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/platform-specific-methods/awardsteamachievement Microsoft Documentation}
   * @example
   * await serverClient.AwardSteamAchievement({
   *   "Achievements": [
   *     {
   *       "PlayFabId": "234974573892",
   *       "AchievementName": "FinishLevel1",
   *       "Result": false
   *     },
   *     {
   *       "PlayFabId": "334353433",
   *       "AchievementName": "FinishLevel1",
   *       "Result": false
   *     }
   *   ]
   * });
   */
  AwardSteamAchievement (request: AwardSteamAchievementRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<AwardSteamAchievementResult>("/Server/AwardSteamAchievement", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Bans users by PlayFab ID with optional IP address for the provided game.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/account-management/banusers Microsoft Documentation}
   * @example
   * await serverClient.BanUsers({
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
    return this.ExecuteRequestWrapper<BanUsersResult>("/Server/BanUsers", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Consume uses of a consumable item. When all uses are consumed, it will be removed from the player's
   * inventory.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/player-item-management/consumeitem Microsoft Documentation}
   * @example
   * await serverClient.ConsumeItem({
   *   "ItemInstanceId": "94585729",
   *   "ConsumeCount": 1
   * });
   */
  ConsumeItem (request: ConsumeItemRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ConsumeItemResult>("/Server/ConsumeItem", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Requests the creation of a shared group object, containing key/value pairs which may be updated by all members of the
   * group. When created by a server, the group will initially have no members. Shared Groups are designed for sharing data
   * between a very small number of players, please see our guide:
   * https://docs.microsoft.com/gaming/playfab/features/social/groups/using-shared-group-data
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/shared-group-data/createsharedgroup Microsoft Documentation}
   * @example
   * await serverClient.CreateSharedGroup({
   *   "SharedGroupId": "Clan Data"
   * });
   */
  CreateSharedGroup (request: CreateSharedGroupRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateSharedGroupResult>("/Server/CreateSharedGroup", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Deletes the specific character ID from the specified user.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/characters/deletecharacterfromuser Microsoft Documentation}
   * @example
   * await serverClient.DeleteCharacterFromUser({
   *   "PlayFabId": "12345",
   *   "CharacterId": "98765432",
   *   "SaveCharacterInventory": false
   * });
   */
  DeleteCharacterFromUser (request: DeleteCharacterFromUserRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeleteCharacterFromUserResult>("/Server/DeleteCharacterFromUser", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Removes a user's player account from a title and deletes all associated data
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/account-management/deleteplayer Microsoft Documentation}
   * @example
   * await serverClient.DeletePlayer({
   *   "PlayFabId": "A68C908B66C23C5"
   * });
   */
  DeletePlayer (request: DeletePlayerRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeletePlayerResult>("/Server/DeletePlayer", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Deletes title-specific custom properties for a player
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/player-data-management/deleteplayercustomproperties Microsoft Documentation}
   * @example
   * await serverClient.DeletePlayerCustomProperties({
   *   "PlayFabId": "2039475",
   *   "PropertyNames": [
   *     "level",
   *     "created"
   *   ],
   *   "ExpectedPropertiesVersion": 12
   * });
   */
  DeletePlayerCustomProperties (request: DeletePlayerCustomPropertiesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeletePlayerCustomPropertiesResult>("/Server/DeletePlayerCustomProperties", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Deletes push notification template for title
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/account-management/deletepushnotificationtemplate Microsoft Documentation}
   * @example
   * await serverClient.DeletePushNotificationTemplate({
   *   "PushNotificationTemplateId": "6bc7dbf0-075a-46e9-8e84-35737a22c6a4"
   * });
   */
  DeletePushNotificationTemplate (request: DeletePushNotificationTemplateRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeletePushNotificationTemplateResult>("/Server/DeletePushNotificationTemplate", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Deletes a shared group, freeing up the shared group ID to be reused for a new group. Shared Groups are designed for
   * sharing data between a very small number of players, please see our guide:
   * https://docs.microsoft.com/gaming/playfab/features/social/groups/using-shared-group-data
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/shared-group-data/deletesharedgroup Microsoft Documentation}
   * @example
   * await serverClient.DeleteSharedGroup({
   *   "SharedGroupId": "Clan Data"
   * });
   */
  DeleteSharedGroup (request: DeleteSharedGroupRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Server/DeleteSharedGroup", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Deletes custom data, all account linkages, and statistics.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/player-data-management/deleteusers Microsoft Documentation}
   * @deprecated Please use DeletePlayer instead.
   */
  DeleteUsers (request: DeleteUsersRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeleteUsersResult>("/Server/DeleteUsers", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Inform the matchmaker that a Game Server Instance is removed.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/matchmaking/deregistergame Microsoft Documentation}
   * @deprecated Do not use
   */
  DeregisterGame (request: DeregisterGameRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeregisterGameResponse>("/Server/DeregisterGame", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Returns the result of an evaluation of a Random Result Table - the ItemId from the game Catalog which would
   * have been added to the player inventory, if the Random Result Table were added via a Bundle or a call to
   * UnlockContainer.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/player-item-management/evaluaterandomresulttable Microsoft Documentation}
   * @example
   * await serverClient.EvaluateRandomResultTable({
   *   "TableId": "RareElementCard",
   *   "CatalogVersion": "1"
   * });
   */
  EvaluateRandomResultTable (request: EvaluateRandomResultTableRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EvaluateRandomResultTableResult>("/Server/EvaluateRandomResultTable", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Executes a CloudScript function, with the 'currentPlayerId' set to the PlayFab ID of the authenticated player. The
   * PlayFab ID is the entity ID of the player's master_player_account entity.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/server-side-cloud-script/executecloudscript Microsoft Documentation}
   * @example
   * await serverClient.ExecuteCloudScript({
   *   "PlayFabId": "1337D00D",
   *   "FunctionName": "levelCompleted",
   *   "FunctionParameter": {
   *     "level": 3,
   *     "points": 400
   *   },
   *   "RevisionSelection": "Live",
   *   "GeneratePlayStreamEvent": true
   * });
   */
  ExecuteCloudScript (request: ExecuteCloudScriptServerRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ExecuteCloudScriptResult>("/Server/ExecuteCloudScript", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieve a list of all PlayStream actions groups.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/playstream/getallactiongroups Microsoft Documentation}
   * @deprecated Please use GetAllSegments instead.
   */
  GetAllActionGroups (request: GetAllActionGroupsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetAllActionGroupsResult>("/Server/GetAllActionGroups", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves an array of player segment definitions. Results from this can be used in subsequent API calls such as
   * GetPlayersInSegment which requires a Segment ID. While segment names can change the ID for that segment will not change.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/playstream/getallsegments Microsoft Documentation}
   * @example
   * await serverClient.GetAllSegments({});
   */
  GetAllSegments (request: GetAllSegmentsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetAllSegmentsResult>("/Server/GetAllSegments", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Lists all of the characters that belong to a specific user. CharacterIds are not globally unique; characterId must be
   * evaluated with the parent PlayFabId to guarantee uniqueness.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/characters/getalluserscharacters Microsoft Documentation}
   * @example
   * await serverClient.GetAllUsersCharacters({
   *   "PlayFabId": "98333765432"
   * });
   */
  GetAllUsersCharacters (request: ListUsersCharactersRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListUsersCharactersResult>("/Server/GetAllUsersCharacters", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Retrieves the specified version of the title's catalog of virtual goods, including all defined properties
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/title-wide-data-management/getcatalogitems Microsoft Documentation}
   * @example
   * await serverClient.GetCatalogItems({
   *   "CatalogVersion": "1"
   * });
   */
  GetCatalogItems (request: GetCatalogItemsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetCatalogItemsResult>("/Server/GetCatalogItems", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the title-specific custom data for the user which is readable and writable by the client
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/character-data/getcharacterdata Microsoft Documentation}
   * @example
   * await serverClient.GetCharacterData({
   *   "PlayFabId": "2039475",
   *   "CharacterId": "98342357",
   *   "Keys": [
   *     "preferences",
   *     "progress"
   *   ],
   *   "IfChangedFromDataVersion": 1
   * });
   */
  GetCharacterData (request: GetCharacterDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetCharacterDataResult>("/Server/GetCharacterData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the title-specific custom data for the user's character which cannot be accessed by the client
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/character-data/getcharacterinternaldata Microsoft Documentation}
   * @example
   * await serverClient.GetCharacterInternalData({
   *   "PlayFabId": "2039475",
   *   "CharacterId": "98342357",
   *   "Keys": [
   *     "preferences",
   *     "progress"
   *   ],
   *   "IfChangedFromDataVersion": 1
   * });
   */
  GetCharacterInternalData (request: GetCharacterDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetCharacterDataResult>("/Server/GetCharacterInternalData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Retrieves the specified character's current inventory of virtual goods
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/player-item-management/getcharacterinventory Microsoft Documentation}
   * @example
   * await serverClient.GetCharacterInventory({
   *   "PlayFabId": "204883457",
   *   "CharacterId": "9890723423",
   *   "CatalogVersion": "5"
   * });
   */
  GetCharacterInventory (request: GetCharacterInventoryRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetCharacterInventoryResult>("/Server/GetCharacterInventory", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves a list of ranked characters for the given statistic, starting from the indicated point in the leaderboard
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/characters/getcharacterleaderboard Microsoft Documentation}
   * @example
   * await serverClient.GetCharacterLeaderboard({
   *   "StatisticName": "Kills",
   *   "StartPosition": 0,
   *   "MaxResultsCount": 20
   * });
   */
  GetCharacterLeaderboard (request: GetCharacterLeaderboardRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetCharacterLeaderboardResult>("/Server/GetCharacterLeaderboard", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the title-specific custom data for the user's character which can only be read by the client
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/character-data/getcharacterreadonlydata Microsoft Documentation}
   * @example
   * await serverClient.GetCharacterReadOnlyData({
   *   "PlayFabId": "2039475",
   *   "CharacterId": "98342357",
   *   "Keys": [
   *     "preferences",
   *     "progress"
   *   ],
   *   "IfChangedFromDataVersion": 1
   * });
   */
  GetCharacterReadOnlyData (request: GetCharacterDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetCharacterDataResult>("/Server/GetCharacterReadOnlyData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the details of all title-specific statistics for the specific character
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/characters/getcharacterstatistics Microsoft Documentation}
   * @example
   * await serverClient.GetCharacterStatistics({
   *   "PlayFabId": "10931252888739651331",
   *   "CharacterId": "98765432"
   * });
   */
  GetCharacterStatistics (request: GetCharacterStatisticsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetCharacterStatisticsResult>("/Server/GetCharacterStatistics", request, "X-SecretKey", extraHeaders);
  }

  /**
   * This API retrieves a pre-signed URL for accessing a content file for the title. A subsequent HTTP GET to the returned
   * URL will attempt to download the content. A HEAD query to the returned URL will attempt to retrieve the metadata of the
   * content. Note that a successful result does not guarantee the existence of this content - if it has not been uploaded,
   * the query to retrieve the data will fail. See this post for more information:
   * https://community.playfab.com/hc/community/posts/205469488-How-to-upload-files-to-PlayFab-s-Content-Service. Also,
   * please be aware that the Content service is specifically PlayFab's CDN offering, for which standard CDN rates apply.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/content/getcontentdownloadurl Microsoft Documentation}
   * @example
   * await serverClient.GetContentDownloadUrl({
   *   "Key": "images/sword_icon.png"
   * });
   */
  GetContentDownloadUrl (request: GetContentDownloadUrlRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetContentDownloadUrlResult>("/Server/GetContentDownloadUrl", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves a list of ranked friends of the given player for the given statistic, starting from the indicated point in the
   * leaderboard
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/player-data-management/getfriendleaderboard Microsoft Documentation}
   * @example
   * await serverClient.GetFriendLeaderboard({
   *   "PlayFabId": "98092347523",
   *   "StatisticName": "Kills",
   *   "StartPosition": 1258,
   *   "MaxResultsCount": 20,
   *   "ExternalPlatformFriends": "None"
   * });
   */
  GetFriendLeaderboard (request: GetFriendLeaderboardRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetLeaderboardResult>("/Server/GetFriendLeaderboard", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the current friends for the user with PlayFabId, constrained to users who have PlayFab accounts. Friends from
   * linked accounts (Facebook, Steam) are also included. You may optionally exclude some linked services' friends.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/friend-list-management/getfriendslist Microsoft Documentation}
   * @example
   * await serverClient.GetFriendsList({
   *   "PlayFabId": "93798903892789754",
   *   "ExternalPlatformFriends": "All"
   * });
   */
  GetFriendsList (request: GetFriendsListRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetFriendsListResult>("/Server/GetFriendsList", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves a list of ranked users for the given statistic, starting from the indicated point in the leaderboard
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/player-data-management/getleaderboard Microsoft Documentation}
   * @example
   * await serverClient.GetLeaderboard({
   *   "StatisticName": "Kills",
   *   "StartPosition": 0,
   *   "MaxResultsCount": 20
   * });
   */
  GetLeaderboard (request: GetLeaderboardRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetLeaderboardResult>("/Server/GetLeaderboard", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves a list of ranked characters for the given statistic, centered on the requested user
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/characters/getleaderboardaroundcharacter Microsoft Documentation}
   * @example
   * await serverClient.GetLeaderboardAroundCharacter({
   *   "StatisticName": "Kills",
   *   "PlayFabId": "10931252888739651331",
   *   "CharacterId": "987343220",
   *   "MaxResultsCount": 20
   * });
   */
  GetLeaderboardAroundCharacter (request: GetLeaderboardAroundCharacterRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetLeaderboardAroundCharacterResult>("/Server/GetLeaderboardAroundCharacter", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves a list of ranked users for the given statistic, centered on the currently signed-in user
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/player-data-management/getleaderboardarounduser Microsoft Documentation}
   * @example
   * await serverClient.GetLeaderboardAroundUser({
   *   "StatisticName": "Kills",
   *   "PlayFabId": "10931252888739651331",
   *   "MaxResultsCount": 20
   * });
   */
  GetLeaderboardAroundUser (request: GetLeaderboardAroundUserRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetLeaderboardAroundUserResult>("/Server/GetLeaderboardAroundUser", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves a list of all of the user's characters for the given statistic.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/characters/getleaderboardforusercharacters Microsoft Documentation}
   * @example
   * await serverClient.GetLeaderboardForUserCharacters({
   *   "StatisticName": "Kills",
   *   "PlayFabId": "10931252888739651331"
   * });
   */
  GetLeaderboardForUserCharacters (request: GetLeaderboardForUsersCharactersRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetLeaderboardForUsersCharactersResult>("/Server/GetLeaderboardForUserCharacters", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Returns whatever info is requested in the response for the user. Note that PII (like email address, facebook id) may be
   * returned. All parameters default to false.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/player-data-management/getplayercombinedinfo Microsoft Documentation}
   * @example
   * await serverClient.GetPlayerCombinedInfo({
   *   "PlayFabId": "4027527BF22653D1",
   *   "InfoRequestParameters": {
   *     "GetUserAccountInfo": true,
   *     "GetUserInventory": false,
   *     "GetUserVirtualCurrency": true,
   *     "GetUserData": true,
   *     "UserDataKeys": [
   *       "preferences",
   *       "progress"
   *     ],
   *     "GetUserReadOnlyData": false,
   *     "GetCharacterInventories": false,
   *     "GetCharacterList": false,
   *     "GetTitleData": false,
   *     "GetPlayerStatistics": false,
   *     "GetPlayerProfile": false,
   *     "GetEntityLineage": false
   *   }
   * });
   */
  GetPlayerCombinedInfo (request: GetPlayerCombinedInfoRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayerCombinedInfoResult>("/Server/GetPlayerCombinedInfo", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves a title-specific custom property value for a player.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/player-data-management/getplayercustomproperty Microsoft Documentation}
   * @example
   * await serverClient.GetPlayerCustomProperty({
   *   "PlayFabId": "2039475",
   *   "PropertyName": "level"
   * });
   */
  GetPlayerCustomProperty (request: GetPlayerCustomPropertyRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayerCustomPropertyResult>("/Server/GetPlayerCustomProperty", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the player's profile
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/account-management/getplayerprofile Microsoft Documentation}
   * @example
   * await serverClient.GetPlayerProfile({
   *   "PlayFabId": "621EF20237534A44"
   * });
   */
  GetPlayerProfile (request: GetPlayerProfileRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayerProfileResult>("/Server/GetPlayerProfile", request, "X-SecretKey", extraHeaders);
  }

  /**
   * List all segments that a player currently belongs to at this moment in time.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/playstream/getplayersegments Microsoft Documentation}
   * @example
   * await serverClient.GetPlayerSegments({
   *   "PlayFabId": "1337AA00"
   * });
   */
  GetPlayerSegments (request: GetPlayersSegmentsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayerSegmentsResult>("/Server/GetPlayerSegments", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Allows for paging through all players in a given segment. This API creates a snapshot of all player profiles that match
   * the segment definition at the time of its creation and lives through the Total Seconds to Live, refreshing its life span
   * on each subsequent use of the Continuation Token. Profiles that change during the course of paging will not be reflected
   * in the results. AB Test segments are currently not supported by this operation. NOTE: This API is limited to being
   * called 30 times in one minute. You will be returned an error if you exceed this threshold.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/playstream/getplayersinsegment Microsoft Documentation}
   * @deprecated Do not use
   */
  GetPlayersInSegment (request: GetPlayersInSegmentRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayersInSegmentResult>("/Server/GetPlayersInSegment", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the current version and values for the indicated statistics, for the local player.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/player-data-management/getplayerstatistics Microsoft Documentation}
   * @example
   * await serverClient.GetPlayerStatistics({
   *   "PlayFabId": "621EF2023753444",
   *   "StatisticNames": [
   *     "Points",
   *     "Wins"
   *   ]
   * });
   */
  GetPlayerStatistics (request: GetPlayerStatisticsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayerStatisticsResult>("/Server/GetPlayerStatistics", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the information on the available versions of the specified statistic.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/player-data-management/getplayerstatisticversions Microsoft Documentation}
   * @example
   * await serverClient.GetPlayerStatisticVersions({
   *   "StatisticName": "headshots"
   * });
   */
  GetPlayerStatisticVersions (request: GetPlayerStatisticVersionsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayerStatisticVersionsResult>("/Server/GetPlayerStatisticVersions", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Get all tags with a given Namespace (optional) from a player profile.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/playstream/getplayertags Microsoft Documentation}
   * @example
   * await serverClient.GetPlayerTags({
   *   "PlayFabId": "10931252888739651331",
   *   "Namespace": "title.AAA"
   * });
   */
  GetPlayerTags (request: GetPlayerTagsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayerTagsResult>("/Server/GetPlayerTags", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the unique PlayFab identifiers for the given set of Battle.net account identifiers.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/account-management/getplayfabidsfrombattlenetaccountids Microsoft Documentation}
   * @example
   * await serverClient.GetPlayFabIDsFromBattleNetAccountIds({
   *   "BattleNetAccountIds": [
   *     "526f79204261747478",
   *     "526f79204261747479"
   *   ]
   * });
   */
  GetPlayFabIDsFromBattleNetAccountIds (request: GetPlayFabIDsFromBattleNetAccountIdsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayFabIDsFromBattleNetAccountIdsResult>("/Server/GetPlayFabIDsFromBattleNetAccountIds", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the unique PlayFab identifiers for the given set of Facebook identifiers.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/account-management/getplayfabidsfromfacebookids Microsoft Documentation}
   * @example
   * await serverClient.GetPlayFabIDsFromFacebookIDs({
   *   "FacebookIDs": [
   *     "857498576495",
   *     "759374651209"
   *   ]
   * });
   */
  GetPlayFabIDsFromFacebookIDs (request: GetPlayFabIDsFromFacebookIDsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayFabIDsFromFacebookIDsResult>("/Server/GetPlayFabIDsFromFacebookIDs", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the unique PlayFab identifiers for the given set of Facebook Instant Games identifiers.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/account-management/getplayfabidsfromfacebookinstantgamesids Microsoft Documentation}
   * @example
   * await serverClient.GetPlayFabIDsFromFacebookInstantGamesIds({
   *   "FacebookInstantGamesIds": [
   *     "1114685845316172",
   *     "1114685845316173"
   *   ]
   * });
   */
  GetPlayFabIDsFromFacebookInstantGamesIds (request: GetPlayFabIDsFromFacebookInstantGamesIdsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayFabIDsFromFacebookInstantGamesIdsResult>("/Server/GetPlayFabIDsFromFacebookInstantGamesIds", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the unique PlayFab identifiers for the given set of generic service identifiers. A generic identifier is the
   * service name plus the service-specific ID for the player, as specified by the title when the generic identifier was
   * added to the player account.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/account-management/getplayfabidsfromgenericids Microsoft Documentation}
   * @example
   * await serverClient.GetPlayFabIDsFromGenericIDs({
   *   "GenericIDs": [
   *     {
   *       "ServiceName": "BigBizSocial",
   *       "UserId": "1234567890"
   *     },
   *     {
   *       "ServiceName": "VeeCeeMe",
   *       "UserId": "og5igh85gf43gf"
   *     }
   *   ]
   * });
   */
  GetPlayFabIDsFromGenericIDs (request: GetPlayFabIDsFromGenericIDsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayFabIDsFromGenericIDsResult>("/Server/GetPlayFabIDsFromGenericIDs", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the unique PlayFab identifiers for the given set of Nintendo Service Account identifiers.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/account-management/getplayfabidsfromnintendoserviceaccountids Microsoft Documentation}
   * @example
   * await serverClient.GetPlayFabIDsFromNintendoServiceAccountIds({
   *   "NintendoAccountIds": [
   *     "526f79204261747478",
   *     "526f79204261747479"
   *   ]
   * });
   */
  GetPlayFabIDsFromNintendoServiceAccountIds (request: GetPlayFabIDsFromNintendoServiceAccountIdsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayFabIDsFromNintendoServiceAccountIdsResult>("/Server/GetPlayFabIDsFromNintendoServiceAccountIds", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the unique PlayFab identifiers for the given set of Nintendo Switch Device identifiers.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/account-management/getplayfabidsfromnintendoswitchdeviceids Microsoft Documentation}
   * @example
   * await serverClient.GetPlayFabIDsFromNintendoSwitchDeviceIds({
   *   "NintendoSwitchDeviceIds": [
   *     "526f79204261747478",
   *     "526f79204261747479"
   *   ]
   * });
   */
  GetPlayFabIDsFromNintendoSwitchDeviceIds (request: GetPlayFabIDsFromNintendoSwitchDeviceIdsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayFabIDsFromNintendoSwitchDeviceIdsResult>("/Server/GetPlayFabIDsFromNintendoSwitchDeviceIds", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the unique PlayFab identifiers for the given set of OpenId subject identifiers. A OpenId subject identifier is
   * the OpenId issuer plus the OpenId subject for the player, as specified by the title when the OpenId identifier was added
   * to the player account.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/account-management/getplayfabidsfromopenidsubjectidentifiers Microsoft Documentation}
   * @example
   * await serverClient.GetPlayFabIDsFromOpenIdSubjectIdentifiers({
   *   "OpenIdSubjectIdentifiers": [
   *     {
   *       "Issuer": "https://example.com",
   *       "Subject": "123456789012345678"
   *     },
   *     {
   *       "Issuer": "https://example-2.com",
   *       "Subject": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee"
   *     }
   *   ]
   * });
   */
  GetPlayFabIDsFromOpenIdSubjectIdentifiers (request: GetPlayFabIDsFromOpenIdsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayFabIDsFromOpenIdsResult>("/Server/GetPlayFabIDsFromOpenIdSubjectIdentifiers", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the unique PlayFab identifiers for the given set of PlayStation :tm: Network identifiers.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/account-management/getplayfabidsfrompsnaccountids Microsoft Documentation}
   * @example
   * await serverClient.GetPlayFabIDsFromPSNAccountIDs({
   *   "PSNAccountIDs": [
   *     "857498576495",
   *     "759374651209"
   *   ]
   * });
   */
  GetPlayFabIDsFromPSNAccountIDs (request: GetPlayFabIDsFromPSNAccountIDsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayFabIDsFromPSNAccountIDsResult>("/Server/GetPlayFabIDsFromPSNAccountIDs", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the unique PlayFab identifiers for the given set of PlayStation :tm: Network identifiers.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/account-management/getplayfabidsfrompsnonlineids Microsoft Documentation}
   * @example
   * await serverClient.GetPlayFabIDsFromPSNOnlineIDs({
   *   "PSNOnlineIDs": [
   *     "857555576495",
   *     "759345551209"
   *   ]
   * });
   */
  GetPlayFabIDsFromPSNOnlineIDs (request: GetPlayFabIDsFromPSNOnlineIDsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayFabIDsFromPSNOnlineIDsResult>("/Server/GetPlayFabIDsFromPSNOnlineIDs", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the unique PlayFab identifiers for the given set of Steam identifiers. The Steam identifiers are the profile
   * IDs for the user accounts, available as SteamId in the Steamworks Community API calls.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/account-management/getplayfabidsfromsteamids Microsoft Documentation}
   * @example
   * await serverClient.GetPlayFabIDsFromSteamIDs({
   *   "SteamStringIDs": [
   *     "857498576495",
   *     "759374651209"
   *   ]
   * });
   */
  GetPlayFabIDsFromSteamIDs (request: GetPlayFabIDsFromSteamIDsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayFabIDsFromSteamIDsResult>("/Server/GetPlayFabIDsFromSteamIDs", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the unique PlayFab identifiers for the given set of Steam identifiers. The Steam identifiers are persona
   * names.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/account-management/getplayfabidsfromsteamnames Microsoft Documentation}
   * @example
   * await serverClient.GetPlayFabIDsFromSteamNames({
   *   "SteamNames": [
   *     "steamPersonaName1",
   *     "steamPersonaName2"
   *   ]
   * });
   */
  GetPlayFabIDsFromSteamNames (request: GetPlayFabIDsFromSteamNamesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayFabIDsFromSteamNamesResult>("/Server/GetPlayFabIDsFromSteamNames", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the unique PlayFab identifiers for the given set of Twitch identifiers. The Twitch identifiers are the IDs for
   * the user accounts, available as "_id" from the Twitch API methods (ex:
   * https://github.com/justintv/Twitch-API/blob/master/v3_resources/users.md#get-usersuser).
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/account-management/getplayfabidsfromtwitchids Microsoft Documentation}
   * @example
   * await serverClient.GetPlayFabIDsFromTwitchIDs({
   *   "TwitchIds": [
   *     "127168541",
   *     "88315720"
   *   ]
   * });
   */
  GetPlayFabIDsFromTwitchIDs (request: GetPlayFabIDsFromTwitchIDsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayFabIDsFromTwitchIDsResult>("/Server/GetPlayFabIDsFromTwitchIDs", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the unique PlayFab identifiers for the given set of XboxLive identifiers.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/account-management/getplayfabidsfromxboxliveids Microsoft Documentation}
   * @example
   * await serverClient.GetPlayFabIDsFromXboxLiveIDs({
   *   "XboxLiveAccountIDs": [
   *     "857498576495",
   *     "759374651209"
   *   ],
   *   "Sandbox": "RETAIL"
   * });
   */
  GetPlayFabIDsFromXboxLiveIDs (request: GetPlayFabIDsFromXboxLiveIDsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayFabIDsFromXboxLiveIDsResult>("/Server/GetPlayFabIDsFromXboxLiveIDs", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the key-value store of custom publisher settings
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/title-wide-data-management/getpublisherdata Microsoft Documentation}
   * @example
   * await serverClient.GetPublisherData({
   *   "Keys": [
   *     "color",
   *     "propertyA"
   *   ]
   * });
   */
  GetPublisherData (request: GetPublisherDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPublisherDataResult>("/Server/GetPublisherData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Retrieves the configuration information for the specified random results tables for the title, including all
   * ItemId values and weights
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/player-item-management/getrandomresulttables Microsoft Documentation}
   * @example
   * await serverClient.GetRandomResultTables({
   *   "CatalogVersion": "1",
   *   "TableIDs": [
   *     "CommonElementCard",
   *     "UncommonElementCard",
   *     "RareElementCard"
   *   ]
   * });
   */
  GetRandomResultTables (request: GetRandomResultTablesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetRandomResultTablesResult>("/Server/GetRandomResultTables", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the associated PlayFab account identifiers for the given set of server custom identifiers.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/account-management/getservercustomidsfromplayfabids Microsoft Documentation}
   * @example
   * await serverClient.GetServerCustomIDsFromPlayFabIDs({
   *   "PlayFabIDs": [
   *     "1232421311"
   *   ]
   * });
   */
  GetServerCustomIDsFromPlayFabIDs (request: GetServerCustomIDsFromPlayFabIDsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetServerCustomIDsFromPlayFabIDsResult>("/Server/GetServerCustomIDsFromPlayFabIDs", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves data stored in a shared group object, as well as the list of members in the group. The server can access all
   * public and private group data. Shared Groups are designed for sharing data between a very small number of players,
   * please see our guide: https://docs.microsoft.com/gaming/playfab/features/social/groups/using-shared-group-data
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/shared-group-data/getsharedgroupdata Microsoft Documentation}
   * @example
   * await serverClient.GetSharedGroupData({
   *   "SharedGroupId": "Clan Data",
   *   "Keys": [
   *     "ClanKills",
   *     "LastClanUpdate"
   *   ],
   *   "GetMembers": true
   * });
   */
  GetSharedGroupData (request: GetSharedGroupDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetSharedGroupDataResult>("/Server/GetSharedGroupData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Retrieves the set of items defined for the specified store, including all prices defined, for the specified
   * player
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/title-wide-data-management/getstoreitems Microsoft Documentation}
   * @example
   * await serverClient.GetStoreItems({
   *   "StoreId": "BonusStore",
   *   "PlayFabId": "20394883"
   * });
   */
  GetStoreItems (request: GetStoreItemsServerRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetStoreItemsResult>("/Server/GetStoreItems", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the current server time
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/title-wide-data-management/gettime Microsoft Documentation}
   * @example
   * await serverClient.GetTime({});
   */
  GetTime (request: GetTimeRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetTimeResult>("/Server/GetTime", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the key-value store of custom title settings
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/title-wide-data-management/gettitledata Microsoft Documentation}
   * @example
   * await serverClient.GetTitleData({
   *   "Keys": [
   *     "color",
   *     "propertyA"
   *   ]
   * });
   */
  GetTitleData (request: GetTitleDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetTitleDataResult>("/Server/GetTitleData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the key-value store of custom internal title settings
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/title-wide-data-management/gettitleinternaldata Microsoft Documentation}
   * @example
   * await serverClient.GetTitleInternalData({
   *   "Keys": [
   *     "color",
   *     "propertyA"
   *   ]
   * });
   */
  GetTitleInternalData (request: GetTitleDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetTitleDataResult>("/Server/GetTitleInternalData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the title news feed, as configured in the developer portal
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/title-wide-data-management/gettitlenews Microsoft Documentation}
   * @example
   * await serverClient.GetTitleNews({
   *   "Count": 25
   * });
   */
  GetTitleNews (request: GetTitleNewsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetTitleNewsResult>("/Server/GetTitleNews", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the relevant details for a specified user
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/account-management/getuseraccountinfo Microsoft Documentation}
   * @example
   * await serverClient.GetUserAccountInfo({
   *   "PlayFabId": "10931252888739651331"
   * });
   */
  GetUserAccountInfo (request: GetUserAccountInfoRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetUserAccountInfoResult>("/Server/GetUserAccountInfo", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Gets all bans for a user.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/account-management/getuserbans Microsoft Documentation}
   * @example
   * await serverClient.GetUserBans({
   *   "PlayFabId": "1679AF5CD04BD838"
   * });
   */
  GetUserBans (request: GetUserBansRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetUserBansResult>("/Server/GetUserBans", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the title-specific custom data for the user which is readable and writable by the client
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/player-data-management/getuserdata Microsoft Documentation}
   * @example
   * await serverClient.GetUserData({
   *   "PlayFabId": "2039475",
   *   "Keys": [
   *     "preferences",
   *     "progress"
   *   ],
   *   "IfChangedFromDataVersion": 13
   * });
   */
  GetUserData (request: GetUserDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetUserDataResult>("/Server/GetUserData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the title-specific custom data for the user which cannot be accessed by the client
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/player-data-management/getuserinternaldata Microsoft Documentation}
   * @example
   * await serverClient.GetUserInternalData({
   *   "PlayFabId": "2039475",
   *   "Keys": [
   *     "preferences",
   *     "progress"
   *   ],
   *   "IfChangedFromDataVersion": 13
   * });
   */
  GetUserInternalData (request: GetUserDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetUserDataResult>("/Server/GetUserInternalData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Retrieves the specified user's current inventory of virtual goods
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/player-item-management/getuserinventory Microsoft Documentation}
   * @example
   * await serverClient.GetUserInventory({
   *   "PlayFabId": "204883457"
   * });
   */
  GetUserInventory (request: GetUserInventoryRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetUserInventoryResult>("/Server/GetUserInventory", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the publisher-specific custom data for the user which is readable and writable by the client
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/player-data-management/getuserpublisherdata Microsoft Documentation}
   * @example
   * await serverClient.GetUserPublisherData({
   *   "PlayFabId": "2039475",
   *   "Keys": [
   *     "preferences",
   *     "progress"
   *   ],
   *   "IfChangedFromDataVersion": 13
   * });
   */
  GetUserPublisherData (request: GetUserDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetUserDataResult>("/Server/GetUserPublisherData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the publisher-specific custom data for the user which cannot be accessed by the client
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/player-data-management/getuserpublisherinternaldata Microsoft Documentation}
   * @example
   * await serverClient.GetUserPublisherInternalData({
   *   "PlayFabId": "2039475",
   *   "Keys": [
   *     "preferences",
   *     "progress"
   *   ],
   *   "IfChangedFromDataVersion": 13
   * });
   */
  GetUserPublisherInternalData (request: GetUserDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetUserDataResult>("/Server/GetUserPublisherInternalData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the publisher-specific custom data for the user which can only be read by the client
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/player-data-management/getuserpublisherreadonlydata Microsoft Documentation}
   * @example
   * await serverClient.GetUserPublisherReadOnlyData({
   *   "PlayFabId": "2039475",
   *   "Keys": [
   *     "preferences",
   *     "progress"
   *   ],
   *   "IfChangedFromDataVersion": 13
   * });
   */
  GetUserPublisherReadOnlyData (request: GetUserDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetUserDataResult>("/Server/GetUserPublisherReadOnlyData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the title-specific custom data for the user which can only be read by the client
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/player-data-management/getuserreadonlydata Microsoft Documentation}
   * @example
   * await serverClient.GetUserReadOnlyData({
   *   "PlayFabId": "2039475",
   *   "Keys": [
   *     "preferences",
   *     "progress"
   *   ],
   *   "IfChangedFromDataVersion": 13
   * });
   */
  GetUserReadOnlyData (request: GetUserDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetUserDataResult>("/Server/GetUserReadOnlyData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the details of all title-specific statistics for the user
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/player-data-management/getuserstatistics Microsoft Documentation}
   * @deprecated Please use GetPlayerStatistics instead.
   */
  GetUserStatistics (request: GetUserStatisticsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetUserStatisticsResult>("/Server/GetUserStatistics", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Grants the specified character type to the user. CharacterIds are not globally unique; characterId must be evaluated
   * with the parent PlayFabId to guarantee uniqueness.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/characters/grantcharactertouser Microsoft Documentation}
   * @example
   * await serverClient.GrantCharacterToUser({
   *   "PlayFabId": "20394883567",
   *   "CharacterName": "FighterDude",
   *   "CharacterType": "Blue Warrior"
   * });
   */
  GrantCharacterToUser (request: GrantCharacterToUserRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GrantCharacterToUserResult>("/Server/GrantCharacterToUser", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Adds the specified items to the specified character's inventory
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/player-item-management/grantitemstocharacter Microsoft Documentation}
   * @example
   * await serverClient.GrantItemsToCharacter({
   *   "CharacterId": "9876543268",
   *   "PlayFabId": "20394883",
   *   "Annotation": "Entered Level 2",
   *   "ItemIds": [
   *     "shield_level_5",
   *     "shield_level_6"
   *   ]
   * });
   */
  GrantItemsToCharacter (request: GrantItemsToCharacterRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GrantItemsToCharacterResult>("/Server/GrantItemsToCharacter", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Adds the specified items to the specified user's inventory
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/player-item-management/grantitemstouser Microsoft Documentation}
   * @example
   * await serverClient.GrantItemsToUser({
   *   "PlayFabId": "20394883",
   *   "Annotation": "Entered Level 2",
   *   "ItemIds": [
   *     "shield_level_3",
   *     "shield_level_4"
   *   ]
   * });
   */
  GrantItemsToUser (request: GrantItemsToUserRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GrantItemsToUserResult>("/Server/GrantItemsToUser", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Adds the specified items to the specified user inventories
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/player-item-management/grantitemstousers Microsoft Documentation}
   * @example
   * await serverClient.GrantItemsToUsers({
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
    return this.ExecuteRequestWrapper<GrantItemsToUsersResult>("/Server/GrantItemsToUsers", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Links the Battle.net account associated with the token to the user's PlayFab account.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/account-management/linkbattlenetaccount Microsoft Documentation}
   * @example
   * await serverClient.LinkBattleNetAccount({
   *   "PlayFabId": "1234FA342",
   *   "IdentityToken": "eyJraWQi..."
   * });
   */
  LinkBattleNetAccount (request: LinkBattleNetAccountRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResult>("/Server/LinkBattleNetAccount", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Links the Nintendo account associated with the token to the user's PlayFab account
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/account-management/linknintendoserviceaccount Microsoft Documentation}
   * @example
   * await serverClient.LinkNintendoServiceAccount({
   *   "PlayFabId": "1234FA342",
   *   "IdentityToken": "eyJraWQi..."
   * });
   */
  LinkNintendoServiceAccount (request: LinkNintendoServiceAccountRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResult>("/Server/LinkNintendoServiceAccount", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Links the Nintendo account associated with the Nintendo Service Account subject or id to the user's PlayFab account
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/account-management/linknintendoserviceaccountsubject Microsoft Documentation}
   * @example
   * await serverClient.LinkNintendoServiceAccountSubject({
   *   "PlayFabId": "1234FA342",
   *   "Subject": "8e7Eju4j9"
   * });
   */
  LinkNintendoServiceAccountSubject (request: LinkNintendoServiceAccountSubjectRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResult>("/Server/LinkNintendoServiceAccountSubject", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Links the NintendoSwitchDeviceId to the user's PlayFab account
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/account-management/linknintendoswitchdeviceid Microsoft Documentation}
   * @example
   * await serverClient.LinkNintendoSwitchDeviceId({
   *   "PlayFabId": "1234FA342",
   *   "NintendoSwitchDeviceId": "526f79204261747479"
   * });
   */
  LinkNintendoSwitchDeviceId (request: LinkNintendoSwitchDeviceIdRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<LinkNintendoSwitchDeviceIdResult>("/Server/LinkNintendoSwitchDeviceId", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Links the PlayStation :tm: Network account associated with the provided access code to the user's PlayFab account
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/account-management/linkpsnaccount Microsoft Documentation}
   * @example
   * await serverClient.LinkPSNAccount({
   *   "PlayFabId": "1234FA342",
   *   "AuthCode": "LKJDG7DDE",
   *   "RedirectUri": "orbis://games"
   * });
   */
  LinkPSNAccount (request: LinkPSNAccountRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<LinkPSNAccountResult>("/Server/LinkPSNAccount", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Links the PlayStation :tm: Network account associated with the provided user id to the user's PlayFab account
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/account-management/linkpsnid Microsoft Documentation}
   * @example
   * await serverClient.LinkPSNId({
   *   "PlayFabId": "1234FA342",
   *   "PSNUserId": "LKJDG7DDE"
   * });
   */
  LinkPSNId (request: LinkPSNIdRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<LinkPSNIdResponse>("/Server/LinkPSNId", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Links the custom server identifier, generated by the title, to the user's PlayFab account.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/account-management/linkservercustomid Microsoft Documentation}
   * @example
   * await serverClient.LinkServerCustomId({
   *   "PlayFabId": "123412341234",
   *   "ServerCustomId": "67AB-5397-CC54-EA31"
   * });
   */
  LinkServerCustomId (request: LinkServerCustomIdRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<LinkServerCustomIdResult>("/Server/LinkServerCustomId", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Links the Steam account associated with the provided Steam ID to the user's PlayFab account
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/account-management/linksteamid Microsoft Documentation}
   * @example
   * await serverClient.LinkSteamId({
   *   "SteamId": "22223333",
   *   "PlayFabId": "5a446c83645201"
   * });
   */
  LinkSteamId (request: LinkSteamIdRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<LinkSteamIdResult>("/Server/LinkSteamId", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Links the Twitch account associated with the token to the user's PlayFab account.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/account-management/linktwitchaccount Microsoft Documentation}
   * @example
   * await serverClient.LinkTwitchAccount({
   *   "PlayFabId": "1234FA342",
   *   "AccessToken": "twitch-access-token",
   *   "ForceLink": false
   * });
   */
  LinkTwitchAccount (request: LinkTwitchAccountRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResult>("/Server/LinkTwitchAccount", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Links the Xbox Live account associated with the provided access code to the user's PlayFab account
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/account-management/linkxboxaccount Microsoft Documentation}
   * @example
   * await serverClient.LinkXboxAccount({
   *   "XboxToken": "XBL3.0 x=1981989841;akljdlkafdknad",
   *   "PlayFabId": "5a446c83645201"
   * });
   */
  LinkXboxAccount (request: LinkXboxAccountRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<LinkXboxAccountResult>("/Server/LinkXboxAccount", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Links the Xbox Live account associated with the provided Xbox ID and Sandbox to the user's PlayFab account
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/account-management/linkxboxid Microsoft Documentation}
   * @example
   * await serverClient.LinkXboxId({
   *   "XboxId": "12344553",
   *   "Sandbox": "RETAIL",
   *   "PlayFabId": "5A446C83645201",
   *   "ForceLink": false
   * });
   */
  LinkXboxId (request: LinkXboxIdRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<LinkXboxAccountResult>("/Server/LinkXboxId", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves title-specific custom property values for a player.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/player-data-management/listplayercustomproperties Microsoft Documentation}
   * @example
   * await serverClient.ListPlayerCustomProperties({
   *   "PlayFabId": "2039475"
   * });
   */
  ListPlayerCustomProperties (request: ListPlayerCustomPropertiesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListPlayerCustomPropertiesResult>("/Server/ListPlayerCustomProperties", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Logs a custom analytics event
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/analytics/logevent Microsoft Documentation}
   * @deprecated Please use WritePlayerEvent instead.
   */
  LogEvent (request: LogEventRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<LogEventResult>("/Server/LogEvent", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Signs the user in using the Android device identifier, returning a session identifier that can subsequently be used for
   * API calls which require an authenticated user
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/authentication/loginwithandroiddeviceid Microsoft Documentation}
   * @example
   * await serverClient.LoginWithAndroidDeviceID({
   *   "AndroidDeviceId": "526f79204261747479",
   *   "OS": "5.0",
   *   "AndroidDevice": "Nexus 6",
   *   "CreateAccount": false
   * });
   */
  LoginWithAndroidDeviceID (request: LoginWithAndroidDeviceIDRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ServerLoginResult>("/Server/LoginWithAndroidDeviceID", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Sign in the user with a Battle.net identity token
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/authentication/loginwithbattlenet Microsoft Documentation}
   * @example
   * await serverClient.LoginWithBattleNet({
   *   "IdentityToken": "eyJraWQi..."
   * });
   */
  LoginWithBattleNet (request: LoginWithBattleNetRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ServerLoginResult>("/Server/LoginWithBattleNet", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Signs the user in using a custom unique identifier generated by the title, returning a session identifier that can
   * subsequently be used for API calls which require an authenticated user
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/authentication/loginwithcustomid Microsoft Documentation}
   * @example
   * await serverClient.LoginWithCustomID({
   *   "CustomId": "67AB-5397-CC54-EA31",
   *   "CreateAccount": false
   * });
   */
  LoginWithCustomID (request: LoginWithCustomIDRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ServerLoginResult>("/Server/LoginWithCustomID", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Signs the user in using the iOS device identifier, returning a session identifier that can subsequently be used for API
   * calls which require an authenticated user
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/authentication/loginwithiosdeviceid Microsoft Documentation}
   * @example
   * await serverClient.LoginWithIOSDeviceID({
   *   "DeviceId": "29848d9bh8900a0b003",
   *   "OS": "7.11",
   *   "DeviceModel": "Iphone 5s",
   *   "CreateAccount": false
   * });
   */
  LoginWithIOSDeviceID (request: LoginWithIOSDeviceIDRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ServerLoginResult>("/Server/LoginWithIOSDeviceID", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Signs the user in using a PlayStation :tm: Network authentication code, returning a session identifier that can
   * subsequently be used for API calls which require an authenticated user
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/authentication/loginwithpsn Microsoft Documentation}
   * @example
   * await serverClient.LoginWithPSN({
   *   "AuthCode": "LKJ6D896D",
   *   "RedirectUri": "orbis://games",
   *   "CreateAccount": false
   * });
   */
  LoginWithPSN (request: LoginWithPSNRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ServerLoginResult>("/Server/LoginWithPSN", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Securely login a game client from an external server backend using a custom identifier for that player. Server Custom ID
   * and Client Custom ID are mutually exclusive and cannot be used to retrieve the same player account.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/authentication/loginwithservercustomid Microsoft Documentation}
   * @example
   * await serverClient.LoginWithServerCustomId({
   *   "ServerCustomId": "asdalsdkjar09u23ijf",
   *   "CreateAccount": true
   * });
   */
  LoginWithServerCustomId (request: LoginWithServerCustomIdRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ServerLoginResult>("/Server/LoginWithServerCustomId", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Signs the user in using an Steam ID, returning a session identifier that can subsequently be used for API calls which
   * require an authenticated user
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/authentication/loginwithsteamid Microsoft Documentation}
   * @example
   * await serverClient.LoginWithSteamId({
   *   "SteamId": "12344553",
   *   "CreateAccount": false
   * });
   */
  LoginWithSteamId (request: LoginWithSteamIdRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ServerLoginResult>("/Server/LoginWithSteamId", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Sign in the user with a Twitch access token
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/authentication/loginwithtwitch Microsoft Documentation}
   * @example
   * await serverClient.LoginWithTwitch({
   *   "PlayFabId": "1234FA342",
   *   "AccessToken": "twitch-access-token",
   *   "CreateAccount": true
   * });
   */
  LoginWithTwitch (request: LoginWithTwitchRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ServerLoginResult>("/Server/LoginWithTwitch", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Signs the user in using a Xbox Live Token from an external server backend, returning a session identifier that can
   * subsequently be used for API calls which require an authenticated user
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/authentication/loginwithxbox Microsoft Documentation}
   * @example
   * await serverClient.LoginWithXbox({
   *   "XboxToken": "XBL3.0 x=1981989841;akljdlkafdknad",
   *   "CreateAccount": false
   * });
   */
  LoginWithXbox (request: LoginWithXboxRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ServerLoginResult>("/Server/LoginWithXbox", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Signs the user in using an Xbox ID and Sandbox ID, returning a session identifier that can subsequently be used for API
   * calls which require an authenticated user
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/authentication/loginwithxboxid Microsoft Documentation}
   * @example
   * await serverClient.LoginWithXboxId({
   *   "XboxId": "12344553",
   *   "Sandbox": "RETAIL",
   *   "CreateAccount": false
   * });
   */
  LoginWithXboxId (request: LoginWithXboxIdRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ServerLoginResult>("/Server/LoginWithXboxId", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Modifies the number of remaining uses of a player's inventory item
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/player-item-management/modifyitemuses Microsoft Documentation}
   * @example
   * await serverClient.ModifyItemUses({
   *   "PlayFabId": "20394883",
   *   "ItemInstanceId": "94585729",
   *   "UsesToAdd": 1
   * });
   */
  ModifyItemUses (request: ModifyItemUsesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ModifyItemUsesResult>("/Server/ModifyItemUses", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Moves an item from a character's inventory into another of the users's character's inventory.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/player-item-management/moveitemtocharacterfromcharacter Microsoft Documentation}
   * @example
   * await serverClient.MoveItemToCharacterFromCharacter({
   *   "PlayFabId": "234234897234",
   *   "GivingCharacterId": "98092347523",
   *   "ReceivingCharacterId": "6323489712",
   *   "ItemInstanceId": "701231299999"
   * });
   */
  MoveItemToCharacterFromCharacter (request: MoveItemToCharacterFromCharacterRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<MoveItemToCharacterFromCharacterResult>("/Server/MoveItemToCharacterFromCharacter", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Moves an item from a user's inventory into their character's inventory.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/player-item-management/moveitemtocharacterfromuser Microsoft Documentation}
   * @example
   * await serverClient.MoveItemToCharacterFromUser({
   *   "PlayFabId": "234234897234",
   *   "CharacterId": "98092347523",
   *   "ItemInstanceId": "701231299999"
   * });
   */
  MoveItemToCharacterFromUser (request: MoveItemToCharacterFromUserRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<MoveItemToCharacterFromUserResult>("/Server/MoveItemToCharacterFromUser", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Moves an item from a character's inventory into the owning user's inventory.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/player-item-management/moveitemtouserfromcharacter Microsoft Documentation}
   * @example
   * await serverClient.MoveItemToUserFromCharacter({
   *   "PlayFabId": "234234897234",
   *   "CharacterId": "98092347523",
   *   "ItemInstanceId": "701231299999"
   * });
   */
  MoveItemToUserFromCharacter (request: MoveItemToUserFromCharacterRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<MoveItemToUserFromCharacterResult>("/Server/MoveItemToUserFromCharacter", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Informs the PlayFab match-making service that the user specified has left the Game Server Instance
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/matchmaking/notifymatchmakerplayerleft Microsoft Documentation}
   * @deprecated Do not use
   */
  NotifyMatchmakerPlayerLeft (request: NotifyMatchmakerPlayerLeftRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<NotifyMatchmakerPlayerLeftResult>("/Server/NotifyMatchmakerPlayerLeft", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Adds the virtual goods associated with the coupon to the user's inventory. Coupons can be generated via the
   * Economy->Catalogs tab in the PlayFab Game Manager.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/player-item-management/redeemcoupon Microsoft Documentation}
   * @example
   * await serverClient.RedeemCoupon({
   *   "CouponCode": "123-1234-123",
   *   "CatalogVersion": "5"
   * });
   */
  RedeemCoupon (request: RedeemCouponRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<RedeemCouponResult>("/Server/RedeemCoupon", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Validates a Game Server session ticket and returns details about the user
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/matchmaking/redeemmatchmakerticket Microsoft Documentation}
   * @deprecated Do not use
   */
  RedeemMatchmakerTicket (request: RedeemMatchmakerTicketRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<RedeemMatchmakerTicketResult>("/Server/RedeemMatchmakerTicket", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Set the state of the indicated Game Server Instance. Also update the heartbeat for the instance.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/matchmaking/refreshgameserverinstanceheartbeat Microsoft Documentation}
   * @deprecated Do not use
   */
  RefreshGameServerInstanceHeartbeat (request: RefreshGameServerInstanceHeartbeatRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<RefreshGameServerInstanceHeartbeatResult>("/Server/RefreshGameServerInstanceHeartbeat", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Inform the matchmaker that a new Game Server Instance is added.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/matchmaking/registergame Microsoft Documentation}
   * @deprecated Do not use
   */
  RegisterGame (request: RegisterGameRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<RegisterGameResponse>("/Server/RegisterGame", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Removes the specified friend from the the user's friend list
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/friend-list-management/removefriend Microsoft Documentation}
   * @example
   * await serverClient.RemoveFriend({
   *   "FriendPlayFabId": "29837799",
   *   "PlayFabId": "1a46086aed40f142"
   * });
   */
  RemoveFriend (request: RemoveFriendRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Server/RemoveFriend", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Removes the specified generic service identifier from the player's PlayFab account.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/account-management/removegenericid Microsoft Documentation}
   * @example
   * await serverClient.RemoveGenericID({
   *   "GenericId": {
   *     "ServiceName": "BigBizSocial",
   *     "UserId": "1234567890"
   *   }
   * });
   */
  RemoveGenericID (request: RemoveGenericIDRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResult>("/Server/RemoveGenericID", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Remove a given tag from a player profile. The tag's namespace is automatically generated based on the source of the tag.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/playstream/removeplayertag Microsoft Documentation}
   * @example
   * await serverClient.RemovePlayerTag({
   *   "PlayFabId": "10931252888739651331",
   *   "TagName": "MostKilled"
   * });
   */
  RemovePlayerTag (request: RemovePlayerTagRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<RemovePlayerTagResult>("/Server/RemovePlayerTag", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Removes users from the set of those able to update the shared data and the set of users in the group. Only users in the
   * group can remove members. If as a result of the call, zero users remain with access, the group and its associated data
   * will be deleted. Shared Groups are designed for sharing data between a very small number of players, please see our
   * guide: https://docs.microsoft.com/gaming/playfab/features/social/groups/using-shared-group-data
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/shared-group-data/removesharedgroupmembers Microsoft Documentation}
   * @example
   * await serverClient.RemoveSharedGroupMembers({
   *   "SharedGroupId": "Clan Data",
   *   "PlayFabIds": [
   *     "D984A64B832",
   *     "F74A523E1562"
   *   ]
   * });
   */
  RemoveSharedGroupMembers (request: RemoveSharedGroupMembersRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<RemoveSharedGroupMembersResult>("/Server/RemoveSharedGroupMembers", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Submit a report about a player (due to bad bahavior, etc.) on behalf of another player, so that customer service
   * representatives for the title can take action concerning potentially toxic players.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/player-item-management/reportplayer Microsoft Documentation}
   * @example
   * await serverClient.ReportPlayer({
   *   "ReporterId": "9ddafe27d6d445da",
   *   "ReporteeId": "1a46086aed40f142",
   *   "Comment": "cheating"
   * });
   */
  ReportPlayer (request: ReportPlayerServerRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ReportPlayerServerResult>("/Server/ReportPlayer", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Revoke all active bans for a user.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/account-management/revokeallbansforuser Microsoft Documentation}
   * @example
   * await serverClient.RevokeAllBansForUser({
   *   "PlayFabId": "1679AF5CD04BD838"
   * });
   */
  RevokeAllBansForUser (request: RevokeAllBansForUserRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<RevokeAllBansForUserResult>("/Server/RevokeAllBansForUser", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Revoke all active bans specified with BanId.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/account-management/revokebans Microsoft Documentation}
   * @example
   * await serverClient.RevokeBans({
   *   "BanIds": [
   *     "E0B5FF89542D413C",
   *     "EF43FF89542G1546"
   *   ]
   * });
   */
  RevokeBans (request: RevokeBansRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<RevokeBansResult>("/Server/RevokeBans", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Revokes access to an item in a user's inventory
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/player-item-management/revokeinventoryitem Microsoft Documentation}
   * @example
   * await serverClient.RevokeInventoryItem({
   *   "PlayFabId": "203945882",
   *   "ItemInstanceId": "2048583045"
   * });
   */
  RevokeInventoryItem (request: RevokeInventoryItemRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<RevokeInventoryResult>("/Server/RevokeInventoryItem", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Revokes access for up to 25 items across multiple users and characters.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/player-item-management/revokeinventoryitems Microsoft Documentation}
   * @example
   * await serverClient.RevokeInventoryItems({
   *   "Items": [
   *     {
   *       "PlayFabId": "203945882",
   *       "ItemInstanceId": "2048583045"
   *     }
   *   ]
   * });
   */
  RevokeInventoryItems (request: RevokeInventoryItemsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<RevokeInventoryItemsResult>("/Server/RevokeInventoryItems", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Saves push notification template for title
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/account-management/savepushnotificationtemplate Microsoft Documentation}
   * @example
   * await serverClient.SavePushNotificationTemplate({
   *   "Id": "6bc7dbf0-075a-46e9-8e84-35737a22c6a4",
   *   "Name": "F8763A987E",
   *   "AndroidPayload": "{       notification:      {          body: \"Some Message\",          title: \"Subject\",          body_loc_key: \"someLocKey\"     } }",
   *   "IOSPayload": "{       aps:      {          alert:          {          body: \"Some Message\",          title: \"Subject\",          \"loc-key\": \"someLocKey\"         }      } }",
   *   "LocalizedPushNotificationTemplates": {
   *     "en": {
   *       "Subject": "Recent Attack",
   *       "Message": "You have been attacked! Go defend your base!"
   *     },
   *     "fr": {
   *       "Subject": "Attaque récente",
   *       "Message": "Vous avez été attaqué! Va défendre ta base!"
   *     }
   *   }
   * });
   */
  SavePushNotificationTemplate (request: SavePushNotificationTemplateRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<SavePushNotificationTemplateResult>("/Server/SavePushNotificationTemplate", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Forces an email to be sent to the registered contact email address for the user's account based on an account recovery
   * email template
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/account-management/sendcustomaccountrecoveryemail Microsoft Documentation}
   * @example
   * await serverClient.SendCustomAccountRecoveryEmail({
   *   "EmailTemplateId": "D53AB15D8F12E330",
   *   "Email": "Me@here.com"
   * });
   */
  SendCustomAccountRecoveryEmail (request: SendCustomAccountRecoveryEmailRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<SendCustomAccountRecoveryEmailResult>("/Server/SendCustomAccountRecoveryEmail", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Sends an email based on an email template to a player's contact email
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/account-management/sendemailfromtemplate Microsoft Documentation}
   * @example
   * await serverClient.SendEmailFromTemplate({
   *   "EmailTemplateId": "B53CA15D92D2E331",
   *   "PlayFabId": "A01DC15D8E12E230"
   * });
   */
  SendEmailFromTemplate (request: SendEmailFromTemplateRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<SendEmailFromTemplateResult>("/Server/SendEmailFromTemplate", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Sends an iOS/Android Push Notification to a specific user, if that user's device has been configured for Push
   * Notifications in PlayFab. If a user has linked both Android and iOS devices, both will be notified.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/account-management/sendpushnotification Microsoft Documentation}
   * @example
   * await serverClient.SendPushNotification({
   *   "Recipient": "F8763A987E",
   *   "Message": "You have been attacked! Go defend your base!"
   * });
   */
  SendPushNotification (request: SendPushNotificationRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<SendPushNotificationResult>("/Server/SendPushNotification", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Sends an iOS/Android Push Notification template to a specific user, if that user's device has been configured for Push
   * Notifications in PlayFab. If a user has linked both Android and iOS devices, both will be notified.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/account-management/sendpushnotificationfromtemplate Microsoft Documentation}
   * @example
   * await serverClient.SendPushNotificationFromTemplate({
   *   "Recipient": "F8763A987E",
   *   "PushNotificationTemplateId": "6bc7dbf0-075a-46e9-8e84-35737a22c6a4"
   * });
   */
  SendPushNotificationFromTemplate (request: SendPushNotificationFromTemplateRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<SendPushNotificationResult>("/Server/SendPushNotificationFromTemplate", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Updates the tag list for a specified user in the friend list of another user
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/friend-list-management/setfriendtags Microsoft Documentation}
   * @example
   * await serverClient.SetFriendTags({
   *   "PlayFabId": "ABCDEF123456",
   *   "FriendPlayFabId": "298ABC37799",
   *   "Tags": [
   *     "sniper",
   *     "melee"
   *   ]
   * });
   */
  SetFriendTags (request: SetFriendTagsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Server/SetFriendTags", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Sets the custom data of the indicated Game Server Instance
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/matchmaking/setgameserverinstancedata Microsoft Documentation}
   * @deprecated Do not use
   */
  SetGameServerInstanceData (request: SetGameServerInstanceDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<SetGameServerInstanceDataResult>("/Server/SetGameServerInstanceData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Set the state of the indicated Game Server Instance.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/matchmaking/setgameserverinstancestate Microsoft Documentation}
   * @deprecated Do not use
   */
  SetGameServerInstanceState (request: SetGameServerInstanceStateRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<SetGameServerInstanceStateResult>("/Server/SetGameServerInstanceState", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Set custom tags for the specified Game Server Instance
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/matchmaking/setgameserverinstancetags Microsoft Documentation}
   * @deprecated Do not use
   */
  SetGameServerInstanceTags (request: SetGameServerInstanceTagsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<SetGameServerInstanceTagsResult>("/Server/SetGameServerInstanceTags", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Sets the player's secret if it is not already set. Player secrets are used to sign API requests. To reset a player's
   * secret use the Admin or Server API method SetPlayerSecret.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/authentication/setplayersecret Microsoft Documentation}
   * @example
   * await serverClient.SetPlayerSecret({
   *   "PlayerSecret": "ExampleSecret",
   *   "PlayFabId": "ABCD1234"
   * });
   */
  SetPlayerSecret (request: SetPlayerSecretRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<SetPlayerSecretResult>("/Server/SetPlayerSecret", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Updates the key-value store of custom publisher settings
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/title-wide-data-management/setpublisherdata Microsoft Documentation}
   * @example
   * await serverClient.SetPublisherData({
   *   "Key": "Running Speed",
   *   "Value": "1.03"
   * });
   */
  SetPublisherData (request: SetPublisherDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<SetPublisherDataResult>("/Server/SetPublisherData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Updates the key-value store of custom title settings
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/title-wide-data-management/settitledata Microsoft Documentation}
   * @example
   * await serverClient.SetTitleData({
   *   "Key": "Running Speed",
   *   "Value": "1.03"
   * });
   */
  SetTitleData (request: SetTitleDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<SetTitleDataResult>("/Server/SetTitleData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Updates the key-value store of custom title settings
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/title-wide-data-management/settitleinternaldata Microsoft Documentation}
   * @example
   * await serverClient.SetTitleInternalData({
   *   "Key": "Running Speed",
   *   "Value": "1.03"
   * });
   */
  SetTitleInternalData (request: SetTitleDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<SetTitleDataResult>("/Server/SetTitleInternalData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Decrements the character's balance of the specified virtual currency by the stated amount. It is possible to
   * make a VC balance negative with this API.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/player-item-management/subtractcharactervirtualcurrency Microsoft Documentation}
   * @example
   * await serverClient.SubtractCharacterVirtualCurrency({
   *   "PlayFabId": "20394883",
   *   "CharacterId": "23424524523",
   *   "VirtualCurrency": "GC",
   *   "Amount": 100
   * });
   */
  SubtractCharacterVirtualCurrency (request: SubtractCharacterVirtualCurrencyRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ModifyCharacterVirtualCurrencyResult>("/Server/SubtractCharacterVirtualCurrency", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Decrements the user's balance of the specified virtual currency by the stated amount. It is possible to make
   * a VC balance negative with this API.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/player-item-management/subtractuservirtualcurrency Microsoft Documentation}
   * @example
   * await serverClient.SubtractUserVirtualCurrency({
   *   "PlayFabId": "20394883",
   *   "VirtualCurrency": "GC",
   *   "Amount": 100
   * });
   */
  SubtractUserVirtualCurrency (request: SubtractUserVirtualCurrencyRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ModifyUserVirtualCurrencyResult>("/Server/SubtractUserVirtualCurrency", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Unlinks the related Battle.net account from the user's PlayFab account.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/account-management/unlinkbattlenetaccount Microsoft Documentation}
   * @example
   * await serverClient.UnlinkBattleNetAccount({
   *   "PlayFabId": "1234FA342"
   * });
   */
  UnlinkBattleNetAccount (request: UnlinkBattleNetAccountRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Server/UnlinkBattleNetAccount", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Unlinks the related Facebook account from the user's PlayFab account
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/account-management/unlinkfacebookaccount Microsoft Documentation}
   * @example
   * await serverClient.UnlinkFacebookAccount({
   *   "PlayFabId": "1234FA342"
   * });
   */
  UnlinkFacebookAccount (request: UnlinkFacebookAccountRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UnlinkFacebookAccountResult>("/Server/UnlinkFacebookAccount", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Unlinks the related Facebook Instant Games identifier from the user's PlayFab account
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/account-management/unlinkfacebookinstantgamesid Microsoft Documentation}
   * @example
   * await serverClient.UnlinkFacebookInstantGamesId({
   *   "PlayFabId": "1234FA342",
   *   "FacebookInstantGamesId": "123456789012345"
   * });
   */
  UnlinkFacebookInstantGamesId (request: UnlinkFacebookInstantGamesIdRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UnlinkFacebookInstantGamesIdResult>("/Server/UnlinkFacebookInstantGamesId", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Unlinks the related Nintendo account from the user's PlayFab account
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/account-management/unlinknintendoserviceaccount Microsoft Documentation}
   * @example
   * await serverClient.UnlinkNintendoServiceAccount({
   *   "PlayFabId": "1234FA342"
   * });
   */
  UnlinkNintendoServiceAccount (request: UnlinkNintendoServiceAccountRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Server/UnlinkNintendoServiceAccount", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Unlinks the related NintendoSwitchDeviceId from the user's PlayFab account
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/account-management/unlinknintendoswitchdeviceid Microsoft Documentation}
   * @example
   * await serverClient.UnlinkNintendoSwitchDeviceId({
   *   "PlayFabId": "1234FA342",
   *   "NintendoSwitchDeviceId": "526f79204261747479"
   * });
   */
  UnlinkNintendoSwitchDeviceId (request: UnlinkNintendoSwitchDeviceIdRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UnlinkNintendoSwitchDeviceIdResult>("/Server/UnlinkNintendoSwitchDeviceId", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Unlinks the related PlayStation :tm: Network account from the user's PlayFab account
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/account-management/unlinkpsnaccount Microsoft Documentation}
   * @example
   * await serverClient.UnlinkPSNAccount({
   *   "PlayFabId": "1234FA342"
   * });
   */
  UnlinkPSNAccount (request: UnlinkPSNAccountRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UnlinkPSNAccountResult>("/Server/UnlinkPSNAccount", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Unlinks the custom server identifier from the user's PlayFab account.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/account-management/unlinkservercustomid Microsoft Documentation}
   * @example
   * await serverClient.UnlinkServerCustomId({
   *   "PlayFabId": "123412341234",
   *   "ServerCustomId": "67AB-5397-CC54-EA31"
   * });
   */
  UnlinkServerCustomId (request: UnlinkServerCustomIdRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UnlinkServerCustomIdResult>("/Server/UnlinkServerCustomId", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Unlinks the Steam account associated with the provided Steam ID to the user's PlayFab account
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/account-management/unlinksteamid Microsoft Documentation}
   * @example
   * await serverClient.UnlinkSteamId({
   *   "PlayFabId": "5a446c83645201"
   * });
   */
  UnlinkSteamId (request: UnlinkSteamIdRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UnlinkSteamIdResult>("/Server/UnlinkSteamId", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Unlinks the related Twitch account from the user's PlayFab account.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/account-management/unlinktwitchaccount Microsoft Documentation}
   * @example
   * await serverClient.UnlinkTwitchAccount({
   *   "PlayFabId": "1234FA342"
   * });
   */
  UnlinkTwitchAccount (request: UnlinkTwitchAccountRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResult>("/Server/UnlinkTwitchAccount", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Unlinks the related Xbox Live account from the user's PlayFab account
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/account-management/unlinkxboxaccount Microsoft Documentation}
   * @example
   * await serverClient.UnlinkXboxAccount({
   *   "PlayFabId": "5a446c83645201"
   * });
   */
  UnlinkXboxAccount (request: UnlinkXboxAccountRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UnlinkXboxAccountResult>("/Server/UnlinkXboxAccount", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Opens a specific container (ContainerItemInstanceId), with a specific key (KeyItemInstanceId, when
   * required), and returns the contents of the opened container. If the container (and key when relevant) are consumable
   * (RemainingUses > 0), their RemainingUses will be decremented, consistent with the operation of ConsumeItem.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/player-item-management/unlockcontainerinstance Microsoft Documentation}
   * @example
   * await serverClient.UnlockContainerInstance({
   *   "PlayFabId": "20394883",
   *   "ContainerItemInstanceId": "123456788",
   *   "KeyItemInstanceId": "123456789"
   * });
   */
  UnlockContainerInstance (request: UnlockContainerInstanceRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UnlockContainerItemResult>("/Server/UnlockContainerInstance", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Searches Player or Character inventory for any ItemInstance matching the given CatalogItemId, if necessary
   * unlocks it using any appropriate key, and returns the contents of the opened container. If the container (and key when
   * relevant) are consumable (RemainingUses > 0), their RemainingUses will be decremented, consistent with the operation of
   * ConsumeItem.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/player-item-management/unlockcontaineritem Microsoft Documentation}
   * @example
   * await serverClient.UnlockContainerItem({
   *   "PlayFabId": "20394883",
   *   "ContainerItemId": "crate block 1"
   * });
   */
  UnlockContainerItem (request: UnlockContainerItemRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UnlockContainerItemResult>("/Server/UnlockContainerItem", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Update the avatar URL of the specified player
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/account-management/updateavatarurl Microsoft Documentation}
   * @example
   * await serverClient.UpdateAvatarUrl({
   *   "PlayFabId": "22ca65837b158fab",
   *   "ImageUrl": "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
   * });
   */
  UpdateAvatarUrl (request: UpdateAvatarUrlRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Server/UpdateAvatarUrl", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Updates information of a list of existing bans specified with Ban Ids.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/account-management/updatebans Microsoft Documentation}
   * @example
   * await serverClient.UpdateBans({
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
    return this.ExecuteRequestWrapper<UpdateBansResult>("/Server/UpdateBans", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Updates the title-specific custom data for the user's character which is readable and writable by the client
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/character-data/updatecharacterdata Microsoft Documentation}
   * @example
   * await serverClient.UpdateCharacterData({
   *   "PlayFabId": "2039475",
   *   "CharacterId": "98342357",
   *   "Data": {
   *     "Class": "Fighter",
   *     "Gender": "Female",
   *     "Icon": "Guard 3",
   *     "Theme": "Colorful"
   *   },
   *   "Permission": "Public"
   * });
   */
  UpdateCharacterData (request: UpdateCharacterDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdateCharacterDataResult>("/Server/UpdateCharacterData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Updates the title-specific custom data for the user's character which cannot be accessed by the client
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/character-data/updatecharacterinternaldata Microsoft Documentation}
   * @example
   * await serverClient.UpdateCharacterInternalData({
   *   "PlayFabId": "2039475",
   *   "CharacterId": "98342357",
   *   "Data": {
   *     "Class": "Fighter",
   *     "Gender": "Female",
   *     "Icon": "Guard 3",
   *     "Theme": "Colorful"
   *   },
   *   "Permission": "Public"
   * });
   */
  UpdateCharacterInternalData (request: UpdateCharacterDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdateCharacterDataResult>("/Server/UpdateCharacterInternalData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Updates the title-specific custom data for the user's character which can only be read by the client
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/character-data/updatecharacterreadonlydata Microsoft Documentation}
   * @example
   * await serverClient.UpdateCharacterReadOnlyData({
   *   "PlayFabId": "2039475",
   *   "CharacterId": "98342357",
   *   "Data": {
   *     "Class": "Fighter",
   *     "Gender": "Female",
   *     "Icon": "Guard 3",
   *     "Theme": "Colorful"
   *   },
   *   "Permission": "Public"
   * });
   */
  UpdateCharacterReadOnlyData (request: UpdateCharacterDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdateCharacterDataResult>("/Server/UpdateCharacterReadOnlyData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Updates the values of the specified title-specific statistics for the specific character
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/characters/updatecharacterstatistics Microsoft Documentation}
   * @example
   * await serverClient.UpdateCharacterStatistics({
   *   "PlayFabId": "10931252888739651331",
   *   "CharacterId": "98765432",
   *   "CharacterStatistics": {
   *     "Headshots": 18,
   *     "Kills": 47
   *   }
   * });
   */
  UpdateCharacterStatistics (request: UpdateCharacterStatisticsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdateCharacterStatisticsResult>("/Server/UpdateCharacterStatistics", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Updates the title-specific custom property values for a player
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/player-data-management/updateplayercustomproperties Microsoft Documentation}
   * @example
   * await serverClient.UpdatePlayerCustomProperties({
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
    return this.ExecuteRequestWrapper<UpdatePlayerCustomPropertiesResult>("/Server/UpdatePlayerCustomProperties", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Updates the values of the specified title-specific statistics for the user
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/player-data-management/updateplayerstatistics Microsoft Documentation}
   * @example
   * await serverClient.UpdatePlayerStatistics({
   *   "PlayFabId": "10931252888739651331",
   *   "Statistics": [
   *     {
   *       "StatisticName": "Points",
   *       "Version": 1,
   *       "Value": 600
   *     },
   *     {
   *       "StatisticName": "Wins",
   *       "Version": 2,
   *       "Value": 16
   *     },
   *     {
   *       "StatisticName": "Stars",
   *       "Value": 7
   *     }
   *   ]
   * });
   */
  UpdatePlayerStatistics (request: UpdatePlayerStatisticsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdatePlayerStatisticsResult>("/Server/UpdatePlayerStatistics", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Adds, updates, and removes data keys for a shared group object. If the permission is set to Public, all fields updated
   * or added in this call will be readable by users not in the group. By default, data permissions are set to Private.
   * Regardless of the permission setting, only members of the group (and the server) can update the data. Shared Groups are
   * designed for sharing data between a very small number of players, please see our guide:
   * https://docs.microsoft.com/gaming/playfab/features/social/groups/using-shared-group-data
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/shared-group-data/updatesharedgroupdata Microsoft Documentation}
   * @example
   * await serverClient.UpdateSharedGroupData({
   *   "SharedGroupId": "Clan Data",
   *   "Data": {
   *     "ClanKills": "34",
   *     "LastClanUpdate": "2014-10-03T09:21:14Z"
   *   },
   *   "Permission": "Public"
   * });
   */
  UpdateSharedGroupData (request: UpdateSharedGroupDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdateSharedGroupDataResult>("/Server/UpdateSharedGroupData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Updates the title-specific custom data for the user which is readable and writable by the client
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/player-data-management/updateuserdata Microsoft Documentation}
   * @example
   * await serverClient.UpdateUserData({
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
    return this.ExecuteRequestWrapper<UpdateUserDataResult>("/Server/UpdateUserData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Updates the title-specific custom data for the user which cannot be accessed by the client
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/player-data-management/updateuserinternaldata Microsoft Documentation}
   * @example
   * await serverClient.UpdateUserInternalData({
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
    return this.ExecuteRequestWrapper<UpdateUserDataResult>("/Server/UpdateUserInternalData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Updates the key-value pair data tagged to the specified item, which is read-only from the client.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/player-item-management/updateuserinventoryitemcustomdata Microsoft Documentation}
   * @example
   * await serverClient.UpdateUserInventoryItemCustomData({
   *   "PlayFabId": "204883457",
   *   "CharacterId": "9890723423",
   *   "ItemInstanceId": "88331144",
   *   "Data": {
   *     "Equipped": "True",
   *     "Slot": "Head"
   *   }
   * });
   */
  UpdateUserInventoryItemCustomData (request: UpdateUserInventoryItemDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Server/UpdateUserInventoryItemCustomData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Updates the publisher-specific custom data for the user which is readable and writable by the client
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/player-data-management/updateuserpublisherdata Microsoft Documentation}
   * @example
   * await serverClient.UpdateUserPublisherData({
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
    return this.ExecuteRequestWrapper<UpdateUserDataResult>("/Server/UpdateUserPublisherData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Updates the publisher-specific custom data for the user which cannot be accessed by the client
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/player-data-management/updateuserpublisherinternaldata Microsoft Documentation}
   * @example
   * await serverClient.UpdateUserPublisherInternalData({
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
    return this.ExecuteRequestWrapper<UpdateUserDataResult>("/Server/UpdateUserPublisherInternalData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Updates the publisher-specific custom data for the user which can only be read by the client
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/player-data-management/updateuserpublisherreadonlydata Microsoft Documentation}
   * @example
   * await serverClient.UpdateUserPublisherReadOnlyData({
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
    return this.ExecuteRequestWrapper<UpdateUserDataResult>("/Server/UpdateUserPublisherReadOnlyData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Updates the title-specific custom data for the user which can only be read by the client
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/player-data-management/updateuserreadonlydata Microsoft Documentation}
   * @example
   * await serverClient.UpdateUserReadOnlyData({
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
    return this.ExecuteRequestWrapper<UpdateUserDataResult>("/Server/UpdateUserReadOnlyData", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Updates the values of the specified title-specific statistics for the user. By default, clients are not permitted to
   * update statistics. Developers may override this setting in the Game Manager > Settings > API Features.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/player-data-management/updateuserstatistics Microsoft Documentation}
   * @deprecated Please use UpdatePlayerStatistics instead.
   */
  UpdateUserStatistics (request: UpdateUserStatisticsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdateUserStatisticsResult>("/Server/UpdateUserStatistics", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Writes a character-based event into PlayStream.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/analytics/writecharacterevent Microsoft Documentation}
   * @example
   * await serverClient.WriteCharacterEvent({
   *   "PlayFabId": "3947655299CB786",
   *   "CharacterId": "E161CB4B7F6C34B",
   *   "EventName": "character_defeated_enemy",
   *   "Timestamp": "2016-03-07T00:00:00Z",
   *   "Body": {
   *     "Enemy": "guardian",
   *     "Damage": 5,
   *     "Coordinates": {
   *       "X": 123.4,
   *       "Y": 543.2
   *     }
   *   }
   * });
   */
  WriteCharacterEvent (request: WriteServerCharacterEventRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<WriteEventResponse>("/Server/WriteCharacterEvent", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Writes a player-based event into PlayStream.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/analytics/writeplayerevent Microsoft Documentation}
   * @example
   * await serverClient.WritePlayerEvent({
   *   "PlayFabId": "3947655299CB786",
   *   "EventName": "player_defeated_enemy",
   *   "Timestamp": "2016-03-07T00:00:00Z",
   *   "Body": {
   *     "Enemy": "guardian",
   *     "Damage": 5,
   *     "Coordinates": {
   *       "X": 123.4,
   *       "Y": 543.2
   *     }
   *   }
   * });
   */
  WritePlayerEvent (request: WriteServerPlayerEventRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<WriteEventResponse>("/Server/WritePlayerEvent", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Writes a title-based event into PlayStream.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/server/analytics/writetitleevent Microsoft Documentation}
   * @example
   * await serverClient.WriteTitleEvent({
   *   "EventName": "client_update_submitted",
   *   "Timestamp": "2016-03-07T00:00:00Z",
   *   "Body": {
   *     "Version": "1.4.50"
   *   }
   * });
   */
  WriteTitleEvent (request: WriteTitleEventRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<WriteEventResponse>("/Server/WriteTitleEvent", request, "X-SecretKey", extraHeaders);
  }

};
