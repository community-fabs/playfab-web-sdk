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
  GetCloudScriptUrlRequest,
  GetContentDownloadUrlRequest,
  CurrentGamesRequest,
  GetFriendLeaderboardRequest,
  GetFriendLeaderboardAroundCurrentUserRequest,
  GetFriendLeaderboardAroundPlayerRequest,
  GetFriendsListRequest,
  GameServerRegionsRequest,
  GetLeaderboardRequest,
  GetLeaderboardAroundCharacterRequest,
  GetLeaderboardAroundCurrentUserRequest,
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
  GetUserCombinedInfoRequest,
  GetUserDataRequest,
  GetUserInventoryRequest,
  GetUserStatisticsRequest,
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
  LogEventRequest,
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
  MatchmakeRequest,
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
  RunCloudScriptRequest,
  SendAccountRecoveryEmailRequest,
  SetFriendTagsRequest,
  SetPlayerSecretRequest,
  StartGameRequest,
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
  UpdateUserStatisticsRequest,
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
  GetCloudScriptUrlResult,
  GetContentDownloadUrlResult,
  CurrentGamesResult,
  GetLeaderboardResult,
  GetFriendLeaderboardAroundCurrentUserResult,
  GetFriendLeaderboardAroundPlayerResult,
  GetFriendsListResult,
  GameServerRegionsResult,
  GetLeaderboardAroundCharacterResult,
  GetLeaderboardAroundCurrentUserResult,
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
  GetUserCombinedInfoResult,
  GetUserDataResult,
  GetUserInventoryResult,
  GetUserStatisticsResult,
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
  LogEventResult,
  LoginResult,
  MatchmakeResult,
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
  RunCloudScriptResult,
  SendAccountRecoveryEmailResult,
  SetFriendTagsResult,
  SetPlayerSecretResult,
  StartGameResult,
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
  UpdateUserStatisticsResult,
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
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/trading/accepttrade
   */
  AcceptTrade (request: AcceptTradeRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<AcceptTradeResponse>("/Client/AcceptTrade", request, "X-Authorization", extraHeaders);
  }

  /**
   * Adds the PlayFab user, based upon a match against a supplied unique identifier, to the friend list of the local user. At
   * least one of FriendPlayFabId,FriendUsername,FriendEmail, or FriendTitleDisplayName should be initialized.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/friend-list-management/addfriend
   */
  AddFriend (request: AddFriendRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<AddFriendResult>("/Client/AddFriend", request, "X-Authorization", extraHeaders);
  }

  /**
   * Adds the specified generic service identifier to the player's PlayFab account. This is designed to allow for a PlayFab
   * ID lookup of any arbitrary service identifier a title wants to add. This identifier should never be used as
   * authentication credentials, as the intent is that it is easily accessible by other players.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/account-management/addgenericid
   */
  AddGenericID (request: AddGenericIDRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<AddGenericIDResult>("/Client/AddGenericID", request, "X-Authorization", extraHeaders);
  }

  /**
   * Adds or updates a contact email to the player's profile.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/account-management/addorupdatecontactemail
   */
  AddOrUpdateContactEmail (request: AddOrUpdateContactEmailRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<AddOrUpdateContactEmailResult>("/Client/AddOrUpdateContactEmail", request, "X-Authorization", extraHeaders);
  }

  /**
   * Adds users to the set of those able to update both the shared data, as well as the set of users in the group. Only users
   * in the group can add new members. Shared Groups are designed for sharing data between a very small number of players,
   * please see our guide: https://docs.microsoft.com/gaming/playfab/features/social/groups/using-shared-group-data
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/shared-group-data/addsharedgroupmembers
   */
  AddSharedGroupMembers (request: AddSharedGroupMembersRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<AddSharedGroupMembersResult>("/Client/AddSharedGroupMembers", request, "X-Authorization", extraHeaders);
  }

  /**
   * Adds playfab username/password auth to an existing account created via an anonymous auth method, e.g. automatic device
   * ID login.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/account-management/addusernamepassword
   */
  AddUsernamePassword (request: AddUsernamePasswordRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<AddUsernamePasswordResult>("/Client/AddUsernamePassword", request, "X-Authorization", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Increments the user's balance of the specified virtual currency by the stated amount
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/player-item-management/adduservirtualcurrency
   */
  AddUserVirtualCurrency (request: AddUserVirtualCurrencyRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ModifyUserVirtualCurrencyResult>("/Client/AddUserVirtualCurrency", request, "X-Authorization", extraHeaders);
  }

  /**
   * Registers the Android device to receive push notifications
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/platform-specific-methods/androiddevicepushnotificationregistration
   */
  AndroidDevicePushNotificationRegistration (request: AndroidDevicePushNotificationRegistrationRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<AndroidDevicePushNotificationRegistrationResult>("/Client/AndroidDevicePushNotificationRegistration", request, "X-Authorization", extraHeaders);
  }

  /**
   * Attributes an install for advertisment.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/advertising/attributeinstall
   */
  AttributeInstall (request: AttributeInstallRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<AttributeInstallResult>("/Client/AttributeInstall", request, "X-Authorization", extraHeaders);
  }

  /**
   * Cancels an open trade (one that has not yet been accepted or cancelled). Note that only the player who created the trade
   * can cancel it via this API call, to prevent griefing of the trade system (cancelling trades in order to prevent other
   * players from accepting them, for trades that can be claimed by more than one player).
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/trading/canceltrade
   */
  CancelTrade (request: CancelTradeRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CancelTradeResponse>("/Client/CancelTrade", request, "X-Authorization", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Confirms with the payment provider that the purchase was approved (if applicable) and adjusts inventory and
   * virtual currency balances as appropriate
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/player-item-management/confirmpurchase
   */
  ConfirmPurchase (request: ConfirmPurchaseRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ConfirmPurchaseResult>("/Client/ConfirmPurchase", request, "X-Authorization", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Consume uses of a consumable item. When all uses are consumed, it will be removed from the player's
   * inventory.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/player-item-management/consumeitem
   */
  ConsumeItem (request: ConsumeItemRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ConsumeItemResult>("/Client/ConsumeItem", request, "X-Authorization", extraHeaders);
  }

  /**
   * Grants the player's current entitlements from Microsoft Store's Collection API
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/platform-specific-methods/consumemicrosoftstoreentitlements
   */
  ConsumeMicrosoftStoreEntitlements (request: ConsumeMicrosoftStoreEntitlementsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ConsumeMicrosoftStoreEntitlementsResponse>("/Client/ConsumeMicrosoftStoreEntitlements", request, "X-Authorization", extraHeaders);
  }

  /**
   * Checks for any new consumable entitlements. If any are found, they are consumed (if they're consumables) and added as
   * PlayFab items
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/platform-specific-methods/consumeps5entitlements
   */
  ConsumePS5Entitlements (request: ConsumePS5EntitlementsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ConsumePS5EntitlementsResult>("/Client/ConsumePS5Entitlements", request, "X-Authorization", extraHeaders);
  }

  /**
   * Checks for any new consumable entitlements. If any are found, they are consumed and added as PlayFab items
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/platform-specific-methods/consumepsnentitlements
   */
  ConsumePSNEntitlements (request: ConsumePSNEntitlementsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ConsumePSNEntitlementsResult>("/Client/ConsumePSNEntitlements", request, "X-Authorization", extraHeaders);
  }

  /**
   * Grants the player's current entitlements from Xbox Live, consuming all availble items in Xbox and granting them to the
   * player's PlayFab inventory. This call is idempotent and will not grant previously granted items to the player.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/platform-specific-methods/consumexboxentitlements
   */
  ConsumeXboxEntitlements (request: ConsumeXboxEntitlementsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ConsumeXboxEntitlementsResult>("/Client/ConsumeXboxEntitlements", request, "X-Authorization", extraHeaders);
  }

  /**
   * Requests the creation of a shared group object, containing key/value pairs which may be updated by all members of the
   * group. Upon creation, the current user will be the only member of the group. Shared Groups are designed for sharing data
   * between a very small number of players, please see our guide:
   * https://docs.microsoft.com/gaming/playfab/features/social/groups/using-shared-group-data
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/shared-group-data/createsharedgroup
   */
  CreateSharedGroup (request: CreateSharedGroupRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateSharedGroupResult>("/Client/CreateSharedGroup", request, "X-Authorization", extraHeaders);
  }

  /**
   * Deletes title-specific custom properties for a player
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/player-data-management/deleteplayercustomproperties
   */
  DeletePlayerCustomProperties (request: DeletePlayerCustomPropertiesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeletePlayerCustomPropertiesResult>("/Client/DeletePlayerCustomProperties", request, "X-Authorization", extraHeaders);
  }

  /**
   * Executes a CloudScript function, with the 'currentPlayerId' set to the PlayFab ID of the authenticated player. The
   * PlayFab ID is the entity ID of the player's master_player_account entity.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/server-side-cloud-script/executecloudscript
   */
  ExecuteCloudScript (request: ExecuteCloudScriptRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ExecuteCloudScriptResult>("/Client/ExecuteCloudScript", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the user's PlayFab account details
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/account-management/getaccountinfo
   */
  GetAccountInfo (request: GetAccountInfoRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetAccountInfoResult>("/Client/GetAccountInfo", request, "X-Authorization", extraHeaders);
  }

  /**
   * Returns a list of ad placements and a reward for each
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/advertising/getadplacements
   */
  GetAdPlacements (request: GetAdPlacementsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetAdPlacementsResult>("/Client/GetAdPlacements", request, "X-Authorization", extraHeaders);
  }

  /**
   * Lists all of the characters that belong to a specific user. CharacterIds are not globally unique; characterId must be
   * evaluated with the parent PlayFabId to guarantee uniqueness.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/characters/getalluserscharacters
   */
  GetAllUsersCharacters (request: ListUsersCharactersRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListUsersCharactersResult>("/Client/GetAllUsersCharacters", request, "X-Authorization", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Retrieves the specified version of the title's catalog of virtual goods, including all defined properties
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/title-wide-data-management/getcatalogitems
   */
  GetCatalogItems (request: GetCatalogItemsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetCatalogItemsResult>("/Client/GetCatalogItems", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the title-specific custom data for the character which is readable and writable by the client
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/character-data/getcharacterdata
   */
  GetCharacterData (request: GetCharacterDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetCharacterDataResult>("/Client/GetCharacterData", request, "X-Authorization", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Retrieves the specified character's current inventory of virtual goods
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/player-item-management/getcharacterinventory
   */
  GetCharacterInventory (request: GetCharacterInventoryRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetCharacterInventoryResult>("/Client/GetCharacterInventory", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves a list of ranked characters for the given statistic, starting from the indicated point in the leaderboard
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/characters/getcharacterleaderboard
   */
  GetCharacterLeaderboard (request: GetCharacterLeaderboardRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetCharacterLeaderboardResult>("/Client/GetCharacterLeaderboard", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the title-specific custom data for the character which can only be read by the client
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/character-data/getcharacterreadonlydata
   */
  GetCharacterReadOnlyData (request: GetCharacterDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetCharacterDataResult>("/Client/GetCharacterReadOnlyData", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the details of all title-specific statistics for the user
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/characters/getcharacterstatistics
   */
  GetCharacterStatistics (request: GetCharacterStatisticsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetCharacterStatisticsResult>("/Client/GetCharacterStatistics", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the title-specific URL for Cloud Script servers. This must be queried once, prior to making any calls to
   * RunCloudScript.
   * @deprecated Please use ExecuteCloudScript instead.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/server-side-cloud-script/getcloudscripturl
   */
  GetCloudScriptUrl (request: GetCloudScriptUrlRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetCloudScriptUrlResult>("/Client/GetCloudScriptUrl", request, "X-Authorization", extraHeaders);
  }

  /**
   * This API retrieves a pre-signed URL for accessing a content file for the title. A subsequent HTTP GET to the returned
   * URL will attempt to download the content. A HEAD query to the returned URL will attempt to retrieve the metadata of the
   * content. Note that a successful result does not guarantee the existence of this content - if it has not been uploaded,
   * the query to retrieve the data will fail. See this post for more information:
   * https://community.playfab.com/hc/community/posts/205469488-How-to-upload-files-to-PlayFab-s-Content-Service. Also,
   * please be aware that the Content service is specifically PlayFab's CDN offering, for which standard CDN rates apply.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/content/getcontentdownloadurl
   */
  GetContentDownloadUrl (request: GetContentDownloadUrlRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetContentDownloadUrlResult>("/Client/GetContentDownloadUrl", request, "X-Authorization", extraHeaders);
  }

  /**
   * Get details about all current running game servers matching the given parameters.
   * @deprecated Please use MultiplayerServer/ListMultiplayerServers instead.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/matchmaking/getcurrentgames
   */
  GetCurrentGames (request: CurrentGamesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CurrentGamesResult>("/Client/GetCurrentGames", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves a list of ranked friends of the current player for the given statistic, starting from the indicated point in
   * the leaderboard
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/player-data-management/getfriendleaderboard
   */
  GetFriendLeaderboard (request: GetFriendLeaderboardRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetLeaderboardResult>("/Client/GetFriendLeaderboard", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves a list of ranked friends of the current player for the given statistic, centered on the currently signed-in
   * user
   * @deprecated Please use GetFriendLeaderboardAroundPlayer instead.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/player-data-management/getfriendleaderboardaroundcurrentuser
   */
  GetFriendLeaderboardAroundCurrentUser (request: GetFriendLeaderboardAroundCurrentUserRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetFriendLeaderboardAroundCurrentUserResult>("/Client/GetFriendLeaderboardAroundCurrentUser", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves a list of ranked friends of the current player for the given statistic, centered on the requested PlayFab
   * user. If PlayFabId is empty or null will return currently logged in user.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/player-data-management/getfriendleaderboardaroundplayer
   */
  GetFriendLeaderboardAroundPlayer (request: GetFriendLeaderboardAroundPlayerRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetFriendLeaderboardAroundPlayerResult>("/Client/GetFriendLeaderboardAroundPlayer", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the current friend list for the local user, constrained to users who have PlayFab accounts. Friends from
   * linked accounts (Facebook, Steam) are also included. You may optionally exclude some linked services' friends.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/friend-list-management/getfriendslist
   */
  GetFriendsList (request: GetFriendsListRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetFriendsListResult>("/Client/GetFriendsList", request, "X-Authorization", extraHeaders);
  }

  /**
   * Get details about the regions hosting game servers matching the given parameters.
   * @deprecated Please use MultiplayerServer/ListMultiplayerServers instead.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/matchmaking/getgameserverregions
   */
  GetGameServerRegions (request: GameServerRegionsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GameServerRegionsResult>("/Client/GetGameServerRegions", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves a list of ranked users for the given statistic, starting from the indicated point in the leaderboard
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/player-data-management/getleaderboard
   */
  GetLeaderboard (request: GetLeaderboardRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetLeaderboardResult>("/Client/GetLeaderboard", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves a list of ranked characters for the given statistic, centered on the requested Character ID
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/characters/getleaderboardaroundcharacter
   */
  GetLeaderboardAroundCharacter (request: GetLeaderboardAroundCharacterRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetLeaderboardAroundCharacterResult>("/Client/GetLeaderboardAroundCharacter", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves a list of ranked users for the given statistic, centered on the currently signed-in user
   * @deprecated Please use GetLeaderboardAroundPlayer instead.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/player-data-management/getleaderboardaroundcurrentuser
   */
  GetLeaderboardAroundCurrentUser (request: GetLeaderboardAroundCurrentUserRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetLeaderboardAroundCurrentUserResult>("/Client/GetLeaderboardAroundCurrentUser", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves a list of ranked users for the given statistic, centered on the requested player. If PlayFabId is empty or
   * null will return currently logged in user.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/player-data-management/getleaderboardaroundplayer
   */
  GetLeaderboardAroundPlayer (request: GetLeaderboardAroundPlayerRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetLeaderboardAroundPlayerResult>("/Client/GetLeaderboardAroundPlayer", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves a list of all of the user's characters for the given statistic.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/characters/getleaderboardforusercharacters
   */
  GetLeaderboardForUserCharacters (request: GetLeaderboardForUsersCharactersRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetLeaderboardForUsersCharactersResult>("/Client/GetLeaderboardForUserCharacters", request, "X-Authorization", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ For payments flows where the provider requires playfab (the fulfiller) to initiate the transaction, but the
   * client completes the rest of the flow. In the Xsolla case, the token returned here will be passed to Xsolla by the
   * client to create a cart. Poll GetPurchase using the returned OrderId once you've completed the payment.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/player-item-management/getpaymenttoken
   */
  GetPaymentToken (request: GetPaymentTokenRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPaymentTokenResult>("/Client/GetPaymentToken", request, "X-Authorization", extraHeaders);
  }

  /**
   * Gets a Photon custom authentication token that can be used to securely join the player into a Photon room. See
   * https://docs.microsoft.com/gaming/playfab/features/multiplayer/photon/quickstart for more details.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/authentication/getphotonauthenticationtoken
   */
  GetPhotonAuthenticationToken (request: GetPhotonAuthenticationTokenRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPhotonAuthenticationTokenResult>("/Client/GetPhotonAuthenticationToken", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves all of the user's different kinds of info.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/account-management/getplayercombinedinfo
   */
  GetPlayerCombinedInfo (request: GetPlayerCombinedInfoRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayerCombinedInfoResult>("/Client/GetPlayerCombinedInfo", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves a title-specific custom property value for a player.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/player-data-management/getplayercustomproperty
   */
  GetPlayerCustomProperty (request: GetPlayerCustomPropertyRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayerCustomPropertyResult>("/Client/GetPlayerCustomProperty", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the player's profile
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/account-management/getplayerprofile
   */
  GetPlayerProfile (request: GetPlayerProfileRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayerProfileResult>("/Client/GetPlayerProfile", request, "X-Authorization", extraHeaders);
  }

  /**
   * List all segments that a player currently belongs to at this moment in time.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/playstream/getplayersegments
   */
  GetPlayerSegments (request: GetPlayerSegmentsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayerSegmentsResult>("/Client/GetPlayerSegments", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the indicated statistics (current version and values for all statistics, if none are specified), for the local
   * player.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/player-data-management/getplayerstatistics
   */
  GetPlayerStatistics (request: GetPlayerStatisticsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayerStatisticsResult>("/Client/GetPlayerStatistics", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the information on the available versions of the specified statistic.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/player-data-management/getplayerstatisticversions
   */
  GetPlayerStatisticVersions (request: GetPlayerStatisticVersionsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayerStatisticVersionsResult>("/Client/GetPlayerStatisticVersions", request, "X-Authorization", extraHeaders);
  }

  /**
   * Get all tags with a given Namespace (optional) from a player profile.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/playstream/getplayertags
   */
  GetPlayerTags (request: GetPlayerTagsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayerTagsResult>("/Client/GetPlayerTags", request, "X-Authorization", extraHeaders);
  }

  /**
   * Gets all trades the player has either opened or accepted, optionally filtered by trade status.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/trading/getplayertrades
   */
  GetPlayerTrades (request: GetPlayerTradesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayerTradesResponse>("/Client/GetPlayerTrades", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the unique PlayFab identifiers for the given set of Battle.net account identifiers.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/account-management/getplayfabidsfrombattlenetaccountids
   */
  GetPlayFabIDsFromBattleNetAccountIds (request: GetPlayFabIDsFromBattleNetAccountIdsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayFabIDsFromBattleNetAccountIdsResult>("/Client/GetPlayFabIDsFromBattleNetAccountIds", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the unique PlayFab identifiers for the given set of Facebook identifiers.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/account-management/getplayfabidsfromfacebookids
   */
  GetPlayFabIDsFromFacebookIDs (request: GetPlayFabIDsFromFacebookIDsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayFabIDsFromFacebookIDsResult>("/Client/GetPlayFabIDsFromFacebookIDs", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the unique PlayFab identifiers for the given set of Facebook Instant Game identifiers.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/account-management/getplayfabidsfromfacebookinstantgamesids
   */
  GetPlayFabIDsFromFacebookInstantGamesIds (request: GetPlayFabIDsFromFacebookInstantGamesIdsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayFabIDsFromFacebookInstantGamesIdsResult>("/Client/GetPlayFabIDsFromFacebookInstantGamesIds", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the unique PlayFab identifiers for the given set of Game Center identifiers (referenced in the Game Center
   * Programming Guide as the Player Identifier).
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/account-management/getplayfabidsfromgamecenterids
   */
  GetPlayFabIDsFromGameCenterIDs (request: GetPlayFabIDsFromGameCenterIDsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayFabIDsFromGameCenterIDsResult>("/Client/GetPlayFabIDsFromGameCenterIDs", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the unique PlayFab identifiers for the given set of generic service identifiers. A generic identifier is the
   * service name plus the service-specific ID for the player, as specified by the title when the generic identifier was
   * added to the player account.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/account-management/getplayfabidsfromgenericids
   */
  GetPlayFabIDsFromGenericIDs (request: GetPlayFabIDsFromGenericIDsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayFabIDsFromGenericIDsResult>("/Client/GetPlayFabIDsFromGenericIDs", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the unique PlayFab identifiers for the given set of Google identifiers. The Google identifiers are the IDs for
   * the user accounts, available as "id" in the Google+ People API calls.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/account-management/getplayfabidsfromgoogleids
   */
  GetPlayFabIDsFromGoogleIDs (request: GetPlayFabIDsFromGoogleIDsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayFabIDsFromGoogleIDsResult>("/Client/GetPlayFabIDsFromGoogleIDs", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the unique PlayFab identifiers for the given set of Google Play Games identifiers. The Google Play Games
   * identifiers are the IDs for the user accounts, available as "playerId" in the Google Play Games Services - Players API
   * calls.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/account-management/getplayfabidsfromgoogleplaygamesplayerids
   */
  GetPlayFabIDsFromGooglePlayGamesPlayerIDs (request: GetPlayFabIDsFromGooglePlayGamesPlayerIDsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayFabIDsFromGooglePlayGamesPlayerIDsResult>("/Client/GetPlayFabIDsFromGooglePlayGamesPlayerIDs", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the unique PlayFab identifiers for the given set of Kongregate identifiers. The Kongregate identifiers are the
   * IDs for the user accounts, available as "user_id" from the Kongregate API methods(ex:
   * http://developers.kongregate.com/docs/client/getUserId).
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/account-management/getplayfabidsfromkongregateids
   */
  GetPlayFabIDsFromKongregateIDs (request: GetPlayFabIDsFromKongregateIDsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayFabIDsFromKongregateIDsResult>("/Client/GetPlayFabIDsFromKongregateIDs", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the unique PlayFab identifiers for the given set of Nintendo Service Account identifiers.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/account-management/getplayfabidsfromnintendoserviceaccountids
   */
  GetPlayFabIDsFromNintendoServiceAccountIds (request: GetPlayFabIDsFromNintendoServiceAccountIdsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayFabIDsFromNintendoServiceAccountIdsResult>("/Client/GetPlayFabIDsFromNintendoServiceAccountIds", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the unique PlayFab identifiers for the given set of Nintendo Switch Device identifiers.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/account-management/getplayfabidsfromnintendoswitchdeviceids
   */
  GetPlayFabIDsFromNintendoSwitchDeviceIds (request: GetPlayFabIDsFromNintendoSwitchDeviceIdsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayFabIDsFromNintendoSwitchDeviceIdsResult>("/Client/GetPlayFabIDsFromNintendoSwitchDeviceIds", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the unique PlayFab identifiers for the given set of PlayStation :tm: Network identifiers.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/account-management/getplayfabidsfrompsnaccountids
   */
  GetPlayFabIDsFromPSNAccountIDs (request: GetPlayFabIDsFromPSNAccountIDsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayFabIDsFromPSNAccountIDsResult>("/Client/GetPlayFabIDsFromPSNAccountIDs", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the unique PlayFab identifiers for the given set of PlayStation :tm: Network identifiers.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/account-management/getplayfabidsfrompsnonlineids
   */
  GetPlayFabIDsFromPSNOnlineIDs (request: GetPlayFabIDsFromPSNOnlineIDsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayFabIDsFromPSNOnlineIDsResult>("/Client/GetPlayFabIDsFromPSNOnlineIDs", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the unique PlayFab identifiers for the given set of Steam identifiers. The Steam identifiers are the profile
   * IDs for the user accounts, available as SteamId in the Steamworks Community API calls.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/account-management/getplayfabidsfromsteamids
   */
  GetPlayFabIDsFromSteamIDs (request: GetPlayFabIDsFromSteamIDsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayFabIDsFromSteamIDsResult>("/Client/GetPlayFabIDsFromSteamIDs", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the unique PlayFab identifiers for the given set of Steam identifiers. The Steam identifiers are persona
   * names.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/account-management/getplayfabidsfromsteamnames
   */
  GetPlayFabIDsFromSteamNames (request: GetPlayFabIDsFromSteamNamesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayFabIDsFromSteamNamesResult>("/Client/GetPlayFabIDsFromSteamNames", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the unique PlayFab identifiers for the given set of Twitch identifiers. The Twitch identifiers are the IDs for
   * the user accounts, available as "_id" from the Twitch API methods (ex:
   * https://github.com/justintv/Twitch-API/blob/master/v3_resources/users.md#get-usersuser).
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/account-management/getplayfabidsfromtwitchids
   */
  GetPlayFabIDsFromTwitchIDs (request: GetPlayFabIDsFromTwitchIDsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayFabIDsFromTwitchIDsResult>("/Client/GetPlayFabIDsFromTwitchIDs", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the unique PlayFab identifiers for the given set of XboxLive identifiers.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/account-management/getplayfabidsfromxboxliveids
   */
  GetPlayFabIDsFromXboxLiveIDs (request: GetPlayFabIDsFromXboxLiveIDsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayFabIDsFromXboxLiveIDsResult>("/Client/GetPlayFabIDsFromXboxLiveIDs", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the key-value store of custom publisher settings
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/title-wide-data-management/getpublisherdata
   */
  GetPublisherData (request: GetPublisherDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPublisherDataResult>("/Client/GetPublisherData", request, "X-Authorization", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Retrieves a purchase along with its current PlayFab status. Returns inventory items from the purchase that
   * are still active.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/player-item-management/getpurchase
   */
  GetPurchase (request: GetPurchaseRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPurchaseResult>("/Client/GetPurchase", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves data stored in a shared group object, as well as the list of members in the group. Non-members of the group
   * may use this to retrieve group data, including membership, but they will not receive data for keys marked as private.
   * Shared Groups are designed for sharing data between a very small number of players, please see our guide:
   * https://docs.microsoft.com/gaming/playfab/features/social/groups/using-shared-group-data
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/shared-group-data/getsharedgroupdata
   */
  GetSharedGroupData (request: GetSharedGroupDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetSharedGroupDataResult>("/Client/GetSharedGroupData", request, "X-Authorization", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Retrieves the set of items defined for the specified store, including all prices defined
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/title-wide-data-management/getstoreitems
   */
  GetStoreItems (request: GetStoreItemsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetStoreItemsResult>("/Client/GetStoreItems", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the current server time
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/title-wide-data-management/gettime
   */
  GetTime (request: GetTimeRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetTimeResult>("/Client/GetTime", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the key-value store of custom title settings
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/title-wide-data-management/gettitledata
   */
  GetTitleData (request: GetTitleDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetTitleDataResult>("/Client/GetTitleData", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the title news feed, as configured in the developer portal
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/title-wide-data-management/gettitlenews
   */
  GetTitleNews (request: GetTitleNewsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetTitleNewsResult>("/Client/GetTitleNews", request, "X-Authorization", extraHeaders);
  }

  /**
   * Returns the title's base 64 encoded RSA CSP blob.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/authentication/gettitlepublickey
   */
  GetTitlePublicKey (request: GetTitlePublicKeyRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetTitlePublicKeyResult>("/Client/GetTitlePublicKey", request, null, extraHeaders);
  }

  /**
   * Gets the current status of an existing trade.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/trading/gettradestatus
   */
  GetTradeStatus (request: GetTradeStatusRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetTradeStatusResponse>("/Client/GetTradeStatus", request, "X-Authorization", extraHeaders);
  }

  /**
   * NOTE: This call will be deprecated soon. For fetching the data for a given user use GetPlayerCombinedInfo. For looking
   * up users from the client api, we are in the process of adding a new api call. Once that call is ready, this one will be
   * deprecated. Retrieves all requested data for a user in one unified request. By default, this API returns all data for
   * the locally signed-in user. The input parameters may be used to limit the data retrieved to any subset of the available
   * data, as well as retrieve the available data for a different user. Note that certain data, including inventory, virtual
   * currency balances, and personally identifying information, may only be retrieved for the locally signed-in user. In the
   * example below, a request is made for the account details, virtual currency balances, and specified user data for the
   * locally signed-in user.
   * @deprecated Please use GetPlayerCombinedInfo instead.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/account-management/getusercombinedinfo
   */
  GetUserCombinedInfo (request: GetUserCombinedInfoRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetUserCombinedInfoResult>("/Client/GetUserCombinedInfo", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the title-specific custom data for the user which is readable and writable by the client
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/player-data-management/getuserdata
   */
  GetUserData (request: GetUserDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetUserDataResult>("/Client/GetUserData", request, "X-Authorization", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Retrieves the user's current inventory of virtual goods
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/player-item-management/getuserinventory
   */
  GetUserInventory (request: GetUserInventoryRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetUserInventoryResult>("/Client/GetUserInventory", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the publisher-specific custom data for the user which is readable and writable by the client
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/player-data-management/getuserpublisherdata
   */
  GetUserPublisherData (request: GetUserDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetUserDataResult>("/Client/GetUserPublisherData", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the publisher-specific custom data for the user which can only be read by the client
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/player-data-management/getuserpublisherreadonlydata
   */
  GetUserPublisherReadOnlyData (request: GetUserDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetUserDataResult>("/Client/GetUserPublisherReadOnlyData", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the title-specific custom data for the user which can only be read by the client
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/player-data-management/getuserreadonlydata
   */
  GetUserReadOnlyData (request: GetUserDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetUserDataResult>("/Client/GetUserReadOnlyData", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the details of all title-specific statistics for the user
   * @deprecated Please use GetPlayerStatistics instead.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/player-data-management/getuserstatistics
   */
  GetUserStatistics (request: GetUserStatisticsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetUserStatisticsResult>("/Client/GetUserStatistics", request, "X-Authorization", extraHeaders);
  }

  /**
   * Grants the specified character type to the user. CharacterIds are not globally unique; characterId must be evaluated
   * with the parent PlayFabId to guarantee uniqueness.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/characters/grantcharactertouser
   */
  GrantCharacterToUser (request: GrantCharacterToUserRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GrantCharacterToUserResult>("/Client/GrantCharacterToUser", request, "X-Authorization", extraHeaders);
  }

  /**
   * Links the Android device identifier to the user's PlayFab account
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/account-management/linkandroiddeviceid
   */
  LinkAndroidDeviceID (request: LinkAndroidDeviceIDRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<LinkAndroidDeviceIDResult>("/Client/LinkAndroidDeviceID", request, "X-Authorization", extraHeaders);
  }

  /**
   * Links the Apple account associated with the token to the user's PlayFab account.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/account-management/linkapple
   */
  LinkApple (request: LinkAppleRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResult>("/Client/LinkApple", request, "X-Authorization", extraHeaders);
  }

  /**
   * Links the Battle.net account associated with the token to the user's PlayFab account.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/account-management/linkbattlenetaccount
   */
  LinkBattleNetAccount (request: LinkBattleNetAccountRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Client/LinkBattleNetAccount", request, "X-Authorization", extraHeaders);
  }

  /**
   * Links the custom identifier, generated by the title, to the user's PlayFab account
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/account-management/linkcustomid
   */
  LinkCustomID (request: LinkCustomIDRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<LinkCustomIDResult>("/Client/LinkCustomID", request, "X-Authorization", extraHeaders);
  }

  /**
   * Links the Facebook account associated with the provided Facebook access token to the user's PlayFab account
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/account-management/linkfacebookaccount
   */
  LinkFacebookAccount (request: LinkFacebookAccountRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<LinkFacebookAccountResult>("/Client/LinkFacebookAccount", request, "X-Authorization", extraHeaders);
  }

  /**
   * Links the Facebook Instant Games Id to the user's PlayFab account
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/account-management/linkfacebookinstantgamesid
   */
  LinkFacebookInstantGamesId (request: LinkFacebookInstantGamesIdRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<LinkFacebookInstantGamesIdResult>("/Client/LinkFacebookInstantGamesId", request, "X-Authorization", extraHeaders);
  }

  /**
   * Links the Game Center account associated with the provided Game Center ID to the user's PlayFab account. Logging in with
   * a Game Center ID is insecure if you do not include the optional PublicKeyUrl, Salt, Signature, and Timestamp parameters
   * in this request. It is recommended you require these parameters on all Game Center calls by going to the Apple Add-ons
   * page in the PlayFab Game Manager and enabling the 'Require secure authentication only for this app' option.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/account-management/linkgamecenteraccount
   */
  LinkGameCenterAccount (request: LinkGameCenterAccountRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<LinkGameCenterAccountResult>("/Client/LinkGameCenterAccount", request, "X-Authorization", extraHeaders);
  }

  /**
   * Links the currently signed-in user account to their Google account, using their Google account credentials
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/account-management/linkgoogleaccount
   */
  LinkGoogleAccount (request: LinkGoogleAccountRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<LinkGoogleAccountResult>("/Client/LinkGoogleAccount", request, "X-Authorization", extraHeaders);
  }

  /**
   * Links the currently signed-in user account to their Google Play Games account, using their Google Play Games account
   * credentials
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/account-management/linkgoogleplaygamesservicesaccount
   */
  LinkGooglePlayGamesServicesAccount (request: LinkGooglePlayGamesServicesAccountRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<LinkGooglePlayGamesServicesAccountResult>("/Client/LinkGooglePlayGamesServicesAccount", request, "X-Authorization", extraHeaders);
  }

  /**
   * Links the vendor-specific iOS device identifier to the user's PlayFab account
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/account-management/linkiosdeviceid
   */
  LinkIOSDeviceID (request: LinkIOSDeviceIDRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<LinkIOSDeviceIDResult>("/Client/LinkIOSDeviceID", request, "X-Authorization", extraHeaders);
  }

  /**
   * Links the Kongregate identifier to the user's PlayFab account
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/account-management/linkkongregate
   */
  LinkKongregate (request: LinkKongregateAccountRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<LinkKongregateAccountResult>("/Client/LinkKongregate", request, "X-Authorization", extraHeaders);
  }

  /**
   * Links the Nintendo account associated with the token to the user's PlayFab account.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/account-management/linknintendoserviceaccount
   */
  LinkNintendoServiceAccount (request: LinkNintendoServiceAccountRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResult>("/Client/LinkNintendoServiceAccount", request, "X-Authorization", extraHeaders);
  }

  /**
   * Links the NintendoSwitchDeviceId to the user's PlayFab account
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/account-management/linknintendoswitchdeviceid
   */
  LinkNintendoSwitchDeviceId (request: LinkNintendoSwitchDeviceIdRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<LinkNintendoSwitchDeviceIdResult>("/Client/LinkNintendoSwitchDeviceId", request, "X-Authorization", extraHeaders);
  }

  /**
   * Links an OpenID Connect account to a user's PlayFab account, based on an existing relationship between a title and an
   * Open ID Connect provider and the OpenId Connect JWT from that provider.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/account-management/linkopenidconnect
   */
  LinkOpenIdConnect (request: LinkOpenIdConnectRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResult>("/Client/LinkOpenIdConnect", request, "X-Authorization", extraHeaders);
  }

  /**
   * Links the PlayStation :tm: Network account associated with the provided access code to the user's PlayFab account
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/account-management/linkpsnaccount
   */
  LinkPSNAccount (request: LinkPSNAccountRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<LinkPSNAccountResult>("/Client/LinkPSNAccount", request, "X-Authorization", extraHeaders);
  }

  /**
   * Links the Steam account associated with the provided Steam authentication ticket to the user's PlayFab account
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/account-management/linksteamaccount
   */
  LinkSteamAccount (request: LinkSteamAccountRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<LinkSteamAccountResult>("/Client/LinkSteamAccount", request, "X-Authorization", extraHeaders);
  }

  /**
   * Links the Twitch account associated with the token to the user's PlayFab account.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/account-management/linktwitch
   */
  LinkTwitch (request: LinkTwitchAccountRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<LinkTwitchAccountResult>("/Client/LinkTwitch", request, "X-Authorization", extraHeaders);
  }

  /**
   * Links the Xbox Live account associated with the provided access code to the user's PlayFab account
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/account-management/linkxboxaccount
   */
  LinkXboxAccount (request: LinkXboxAccountRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<LinkXboxAccountResult>("/Client/LinkXboxAccount", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves title-specific custom property values for a player.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/player-data-management/listplayercustomproperties
   */
  ListPlayerCustomProperties (request: ListPlayerCustomPropertiesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListPlayerCustomPropertiesResult>("/Client/ListPlayerCustomProperties", request, "X-Authorization", extraHeaders);
  }

  /**
   * Logs a custom analytics event
   * @deprecated Please use WritePlayerEvent instead.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/analytics/logevent
   */
  LogEvent (request: LogEventRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<LogEventResult>("/Client/LogEvent", request, "X-Authorization", extraHeaders);
  }

  /**
   * Signs the user in using the Android device identifier, returning a session identifier that can subsequently be used for
   * API calls which require an authenticated user
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/authentication/loginwithandroiddeviceid
   */
  LoginWithAndroidDeviceID (request: LoginWithAndroidDeviceIDRequest, extraHeaders?: Record<string, string>) {
    request.TitleId = this.settings.titleId ? this.settings.titleId : request.TitleId; if (!request.TitleId) throw this.errorTitleId;
    // this.authenticationContext can be modified by other asynchronous login attempts
    // Deep-copy the authenticationContext here to safely update it
    var authenticationContext = JSON.parse(JSON.stringify(this.authenticationContext));
    return this.ExecuteRequestWrapper<LoginResult>("/Client/LoginWithAndroidDeviceID", request, null, extraHeaders)
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
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/authentication/loginwithapple
   */
  LoginWithApple (request: LoginWithAppleRequest, extraHeaders?: Record<string, string>) {
    request.TitleId = this.settings.titleId ? this.settings.titleId : request.TitleId; if (!request.TitleId) throw this.errorTitleId;
    // this.authenticationContext can be modified by other asynchronous login attempts
    // Deep-copy the authenticationContext here to safely update it
    var authenticationContext = JSON.parse(JSON.stringify(this.authenticationContext));
    return this.ExecuteRequestWrapper<LoginResult>("/Client/LoginWithApple", request, null, extraHeaders)
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
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/authentication/loginwithbattlenet
   */
  LoginWithBattleNet (request: LoginWithBattleNetRequest, extraHeaders?: Record<string, string>) {
    request.TitleId = this.settings.titleId ? this.settings.titleId : request.TitleId; if (!request.TitleId) throw this.errorTitleId;
    // this.authenticationContext can be modified by other asynchronous login attempts
    // Deep-copy the authenticationContext here to safely update it
    var authenticationContext = JSON.parse(JSON.stringify(this.authenticationContext));
    return this.ExecuteRequestWrapper<LoginResult>("/Client/LoginWithBattleNet", request, null, extraHeaders)
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
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/authentication/loginwithcustomid
   */
  LoginWithCustomID (request: LoginWithCustomIDRequest, extraHeaders?: Record<string, string>) {
    request.TitleId = this.settings.titleId ? this.settings.titleId : request.TitleId; if (!request.TitleId) throw this.errorTitleId;
    // this.authenticationContext can be modified by other asynchronous login attempts
    // Deep-copy the authenticationContext here to safely update it
    var authenticationContext = JSON.parse(JSON.stringify(this.authenticationContext));
    return this.ExecuteRequestWrapper<LoginResult>("/Client/LoginWithCustomID", request, null, extraHeaders)
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
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/authentication/loginwithemailaddress
   */
  LoginWithEmailAddress (request: LoginWithEmailAddressRequest, extraHeaders?: Record<string, string>) {
    request.TitleId = this.settings.titleId ? this.settings.titleId : request.TitleId; if (!request.TitleId) throw this.errorTitleId;
    // this.authenticationContext can be modified by other asynchronous login attempts
    // Deep-copy the authenticationContext here to safely update it
    var authenticationContext = JSON.parse(JSON.stringify(this.authenticationContext));
    return this.ExecuteRequestWrapper<LoginResult>("/Client/LoginWithEmailAddress", request, null, extraHeaders)
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
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/authentication/loginwithfacebook
   */
  LoginWithFacebook (request: LoginWithFacebookRequest, extraHeaders?: Record<string, string>) {
    request.TitleId = this.settings.titleId ? this.settings.titleId : request.TitleId; if (!request.TitleId) throw this.errorTitleId;
    // this.authenticationContext can be modified by other asynchronous login attempts
    // Deep-copy the authenticationContext here to safely update it
    var authenticationContext = JSON.parse(JSON.stringify(this.authenticationContext));
    return this.ExecuteRequestWrapper<LoginResult>("/Client/LoginWithFacebook", request, null, extraHeaders)
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
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/authentication/loginwithfacebookinstantgamesid
   */
  LoginWithFacebookInstantGamesId (request: LoginWithFacebookInstantGamesIdRequest, extraHeaders?: Record<string, string>) {
    request.TitleId = this.settings.titleId ? this.settings.titleId : request.TitleId; if (!request.TitleId) throw this.errorTitleId;
    // this.authenticationContext can be modified by other asynchronous login attempts
    // Deep-copy the authenticationContext here to safely update it
    var authenticationContext = JSON.parse(JSON.stringify(this.authenticationContext));
    return this.ExecuteRequestWrapper<LoginResult>("/Client/LoginWithFacebookInstantGamesId", request, null, extraHeaders)
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
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/authentication/loginwithgamecenter
   */
  LoginWithGameCenter (request: LoginWithGameCenterRequest, extraHeaders?: Record<string, string>) {
    request.TitleId = this.settings.titleId ? this.settings.titleId : request.TitleId; if (!request.TitleId) throw this.errorTitleId;
    // this.authenticationContext can be modified by other asynchronous login attempts
    // Deep-copy the authenticationContext here to safely update it
    var authenticationContext = JSON.parse(JSON.stringify(this.authenticationContext));
    return this.ExecuteRequestWrapper<LoginResult>("/Client/LoginWithGameCenter", request, null, extraHeaders)
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
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/authentication/loginwithgoogleaccount
   */
  LoginWithGoogleAccount (request: LoginWithGoogleAccountRequest, extraHeaders?: Record<string, string>) {
    request.TitleId = this.settings.titleId ? this.settings.titleId : request.TitleId; if (!request.TitleId) throw this.errorTitleId;
    // this.authenticationContext can be modified by other asynchronous login attempts
    // Deep-copy the authenticationContext here to safely update it
    var authenticationContext = JSON.parse(JSON.stringify(this.authenticationContext));
    return this.ExecuteRequestWrapper<LoginResult>("/Client/LoginWithGoogleAccount", request, null, extraHeaders)
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
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/authentication/loginwithgoogleplaygamesservices
   */
  LoginWithGooglePlayGamesServices (request: LoginWithGooglePlayGamesServicesRequest, extraHeaders?: Record<string, string>) {
    request.TitleId = this.settings.titleId ? this.settings.titleId : request.TitleId; if (!request.TitleId) throw this.errorTitleId;
    // this.authenticationContext can be modified by other asynchronous login attempts
    // Deep-copy the authenticationContext here to safely update it
    var authenticationContext = JSON.parse(JSON.stringify(this.authenticationContext));
    return this.ExecuteRequestWrapper<LoginResult>("/Client/LoginWithGooglePlayGamesServices", request, null, extraHeaders)
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
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/authentication/loginwithiosdeviceid
   */
  LoginWithIOSDeviceID (request: LoginWithIOSDeviceIDRequest, extraHeaders?: Record<string, string>) {
    request.TitleId = this.settings.titleId ? this.settings.titleId : request.TitleId; if (!request.TitleId) throw this.errorTitleId;
    // this.authenticationContext can be modified by other asynchronous login attempts
    // Deep-copy the authenticationContext here to safely update it
    var authenticationContext = JSON.parse(JSON.stringify(this.authenticationContext));
    return this.ExecuteRequestWrapper<LoginResult>("/Client/LoginWithIOSDeviceID", request, null, extraHeaders)
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
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/authentication/loginwithkongregate
   */
  LoginWithKongregate (request: LoginWithKongregateRequest, extraHeaders?: Record<string, string>) {
    request.TitleId = this.settings.titleId ? this.settings.titleId : request.TitleId; if (!request.TitleId) throw this.errorTitleId;
    // this.authenticationContext can be modified by other asynchronous login attempts
    // Deep-copy the authenticationContext here to safely update it
    var authenticationContext = JSON.parse(JSON.stringify(this.authenticationContext));
    return this.ExecuteRequestWrapper<LoginResult>("/Client/LoginWithKongregate", request, null, extraHeaders)
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
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/authentication/loginwithnintendoserviceaccount
   */
  LoginWithNintendoServiceAccount (request: LoginWithNintendoServiceAccountRequest, extraHeaders?: Record<string, string>) {
    request.TitleId = this.settings.titleId ? this.settings.titleId : request.TitleId; if (!request.TitleId) throw this.errorTitleId;
    // this.authenticationContext can be modified by other asynchronous login attempts
    // Deep-copy the authenticationContext here to safely update it
    var authenticationContext = JSON.parse(JSON.stringify(this.authenticationContext));
    return this.ExecuteRequestWrapper<LoginResult>("/Client/LoginWithNintendoServiceAccount", request, null, extraHeaders)
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
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/authentication/loginwithnintendoswitchdeviceid
   */
  LoginWithNintendoSwitchDeviceId (request: LoginWithNintendoSwitchDeviceIdRequest, extraHeaders?: Record<string, string>) {
    request.TitleId = this.settings.titleId ? this.settings.titleId : request.TitleId; if (!request.TitleId) throw this.errorTitleId;
    // this.authenticationContext can be modified by other asynchronous login attempts
    // Deep-copy the authenticationContext here to safely update it
    var authenticationContext = JSON.parse(JSON.stringify(this.authenticationContext));
    return this.ExecuteRequestWrapper<LoginResult>("/Client/LoginWithNintendoSwitchDeviceId", request, null, extraHeaders)
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
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/authentication/loginwithopenidconnect
   */
  LoginWithOpenIdConnect (request: LoginWithOpenIdConnectRequest, extraHeaders?: Record<string, string>) {
    request.TitleId = this.settings.titleId ? this.settings.titleId : request.TitleId; if (!request.TitleId) throw this.errorTitleId;
    // this.authenticationContext can be modified by other asynchronous login attempts
    // Deep-copy the authenticationContext here to safely update it
    var authenticationContext = JSON.parse(JSON.stringify(this.authenticationContext));
    return this.ExecuteRequestWrapper<LoginResult>("/Client/LoginWithOpenIdConnect", request, null, extraHeaders)
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
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/authentication/loginwithplayfab
   */
  LoginWithPlayFab (request: LoginWithPlayFabRequest, extraHeaders?: Record<string, string>) {
    request.TitleId = this.settings.titleId ? this.settings.titleId : request.TitleId; if (!request.TitleId) throw this.errorTitleId;
    // this.authenticationContext can be modified by other asynchronous login attempts
    // Deep-copy the authenticationContext here to safely update it
    var authenticationContext = JSON.parse(JSON.stringify(this.authenticationContext));
    return this.ExecuteRequestWrapper<LoginResult>("/Client/LoginWithPlayFab", request, null, extraHeaders)
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
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/authentication/loginwithpsn
   */
  LoginWithPSN (request: LoginWithPSNRequest, extraHeaders?: Record<string, string>) {
    request.TitleId = this.settings.titleId ? this.settings.titleId : request.TitleId; if (!request.TitleId) throw this.errorTitleId;
    // this.authenticationContext can be modified by other asynchronous login attempts
    // Deep-copy the authenticationContext here to safely update it
    var authenticationContext = JSON.parse(JSON.stringify(this.authenticationContext));
    return this.ExecuteRequestWrapper<LoginResult>("/Client/LoginWithPSN", request, null, extraHeaders)
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
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/authentication/loginwithsteam
   */
  LoginWithSteam (request: LoginWithSteamRequest, extraHeaders?: Record<string, string>) {
    request.TitleId = this.settings.titleId ? this.settings.titleId : request.TitleId; if (!request.TitleId) throw this.errorTitleId;
    // this.authenticationContext can be modified by other asynchronous login attempts
    // Deep-copy the authenticationContext here to safely update it
    var authenticationContext = JSON.parse(JSON.stringify(this.authenticationContext));
    return this.ExecuteRequestWrapper<LoginResult>("/Client/LoginWithSteam", request, null, extraHeaders)
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
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/authentication/loginwithtwitch
   */
  LoginWithTwitch (request: LoginWithTwitchRequest, extraHeaders?: Record<string, string>) {
    request.TitleId = this.settings.titleId ? this.settings.titleId : request.TitleId; if (!request.TitleId) throw this.errorTitleId;
    // this.authenticationContext can be modified by other asynchronous login attempts
    // Deep-copy the authenticationContext here to safely update it
    var authenticationContext = JSON.parse(JSON.stringify(this.authenticationContext));
    return this.ExecuteRequestWrapper<LoginResult>("/Client/LoginWithTwitch", request, null, extraHeaders)
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
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/authentication/loginwithxbox
   */
  LoginWithXbox (request: LoginWithXboxRequest, extraHeaders?: Record<string, string>) {
    request.TitleId = this.settings.titleId ? this.settings.titleId : request.TitleId; if (!request.TitleId) throw this.errorTitleId;
    // this.authenticationContext can be modified by other asynchronous login attempts
    // Deep-copy the authenticationContext here to safely update it
    var authenticationContext = JSON.parse(JSON.stringify(this.authenticationContext));
    return this.ExecuteRequestWrapper<LoginResult>("/Client/LoginWithXbox", request, null, extraHeaders)
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
   * Attempts to locate a game session matching the given parameters. If the goal is to match the player into a specific
   * active session, only the LobbyId is required. Otherwise, the BuildVersion, GameMode, and Region are all required
   * parameters. Note that parameters specified in the search are required (they are not weighting factors). If a slot is
   * found in a server instance matching the parameters, the slot will be assigned to that player, removing it from the
   * availabe set. In that case, the information on the game session will be returned, otherwise the Status returned will be
   * GameNotFound.
   * @deprecated Please use Match/CreateMatchmakingTicket instead.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/matchmaking/matchmake
   */
  Matchmake (request: MatchmakeRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<MatchmakeResult>("/Client/Matchmake", request, "X-Authorization", extraHeaders);
  }

  /**
   * Opens a new outstanding trade. Note that a given item instance may only be in one open trade at a time.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/trading/opentrade
   */
  OpenTrade (request: OpenTradeRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<OpenTradeResponse>("/Client/OpenTrade", request, "X-Authorization", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Selects a payment option for purchase order created via StartPurchase
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/player-item-management/payforpurchase
   */
  PayForPurchase (request: PayForPurchaseRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<PayForPurchaseResult>("/Client/PayForPurchase", request, "X-Authorization", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Buys a single item with virtual currency. You must specify both the virtual currency to use to purchase, as
   * well as what the client believes the price to be. This lets the server fail the purchase if the price has changed.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/player-item-management/purchaseitem
   */
  PurchaseItem (request: PurchaseItemRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<PurchaseItemResult>("/Client/PurchaseItem", request, "X-Authorization", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Adds the virtual goods associated with the coupon to the user's inventory. Coupons can be generated via the
   * Economy->Catalogs tab in the PlayFab Game Manager.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/player-item-management/redeemcoupon
   */
  RedeemCoupon (request: RedeemCouponRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<RedeemCouponResult>("/Client/RedeemCoupon", request, "X-Authorization", extraHeaders);
  }

  /**
   * Uses the supplied OAuth code to refresh the internally cached player PlayStation :tm: Network auth token
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/platform-specific-methods/refreshpsnauthtoken
   */
  RefreshPSNAuthToken (request: RefreshPSNAuthTokenRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Client/RefreshPSNAuthToken", request, "X-Authorization", extraHeaders);
  }

  /**
   * Registers the iOS device to receive push notifications
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/platform-specific-methods/registerforiospushnotification
   */
  RegisterForIOSPushNotification (request: RegisterForIOSPushNotificationRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<RegisterForIOSPushNotificationResult>("/Client/RegisterForIOSPushNotification", request, "X-Authorization", extraHeaders);
  }

  /**
   * Registers a new Playfab user account, returning a session identifier that can subsequently be used for API calls which
   * require an authenticated user. You must supply a username and an email address.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/authentication/registerplayfabuser
   */
  RegisterPlayFabUser (request: RegisterPlayFabUserRequest, extraHeaders?: Record<string, string>) {
    request.TitleId = this.settings.titleId ? this.settings.titleId : request.TitleId; if (!request.TitleId) throw this.errorTitleId;
    // this.authenticationContext can be modified by other asynchronous login attempts
    // Deep-copy the authenticationContext here to safely update it
    var authenticationContext = JSON.parse(JSON.stringify(this.authenticationContext));
    return this.ExecuteRequestWrapper<RegisterPlayFabUserResult>("/Client/RegisterPlayFabUser", request, null, extraHeaders)
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
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/account-management/removecontactemail
   */
  RemoveContactEmail (request: RemoveContactEmailRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<RemoveContactEmailResult>("/Client/RemoveContactEmail", request, "X-Authorization", extraHeaders);
  }

  /**
   * Removes a specified user from the friend list of the local user
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/friend-list-management/removefriend
   */
  RemoveFriend (request: RemoveFriendRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<RemoveFriendResult>("/Client/RemoveFriend", request, "X-Authorization", extraHeaders);
  }

  /**
   * Removes the specified generic service identifier from the player's PlayFab account.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/account-management/removegenericid
   */
  RemoveGenericID (request: RemoveGenericIDRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<RemoveGenericIDResult>("/Client/RemoveGenericID", request, "X-Authorization", extraHeaders);
  }

  /**
   * Removes users from the set of those able to update the shared data and the set of users in the group. Only users in the
   * group can remove members. If as a result of the call, zero users remain with access, the group and its associated data
   * will be deleted. Shared Groups are designed for sharing data between a very small number of players, please see our
   * guide: https://docs.microsoft.com/gaming/playfab/features/social/groups/using-shared-group-data
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/shared-group-data/removesharedgroupmembers
   */
  RemoveSharedGroupMembers (request: RemoveSharedGroupMembersRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<RemoveSharedGroupMembersResult>("/Client/RemoveSharedGroupMembers", request, "X-Authorization", extraHeaders);
  }

  /**
   * Report player's ad activity
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/advertising/reportadactivity
   */
  ReportAdActivity (request: ReportAdActivityRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ReportAdActivityResult>("/Client/ReportAdActivity", request, "X-Authorization", extraHeaders);
  }

  /**
   * Write a PlayStream event to describe the provided player device information. This API method is not designed to be
   * called directly by developers. Each PlayFab client SDK will eventually report this information automatically.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/analytics/reportdeviceinfo
   */
  ReportDeviceInfo (request: DeviceInfoRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Client/ReportDeviceInfo", request, "X-Authorization", extraHeaders);
  }

  /**
   * Submit a report for another player (due to bad bahavior, etc.), so that customer service representatives for the title
   * can take action concerning potentially toxic players.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/account-management/reportplayer
   */
  ReportPlayer (request: ReportPlayerClientRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ReportPlayerClientResult>("/Client/ReportPlayer", request, "X-Authorization", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Restores all in-app purchases based on the given restore receipt
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/platform-specific-methods/restoreiospurchases
   */
  RestoreIOSPurchases (request: RestoreIOSPurchasesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<RestoreIOSPurchasesResult>("/Client/RestoreIOSPurchases", request, "X-Authorization", extraHeaders);
  }

  /**
   * Reward player's ad activity
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/advertising/rewardadactivity
   */
  RewardAdActivity (request: RewardAdActivityRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<RewardAdActivityResult>("/Client/RewardAdActivity", request, "X-Authorization", extraHeaders);
  }

  /**
   * Triggers a particular server action, passing the provided inputs to the hosted Cloud Script. An action in this context
   * is a handler in the JavaScript. NOTE: Before calling this API, you must call GetCloudScriptUrl to be assigned a Cloud
   * Script server URL. When using an official PlayFab SDK, this URL is stored internally in the SDK, but GetCloudScriptUrl
   * must still be manually called.
   * @deprecated Please use ExecuteCloudScript instead.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/server-side-cloud-script/runcloudscript
   */
  RunCloudScript (request: RunCloudScriptRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<RunCloudScriptResult>("/Client/RunCloudScript", request, "X-Authorization", extraHeaders);
  }

  /**
   * Forces an email to be sent to the registered email address for the user's account, with a link allowing the user to
   * change the password.If an account recovery email template ID is provided, an email using the custom email template will
   * be used.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/account-management/sendaccountrecoveryemail
   */
  SendAccountRecoveryEmail (request: SendAccountRecoveryEmailRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<SendAccountRecoveryEmailResult>("/Client/SendAccountRecoveryEmail", request, null, extraHeaders);
  }

  /**
   * Updates the tag list for a specified user in the friend list of the local user
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/friend-list-management/setfriendtags
   */
  SetFriendTags (request: SetFriendTagsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<SetFriendTagsResult>("/Client/SetFriendTags", request, "X-Authorization", extraHeaders);
  }

  /**
   * Sets the player's secret if it is not already set. Player secrets are used to sign API requests. To reset a player's
   * secret use the Admin or Server API method SetPlayerSecret.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/authentication/setplayersecret
   */
  SetPlayerSecret (request: SetPlayerSecretRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<SetPlayerSecretResult>("/Client/SetPlayerSecret", request, "X-Authorization", extraHeaders);
  }

  /**
   * Start a new game server with a given configuration, add the current player and return the connection information.
   * @deprecated Do not use
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/matchmaking/startgame
   */
  StartGame (request: StartGameRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<StartGameResult>("/Client/StartGame", request, "X-Authorization", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Creates an order for a list of items from the title catalog
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/player-item-management/startpurchase
   */
  StartPurchase (request: StartPurchaseRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<StartPurchaseResult>("/Client/StartPurchase", request, "X-Authorization", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Decrements the user's balance of the specified virtual currency by the stated amount. It is possible to make
   * a VC balance negative with this API.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/player-item-management/subtractuservirtualcurrency
   */
  SubtractUserVirtualCurrency (request: SubtractUserVirtualCurrencyRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ModifyUserVirtualCurrencyResult>("/Client/SubtractUserVirtualCurrency", request, "X-Authorization", extraHeaders);
  }

  /**
   * Unlinks the related Android device identifier from the user's PlayFab account
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/account-management/unlinkandroiddeviceid
   */
  UnlinkAndroidDeviceID (request: UnlinkAndroidDeviceIDRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UnlinkAndroidDeviceIDResult>("/Client/UnlinkAndroidDeviceID", request, "X-Authorization", extraHeaders);
  }

  /**
   * Unlinks the related Apple account from the user's PlayFab account.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/account-management/unlinkapple
   */
  UnlinkApple (request: UnlinkAppleRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Client/UnlinkApple", request, "X-Authorization", extraHeaders);
  }

  /**
   * Unlinks the related Battle.net account from the user's PlayFab account.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/account-management/unlinkbattlenetaccount
   */
  UnlinkBattleNetAccount (request: UnlinkBattleNetAccountRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Client/UnlinkBattleNetAccount", request, "X-Authorization", extraHeaders);
  }

  /**
   * Unlinks the related custom identifier from the user's PlayFab account
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/account-management/unlinkcustomid
   */
  UnlinkCustomID (request: UnlinkCustomIDRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UnlinkCustomIDResult>("/Client/UnlinkCustomID", request, "X-Authorization", extraHeaders);
  }

  /**
   * Unlinks the related Facebook account from the user's PlayFab account
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/account-management/unlinkfacebookaccount
   */
  UnlinkFacebookAccount (request: UnlinkFacebookAccountRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UnlinkFacebookAccountResult>("/Client/UnlinkFacebookAccount", request, "X-Authorization", extraHeaders);
  }

  /**
   * Unlinks the related Facebook Instant Game Ids from the user's PlayFab account
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/account-management/unlinkfacebookinstantgamesid
   */
  UnlinkFacebookInstantGamesId (request: UnlinkFacebookInstantGamesIdRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UnlinkFacebookInstantGamesIdResult>("/Client/UnlinkFacebookInstantGamesId", request, "X-Authorization", extraHeaders);
  }

  /**
   * Unlinks the related Game Center account from the user's PlayFab account
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/account-management/unlinkgamecenteraccount
   */
  UnlinkGameCenterAccount (request: UnlinkGameCenterAccountRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UnlinkGameCenterAccountResult>("/Client/UnlinkGameCenterAccount", request, "X-Authorization", extraHeaders);
  }

  /**
   * Unlinks the related Google account from the user's PlayFab account
   * (https://developers.google.com/android/reference/com/google/android/gms/auth/GoogleAuthUtil#public-methods).
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/account-management/unlinkgoogleaccount
   */
  UnlinkGoogleAccount (request: UnlinkGoogleAccountRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UnlinkGoogleAccountResult>("/Client/UnlinkGoogleAccount", request, "X-Authorization", extraHeaders);
  }

  /**
   * Unlinks the related Google Play Games account from the user's PlayFab account.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/account-management/unlinkgoogleplaygamesservicesaccount
   */
  UnlinkGooglePlayGamesServicesAccount (request: UnlinkGooglePlayGamesServicesAccountRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UnlinkGooglePlayGamesServicesAccountResult>("/Client/UnlinkGooglePlayGamesServicesAccount", request, "X-Authorization", extraHeaders);
  }

  /**
   * Unlinks the related iOS device identifier from the user's PlayFab account
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/account-management/unlinkiosdeviceid
   */
  UnlinkIOSDeviceID (request: UnlinkIOSDeviceIDRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UnlinkIOSDeviceIDResult>("/Client/UnlinkIOSDeviceID", request, "X-Authorization", extraHeaders);
  }

  /**
   * Unlinks the related Kongregate identifier from the user's PlayFab account
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/account-management/unlinkkongregate
   */
  UnlinkKongregate (request: UnlinkKongregateAccountRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UnlinkKongregateAccountResult>("/Client/UnlinkKongregate", request, "X-Authorization", extraHeaders);
  }

  /**
   * Unlinks the related Nintendo account from the user's PlayFab account.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/account-management/unlinknintendoserviceaccount
   */
  UnlinkNintendoServiceAccount (request: UnlinkNintendoServiceAccountRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Client/UnlinkNintendoServiceAccount", request, "X-Authorization", extraHeaders);
  }

  /**
   * Unlinks the related NintendoSwitchDeviceId from the user's PlayFab account
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/account-management/unlinknintendoswitchdeviceid
   */
  UnlinkNintendoSwitchDeviceId (request: UnlinkNintendoSwitchDeviceIdRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UnlinkNintendoSwitchDeviceIdResult>("/Client/UnlinkNintendoSwitchDeviceId", request, "X-Authorization", extraHeaders);
  }

  /**
   * Unlinks an OpenID Connect account from a user's PlayFab account, based on the connection ID of an existing relationship
   * between a title and an Open ID Connect provider.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/account-management/unlinkopenidconnect
   */
  UnlinkOpenIdConnect (request: UnlinkOpenIdConnectRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Client/UnlinkOpenIdConnect", request, "X-Authorization", extraHeaders);
  }

  /**
   * Unlinks the related PlayStation :tm: Network account from the user's PlayFab account
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/account-management/unlinkpsnaccount
   */
  UnlinkPSNAccount (request: UnlinkPSNAccountRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UnlinkPSNAccountResult>("/Client/UnlinkPSNAccount", request, "X-Authorization", extraHeaders);
  }

  /**
   * Unlinks the related Steam account from the user's PlayFab account
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/account-management/unlinksteamaccount
   */
  UnlinkSteamAccount (request: UnlinkSteamAccountRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UnlinkSteamAccountResult>("/Client/UnlinkSteamAccount", request, "X-Authorization", extraHeaders);
  }

  /**
   * Unlinks the related Twitch account from the user's PlayFab account.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/account-management/unlinktwitch
   */
  UnlinkTwitch (request: UnlinkTwitchAccountRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UnlinkTwitchAccountResult>("/Client/UnlinkTwitch", request, "X-Authorization", extraHeaders);
  }

  /**
   * Unlinks the related Xbox Live account from the user's PlayFab account
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/account-management/unlinkxboxaccount
   */
  UnlinkXboxAccount (request: UnlinkXboxAccountRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UnlinkXboxAccountResult>("/Client/UnlinkXboxAccount", request, "X-Authorization", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Opens the specified container, with the specified key (when required), and returns the contents of the
   * opened container. If the container (and key when relevant) are consumable (RemainingUses > 0), their RemainingUses will
   * be decremented, consistent with the operation of ConsumeItem.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/player-item-management/unlockcontainerinstance
   */
  UnlockContainerInstance (request: UnlockContainerInstanceRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UnlockContainerItemResult>("/Client/UnlockContainerInstance", request, "X-Authorization", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Searches target inventory for an ItemInstance matching the given CatalogItemId, if necessary unlocks it
   * using an appropriate key, and returns the contents of the opened container. If the container (and key when relevant) are
   * consumable (RemainingUses > 0), their RemainingUses will be decremented, consistent with the operation of ConsumeItem.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/player-item-management/unlockcontaineritem
   */
  UnlockContainerItem (request: UnlockContainerItemRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UnlockContainerItemResult>("/Client/UnlockContainerItem", request, "X-Authorization", extraHeaders);
  }

  /**
   * Update the avatar URL of the player
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/account-management/updateavatarurl
   */
  UpdateAvatarUrl (request: UpdateAvatarUrlRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Client/UpdateAvatarUrl", request, "X-Authorization", extraHeaders);
  }

  /**
   * Creates and updates the title-specific custom data for the user's character which is readable and writable by the client
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/character-data/updatecharacterdata
   */
  UpdateCharacterData (request: UpdateCharacterDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdateCharacterDataResult>("/Client/UpdateCharacterData", request, "X-Authorization", extraHeaders);
  }

  /**
   * Updates the values of the specified title-specific statistics for the specific character. By default, clients are not
   * permitted to update statistics. Developers may override this setting in the Game Manager > Settings > API Features.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/characters/updatecharacterstatistics
   */
  UpdateCharacterStatistics (request: UpdateCharacterStatisticsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdateCharacterStatisticsResult>("/Client/UpdateCharacterStatistics", request, "X-Authorization", extraHeaders);
  }

  /**
   * Updates the title-specific custom property values for a player
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/player-data-management/updateplayercustomproperties
   */
  UpdatePlayerCustomProperties (request: UpdatePlayerCustomPropertiesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdatePlayerCustomPropertiesResult>("/Client/UpdatePlayerCustomProperties", request, "X-Authorization", extraHeaders);
  }

  /**
   * Updates the values of the specified title-specific statistics for the user. By default, clients are not permitted to
   * update statistics. Developers may override this setting in the Game Manager > Settings > API Features.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/player-data-management/updateplayerstatistics
   */
  UpdatePlayerStatistics (request: UpdatePlayerStatisticsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdatePlayerStatisticsResult>("/Client/UpdatePlayerStatistics", request, "X-Authorization", extraHeaders);
  }

  /**
   * Adds, updates, and removes data keys for a shared group object. If the permission is set to Public, all fields updated
   * or added in this call will be readable by users not in the group. By default, data permissions are set to Private.
   * Regardless of the permission setting, only members of the group can update the data. Shared Groups are designed for
   * sharing data between a very small number of players, please see our guide:
   * https://docs.microsoft.com/gaming/playfab/features/social/groups/using-shared-group-data
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/shared-group-data/updatesharedgroupdata
   */
  UpdateSharedGroupData (request: UpdateSharedGroupDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdateSharedGroupDataResult>("/Client/UpdateSharedGroupData", request, "X-Authorization", extraHeaders);
  }

  /**
   * Creates and updates the title-specific custom data for the user which is readable and writable by the client
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/player-data-management/updateuserdata
   */
  UpdateUserData (request: UpdateUserDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdateUserDataResult>("/Client/UpdateUserData", request, "X-Authorization", extraHeaders);
  }

  /**
   * Creates and updates the publisher-specific custom data for the user which is readable and writable by the client
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/player-data-management/updateuserpublisherdata
   */
  UpdateUserPublisherData (request: UpdateUserDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdateUserDataResult>("/Client/UpdateUserPublisherData", request, "X-Authorization", extraHeaders);
  }

  /**
   * Updates the values of the specified title-specific statistics for the user. By default, clients are not permitted to
   * update statistics. Developers may override this setting in the Game Manager > Settings > API Features.
   * @deprecated Please use UpdatePlayerStatistics instead.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/player-data-management/updateuserstatistics
   */
  UpdateUserStatistics (request: UpdateUserStatisticsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdateUserStatisticsResult>("/Client/UpdateUserStatistics", request, "X-Authorization", extraHeaders);
  }

  /**
   * Updates the title specific display name for the user
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/account-management/updateusertitledisplayname
   */
  UpdateUserTitleDisplayName (request: UpdateUserTitleDisplayNameRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdateUserTitleDisplayNameResult>("/Client/UpdateUserTitleDisplayName", request, "X-Authorization", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Validates with Amazon that the receipt for an Amazon App Store in-app purchase is valid and that it matches
   * the purchased catalog item
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/platform-specific-methods/validateamazoniapreceipt
   */
  ValidateAmazonIAPReceipt (request: ValidateAmazonReceiptRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ValidateAmazonReceiptResult>("/Client/ValidateAmazonIAPReceipt", request, "X-Authorization", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Validates a Google Play purchase and gives the corresponding item to the player.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/platform-specific-methods/validategoogleplaypurchase
   */
  ValidateGooglePlayPurchase (request: ValidateGooglePlayPurchaseRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ValidateGooglePlayPurchaseResult>("/Client/ValidateGooglePlayPurchase", request, "X-Authorization", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Validates with the Apple store that the receipt for an iOS in-app purchase is valid and that it matches the
   * purchased catalog item
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/platform-specific-methods/validateiosreceipt
   */
  ValidateIOSReceipt (request: ValidateIOSReceiptRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ValidateIOSReceiptResult>("/Client/ValidateIOSReceipt", request, "X-Authorization", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Validates with Windows that the receipt for an Windows App Store in-app purchase is valid and that it
   * matches the purchased catalog item
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/platform-specific-methods/validatewindowsstorereceipt
   */
  ValidateWindowsStoreReceipt (request: ValidateWindowsReceiptRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ValidateWindowsReceiptResult>("/Client/ValidateWindowsStoreReceipt", request, "X-Authorization", extraHeaders);
  }

  /**
   * Writes a character-based event into PlayStream.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/analytics/writecharacterevent
   */
  WriteCharacterEvent (request: WriteClientCharacterEventRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<WriteEventResponse>("/Client/WriteCharacterEvent", request, "X-Authorization", extraHeaders);
  }

  /**
   * Writes a player-based event into PlayStream.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/analytics/writeplayerevent
   */
  WritePlayerEvent (request: WriteClientPlayerEventRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<WriteEventResponse>("/Client/WritePlayerEvent", request, "X-Authorization", extraHeaders);
  }

  /**
   * Writes a title-based event into PlayStream.
   * Reference: https://docs.microsoft.com/rest/api/playfab/client/analytics/writetitleevent
   */
  WriteTitleEvent (request: WriteTitleEventRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<WriteEventResponse>("/Client/WriteTitleEvent", request, "X-Authorization", extraHeaders);
  }

};
