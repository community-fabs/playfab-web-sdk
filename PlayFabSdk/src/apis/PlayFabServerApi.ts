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
    AddCharacterVirtualCurrency (request: AddCharacterVirtualCurrencyRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ModifyCharacterVirtualCurrencyResult>("/Server/AddCharacterVirtualCurrency", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Adds the Friend user to the friendlist of the user with PlayFabId. At least one of
     * FriendPlayFabId,FriendUsername,FriendEmail, or FriendTitleDisplayName should be initialized.
     * https://docs.microsoft.com/rest/api/playfab/server/friend-list-management/addfriend
     */
    AddFriend (request: AddFriendRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/Server/AddFriend", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Adds the specified generic service identifier to the player's PlayFab account. This is designed to allow for a PlayFab
     * ID lookup of any arbitrary service identifier a title wants to add. This identifier should never be used as
     * authentication credentials, as the intent is that it is easily accessible by other players.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/addgenericid
     */
    AddGenericID (request: AddGenericIDRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResult>("/Server/AddGenericID", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Adds a given tag to a player profile. The tag's namespace is automatically generated based on the source of the tag.
     * https://docs.microsoft.com/rest/api/playfab/server/playstream/addplayertag
     */
    AddPlayerTag (request: AddPlayerTagRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<AddPlayerTagResult>("/Server/AddPlayerTag", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Adds users to the set of those able to update both the shared data, as well as the set of users in the group. Only users
     * in the group (and the server) can add new members. Shared Groups are designed for sharing data between a very small
     * number of players, please see our guide:
     * https://docs.microsoft.com/gaming/playfab/features/social/groups/using-shared-group-data
     * https://docs.microsoft.com/rest/api/playfab/server/shared-group-data/addsharedgroupmembers
     */
    AddSharedGroupMembers (request: AddSharedGroupMembersRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<AddSharedGroupMembersResult>("/Server/AddSharedGroupMembers", request, "X-SecretKey", extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Increments the user's balance of the specified virtual currency by the stated amount
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/adduservirtualcurrency
     */
    AddUserVirtualCurrency (request: AddUserVirtualCurrencyRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ModifyUserVirtualCurrencyResult>("/Server/AddUserVirtualCurrency", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Validated a client's session ticket, and if successful, returns details for that user
     * https://docs.microsoft.com/rest/api/playfab/server/authentication/authenticatesessionticket
     */
    AuthenticateSessionTicket (request: AuthenticateSessionTicketRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<AuthenticateSessionTicketResult>("/Server/AuthenticateSessionTicket", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Awards the specified users the specified Steam achievements
     * https://docs.microsoft.com/rest/api/playfab/server/platform-specific-methods/awardsteamachievement
     */
    AwardSteamAchievement (request: AwardSteamAchievementRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<AwardSteamAchievementResult>("/Server/AwardSteamAchievement", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Bans users by PlayFab ID with optional IP address, or MAC address for the provided game.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/banusers
     */
    BanUsers (request: BanUsersRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<BanUsersResult>("/Server/BanUsers", request, "X-SecretKey", extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Consume uses of a consumable item. When all uses are consumed, it will be removed from the player's
     * inventory.
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/consumeitem
     */
    ConsumeItem (request: ConsumeItemRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ConsumeItemResult>("/Server/ConsumeItem", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Requests the creation of a shared group object, containing key/value pairs which may be updated by all members of the
     * group. When created by a server, the group will initially have no members. Shared Groups are designed for sharing data
     * between a very small number of players, please see our guide:
     * https://docs.microsoft.com/gaming/playfab/features/social/groups/using-shared-group-data
     * https://docs.microsoft.com/rest/api/playfab/server/shared-group-data/createsharedgroup
     */
    CreateSharedGroup (request: CreateSharedGroupRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<CreateSharedGroupResult>("/Server/CreateSharedGroup", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Deletes the specific character ID from the specified user.
     * https://docs.microsoft.com/rest/api/playfab/server/characters/deletecharacterfromuser
     */
    DeleteCharacterFromUser (request: DeleteCharacterFromUserRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<DeleteCharacterFromUserResult>("/Server/DeleteCharacterFromUser", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Removes a user's player account from a title and deletes all associated data
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/deleteplayer
     */
    DeletePlayer (request: DeletePlayerRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<DeletePlayerResult>("/Server/DeletePlayer", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Deletes title-specific custom properties for a player
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/deleteplayercustomproperties
     */
    DeletePlayerCustomProperties (request: DeletePlayerCustomPropertiesRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<DeletePlayerCustomPropertiesResult>("/Server/DeletePlayerCustomProperties", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Deletes push notification template for title
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/deletepushnotificationtemplate
     */
    DeletePushNotificationTemplate (request: DeletePushNotificationTemplateRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<DeletePushNotificationTemplateResult>("/Server/DeletePushNotificationTemplate", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Deletes a shared group, freeing up the shared group ID to be reused for a new group. Shared Groups are designed for
     * sharing data between a very small number of players, please see our guide:
     * https://docs.microsoft.com/gaming/playfab/features/social/groups/using-shared-group-data
     * https://docs.microsoft.com/rest/api/playfab/server/shared-group-data/deletesharedgroup
     */
    DeleteSharedGroup (request: DeleteSharedGroupRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/Server/DeleteSharedGroup", request, "X-SecretKey", extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Returns the result of an evaluation of a Random Result Table - the ItemId from the game Catalog which would
     * have been added to the player inventory, if the Random Result Table were added via a Bundle or a call to
     * UnlockContainer.
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/evaluaterandomresulttable
     */
    EvaluateRandomResultTable (request: EvaluateRandomResultTableRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EvaluateRandomResultTableResult>("/Server/EvaluateRandomResultTable", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Executes a CloudScript function, with the 'currentPlayerId' set to the PlayFab ID of the authenticated player. The
     * PlayFab ID is the entity ID of the player's master_player_account entity.
     * https://docs.microsoft.com/rest/api/playfab/server/server-side-cloud-script/executecloudscript
     */
    ExecuteCloudScript (request: ExecuteCloudScriptServerRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ExecuteCloudScriptResult>("/Server/ExecuteCloudScript", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Retrieves an array of player segment definitions. Results from this can be used in subsequent API calls such as
     * GetPlayersInSegment which requires a Segment ID. While segment names can change the ID for that segment will not change.
     * https://docs.microsoft.com/rest/api/playfab/server/playstream/getallsegments
     */
    GetAllSegments (request: GetAllSegmentsRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetAllSegmentsResult>("/Server/GetAllSegments", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Lists all of the characters that belong to a specific user. CharacterIds are not globally unique; characterId must be
     * evaluated with the parent PlayFabId to guarantee uniqueness.
     * https://docs.microsoft.com/rest/api/playfab/server/characters/getalluserscharacters
     */
    GetAllUsersCharacters (request: ListUsersCharactersRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ListUsersCharactersResult>("/Server/GetAllUsersCharacters", request, "X-SecretKey", extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Retrieves the specified version of the title's catalog of virtual goods, including all defined properties
     * https://docs.microsoft.com/rest/api/playfab/server/title-wide-data-management/getcatalogitems
     */
    GetCatalogItems (request: GetCatalogItemsRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetCatalogItemsResult>("/Server/GetCatalogItems", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Retrieves the title-specific custom data for the user which is readable and writable by the client
     * https://docs.microsoft.com/rest/api/playfab/server/character-data/getcharacterdata
     */
    GetCharacterData (request: GetCharacterDataRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetCharacterDataResult>("/Server/GetCharacterData", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Retrieves the title-specific custom data for the user's character which cannot be accessed by the client
     * https://docs.microsoft.com/rest/api/playfab/server/character-data/getcharacterinternaldata
     */
    GetCharacterInternalData (request: GetCharacterDataRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetCharacterDataResult>("/Server/GetCharacterInternalData", request, "X-SecretKey", extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Retrieves the specified character's current inventory of virtual goods
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/getcharacterinventory
     */
    GetCharacterInventory (request: GetCharacterInventoryRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetCharacterInventoryResult>("/Server/GetCharacterInventory", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Retrieves a list of ranked characters for the given statistic, starting from the indicated point in the leaderboard
     * https://docs.microsoft.com/rest/api/playfab/server/characters/getcharacterleaderboard
     */
    GetCharacterLeaderboard (request: GetCharacterLeaderboardRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetCharacterLeaderboardResult>("/Server/GetCharacterLeaderboard", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Retrieves the title-specific custom data for the user's character which can only be read by the client
     * https://docs.microsoft.com/rest/api/playfab/server/character-data/getcharacterreadonlydata
     */
    GetCharacterReadOnlyData (request: GetCharacterDataRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetCharacterDataResult>("/Server/GetCharacterReadOnlyData", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Retrieves the details of all title-specific statistics for the specific character
     * https://docs.microsoft.com/rest/api/playfab/server/characters/getcharacterstatistics
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
     * https://docs.microsoft.com/rest/api/playfab/server/content/getcontentdownloadurl
     */
    GetContentDownloadUrl (request: GetContentDownloadUrlRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetContentDownloadUrlResult>("/Server/GetContentDownloadUrl", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Retrieves a list of ranked friends of the given player for the given statistic, starting from the indicated point in the
     * leaderboard
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/getfriendleaderboard
     */
    GetFriendLeaderboard (request: GetFriendLeaderboardRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetLeaderboardResult>("/Server/GetFriendLeaderboard", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Retrieves the current friends for the user with PlayFabId, constrained to users who have PlayFab accounts. Friends from
     * linked accounts (Facebook, Steam) are also included. You may optionally exclude some linked services' friends.
     * https://docs.microsoft.com/rest/api/playfab/server/friend-list-management/getfriendslist
     */
    GetFriendsList (request: GetFriendsListRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetFriendsListResult>("/Server/GetFriendsList", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Retrieves a list of ranked users for the given statistic, starting from the indicated point in the leaderboard
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/getleaderboard
     */
    GetLeaderboard (request: GetLeaderboardRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetLeaderboardResult>("/Server/GetLeaderboard", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Retrieves a list of ranked characters for the given statistic, centered on the requested user
     * https://docs.microsoft.com/rest/api/playfab/server/characters/getleaderboardaroundcharacter
     */
    GetLeaderboardAroundCharacter (request: GetLeaderboardAroundCharacterRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetLeaderboardAroundCharacterResult>("/Server/GetLeaderboardAroundCharacter", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Retrieves a list of ranked users for the given statistic, centered on the currently signed-in user
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/getleaderboardarounduser
     */
    GetLeaderboardAroundUser (request: GetLeaderboardAroundUserRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetLeaderboardAroundUserResult>("/Server/GetLeaderboardAroundUser", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Retrieves a list of all of the user's characters for the given statistic.
     * https://docs.microsoft.com/rest/api/playfab/server/characters/getleaderboardforusercharacters
     */
    GetLeaderboardForUserCharacters (request: GetLeaderboardForUsersCharactersRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetLeaderboardForUsersCharactersResult>("/Server/GetLeaderboardForUserCharacters", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Returns whatever info is requested in the response for the user. Note that PII (like email address, facebook id) may be
     * returned. All parameters default to false.
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/getplayercombinedinfo
     */
    GetPlayerCombinedInfo (request: GetPlayerCombinedInfoRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayerCombinedInfoResult>("/Server/GetPlayerCombinedInfo", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Retrieves a title-specific custom property value for a player.
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/getplayercustomproperty
     */
    GetPlayerCustomProperty (request: GetPlayerCustomPropertyRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayerCustomPropertyResult>("/Server/GetPlayerCustomProperty", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Retrieves the player's profile
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/getplayerprofile
     */
    GetPlayerProfile (request: GetPlayerProfileRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayerProfileResult>("/Server/GetPlayerProfile", request, "X-SecretKey", extraHeaders);
    }

    /**
     * List all segments that a player currently belongs to at this moment in time.
     * https://docs.microsoft.com/rest/api/playfab/server/playstream/getplayersegments
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
     * https://docs.microsoft.com/rest/api/playfab/server/playstream/getplayersinsegment
     */
    GetPlayersInSegment (request: GetPlayersInSegmentRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayersInSegmentResult>("/Server/GetPlayersInSegment", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Retrieves the current version and values for the indicated statistics, for the local player.
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/getplayerstatistics
     */
    GetPlayerStatistics (request: GetPlayerStatisticsRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayerStatisticsResult>("/Server/GetPlayerStatistics", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Retrieves the information on the available versions of the specified statistic.
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/getplayerstatisticversions
     */
    GetPlayerStatisticVersions (request: GetPlayerStatisticVersionsRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayerStatisticVersionsResult>("/Server/GetPlayerStatisticVersions", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Get all tags with a given Namespace (optional) from a player profile.
     * https://docs.microsoft.com/rest/api/playfab/server/playstream/getplayertags
     */
    GetPlayerTags (request: GetPlayerTagsRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayerTagsResult>("/Server/GetPlayerTags", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Retrieves the unique PlayFab identifiers for the given set of Battle.net account identifiers.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/getplayfabidsfrombattlenetaccountids
     */
    GetPlayFabIDsFromBattleNetAccountIds (request: GetPlayFabIDsFromBattleNetAccountIdsRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayFabIDsFromBattleNetAccountIdsResult>("/Server/GetPlayFabIDsFromBattleNetAccountIds", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Retrieves the unique PlayFab identifiers for the given set of Facebook identifiers.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/getplayfabidsfromfacebookids
     */
    GetPlayFabIDsFromFacebookIDs (request: GetPlayFabIDsFromFacebookIDsRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayFabIDsFromFacebookIDsResult>("/Server/GetPlayFabIDsFromFacebookIDs", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Retrieves the unique PlayFab identifiers for the given set of Facebook Instant Games identifiers.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/getplayfabidsfromfacebookinstantgamesids
     */
    GetPlayFabIDsFromFacebookInstantGamesIds (request: GetPlayFabIDsFromFacebookInstantGamesIdsRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayFabIDsFromFacebookInstantGamesIdsResult>("/Server/GetPlayFabIDsFromFacebookInstantGamesIds", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Retrieves the unique PlayFab identifiers for the given set of generic service identifiers. A generic identifier is the
     * service name plus the service-specific ID for the player, as specified by the title when the generic identifier was
     * added to the player account.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/getplayfabidsfromgenericids
     */
    GetPlayFabIDsFromGenericIDs (request: GetPlayFabIDsFromGenericIDsRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayFabIDsFromGenericIDsResult>("/Server/GetPlayFabIDsFromGenericIDs", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Retrieves the unique PlayFab identifiers for the given set of Nintendo Service Account identifiers.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/getplayfabidsfromnintendoserviceaccountids
     */
    GetPlayFabIDsFromNintendoServiceAccountIds (request: GetPlayFabIDsFromNintendoServiceAccountIdsRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayFabIDsFromNintendoServiceAccountIdsResult>("/Server/GetPlayFabIDsFromNintendoServiceAccountIds", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Retrieves the unique PlayFab identifiers for the given set of Nintendo Switch Device identifiers.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/getplayfabidsfromnintendoswitchdeviceids
     */
    GetPlayFabIDsFromNintendoSwitchDeviceIds (request: GetPlayFabIDsFromNintendoSwitchDeviceIdsRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayFabIDsFromNintendoSwitchDeviceIdsResult>("/Server/GetPlayFabIDsFromNintendoSwitchDeviceIds", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Retrieves the unique PlayFab identifiers for the given set of PlayStation :tm: Network identifiers.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/getplayfabidsfrompsnaccountids
     */
    GetPlayFabIDsFromPSNAccountIDs (request: GetPlayFabIDsFromPSNAccountIDsRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayFabIDsFromPSNAccountIDsResult>("/Server/GetPlayFabIDsFromPSNAccountIDs", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Retrieves the unique PlayFab identifiers for the given set of PlayStation :tm: Network identifiers.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/getplayfabidsfrompsnonlineids
     */
    GetPlayFabIDsFromPSNOnlineIDs (request: GetPlayFabIDsFromPSNOnlineIDsRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayFabIDsFromPSNOnlineIDsResult>("/Server/GetPlayFabIDsFromPSNOnlineIDs", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Retrieves the unique PlayFab identifiers for the given set of Steam identifiers. The Steam identifiers are the profile
     * IDs for the user accounts, available as SteamId in the Steamworks Community API calls.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/getplayfabidsfromsteamids
     */
    GetPlayFabIDsFromSteamIDs (request: GetPlayFabIDsFromSteamIDsRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayFabIDsFromSteamIDsResult>("/Server/GetPlayFabIDsFromSteamIDs", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Retrieves the unique PlayFab identifiers for the given set of Steam identifiers. The Steam identifiers are persona
     * names.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/getplayfabidsfromsteamnames
     */
    GetPlayFabIDsFromSteamNames (request: GetPlayFabIDsFromSteamNamesRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayFabIDsFromSteamNamesResult>("/Server/GetPlayFabIDsFromSteamNames", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Retrieves the unique PlayFab identifiers for the given set of Twitch identifiers. The Twitch identifiers are the IDs for
     * the user accounts, available as "_id" from the Twitch API methods (ex:
     * https://github.com/justintv/Twitch-API/blob/master/v3_resources/users.md#get-usersuser).
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/getplayfabidsfromtwitchids
     */
    GetPlayFabIDsFromTwitchIDs (request: GetPlayFabIDsFromTwitchIDsRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayFabIDsFromTwitchIDsResult>("/Server/GetPlayFabIDsFromTwitchIDs", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Retrieves the unique PlayFab identifiers for the given set of XboxLive identifiers.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/getplayfabidsfromxboxliveids
     */
    GetPlayFabIDsFromXboxLiveIDs (request: GetPlayFabIDsFromXboxLiveIDsRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayFabIDsFromXboxLiveIDsResult>("/Server/GetPlayFabIDsFromXboxLiveIDs", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Retrieves the key-value store of custom publisher settings
     * https://docs.microsoft.com/rest/api/playfab/server/title-wide-data-management/getpublisherdata
     */
    GetPublisherData (request: GetPublisherDataRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPublisherDataResult>("/Server/GetPublisherData", request, "X-SecretKey", extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Retrieves the configuration information for the specified random results tables for the title, including all
     * ItemId values and weights
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/getrandomresulttables
     */
    GetRandomResultTables (request: GetRandomResultTablesRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetRandomResultTablesResult>("/Server/GetRandomResultTables", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Retrieves the associated PlayFab account identifiers for the given set of server custom identifiers.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/getservercustomidsfromplayfabids
     */
    GetServerCustomIDsFromPlayFabIDs (request: GetServerCustomIDsFromPlayFabIDsRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetServerCustomIDsFromPlayFabIDsResult>("/Server/GetServerCustomIDsFromPlayFabIDs", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Retrieves data stored in a shared group object, as well as the list of members in the group. The server can access all
     * public and private group data. Shared Groups are designed for sharing data between a very small number of players,
     * please see our guide: https://docs.microsoft.com/gaming/playfab/features/social/groups/using-shared-group-data
     * https://docs.microsoft.com/rest/api/playfab/server/shared-group-data/getsharedgroupdata
     */
    GetSharedGroupData (request: GetSharedGroupDataRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetSharedGroupDataResult>("/Server/GetSharedGroupData", request, "X-SecretKey", extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Retrieves the set of items defined for the specified store, including all prices defined, for the specified
     * player
     * https://docs.microsoft.com/rest/api/playfab/server/title-wide-data-management/getstoreitems
     */
    GetStoreItems (request: GetStoreItemsServerRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetStoreItemsResult>("/Server/GetStoreItems", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Retrieves the current server time
     * https://docs.microsoft.com/rest/api/playfab/server/title-wide-data-management/gettime
     */
    GetTime (request: GetTimeRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetTimeResult>("/Server/GetTime", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Retrieves the key-value store of custom title settings
     * https://docs.microsoft.com/rest/api/playfab/server/title-wide-data-management/gettitledata
     */
    GetTitleData (request: GetTitleDataRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetTitleDataResult>("/Server/GetTitleData", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Retrieves the key-value store of custom internal title settings
     * https://docs.microsoft.com/rest/api/playfab/server/title-wide-data-management/gettitleinternaldata
     */
    GetTitleInternalData (request: GetTitleDataRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetTitleDataResult>("/Server/GetTitleInternalData", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Retrieves the title news feed, as configured in the developer portal
     * https://docs.microsoft.com/rest/api/playfab/server/title-wide-data-management/gettitlenews
     */
    GetTitleNews (request: GetTitleNewsRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetTitleNewsResult>("/Server/GetTitleNews", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Retrieves the relevant details for a specified user
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/getuseraccountinfo
     */
    GetUserAccountInfo (request: GetUserAccountInfoRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetUserAccountInfoResult>("/Server/GetUserAccountInfo", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Gets all bans for a user.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/getuserbans
     */
    GetUserBans (request: GetUserBansRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetUserBansResult>("/Server/GetUserBans", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Retrieves the title-specific custom data for the user which is readable and writable by the client
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/getuserdata
     */
    GetUserData (request: GetUserDataRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetUserDataResult>("/Server/GetUserData", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Retrieves the title-specific custom data for the user which cannot be accessed by the client
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/getuserinternaldata
     */
    GetUserInternalData (request: GetUserDataRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetUserDataResult>("/Server/GetUserInternalData", request, "X-SecretKey", extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Retrieves the specified user's current inventory of virtual goods
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/getuserinventory
     */
    GetUserInventory (request: GetUserInventoryRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetUserInventoryResult>("/Server/GetUserInventory", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Retrieves the publisher-specific custom data for the user which is readable and writable by the client
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/getuserpublisherdata
     */
    GetUserPublisherData (request: GetUserDataRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetUserDataResult>("/Server/GetUserPublisherData", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Retrieves the publisher-specific custom data for the user which cannot be accessed by the client
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/getuserpublisherinternaldata
     */
    GetUserPublisherInternalData (request: GetUserDataRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetUserDataResult>("/Server/GetUserPublisherInternalData", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Retrieves the publisher-specific custom data for the user which can only be read by the client
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/getuserpublisherreadonlydata
     */
    GetUserPublisherReadOnlyData (request: GetUserDataRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetUserDataResult>("/Server/GetUserPublisherReadOnlyData", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Retrieves the title-specific custom data for the user which can only be read by the client
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/getuserreadonlydata
     */
    GetUserReadOnlyData (request: GetUserDataRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetUserDataResult>("/Server/GetUserReadOnlyData", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Grants the specified character type to the user. CharacterIds are not globally unique; characterId must be evaluated
     * with the parent PlayFabId to guarantee uniqueness.
     * https://docs.microsoft.com/rest/api/playfab/server/characters/grantcharactertouser
     */
    GrantCharacterToUser (request: GrantCharacterToUserRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GrantCharacterToUserResult>("/Server/GrantCharacterToUser", request, "X-SecretKey", extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Adds the specified items to the specified character's inventory
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/grantitemstocharacter
     */
    GrantItemsToCharacter (request: GrantItemsToCharacterRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GrantItemsToCharacterResult>("/Server/GrantItemsToCharacter", request, "X-SecretKey", extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Adds the specified items to the specified user's inventory
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/grantitemstouser
     */
    GrantItemsToUser (request: GrantItemsToUserRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GrantItemsToUserResult>("/Server/GrantItemsToUser", request, "X-SecretKey", extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Adds the specified items to the specified user inventories
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/grantitemstousers
     */
    GrantItemsToUsers (request: GrantItemsToUsersRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GrantItemsToUsersResult>("/Server/GrantItemsToUsers", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Links the Battle.net account associated with the token to the user's PlayFab account.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/linkbattlenetaccount
     */
    LinkBattleNetAccount (request: LinkBattleNetAccountRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResult>("/Server/LinkBattleNetAccount", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Links the Nintendo account associated with the token to the user's PlayFab account
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/linknintendoserviceaccount
     */
    LinkNintendoServiceAccount (request: LinkNintendoServiceAccountRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResult>("/Server/LinkNintendoServiceAccount", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Links the Nintendo account associated with the Nintendo Service Account subject or id to the user's PlayFab account
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/linknintendoserviceaccountsubject
     */
    LinkNintendoServiceAccountSubject (request: LinkNintendoServiceAccountSubjectRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResult>("/Server/LinkNintendoServiceAccountSubject", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Links the NintendoSwitchDeviceId to the user's PlayFab account
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/linknintendoswitchdeviceid
     */
    LinkNintendoSwitchDeviceId (request: LinkNintendoSwitchDeviceIdRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<LinkNintendoSwitchDeviceIdResult>("/Server/LinkNintendoSwitchDeviceId", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Links the PlayStation :tm: Network account associated with the provided access code to the user's PlayFab account
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/linkpsnaccount
     */
    LinkPSNAccount (request: LinkPSNAccountRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<LinkPSNAccountResult>("/Server/LinkPSNAccount", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Links the PlayStation :tm: Network account associated with the provided user id to the user's PlayFab account
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/linkpsnid
     */
    LinkPSNId (request: LinkPSNIdRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<LinkPSNIdResponse>("/Server/LinkPSNId", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Links the custom server identifier, generated by the title, to the user's PlayFab account.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/linkservercustomid
     */
    LinkServerCustomId (request: LinkServerCustomIdRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<LinkServerCustomIdResult>("/Server/LinkServerCustomId", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Links the Steam account associated with the provided Steam ID to the user's PlayFab account
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/linksteamid
     */
    LinkSteamId (request: LinkSteamIdRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<LinkSteamIdResult>("/Server/LinkSteamId", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Links the Xbox Live account associated with the provided access code to the user's PlayFab account
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/linkxboxaccount
     */
    LinkXboxAccount (request: LinkXboxAccountRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<LinkXboxAccountResult>("/Server/LinkXboxAccount", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Retrieves title-specific custom property values for a player.
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/listplayercustomproperties
     */
    ListPlayerCustomProperties (request: ListPlayerCustomPropertiesRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ListPlayerCustomPropertiesResult>("/Server/ListPlayerCustomProperties", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Signs the user in using the Android device identifier, returning a session identifier that can subsequently be used for
     * API calls which require an authenticated user
     * https://docs.microsoft.com/rest/api/playfab/server/authentication/loginwithandroiddeviceid
     */
    LoginWithAndroidDeviceID (request: LoginWithAndroidDeviceIDRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ServerLoginResult>("/Server/LoginWithAndroidDeviceID", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Sign in the user with a Battle.net identity token
     * https://docs.microsoft.com/rest/api/playfab/server/authentication/loginwithbattlenet
     */
    LoginWithBattleNet (request: LoginWithBattleNetRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ServerLoginResult>("/Server/LoginWithBattleNet", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Signs the user in using a custom unique identifier generated by the title, returning a session identifier that can
     * subsequently be used for API calls which require an authenticated user
     * https://docs.microsoft.com/rest/api/playfab/server/authentication/loginwithcustomid
     */
    LoginWithCustomID (request: LoginWithCustomIDRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ServerLoginResult>("/Server/LoginWithCustomID", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Signs the user in using the iOS device identifier, returning a session identifier that can subsequently be used for API
     * calls which require an authenticated user
     * https://docs.microsoft.com/rest/api/playfab/server/authentication/loginwithiosdeviceid
     */
    LoginWithIOSDeviceID (request: LoginWithIOSDeviceIDRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ServerLoginResult>("/Server/LoginWithIOSDeviceID", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Signs the user in using a PlayStation :tm: Network authentication code, returning a session identifier that can
     * subsequently be used for API calls which require an authenticated user
     * https://docs.microsoft.com/rest/api/playfab/server/authentication/loginwithpsn
     */
    LoginWithPSN (request: LoginWithPSNRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ServerLoginResult>("/Server/LoginWithPSN", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Securely login a game client from an external server backend using a custom identifier for that player. Server Custom ID
     * and Client Custom ID are mutually exclusive and cannot be used to retrieve the same player account.
     * https://docs.microsoft.com/rest/api/playfab/server/authentication/loginwithservercustomid
     */
    LoginWithServerCustomId (request: LoginWithServerCustomIdRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ServerLoginResult>("/Server/LoginWithServerCustomId", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Signs the user in using an Steam ID, returning a session identifier that can subsequently be used for API calls which
     * require an authenticated user
     * https://docs.microsoft.com/rest/api/playfab/server/authentication/loginwithsteamid
     */
    LoginWithSteamId (request: LoginWithSteamIdRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ServerLoginResult>("/Server/LoginWithSteamId", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Signs the user in using a Xbox Live Token from an external server backend, returning a session identifier that can
     * subsequently be used for API calls which require an authenticated user
     * https://docs.microsoft.com/rest/api/playfab/server/authentication/loginwithxbox
     */
    LoginWithXbox (request: LoginWithXboxRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ServerLoginResult>("/Server/LoginWithXbox", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Signs the user in using an Xbox ID and Sandbox ID, returning a session identifier that can subsequently be used for API
     * calls which require an authenticated user
     * https://docs.microsoft.com/rest/api/playfab/server/authentication/loginwithxboxid
     */
    LoginWithXboxId (request: LoginWithXboxIdRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ServerLoginResult>("/Server/LoginWithXboxId", request, "X-SecretKey", extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Modifies the number of remaining uses of a player's inventory item
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/modifyitemuses
     */
    ModifyItemUses (request: ModifyItemUsesRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ModifyItemUsesResult>("/Server/ModifyItemUses", request, "X-SecretKey", extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Moves an item from a character's inventory into another of the users's character's inventory.
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/moveitemtocharacterfromcharacter
     */
    MoveItemToCharacterFromCharacter (request: MoveItemToCharacterFromCharacterRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<MoveItemToCharacterFromCharacterResult>("/Server/MoveItemToCharacterFromCharacter", request, "X-SecretKey", extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Moves an item from a user's inventory into their character's inventory.
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/moveitemtocharacterfromuser
     */
    MoveItemToCharacterFromUser (request: MoveItemToCharacterFromUserRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<MoveItemToCharacterFromUserResult>("/Server/MoveItemToCharacterFromUser", request, "X-SecretKey", extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Moves an item from a character's inventory into the owning user's inventory.
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/moveitemtouserfromcharacter
     */
    MoveItemToUserFromCharacter (request: MoveItemToUserFromCharacterRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<MoveItemToUserFromCharacterResult>("/Server/MoveItemToUserFromCharacter", request, "X-SecretKey", extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Adds the virtual goods associated with the coupon to the user's inventory. Coupons can be generated via the
     * Economy->Catalogs tab in the PlayFab Game Manager.
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/redeemcoupon
     */
    RedeemCoupon (request: RedeemCouponRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<RedeemCouponResult>("/Server/RedeemCoupon", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Removes the specified friend from the the user's friend list
     * https://docs.microsoft.com/rest/api/playfab/server/friend-list-management/removefriend
     */
    RemoveFriend (request: RemoveFriendRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/Server/RemoveFriend", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Removes the specified generic service identifier from the player's PlayFab account.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/removegenericid
     */
    RemoveGenericID (request: RemoveGenericIDRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResult>("/Server/RemoveGenericID", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Remove a given tag from a player profile. The tag's namespace is automatically generated based on the source of the tag.
     * https://docs.microsoft.com/rest/api/playfab/server/playstream/removeplayertag
     */
    RemovePlayerTag (request: RemovePlayerTagRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<RemovePlayerTagResult>("/Server/RemovePlayerTag", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Removes users from the set of those able to update the shared data and the set of users in the group. Only users in the
     * group can remove members. If as a result of the call, zero users remain with access, the group and its associated data
     * will be deleted. Shared Groups are designed for sharing data between a very small number of players, please see our
     * guide: https://docs.microsoft.com/gaming/playfab/features/social/groups/using-shared-group-data
     * https://docs.microsoft.com/rest/api/playfab/server/shared-group-data/removesharedgroupmembers
     */
    RemoveSharedGroupMembers (request: RemoveSharedGroupMembersRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<RemoveSharedGroupMembersResult>("/Server/RemoveSharedGroupMembers", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Submit a report about a player (due to bad bahavior, etc.) on behalf of another player, so that customer service
     * representatives for the title can take action concerning potentially toxic players.
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/reportplayer
     */
    ReportPlayer (request: ReportPlayerServerRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ReportPlayerServerResult>("/Server/ReportPlayer", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Revoke all active bans for a user.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/revokeallbansforuser
     */
    RevokeAllBansForUser (request: RevokeAllBansForUserRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<RevokeAllBansForUserResult>("/Server/RevokeAllBansForUser", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Revoke all active bans specified with BanId.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/revokebans
     */
    RevokeBans (request: RevokeBansRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<RevokeBansResult>("/Server/RevokeBans", request, "X-SecretKey", extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Revokes access to an item in a user's inventory
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/revokeinventoryitem
     */
    RevokeInventoryItem (request: RevokeInventoryItemRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<RevokeInventoryResult>("/Server/RevokeInventoryItem", request, "X-SecretKey", extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Revokes access for up to 25 items across multiple users and characters.
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/revokeinventoryitems
     */
    RevokeInventoryItems (request: RevokeInventoryItemsRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<RevokeInventoryItemsResult>("/Server/RevokeInventoryItems", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Saves push notification template for title
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/savepushnotificationtemplate
     */
    SavePushNotificationTemplate (request: SavePushNotificationTemplateRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<SavePushNotificationTemplateResult>("/Server/SavePushNotificationTemplate", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Forces an email to be sent to the registered contact email address for the user's account based on an account recovery
     * email template
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/sendcustomaccountrecoveryemail
     */
    SendCustomAccountRecoveryEmail (request: SendCustomAccountRecoveryEmailRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<SendCustomAccountRecoveryEmailResult>("/Server/SendCustomAccountRecoveryEmail", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Sends an email based on an email template to a player's contact email
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/sendemailfromtemplate
     */
    SendEmailFromTemplate (request: SendEmailFromTemplateRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<SendEmailFromTemplateResult>("/Server/SendEmailFromTemplate", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Sends an iOS/Android Push Notification to a specific user, if that user's device has been configured for Push
     * Notifications in PlayFab. If a user has linked both Android and iOS devices, both will be notified.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/sendpushnotification
     */
    SendPushNotification (request: SendPushNotificationRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<SendPushNotificationResult>("/Server/SendPushNotification", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Sends an iOS/Android Push Notification template to a specific user, if that user's device has been configured for Push
     * Notifications in PlayFab. If a user has linked both Android and iOS devices, both will be notified.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/sendpushnotificationfromtemplate
     */
    SendPushNotificationFromTemplate (request: SendPushNotificationFromTemplateRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<SendPushNotificationResult>("/Server/SendPushNotificationFromTemplate", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Updates the tag list for a specified user in the friend list of another user
     * https://docs.microsoft.com/rest/api/playfab/server/friend-list-management/setfriendtags
     */
    SetFriendTags (request: SetFriendTagsRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/Server/SetFriendTags", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Sets the player's secret if it is not already set. Player secrets are used to sign API requests. To reset a player's
     * secret use the Admin or Server API method SetPlayerSecret.
     * https://docs.microsoft.com/rest/api/playfab/server/authentication/setplayersecret
     */
    SetPlayerSecret (request: SetPlayerSecretRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<SetPlayerSecretResult>("/Server/SetPlayerSecret", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Updates the key-value store of custom publisher settings
     * https://docs.microsoft.com/rest/api/playfab/server/title-wide-data-management/setpublisherdata
     */
    SetPublisherData (request: SetPublisherDataRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<SetPublisherDataResult>("/Server/SetPublisherData", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Updates the key-value store of custom title settings
     * https://docs.microsoft.com/rest/api/playfab/server/title-wide-data-management/settitledata
     */
    SetTitleData (request: SetTitleDataRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<SetTitleDataResult>("/Server/SetTitleData", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Updates the key-value store of custom title settings
     * https://docs.microsoft.com/rest/api/playfab/server/title-wide-data-management/settitleinternaldata
     */
    SetTitleInternalData (request: SetTitleDataRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<SetTitleDataResult>("/Server/SetTitleInternalData", request, "X-SecretKey", extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Decrements the character's balance of the specified virtual currency by the stated amount. It is possible to
     * make a VC balance negative with this API.
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/subtractcharactervirtualcurrency
     */
    SubtractCharacterVirtualCurrency (request: SubtractCharacterVirtualCurrencyRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ModifyCharacterVirtualCurrencyResult>("/Server/SubtractCharacterVirtualCurrency", request, "X-SecretKey", extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Decrements the user's balance of the specified virtual currency by the stated amount. It is possible to make
     * a VC balance negative with this API.
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/subtractuservirtualcurrency
     */
    SubtractUserVirtualCurrency (request: SubtractUserVirtualCurrencyRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ModifyUserVirtualCurrencyResult>("/Server/SubtractUserVirtualCurrency", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Unlinks the related Battle.net account from the user's PlayFab account.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/unlinkbattlenetaccount
     */
    UnlinkBattleNetAccount (request: UnlinkBattleNetAccountRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/Server/UnlinkBattleNetAccount", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Unlinks the related Nintendo account from the user's PlayFab account
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/unlinknintendoserviceaccount
     */
    UnlinkNintendoServiceAccount (request: UnlinkNintendoServiceAccountRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/Server/UnlinkNintendoServiceAccount", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Unlinks the related NintendoSwitchDeviceId from the user's PlayFab account
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/unlinknintendoswitchdeviceid
     */
    UnlinkNintendoSwitchDeviceId (request: UnlinkNintendoSwitchDeviceIdRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UnlinkNintendoSwitchDeviceIdResult>("/Server/UnlinkNintendoSwitchDeviceId", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Unlinks the related PlayStation :tm: Network account from the user's PlayFab account
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/unlinkpsnaccount
     */
    UnlinkPSNAccount (request: UnlinkPSNAccountRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UnlinkPSNAccountResult>("/Server/UnlinkPSNAccount", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Unlinks the custom server identifier from the user's PlayFab account.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/unlinkservercustomid
     */
    UnlinkServerCustomId (request: UnlinkServerCustomIdRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UnlinkServerCustomIdResult>("/Server/UnlinkServerCustomId", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Unlinks the Steam account associated with the provided Steam ID to the user's PlayFab account
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/unlinksteamid
     */
    UnlinkSteamId (request: UnlinkSteamIdRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UnlinkSteamIdResult>("/Server/UnlinkSteamId", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Unlinks the related Xbox Live account from the user's PlayFab account
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/unlinkxboxaccount
     */
    UnlinkXboxAccount (request: UnlinkXboxAccountRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UnlinkXboxAccountResult>("/Server/UnlinkXboxAccount", request, "X-SecretKey", extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Opens a specific container (ContainerItemInstanceId), with a specific key (KeyItemInstanceId, when
     * required), and returns the contents of the opened container. If the container (and key when relevant) are consumable
     * (RemainingUses > 0), their RemainingUses will be decremented, consistent with the operation of ConsumeItem.
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/unlockcontainerinstance
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
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/unlockcontaineritem
     */
    UnlockContainerItem (request: UnlockContainerItemRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UnlockContainerItemResult>("/Server/UnlockContainerItem", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Update the avatar URL of the specified player
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/updateavatarurl
     */
    UpdateAvatarUrl (request: UpdateAvatarUrlRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/Server/UpdateAvatarUrl", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Updates information of a list of existing bans specified with Ban Ids.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/updatebans
     */
    UpdateBans (request: UpdateBansRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UpdateBansResult>("/Server/UpdateBans", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Updates the title-specific custom data for the user's character which is readable and writable by the client
     * https://docs.microsoft.com/rest/api/playfab/server/character-data/updatecharacterdata
     */
    UpdateCharacterData (request: UpdateCharacterDataRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UpdateCharacterDataResult>("/Server/UpdateCharacterData", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Updates the title-specific custom data for the user's character which cannot be accessed by the client
     * https://docs.microsoft.com/rest/api/playfab/server/character-data/updatecharacterinternaldata
     */
    UpdateCharacterInternalData (request: UpdateCharacterDataRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UpdateCharacterDataResult>("/Server/UpdateCharacterInternalData", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Updates the title-specific custom data for the user's character which can only be read by the client
     * https://docs.microsoft.com/rest/api/playfab/server/character-data/updatecharacterreadonlydata
     */
    UpdateCharacterReadOnlyData (request: UpdateCharacterDataRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UpdateCharacterDataResult>("/Server/UpdateCharacterReadOnlyData", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Updates the values of the specified title-specific statistics for the specific character
     * https://docs.microsoft.com/rest/api/playfab/server/characters/updatecharacterstatistics
     */
    UpdateCharacterStatistics (request: UpdateCharacterStatisticsRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UpdateCharacterStatisticsResult>("/Server/UpdateCharacterStatistics", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Updates the title-specific custom property values for a player
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/updateplayercustomproperties
     */
    UpdatePlayerCustomProperties (request: UpdatePlayerCustomPropertiesRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UpdatePlayerCustomPropertiesResult>("/Server/UpdatePlayerCustomProperties", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Updates the values of the specified title-specific statistics for the user
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/updateplayerstatistics
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
     * https://docs.microsoft.com/rest/api/playfab/server/shared-group-data/updatesharedgroupdata
     */
    UpdateSharedGroupData (request: UpdateSharedGroupDataRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UpdateSharedGroupDataResult>("/Server/UpdateSharedGroupData", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Updates the title-specific custom data for the user which is readable and writable by the client
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/updateuserdata
     */
    UpdateUserData (request: UpdateUserDataRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UpdateUserDataResult>("/Server/UpdateUserData", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Updates the title-specific custom data for the user which cannot be accessed by the client
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/updateuserinternaldata
     */
    UpdateUserInternalData (request: UpdateUserInternalDataRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UpdateUserDataResult>("/Server/UpdateUserInternalData", request, "X-SecretKey", extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Updates the key-value pair data tagged to the specified item, which is read-only from the client.
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/updateuserinventoryitemcustomdata
     */
    UpdateUserInventoryItemCustomData (request: UpdateUserInventoryItemDataRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/Server/UpdateUserInventoryItemCustomData", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Updates the publisher-specific custom data for the user which is readable and writable by the client
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/updateuserpublisherdata
     */
    UpdateUserPublisherData (request: UpdateUserDataRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UpdateUserDataResult>("/Server/UpdateUserPublisherData", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Updates the publisher-specific custom data for the user which cannot be accessed by the client
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/updateuserpublisherinternaldata
     */
    UpdateUserPublisherInternalData (request: UpdateUserInternalDataRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UpdateUserDataResult>("/Server/UpdateUserPublisherInternalData", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Updates the publisher-specific custom data for the user which can only be read by the client
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/updateuserpublisherreadonlydata
     */
    UpdateUserPublisherReadOnlyData (request: UpdateUserDataRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UpdateUserDataResult>("/Server/UpdateUserPublisherReadOnlyData", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Updates the title-specific custom data for the user which can only be read by the client
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/updateuserreadonlydata
     */
    UpdateUserReadOnlyData (request: UpdateUserDataRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UpdateUserDataResult>("/Server/UpdateUserReadOnlyData", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Writes a character-based event into PlayStream.
     * https://docs.microsoft.com/rest/api/playfab/server/analytics/writecharacterevent
     */
    WriteCharacterEvent (request: WriteServerCharacterEventRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<WriteEventResponse>("/Server/WriteCharacterEvent", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Writes a player-based event into PlayStream.
     * https://docs.microsoft.com/rest/api/playfab/server/analytics/writeplayerevent
     */
    WritePlayerEvent (request: WriteServerPlayerEventRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<WriteEventResponse>("/Server/WritePlayerEvent", request, "X-SecretKey", extraHeaders);
    }

    /**
     * Writes a title-based event into PlayStream.
     * https://docs.microsoft.com/rest/api/playfab/server/analytics/writetitleevent
     */
    WriteTitleEvent (request: WriteTitleEventRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<WriteEventResponse>("/Server/WriteTitleEvent", request, "X-SecretKey", extraHeaders);
    }

};
