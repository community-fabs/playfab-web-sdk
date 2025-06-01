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
  EvaluateRandomResultTableRequest,
  ExecuteCloudScriptServerRequest,
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
  LinkXboxAccountRequest,
  ListPlayerCustomPropertiesRequest,
  LoginWithAndroidDeviceIDRequest,
  LoginWithBattleNetRequest,
  LoginWithCustomIDRequest,
  LoginWithIOSDeviceIDRequest,
  LoginWithPSNRequest,
  LoginWithServerCustomIdRequest,
  LoginWithSteamIdRequest,
  LoginWithXboxRequest,
  LoginWithXboxIdRequest,
  ModifyItemUsesRequest,
  MoveItemToCharacterFromCharacterRequest,
  MoveItemToCharacterFromUserRequest,
  MoveItemToUserFromCharacterRequest,
  RedeemCouponRequest,
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
  SetPlayerSecretRequest,
  SetPublisherDataRequest,
  SetTitleDataRequest,
  SubtractCharacterVirtualCurrencyRequest,
  SubtractUserVirtualCurrencyRequest,
  UnlinkBattleNetAccountRequest,
  UnlinkNintendoServiceAccountRequest,
  UnlinkNintendoSwitchDeviceIdRequest,
  UnlinkPSNAccountRequest,
  UnlinkServerCustomIdRequest,
  UnlinkSteamIdRequest,
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
  EvaluateRandomResultTableResult,
  ExecuteCloudScriptResult,
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
  ServerLoginResult,
  ModifyItemUsesResult,
  MoveItemToCharacterFromCharacterResult,
  MoveItemToCharacterFromUserResult,
  MoveItemToUserFromCharacterResult,
  RedeemCouponResult,
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
  SetPlayerSecretResult,
  SetPublisherDataResult,
  SetTitleDataResult,
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
  WriteEventResponse,
} from "../types/PlayFabServerApi";
import { PlayFabCommon } from "../PlayFabCommon";

export default class PlayFabServerApi extends PlayFabCommon {

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Increments the character's balance of the specified virtual currency by the stated amount
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/addcharactervirtualcurrency
     */
    AddCharacterVirtualCurrency (request: AddCharacterVirtualCurrencyRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ModifyCharacterVirtualCurrencyResult>("/Server/AddCharacterVirtualCurrency", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Adds the Friend user to the friendlist of the user with PlayFabId. At least one of
     * FriendPlayFabId,FriendUsername,FriendEmail, or FriendTitleDisplayName should be initialized.
     * https://docs.microsoft.com/rest/api/playfab/server/friend-list-management/addfriend
     */
    AddFriend (request: AddFriendRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/Server/AddFriend", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Adds the specified generic service identifier to the player's PlayFab account. This is designed to allow for a PlayFab
     * ID lookup of any arbitrary service identifier a title wants to add. This identifier should never be used as
     * authentication credentials, as the intent is that it is easily accessible by other players.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/addgenericid
     */
    AddGenericID (request: AddGenericIDRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResult>("/Server/AddGenericID", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Adds a given tag to a player profile. The tag's namespace is automatically generated based on the source of the tag.
     * https://docs.microsoft.com/rest/api/playfab/server/playstream/addplayertag
     */
    AddPlayerTag (request: AddPlayerTagRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<AddPlayerTagResult>("/Server/AddPlayerTag", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Adds users to the set of those able to update both the shared data, as well as the set of users in the group. Only users
     * in the group (and the server) can add new members. Shared Groups are designed for sharing data between a very small
     * number of players, please see our guide:
     * https://docs.microsoft.com/gaming/playfab/features/social/groups/using-shared-group-data
     * https://docs.microsoft.com/rest/api/playfab/server/shared-group-data/addsharedgroupmembers
     */
    AddSharedGroupMembers (request: AddSharedGroupMembersRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<AddSharedGroupMembersResult>("/Server/AddSharedGroupMembers", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Increments the user's balance of the specified virtual currency by the stated amount
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/adduservirtualcurrency
     */
    AddUserVirtualCurrency (request: AddUserVirtualCurrencyRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ModifyUserVirtualCurrencyResult>("/Server/AddUserVirtualCurrency", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Validated a client's session ticket, and if successful, returns details for that user
     * https://docs.microsoft.com/rest/api/playfab/server/authentication/authenticatesessionticket
     */
    AuthenticateSessionTicket (request: AuthenticateSessionTicketRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<AuthenticateSessionTicketResult>("/Server/AuthenticateSessionTicket", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Awards the specified users the specified Steam achievements
     * https://docs.microsoft.com/rest/api/playfab/server/platform-specific-methods/awardsteamachievement
     */
    AwardSteamAchievement (request: AwardSteamAchievementRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<AwardSteamAchievementResult>("/Server/AwardSteamAchievement", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Bans users by PlayFab ID with optional IP address, or MAC address for the provided game.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/banusers
     */
    BanUsers (request: BanUsersRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<BanUsersResult>("/Server/BanUsers", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Consume uses of a consumable item. When all uses are consumed, it will be removed from the player's
     * inventory.
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/consumeitem
     */
    ConsumeItem (request: ConsumeItemRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ConsumeItemResult>("/Server/ConsumeItem", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Requests the creation of a shared group object, containing key/value pairs which may be updated by all members of the
     * group. When created by a server, the group will initially have no members. Shared Groups are designed for sharing data
     * between a very small number of players, please see our guide:
     * https://docs.microsoft.com/gaming/playfab/features/social/groups/using-shared-group-data
     * https://docs.microsoft.com/rest/api/playfab/server/shared-group-data/createsharedgroup
     */
    CreateSharedGroup (request: CreateSharedGroupRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<CreateSharedGroupResult>("/Server/CreateSharedGroup", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Deletes the specific character ID from the specified user.
     * https://docs.microsoft.com/rest/api/playfab/server/characters/deletecharacterfromuser
     */
    DeleteCharacterFromUser (request: DeleteCharacterFromUserRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<DeleteCharacterFromUserResult>("/Server/DeleteCharacterFromUser", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Removes a user's player account from a title and deletes all associated data
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/deleteplayer
     */
    DeletePlayer (request: DeletePlayerRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<DeletePlayerResult>("/Server/DeletePlayer", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Deletes title-specific custom properties for a player
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/deleteplayercustomproperties
     */
    DeletePlayerCustomProperties (request: DeletePlayerCustomPropertiesRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<DeletePlayerCustomPropertiesResult>("/Server/DeletePlayerCustomProperties", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Deletes push notification template for title
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/deletepushnotificationtemplate
     */
    DeletePushNotificationTemplate (request: DeletePushNotificationTemplateRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<DeletePushNotificationTemplateResult>("/Server/DeletePushNotificationTemplate", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Deletes a shared group, freeing up the shared group ID to be reused for a new group. Shared Groups are designed for
     * sharing data between a very small number of players, please see our guide:
     * https://docs.microsoft.com/gaming/playfab/features/social/groups/using-shared-group-data
     * https://docs.microsoft.com/rest/api/playfab/server/shared-group-data/deletesharedgroup
     */
    DeleteSharedGroup (request: DeleteSharedGroupRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/Server/DeleteSharedGroup", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Returns the result of an evaluation of a Random Result Table - the ItemId from the game Catalog which would
     * have been added to the player inventory, if the Random Result Table were added via a Bundle or a call to
     * UnlockContainer.
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/evaluaterandomresulttable
     */
    EvaluateRandomResultTable (request: EvaluateRandomResultTableRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EvaluateRandomResultTableResult>("/Server/EvaluateRandomResultTable", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Executes a CloudScript function, with the 'currentPlayerId' set to the PlayFab ID of the authenticated player. The
     * PlayFab ID is the entity ID of the player's master_player_account entity.
     * https://docs.microsoft.com/rest/api/playfab/server/server-side-cloud-script/executecloudscript
     */
    ExecuteCloudScript (request: ExecuteCloudScriptServerRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ExecuteCloudScriptResult>("/Server/ExecuteCloudScript", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Retrieves an array of player segment definitions. Results from this can be used in subsequent API calls such as
     * GetPlayersInSegment which requires a Segment ID. While segment names can change the ID for that segment will not change.
     * https://docs.microsoft.com/rest/api/playfab/server/playstream/getallsegments
     */
    GetAllSegments (request: GetAllSegmentsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetAllSegmentsResult>("/Server/GetAllSegments", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Lists all of the characters that belong to a specific user. CharacterIds are not globally unique; characterId must be
     * evaluated with the parent PlayFabId to guarantee uniqueness.
     * https://docs.microsoft.com/rest/api/playfab/server/characters/getalluserscharacters
     */
    GetAllUsersCharacters (request: ListUsersCharactersRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ListUsersCharactersResult>("/Server/GetAllUsersCharacters", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Retrieves the specified version of the title's catalog of virtual goods, including all defined properties
     * https://docs.microsoft.com/rest/api/playfab/server/title-wide-data-management/getcatalogitems
     */
    GetCatalogItems (request: GetCatalogItemsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetCatalogItemsResult>("/Server/GetCatalogItems", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Retrieves the title-specific custom data for the user which is readable and writable by the client
     * https://docs.microsoft.com/rest/api/playfab/server/character-data/getcharacterdata
     */
    GetCharacterData (request: GetCharacterDataRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetCharacterDataResult>("/Server/GetCharacterData", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Retrieves the title-specific custom data for the user's character which cannot be accessed by the client
     * https://docs.microsoft.com/rest/api/playfab/server/character-data/getcharacterinternaldata
     */
    GetCharacterInternalData (request: GetCharacterDataRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetCharacterDataResult>("/Server/GetCharacterInternalData", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Retrieves the specified character's current inventory of virtual goods
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/getcharacterinventory
     */
    GetCharacterInventory (request: GetCharacterInventoryRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetCharacterInventoryResult>("/Server/GetCharacterInventory", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Retrieves a list of ranked characters for the given statistic, starting from the indicated point in the leaderboard
     * https://docs.microsoft.com/rest/api/playfab/server/characters/getcharacterleaderboard
     */
    GetCharacterLeaderboard (request: GetCharacterLeaderboardRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetCharacterLeaderboardResult>("/Server/GetCharacterLeaderboard", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Retrieves the title-specific custom data for the user's character which can only be read by the client
     * https://docs.microsoft.com/rest/api/playfab/server/character-data/getcharacterreadonlydata
     */
    GetCharacterReadOnlyData (request: GetCharacterDataRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetCharacterDataResult>("/Server/GetCharacterReadOnlyData", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Retrieves the details of all title-specific statistics for the specific character
     * https://docs.microsoft.com/rest/api/playfab/server/characters/getcharacterstatistics
     */
    GetCharacterStatistics (request: GetCharacterStatisticsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetCharacterStatisticsResult>("/Server/GetCharacterStatistics", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * This API retrieves a pre-signed URL for accessing a content file for the title. A subsequent HTTP GET to the returned
     * URL will attempt to download the content. A HEAD query to the returned URL will attempt to retrieve the metadata of the
     * content. Note that a successful result does not guarantee the existence of this content - if it has not been uploaded,
     * the query to retrieve the data will fail. See this post for more information:
     * https://community.playfab.com/hc/community/posts/205469488-How-to-upload-files-to-PlayFab-s-Content-Service. Also,
     * please be aware that the Content service is specifically PlayFab's CDN offering, for which standard CDN rates apply.
     * https://docs.microsoft.com/rest/api/playfab/server/content/getcontentdownloadurl
     */
    GetContentDownloadUrl (request: GetContentDownloadUrlRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetContentDownloadUrlResult>("/Server/GetContentDownloadUrl", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Retrieves a list of ranked friends of the given player for the given statistic, starting from the indicated point in the
     * leaderboard
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/getfriendleaderboard
     */
    GetFriendLeaderboard (request: GetFriendLeaderboardRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetLeaderboardResult>("/Server/GetFriendLeaderboard", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Retrieves the current friends for the user with PlayFabId, constrained to users who have PlayFab accounts. Friends from
     * linked accounts (Facebook, Steam) are also included. You may optionally exclude some linked services' friends.
     * https://docs.microsoft.com/rest/api/playfab/server/friend-list-management/getfriendslist
     */
    GetFriendsList (request: GetFriendsListRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetFriendsListResult>("/Server/GetFriendsList", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Retrieves a list of ranked users for the given statistic, starting from the indicated point in the leaderboard
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/getleaderboard
     */
    GetLeaderboard (request: GetLeaderboardRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetLeaderboardResult>("/Server/GetLeaderboard", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Retrieves a list of ranked characters for the given statistic, centered on the requested user
     * https://docs.microsoft.com/rest/api/playfab/server/characters/getleaderboardaroundcharacter
     */
    GetLeaderboardAroundCharacter (request: GetLeaderboardAroundCharacterRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetLeaderboardAroundCharacterResult>("/Server/GetLeaderboardAroundCharacter", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Retrieves a list of ranked users for the given statistic, centered on the currently signed-in user
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/getleaderboardarounduser
     */
    GetLeaderboardAroundUser (request: GetLeaderboardAroundUserRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetLeaderboardAroundUserResult>("/Server/GetLeaderboardAroundUser", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Retrieves a list of all of the user's characters for the given statistic.
     * https://docs.microsoft.com/rest/api/playfab/server/characters/getleaderboardforusercharacters
     */
    GetLeaderboardForUserCharacters (request: GetLeaderboardForUsersCharactersRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetLeaderboardForUsersCharactersResult>("/Server/GetLeaderboardForUserCharacters", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Returns whatever info is requested in the response for the user. Note that PII (like email address, facebook id) may be
     * returned. All parameters default to false.
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/getplayercombinedinfo
     */
    GetPlayerCombinedInfo (request: GetPlayerCombinedInfoRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayerCombinedInfoResult>("/Server/GetPlayerCombinedInfo", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Retrieves a title-specific custom property value for a player.
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/getplayercustomproperty
     */
    GetPlayerCustomProperty (request: GetPlayerCustomPropertyRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayerCustomPropertyResult>("/Server/GetPlayerCustomProperty", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Retrieves the player's profile
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/getplayerprofile
     */
    GetPlayerProfile (request: GetPlayerProfileRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayerProfileResult>("/Server/GetPlayerProfile", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * List all segments that a player currently belongs to at this moment in time.
     * https://docs.microsoft.com/rest/api/playfab/server/playstream/getplayersegments
     */
    GetPlayerSegments (request: GetPlayersSegmentsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayerSegmentsResult>("/Server/GetPlayerSegments", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Allows for paging through all players in a given segment. This API creates a snapshot of all player profiles that match
     * the segment definition at the time of its creation and lives through the Total Seconds to Live, refreshing its life span
     * on each subsequent use of the Continuation Token. Profiles that change during the course of paging will not be reflected
     * in the results. AB Test segments are currently not supported by this operation. NOTE: This API is limited to being
     * called 30 times in one minute. You will be returned an error if you exceed this threshold.
     * https://docs.microsoft.com/rest/api/playfab/server/playstream/getplayersinsegment
     */
    GetPlayersInSegment (request: GetPlayersInSegmentRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayersInSegmentResult>("/Server/GetPlayersInSegment", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Retrieves the current version and values for the indicated statistics, for the local player.
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/getplayerstatistics
     */
    GetPlayerStatistics (request: GetPlayerStatisticsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayerStatisticsResult>("/Server/GetPlayerStatistics", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Retrieves the information on the available versions of the specified statistic.
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/getplayerstatisticversions
     */
    GetPlayerStatisticVersions (request: GetPlayerStatisticVersionsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayerStatisticVersionsResult>("/Server/GetPlayerStatisticVersions", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Get all tags with a given Namespace (optional) from a player profile.
     * https://docs.microsoft.com/rest/api/playfab/server/playstream/getplayertags
     */
    GetPlayerTags (request: GetPlayerTagsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayerTagsResult>("/Server/GetPlayerTags", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Retrieves the unique PlayFab identifiers for the given set of Battle.net account identifiers.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/getplayfabidsfrombattlenetaccountids
     */
    GetPlayFabIDsFromBattleNetAccountIds (request: GetPlayFabIDsFromBattleNetAccountIdsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayFabIDsFromBattleNetAccountIdsResult>("/Server/GetPlayFabIDsFromBattleNetAccountIds", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Retrieves the unique PlayFab identifiers for the given set of Facebook identifiers.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/getplayfabidsfromfacebookids
     */
    GetPlayFabIDsFromFacebookIDs (request: GetPlayFabIDsFromFacebookIDsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayFabIDsFromFacebookIDsResult>("/Server/GetPlayFabIDsFromFacebookIDs", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Retrieves the unique PlayFab identifiers for the given set of Facebook Instant Games identifiers.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/getplayfabidsfromfacebookinstantgamesids
     */
    GetPlayFabIDsFromFacebookInstantGamesIds (request: GetPlayFabIDsFromFacebookInstantGamesIdsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayFabIDsFromFacebookInstantGamesIdsResult>("/Server/GetPlayFabIDsFromFacebookInstantGamesIds", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Retrieves the unique PlayFab identifiers for the given set of generic service identifiers. A generic identifier is the
     * service name plus the service-specific ID for the player, as specified by the title when the generic identifier was
     * added to the player account.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/getplayfabidsfromgenericids
     */
    GetPlayFabIDsFromGenericIDs (request: GetPlayFabIDsFromGenericIDsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayFabIDsFromGenericIDsResult>("/Server/GetPlayFabIDsFromGenericIDs", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Retrieves the unique PlayFab identifiers for the given set of Nintendo Service Account identifiers.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/getplayfabidsfromnintendoserviceaccountids
     */
    GetPlayFabIDsFromNintendoServiceAccountIds (request: GetPlayFabIDsFromNintendoServiceAccountIdsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayFabIDsFromNintendoServiceAccountIdsResult>("/Server/GetPlayFabIDsFromNintendoServiceAccountIds", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Retrieves the unique PlayFab identifiers for the given set of Nintendo Switch Device identifiers.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/getplayfabidsfromnintendoswitchdeviceids
     */
    GetPlayFabIDsFromNintendoSwitchDeviceIds (request: GetPlayFabIDsFromNintendoSwitchDeviceIdsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayFabIDsFromNintendoSwitchDeviceIdsResult>("/Server/GetPlayFabIDsFromNintendoSwitchDeviceIds", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Retrieves the unique PlayFab identifiers for the given set of PlayStation :tm: Network identifiers.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/getplayfabidsfrompsnaccountids
     */
    GetPlayFabIDsFromPSNAccountIDs (request: GetPlayFabIDsFromPSNAccountIDsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayFabIDsFromPSNAccountIDsResult>("/Server/GetPlayFabIDsFromPSNAccountIDs", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Retrieves the unique PlayFab identifiers for the given set of PlayStation :tm: Network identifiers.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/getplayfabidsfrompsnonlineids
     */
    GetPlayFabIDsFromPSNOnlineIDs (request: GetPlayFabIDsFromPSNOnlineIDsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayFabIDsFromPSNOnlineIDsResult>("/Server/GetPlayFabIDsFromPSNOnlineIDs", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Retrieves the unique PlayFab identifiers for the given set of Steam identifiers. The Steam identifiers are the profile
     * IDs for the user accounts, available as SteamId in the Steamworks Community API calls.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/getplayfabidsfromsteamids
     */
    GetPlayFabIDsFromSteamIDs (request: GetPlayFabIDsFromSteamIDsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayFabIDsFromSteamIDsResult>("/Server/GetPlayFabIDsFromSteamIDs", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Retrieves the unique PlayFab identifiers for the given set of Steam identifiers. The Steam identifiers are persona
     * names.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/getplayfabidsfromsteamnames
     */
    GetPlayFabIDsFromSteamNames (request: GetPlayFabIDsFromSteamNamesRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayFabIDsFromSteamNamesResult>("/Server/GetPlayFabIDsFromSteamNames", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Retrieves the unique PlayFab identifiers for the given set of Twitch identifiers. The Twitch identifiers are the IDs for
     * the user accounts, available as "_id" from the Twitch API methods (ex:
     * https://github.com/justintv/Twitch-API/blob/master/v3_resources/users.md#get-usersuser).
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/getplayfabidsfromtwitchids
     */
    GetPlayFabIDsFromTwitchIDs (request: GetPlayFabIDsFromTwitchIDsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayFabIDsFromTwitchIDsResult>("/Server/GetPlayFabIDsFromTwitchIDs", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Retrieves the unique PlayFab identifiers for the given set of XboxLive identifiers.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/getplayfabidsfromxboxliveids
     */
    GetPlayFabIDsFromXboxLiveIDs (request: GetPlayFabIDsFromXboxLiveIDsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayFabIDsFromXboxLiveIDsResult>("/Server/GetPlayFabIDsFromXboxLiveIDs", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Retrieves the key-value store of custom publisher settings
     * https://docs.microsoft.com/rest/api/playfab/server/title-wide-data-management/getpublisherdata
     */
    GetPublisherData (request: GetPublisherDataRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPublisherDataResult>("/Server/GetPublisherData", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Retrieves the configuration information for the specified random results tables for the title, including all
     * ItemId values and weights
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/getrandomresulttables
     */
    GetRandomResultTables (request: GetRandomResultTablesRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetRandomResultTablesResult>("/Server/GetRandomResultTables", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Retrieves the associated PlayFab account identifiers for the given set of server custom identifiers.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/getservercustomidsfromplayfabids
     */
    GetServerCustomIDsFromPlayFabIDs (request: GetServerCustomIDsFromPlayFabIDsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetServerCustomIDsFromPlayFabIDsResult>("/Server/GetServerCustomIDsFromPlayFabIDs", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Retrieves data stored in a shared group object, as well as the list of members in the group. The server can access all
     * public and private group data. Shared Groups are designed for sharing data between a very small number of players,
     * please see our guide: https://docs.microsoft.com/gaming/playfab/features/social/groups/using-shared-group-data
     * https://docs.microsoft.com/rest/api/playfab/server/shared-group-data/getsharedgroupdata
     */
    GetSharedGroupData (request: GetSharedGroupDataRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetSharedGroupDataResult>("/Server/GetSharedGroupData", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Retrieves the set of items defined for the specified store, including all prices defined, for the specified
     * player
     * https://docs.microsoft.com/rest/api/playfab/server/title-wide-data-management/getstoreitems
     */
    GetStoreItems (request: GetStoreItemsServerRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetStoreItemsResult>("/Server/GetStoreItems", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Retrieves the current server time
     * https://docs.microsoft.com/rest/api/playfab/server/title-wide-data-management/gettime
     */
    GetTime (request: GetTimeRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetTimeResult>("/Server/GetTime", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Retrieves the key-value store of custom title settings
     * https://docs.microsoft.com/rest/api/playfab/server/title-wide-data-management/gettitledata
     */
    GetTitleData (request: GetTitleDataRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetTitleDataResult>("/Server/GetTitleData", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Retrieves the key-value store of custom internal title settings
     * https://docs.microsoft.com/rest/api/playfab/server/title-wide-data-management/gettitleinternaldata
     */
    GetTitleInternalData (request: GetTitleDataRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetTitleDataResult>("/Server/GetTitleInternalData", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Retrieves the title news feed, as configured in the developer portal
     * https://docs.microsoft.com/rest/api/playfab/server/title-wide-data-management/gettitlenews
     */
    GetTitleNews (request: GetTitleNewsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetTitleNewsResult>("/Server/GetTitleNews", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Retrieves the relevant details for a specified user
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/getuseraccountinfo
     */
    GetUserAccountInfo (request: GetUserAccountInfoRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetUserAccountInfoResult>("/Server/GetUserAccountInfo", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Gets all bans for a user.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/getuserbans
     */
    GetUserBans (request: GetUserBansRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetUserBansResult>("/Server/GetUserBans", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Retrieves the title-specific custom data for the user which is readable and writable by the client
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/getuserdata
     */
    GetUserData (request: GetUserDataRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetUserDataResult>("/Server/GetUserData", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Retrieves the title-specific custom data for the user which cannot be accessed by the client
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/getuserinternaldata
     */
    GetUserInternalData (request: GetUserDataRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetUserDataResult>("/Server/GetUserInternalData", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Retrieves the specified user's current inventory of virtual goods
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/getuserinventory
     */
    GetUserInventory (request: GetUserInventoryRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetUserInventoryResult>("/Server/GetUserInventory", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Retrieves the publisher-specific custom data for the user which is readable and writable by the client
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/getuserpublisherdata
     */
    GetUserPublisherData (request: GetUserDataRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetUserDataResult>("/Server/GetUserPublisherData", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Retrieves the publisher-specific custom data for the user which cannot be accessed by the client
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/getuserpublisherinternaldata
     */
    GetUserPublisherInternalData (request: GetUserDataRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetUserDataResult>("/Server/GetUserPublisherInternalData", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Retrieves the publisher-specific custom data for the user which can only be read by the client
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/getuserpublisherreadonlydata
     */
    GetUserPublisherReadOnlyData (request: GetUserDataRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetUserDataResult>("/Server/GetUserPublisherReadOnlyData", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Retrieves the title-specific custom data for the user which can only be read by the client
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/getuserreadonlydata
     */
    GetUserReadOnlyData (request: GetUserDataRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetUserDataResult>("/Server/GetUserReadOnlyData", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Grants the specified character type to the user. CharacterIds are not globally unique; characterId must be evaluated
     * with the parent PlayFabId to guarantee uniqueness.
     * https://docs.microsoft.com/rest/api/playfab/server/characters/grantcharactertouser
     */
    GrantCharacterToUser (request: GrantCharacterToUserRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GrantCharacterToUserResult>("/Server/GrantCharacterToUser", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Adds the specified items to the specified character's inventory
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/grantitemstocharacter
     */
    GrantItemsToCharacter (request: GrantItemsToCharacterRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GrantItemsToCharacterResult>("/Server/GrantItemsToCharacter", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Adds the specified items to the specified user's inventory
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/grantitemstouser
     */
    GrantItemsToUser (request: GrantItemsToUserRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GrantItemsToUserResult>("/Server/GrantItemsToUser", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Adds the specified items to the specified user inventories
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/grantitemstousers
     */
    GrantItemsToUsers (request: GrantItemsToUsersRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GrantItemsToUsersResult>("/Server/GrantItemsToUsers", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Links the Battle.net account associated with the token to the user's PlayFab account.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/linkbattlenetaccount
     */
    LinkBattleNetAccount (request: LinkBattleNetAccountRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResult>("/Server/LinkBattleNetAccount", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Links the Nintendo account associated with the token to the user's PlayFab account
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/linknintendoserviceaccount
     */
    LinkNintendoServiceAccount (request: LinkNintendoServiceAccountRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResult>("/Server/LinkNintendoServiceAccount", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Links the Nintendo account associated with the Nintendo Service Account subject or id to the user's PlayFab account
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/linknintendoserviceaccountsubject
     */
    LinkNintendoServiceAccountSubject (request: LinkNintendoServiceAccountSubjectRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResult>("/Server/LinkNintendoServiceAccountSubject", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Links the NintendoSwitchDeviceId to the user's PlayFab account
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/linknintendoswitchdeviceid
     */
    LinkNintendoSwitchDeviceId (request: LinkNintendoSwitchDeviceIdRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<LinkNintendoSwitchDeviceIdResult>("/Server/LinkNintendoSwitchDeviceId", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Links the PlayStation :tm: Network account associated with the provided access code to the user's PlayFab account
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/linkpsnaccount
     */
    LinkPSNAccount (request: LinkPSNAccountRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<LinkPSNAccountResult>("/Server/LinkPSNAccount", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Links the PlayStation :tm: Network account associated with the provided user id to the user's PlayFab account
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/linkpsnid
     */
    LinkPSNId (request: LinkPSNIdRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<LinkPSNIdResponse>("/Server/LinkPSNId", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Links the custom server identifier, generated by the title, to the user's PlayFab account.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/linkservercustomid
     */
    LinkServerCustomId (request: LinkServerCustomIdRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<LinkServerCustomIdResult>("/Server/LinkServerCustomId", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Links the Steam account associated with the provided Steam ID to the user's PlayFab account
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/linksteamid
     */
    LinkSteamId (request: LinkSteamIdRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<LinkSteamIdResult>("/Server/LinkSteamId", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Links the Xbox Live account associated with the provided access code to the user's PlayFab account
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/linkxboxaccount
     */
    LinkXboxAccount (request: LinkXboxAccountRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<LinkXboxAccountResult>("/Server/LinkXboxAccount", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Retrieves title-specific custom property values for a player.
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/listplayercustomproperties
     */
    ListPlayerCustomProperties (request: ListPlayerCustomPropertiesRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ListPlayerCustomPropertiesResult>("/Server/ListPlayerCustomProperties", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Signs the user in using the Android device identifier, returning a session identifier that can subsequently be used for
     * API calls which require an authenticated user
     * https://docs.microsoft.com/rest/api/playfab/server/authentication/loginwithandroiddeviceid
     */
    LoginWithAndroidDeviceID (request: LoginWithAndroidDeviceIDRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ServerLoginResult>("/Server/LoginWithAndroidDeviceID", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Sign in the user with a Battle.net identity token
     * https://docs.microsoft.com/rest/api/playfab/server/authentication/loginwithbattlenet
     */
    LoginWithBattleNet (request: LoginWithBattleNetRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ServerLoginResult>("/Server/LoginWithBattleNet", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Signs the user in using a custom unique identifier generated by the title, returning a session identifier that can
     * subsequently be used for API calls which require an authenticated user
     * https://docs.microsoft.com/rest/api/playfab/server/authentication/loginwithcustomid
     */
    LoginWithCustomID (request: LoginWithCustomIDRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ServerLoginResult>("/Server/LoginWithCustomID", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Signs the user in using the iOS device identifier, returning a session identifier that can subsequently be used for API
     * calls which require an authenticated user
     * https://docs.microsoft.com/rest/api/playfab/server/authentication/loginwithiosdeviceid
     */
    LoginWithIOSDeviceID (request: LoginWithIOSDeviceIDRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ServerLoginResult>("/Server/LoginWithIOSDeviceID", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Signs the user in using a PlayStation :tm: Network authentication code, returning a session identifier that can
     * subsequently be used for API calls which require an authenticated user
     * https://docs.microsoft.com/rest/api/playfab/server/authentication/loginwithpsn
     */
    LoginWithPSN (request: LoginWithPSNRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ServerLoginResult>("/Server/LoginWithPSN", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Securely login a game client from an external server backend using a custom identifier for that player. Server Custom ID
     * and Client Custom ID are mutually exclusive and cannot be used to retrieve the same player account.
     * https://docs.microsoft.com/rest/api/playfab/server/authentication/loginwithservercustomid
     */
    LoginWithServerCustomId (request: LoginWithServerCustomIdRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ServerLoginResult>("/Server/LoginWithServerCustomId", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Signs the user in using an Steam ID, returning a session identifier that can subsequently be used for API calls which
     * require an authenticated user
     * https://docs.microsoft.com/rest/api/playfab/server/authentication/loginwithsteamid
     */
    LoginWithSteamId (request: LoginWithSteamIdRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ServerLoginResult>("/Server/LoginWithSteamId", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Signs the user in using a Xbox Live Token from an external server backend, returning a session identifier that can
     * subsequently be used for API calls which require an authenticated user
     * https://docs.microsoft.com/rest/api/playfab/server/authentication/loginwithxbox
     */
    LoginWithXbox (request: LoginWithXboxRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ServerLoginResult>("/Server/LoginWithXbox", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Signs the user in using an Xbox ID and Sandbox ID, returning a session identifier that can subsequently be used for API
     * calls which require an authenticated user
     * https://docs.microsoft.com/rest/api/playfab/server/authentication/loginwithxboxid
     */
    LoginWithXboxId (request: LoginWithXboxIdRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ServerLoginResult>("/Server/LoginWithXboxId", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Modifies the number of remaining uses of a player's inventory item
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/modifyitemuses
     */
    ModifyItemUses (request: ModifyItemUsesRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ModifyItemUsesResult>("/Server/ModifyItemUses", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Moves an item from a character's inventory into another of the users's character's inventory.
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/moveitemtocharacterfromcharacter
     */
    MoveItemToCharacterFromCharacter (request: MoveItemToCharacterFromCharacterRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<MoveItemToCharacterFromCharacterResult>("/Server/MoveItemToCharacterFromCharacter", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Moves an item from a user's inventory into their character's inventory.
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/moveitemtocharacterfromuser
     */
    MoveItemToCharacterFromUser (request: MoveItemToCharacterFromUserRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<MoveItemToCharacterFromUserResult>("/Server/MoveItemToCharacterFromUser", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Moves an item from a character's inventory into the owning user's inventory.
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/moveitemtouserfromcharacter
     */
    MoveItemToUserFromCharacter (request: MoveItemToUserFromCharacterRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<MoveItemToUserFromCharacterResult>("/Server/MoveItemToUserFromCharacter", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Adds the virtual goods associated with the coupon to the user's inventory. Coupons can be generated via the
     * Economy->Catalogs tab in the PlayFab Game Manager.
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/redeemcoupon
     */
    RedeemCoupon (request: RedeemCouponRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<RedeemCouponResult>("/Server/RedeemCoupon", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Removes the specified friend from the the user's friend list
     * https://docs.microsoft.com/rest/api/playfab/server/friend-list-management/removefriend
     */
    RemoveFriend (request: RemoveFriendRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/Server/RemoveFriend", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Removes the specified generic service identifier from the player's PlayFab account.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/removegenericid
     */
    RemoveGenericID (request: RemoveGenericIDRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResult>("/Server/RemoveGenericID", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Remove a given tag from a player profile. The tag's namespace is automatically generated based on the source of the tag.
     * https://docs.microsoft.com/rest/api/playfab/server/playstream/removeplayertag
     */
    RemovePlayerTag (request: RemovePlayerTagRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<RemovePlayerTagResult>("/Server/RemovePlayerTag", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Removes users from the set of those able to update the shared data and the set of users in the group. Only users in the
     * group can remove members. If as a result of the call, zero users remain with access, the group and its associated data
     * will be deleted. Shared Groups are designed for sharing data between a very small number of players, please see our
     * guide: https://docs.microsoft.com/gaming/playfab/features/social/groups/using-shared-group-data
     * https://docs.microsoft.com/rest/api/playfab/server/shared-group-data/removesharedgroupmembers
     */
    RemoveSharedGroupMembers (request: RemoveSharedGroupMembersRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<RemoveSharedGroupMembersResult>("/Server/RemoveSharedGroupMembers", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Submit a report about a player (due to bad bahavior, etc.) on behalf of another player, so that customer service
     * representatives for the title can take action concerning potentially toxic players.
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/reportplayer
     */
    ReportPlayer (request: ReportPlayerServerRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ReportPlayerServerResult>("/Server/ReportPlayer", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Revoke all active bans for a user.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/revokeallbansforuser
     */
    RevokeAllBansForUser (request: RevokeAllBansForUserRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<RevokeAllBansForUserResult>("/Server/RevokeAllBansForUser", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Revoke all active bans specified with BanId.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/revokebans
     */
    RevokeBans (request: RevokeBansRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<RevokeBansResult>("/Server/RevokeBans", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Revokes access to an item in a user's inventory
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/revokeinventoryitem
     */
    RevokeInventoryItem (request: RevokeInventoryItemRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<RevokeInventoryResult>("/Server/RevokeInventoryItem", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Revokes access for up to 25 items across multiple users and characters.
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/revokeinventoryitems
     */
    RevokeInventoryItems (request: RevokeInventoryItemsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<RevokeInventoryItemsResult>("/Server/RevokeInventoryItems", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Saves push notification template for title
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/savepushnotificationtemplate
     */
    SavePushNotificationTemplate (request: SavePushNotificationTemplateRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<SavePushNotificationTemplateResult>("/Server/SavePushNotificationTemplate", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Forces an email to be sent to the registered contact email address for the user's account based on an account recovery
     * email template
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/sendcustomaccountrecoveryemail
     */
    SendCustomAccountRecoveryEmail (request: SendCustomAccountRecoveryEmailRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<SendCustomAccountRecoveryEmailResult>("/Server/SendCustomAccountRecoveryEmail", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Sends an email based on an email template to a player's contact email
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/sendemailfromtemplate
     */
    SendEmailFromTemplate (request: SendEmailFromTemplateRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<SendEmailFromTemplateResult>("/Server/SendEmailFromTemplate", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Sends an iOS/Android Push Notification to a specific user, if that user's device has been configured for Push
     * Notifications in PlayFab. If a user has linked both Android and iOS devices, both will be notified.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/sendpushnotification
     */
    SendPushNotification (request: SendPushNotificationRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<SendPushNotificationResult>("/Server/SendPushNotification", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Sends an iOS/Android Push Notification template to a specific user, if that user's device has been configured for Push
     * Notifications in PlayFab. If a user has linked both Android and iOS devices, both will be notified.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/sendpushnotificationfromtemplate
     */
    SendPushNotificationFromTemplate (request: SendPushNotificationFromTemplateRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<SendPushNotificationResult>("/Server/SendPushNotificationFromTemplate", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Updates the tag list for a specified user in the friend list of another user
     * https://docs.microsoft.com/rest/api/playfab/server/friend-list-management/setfriendtags
     */
    SetFriendTags (request: SetFriendTagsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/Server/SetFriendTags", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Sets the player's secret if it is not already set. Player secrets are used to sign API requests. To reset a player's
     * secret use the Admin or Server API method SetPlayerSecret.
     * https://docs.microsoft.com/rest/api/playfab/server/authentication/setplayersecret
     */
    SetPlayerSecret (request: SetPlayerSecretRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<SetPlayerSecretResult>("/Server/SetPlayerSecret", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Updates the key-value store of custom publisher settings
     * https://docs.microsoft.com/rest/api/playfab/server/title-wide-data-management/setpublisherdata
     */
    SetPublisherData (request: SetPublisherDataRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<SetPublisherDataResult>("/Server/SetPublisherData", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Updates the key-value store of custom title settings
     * https://docs.microsoft.com/rest/api/playfab/server/title-wide-data-management/settitledata
     */
    SetTitleData (request: SetTitleDataRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<SetTitleDataResult>("/Server/SetTitleData", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Updates the key-value store of custom title settings
     * https://docs.microsoft.com/rest/api/playfab/server/title-wide-data-management/settitleinternaldata
     */
    SetTitleInternalData (request: SetTitleDataRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<SetTitleDataResult>("/Server/SetTitleInternalData", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Decrements the character's balance of the specified virtual currency by the stated amount. It is possible to
     * make a VC balance negative with this API.
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/subtractcharactervirtualcurrency
     */
    SubtractCharacterVirtualCurrency (request: SubtractCharacterVirtualCurrencyRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ModifyCharacterVirtualCurrencyResult>("/Server/SubtractCharacterVirtualCurrency", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Decrements the user's balance of the specified virtual currency by the stated amount. It is possible to make
     * a VC balance negative with this API.
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/subtractuservirtualcurrency
     */
    SubtractUserVirtualCurrency (request: SubtractUserVirtualCurrencyRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ModifyUserVirtualCurrencyResult>("/Server/SubtractUserVirtualCurrency", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Unlinks the related Battle.net account from the user's PlayFab account.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/unlinkbattlenetaccount
     */
    UnlinkBattleNetAccount (request: UnlinkBattleNetAccountRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/Server/UnlinkBattleNetAccount", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Unlinks the related Nintendo account from the user's PlayFab account
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/unlinknintendoserviceaccount
     */
    UnlinkNintendoServiceAccount (request: UnlinkNintendoServiceAccountRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/Server/UnlinkNintendoServiceAccount", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Unlinks the related NintendoSwitchDeviceId from the user's PlayFab account
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/unlinknintendoswitchdeviceid
     */
    UnlinkNintendoSwitchDeviceId (request: UnlinkNintendoSwitchDeviceIdRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UnlinkNintendoSwitchDeviceIdResult>("/Server/UnlinkNintendoSwitchDeviceId", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Unlinks the related PlayStation :tm: Network account from the user's PlayFab account
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/unlinkpsnaccount
     */
    UnlinkPSNAccount (request: UnlinkPSNAccountRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UnlinkPSNAccountResult>("/Server/UnlinkPSNAccount", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Unlinks the custom server identifier from the user's PlayFab account.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/unlinkservercustomid
     */
    UnlinkServerCustomId (request: UnlinkServerCustomIdRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UnlinkServerCustomIdResult>("/Server/UnlinkServerCustomId", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Unlinks the Steam account associated with the provided Steam ID to the user's PlayFab account
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/unlinksteamid
     */
    UnlinkSteamId (request: UnlinkSteamIdRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UnlinkSteamIdResult>("/Server/UnlinkSteamId", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Unlinks the related Xbox Live account from the user's PlayFab account
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/unlinkxboxaccount
     */
    UnlinkXboxAccount (request: UnlinkXboxAccountRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UnlinkXboxAccountResult>("/Server/UnlinkXboxAccount", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Opens a specific container (ContainerItemInstanceId), with a specific key (KeyItemInstanceId, when
     * required), and returns the contents of the opened container. If the container (and key when relevant) are consumable
     * (RemainingUses > 0), their RemainingUses will be decremented, consistent with the operation of ConsumeItem.
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/unlockcontainerinstance
     */
    UnlockContainerInstance (request: UnlockContainerInstanceRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UnlockContainerItemResult>("/Server/UnlockContainerInstance", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Searches Player or Character inventory for any ItemInstance matching the given CatalogItemId, if necessary
     * unlocks it using any appropriate key, and returns the contents of the opened container. If the container (and key when
     * relevant) are consumable (RemainingUses > 0), their RemainingUses will be decremented, consistent with the operation of
     * ConsumeItem.
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/unlockcontaineritem
     */
    UnlockContainerItem (request: UnlockContainerItemRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UnlockContainerItemResult>("/Server/UnlockContainerItem", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Update the avatar URL of the specified player
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/updateavatarurl
     */
    UpdateAvatarUrl (request: UpdateAvatarUrlRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/Server/UpdateAvatarUrl", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Updates information of a list of existing bans specified with Ban Ids.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/updatebans
     */
    UpdateBans (request: UpdateBansRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UpdateBansResult>("/Server/UpdateBans", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Updates the title-specific custom data for the user's character which is readable and writable by the client
     * https://docs.microsoft.com/rest/api/playfab/server/character-data/updatecharacterdata
     */
    UpdateCharacterData (request: UpdateCharacterDataRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UpdateCharacterDataResult>("/Server/UpdateCharacterData", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Updates the title-specific custom data for the user's character which cannot be accessed by the client
     * https://docs.microsoft.com/rest/api/playfab/server/character-data/updatecharacterinternaldata
     */
    UpdateCharacterInternalData (request: UpdateCharacterDataRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UpdateCharacterDataResult>("/Server/UpdateCharacterInternalData", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Updates the title-specific custom data for the user's character which can only be read by the client
     * https://docs.microsoft.com/rest/api/playfab/server/character-data/updatecharacterreadonlydata
     */
    UpdateCharacterReadOnlyData (request: UpdateCharacterDataRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UpdateCharacterDataResult>("/Server/UpdateCharacterReadOnlyData", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Updates the values of the specified title-specific statistics for the specific character
     * https://docs.microsoft.com/rest/api/playfab/server/characters/updatecharacterstatistics
     */
    UpdateCharacterStatistics (request: UpdateCharacterStatisticsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UpdateCharacterStatisticsResult>("/Server/UpdateCharacterStatistics", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Updates the title-specific custom property values for a player
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/updateplayercustomproperties
     */
    UpdatePlayerCustomProperties (request: UpdatePlayerCustomPropertiesRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UpdatePlayerCustomPropertiesResult>("/Server/UpdatePlayerCustomProperties", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Updates the values of the specified title-specific statistics for the user
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/updateplayerstatistics
     */
    UpdatePlayerStatistics (request: UpdatePlayerStatisticsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UpdatePlayerStatisticsResult>("/Server/UpdatePlayerStatistics", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Adds, updates, and removes data keys for a shared group object. If the permission is set to Public, all fields updated
     * or added in this call will be readable by users not in the group. By default, data permissions are set to Private.
     * Regardless of the permission setting, only members of the group (and the server) can update the data. Shared Groups are
     * designed for sharing data between a very small number of players, please see our guide:
     * https://docs.microsoft.com/gaming/playfab/features/social/groups/using-shared-group-data
     * https://docs.microsoft.com/rest/api/playfab/server/shared-group-data/updatesharedgroupdata
     */
    UpdateSharedGroupData (request: UpdateSharedGroupDataRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UpdateSharedGroupDataResult>("/Server/UpdateSharedGroupData", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Updates the title-specific custom data for the user which is readable and writable by the client
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/updateuserdata
     */
    UpdateUserData (request: UpdateUserDataRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UpdateUserDataResult>("/Server/UpdateUserData", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Updates the title-specific custom data for the user which cannot be accessed by the client
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/updateuserinternaldata
     */
    UpdateUserInternalData (request: UpdateUserInternalDataRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UpdateUserDataResult>("/Server/UpdateUserInternalData", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Updates the key-value pair data tagged to the specified item, which is read-only from the client.
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/updateuserinventoryitemcustomdata
     */
    UpdateUserInventoryItemCustomData (request: UpdateUserInventoryItemDataRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/Server/UpdateUserInventoryItemCustomData", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Updates the publisher-specific custom data for the user which is readable and writable by the client
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/updateuserpublisherdata
     */
    UpdateUserPublisherData (request: UpdateUserDataRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UpdateUserDataResult>("/Server/UpdateUserPublisherData", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Updates the publisher-specific custom data for the user which cannot be accessed by the client
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/updateuserpublisherinternaldata
     */
    UpdateUserPublisherInternalData (request: UpdateUserInternalDataRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UpdateUserDataResult>("/Server/UpdateUserPublisherInternalData", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Updates the publisher-specific custom data for the user which can only be read by the client
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/updateuserpublisherreadonlydata
     */
    UpdateUserPublisherReadOnlyData (request: UpdateUserDataRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UpdateUserDataResult>("/Server/UpdateUserPublisherReadOnlyData", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Updates the title-specific custom data for the user which can only be read by the client
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/updateuserreadonlydata
     */
    UpdateUserReadOnlyData (request: UpdateUserDataRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UpdateUserDataResult>("/Server/UpdateUserReadOnlyData", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Writes a character-based event into PlayStream.
     * https://docs.microsoft.com/rest/api/playfab/server/analytics/writecharacterevent
     */
    WriteCharacterEvent (request: WriteServerCharacterEventRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<WriteEventResponse>("/Server/WriteCharacterEvent", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Writes a player-based event into PlayStream.
     * https://docs.microsoft.com/rest/api/playfab/server/analytics/writeplayerevent
     */
    WritePlayerEvent (request: WriteServerPlayerEventRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<WriteEventResponse>("/Server/WritePlayerEvent", request, "X-SecretKey", customData, extraHeaders);
    }

    /**
     * Writes a title-based event into PlayStream.
     * https://docs.microsoft.com/rest/api/playfab/server/analytics/writetitleevent
     */
    WriteTitleEvent (request: WriteTitleEventRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<WriteEventResponse>("/Server/WriteTitleEvent", request, "X-SecretKey", customData, extraHeaders);
    }

};
