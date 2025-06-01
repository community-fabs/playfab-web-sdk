import type { EmptyResponse } from "../types/PlayFab";
import type {

  AcceptTradeRequest,
  AddFriendRequest,
  AddGenericIDRequest,
  AddOrUpdateContactEmailRequest,
  AddSharedGroupMembersRequest,
  AddUsernamePasswordRequest,
  AddUserVirtualCurrencyRequest,
  AndroidDevicePushNotificationRegistrationRequest,
  AttributeInstallRequest,
  CancelTradeRequest,
  ConfirmPurchaseRequest,
  ConsumeItemRequest,
  ConsumeMicrosoftStoreEntitlementsRequest,
  ConsumePS5EntitlementsRequest,
  ConsumePSNEntitlementsRequest,
  ConsumeXboxEntitlementsRequest,
  CreateSharedGroupRequest,
  DeletePlayerCustomPropertiesRequest,
  ExecuteCloudScriptRequest,
  GetAccountInfoRequest,
  GetAdPlacementsRequest,
  ListUsersCharactersRequest,
  GetCatalogItemsRequest,
  GetCharacterDataRequest,
  GetCharacterInventoryRequest,
  GetCharacterLeaderboardRequest,
  GetCharacterStatisticsRequest,
  GetContentDownloadUrlRequest,
  GetFriendLeaderboardRequest,
  GetFriendLeaderboardAroundPlayerRequest,
  GetFriendsListRequest,
  GetLeaderboardRequest,
  GetLeaderboardAroundCharacterRequest,
  GetLeaderboardAroundPlayerRequest,
  GetLeaderboardForUsersCharactersRequest,
  GetPaymentTokenRequest,
  GetPhotonAuthenticationTokenRequest,
  GetPlayerCombinedInfoRequest,
  GetPlayerCustomPropertyRequest,
  GetPlayerProfileRequest,
  GetPlayerSegmentsRequest,
  GetPlayerStatisticsRequest,
  GetPlayerStatisticVersionsRequest,
  GetPlayerTagsRequest,
  GetPlayerTradesRequest,
  GetPlayFabIDsFromBattleNetAccountIdsRequest,
  GetPlayFabIDsFromFacebookIDsRequest,
  GetPlayFabIDsFromFacebookInstantGamesIdsRequest,
  GetPlayFabIDsFromGameCenterIDsRequest,
  GetPlayFabIDsFromGenericIDsRequest,
  GetPlayFabIDsFromGoogleIDsRequest,
  GetPlayFabIDsFromGooglePlayGamesPlayerIDsRequest,
  GetPlayFabIDsFromKongregateIDsRequest,
  GetPlayFabIDsFromNintendoServiceAccountIdsRequest,
  GetPlayFabIDsFromNintendoSwitchDeviceIdsRequest,
  GetPlayFabIDsFromPSNAccountIDsRequest,
  GetPlayFabIDsFromPSNOnlineIDsRequest,
  GetPlayFabIDsFromSteamIDsRequest,
  GetPlayFabIDsFromSteamNamesRequest,
  GetPlayFabIDsFromTwitchIDsRequest,
  GetPlayFabIDsFromXboxLiveIDsRequest,
  GetPublisherDataRequest,
  GetPurchaseRequest,
  GetSharedGroupDataRequest,
  GetStoreItemsRequest,
  GetTimeRequest,
  GetTitleDataRequest,
  GetTitleNewsRequest,
  GetTitlePublicKeyRequest,
  GetTradeStatusRequest,
  GetUserDataRequest,
  GetUserInventoryRequest,
  GrantCharacterToUserRequest,
  LinkAndroidDeviceIDRequest,
  LinkAppleRequest,
  LinkBattleNetAccountRequest,
  LinkCustomIDRequest,
  LinkFacebookAccountRequest,
  LinkFacebookInstantGamesIdRequest,
  LinkGameCenterAccountRequest,
  LinkGoogleAccountRequest,
  LinkGooglePlayGamesServicesAccountRequest,
  LinkIOSDeviceIDRequest,
  LinkKongregateAccountRequest,
  LinkNintendoServiceAccountRequest,
  LinkNintendoSwitchDeviceIdRequest,
  LinkOpenIdConnectRequest,
  LinkPSNAccountRequest,
  LinkSteamAccountRequest,
  LinkTwitchAccountRequest,
  LinkXboxAccountRequest,
  ListPlayerCustomPropertiesRequest,
  LoginWithAndroidDeviceIDRequest,
  LoginWithAppleRequest,
  LoginWithBattleNetRequest,
  LoginWithCustomIDRequest,
  LoginWithEmailAddressRequest,
  LoginWithFacebookRequest,
  LoginWithFacebookInstantGamesIdRequest,
  LoginWithGameCenterRequest,
  LoginWithGoogleAccountRequest,
  LoginWithGooglePlayGamesServicesRequest,
  LoginWithIOSDeviceIDRequest,
  LoginWithKongregateRequest,
  LoginWithNintendoServiceAccountRequest,
  LoginWithNintendoSwitchDeviceIdRequest,
  LoginWithOpenIdConnectRequest,
  LoginWithPlayFabRequest,
  LoginWithPSNRequest,
  LoginWithSteamRequest,
  LoginWithTwitchRequest,
  LoginWithXboxRequest,
  OpenTradeRequest,
  PayForPurchaseRequest,
  PurchaseItemRequest,
  RedeemCouponRequest,
  RefreshPSNAuthTokenRequest,
  RegisterForIOSPushNotificationRequest,
  RegisterPlayFabUserRequest,
  RemoveContactEmailRequest,
  RemoveFriendRequest,
  RemoveGenericIDRequest,
  RemoveSharedGroupMembersRequest,
  ReportAdActivityRequest,
  DeviceInfoRequest,
  ReportPlayerClientRequest,
  RestoreIOSPurchasesRequest,
  RewardAdActivityRequest,
  SendAccountRecoveryEmailRequest,
  SetFriendTagsRequest,
  SetPlayerSecretRequest,
  StartPurchaseRequest,
  SubtractUserVirtualCurrencyRequest,
  UnlinkAndroidDeviceIDRequest,
  UnlinkAppleRequest,
  UnlinkBattleNetAccountRequest,
  UnlinkCustomIDRequest,
  UnlinkFacebookAccountRequest,
  UnlinkFacebookInstantGamesIdRequest,
  UnlinkGameCenterAccountRequest,
  UnlinkGoogleAccountRequest,
  UnlinkGooglePlayGamesServicesAccountRequest,
  UnlinkIOSDeviceIDRequest,
  UnlinkKongregateAccountRequest,
  UnlinkNintendoServiceAccountRequest,
  UnlinkNintendoSwitchDeviceIdRequest,
  UnlinkOpenIdConnectRequest,
  UnlinkPSNAccountRequest,
  UnlinkSteamAccountRequest,
  UnlinkTwitchAccountRequest,
  UnlinkXboxAccountRequest,
  UnlockContainerInstanceRequest,
  UnlockContainerItemRequest,
  UpdateAvatarUrlRequest,
  UpdateCharacterDataRequest,
  UpdateCharacterStatisticsRequest,
  UpdatePlayerCustomPropertiesRequest,
  UpdatePlayerStatisticsRequest,
  UpdateSharedGroupDataRequest,
  UpdateUserDataRequest,
  UpdateUserTitleDisplayNameRequest,
  ValidateAmazonReceiptRequest,
  ValidateGooglePlayPurchaseRequest,
  ValidateIOSReceiptRequest,
  ValidateWindowsReceiptRequest,
  WriteClientCharacterEventRequest,
  WriteClientPlayerEventRequest,
  WriteTitleEventRequest,
  AcceptTradeResponse,
  AddFriendResult,
  AddGenericIDResult,
  AddOrUpdateContactEmailResult,
  AddSharedGroupMembersResult,
  AddUsernamePasswordResult,
  ModifyUserVirtualCurrencyResult,
  AndroidDevicePushNotificationRegistrationResult,
  AttributeInstallResult,
  CancelTradeResponse,
  ConfirmPurchaseResult,
  ConsumeItemResult,
  ConsumeMicrosoftStoreEntitlementsResponse,
  ConsumePS5EntitlementsResult,
  ConsumePSNEntitlementsResult,
  ConsumeXboxEntitlementsResult,
  CreateSharedGroupResult,
  DeletePlayerCustomPropertiesResult,
  ExecuteCloudScriptResult,
  GetAccountInfoResult,
  GetAdPlacementsResult,
  ListUsersCharactersResult,
  GetCatalogItemsResult,
  GetCharacterDataResult,
  GetCharacterInventoryResult,
  GetCharacterLeaderboardResult,
  GetCharacterStatisticsResult,
  GetContentDownloadUrlResult,
  GetLeaderboardResult,
  GetFriendLeaderboardAroundPlayerResult,
  GetFriendsListResult,
  GetLeaderboardAroundCharacterResult,
  GetLeaderboardAroundPlayerResult,
  GetLeaderboardForUsersCharactersResult,
  GetPaymentTokenResult,
  GetPhotonAuthenticationTokenResult,
  GetPlayerCombinedInfoResult,
  GetPlayerCustomPropertyResult,
  GetPlayerProfileResult,
  GetPlayerSegmentsResult,
  GetPlayerStatisticsResult,
  GetPlayerStatisticVersionsResult,
  GetPlayerTagsResult,
  GetPlayerTradesResponse,
  GetPlayFabIDsFromBattleNetAccountIdsResult,
  GetPlayFabIDsFromFacebookIDsResult,
  GetPlayFabIDsFromFacebookInstantGamesIdsResult,
  GetPlayFabIDsFromGameCenterIDsResult,
  GetPlayFabIDsFromGenericIDsResult,
  GetPlayFabIDsFromGoogleIDsResult,
  GetPlayFabIDsFromGooglePlayGamesPlayerIDsResult,
  GetPlayFabIDsFromKongregateIDsResult,
  GetPlayFabIDsFromNintendoServiceAccountIdsResult,
  GetPlayFabIDsFromNintendoSwitchDeviceIdsResult,
  GetPlayFabIDsFromPSNAccountIDsResult,
  GetPlayFabIDsFromPSNOnlineIDsResult,
  GetPlayFabIDsFromSteamIDsResult,
  GetPlayFabIDsFromSteamNamesResult,
  GetPlayFabIDsFromTwitchIDsResult,
  GetPlayFabIDsFromXboxLiveIDsResult,
  GetPublisherDataResult,
  GetPurchaseResult,
  GetSharedGroupDataResult,
  GetStoreItemsResult,
  GetTimeResult,
  GetTitleDataResult,
  GetTitleNewsResult,
  GetTitlePublicKeyResult,
  GetTradeStatusResponse,
  GetUserDataResult,
  GetUserInventoryResult,
  GrantCharacterToUserResult,
  LinkAndroidDeviceIDResult,
  EmptyResult,
  LinkCustomIDResult,
  LinkFacebookAccountResult,
  LinkFacebookInstantGamesIdResult,
  LinkGameCenterAccountResult,
  LinkGoogleAccountResult,
  LinkGooglePlayGamesServicesAccountResult,
  LinkIOSDeviceIDResult,
  LinkKongregateAccountResult,
  LinkNintendoSwitchDeviceIdResult,
  LinkPSNAccountResult,
  LinkSteamAccountResult,
  LinkTwitchAccountResult,
  LinkXboxAccountResult,
  ListPlayerCustomPropertiesResult,
  LoginResult,
  OpenTradeResponse,
  PayForPurchaseResult,
  PurchaseItemResult,
  RedeemCouponResult,
  RegisterForIOSPushNotificationResult,
  RegisterPlayFabUserResult,
  RemoveContactEmailResult,
  RemoveFriendResult,
  RemoveGenericIDResult,
  RemoveSharedGroupMembersResult,
  ReportAdActivityResult,
  ReportPlayerClientResult,
  RestoreIOSPurchasesResult,
  RewardAdActivityResult,
  SendAccountRecoveryEmailResult,
  SetFriendTagsResult,
  SetPlayerSecretResult,
  StartPurchaseResult,
  UnlinkAndroidDeviceIDResult,
  UnlinkCustomIDResult,
  UnlinkFacebookAccountResult,
  UnlinkFacebookInstantGamesIdResult,
  UnlinkGameCenterAccountResult,
  UnlinkGoogleAccountResult,
  UnlinkGooglePlayGamesServicesAccountResult,
  UnlinkIOSDeviceIDResult,
  UnlinkKongregateAccountResult,
  UnlinkNintendoSwitchDeviceIdResult,
  UnlinkPSNAccountResult,
  UnlinkSteamAccountResult,
  UnlinkTwitchAccountResult,
  UnlinkXboxAccountResult,
  UnlockContainerItemResult,
  UpdateCharacterDataResult,
  UpdateCharacterStatisticsResult,
  UpdatePlayerCustomPropertiesResult,
  UpdatePlayerStatisticsResult,
  UpdateSharedGroupDataResult,
  UpdateUserDataResult,
  UpdateUserTitleDisplayNameResult,
  ValidateAmazonReceiptResult,
  ValidateGooglePlayPurchaseResult,
  ValidateIOSReceiptResult,
  ValidateWindowsReceiptResult,
  WriteEventResponse,
} from "../types/PlayFabClientApi";
import { PlayFabCommon } from "../PlayFabCommon";

export default class PlayFabClientApi extends PlayFabCommon {

    IsClientLoggedIn () {
        return this.sessionTicket != null && this.sessionTicket.length > 0;
    }

    /**
     * Accepts an open trade (one that has not yet been accepted or cancelled), if the locally signed-in player is in the
     * allowed player list for the trade, or it is open to all players. If the call is successful, the offered and accepted
     * items will be swapped between the two players' inventories.
     * https://docs.microsoft.com/rest/api/playfab/client/trading/accepttrade
     */
    AcceptTrade (request: AcceptTradeRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<AcceptTradeResponse>("/Client/AcceptTrade", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Adds the PlayFab user, based upon a match against a supplied unique identifier, to the friend list of the local user. At
     * least one of FriendPlayFabId,FriendUsername,FriendEmail, or FriendTitleDisplayName should be initialized.
     * https://docs.microsoft.com/rest/api/playfab/client/friend-list-management/addfriend
     */
    AddFriend (request: AddFriendRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<AddFriendResult>("/Client/AddFriend", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Adds the specified generic service identifier to the player's PlayFab account. This is designed to allow for a PlayFab
     * ID lookup of any arbitrary service identifier a title wants to add. This identifier should never be used as
     * authentication credentials, as the intent is that it is easily accessible by other players.
     * https://docs.microsoft.com/rest/api/playfab/client/account-management/addgenericid
     */
    AddGenericID (request: AddGenericIDRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<AddGenericIDResult>("/Client/AddGenericID", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Adds or updates a contact email to the player's profile.
     * https://docs.microsoft.com/rest/api/playfab/client/account-management/addorupdatecontactemail
     */
    AddOrUpdateContactEmail (request: AddOrUpdateContactEmailRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<AddOrUpdateContactEmailResult>("/Client/AddOrUpdateContactEmail", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Adds users to the set of those able to update both the shared data, as well as the set of users in the group. Only users
     * in the group can add new members. Shared Groups are designed for sharing data between a very small number of players,
     * please see our guide: https://docs.microsoft.com/gaming/playfab/features/social/groups/using-shared-group-data
     * https://docs.microsoft.com/rest/api/playfab/client/shared-group-data/addsharedgroupmembers
     */
    AddSharedGroupMembers (request: AddSharedGroupMembersRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<AddSharedGroupMembersResult>("/Client/AddSharedGroupMembers", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Adds playfab username/password auth to an existing account created via an anonymous auth method, e.g. automatic device
     * ID login.
     * https://docs.microsoft.com/rest/api/playfab/client/account-management/addusernamepassword
     */
    AddUsernamePassword (request: AddUsernamePasswordRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<AddUsernamePasswordResult>("/Client/AddUsernamePassword", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Increments the user's balance of the specified virtual currency by the stated amount
     * https://docs.microsoft.com/rest/api/playfab/client/player-item-management/adduservirtualcurrency
     */
    AddUserVirtualCurrency (request: AddUserVirtualCurrencyRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ModifyUserVirtualCurrencyResult>("/Client/AddUserVirtualCurrency", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Registers the Android device to receive push notifications
     * https://docs.microsoft.com/rest/api/playfab/client/platform-specific-methods/androiddevicepushnotificationregistration
     */
    AndroidDevicePushNotificationRegistration (request: AndroidDevicePushNotificationRegistrationRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<AndroidDevicePushNotificationRegistrationResult>("/Client/AndroidDevicePushNotificationRegistration", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Attributes an install for advertisment.
     * https://docs.microsoft.com/rest/api/playfab/client/advertising/attributeinstall
     */
    AttributeInstall (request: AttributeInstallRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<AttributeInstallResult>("/Client/AttributeInstall", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Cancels an open trade (one that has not yet been accepted or cancelled). Note that only the player who created the trade
     * can cancel it via this API call, to prevent griefing of the trade system (cancelling trades in order to prevent other
     * players from accepting them, for trades that can be claimed by more than one player).
     * https://docs.microsoft.com/rest/api/playfab/client/trading/canceltrade
     */
    CancelTrade (request: CancelTradeRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<CancelTradeResponse>("/Client/CancelTrade", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Confirms with the payment provider that the purchase was approved (if applicable) and adjusts inventory and
     * virtual currency balances as appropriate
     * https://docs.microsoft.com/rest/api/playfab/client/player-item-management/confirmpurchase
     */
    ConfirmPurchase (request: ConfirmPurchaseRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ConfirmPurchaseResult>("/Client/ConfirmPurchase", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Consume uses of a consumable item. When all uses are consumed, it will be removed from the player's
     * inventory.
     * https://docs.microsoft.com/rest/api/playfab/client/player-item-management/consumeitem
     */
    ConsumeItem (request: ConsumeItemRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ConsumeItemResult>("/Client/ConsumeItem", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Grants the player's current entitlements from Microsoft Store's Collection API
     * https://docs.microsoft.com/rest/api/playfab/client/platform-specific-methods/consumemicrosoftstoreentitlements
     */
    ConsumeMicrosoftStoreEntitlements (request: ConsumeMicrosoftStoreEntitlementsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ConsumeMicrosoftStoreEntitlementsResponse>("/Client/ConsumeMicrosoftStoreEntitlements", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Checks for any new consumable entitlements. If any are found, they are consumed (if they're consumables) and added as
     * PlayFab items
     * https://docs.microsoft.com/rest/api/playfab/client/platform-specific-methods/consumeps5entitlements
     */
    ConsumePS5Entitlements (request: ConsumePS5EntitlementsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ConsumePS5EntitlementsResult>("/Client/ConsumePS5Entitlements", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Checks for any new consumable entitlements. If any are found, they are consumed and added as PlayFab items
     * https://docs.microsoft.com/rest/api/playfab/client/platform-specific-methods/consumepsnentitlements
     */
    ConsumePSNEntitlements (request: ConsumePSNEntitlementsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ConsumePSNEntitlementsResult>("/Client/ConsumePSNEntitlements", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Grants the player's current entitlements from Xbox Live, consuming all availble items in Xbox and granting them to the
     * player's PlayFab inventory. This call is idempotent and will not grant previously granted items to the player.
     * https://docs.microsoft.com/rest/api/playfab/client/platform-specific-methods/consumexboxentitlements
     */
    ConsumeXboxEntitlements (request: ConsumeXboxEntitlementsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ConsumeXboxEntitlementsResult>("/Client/ConsumeXboxEntitlements", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Requests the creation of a shared group object, containing key/value pairs which may be updated by all members of the
     * group. Upon creation, the current user will be the only member of the group. Shared Groups are designed for sharing data
     * between a very small number of players, please see our guide:
     * https://docs.microsoft.com/gaming/playfab/features/social/groups/using-shared-group-data
     * https://docs.microsoft.com/rest/api/playfab/client/shared-group-data/createsharedgroup
     */
    CreateSharedGroup (request: CreateSharedGroupRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<CreateSharedGroupResult>("/Client/CreateSharedGroup", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Deletes title-specific custom properties for a player
     * https://docs.microsoft.com/rest/api/playfab/client/player-data-management/deleteplayercustomproperties
     */
    DeletePlayerCustomProperties (request: DeletePlayerCustomPropertiesRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<DeletePlayerCustomPropertiesResult>("/Client/DeletePlayerCustomProperties", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Executes a CloudScript function, with the 'currentPlayerId' set to the PlayFab ID of the authenticated player. The
     * PlayFab ID is the entity ID of the player's master_player_account entity.
     * https://docs.microsoft.com/rest/api/playfab/client/server-side-cloud-script/executecloudscript
     */
    ExecuteCloudScript (request: ExecuteCloudScriptRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ExecuteCloudScriptResult>("/Client/ExecuteCloudScript", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Retrieves the user's PlayFab account details
     * https://docs.microsoft.com/rest/api/playfab/client/account-management/getaccountinfo
     */
    GetAccountInfo (request: GetAccountInfoRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetAccountInfoResult>("/Client/GetAccountInfo", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Returns a list of ad placements and a reward for each
     * https://docs.microsoft.com/rest/api/playfab/client/advertising/getadplacements
     */
    GetAdPlacements (request: GetAdPlacementsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetAdPlacementsResult>("/Client/GetAdPlacements", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Lists all of the characters that belong to a specific user. CharacterIds are not globally unique; characterId must be
     * evaluated with the parent PlayFabId to guarantee uniqueness.
     * https://docs.microsoft.com/rest/api/playfab/client/characters/getalluserscharacters
     */
    GetAllUsersCharacters (request: ListUsersCharactersRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ListUsersCharactersResult>("/Client/GetAllUsersCharacters", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Retrieves the specified version of the title's catalog of virtual goods, including all defined properties
     * https://docs.microsoft.com/rest/api/playfab/client/title-wide-data-management/getcatalogitems
     */
    GetCatalogItems (request: GetCatalogItemsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetCatalogItemsResult>("/Client/GetCatalogItems", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Retrieves the title-specific custom data for the character which is readable and writable by the client
     * https://docs.microsoft.com/rest/api/playfab/client/character-data/getcharacterdata
     */
    GetCharacterData (request: GetCharacterDataRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetCharacterDataResult>("/Client/GetCharacterData", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Retrieves the specified character's current inventory of virtual goods
     * https://docs.microsoft.com/rest/api/playfab/client/player-item-management/getcharacterinventory
     */
    GetCharacterInventory (request: GetCharacterInventoryRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetCharacterInventoryResult>("/Client/GetCharacterInventory", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Retrieves a list of ranked characters for the given statistic, starting from the indicated point in the leaderboard
     * https://docs.microsoft.com/rest/api/playfab/client/characters/getcharacterleaderboard
     */
    GetCharacterLeaderboard (request: GetCharacterLeaderboardRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetCharacterLeaderboardResult>("/Client/GetCharacterLeaderboard", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Retrieves the title-specific custom data for the character which can only be read by the client
     * https://docs.microsoft.com/rest/api/playfab/client/character-data/getcharacterreadonlydata
     */
    GetCharacterReadOnlyData (request: GetCharacterDataRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetCharacterDataResult>("/Client/GetCharacterReadOnlyData", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Retrieves the details of all title-specific statistics for the user
     * https://docs.microsoft.com/rest/api/playfab/client/characters/getcharacterstatistics
     */
    GetCharacterStatistics (request: GetCharacterStatisticsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetCharacterStatisticsResult>("/Client/GetCharacterStatistics", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * This API retrieves a pre-signed URL for accessing a content file for the title. A subsequent HTTP GET to the returned
     * URL will attempt to download the content. A HEAD query to the returned URL will attempt to retrieve the metadata of the
     * content. Note that a successful result does not guarantee the existence of this content - if it has not been uploaded,
     * the query to retrieve the data will fail. See this post for more information:
     * https://community.playfab.com/hc/community/posts/205469488-How-to-upload-files-to-PlayFab-s-Content-Service. Also,
     * please be aware that the Content service is specifically PlayFab's CDN offering, for which standard CDN rates apply.
     * https://docs.microsoft.com/rest/api/playfab/client/content/getcontentdownloadurl
     */
    GetContentDownloadUrl (request: GetContentDownloadUrlRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetContentDownloadUrlResult>("/Client/GetContentDownloadUrl", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Retrieves a list of ranked friends of the current player for the given statistic, starting from the indicated point in
     * the leaderboard
     * https://docs.microsoft.com/rest/api/playfab/client/player-data-management/getfriendleaderboard
     */
    GetFriendLeaderboard (request: GetFriendLeaderboardRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetLeaderboardResult>("/Client/GetFriendLeaderboard", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Retrieves a list of ranked friends of the current player for the given statistic, centered on the requested PlayFab
     * user. If PlayFabId is empty or null will return currently logged in user.
     * https://docs.microsoft.com/rest/api/playfab/client/player-data-management/getfriendleaderboardaroundplayer
     */
    GetFriendLeaderboardAroundPlayer (request: GetFriendLeaderboardAroundPlayerRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetFriendLeaderboardAroundPlayerResult>("/Client/GetFriendLeaderboardAroundPlayer", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Retrieves the current friend list for the local user, constrained to users who have PlayFab accounts. Friends from
     * linked accounts (Facebook, Steam) are also included. You may optionally exclude some linked services' friends.
     * https://docs.microsoft.com/rest/api/playfab/client/friend-list-management/getfriendslist
     */
    GetFriendsList (request: GetFriendsListRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetFriendsListResult>("/Client/GetFriendsList", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Retrieves a list of ranked users for the given statistic, starting from the indicated point in the leaderboard
     * https://docs.microsoft.com/rest/api/playfab/client/player-data-management/getleaderboard
     */
    GetLeaderboard (request: GetLeaderboardRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetLeaderboardResult>("/Client/GetLeaderboard", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Retrieves a list of ranked characters for the given statistic, centered on the requested Character ID
     * https://docs.microsoft.com/rest/api/playfab/client/characters/getleaderboardaroundcharacter
     */
    GetLeaderboardAroundCharacter (request: GetLeaderboardAroundCharacterRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetLeaderboardAroundCharacterResult>("/Client/GetLeaderboardAroundCharacter", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Retrieves a list of ranked users for the given statistic, centered on the requested player. If PlayFabId is empty or
     * null will return currently logged in user.
     * https://docs.microsoft.com/rest/api/playfab/client/player-data-management/getleaderboardaroundplayer
     */
    GetLeaderboardAroundPlayer (request: GetLeaderboardAroundPlayerRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetLeaderboardAroundPlayerResult>("/Client/GetLeaderboardAroundPlayer", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Retrieves a list of all of the user's characters for the given statistic.
     * https://docs.microsoft.com/rest/api/playfab/client/characters/getleaderboardforusercharacters
     */
    GetLeaderboardForUserCharacters (request: GetLeaderboardForUsersCharactersRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetLeaderboardForUsersCharactersResult>("/Client/GetLeaderboardForUserCharacters", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ For payments flows where the provider requires playfab (the fulfiller) to initiate the transaction, but the
     * client completes the rest of the flow. In the Xsolla case, the token returned here will be passed to Xsolla by the
     * client to create a cart. Poll GetPurchase using the returned OrderId once you've completed the payment.
     * https://docs.microsoft.com/rest/api/playfab/client/player-item-management/getpaymenttoken
     */
    GetPaymentToken (request: GetPaymentTokenRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPaymentTokenResult>("/Client/GetPaymentToken", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Gets a Photon custom authentication token that can be used to securely join the player into a Photon room. See
     * https://docs.microsoft.com/gaming/playfab/features/multiplayer/photon/quickstart for more details.
     * https://docs.microsoft.com/rest/api/playfab/client/authentication/getphotonauthenticationtoken
     */
    GetPhotonAuthenticationToken (request: GetPhotonAuthenticationTokenRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPhotonAuthenticationTokenResult>("/Client/GetPhotonAuthenticationToken", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Retrieves all of the user's different kinds of info.
     * https://docs.microsoft.com/rest/api/playfab/client/account-management/getplayercombinedinfo
     */
    GetPlayerCombinedInfo (request: GetPlayerCombinedInfoRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayerCombinedInfoResult>("/Client/GetPlayerCombinedInfo", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Retrieves a title-specific custom property value for a player.
     * https://docs.microsoft.com/rest/api/playfab/client/player-data-management/getplayercustomproperty
     */
    GetPlayerCustomProperty (request: GetPlayerCustomPropertyRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayerCustomPropertyResult>("/Client/GetPlayerCustomProperty", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Retrieves the player's profile
     * https://docs.microsoft.com/rest/api/playfab/client/account-management/getplayerprofile
     */
    GetPlayerProfile (request: GetPlayerProfileRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayerProfileResult>("/Client/GetPlayerProfile", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * List all segments that a player currently belongs to at this moment in time.
     * https://docs.microsoft.com/rest/api/playfab/client/playstream/getplayersegments
     */
    GetPlayerSegments (request: GetPlayerSegmentsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayerSegmentsResult>("/Client/GetPlayerSegments", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Retrieves the indicated statistics (current version and values for all statistics, if none are specified), for the local
     * player.
     * https://docs.microsoft.com/rest/api/playfab/client/player-data-management/getplayerstatistics
     */
    GetPlayerStatistics (request: GetPlayerStatisticsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayerStatisticsResult>("/Client/GetPlayerStatistics", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Retrieves the information on the available versions of the specified statistic.
     * https://docs.microsoft.com/rest/api/playfab/client/player-data-management/getplayerstatisticversions
     */
    GetPlayerStatisticVersions (request: GetPlayerStatisticVersionsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayerStatisticVersionsResult>("/Client/GetPlayerStatisticVersions", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Get all tags with a given Namespace (optional) from a player profile.
     * https://docs.microsoft.com/rest/api/playfab/client/playstream/getplayertags
     */
    GetPlayerTags (request: GetPlayerTagsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayerTagsResult>("/Client/GetPlayerTags", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Gets all trades the player has either opened or accepted, optionally filtered by trade status.
     * https://docs.microsoft.com/rest/api/playfab/client/trading/getplayertrades
     */
    GetPlayerTrades (request: GetPlayerTradesRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayerTradesResponse>("/Client/GetPlayerTrades", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Retrieves the unique PlayFab identifiers for the given set of Battle.net account identifiers.
     * https://docs.microsoft.com/rest/api/playfab/client/account-management/getplayfabidsfrombattlenetaccountids
     */
    GetPlayFabIDsFromBattleNetAccountIds (request: GetPlayFabIDsFromBattleNetAccountIdsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayFabIDsFromBattleNetAccountIdsResult>("/Client/GetPlayFabIDsFromBattleNetAccountIds", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Retrieves the unique PlayFab identifiers for the given set of Facebook identifiers.
     * https://docs.microsoft.com/rest/api/playfab/client/account-management/getplayfabidsfromfacebookids
     */
    GetPlayFabIDsFromFacebookIDs (request: GetPlayFabIDsFromFacebookIDsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayFabIDsFromFacebookIDsResult>("/Client/GetPlayFabIDsFromFacebookIDs", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Retrieves the unique PlayFab identifiers for the given set of Facebook Instant Game identifiers.
     * https://docs.microsoft.com/rest/api/playfab/client/account-management/getplayfabidsfromfacebookinstantgamesids
     */
    GetPlayFabIDsFromFacebookInstantGamesIds (request: GetPlayFabIDsFromFacebookInstantGamesIdsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayFabIDsFromFacebookInstantGamesIdsResult>("/Client/GetPlayFabIDsFromFacebookInstantGamesIds", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Retrieves the unique PlayFab identifiers for the given set of Game Center identifiers (referenced in the Game Center
     * Programming Guide as the Player Identifier).
     * https://docs.microsoft.com/rest/api/playfab/client/account-management/getplayfabidsfromgamecenterids
     */
    GetPlayFabIDsFromGameCenterIDs (request: GetPlayFabIDsFromGameCenterIDsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayFabIDsFromGameCenterIDsResult>("/Client/GetPlayFabIDsFromGameCenterIDs", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Retrieves the unique PlayFab identifiers for the given set of generic service identifiers. A generic identifier is the
     * service name plus the service-specific ID for the player, as specified by the title when the generic identifier was
     * added to the player account.
     * https://docs.microsoft.com/rest/api/playfab/client/account-management/getplayfabidsfromgenericids
     */
    GetPlayFabIDsFromGenericIDs (request: GetPlayFabIDsFromGenericIDsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayFabIDsFromGenericIDsResult>("/Client/GetPlayFabIDsFromGenericIDs", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Retrieves the unique PlayFab identifiers for the given set of Google identifiers. The Google identifiers are the IDs for
     * the user accounts, available as "id" in the Google+ People API calls.
     * https://docs.microsoft.com/rest/api/playfab/client/account-management/getplayfabidsfromgoogleids
     */
    GetPlayFabIDsFromGoogleIDs (request: GetPlayFabIDsFromGoogleIDsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayFabIDsFromGoogleIDsResult>("/Client/GetPlayFabIDsFromGoogleIDs", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Retrieves the unique PlayFab identifiers for the given set of Google Play Games identifiers. The Google Play Games
     * identifiers are the IDs for the user accounts, available as "playerId" in the Google Play Games Services - Players API
     * calls.
     * https://docs.microsoft.com/rest/api/playfab/client/account-management/getplayfabidsfromgoogleplaygamesplayerids
     */
    GetPlayFabIDsFromGooglePlayGamesPlayerIDs (request: GetPlayFabIDsFromGooglePlayGamesPlayerIDsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayFabIDsFromGooglePlayGamesPlayerIDsResult>("/Client/GetPlayFabIDsFromGooglePlayGamesPlayerIDs", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Retrieves the unique PlayFab identifiers for the given set of Kongregate identifiers. The Kongregate identifiers are the
     * IDs for the user accounts, available as "user_id" from the Kongregate API methods(ex:
     * http://developers.kongregate.com/docs/client/getUserId).
     * https://docs.microsoft.com/rest/api/playfab/client/account-management/getplayfabidsfromkongregateids
     */
    GetPlayFabIDsFromKongregateIDs (request: GetPlayFabIDsFromKongregateIDsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayFabIDsFromKongregateIDsResult>("/Client/GetPlayFabIDsFromKongregateIDs", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Retrieves the unique PlayFab identifiers for the given set of Nintendo Service Account identifiers.
     * https://docs.microsoft.com/rest/api/playfab/client/account-management/getplayfabidsfromnintendoserviceaccountids
     */
    GetPlayFabIDsFromNintendoServiceAccountIds (request: GetPlayFabIDsFromNintendoServiceAccountIdsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayFabIDsFromNintendoServiceAccountIdsResult>("/Client/GetPlayFabIDsFromNintendoServiceAccountIds", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Retrieves the unique PlayFab identifiers for the given set of Nintendo Switch Device identifiers.
     * https://docs.microsoft.com/rest/api/playfab/client/account-management/getplayfabidsfromnintendoswitchdeviceids
     */
    GetPlayFabIDsFromNintendoSwitchDeviceIds (request: GetPlayFabIDsFromNintendoSwitchDeviceIdsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayFabIDsFromNintendoSwitchDeviceIdsResult>("/Client/GetPlayFabIDsFromNintendoSwitchDeviceIds", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Retrieves the unique PlayFab identifiers for the given set of PlayStation :tm: Network identifiers.
     * https://docs.microsoft.com/rest/api/playfab/client/account-management/getplayfabidsfrompsnaccountids
     */
    GetPlayFabIDsFromPSNAccountIDs (request: GetPlayFabIDsFromPSNAccountIDsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayFabIDsFromPSNAccountIDsResult>("/Client/GetPlayFabIDsFromPSNAccountIDs", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Retrieves the unique PlayFab identifiers for the given set of PlayStation :tm: Network identifiers.
     * https://docs.microsoft.com/rest/api/playfab/client/account-management/getplayfabidsfrompsnonlineids
     */
    GetPlayFabIDsFromPSNOnlineIDs (request: GetPlayFabIDsFromPSNOnlineIDsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayFabIDsFromPSNOnlineIDsResult>("/Client/GetPlayFabIDsFromPSNOnlineIDs", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Retrieves the unique PlayFab identifiers for the given set of Steam identifiers. The Steam identifiers are the profile
     * IDs for the user accounts, available as SteamId in the Steamworks Community API calls.
     * https://docs.microsoft.com/rest/api/playfab/client/account-management/getplayfabidsfromsteamids
     */
    GetPlayFabIDsFromSteamIDs (request: GetPlayFabIDsFromSteamIDsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayFabIDsFromSteamIDsResult>("/Client/GetPlayFabIDsFromSteamIDs", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Retrieves the unique PlayFab identifiers for the given set of Steam identifiers. The Steam identifiers are persona
     * names.
     * https://docs.microsoft.com/rest/api/playfab/client/account-management/getplayfabidsfromsteamnames
     */
    GetPlayFabIDsFromSteamNames (request: GetPlayFabIDsFromSteamNamesRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayFabIDsFromSteamNamesResult>("/Client/GetPlayFabIDsFromSteamNames", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Retrieves the unique PlayFab identifiers for the given set of Twitch identifiers. The Twitch identifiers are the IDs for
     * the user accounts, available as "_id" from the Twitch API methods (ex:
     * https://github.com/justintv/Twitch-API/blob/master/v3_resources/users.md#get-usersuser).
     * https://docs.microsoft.com/rest/api/playfab/client/account-management/getplayfabidsfromtwitchids
     */
    GetPlayFabIDsFromTwitchIDs (request: GetPlayFabIDsFromTwitchIDsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayFabIDsFromTwitchIDsResult>("/Client/GetPlayFabIDsFromTwitchIDs", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Retrieves the unique PlayFab identifiers for the given set of XboxLive identifiers.
     * https://docs.microsoft.com/rest/api/playfab/client/account-management/getplayfabidsfromxboxliveids
     */
    GetPlayFabIDsFromXboxLiveIDs (request: GetPlayFabIDsFromXboxLiveIDsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPlayFabIDsFromXboxLiveIDsResult>("/Client/GetPlayFabIDsFromXboxLiveIDs", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Retrieves the key-value store of custom publisher settings
     * https://docs.microsoft.com/rest/api/playfab/client/title-wide-data-management/getpublisherdata
     */
    GetPublisherData (request: GetPublisherDataRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPublisherDataResult>("/Client/GetPublisherData", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Retrieves a purchase along with its current PlayFab status. Returns inventory items from the purchase that
     * are still active.
     * https://docs.microsoft.com/rest/api/playfab/client/player-item-management/getpurchase
     */
    GetPurchase (request: GetPurchaseRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPurchaseResult>("/Client/GetPurchase", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Retrieves data stored in a shared group object, as well as the list of members in the group. Non-members of the group
     * may use this to retrieve group data, including membership, but they will not receive data for keys marked as private.
     * Shared Groups are designed for sharing data between a very small number of players, please see our guide:
     * https://docs.microsoft.com/gaming/playfab/features/social/groups/using-shared-group-data
     * https://docs.microsoft.com/rest/api/playfab/client/shared-group-data/getsharedgroupdata
     */
    GetSharedGroupData (request: GetSharedGroupDataRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetSharedGroupDataResult>("/Client/GetSharedGroupData", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Retrieves the set of items defined for the specified store, including all prices defined
     * https://docs.microsoft.com/rest/api/playfab/client/title-wide-data-management/getstoreitems
     */
    GetStoreItems (request: GetStoreItemsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetStoreItemsResult>("/Client/GetStoreItems", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Retrieves the current server time
     * https://docs.microsoft.com/rest/api/playfab/client/title-wide-data-management/gettime
     */
    GetTime (request: GetTimeRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetTimeResult>("/Client/GetTime", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Retrieves the key-value store of custom title settings
     * https://docs.microsoft.com/rest/api/playfab/client/title-wide-data-management/gettitledata
     */
    GetTitleData (request: GetTitleDataRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetTitleDataResult>("/Client/GetTitleData", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Retrieves the title news feed, as configured in the developer portal
     * https://docs.microsoft.com/rest/api/playfab/client/title-wide-data-management/gettitlenews
     */
    GetTitleNews (request: GetTitleNewsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetTitleNewsResult>("/Client/GetTitleNews", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Returns the title's base 64 encoded RSA CSP blob.
     * https://docs.microsoft.com/rest/api/playfab/client/authentication/gettitlepublickey
     */
    GetTitlePublicKey (request: GetTitlePublicKeyRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetTitlePublicKeyResult>("/Client/GetTitlePublicKey", request, null, customData, extraHeaders);
    }

    /**
     * Gets the current status of an existing trade.
     * https://docs.microsoft.com/rest/api/playfab/client/trading/gettradestatus
     */
    GetTradeStatus (request: GetTradeStatusRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetTradeStatusResponse>("/Client/GetTradeStatus", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Retrieves the title-specific custom data for the user which is readable and writable by the client
     * https://docs.microsoft.com/rest/api/playfab/client/player-data-management/getuserdata
     */
    GetUserData (request: GetUserDataRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetUserDataResult>("/Client/GetUserData", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Retrieves the user's current inventory of virtual goods
     * https://docs.microsoft.com/rest/api/playfab/client/player-item-management/getuserinventory
     */
    GetUserInventory (request: GetUserInventoryRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetUserInventoryResult>("/Client/GetUserInventory", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Retrieves the publisher-specific custom data for the user which is readable and writable by the client
     * https://docs.microsoft.com/rest/api/playfab/client/player-data-management/getuserpublisherdata
     */
    GetUserPublisherData (request: GetUserDataRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetUserDataResult>("/Client/GetUserPublisherData", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Retrieves the publisher-specific custom data for the user which can only be read by the client
     * https://docs.microsoft.com/rest/api/playfab/client/player-data-management/getuserpublisherreadonlydata
     */
    GetUserPublisherReadOnlyData (request: GetUserDataRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetUserDataResult>("/Client/GetUserPublisherReadOnlyData", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Retrieves the title-specific custom data for the user which can only be read by the client
     * https://docs.microsoft.com/rest/api/playfab/client/player-data-management/getuserreadonlydata
     */
    GetUserReadOnlyData (request: GetUserDataRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetUserDataResult>("/Client/GetUserReadOnlyData", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Grants the specified character type to the user. CharacterIds are not globally unique; characterId must be evaluated
     * with the parent PlayFabId to guarantee uniqueness.
     * https://docs.microsoft.com/rest/api/playfab/client/characters/grantcharactertouser
     */
    GrantCharacterToUser (request: GrantCharacterToUserRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GrantCharacterToUserResult>("/Client/GrantCharacterToUser", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Links the Android device identifier to the user's PlayFab account
     * https://docs.microsoft.com/rest/api/playfab/client/account-management/linkandroiddeviceid
     */
    LinkAndroidDeviceID (request: LinkAndroidDeviceIDRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<LinkAndroidDeviceIDResult>("/Client/LinkAndroidDeviceID", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Links the Apple account associated with the token to the user's PlayFab account.
     * https://docs.microsoft.com/rest/api/playfab/client/account-management/linkapple
     */
    LinkApple (request: LinkAppleRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResult>("/Client/LinkApple", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Links the Battle.net account associated with the token to the user's PlayFab account.
     * https://docs.microsoft.com/rest/api/playfab/client/account-management/linkbattlenetaccount
     */
    LinkBattleNetAccount (request: LinkBattleNetAccountRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/Client/LinkBattleNetAccount", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Links the custom identifier, generated by the title, to the user's PlayFab account
     * https://docs.microsoft.com/rest/api/playfab/client/account-management/linkcustomid
     */
    LinkCustomID (request: LinkCustomIDRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<LinkCustomIDResult>("/Client/LinkCustomID", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Links the Facebook account associated with the provided Facebook access token to the user's PlayFab account
     * https://docs.microsoft.com/rest/api/playfab/client/account-management/linkfacebookaccount
     */
    LinkFacebookAccount (request: LinkFacebookAccountRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<LinkFacebookAccountResult>("/Client/LinkFacebookAccount", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Links the Facebook Instant Games Id to the user's PlayFab account
     * https://docs.microsoft.com/rest/api/playfab/client/account-management/linkfacebookinstantgamesid
     */
    LinkFacebookInstantGamesId (request: LinkFacebookInstantGamesIdRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<LinkFacebookInstantGamesIdResult>("/Client/LinkFacebookInstantGamesId", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Links the Game Center account associated with the provided Game Center ID to the user's PlayFab account. Logging in with
     * a Game Center ID is insecure if you do not include the optional PublicKeyUrl, Salt, Signature, and Timestamp parameters
     * in this request. It is recommended you require these parameters on all Game Center calls by going to the Apple Add-ons
     * page in the PlayFab Game Manager and enabling the 'Require secure authentication only for this app' option.
     * https://docs.microsoft.com/rest/api/playfab/client/account-management/linkgamecenteraccount
     */
    LinkGameCenterAccount (request: LinkGameCenterAccountRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<LinkGameCenterAccountResult>("/Client/LinkGameCenterAccount", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Links the currently signed-in user account to their Google account, using their Google account credentials
     * https://docs.microsoft.com/rest/api/playfab/client/account-management/linkgoogleaccount
     */
    LinkGoogleAccount (request: LinkGoogleAccountRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<LinkGoogleAccountResult>("/Client/LinkGoogleAccount", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Links the currently signed-in user account to their Google Play Games account, using their Google Play Games account
     * credentials
     * https://docs.microsoft.com/rest/api/playfab/client/account-management/linkgoogleplaygamesservicesaccount
     */
    LinkGooglePlayGamesServicesAccount (request: LinkGooglePlayGamesServicesAccountRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<LinkGooglePlayGamesServicesAccountResult>("/Client/LinkGooglePlayGamesServicesAccount", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Links the vendor-specific iOS device identifier to the user's PlayFab account
     * https://docs.microsoft.com/rest/api/playfab/client/account-management/linkiosdeviceid
     */
    LinkIOSDeviceID (request: LinkIOSDeviceIDRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<LinkIOSDeviceIDResult>("/Client/LinkIOSDeviceID", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Links the Kongregate identifier to the user's PlayFab account
     * https://docs.microsoft.com/rest/api/playfab/client/account-management/linkkongregate
     */
    LinkKongregate (request: LinkKongregateAccountRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<LinkKongregateAccountResult>("/Client/LinkKongregate", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Links the Nintendo account associated with the token to the user's PlayFab account.
     * https://docs.microsoft.com/rest/api/playfab/client/account-management/linknintendoserviceaccount
     */
    LinkNintendoServiceAccount (request: LinkNintendoServiceAccountRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResult>("/Client/LinkNintendoServiceAccount", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Links the NintendoSwitchDeviceId to the user's PlayFab account
     * https://docs.microsoft.com/rest/api/playfab/client/account-management/linknintendoswitchdeviceid
     */
    LinkNintendoSwitchDeviceId (request: LinkNintendoSwitchDeviceIdRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<LinkNintendoSwitchDeviceIdResult>("/Client/LinkNintendoSwitchDeviceId", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Links an OpenID Connect account to a user's PlayFab account, based on an existing relationship between a title and an
     * Open ID Connect provider and the OpenId Connect JWT from that provider.
     * https://docs.microsoft.com/rest/api/playfab/client/account-management/linkopenidconnect
     */
    LinkOpenIdConnect (request: LinkOpenIdConnectRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResult>("/Client/LinkOpenIdConnect", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Links the PlayStation :tm: Network account associated with the provided access code to the user's PlayFab account
     * https://docs.microsoft.com/rest/api/playfab/client/account-management/linkpsnaccount
     */
    LinkPSNAccount (request: LinkPSNAccountRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<LinkPSNAccountResult>("/Client/LinkPSNAccount", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Links the Steam account associated with the provided Steam authentication ticket to the user's PlayFab account
     * https://docs.microsoft.com/rest/api/playfab/client/account-management/linksteamaccount
     */
    LinkSteamAccount (request: LinkSteamAccountRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<LinkSteamAccountResult>("/Client/LinkSteamAccount", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Links the Twitch account associated with the token to the user's PlayFab account.
     * https://docs.microsoft.com/rest/api/playfab/client/account-management/linktwitch
     */
    LinkTwitch (request: LinkTwitchAccountRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<LinkTwitchAccountResult>("/Client/LinkTwitch", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Links the Xbox Live account associated with the provided access code to the user's PlayFab account
     * https://docs.microsoft.com/rest/api/playfab/client/account-management/linkxboxaccount
     */
    LinkXboxAccount (request: LinkXboxAccountRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<LinkXboxAccountResult>("/Client/LinkXboxAccount", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Retrieves title-specific custom property values for a player.
     * https://docs.microsoft.com/rest/api/playfab/client/player-data-management/listplayercustomproperties
     */
    ListPlayerCustomProperties (request: ListPlayerCustomPropertiesRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ListPlayerCustomPropertiesResult>("/Client/ListPlayerCustomProperties", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Signs the user in using the Android device identifier, returning a session identifier that can subsequently be used for
     * API calls which require an authenticated user
     * https://docs.microsoft.com/rest/api/playfab/client/authentication/loginwithandroiddeviceid
     */
    LoginWithAndroidDeviceID (request: LoginWithAndroidDeviceIDRequest, customData?: any, extraHeaders?: Record<string, string>) {
        request.TitleId = this.settings.titleId ? this.settings.titleId : request.TitleId; if (!request.TitleId) throw this.errorTitleId;
        // this.authenticationContext can be modified by other asynchronous login attempts
        // Deep-copy the authenticationContext here to safely update it
        var authenticationContext = JSON.parse(JSON.stringify(this.authenticationContext));
        return this.ExecuteRequestWrapper<LoginResult>("/Client/LoginWithAndroidDeviceID", request, null, customData, extraHeaders)
        .then(result => {
            if (result) {
                if(result?.SessionTicket) {
                    this.sessionTicket = result.SessionTicket;
                }
                if (result?.EntityToken?.EntityToken) {
                    this.entityToken = result.EntityToken.EntityToken;
                }
                // Apply the updates for the AuthenticationContext returned to the client
                authenticationContext = this.UpdateAuthenticationContext(authenticationContext, result);
            }
            return result;
        });
    }

    /**
     * Signs in the user with a Sign in with Apple identity token.
     * https://docs.microsoft.com/rest/api/playfab/client/authentication/loginwithapple
     */
    LoginWithApple (request: LoginWithAppleRequest, customData?: any, extraHeaders?: Record<string, string>) {
        request.TitleId = this.settings.titleId ? this.settings.titleId : request.TitleId; if (!request.TitleId) throw this.errorTitleId;
        // this.authenticationContext can be modified by other asynchronous login attempts
        // Deep-copy the authenticationContext here to safely update it
        var authenticationContext = JSON.parse(JSON.stringify(this.authenticationContext));
        return this.ExecuteRequestWrapper<LoginResult>("/Client/LoginWithApple", request, null, customData, extraHeaders)
        .then(result => {
            if (result) {
                if(result?.SessionTicket) {
                    this.sessionTicket = result.SessionTicket;
                }
                if (result?.EntityToken?.EntityToken) {
                    this.entityToken = result.EntityToken.EntityToken;
                }
                // Apply the updates for the AuthenticationContext returned to the client
                authenticationContext = this.UpdateAuthenticationContext(authenticationContext, result);
            }
            return result;
        });
    }

    /**
     * Sign in the user with a Battle.net identity token
     * https://docs.microsoft.com/rest/api/playfab/client/authentication/loginwithbattlenet
     */
    LoginWithBattleNet (request: LoginWithBattleNetRequest, customData?: any, extraHeaders?: Record<string, string>) {
        request.TitleId = this.settings.titleId ? this.settings.titleId : request.TitleId; if (!request.TitleId) throw this.errorTitleId;
        // this.authenticationContext can be modified by other asynchronous login attempts
        // Deep-copy the authenticationContext here to safely update it
        var authenticationContext = JSON.parse(JSON.stringify(this.authenticationContext));
        return this.ExecuteRequestWrapper<LoginResult>("/Client/LoginWithBattleNet", request, null, customData, extraHeaders)
        .then(result => {
            if (result) {
                if(result?.SessionTicket) {
                    this.sessionTicket = result.SessionTicket;
                }
                if (result?.EntityToken?.EntityToken) {
                    this.entityToken = result.EntityToken.EntityToken;
                }
                // Apply the updates for the AuthenticationContext returned to the client
                authenticationContext = this.UpdateAuthenticationContext(authenticationContext, result);
            }
            return result;
        });
    }

    /**
     * Signs the user in using a custom unique identifier generated by the title, returning a session identifier that can
     * subsequently be used for API calls which require an authenticated user
     * https://docs.microsoft.com/rest/api/playfab/client/authentication/loginwithcustomid
     */
    LoginWithCustomID (request: LoginWithCustomIDRequest, customData?: any, extraHeaders?: Record<string, string>) {
        request.TitleId = this.settings.titleId ? this.settings.titleId : request.TitleId; if (!request.TitleId) throw this.errorTitleId;
        // this.authenticationContext can be modified by other asynchronous login attempts
        // Deep-copy the authenticationContext here to safely update it
        var authenticationContext = JSON.parse(JSON.stringify(this.authenticationContext));
        return this.ExecuteRequestWrapper<LoginResult>("/Client/LoginWithCustomID", request, null, customData, extraHeaders)
        .then(result => {
            if (result) {
                if(result?.SessionTicket) {
                    this.sessionTicket = result.SessionTicket;
                }
                if (result?.EntityToken?.EntityToken) {
                    this.entityToken = result.EntityToken.EntityToken;
                }
                // Apply the updates for the AuthenticationContext returned to the client
                authenticationContext = this.UpdateAuthenticationContext(authenticationContext, result);
            }
            return result;
        });
    }

    /**
     * Signs the user into the PlayFab account, returning a session identifier that can subsequently be used for API calls
     * which require an authenticated user. Unlike most other login API calls, LoginWithEmailAddress does not permit the
     * creation of new accounts via the CreateAccountFlag. Email addresses may be used to create accounts via
     * RegisterPlayFabUser.
     * https://docs.microsoft.com/rest/api/playfab/client/authentication/loginwithemailaddress
     */
    LoginWithEmailAddress (request: LoginWithEmailAddressRequest, customData?: any, extraHeaders?: Record<string, string>) {
        request.TitleId = this.settings.titleId ? this.settings.titleId : request.TitleId; if (!request.TitleId) throw this.errorTitleId;
        // this.authenticationContext can be modified by other asynchronous login attempts
        // Deep-copy the authenticationContext here to safely update it
        var authenticationContext = JSON.parse(JSON.stringify(this.authenticationContext));
        return this.ExecuteRequestWrapper<LoginResult>("/Client/LoginWithEmailAddress", request, null, customData, extraHeaders)
        .then(result => {
            if (result) {
                if(result?.SessionTicket) {
                    this.sessionTicket = result.SessionTicket;
                }
                if (result?.EntityToken?.EntityToken) {
                    this.entityToken = result.EntityToken.EntityToken;
                }
                // Apply the updates for the AuthenticationContext returned to the client
                authenticationContext = this.UpdateAuthenticationContext(authenticationContext, result);
            }
            return result;
        });
    }

    /**
     * Signs the user in using a Facebook access token, returning a session identifier that can subsequently be used for API
     * calls which require an authenticated user
     * https://docs.microsoft.com/rest/api/playfab/client/authentication/loginwithfacebook
     */
    LoginWithFacebook (request: LoginWithFacebookRequest, customData?: any, extraHeaders?: Record<string, string>) {
        request.TitleId = this.settings.titleId ? this.settings.titleId : request.TitleId; if (!request.TitleId) throw this.errorTitleId;
        // this.authenticationContext can be modified by other asynchronous login attempts
        // Deep-copy the authenticationContext here to safely update it
        var authenticationContext = JSON.parse(JSON.stringify(this.authenticationContext));
        return this.ExecuteRequestWrapper<LoginResult>("/Client/LoginWithFacebook", request, null, customData, extraHeaders)
        .then(result => {
            if (result) {
                if(result?.SessionTicket) {
                    this.sessionTicket = result.SessionTicket;
                }
                if (result?.EntityToken?.EntityToken) {
                    this.entityToken = result.EntityToken.EntityToken;
                }
                // Apply the updates for the AuthenticationContext returned to the client
                authenticationContext = this.UpdateAuthenticationContext(authenticationContext, result);
            }
            return result;
        });
    }

    /**
     * Signs the user in using a Facebook Instant Games ID, returning a session identifier that can subsequently be used for
     * API calls which require an authenticated user. Requires Facebook Instant Games to be configured.
     * https://docs.microsoft.com/rest/api/playfab/client/authentication/loginwithfacebookinstantgamesid
     */
    LoginWithFacebookInstantGamesId (request: LoginWithFacebookInstantGamesIdRequest, customData?: any, extraHeaders?: Record<string, string>) {
        request.TitleId = this.settings.titleId ? this.settings.titleId : request.TitleId; if (!request.TitleId) throw this.errorTitleId;
        // this.authenticationContext can be modified by other asynchronous login attempts
        // Deep-copy the authenticationContext here to safely update it
        var authenticationContext = JSON.parse(JSON.stringify(this.authenticationContext));
        return this.ExecuteRequestWrapper<LoginResult>("/Client/LoginWithFacebookInstantGamesId", request, null, customData, extraHeaders)
        .then(result => {
            if (result) {
                if(result?.SessionTicket) {
                    this.sessionTicket = result.SessionTicket;
                }
                if (result?.EntityToken?.EntityToken) {
                    this.entityToken = result.EntityToken.EntityToken;
                }
                // Apply the updates for the AuthenticationContext returned to the client
                authenticationContext = this.UpdateAuthenticationContext(authenticationContext, result);
            }
            return result;
        });
    }

    /**
     * Signs the user in using an iOS Game Center player identifier, returning a session identifier that can subsequently be
     * used for API calls which require an authenticated user. Logging in with a Game Center ID is insecure if you do not
     * include the optional PublicKeyUrl, Salt, Signature, and Timestamp parameters in this request. It is recommended you
     * require these parameters on all Game Center calls by going to the Apple Add-ons page in the PlayFab Game Manager and
     * enabling the 'Require secure authentication only for this app' option.
     * https://docs.microsoft.com/rest/api/playfab/client/authentication/loginwithgamecenter
     */
    LoginWithGameCenter (request: LoginWithGameCenterRequest, customData?: any, extraHeaders?: Record<string, string>) {
        request.TitleId = this.settings.titleId ? this.settings.titleId : request.TitleId; if (!request.TitleId) throw this.errorTitleId;
        // this.authenticationContext can be modified by other asynchronous login attempts
        // Deep-copy the authenticationContext here to safely update it
        var authenticationContext = JSON.parse(JSON.stringify(this.authenticationContext));
        return this.ExecuteRequestWrapper<LoginResult>("/Client/LoginWithGameCenter", request, null, customData, extraHeaders)
        .then(result => {
            if (result) {
                if(result?.SessionTicket) {
                    this.sessionTicket = result.SessionTicket;
                }
                if (result?.EntityToken?.EntityToken) {
                    this.entityToken = result.EntityToken.EntityToken;
                }
                // Apply the updates for the AuthenticationContext returned to the client
                authenticationContext = this.UpdateAuthenticationContext(authenticationContext, result);
            }
            return result;
        });
    }

    /**
     * Signs the user in using their Google account credentials
     * https://docs.microsoft.com/rest/api/playfab/client/authentication/loginwithgoogleaccount
     */
    LoginWithGoogleAccount (request: LoginWithGoogleAccountRequest, customData?: any, extraHeaders?: Record<string, string>) {
        request.TitleId = this.settings.titleId ? this.settings.titleId : request.TitleId; if (!request.TitleId) throw this.errorTitleId;
        // this.authenticationContext can be modified by other asynchronous login attempts
        // Deep-copy the authenticationContext here to safely update it
        var authenticationContext = JSON.parse(JSON.stringify(this.authenticationContext));
        return this.ExecuteRequestWrapper<LoginResult>("/Client/LoginWithGoogleAccount", request, null, customData, extraHeaders)
        .then(result => {
            if (result) {
                if(result?.SessionTicket) {
                    this.sessionTicket = result.SessionTicket;
                }
                if (result?.EntityToken?.EntityToken) {
                    this.entityToken = result.EntityToken.EntityToken;
                }
                // Apply the updates for the AuthenticationContext returned to the client
                authenticationContext = this.UpdateAuthenticationContext(authenticationContext, result);
            }
            return result;
        });
    }

    /**
     * Signs the user in using their Google Play Games account credentials
     * https://docs.microsoft.com/rest/api/playfab/client/authentication/loginwithgoogleplaygamesservices
     */
    LoginWithGooglePlayGamesServices (request: LoginWithGooglePlayGamesServicesRequest, customData?: any, extraHeaders?: Record<string, string>) {
        request.TitleId = this.settings.titleId ? this.settings.titleId : request.TitleId; if (!request.TitleId) throw this.errorTitleId;
        // this.authenticationContext can be modified by other asynchronous login attempts
        // Deep-copy the authenticationContext here to safely update it
        var authenticationContext = JSON.parse(JSON.stringify(this.authenticationContext));
        return this.ExecuteRequestWrapper<LoginResult>("/Client/LoginWithGooglePlayGamesServices", request, null, customData, extraHeaders)
        .then(result => {
            if (result) {
                if(result?.SessionTicket) {
                    this.sessionTicket = result.SessionTicket;
                }
                if (result?.EntityToken?.EntityToken) {
                    this.entityToken = result.EntityToken.EntityToken;
                }
                // Apply the updates for the AuthenticationContext returned to the client
                authenticationContext = this.UpdateAuthenticationContext(authenticationContext, result);
            }
            return result;
        });
    }

    /**
     * Signs the user in using the vendor-specific iOS device identifier, returning a session identifier that can subsequently
     * be used for API calls which require an authenticated user
     * https://docs.microsoft.com/rest/api/playfab/client/authentication/loginwithiosdeviceid
     */
    LoginWithIOSDeviceID (request: LoginWithIOSDeviceIDRequest, customData?: any, extraHeaders?: Record<string, string>) {
        request.TitleId = this.settings.titleId ? this.settings.titleId : request.TitleId; if (!request.TitleId) throw this.errorTitleId;
        // this.authenticationContext can be modified by other asynchronous login attempts
        // Deep-copy the authenticationContext here to safely update it
        var authenticationContext = JSON.parse(JSON.stringify(this.authenticationContext));
        return this.ExecuteRequestWrapper<LoginResult>("/Client/LoginWithIOSDeviceID", request, null, customData, extraHeaders)
        .then(result => {
            if (result) {
                if(result?.SessionTicket) {
                    this.sessionTicket = result.SessionTicket;
                }
                if (result?.EntityToken?.EntityToken) {
                    this.entityToken = result.EntityToken.EntityToken;
                }
                // Apply the updates for the AuthenticationContext returned to the client
                authenticationContext = this.UpdateAuthenticationContext(authenticationContext, result);
            }
            return result;
        });
    }

    /**
     * Signs the user in using a Kongregate player account.
     * https://docs.microsoft.com/rest/api/playfab/client/authentication/loginwithkongregate
     */
    LoginWithKongregate (request: LoginWithKongregateRequest, customData?: any, extraHeaders?: Record<string, string>) {
        request.TitleId = this.settings.titleId ? this.settings.titleId : request.TitleId; if (!request.TitleId) throw this.errorTitleId;
        // this.authenticationContext can be modified by other asynchronous login attempts
        // Deep-copy the authenticationContext here to safely update it
        var authenticationContext = JSON.parse(JSON.stringify(this.authenticationContext));
        return this.ExecuteRequestWrapper<LoginResult>("/Client/LoginWithKongregate", request, null, customData, extraHeaders)
        .then(result => {
            if (result) {
                if(result?.SessionTicket) {
                    this.sessionTicket = result.SessionTicket;
                }
                if (result?.EntityToken?.EntityToken) {
                    this.entityToken = result.EntityToken.EntityToken;
                }
                // Apply the updates for the AuthenticationContext returned to the client
                authenticationContext = this.UpdateAuthenticationContext(authenticationContext, result);
            }
            return result;
        });
    }

    /**
     * Signs in the user with a Nintendo service account token.
     * https://docs.microsoft.com/rest/api/playfab/client/authentication/loginwithnintendoserviceaccount
     */
    LoginWithNintendoServiceAccount (request: LoginWithNintendoServiceAccountRequest, customData?: any, extraHeaders?: Record<string, string>) {
        request.TitleId = this.settings.titleId ? this.settings.titleId : request.TitleId; if (!request.TitleId) throw this.errorTitleId;
        // this.authenticationContext can be modified by other asynchronous login attempts
        // Deep-copy the authenticationContext here to safely update it
        var authenticationContext = JSON.parse(JSON.stringify(this.authenticationContext));
        return this.ExecuteRequestWrapper<LoginResult>("/Client/LoginWithNintendoServiceAccount", request, null, customData, extraHeaders)
        .then(result => {
            if (result) {
                if(result?.SessionTicket) {
                    this.sessionTicket = result.SessionTicket;
                }
                if (result?.EntityToken?.EntityToken) {
                    this.entityToken = result.EntityToken.EntityToken;
                }
                // Apply the updates for the AuthenticationContext returned to the client
                authenticationContext = this.UpdateAuthenticationContext(authenticationContext, result);
            }
            return result;
        });
    }

    /**
     * Signs the user in using a Nintendo Switch Device ID, returning a session identifier that can subsequently be used for
     * API calls which require an authenticated user
     * https://docs.microsoft.com/rest/api/playfab/client/authentication/loginwithnintendoswitchdeviceid
     */
    LoginWithNintendoSwitchDeviceId (request: LoginWithNintendoSwitchDeviceIdRequest, customData?: any, extraHeaders?: Record<string, string>) {
        request.TitleId = this.settings.titleId ? this.settings.titleId : request.TitleId; if (!request.TitleId) throw this.errorTitleId;
        // this.authenticationContext can be modified by other asynchronous login attempts
        // Deep-copy the authenticationContext here to safely update it
        var authenticationContext = JSON.parse(JSON.stringify(this.authenticationContext));
        return this.ExecuteRequestWrapper<LoginResult>("/Client/LoginWithNintendoSwitchDeviceId", request, null, customData, extraHeaders)
        .then(result => {
            if (result) {
                if(result?.SessionTicket) {
                    this.sessionTicket = result.SessionTicket;
                }
                if (result?.EntityToken?.EntityToken) {
                    this.entityToken = result.EntityToken.EntityToken;
                }
                // Apply the updates for the AuthenticationContext returned to the client
                authenticationContext = this.UpdateAuthenticationContext(authenticationContext, result);
            }
            return result;
        });
    }

    /**
     * Logs in a user with an Open ID Connect JWT created by an existing relationship between a title and an Open ID Connect
     * provider.
     * https://docs.microsoft.com/rest/api/playfab/client/authentication/loginwithopenidconnect
     */
    LoginWithOpenIdConnect (request: LoginWithOpenIdConnectRequest, customData?: any, extraHeaders?: Record<string, string>) {
        request.TitleId = this.settings.titleId ? this.settings.titleId : request.TitleId; if (!request.TitleId) throw this.errorTitleId;
        // this.authenticationContext can be modified by other asynchronous login attempts
        // Deep-copy the authenticationContext here to safely update it
        var authenticationContext = JSON.parse(JSON.stringify(this.authenticationContext));
        return this.ExecuteRequestWrapper<LoginResult>("/Client/LoginWithOpenIdConnect", request, null, customData, extraHeaders)
        .then(result => {
            if (result) {
                if(result?.SessionTicket) {
                    this.sessionTicket = result.SessionTicket;
                }
                if (result?.EntityToken?.EntityToken) {
                    this.entityToken = result.EntityToken.EntityToken;
                }
                // Apply the updates for the AuthenticationContext returned to the client
                authenticationContext = this.UpdateAuthenticationContext(authenticationContext, result);
            }
            return result;
        });
    }

    /**
     * Signs the user into the PlayFab account, returning a session identifier that can subsequently be used for API calls
     * which require an authenticated user. Unlike most other login API calls, LoginWithPlayFab does not permit the creation of
     * new accounts via the CreateAccountFlag. Username/Password credentials may be used to create accounts via
     * RegisterPlayFabUser, or added to existing accounts using AddUsernamePassword.
     * https://docs.microsoft.com/rest/api/playfab/client/authentication/loginwithplayfab
     */
    LoginWithPlayFab (request: LoginWithPlayFabRequest, customData?: any, extraHeaders?: Record<string, string>) {
        request.TitleId = this.settings.titleId ? this.settings.titleId : request.TitleId; if (!request.TitleId) throw this.errorTitleId;
        // this.authenticationContext can be modified by other asynchronous login attempts
        // Deep-copy the authenticationContext here to safely update it
        var authenticationContext = JSON.parse(JSON.stringify(this.authenticationContext));
        return this.ExecuteRequestWrapper<LoginResult>("/Client/LoginWithPlayFab", request, null, customData, extraHeaders)
        .then(result => {
            if (result) {
                if(result?.SessionTicket) {
                    this.sessionTicket = result.SessionTicket;
                }
                if (result?.EntityToken?.EntityToken) {
                    this.entityToken = result.EntityToken.EntityToken;
                }
                // Apply the updates for the AuthenticationContext returned to the client
                authenticationContext = this.UpdateAuthenticationContext(authenticationContext, result);
            }
            return result;
        });
    }

    /**
     * Signs the user in using a PlayStation :tm: Network authentication code, returning a session identifier that can
     * subsequently be used for API calls which require an authenticated user
     * https://docs.microsoft.com/rest/api/playfab/client/authentication/loginwithpsn
     */
    LoginWithPSN (request: LoginWithPSNRequest, customData?: any, extraHeaders?: Record<string, string>) {
        request.TitleId = this.settings.titleId ? this.settings.titleId : request.TitleId; if (!request.TitleId) throw this.errorTitleId;
        // this.authenticationContext can be modified by other asynchronous login attempts
        // Deep-copy the authenticationContext here to safely update it
        var authenticationContext = JSON.parse(JSON.stringify(this.authenticationContext));
        return this.ExecuteRequestWrapper<LoginResult>("/Client/LoginWithPSN", request, null, customData, extraHeaders)
        .then(result => {
            if (result) {
                if(result?.SessionTicket) {
                    this.sessionTicket = result.SessionTicket;
                }
                if (result?.EntityToken?.EntityToken) {
                    this.entityToken = result.EntityToken.EntityToken;
                }
                // Apply the updates for the AuthenticationContext returned to the client
                authenticationContext = this.UpdateAuthenticationContext(authenticationContext, result);
            }
            return result;
        });
    }

    /**
     * Signs the user in using a Steam authentication ticket, returning a session identifier that can subsequently be used for
     * API calls which require an authenticated user
     * https://docs.microsoft.com/rest/api/playfab/client/authentication/loginwithsteam
     */
    LoginWithSteam (request: LoginWithSteamRequest, customData?: any, extraHeaders?: Record<string, string>) {
        request.TitleId = this.settings.titleId ? this.settings.titleId : request.TitleId; if (!request.TitleId) throw this.errorTitleId;
        // this.authenticationContext can be modified by other asynchronous login attempts
        // Deep-copy the authenticationContext here to safely update it
        var authenticationContext = JSON.parse(JSON.stringify(this.authenticationContext));
        return this.ExecuteRequestWrapper<LoginResult>("/Client/LoginWithSteam", request, null, customData, extraHeaders)
        .then(result => {
            if (result) {
                if(result?.SessionTicket) {
                    this.sessionTicket = result.SessionTicket;
                }
                if (result?.EntityToken?.EntityToken) {
                    this.entityToken = result.EntityToken.EntityToken;
                }
                // Apply the updates for the AuthenticationContext returned to the client
                authenticationContext = this.UpdateAuthenticationContext(authenticationContext, result);
            }
            return result;
        });
    }

    /**
     * Signs the user in using a Twitch access token.
     * https://docs.microsoft.com/rest/api/playfab/client/authentication/loginwithtwitch
     */
    LoginWithTwitch (request: LoginWithTwitchRequest, customData?: any, extraHeaders?: Record<string, string>) {
        request.TitleId = this.settings.titleId ? this.settings.titleId : request.TitleId; if (!request.TitleId) throw this.errorTitleId;
        // this.authenticationContext can be modified by other asynchronous login attempts
        // Deep-copy the authenticationContext here to safely update it
        var authenticationContext = JSON.parse(JSON.stringify(this.authenticationContext));
        return this.ExecuteRequestWrapper<LoginResult>("/Client/LoginWithTwitch", request, null, customData, extraHeaders)
        .then(result => {
            if (result) {
                if(result?.SessionTicket) {
                    this.sessionTicket = result.SessionTicket;
                }
                if (result?.EntityToken?.EntityToken) {
                    this.entityToken = result.EntityToken.EntityToken;
                }
                // Apply the updates for the AuthenticationContext returned to the client
                authenticationContext = this.UpdateAuthenticationContext(authenticationContext, result);
            }
            return result;
        });
    }

    /**
     * Signs the user in using a Xbox Live Token, returning a session identifier that can subsequently be used for API calls
     * which require an authenticated user
     * https://docs.microsoft.com/rest/api/playfab/client/authentication/loginwithxbox
     */
    LoginWithXbox (request: LoginWithXboxRequest, customData?: any, extraHeaders?: Record<string, string>) {
        request.TitleId = this.settings.titleId ? this.settings.titleId : request.TitleId; if (!request.TitleId) throw this.errorTitleId;
        // this.authenticationContext can be modified by other asynchronous login attempts
        // Deep-copy the authenticationContext here to safely update it
        var authenticationContext = JSON.parse(JSON.stringify(this.authenticationContext));
        return this.ExecuteRequestWrapper<LoginResult>("/Client/LoginWithXbox", request, null, customData, extraHeaders)
        .then(result => {
            if (result) {
                if(result?.SessionTicket) {
                    this.sessionTicket = result.SessionTicket;
                }
                if (result?.EntityToken?.EntityToken) {
                    this.entityToken = result.EntityToken.EntityToken;
                }
                // Apply the updates for the AuthenticationContext returned to the client
                authenticationContext = this.UpdateAuthenticationContext(authenticationContext, result);
            }
            return result;
        });
    }

    /**
     * Opens a new outstanding trade. Note that a given item instance may only be in one open trade at a time.
     * https://docs.microsoft.com/rest/api/playfab/client/trading/opentrade
     */
    OpenTrade (request: OpenTradeRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<OpenTradeResponse>("/Client/OpenTrade", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Selects a payment option for purchase order created via StartPurchase
     * https://docs.microsoft.com/rest/api/playfab/client/player-item-management/payforpurchase
     */
    PayForPurchase (request: PayForPurchaseRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<PayForPurchaseResult>("/Client/PayForPurchase", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Buys a single item with virtual currency. You must specify both the virtual currency to use to purchase, as
     * well as what the client believes the price to be. This lets the server fail the purchase if the price has changed.
     * https://docs.microsoft.com/rest/api/playfab/client/player-item-management/purchaseitem
     */
    PurchaseItem (request: PurchaseItemRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<PurchaseItemResult>("/Client/PurchaseItem", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Adds the virtual goods associated with the coupon to the user's inventory. Coupons can be generated via the
     * Economy->Catalogs tab in the PlayFab Game Manager.
     * https://docs.microsoft.com/rest/api/playfab/client/player-item-management/redeemcoupon
     */
    RedeemCoupon (request: RedeemCouponRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<RedeemCouponResult>("/Client/RedeemCoupon", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Uses the supplied OAuth code to refresh the internally cached player PlayStation :tm: Network auth token
     * https://docs.microsoft.com/rest/api/playfab/client/platform-specific-methods/refreshpsnauthtoken
     */
    RefreshPSNAuthToken (request: RefreshPSNAuthTokenRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/Client/RefreshPSNAuthToken", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Registers the iOS device to receive push notifications
     * https://docs.microsoft.com/rest/api/playfab/client/platform-specific-methods/registerforiospushnotification
     */
    RegisterForIOSPushNotification (request: RegisterForIOSPushNotificationRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<RegisterForIOSPushNotificationResult>("/Client/RegisterForIOSPushNotification", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Registers a new Playfab user account, returning a session identifier that can subsequently be used for API calls which
     * require an authenticated user. You must supply a username and an email address.
     * https://docs.microsoft.com/rest/api/playfab/client/authentication/registerplayfabuser
     */
    RegisterPlayFabUser (request: RegisterPlayFabUserRequest, customData?: any, extraHeaders?: Record<string, string>) {
        request.TitleId = this.settings.titleId ? this.settings.titleId : request.TitleId; if (!request.TitleId) throw this.errorTitleId;
        // this.authenticationContext can be modified by other asynchronous login attempts
        // Deep-copy the authenticationContext here to safely update it
        var authenticationContext = JSON.parse(JSON.stringify(this.authenticationContext));
        return this.ExecuteRequestWrapper<RegisterPlayFabUserResult>("/Client/RegisterPlayFabUser", request, null, customData, extraHeaders)
        .then(result => {
            if (result) {
                if(result?.SessionTicket) {
                    this.sessionTicket = result.SessionTicket;
                }
                if (result?.EntityToken?.EntityToken) {
                    this.entityToken = result.EntityToken.EntityToken;
                }
                // Apply the updates for the AuthenticationContext returned to the client
                authenticationContext = this.UpdateAuthenticationContext(authenticationContext, result);
            }
            return result;
        });
    }

    /**
     * Removes a contact email from the player's profile.
     * https://docs.microsoft.com/rest/api/playfab/client/account-management/removecontactemail
     */
    RemoveContactEmail (request: RemoveContactEmailRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<RemoveContactEmailResult>("/Client/RemoveContactEmail", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Removes a specified user from the friend list of the local user
     * https://docs.microsoft.com/rest/api/playfab/client/friend-list-management/removefriend
     */
    RemoveFriend (request: RemoveFriendRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<RemoveFriendResult>("/Client/RemoveFriend", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Removes the specified generic service identifier from the player's PlayFab account.
     * https://docs.microsoft.com/rest/api/playfab/client/account-management/removegenericid
     */
    RemoveGenericID (request: RemoveGenericIDRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<RemoveGenericIDResult>("/Client/RemoveGenericID", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Removes users from the set of those able to update the shared data and the set of users in the group. Only users in the
     * group can remove members. If as a result of the call, zero users remain with access, the group and its associated data
     * will be deleted. Shared Groups are designed for sharing data between a very small number of players, please see our
     * guide: https://docs.microsoft.com/gaming/playfab/features/social/groups/using-shared-group-data
     * https://docs.microsoft.com/rest/api/playfab/client/shared-group-data/removesharedgroupmembers
     */
    RemoveSharedGroupMembers (request: RemoveSharedGroupMembersRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<RemoveSharedGroupMembersResult>("/Client/RemoveSharedGroupMembers", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Report player's ad activity
     * https://docs.microsoft.com/rest/api/playfab/client/advertising/reportadactivity
     */
    ReportAdActivity (request: ReportAdActivityRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ReportAdActivityResult>("/Client/ReportAdActivity", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Write a PlayStream event to describe the provided player device information. This API method is not designed to be
     * called directly by developers. Each PlayFab client SDK will eventually report this information automatically.
     * https://docs.microsoft.com/rest/api/playfab/client/analytics/reportdeviceinfo
     */
    ReportDeviceInfo (request: DeviceInfoRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/Client/ReportDeviceInfo", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Submit a report for another player (due to bad bahavior, etc.), so that customer service representatives for the title
     * can take action concerning potentially toxic players.
     * https://docs.microsoft.com/rest/api/playfab/client/account-management/reportplayer
     */
    ReportPlayer (request: ReportPlayerClientRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ReportPlayerClientResult>("/Client/ReportPlayer", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Restores all in-app purchases based on the given restore receipt
     * https://docs.microsoft.com/rest/api/playfab/client/platform-specific-methods/restoreiospurchases
     */
    RestoreIOSPurchases (request: RestoreIOSPurchasesRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<RestoreIOSPurchasesResult>("/Client/RestoreIOSPurchases", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Reward player's ad activity
     * https://docs.microsoft.com/rest/api/playfab/client/advertising/rewardadactivity
     */
    RewardAdActivity (request: RewardAdActivityRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<RewardAdActivityResult>("/Client/RewardAdActivity", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Forces an email to be sent to the registered email address for the user's account, with a link allowing the user to
     * change the password.If an account recovery email template ID is provided, an email using the custom email template will
     * be used.
     * https://docs.microsoft.com/rest/api/playfab/client/account-management/sendaccountrecoveryemail
     */
    SendAccountRecoveryEmail (request: SendAccountRecoveryEmailRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<SendAccountRecoveryEmailResult>("/Client/SendAccountRecoveryEmail", request, null, customData, extraHeaders);
    }

    /**
     * Updates the tag list for a specified user in the friend list of the local user
     * https://docs.microsoft.com/rest/api/playfab/client/friend-list-management/setfriendtags
     */
    SetFriendTags (request: SetFriendTagsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<SetFriendTagsResult>("/Client/SetFriendTags", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Sets the player's secret if it is not already set. Player secrets are used to sign API requests. To reset a player's
     * secret use the Admin or Server API method SetPlayerSecret.
     * https://docs.microsoft.com/rest/api/playfab/client/authentication/setplayersecret
     */
    SetPlayerSecret (request: SetPlayerSecretRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<SetPlayerSecretResult>("/Client/SetPlayerSecret", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Creates an order for a list of items from the title catalog
     * https://docs.microsoft.com/rest/api/playfab/client/player-item-management/startpurchase
     */
    StartPurchase (request: StartPurchaseRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<StartPurchaseResult>("/Client/StartPurchase", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Decrements the user's balance of the specified virtual currency by the stated amount. It is possible to make
     * a VC balance negative with this API.
     * https://docs.microsoft.com/rest/api/playfab/client/player-item-management/subtractuservirtualcurrency
     */
    SubtractUserVirtualCurrency (request: SubtractUserVirtualCurrencyRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ModifyUserVirtualCurrencyResult>("/Client/SubtractUserVirtualCurrency", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Unlinks the related Android device identifier from the user's PlayFab account
     * https://docs.microsoft.com/rest/api/playfab/client/account-management/unlinkandroiddeviceid
     */
    UnlinkAndroidDeviceID (request: UnlinkAndroidDeviceIDRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UnlinkAndroidDeviceIDResult>("/Client/UnlinkAndroidDeviceID", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Unlinks the related Apple account from the user's PlayFab account.
     * https://docs.microsoft.com/rest/api/playfab/client/account-management/unlinkapple
     */
    UnlinkApple (request: UnlinkAppleRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/Client/UnlinkApple", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Unlinks the related Battle.net account from the user's PlayFab account.
     * https://docs.microsoft.com/rest/api/playfab/client/account-management/unlinkbattlenetaccount
     */
    UnlinkBattleNetAccount (request: UnlinkBattleNetAccountRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/Client/UnlinkBattleNetAccount", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Unlinks the related custom identifier from the user's PlayFab account
     * https://docs.microsoft.com/rest/api/playfab/client/account-management/unlinkcustomid
     */
    UnlinkCustomID (request: UnlinkCustomIDRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UnlinkCustomIDResult>("/Client/UnlinkCustomID", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Unlinks the related Facebook account from the user's PlayFab account
     * https://docs.microsoft.com/rest/api/playfab/client/account-management/unlinkfacebookaccount
     */
    UnlinkFacebookAccount (request: UnlinkFacebookAccountRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UnlinkFacebookAccountResult>("/Client/UnlinkFacebookAccount", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Unlinks the related Facebook Instant Game Ids from the user's PlayFab account
     * https://docs.microsoft.com/rest/api/playfab/client/account-management/unlinkfacebookinstantgamesid
     */
    UnlinkFacebookInstantGamesId (request: UnlinkFacebookInstantGamesIdRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UnlinkFacebookInstantGamesIdResult>("/Client/UnlinkFacebookInstantGamesId", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Unlinks the related Game Center account from the user's PlayFab account
     * https://docs.microsoft.com/rest/api/playfab/client/account-management/unlinkgamecenteraccount
     */
    UnlinkGameCenterAccount (request: UnlinkGameCenterAccountRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UnlinkGameCenterAccountResult>("/Client/UnlinkGameCenterAccount", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Unlinks the related Google account from the user's PlayFab account
     * (https://developers.google.com/android/reference/com/google/android/gms/auth/GoogleAuthUtil#public-methods).
     * https://docs.microsoft.com/rest/api/playfab/client/account-management/unlinkgoogleaccount
     */
    UnlinkGoogleAccount (request: UnlinkGoogleAccountRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UnlinkGoogleAccountResult>("/Client/UnlinkGoogleAccount", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Unlinks the related Google Play Games account from the user's PlayFab account.
     * https://docs.microsoft.com/rest/api/playfab/client/account-management/unlinkgoogleplaygamesservicesaccount
     */
    UnlinkGooglePlayGamesServicesAccount (request: UnlinkGooglePlayGamesServicesAccountRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UnlinkGooglePlayGamesServicesAccountResult>("/Client/UnlinkGooglePlayGamesServicesAccount", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Unlinks the related iOS device identifier from the user's PlayFab account
     * https://docs.microsoft.com/rest/api/playfab/client/account-management/unlinkiosdeviceid
     */
    UnlinkIOSDeviceID (request: UnlinkIOSDeviceIDRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UnlinkIOSDeviceIDResult>("/Client/UnlinkIOSDeviceID", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Unlinks the related Kongregate identifier from the user's PlayFab account
     * https://docs.microsoft.com/rest/api/playfab/client/account-management/unlinkkongregate
     */
    UnlinkKongregate (request: UnlinkKongregateAccountRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UnlinkKongregateAccountResult>("/Client/UnlinkKongregate", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Unlinks the related Nintendo account from the user's PlayFab account.
     * https://docs.microsoft.com/rest/api/playfab/client/account-management/unlinknintendoserviceaccount
     */
    UnlinkNintendoServiceAccount (request: UnlinkNintendoServiceAccountRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/Client/UnlinkNintendoServiceAccount", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Unlinks the related NintendoSwitchDeviceId from the user's PlayFab account
     * https://docs.microsoft.com/rest/api/playfab/client/account-management/unlinknintendoswitchdeviceid
     */
    UnlinkNintendoSwitchDeviceId (request: UnlinkNintendoSwitchDeviceIdRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UnlinkNintendoSwitchDeviceIdResult>("/Client/UnlinkNintendoSwitchDeviceId", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Unlinks an OpenID Connect account from a user's PlayFab account, based on the connection ID of an existing relationship
     * between a title and an Open ID Connect provider.
     * https://docs.microsoft.com/rest/api/playfab/client/account-management/unlinkopenidconnect
     */
    UnlinkOpenIdConnect (request: UnlinkOpenIdConnectRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/Client/UnlinkOpenIdConnect", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Unlinks the related PlayStation :tm: Network account from the user's PlayFab account
     * https://docs.microsoft.com/rest/api/playfab/client/account-management/unlinkpsnaccount
     */
    UnlinkPSNAccount (request: UnlinkPSNAccountRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UnlinkPSNAccountResult>("/Client/UnlinkPSNAccount", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Unlinks the related Steam account from the user's PlayFab account
     * https://docs.microsoft.com/rest/api/playfab/client/account-management/unlinksteamaccount
     */
    UnlinkSteamAccount (request: UnlinkSteamAccountRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UnlinkSteamAccountResult>("/Client/UnlinkSteamAccount", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Unlinks the related Twitch account from the user's PlayFab account.
     * https://docs.microsoft.com/rest/api/playfab/client/account-management/unlinktwitch
     */
    UnlinkTwitch (request: UnlinkTwitchAccountRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UnlinkTwitchAccountResult>("/Client/UnlinkTwitch", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Unlinks the related Xbox Live account from the user's PlayFab account
     * https://docs.microsoft.com/rest/api/playfab/client/account-management/unlinkxboxaccount
     */
    UnlinkXboxAccount (request: UnlinkXboxAccountRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UnlinkXboxAccountResult>("/Client/UnlinkXboxAccount", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Opens the specified container, with the specified key (when required), and returns the contents of the
     * opened container. If the container (and key when relevant) are consumable (RemainingUses > 0), their RemainingUses will
     * be decremented, consistent with the operation of ConsumeItem.
     * https://docs.microsoft.com/rest/api/playfab/client/player-item-management/unlockcontainerinstance
     */
    UnlockContainerInstance (request: UnlockContainerInstanceRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UnlockContainerItemResult>("/Client/UnlockContainerInstance", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Searches target inventory for an ItemInstance matching the given CatalogItemId, if necessary unlocks it
     * using an appropriate key, and returns the contents of the opened container. If the container (and key when relevant) are
     * consumable (RemainingUses > 0), their RemainingUses will be decremented, consistent with the operation of ConsumeItem.
     * https://docs.microsoft.com/rest/api/playfab/client/player-item-management/unlockcontaineritem
     */
    UnlockContainerItem (request: UnlockContainerItemRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UnlockContainerItemResult>("/Client/UnlockContainerItem", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Update the avatar URL of the player
     * https://docs.microsoft.com/rest/api/playfab/client/account-management/updateavatarurl
     */
    UpdateAvatarUrl (request: UpdateAvatarUrlRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/Client/UpdateAvatarUrl", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Creates and updates the title-specific custom data for the user's character which is readable and writable by the client
     * https://docs.microsoft.com/rest/api/playfab/client/character-data/updatecharacterdata
     */
    UpdateCharacterData (request: UpdateCharacterDataRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UpdateCharacterDataResult>("/Client/UpdateCharacterData", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Updates the values of the specified title-specific statistics for the specific character. By default, clients are not
     * permitted to update statistics. Developers may override this setting in the Game Manager > Settings > API Features.
     * https://docs.microsoft.com/rest/api/playfab/client/characters/updatecharacterstatistics
     */
    UpdateCharacterStatistics (request: UpdateCharacterStatisticsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UpdateCharacterStatisticsResult>("/Client/UpdateCharacterStatistics", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Updates the title-specific custom property values for a player
     * https://docs.microsoft.com/rest/api/playfab/client/player-data-management/updateplayercustomproperties
     */
    UpdatePlayerCustomProperties (request: UpdatePlayerCustomPropertiesRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UpdatePlayerCustomPropertiesResult>("/Client/UpdatePlayerCustomProperties", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Updates the values of the specified title-specific statistics for the user. By default, clients are not permitted to
     * update statistics. Developers may override this setting in the Game Manager > Settings > API Features.
     * https://docs.microsoft.com/rest/api/playfab/client/player-data-management/updateplayerstatistics
     */
    UpdatePlayerStatistics (request: UpdatePlayerStatisticsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UpdatePlayerStatisticsResult>("/Client/UpdatePlayerStatistics", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Adds, updates, and removes data keys for a shared group object. If the permission is set to Public, all fields updated
     * or added in this call will be readable by users not in the group. By default, data permissions are set to Private.
     * Regardless of the permission setting, only members of the group can update the data. Shared Groups are designed for
     * sharing data between a very small number of players, please see our guide:
     * https://docs.microsoft.com/gaming/playfab/features/social/groups/using-shared-group-data
     * https://docs.microsoft.com/rest/api/playfab/client/shared-group-data/updatesharedgroupdata
     */
    UpdateSharedGroupData (request: UpdateSharedGroupDataRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UpdateSharedGroupDataResult>("/Client/UpdateSharedGroupData", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Creates and updates the title-specific custom data for the user which is readable and writable by the client
     * https://docs.microsoft.com/rest/api/playfab/client/player-data-management/updateuserdata
     */
    UpdateUserData (request: UpdateUserDataRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UpdateUserDataResult>("/Client/UpdateUserData", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Creates and updates the publisher-specific custom data for the user which is readable and writable by the client
     * https://docs.microsoft.com/rest/api/playfab/client/player-data-management/updateuserpublisherdata
     */
    UpdateUserPublisherData (request: UpdateUserDataRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UpdateUserDataResult>("/Client/UpdateUserPublisherData", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Updates the title specific display name for the user
     * https://docs.microsoft.com/rest/api/playfab/client/account-management/updateusertitledisplayname
     */
    UpdateUserTitleDisplayName (request: UpdateUserTitleDisplayNameRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UpdateUserTitleDisplayNameResult>("/Client/UpdateUserTitleDisplayName", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Validates with Amazon that the receipt for an Amazon App Store in-app purchase is valid and that it matches
     * the purchased catalog item
     * https://docs.microsoft.com/rest/api/playfab/client/platform-specific-methods/validateamazoniapreceipt
     */
    ValidateAmazonIAPReceipt (request: ValidateAmazonReceiptRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ValidateAmazonReceiptResult>("/Client/ValidateAmazonIAPReceipt", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Validates a Google Play purchase and gives the corresponding item to the player.
     * https://docs.microsoft.com/rest/api/playfab/client/platform-specific-methods/validategoogleplaypurchase
     */
    ValidateGooglePlayPurchase (request: ValidateGooglePlayPurchaseRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ValidateGooglePlayPurchaseResult>("/Client/ValidateGooglePlayPurchase", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Validates with the Apple store that the receipt for an iOS in-app purchase is valid and that it matches the
     * purchased catalog item
     * https://docs.microsoft.com/rest/api/playfab/client/platform-specific-methods/validateiosreceipt
     */
    ValidateIOSReceipt (request: ValidateIOSReceiptRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ValidateIOSReceiptResult>("/Client/ValidateIOSReceipt", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Validates with Windows that the receipt for an Windows App Store in-app purchase is valid and that it
     * matches the purchased catalog item
     * https://docs.microsoft.com/rest/api/playfab/client/platform-specific-methods/validatewindowsstorereceipt
     */
    ValidateWindowsStoreReceipt (request: ValidateWindowsReceiptRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ValidateWindowsReceiptResult>("/Client/ValidateWindowsStoreReceipt", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Writes a character-based event into PlayStream.
     * https://docs.microsoft.com/rest/api/playfab/client/analytics/writecharacterevent
     */
    WriteCharacterEvent (request: WriteClientCharacterEventRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<WriteEventResponse>("/Client/WriteCharacterEvent", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Writes a player-based event into PlayStream.
     * https://docs.microsoft.com/rest/api/playfab/client/analytics/writeplayerevent
     */
    WritePlayerEvent (request: WriteClientPlayerEventRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<WriteEventResponse>("/Client/WritePlayerEvent", request, "X-Authorization", customData, extraHeaders);
    }

    /**
     * Writes a title-based event into PlayStream.
     * https://docs.microsoft.com/rest/api/playfab/client/analytics/writetitleevent
     */
    WriteTitleEvent (request: WriteTitleEventRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<WriteEventResponse>("/Client/WriteTitleEvent", request, "X-Authorization", customData, extraHeaders);
    }

};
