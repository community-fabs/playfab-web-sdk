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
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/trading/accepttrade Microsoft Documentation}
   * @example
   * await clientClient.AcceptTrade({
   *   "OfferingPlayerId": "CD803BF233CE76CC",
   *   "TradeId": "D819CEC225EA9948C351",
   *   "AcceptedInventoryInstanceIds": [
   *     "95C1797ADDAC24DC0383",
   *     "0F7793DF55CCEAF21B84"
   *   ]
   * });
   */
  AcceptTrade (request: AcceptTradeRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<AcceptTradeResponse>("/Client/AcceptTrade", request, "X-Authorization", extraHeaders);
  }

  /**
   * Adds the PlayFab user, based upon a match against a supplied unique identifier, to the friend list of the local user. At
   * least one of FriendPlayFabId,FriendUsername,FriendEmail, or FriendTitleDisplayName should be initialized.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/friend-list-management/addfriend Microsoft Documentation}
   * @example
   * await clientClient.AddFriend({
   *   "FriendPlayFabId": "29837799"
   * });
   */
  AddFriend (request: AddFriendRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<AddFriendResult>("/Client/AddFriend", request, "X-Authorization", extraHeaders);
  }

  /**
   * Adds the specified generic service identifier to the player's PlayFab account. This is designed to allow for a PlayFab
   * ID lookup of any arbitrary service identifier a title wants to add. This identifier should never be used as
   * authentication credentials, as the intent is that it is easily accessible by other players.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/account-management/addgenericid Microsoft Documentation}
   * @example
   * await clientClient.AddGenericID({
   *   "GenericId": {
   *     "ServiceName": "BigBizSocial",
   *     "UserId": "1234567890"
   *   }
   * });
   */
  AddGenericID (request: AddGenericIDRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<AddGenericIDResult>("/Client/AddGenericID", request, "X-Authorization", extraHeaders);
  }

  /**
   * Adds or updates a contact email to the player's profile.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/account-management/addorupdatecontactemail Microsoft Documentation}
   * @example
   * await clientClient.AddOrUpdateContactEmail({
   *   "EmailAddress": "theuser@domain.com"
   * });
   */
  AddOrUpdateContactEmail (request: AddOrUpdateContactEmailRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<AddOrUpdateContactEmailResult>("/Client/AddOrUpdateContactEmail", request, "X-Authorization", extraHeaders);
  }

  /**
   * Adds users to the set of those able to update both the shared data, as well as the set of users in the group. Only users
   * in the group can add new members. Shared Groups are designed for sharing data between a very small number of players,
   * please see our guide: https://docs.microsoft.com/gaming/playfab/features/social/groups/using-shared-group-data
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/shared-group-data/addsharedgroupmembers Microsoft Documentation}
   * @example
   * await clientClient.AddSharedGroupMembers({
   *   "SharedGroupId": "Clan Data",
   *   "PlayFabIds": [
   *     "D984A64B832",
   *     "F74A523E1562"
   *   ]
   * });
   */
  AddSharedGroupMembers (request: AddSharedGroupMembersRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<AddSharedGroupMembersResult>("/Client/AddSharedGroupMembers", request, "X-Authorization", extraHeaders);
  }

  /**
   * Adds playfab username/password auth to an existing account created via an anonymous auth method, e.g. automatic device
   * ID login.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/account-management/addusernamepassword Microsoft Documentation}
   * @example
   * await clientClient.AddUsernamePassword({
   *   "Username": "theuser",
   *   "Email": "me@here.com",
   *   "Password": "ExampleSecret"
   * });
   */
  AddUsernamePassword (request: AddUsernamePasswordRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<AddUsernamePasswordResult>("/Client/AddUsernamePassword", request, "X-Authorization", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Increments the user's balance of the specified virtual currency by the stated amount
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/player-item-management/adduservirtualcurrency Microsoft Documentation}
   * @example
   * await clientClient.AddUserVirtualCurrency({
   *   "VirtualCurrency": "GC",
   *   "Amount": 100
   * });
   */
  AddUserVirtualCurrency (request: AddUserVirtualCurrencyRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ModifyUserVirtualCurrencyResult>("/Client/AddUserVirtualCurrency", request, "X-Authorization", extraHeaders);
  }

  /**
   * Registers the Android device to receive push notifications
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/platform-specific-methods/androiddevicepushnotificationregistration Microsoft Documentation}
   * @example
   * await clientClient.AndroidDevicePushNotificationRegistration({
   *   "DeviceToken": "59872d98fa632brn8hg3770",
   *   "SendPushNotificationConfirmation": true,
   *   "ConfirmationMessage": "Welcome to PlayFab!"
   * });
   */
  AndroidDevicePushNotificationRegistration (request: AndroidDevicePushNotificationRegistrationRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<AndroidDevicePushNotificationRegistrationResult>("/Client/AndroidDevicePushNotificationRegistration", request, "X-Authorization", extraHeaders);
  }

  /**
   * Attributes an install for advertisment.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/advertising/attributeinstall Microsoft Documentation}
   * @example
   * await clientClient.AttributeInstall({
   *   "Idfa": "11098810"
   * });
   */
  AttributeInstall (request: AttributeInstallRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<AttributeInstallResult>("/Client/AttributeInstall", request, "X-Authorization", extraHeaders);
  }

  /**
   * Cancels an open trade (one that has not yet been accepted or cancelled). Note that only the player who created the trade
   * can cancel it via this API call, to prevent griefing of the trade system (cancelling trades in order to prevent other
   * players from accepting them, for trades that can be claimed by more than one player).
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/trading/canceltrade Microsoft Documentation}
   * @example
   * await clientClient.CancelTrade({
   *   "TradeId": "D819CEC225EA9948C351"
   * });
   */
  CancelTrade (request: CancelTradeRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CancelTradeResponse>("/Client/CancelTrade", request, "X-Authorization", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Confirms with the payment provider that the purchase was approved (if applicable) and adjusts inventory and
   * virtual currency balances as appropriate
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/player-item-management/confirmpurchase Microsoft Documentation}
   * @example
   * await clientClient.ConfirmPurchase({
   *   "OrderId": "8853591446005860822"
   * });
   */
  ConfirmPurchase (request: ConfirmPurchaseRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ConfirmPurchaseResult>("/Client/ConfirmPurchase", request, "X-Authorization", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Consume uses of a consumable item. When all uses are consumed, it will be removed from the player's
   * inventory.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/player-item-management/consumeitem Microsoft Documentation}
   * @example
   * await clientClient.ConsumeItem({
   *   "ItemInstanceId": "94585729",
   *   "ConsumeCount": 1
   * });
   */
  ConsumeItem (request: ConsumeItemRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ConsumeItemResult>("/Client/ConsumeItem", request, "X-Authorization", extraHeaders);
  }

  /**
   * Grants the player's current entitlements from Microsoft Store's Collection API
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/platform-specific-methods/consumemicrosoftstoreentitlements Microsoft Documentation}
   * @example
   * await clientClient.ConsumeMicrosoftStoreEntitlements({
   *   "MarketplaceSpecificData": {
   *     "XboxToken": "XBL3.0 x=1981989841;akljdlkafdknad",
   *     "userId": "46239871",
   *     "collectionsMsIdKey": "MicrosoftStoreIdKey"
   *   },
   *   "CatalogVersion": "MainCatalog"
   * });
   */
  ConsumeMicrosoftStoreEntitlements (request: ConsumeMicrosoftStoreEntitlementsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ConsumeMicrosoftStoreEntitlementsResponse>("/Client/ConsumeMicrosoftStoreEntitlements", request, "X-Authorization", extraHeaders);
  }

  /**
   * Checks for any new consumable entitlements. If any are found, they are consumed (if they're consumables) and added as
   * PlayFab items
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/platform-specific-methods/consumeps5entitlements Microsoft Documentation}
   * @example
   * await clientClient.ConsumePS5Entitlements({
   *   "MarketplaceSpecificData": {
   *     "ServiceLabel": "1"
   *   },
   *   "CatalogVersion": "MainCatalog"
   * });
   */
  ConsumePS5Entitlements (request: ConsumePS5EntitlementsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ConsumePS5EntitlementsResult>("/Client/ConsumePS5Entitlements", request, "X-Authorization", extraHeaders);
  }

  /**
   * Checks for any new consumable entitlements. If any are found, they are consumed and added as PlayFab items
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/platform-specific-methods/consumepsnentitlements Microsoft Documentation}
   * @example
   * await clientClient.ConsumePSNEntitlements({
   *   "ServiceLabel": 1
   * });
   */
  ConsumePSNEntitlements (request: ConsumePSNEntitlementsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ConsumePSNEntitlementsResult>("/Client/ConsumePSNEntitlements", request, "X-Authorization", extraHeaders);
  }

  /**
   * Grants the player's current entitlements from Xbox Live, consuming all availble items in Xbox and granting them to the
   * player's PlayFab inventory. This call is idempotent and will not grant previously granted items to the player.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/platform-specific-methods/consumexboxentitlements Microsoft Documentation}
   * @example
   * await clientClient.ConsumeXboxEntitlements({
   *   "XboxToken": "XBL3.0 x=1981989841;akljdlkafdknad",
   *   "CatalogVersion": "XboxItems"
   * });
   */
  ConsumeXboxEntitlements (request: ConsumeXboxEntitlementsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ConsumeXboxEntitlementsResult>("/Client/ConsumeXboxEntitlements", request, "X-Authorization", extraHeaders);
  }

  /**
   * Requests the creation of a shared group object, containing key/value pairs which may be updated by all members of the
   * group. Upon creation, the current user will be the only member of the group. Shared Groups are designed for sharing data
   * between a very small number of players, please see our guide:
   * https://docs.microsoft.com/gaming/playfab/features/social/groups/using-shared-group-data
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/shared-group-data/createsharedgroup Microsoft Documentation}
   * @example
   * await clientClient.CreateSharedGroup({
   *   "SharedGroupId": "Clan Data"
   * });
   */
  CreateSharedGroup (request: CreateSharedGroupRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateSharedGroupResult>("/Client/CreateSharedGroup", request, "X-Authorization", extraHeaders);
  }

  /**
   * Deletes title-specific custom properties for a player
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/player-data-management/deleteplayercustomproperties Microsoft Documentation}
   * @example
   * await clientClient.DeletePlayerCustomProperties({
   *   "PropertyNames": [
   *     "level",
   *     "created"
   *   ],
   *   "ExpectedPropertiesVersion": 12
   * });
   */
  DeletePlayerCustomProperties (request: DeletePlayerCustomPropertiesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeletePlayerCustomPropertiesResult>("/Client/DeletePlayerCustomProperties", request, "X-Authorization", extraHeaders);
  }

  /**
   * Executes a CloudScript function, with the 'currentPlayerId' set to the PlayFab ID of the authenticated player. The
   * PlayFab ID is the entity ID of the player's master_player_account entity.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/server-side-cloud-script/executecloudscript Microsoft Documentation}
   * @example
   * await clientClient.ExecuteCloudScript({
   *   "FunctionName": "levelCompleted",
   *   "FunctionParameter": {
   *     "level": 3,
   *     "points": 400
   *   },
   *   "RevisionSelection": "Live",
   *   "GeneratePlayStreamEvent": true
   * });
   */
  ExecuteCloudScript (request: ExecuteCloudScriptRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ExecuteCloudScriptResult>("/Client/ExecuteCloudScript", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the user's PlayFab account details
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/account-management/getaccountinfo Microsoft Documentation}
   * @example
   * await clientClient.GetAccountInfo({
   *   "PlayFabId": "10931252888739651331"
   * });
   */
  GetAccountInfo (request: GetAccountInfoRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetAccountInfoResult>("/Client/GetAccountInfo", request, "X-Authorization", extraHeaders);
  }

  /**
   * Returns a list of ad placements and a reward for each
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/advertising/getadplacements Microsoft Documentation}
   * @example
   * await clientClient.GetAdPlacements({
   *   "AppId": "A12784B",
   *   "Identifier": {
   *     "Name": "PowerBonusInterstitial"
   *   }
   * });
   */
  GetAdPlacements (request: GetAdPlacementsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetAdPlacementsResult>("/Client/GetAdPlacements", request, "X-Authorization", extraHeaders);
  }

  /**
   * Lists all of the characters that belong to a specific user. CharacterIds are not globally unique; characterId must be
   * evaluated with the parent PlayFabId to guarantee uniqueness.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/characters/getalluserscharacters Microsoft Documentation}
   * @example
   * await clientClient.GetAllUsersCharacters({
   *   "PlayFabId": "98333765432"
   * });
   */
  GetAllUsersCharacters (request: ListUsersCharactersRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListUsersCharactersResult>("/Client/GetAllUsersCharacters", request, "X-Authorization", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Retrieves the specified version of the title's catalog of virtual goods, including all defined properties
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/title-wide-data-management/getcatalogitems Microsoft Documentation}
   * @example
   * await clientClient.GetCatalogItems({
   *   "CatalogVersion": "1"
   * });
   */
  GetCatalogItems (request: GetCatalogItemsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetCatalogItemsResult>("/Client/GetCatalogItems", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the title-specific custom data for the character which is readable and writable by the client
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/character-data/getcharacterdata Microsoft Documentation}
   * @example
   * await clientClient.GetCharacterData({
   *   "PlayFabId": "2039475",
   *   "CharacterId": "98342357",
   *   "Keys": [
   *     "preferences",
   *     "progress"
   *   ]
   * });
   */
  GetCharacterData (request: GetCharacterDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetCharacterDataResult>("/Client/GetCharacterData", request, "X-Authorization", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Retrieves the specified character's current inventory of virtual goods
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/player-item-management/getcharacterinventory Microsoft Documentation}
   * @example
   * await clientClient.GetCharacterInventory({
   *   "CharacterId": "9890723423",
   *   "CatalogVersion": "5"
   * });
   */
  GetCharacterInventory (request: GetCharacterInventoryRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetCharacterInventoryResult>("/Client/GetCharacterInventory", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves a list of ranked characters for the given statistic, starting from the indicated point in the leaderboard
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/characters/getcharacterleaderboard Microsoft Documentation}
   * @example
   * await clientClient.GetCharacterLeaderboard({
   *   "CharacterType": "blue_warrior",
   *   "StatisticName": "Kills",
   *   "StartPosition": 0,
   *   "MaxResultsCount": 20
   * });
   */
  GetCharacterLeaderboard (request: GetCharacterLeaderboardRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetCharacterLeaderboardResult>("/Client/GetCharacterLeaderboard", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the title-specific custom data for the character which can only be read by the client
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/character-data/getcharacterreadonlydata Microsoft Documentation}
   * @example
   * await clientClient.GetCharacterReadOnlyData({
   *   "PlayFabId": "2039475",
   *   "CharacterId": "98342357",
   *   "Keys": [
   *     "preferences",
   *     "progress"
   *   ]
   * });
   */
  GetCharacterReadOnlyData (request: GetCharacterDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetCharacterDataResult>("/Client/GetCharacterReadOnlyData", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the details of all title-specific statistics for the user
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/characters/getcharacterstatistics Microsoft Documentation}
   * @example
   * await clientClient.GetCharacterStatistics({
   *   "CharacterId": "98765432"
   * });
   */
  GetCharacterStatistics (request: GetCharacterStatisticsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetCharacterStatisticsResult>("/Client/GetCharacterStatistics", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the title-specific URL for Cloud Script servers. This must be queried once, prior to making any calls to
   * RunCloudScript.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/server-side-cloud-script/getcloudscripturl Microsoft Documentation}
   * @deprecated Please use ExecuteCloudScript instead.
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
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/content/getcontentdownloadurl Microsoft Documentation}
   * @example
   * await clientClient.GetContentDownloadUrl({
   *   "Key": "images/sword_icon.png"
   * });
   */
  GetContentDownloadUrl (request: GetContentDownloadUrlRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetContentDownloadUrlResult>("/Client/GetContentDownloadUrl", request, "X-Authorization", extraHeaders);
  }

  /**
   * Get details about all current running game servers matching the given parameters.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/matchmaking/getcurrentgames Microsoft Documentation}
   * @deprecated Please use MultiplayerServer/ListMultiplayerServers instead.
   */
  GetCurrentGames (request: CurrentGamesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CurrentGamesResult>("/Client/GetCurrentGames", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves a list of ranked friends of the current player for the given statistic, starting from the indicated point in
   * the leaderboard
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/player-data-management/getfriendleaderboard Microsoft Documentation}
   * @example
   * await clientClient.GetFriendLeaderboard({
   *   "StatisticName": "Kills",
   *   "StartPosition": 1258,
   *   "MaxResultsCount": 20,
   *   "ExternalPlatformFriends": "Facebook, Xbox, Psn"
   * });
   */
  GetFriendLeaderboard (request: GetFriendLeaderboardRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetLeaderboardResult>("/Client/GetFriendLeaderboard", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves a list of ranked friends of the current player for the given statistic, centered on the currently signed-in
   * user
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/player-data-management/getfriendleaderboardaroundcurrentuser Microsoft Documentation}
   * @deprecated Please use GetFriendLeaderboardAroundPlayer instead.
   */
  GetFriendLeaderboardAroundCurrentUser (request: GetFriendLeaderboardAroundCurrentUserRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetFriendLeaderboardAroundCurrentUserResult>("/Client/GetFriendLeaderboardAroundCurrentUser", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves a list of ranked friends of the current player for the given statistic, centered on the requested PlayFab
   * user. If PlayFabId is empty or null will return currently logged in user.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/player-data-management/getfriendleaderboardaroundplayer Microsoft Documentation}
   * @example
   * await clientClient.GetFriendLeaderboardAroundPlayer({
   *   "StatisticName": "Kills",
   *   "MaxResultsCount": 20,
   *   "ExternalPlatformFriends": "None"
   * });
   */
  GetFriendLeaderboardAroundPlayer (request: GetFriendLeaderboardAroundPlayerRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetFriendLeaderboardAroundPlayerResult>("/Client/GetFriendLeaderboardAroundPlayer", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the current friend list for the local user, constrained to users who have PlayFab accounts. Friends from
   * linked accounts (Facebook, Steam) are also included. You may optionally exclude some linked services' friends.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/friend-list-management/getfriendslist Microsoft Documentation}
   * @example
   * await clientClient.GetFriendsList({
   *   "ExternalPlatformFriends": "Steam"
   * });
   */
  GetFriendsList (request: GetFriendsListRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetFriendsListResult>("/Client/GetFriendsList", request, "X-Authorization", extraHeaders);
  }

  /**
   * Get details about the regions hosting game servers matching the given parameters.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/matchmaking/getgameserverregions Microsoft Documentation}
   * @deprecated Please use MultiplayerServer/ListMultiplayerServers instead.
   */
  GetGameServerRegions (request: GameServerRegionsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GameServerRegionsResult>("/Client/GetGameServerRegions", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves a list of ranked users for the given statistic, starting from the indicated point in the leaderboard
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/player-data-management/getleaderboard Microsoft Documentation}
   * @example
   * await clientClient.GetLeaderboard({
   *   "StatisticName": "Kills",
   *   "StartPosition": 0,
   *   "MaxResultsCount": 20
   * });
   */
  GetLeaderboard (request: GetLeaderboardRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetLeaderboardResult>("/Client/GetLeaderboard", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves a list of ranked characters for the given statistic, centered on the requested Character ID
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/characters/getleaderboardaroundcharacter Microsoft Documentation}
   * @example
   * await clientClient.GetLeaderboardAroundCharacter({
   *   "StatisticName": "Kills",
   *   "CharacterId": "987343220",
   *   "MaxResultsCount": 20
   * });
   */
  GetLeaderboardAroundCharacter (request: GetLeaderboardAroundCharacterRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetLeaderboardAroundCharacterResult>("/Client/GetLeaderboardAroundCharacter", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves a list of ranked users for the given statistic, centered on the currently signed-in user
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/player-data-management/getleaderboardaroundcurrentuser Microsoft Documentation}
   * @deprecated Please use GetLeaderboardAroundPlayer instead.
   */
  GetLeaderboardAroundCurrentUser (request: GetLeaderboardAroundCurrentUserRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetLeaderboardAroundCurrentUserResult>("/Client/GetLeaderboardAroundCurrentUser", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves a list of ranked users for the given statistic, centered on the requested player. If PlayFabId is empty or
   * null will return currently logged in user.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/player-data-management/getleaderboardaroundplayer Microsoft Documentation}
   * @example
   * await clientClient.GetLeaderboardAroundPlayer({
   *   "StatisticName": "Kills",
   *   "MaxResultsCount": 20
   * });
   */
  GetLeaderboardAroundPlayer (request: GetLeaderboardAroundPlayerRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetLeaderboardAroundPlayerResult>("/Client/GetLeaderboardAroundPlayer", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves a list of all of the user's characters for the given statistic.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/characters/getleaderboardforusercharacters Microsoft Documentation}
   * @example
   * await clientClient.GetLeaderboardForUserCharacters({
   *   "StatisticName": "Kills"
   * });
   */
  GetLeaderboardForUserCharacters (request: GetLeaderboardForUsersCharactersRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetLeaderboardForUsersCharactersResult>("/Client/GetLeaderboardForUserCharacters", request, "X-Authorization", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ For payments flows where the provider requires playfab (the fulfiller) to initiate the transaction, but the
   * client completes the rest of the flow. In the Xsolla case, the token returned here will be passed to Xsolla by the
   * client to create a cart. Poll GetPurchase using the returned OrderId once you've completed the payment.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/player-item-management/getpaymenttoken Microsoft Documentation}
   * @example
   * await clientClient.GetPaymentToken({
   *   "TokenProvider": "xsolla"
   * });
   */
  GetPaymentToken (request: GetPaymentTokenRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPaymentTokenResult>("/Client/GetPaymentToken", request, "X-Authorization", extraHeaders);
  }

  /**
   * Gets a Photon custom authentication token that can be used to securely join the player into a Photon room. See
   * https://docs.microsoft.com/gaming/playfab/features/multiplayer/photon/quickstart for more details.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/authentication/getphotonauthenticationtoken Microsoft Documentation}
   * @example
   * await clientClient.GetPhotonAuthenticationToken({
   *   "PhotonApplicationId": "acaa26f3-fcdb-4af4-8c76-3a3d4dd3066f"
   * });
   */
  GetPhotonAuthenticationToken (request: GetPhotonAuthenticationTokenRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPhotonAuthenticationTokenResult>("/Client/GetPhotonAuthenticationToken", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves all of the user's different kinds of info.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/account-management/getplayercombinedinfo Microsoft Documentation}
   * @example
   * await clientClient.GetPlayerCombinedInfo({
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
    return this.ExecuteRequestWrapper<GetPlayerCombinedInfoResult>("/Client/GetPlayerCombinedInfo", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves a title-specific custom property value for a player.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/player-data-management/getplayercustomproperty Microsoft Documentation}
   * @example
   * await clientClient.GetPlayerCustomProperty({
   *   "PropertyName": "level"
   * });
   */
  GetPlayerCustomProperty (request: GetPlayerCustomPropertyRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayerCustomPropertyResult>("/Client/GetPlayerCustomProperty", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the player's profile
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/account-management/getplayerprofile Microsoft Documentation}
   * @example
   * await clientClient.GetPlayerProfile({
   *   "PlayFabId": "621EF20237534A44"
   * });
   */
  GetPlayerProfile (request: GetPlayerProfileRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayerProfileResult>("/Client/GetPlayerProfile", request, "X-Authorization", extraHeaders);
  }

  /**
   * List all segments that a player currently belongs to at this moment in time.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/playstream/getplayersegments Microsoft Documentation}
   * @example
   * await clientClient.GetPlayerSegments({});
   */
  GetPlayerSegments (request: GetPlayerSegmentsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayerSegmentsResult>("/Client/GetPlayerSegments", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the indicated statistics (current version and values for all statistics, if none are specified), for the local
   * player.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/player-data-management/getplayerstatistics Microsoft Documentation}
   * @example
   * await clientClient.GetPlayerStatistics({
   *   "StatisticNames": [
   *     "Points",
   *     "Wins"
   *   ]
   * });
   */
  GetPlayerStatistics (request: GetPlayerStatisticsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayerStatisticsResult>("/Client/GetPlayerStatistics", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the information on the available versions of the specified statistic.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/player-data-management/getplayerstatisticversions Microsoft Documentation}
   * @example
   * await clientClient.GetPlayerStatisticVersions({
   *   "StatisticName": "headshots"
   * });
   */
  GetPlayerStatisticVersions (request: GetPlayerStatisticVersionsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayerStatisticVersionsResult>("/Client/GetPlayerStatisticVersions", request, "X-Authorization", extraHeaders);
  }

  /**
   * Get all tags with a given Namespace (optional) from a player profile.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/playstream/getplayertags Microsoft Documentation}
   * @example
   * await clientClient.GetPlayerTags({
   *   "PlayFabId": "10931252888739651331",
   *   "Namespace": "title.AAA"
   * });
   */
  GetPlayerTags (request: GetPlayerTagsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayerTagsResult>("/Client/GetPlayerTags", request, "X-Authorization", extraHeaders);
  }

  /**
   * Gets all trades the player has either opened or accepted, optionally filtered by trade status.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/trading/getplayertrades Microsoft Documentation}
   * @example
   * await clientClient.GetPlayerTrades({
   *   "StatusFilter": "Filled"
   * });
   */
  GetPlayerTrades (request: GetPlayerTradesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayerTradesResponse>("/Client/GetPlayerTrades", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the unique PlayFab identifiers for the given set of Battle.net account identifiers.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/account-management/getplayfabidsfrombattlenetaccountids Microsoft Documentation}
   * @example
   * await clientClient.GetPlayFabIDsFromBattleNetAccountIds({
   *   "BattleNetAccountIds": [
   *     "526f79204261747478",
   *     "526f79204261747479"
   *   ]
   * });
   */
  GetPlayFabIDsFromBattleNetAccountIds (request: GetPlayFabIDsFromBattleNetAccountIdsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayFabIDsFromBattleNetAccountIdsResult>("/Client/GetPlayFabIDsFromBattleNetAccountIds", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the unique PlayFab identifiers for the given set of Facebook identifiers.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/account-management/getplayfabidsfromfacebookids Microsoft Documentation}
   * @example
   * await clientClient.GetPlayFabIDsFromFacebookIDs({
   *   "FacebookIDs": [
   *     "857498576495",
   *     "759374651209"
   *   ]
   * });
   */
  GetPlayFabIDsFromFacebookIDs (request: GetPlayFabIDsFromFacebookIDsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayFabIDsFromFacebookIDsResult>("/Client/GetPlayFabIDsFromFacebookIDs", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the unique PlayFab identifiers for the given set of Facebook Instant Game identifiers.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/account-management/getplayfabidsfromfacebookinstantgamesids Microsoft Documentation}
   * @example
   * await clientClient.GetPlayFabIDsFromFacebookInstantGamesIds({
   *   "FacebookInstantGamesIds": [
   *     "1114685845316172",
   *     "1114685845316173"
   *   ]
   * });
   */
  GetPlayFabIDsFromFacebookInstantGamesIds (request: GetPlayFabIDsFromFacebookInstantGamesIdsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayFabIDsFromFacebookInstantGamesIdsResult>("/Client/GetPlayFabIDsFromFacebookInstantGamesIds", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the unique PlayFab identifiers for the given set of Game Center identifiers (referenced in the Game Center
   * Programming Guide as the Player Identifier).
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/account-management/getplayfabidsfromgamecenterids Microsoft Documentation}
   * @example
   * await clientClient.GetPlayFabIDsFromGameCenterIDs({
   *   "GameCenterIDs": [
   *     "857498576495",
   *     "759374651209"
   *   ]
   * });
   */
  GetPlayFabIDsFromGameCenterIDs (request: GetPlayFabIDsFromGameCenterIDsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayFabIDsFromGameCenterIDsResult>("/Client/GetPlayFabIDsFromGameCenterIDs", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the unique PlayFab identifiers for the given set of generic service identifiers. A generic identifier is the
   * service name plus the service-specific ID for the player, as specified by the title when the generic identifier was
   * added to the player account.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/account-management/getplayfabidsfromgenericids Microsoft Documentation}
   * @example
   * await clientClient.GetPlayFabIDsFromGenericIDs({
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
    return this.ExecuteRequestWrapper<GetPlayFabIDsFromGenericIDsResult>("/Client/GetPlayFabIDsFromGenericIDs", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the unique PlayFab identifiers for the given set of Google identifiers. The Google identifiers are the IDs for
   * the user accounts, available as "id" in the Google+ People API calls.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/account-management/getplayfabidsfromgoogleids Microsoft Documentation}
   * @example
   * await clientClient.GetPlayFabIDsFromGoogleIDs({
   *   "GoogleIDs": [
   *     "857498576495",
   *     "759374651209"
   *   ]
   * });
   */
  GetPlayFabIDsFromGoogleIDs (request: GetPlayFabIDsFromGoogleIDsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayFabIDsFromGoogleIDsResult>("/Client/GetPlayFabIDsFromGoogleIDs", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the unique PlayFab identifiers for the given set of Google Play Games identifiers. The Google Play Games
   * identifiers are the IDs for the user accounts, available as "playerId" in the Google Play Games Services - Players API
   * calls.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/account-management/getplayfabidsfromgoogleplaygamesplayerids Microsoft Documentation}
   * @example
   * await clientClient.GetPlayFabIDsFromGooglePlayGamesPlayerIDs({
   *   "GooglePlayGamesPlayerIDs": [
   *     "857498576495",
   *     "759374651209"
   *   ]
   * });
   */
  GetPlayFabIDsFromGooglePlayGamesPlayerIDs (request: GetPlayFabIDsFromGooglePlayGamesPlayerIDsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayFabIDsFromGooglePlayGamesPlayerIDsResult>("/Client/GetPlayFabIDsFromGooglePlayGamesPlayerIDs", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the unique PlayFab identifiers for the given set of Kongregate identifiers. The Kongregate identifiers are the
   * IDs for the user accounts, available as "user_id" from the Kongregate API methods(ex:
   * http://developers.kongregate.com/docs/client/getUserId).
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/account-management/getplayfabidsfromkongregateids Microsoft Documentation}
   * @example
   * await clientClient.GetPlayFabIDsFromKongregateIDs({
   *   "KongregateIDs": [
   *     "857498576495",
   *     "759374651209"
   *   ]
   * });
   */
  GetPlayFabIDsFromKongregateIDs (request: GetPlayFabIDsFromKongregateIDsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayFabIDsFromKongregateIDsResult>("/Client/GetPlayFabIDsFromKongregateIDs", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the unique PlayFab identifiers for the given set of Nintendo Service Account identifiers.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/account-management/getplayfabidsfromnintendoserviceaccountids Microsoft Documentation}
   * @example
   * await clientClient.GetPlayFabIDsFromNintendoServiceAccountIds({
   *   "NintendoAccountIds": [
   *     "526f79204261747478",
   *     "526f79204261747479"
   *   ]
   * });
   */
  GetPlayFabIDsFromNintendoServiceAccountIds (request: GetPlayFabIDsFromNintendoServiceAccountIdsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayFabIDsFromNintendoServiceAccountIdsResult>("/Client/GetPlayFabIDsFromNintendoServiceAccountIds", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the unique PlayFab identifiers for the given set of Nintendo Switch Device identifiers.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/account-management/getplayfabidsfromnintendoswitchdeviceids Microsoft Documentation}
   * @example
   * await clientClient.GetPlayFabIDsFromNintendoSwitchDeviceIds({
   *   "NintendoSwitchDeviceIds": [
   *     "526f79204261747478",
   *     "526f79204261747479"
   *   ]
   * });
   */
  GetPlayFabIDsFromNintendoSwitchDeviceIds (request: GetPlayFabIDsFromNintendoSwitchDeviceIdsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayFabIDsFromNintendoSwitchDeviceIdsResult>("/Client/GetPlayFabIDsFromNintendoSwitchDeviceIds", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the unique PlayFab identifiers for the given set of PlayStation :tm: Network identifiers.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/account-management/getplayfabidsfrompsnaccountids Microsoft Documentation}
   * @example
   * await clientClient.GetPlayFabIDsFromPSNAccountIDs({
   *   "PSNAccountIDs": [
   *     "857498576495",
   *     "759374651209"
   *   ]
   * });
   */
  GetPlayFabIDsFromPSNAccountIDs (request: GetPlayFabIDsFromPSNAccountIDsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayFabIDsFromPSNAccountIDsResult>("/Client/GetPlayFabIDsFromPSNAccountIDs", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the unique PlayFab identifiers for the given set of PlayStation :tm: Network identifiers.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/account-management/getplayfabidsfrompsnonlineids Microsoft Documentation}
   * @example
   * await clientClient.GetPlayFabIDsFromPSNOnlineIDs({
   *   "PSNOnlineIDs": [
   *     "857555576495",
   *     "759345551209"
   *   ]
   * });
   */
  GetPlayFabIDsFromPSNOnlineIDs (request: GetPlayFabIDsFromPSNOnlineIDsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayFabIDsFromPSNOnlineIDsResult>("/Client/GetPlayFabIDsFromPSNOnlineIDs", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the unique PlayFab identifiers for the given set of Steam identifiers. The Steam identifiers are the profile
   * IDs for the user accounts, available as SteamId in the Steamworks Community API calls.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/account-management/getplayfabidsfromsteamids Microsoft Documentation}
   * @example
   * await clientClient.GetPlayFabIDsFromSteamIDs({
   *   "SteamStringIDs": [
   *     "857498576495",
   *     "759374651209"
   *   ]
   * });
   */
  GetPlayFabIDsFromSteamIDs (request: GetPlayFabIDsFromSteamIDsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayFabIDsFromSteamIDsResult>("/Client/GetPlayFabIDsFromSteamIDs", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the unique PlayFab identifiers for the given set of Steam identifiers. The Steam identifiers are persona
   * names.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/account-management/getplayfabidsfromsteamnames Microsoft Documentation}
   * @example
   * await clientClient.GetPlayFabIDsFromSteamNames({
   *   "SteamNames": [
   *     "steamPersonaName1",
   *     "steamPersonaName2"
   *   ]
   * });
   */
  GetPlayFabIDsFromSteamNames (request: GetPlayFabIDsFromSteamNamesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayFabIDsFromSteamNamesResult>("/Client/GetPlayFabIDsFromSteamNames", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the unique PlayFab identifiers for the given set of Twitch identifiers. The Twitch identifiers are the IDs for
   * the user accounts, available as "_id" from the Twitch API methods (ex:
   * https://github.com/justintv/Twitch-API/blob/master/v3_resources/users.md#get-usersuser).
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/account-management/getplayfabidsfromtwitchids Microsoft Documentation}
   * @example
   * await clientClient.GetPlayFabIDsFromTwitchIDs({
   *   "TwitchIds": [
   *     "127168541",
   *     "88315720"
   *   ]
   * });
   */
  GetPlayFabIDsFromTwitchIDs (request: GetPlayFabIDsFromTwitchIDsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayFabIDsFromTwitchIDsResult>("/Client/GetPlayFabIDsFromTwitchIDs", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the unique PlayFab identifiers for the given set of XboxLive identifiers.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/account-management/getplayfabidsfromxboxliveids Microsoft Documentation}
   * @example
   * await clientClient.GetPlayFabIDsFromXboxLiveIDs({
   *   "XboxLiveAccountIDs": [
   *     "857498576495",
   *     "759374651209"
   *   ],
   *   "Sandbox": "RETAIL"
   * });
   */
  GetPlayFabIDsFromXboxLiveIDs (request: GetPlayFabIDsFromXboxLiveIDsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayFabIDsFromXboxLiveIDsResult>("/Client/GetPlayFabIDsFromXboxLiveIDs", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the key-value store of custom publisher settings
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/title-wide-data-management/getpublisherdata Microsoft Documentation}
   * @example
   * await clientClient.GetPublisherData({
   *   "Keys": [
   *     "color",
   *     "propertyA"
   *   ]
   * });
   */
  GetPublisherData (request: GetPublisherDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPublisherDataResult>("/Client/GetPublisherData", request, "X-Authorization", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Retrieves a purchase along with its current PlayFab status. Returns inventory items from the purchase that
   * are still active.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/player-item-management/getpurchase Microsoft Documentation}
   * @example
   * await clientClient.GetPurchase({
   *   "OrderId": "8853591446005860822"
   * });
   */
  GetPurchase (request: GetPurchaseRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPurchaseResult>("/Client/GetPurchase", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves data stored in a shared group object, as well as the list of members in the group. Non-members of the group
   * may use this to retrieve group data, including membership, but they will not receive data for keys marked as private.
   * Shared Groups are designed for sharing data between a very small number of players, please see our guide:
   * https://docs.microsoft.com/gaming/playfab/features/social/groups/using-shared-group-data
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/shared-group-data/getsharedgroupdata Microsoft Documentation}
   * @example
   * await clientClient.GetSharedGroupData({
   *   "SharedGroupId": "Clan Data",
   *   "Keys": [
   *     "ClanKills",
   *     "LastClanUpdate"
   *   ],
   *   "GetMembers": true
   * });
   */
  GetSharedGroupData (request: GetSharedGroupDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetSharedGroupDataResult>("/Client/GetSharedGroupData", request, "X-Authorization", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Retrieves the set of items defined for the specified store, including all prices defined
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/title-wide-data-management/getstoreitems Microsoft Documentation}
   * @example
   * await clientClient.GetStoreItems({
   *   "StoreId": "BonusStore"
   * });
   */
  GetStoreItems (request: GetStoreItemsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetStoreItemsResult>("/Client/GetStoreItems", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the current server time
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/title-wide-data-management/gettime Microsoft Documentation}
   * @example
   * await clientClient.GetTime({});
   */
  GetTime (request: GetTimeRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetTimeResult>("/Client/GetTime", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the key-value store of custom title settings
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/title-wide-data-management/gettitledata Microsoft Documentation}
   * @example
   * await clientClient.GetTitleData({
   *   "Keys": [
   *     "color",
   *     "propertyA"
   *   ]
   * });
   */
  GetTitleData (request: GetTitleDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetTitleDataResult>("/Client/GetTitleData", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the title news feed, as configured in the developer portal
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/title-wide-data-management/gettitlenews Microsoft Documentation}
   * @example
   * await clientClient.GetTitleNews({
   *   "Count": 25
   * });
   */
  GetTitleNews (request: GetTitleNewsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetTitleNewsResult>("/Client/GetTitleNews", request, "X-Authorization", extraHeaders);
  }

  /**
   * Returns the title's base 64 encoded RSA CSP blob.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/authentication/gettitlepublickey Microsoft Documentation}
   * @example
   * await clientClient.GetTitlePublicKey({
   *   "TitleId": "ID",
   *   "TitleSharedSecret": "ExampleSecret"
   * });
   */
  GetTitlePublicKey (request: GetTitlePublicKeyRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetTitlePublicKeyResult>("/Client/GetTitlePublicKey", request, null, extraHeaders);
  }

  /**
   * Gets the current status of an existing trade.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/trading/gettradestatus Microsoft Documentation}
   * @example
   * await clientClient.GetTradeStatus({
   *   "OfferingPlayerId": "CD803BF233CE76CC",
   *   "TradeId": "D819CEC225EA9948C351"
   * });
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
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/account-management/getusercombinedinfo Microsoft Documentation}
   * @deprecated Please use GetPlayerCombinedInfo instead.
   */
  GetUserCombinedInfo (request: GetUserCombinedInfoRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetUserCombinedInfoResult>("/Client/GetUserCombinedInfo", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the title-specific custom data for the user which is readable and writable by the client
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/player-data-management/getuserdata Microsoft Documentation}
   * @example
   * await clientClient.GetUserData({
   *   "Keys": [
   *     "preferences",
   *     "progress"
   *   ]
   * });
   */
  GetUserData (request: GetUserDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetUserDataResult>("/Client/GetUserData", request, "X-Authorization", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Retrieves the user's current inventory of virtual goods
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/player-item-management/getuserinventory Microsoft Documentation}
   * @example
   * await clientClient.GetUserInventory({});
   */
  GetUserInventory (request: GetUserInventoryRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetUserInventoryResult>("/Client/GetUserInventory", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the publisher-specific custom data for the user which is readable and writable by the client
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/player-data-management/getuserpublisherdata Microsoft Documentation}
   * @example
   * await clientClient.GetUserPublisherData({
   *   "Keys": [
   *     "preferences",
   *     "progress"
   *   ]
   * });
   */
  GetUserPublisherData (request: GetUserDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetUserDataResult>("/Client/GetUserPublisherData", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the publisher-specific custom data for the user which can only be read by the client
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/player-data-management/getuserpublisherreadonlydata Microsoft Documentation}
   * @example
   * await clientClient.GetUserPublisherReadOnlyData({
   *   "Keys": [
   *     "preferences",
   *     "progress"
   *   ]
   * });
   */
  GetUserPublisherReadOnlyData (request: GetUserDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetUserDataResult>("/Client/GetUserPublisherReadOnlyData", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the title-specific custom data for the user which can only be read by the client
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/player-data-management/getuserreadonlydata Microsoft Documentation}
   * @example
   * await clientClient.GetUserReadOnlyData({
   *   "Keys": [
   *     "preferences",
   *     "progress"
   *   ]
   * });
   */
  GetUserReadOnlyData (request: GetUserDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetUserDataResult>("/Client/GetUserReadOnlyData", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves the details of all title-specific statistics for the user
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/player-data-management/getuserstatistics Microsoft Documentation}
   * @deprecated Please use GetPlayerStatistics instead.
   */
  GetUserStatistics (request: GetUserStatisticsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetUserStatisticsResult>("/Client/GetUserStatistics", request, "X-Authorization", extraHeaders);
  }

  /**
   * Grants the specified character type to the user. CharacterIds are not globally unique; characterId must be evaluated
   * with the parent PlayFabId to guarantee uniqueness.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/characters/grantcharactertouser Microsoft Documentation}
   * @example
   * await clientClient.GrantCharacterToUser({
   *   "CatalogVersion": "2.2",
   *   "ItemId": "Blue Warrior",
   *   "CharacterName": "FighterDude"
   * });
   */
  GrantCharacterToUser (request: GrantCharacterToUserRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GrantCharacterToUserResult>("/Client/GrantCharacterToUser", request, "X-Authorization", extraHeaders);
  }

  /**
   * Links the Android device identifier to the user's PlayFab account
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/account-management/linkandroiddeviceid Microsoft Documentation}
   * @example
   * await clientClient.LinkAndroidDeviceID({
   *   "AndroidDeviceId": "526f79204261747479",
   *   "OS": "5.0",
   *   "AndroidDevice": "Nexus 6"
   * });
   */
  LinkAndroidDeviceID (request: LinkAndroidDeviceIDRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<LinkAndroidDeviceIDResult>("/Client/LinkAndroidDeviceID", request, "X-Authorization", extraHeaders);
  }

  /**
   * Links the Apple account associated with the token to the user's PlayFab account.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/account-management/linkapple Microsoft Documentation}
   * @example
   * await clientClient.LinkApple({
   *   "IdentityToken": "eyJraWQi..."
   * });
   */
  LinkApple (request: LinkAppleRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResult>("/Client/LinkApple", request, "X-Authorization", extraHeaders);
  }

  /**
   * Links the Battle.net account associated with the token to the user's PlayFab account.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/account-management/linkbattlenetaccount Microsoft Documentation}
   * @example
   * await clientClient.LinkBattleNetAccount({
   *   "IdentityToken": "eyJraWQi..."
   * });
   */
  LinkBattleNetAccount (request: LinkBattleNetAccountRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Client/LinkBattleNetAccount", request, "X-Authorization", extraHeaders);
  }

  /**
   * Links the custom identifier, generated by the title, to the user's PlayFab account
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/account-management/linkcustomid Microsoft Documentation}
   * @example
   * await clientClient.LinkCustomID({
   *   "CustomId": "67AB-5397-CC54-EA31"
   * });
   */
  LinkCustomID (request: LinkCustomIDRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<LinkCustomIDResult>("/Client/LinkCustomID", request, "X-Authorization", extraHeaders);
  }

  /**
   * Links the Facebook account associated with the provided Facebook access token to the user's PlayFab account
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/account-management/linkfacebookaccount Microsoft Documentation}
   * @example
   * await clientClient.LinkFacebookAccount({
   *   "AccessToken": "FaceAccessTokenID"
   * });
   */
  LinkFacebookAccount (request: LinkFacebookAccountRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<LinkFacebookAccountResult>("/Client/LinkFacebookAccount", request, "X-Authorization", extraHeaders);
  }

  /**
   * Links the Facebook Instant Games Id to the user's PlayFab account
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/account-management/linkfacebookinstantgamesid Microsoft Documentation}
   * @example
   * await clientClient.LinkFacebookInstantGamesId({
   *   "FacebookInstantGamesSignature": "abcdef"
   * });
   */
  LinkFacebookInstantGamesId (request: LinkFacebookInstantGamesIdRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<LinkFacebookInstantGamesIdResult>("/Client/LinkFacebookInstantGamesId", request, "X-Authorization", extraHeaders);
  }

  /**
   * Links the Game Center account associated with the provided Game Center ID to the user's PlayFab account. Logging in with
   * a Game Center ID is insecure if you do not include the optional PublicKeyUrl, Salt, Signature, and Timestamp parameters
   * in this request. It is recommended you require these parameters on all Game Center calls by going to the Apple Add-ons
   * page in the PlayFab Game Manager and enabling the 'Require secure authentication only for this app' option.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/account-management/linkgamecenteraccount Microsoft Documentation}
   * @example
   * await clientClient.LinkGameCenterAccount({
   *   "GameCenterId": "2998h2998f0b000d0993"
   * });
   */
  LinkGameCenterAccount (request: LinkGameCenterAccountRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<LinkGameCenterAccountResult>("/Client/LinkGameCenterAccount", request, "X-Authorization", extraHeaders);
  }

  /**
   * Links the currently signed-in user account to their Google account, using their Google account credentials
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/account-management/linkgoogleaccount Microsoft Documentation}
   * @example
   * await clientClient.LinkGoogleAccount({
   *   "ServerAuthCode": "4/TPdB1ter7eJ7cQ0lGBa6p1Cn-sSHJEXmPJ7t1-v4_ds#"
   * });
   */
  LinkGoogleAccount (request: LinkGoogleAccountRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<LinkGoogleAccountResult>("/Client/LinkGoogleAccount", request, "X-Authorization", extraHeaders);
  }

  /**
   * Links the currently signed-in user account to their Google Play Games account, using their Google Play Games account
   * credentials
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/account-management/linkgoogleplaygamesservicesaccount Microsoft Documentation}
   * @example
   * await clientClient.LinkGooglePlayGamesServicesAccount({
   *   "ServerAuthCode": "4/TPdB1ter7eJ7cQ0lGBa6p1Cn-sSHJEXmPJ7t1-v4_ds#"
   * });
   */
  LinkGooglePlayGamesServicesAccount (request: LinkGooglePlayGamesServicesAccountRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<LinkGooglePlayGamesServicesAccountResult>("/Client/LinkGooglePlayGamesServicesAccount", request, "X-Authorization", extraHeaders);
  }

  /**
   * Links the vendor-specific iOS device identifier to the user's PlayFab account
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/account-management/linkiosdeviceid Microsoft Documentation}
   * @example
   * await clientClient.LinkIOSDeviceID({
   *   "DeviceId": "29848d9bh8900a0b003",
   *   "OS": "7.11",
   *   "DeviceModel": "Iphone 5s"
   * });
   */
  LinkIOSDeviceID (request: LinkIOSDeviceIDRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<LinkIOSDeviceIDResult>("/Client/LinkIOSDeviceID", request, "X-Authorization", extraHeaders);
  }

  /**
   * Links the Kongregate identifier to the user's PlayFab account
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/account-management/linkkongregate Microsoft Documentation}
   * @example
   * await clientClient.LinkKongregate({
   *   "KongregateId": "457332",
   *   "AuthTicket": "{123-456-78931212}"
   * });
   */
  LinkKongregate (request: LinkKongregateAccountRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<LinkKongregateAccountResult>("/Client/LinkKongregate", request, "X-Authorization", extraHeaders);
  }

  /**
   * Links the Nintendo account associated with the token to the user's PlayFab account.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/account-management/linknintendoserviceaccount Microsoft Documentation}
   * @example
   * await clientClient.LinkNintendoServiceAccount({
   *   "IdentityToken": "eyJraWQi..."
   * });
   */
  LinkNintendoServiceAccount (request: LinkNintendoServiceAccountRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResult>("/Client/LinkNintendoServiceAccount", request, "X-Authorization", extraHeaders);
  }

  /**
   * Links the NintendoSwitchDeviceId to the user's PlayFab account
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/account-management/linknintendoswitchdeviceid Microsoft Documentation}
   * @example
   * await clientClient.LinkNintendoSwitchDeviceId({
   *   "NintendoSwitchDeviceId": "526f79204261747479"
   * });
   */
  LinkNintendoSwitchDeviceId (request: LinkNintendoSwitchDeviceIdRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<LinkNintendoSwitchDeviceIdResult>("/Client/LinkNintendoSwitchDeviceId", request, "X-Authorization", extraHeaders);
  }

  /**
   * Links an OpenID Connect account to a user's PlayFab account, based on an existing relationship between a title and an
   * Open ID Connect provider and the OpenId Connect JWT from that provider.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/account-management/linkopenidconnect Microsoft Documentation}
   * @example
   * await clientClient.LinkOpenIdConnect({
   *   "ConnectionId": "exampleprovider",
   *   "IdToken": "eyJraWQi..."
   * });
   */
  LinkOpenIdConnect (request: LinkOpenIdConnectRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResult>("/Client/LinkOpenIdConnect", request, "X-Authorization", extraHeaders);
  }

  /**
   * Links the PlayStation :tm: Network account associated with the provided access code to the user's PlayFab account
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/account-management/linkpsnaccount Microsoft Documentation}
   * @example
   * await clientClient.LinkPSNAccount({
   *   "AuthCode": "LKJDG7DDE",
   *   "RedirectUri": "orbis://games"
   * });
   */
  LinkPSNAccount (request: LinkPSNAccountRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<LinkPSNAccountResult>("/Client/LinkPSNAccount", request, "X-Authorization", extraHeaders);
  }

  /**
   * Links the Steam account associated with the provided Steam authentication ticket to the user's PlayFab account
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/account-management/linksteamaccount Microsoft Documentation}
   * @example
   * await clientClient.LinkSteamAccount({
   *   "SteamTicket": "steamTicketID",
   *   "TicketIsServiceSpecific": true
   * });
   */
  LinkSteamAccount (request: LinkSteamAccountRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<LinkSteamAccountResult>("/Client/LinkSteamAccount", request, "X-Authorization", extraHeaders);
  }

  /**
   * Links the Twitch account associated with the token to the user's PlayFab account.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/account-management/linktwitch Microsoft Documentation}
   * @example
   * await clientClient.LinkTwitch({
   *   "AccessToken": "TwitchAccessToken"
   * });
   */
  LinkTwitch (request: LinkTwitchAccountRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<LinkTwitchAccountResult>("/Client/LinkTwitch", request, "X-Authorization", extraHeaders);
  }

  /**
   * Links the Xbox Live account associated with the provided access code to the user's PlayFab account
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/account-management/linkxboxaccount Microsoft Documentation}
   * @example
   * await clientClient.LinkXboxAccount({
   *   "XboxToken": "XBL3.0 x=1981989841;akljdlkafdknad"
   * });
   */
  LinkXboxAccount (request: LinkXboxAccountRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<LinkXboxAccountResult>("/Client/LinkXboxAccount", request, "X-Authorization", extraHeaders);
  }

  /**
   * Retrieves title-specific custom property values for a player.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/player-data-management/listplayercustomproperties Microsoft Documentation}
   * @example
   * await clientClient.ListPlayerCustomProperties({});
   */
  ListPlayerCustomProperties (request: ListPlayerCustomPropertiesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListPlayerCustomPropertiesResult>("/Client/ListPlayerCustomProperties", request, "X-Authorization", extraHeaders);
  }

  /**
   * Logs a custom analytics event
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/analytics/logevent Microsoft Documentation}
   * @deprecated Please use WritePlayerEvent instead.
   */
  LogEvent (request: LogEventRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<LogEventResult>("/Client/LogEvent", request, "X-Authorization", extraHeaders);
  }

  /**
   * Signs the user in using the Android device identifier, returning a session identifier that can subsequently be used for
   * API calls which require an authenticated user
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/authentication/loginwithandroiddeviceid Microsoft Documentation}
   * @example
   * await clientClient.LoginWithAndroidDeviceID({
   *   "AndroidDeviceId": "526f79204261747479",
   *   "OS": "5.0",
   *   "AndroidDevice": "Nexus 6",
   *   "CreateAccount": false,
   *   "TitleId": "144"
   * });
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
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/authentication/loginwithapple Microsoft Documentation}
   * @example
   * await clientClient.LoginWithApple({
   *   "IdentityToken": "eyJraWQi...",
   *   "TitleId": "144"
   * });
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
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/authentication/loginwithbattlenet Microsoft Documentation}
   * @example
   * await clientClient.LoginWithBattleNet({
   *   "IdentityToken": "eyJraWQi...",
   *   "TitleId": "144"
   * });
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
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/authentication/loginwithcustomid Microsoft Documentation}
   * @example
   * await clientClient.LoginWithCustomID({
   *   "CustomId": "67AB-5397-CC54-EA31",
   *   "CreateAccount": false,
   *   "TitleId": "144"
   * });
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
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/authentication/loginwithemailaddress Microsoft Documentation}
   * @example
   * await clientClient.LoginWithEmailAddress({
   *   "Email": "theuser@domain.com",
   *   "Password": "thepassword",
   *   "TitleId": "144"
   * });
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
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/authentication/loginwithfacebook Microsoft Documentation}
   * @example
   * await clientClient.LoginWithFacebook({
   *   "AccessToken": "FaceAccessTokenID",
   *   "CreateAccount": false,
   *   "TitleId": "144"
   * });
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
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/authentication/loginwithfacebookinstantgamesid Microsoft Documentation}
   * @example
   * await clientClient.LoginWithFacebookInstantGamesId({
   *   "FacebookInstantGamesSignature": "abcdef",
   *   "CreateAccount": false,
   *   "TitleId": "144"
   * });
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
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/authentication/loginwithgamecenter Microsoft Documentation}
   * @example
   * await clientClient.LoginWithGameCenter({
   *   "PlayerId": "pachycephalosaurus01",
   *   "CreateAccount": false,
   *   "TitleId": "144"
   * });
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
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/authentication/loginwithgoogleaccount Microsoft Documentation}
   * @example
   * await clientClient.LoginWithGoogleAccount({
   *   "ServerAuthCode": "4/TPdB1ter7eJ7cQ0lGBa6p1Cn-sSHJEXmPJ7t1-v4_ds#",
   *   "CreateAccount": false,
   *   "SetEmail": true,
   *   "TitleId": "144"
   * });
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
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/authentication/loginwithgoogleplaygamesservices Microsoft Documentation}
   * @example
   * await clientClient.LoginWithGooglePlayGamesServices({
   *   "ServerAuthCode": "4/TPdB1ter7eJ7cQ0lGBa6p1Cn-sSHJEXmPJ7t1-v4_ds#",
   *   "CreateAccount": false,
   *   "TitleId": "144"
   * });
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
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/authentication/loginwithiosdeviceid Microsoft Documentation}
   * @example
   * await clientClient.LoginWithIOSDeviceID({
   *   "DeviceId": "29848d9bh8900a0b003",
   *   "OS": "7.11",
   *   "DeviceModel": "Iphone 5s",
   *   "CreateAccount": false,
   *   "TitleId": "144"
   * });
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
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/authentication/loginwithkongregate Microsoft Documentation}
   * @example
   * await clientClient.LoginWithKongregate({
   *   "KongregateId": "457332",
   *   "AuthTicket": "SomeKongregateTokenHere",
   *   "CreateAccount": false,
   *   "TitleId": "144"
   * });
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
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/authentication/loginwithnintendoserviceaccount Microsoft Documentation}
   * @example
   * await clientClient.LoginWithNintendoServiceAccount({
   *   "IdentityToken": "eyJraWQi...",
   *   "TitleId": "144"
   * });
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
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/authentication/loginwithnintendoswitchdeviceid Microsoft Documentation}
   * @example
   * await clientClient.LoginWithNintendoSwitchDeviceId({
   *   "NintendoSwitchDeviceId": "526f79204261747479",
   *   "CreateAccount": false,
   *   "TitleId": "144"
   * });
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
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/authentication/loginwithopenidconnect Microsoft Documentation}
   * @example
   * await clientClient.LoginWithOpenIdConnect({
   *   "ConnectionId": "exampleprovider",
   *   "IdToken": "eyJraWQi...",
   *   "TitleId": "144"
   * });
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
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/authentication/loginwithplayfab Microsoft Documentation}
   * @example
   * await clientClient.LoginWithPlayFab({
   *   "Username": "theuser",
   *   "Password": "ExampleSecret",
   *   "TitleId": "144"
   * });
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
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/authentication/loginwithpsn Microsoft Documentation}
   * @example
   * await clientClient.LoginWithPSN({
   *   "AuthCode": "LKJ6D896D",
   *   "RedirectUri": "orbis://games",
   *   "CreateAccount": false,
   *   "TitleId": "144"
   * });
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
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/authentication/loginwithsteam Microsoft Documentation}
   * @example
   * await clientClient.LoginWithSteam({
   *   "SteamTicket": "steamTicketID",
   *   "CreateAccount": false,
   *   "TicketIsServiceSpecific": true,
   *   "TitleId": "144"
   * });
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
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/authentication/loginwithtwitch Microsoft Documentation}
   * @example
   * await clientClient.LoginWithTwitch({
   *   "AccessToken": "SomeTwitchTokenHere",
   *   "CreateAccount": false,
   *   "TitleId": "144"
   * });
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
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/authentication/loginwithxbox Microsoft Documentation}
   * @example
   * await clientClient.LoginWithXbox({
   *   "XboxToken": "XBL3.0 x=1981989841;akljdlkafdknad",
   *   "CreateAccount": false,
   *   "TitleId": "144"
   * });
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
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/matchmaking/matchmake Microsoft Documentation}
   * @deprecated Please use Match/CreateMatchmakingTicket instead.
   */
  Matchmake (request: MatchmakeRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<MatchmakeResult>("/Client/Matchmake", request, "X-Authorization", extraHeaders);
  }

  /**
   * Opens a new outstanding trade. Note that a given item instance may only be in one open trade at a time.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/trading/opentrade Microsoft Documentation}
   * @example
   * await clientClient.OpenTrade({
   *   "OfferedInventoryInstanceIds": [
   *     "1359447",
   *     "635691"
   *   ],
   *   "RequestedCatalogItemIds": [
   *     "rare_hat_7"
   *   ]
   * });
   */
  OpenTrade (request: OpenTradeRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<OpenTradeResponse>("/Client/OpenTrade", request, "X-Authorization", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Selects a payment option for purchase order created via StartPurchase
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/player-item-management/payforpurchase Microsoft Documentation}
   * @example
   * await clientClient.PayForPurchase({
   *   "OrderId": "8853591446005860822",
   *   "ProviderName": "PayPal",
   *   "Currency": "RM"
   * });
   */
  PayForPurchase (request: PayForPurchaseRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<PayForPurchaseResult>("/Client/PayForPurchase", request, "X-Authorization", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Buys a single item with virtual currency. You must specify both the virtual currency to use to purchase, as
   * well as what the client believes the price to be. This lets the server fail the purchase if the price has changed.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/player-item-management/purchaseitem Microsoft Documentation}
   * @example
   * await clientClient.PurchaseItem({
   *   "ItemId": "shield_level_5",
   *   "VirtualCurrency": "GV",
   *   "Price": 25
   * });
   */
  PurchaseItem (request: PurchaseItemRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<PurchaseItemResult>("/Client/PurchaseItem", request, "X-Authorization", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Adds the virtual goods associated with the coupon to the user's inventory. Coupons can be generated via the
   * Economy->Catalogs tab in the PlayFab Game Manager.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/player-item-management/redeemcoupon Microsoft Documentation}
   * @example
   * await clientClient.RedeemCoupon({
   *   "CouponCode": "123-1234-123",
   *   "CatalogVersion": "5"
   * });
   */
  RedeemCoupon (request: RedeemCouponRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<RedeemCouponResult>("/Client/RedeemCoupon", request, "X-Authorization", extraHeaders);
  }

  /**
   * Uses the supplied OAuth code to refresh the internally cached player PlayStation :tm: Network auth token
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/platform-specific-methods/refreshpsnauthtoken Microsoft Documentation}
   * @example
   * await clientClient.RefreshPSNAuthToken({
   *   "AuthCode": "LKJDG7DDE",
   *   "RedirectUri": "orbis://games"
   * });
   */
  RefreshPSNAuthToken (request: RefreshPSNAuthTokenRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Client/RefreshPSNAuthToken", request, "X-Authorization", extraHeaders);
  }

  /**
   * Registers the iOS device to receive push notifications
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/platform-specific-methods/registerforiospushnotification Microsoft Documentation}
   * @example
   * await clientClient.RegisterForIOSPushNotification({
   *   "DeviceToken": "39872f98eb882brn8hg3889",
   *   "SendPushNotificationConfirmation": true,
   *   "ConfirmationMessage": "Welcome to PlayFab"
   * });
   */
  RegisterForIOSPushNotification (request: RegisterForIOSPushNotificationRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<RegisterForIOSPushNotificationResult>("/Client/RegisterForIOSPushNotification", request, "X-Authorization", extraHeaders);
  }

  /**
   * Registers a new Playfab user account, returning a session identifier that can subsequently be used for API calls which
   * require an authenticated user. You must supply a username and an email address.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/authentication/registerplayfabuser Microsoft Documentation}
   * @example
   * await clientClient.RegisterPlayFabUser({
   *   "Username": "theuser",
   *   "Email": "me@here.com",
   *   "Password": "ExampleSecret",
   *   "TitleId": "1"
   * });
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
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/account-management/removecontactemail Microsoft Documentation}
   * @example
   * await clientClient.RemoveContactEmail({});
   */
  RemoveContactEmail (request: RemoveContactEmailRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<RemoveContactEmailResult>("/Client/RemoveContactEmail", request, "X-Authorization", extraHeaders);
  }

  /**
   * Removes a specified user from the friend list of the local user
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/friend-list-management/removefriend Microsoft Documentation}
   * @example
   * await clientClient.RemoveFriend({
   *   "FriendPlayFabId": "29837799"
   * });
   */
  RemoveFriend (request: RemoveFriendRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<RemoveFriendResult>("/Client/RemoveFriend", request, "X-Authorization", extraHeaders);
  }

  /**
   * Removes the specified generic service identifier from the player's PlayFab account.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/account-management/removegenericid Microsoft Documentation}
   * @example
   * await clientClient.RemoveGenericID({
   *   "GenericId": {
   *     "ServiceName": "BigBizSocial",
   *     "UserId": "1234567890"
   *   }
   * });
   */
  RemoveGenericID (request: RemoveGenericIDRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<RemoveGenericIDResult>("/Client/RemoveGenericID", request, "X-Authorization", extraHeaders);
  }

  /**
   * Removes users from the set of those able to update the shared data and the set of users in the group. Only users in the
   * group can remove members. If as a result of the call, zero users remain with access, the group and its associated data
   * will be deleted. Shared Groups are designed for sharing data between a very small number of players, please see our
   * guide: https://docs.microsoft.com/gaming/playfab/features/social/groups/using-shared-group-data
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/shared-group-data/removesharedgroupmembers Microsoft Documentation}
   * @example
   * await clientClient.RemoveSharedGroupMembers({
   *   "SharedGroupId": "Clan Data",
   *   "PlayFabIds": [
   *     "D984A64B832",
   *     "F74A523E1562"
   *   ]
   * });
   */
  RemoveSharedGroupMembers (request: RemoveSharedGroupMembersRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<RemoveSharedGroupMembersResult>("/Client/RemoveSharedGroupMembers", request, "X-Authorization", extraHeaders);
  }

  /**
   * Report player's ad activity
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/advertising/reportadactivity Microsoft Documentation}
   * @example
   * await clientClient.ReportAdActivity({
   *   "PlacementId": "A124572382B",
   *   "RewardId": "B2674981A",
   *   "Activity": "End"
   * });
   */
  ReportAdActivity (request: ReportAdActivityRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ReportAdActivityResult>("/Client/ReportAdActivity", request, "X-Authorization", extraHeaders);
  }

  /**
   * Write a PlayStream event to describe the provided player device information. This API method is not designed to be
   * called directly by developers. Each PlayFab client SDK will eventually report this information automatically.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/analytics/reportdeviceinfo Microsoft Documentation}
   * @example
   * await clientClient.ReportDeviceInfo({
   *   "Info": {
   *     "UserAgent": "Some Browser",
   *     "ScreenResolution": "640x480",
   *     "processorCount": "2"
   *   }
   * });
   */
  ReportDeviceInfo (request: DeviceInfoRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Client/ReportDeviceInfo", request, "X-Authorization", extraHeaders);
  }

  /**
   * Submit a report for another player (due to bad bahavior, etc.), so that customer service representatives for the title
   * can take action concerning potentially toxic players.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/account-management/reportplayer Microsoft Documentation}
   * @example
   * await clientClient.ReportPlayer({
   *   "ReporteeId": "1a46086aed40f142",
   *   "Comment": "cheating"
   * });
   */
  ReportPlayer (request: ReportPlayerClientRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ReportPlayerClientResult>("/Client/ReportPlayer", request, "X-Authorization", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Restores all in-app purchases based on the given restore receipt
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/platform-specific-methods/restoreiospurchases Microsoft Documentation}
   * @example
   * await clientClient.RestoreIOSPurchases({
   *   "ReceiptData": "F00000000000000000000"
   * });
   */
  RestoreIOSPurchases (request: RestoreIOSPurchasesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<RestoreIOSPurchasesResult>("/Client/RestoreIOSPurchases", request, "X-Authorization", extraHeaders);
  }

  /**
   * Reward player's ad activity
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/advertising/rewardadactivity Microsoft Documentation}
   * @example
   * await clientClient.RewardAdActivity({
   *   "PlacementId": "A124572382B",
   *   "RewardId": "B2674981A"
   * });
   */
  RewardAdActivity (request: RewardAdActivityRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<RewardAdActivityResult>("/Client/RewardAdActivity", request, "X-Authorization", extraHeaders);
  }

  /**
   * Triggers a particular server action, passing the provided inputs to the hosted Cloud Script. An action in this context
   * is a handler in the JavaScript. NOTE: Before calling this API, you must call GetCloudScriptUrl to be assigned a Cloud
   * Script server URL. When using an official PlayFab SDK, this URL is stored internally in the SDK, but GetCloudScriptUrl
   * must still be manually called.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/server-side-cloud-script/runcloudscript Microsoft Documentation}
   * @deprecated Please use ExecuteCloudScript instead.
   */
  RunCloudScript (request: RunCloudScriptRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<RunCloudScriptResult>("/Client/RunCloudScript", request, "X-Authorization", extraHeaders);
  }

  /**
   * Forces an email to be sent to the registered email address for the user's account, with a link allowing the user to
   * change the password.If an account recovery email template ID is provided, an email using the custom email template will
   * be used.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/account-management/sendaccountrecoveryemail Microsoft Documentation}
   * @example
   * await clientClient.SendAccountRecoveryEmail({
   *   "Email": "Me@here.com",
   *   "TitleId": "1000",
   *   "EmailTemplateId": "D53AB15D8F12E330"
   * });
   */
  SendAccountRecoveryEmail (request: SendAccountRecoveryEmailRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<SendAccountRecoveryEmailResult>("/Client/SendAccountRecoveryEmail", request, null, extraHeaders);
  }

  /**
   * Updates the tag list for a specified user in the friend list of the local user
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/friend-list-management/setfriendtags Microsoft Documentation}
   * @example
   * await clientClient.SetFriendTags({
   *   "FriendPlayFabId": "29837799",
   *   "Tags": [
   *     "great sniper",
   *     "no good at melee"
   *   ]
   * });
   */
  SetFriendTags (request: SetFriendTagsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<SetFriendTagsResult>("/Client/SetFriendTags", request, "X-Authorization", extraHeaders);
  }

  /**
   * Sets the player's secret if it is not already set. Player secrets are used to sign API requests. To reset a player's
   * secret use the Admin or Server API method SetPlayerSecret.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/authentication/setplayersecret Microsoft Documentation}
   * @example
   * await clientClient.SetPlayerSecret({
   *   "PlayerSecret": "A cryptographically strong string"
   * });
   */
  SetPlayerSecret (request: SetPlayerSecretRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<SetPlayerSecretResult>("/Client/SetPlayerSecret", request, "X-Authorization", extraHeaders);
  }

  /**
   * Start a new game server with a given configuration, add the current player and return the connection information.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/matchmaking/startgame Microsoft Documentation}
   * @deprecated Do not use
   */
  StartGame (request: StartGameRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<StartGameResult>("/Client/StartGame", request, "X-Authorization", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Creates an order for a list of items from the title catalog
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/player-item-management/startpurchase Microsoft Documentation}
   * @example
   * await clientClient.StartPurchase({
   *   "CatalogVersion": "0",
   *   "StoreId": "BonusStore",
   *   "Items": [
   *     {
   *       "ItemId": "something",
   *       "Quantity": 1,
   *       "Annotation": "totally buying something"
   *     }
   *   ]
   * });
   */
  StartPurchase (request: StartPurchaseRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<StartPurchaseResult>("/Client/StartPurchase", request, "X-Authorization", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Decrements the user's balance of the specified virtual currency by the stated amount. It is possible to make
   * a VC balance negative with this API.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/player-item-management/subtractuservirtualcurrency Microsoft Documentation}
   * @example
   * await clientClient.SubtractUserVirtualCurrency({
   *   "VirtualCurrency": "GC",
   *   "Amount": 100
   * });
   */
  SubtractUserVirtualCurrency (request: SubtractUserVirtualCurrencyRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ModifyUserVirtualCurrencyResult>("/Client/SubtractUserVirtualCurrency", request, "X-Authorization", extraHeaders);
  }

  /**
   * Unlinks the related Android device identifier from the user's PlayFab account
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/account-management/unlinkandroiddeviceid Microsoft Documentation}
   * @example
   * await clientClient.UnlinkAndroidDeviceID({
   *   "AndroidDeviceId": "526f79204261747479"
   * });
   */
  UnlinkAndroidDeviceID (request: UnlinkAndroidDeviceIDRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UnlinkAndroidDeviceIDResult>("/Client/UnlinkAndroidDeviceID", request, "X-Authorization", extraHeaders);
  }

  /**
   * Unlinks the related Apple account from the user's PlayFab account.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/account-management/unlinkapple Microsoft Documentation}
   * @example
   * await clientClient.UnlinkApple({});
   */
  UnlinkApple (request: UnlinkAppleRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Client/UnlinkApple", request, "X-Authorization", extraHeaders);
  }

  /**
   * Unlinks the related Battle.net account from the user's PlayFab account.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/account-management/unlinkbattlenetaccount Microsoft Documentation}
   * @example
   * await clientClient.UnlinkBattleNetAccount({});
   */
  UnlinkBattleNetAccount (request: UnlinkBattleNetAccountRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Client/UnlinkBattleNetAccount", request, "X-Authorization", extraHeaders);
  }

  /**
   * Unlinks the related custom identifier from the user's PlayFab account
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/account-management/unlinkcustomid Microsoft Documentation}
   * @example
   * await clientClient.UnlinkCustomID({
   *   "CustomId": "67AB-5397-CC54-EA31"
   * });
   */
  UnlinkCustomID (request: UnlinkCustomIDRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UnlinkCustomIDResult>("/Client/UnlinkCustomID", request, "X-Authorization", extraHeaders);
  }

  /**
   * Unlinks the related Facebook account from the user's PlayFab account
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/account-management/unlinkfacebookaccount Microsoft Documentation}
   * @example
   * await clientClient.UnlinkFacebookAccount({});
   */
  UnlinkFacebookAccount (request: UnlinkFacebookAccountRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UnlinkFacebookAccountResult>("/Client/UnlinkFacebookAccount", request, "X-Authorization", extraHeaders);
  }

  /**
   * Unlinks the related Facebook Instant Game Ids from the user's PlayFab account
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/account-management/unlinkfacebookinstantgamesid Microsoft Documentation}
   * @example
   * await clientClient.UnlinkFacebookInstantGamesId({
   *   "FacebookInstantGamesId": "1114685845316173"
   * });
   */
  UnlinkFacebookInstantGamesId (request: UnlinkFacebookInstantGamesIdRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UnlinkFacebookInstantGamesIdResult>("/Client/UnlinkFacebookInstantGamesId", request, "X-Authorization", extraHeaders);
  }

  /**
   * Unlinks the related Game Center account from the user's PlayFab account
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/account-management/unlinkgamecenteraccount Microsoft Documentation}
   * @example
   * await clientClient.UnlinkGameCenterAccount({});
   */
  UnlinkGameCenterAccount (request: UnlinkGameCenterAccountRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UnlinkGameCenterAccountResult>("/Client/UnlinkGameCenterAccount", request, "X-Authorization", extraHeaders);
  }

  /**
   * Unlinks the related Google account from the user's PlayFab account
   * (https://developers.google.com/android/reference/com/google/android/gms/auth/GoogleAuthUtil#public-methods).
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/account-management/unlinkgoogleaccount Microsoft Documentation}
   * @example
   * await clientClient.UnlinkGoogleAccount({});
   */
  UnlinkGoogleAccount (request: UnlinkGoogleAccountRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UnlinkGoogleAccountResult>("/Client/UnlinkGoogleAccount", request, "X-Authorization", extraHeaders);
  }

  /**
   * Unlinks the related Google Play Games account from the user's PlayFab account.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/account-management/unlinkgoogleplaygamesservicesaccount Microsoft Documentation}
   * @example
   * await clientClient.UnlinkGooglePlayGamesServicesAccount({});
   */
  UnlinkGooglePlayGamesServicesAccount (request: UnlinkGooglePlayGamesServicesAccountRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UnlinkGooglePlayGamesServicesAccountResult>("/Client/UnlinkGooglePlayGamesServicesAccount", request, "X-Authorization", extraHeaders);
  }

  /**
   * Unlinks the related iOS device identifier from the user's PlayFab account
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/account-management/unlinkiosdeviceid Microsoft Documentation}
   * @example
   * await clientClient.UnlinkIOSDeviceID({
   *   "DeviceId": "29848d9bh8900a0b003"
   * });
   */
  UnlinkIOSDeviceID (request: UnlinkIOSDeviceIDRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UnlinkIOSDeviceIDResult>("/Client/UnlinkIOSDeviceID", request, "X-Authorization", extraHeaders);
  }

  /**
   * Unlinks the related Kongregate identifier from the user's PlayFab account
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/account-management/unlinkkongregate Microsoft Documentation}
   * @example
   * await clientClient.UnlinkKongregate({});
   */
  UnlinkKongregate (request: UnlinkKongregateAccountRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UnlinkKongregateAccountResult>("/Client/UnlinkKongregate", request, "X-Authorization", extraHeaders);
  }

  /**
   * Unlinks the related Nintendo account from the user's PlayFab account.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/account-management/unlinknintendoserviceaccount Microsoft Documentation}
   * @example
   * await clientClient.UnlinkNintendoServiceAccount({});
   */
  UnlinkNintendoServiceAccount (request: UnlinkNintendoServiceAccountRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Client/UnlinkNintendoServiceAccount", request, "X-Authorization", extraHeaders);
  }

  /**
   * Unlinks the related NintendoSwitchDeviceId from the user's PlayFab account
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/account-management/unlinknintendoswitchdeviceid Microsoft Documentation}
   * @example
   * await clientClient.UnlinkNintendoSwitchDeviceId({
   *   "NintendoSwitchDeviceId": "526f79204261747479"
   * });
   */
  UnlinkNintendoSwitchDeviceId (request: UnlinkNintendoSwitchDeviceIdRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UnlinkNintendoSwitchDeviceIdResult>("/Client/UnlinkNintendoSwitchDeviceId", request, "X-Authorization", extraHeaders);
  }

  /**
   * Unlinks an OpenID Connect account from a user's PlayFab account, based on the connection ID of an existing relationship
   * between a title and an Open ID Connect provider.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/account-management/unlinkopenidconnect Microsoft Documentation}
   * @example
   * await clientClient.UnlinkOpenIdConnect({
   *   "ConnectionId": "exampleprovider"
   * });
   */
  UnlinkOpenIdConnect (request: UnlinkOpenIdConnectRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Client/UnlinkOpenIdConnect", request, "X-Authorization", extraHeaders);
  }

  /**
   * Unlinks the related PlayStation :tm: Network account from the user's PlayFab account
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/account-management/unlinkpsnaccount Microsoft Documentation}
   * @example
   * await clientClient.UnlinkPSNAccount({});
   */
  UnlinkPSNAccount (request: UnlinkPSNAccountRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UnlinkPSNAccountResult>("/Client/UnlinkPSNAccount", request, "X-Authorization", extraHeaders);
  }

  /**
   * Unlinks the related Steam account from the user's PlayFab account
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/account-management/unlinksteamaccount Microsoft Documentation}
   * @example
   * await clientClient.UnlinkSteamAccount({});
   */
  UnlinkSteamAccount (request: UnlinkSteamAccountRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UnlinkSteamAccountResult>("/Client/UnlinkSteamAccount", request, "X-Authorization", extraHeaders);
  }

  /**
   * Unlinks the related Twitch account from the user's PlayFab account.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/account-management/unlinktwitch Microsoft Documentation}
   * @example
   * await clientClient.UnlinkTwitch({});
   */
  UnlinkTwitch (request: UnlinkTwitchAccountRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UnlinkTwitchAccountResult>("/Client/UnlinkTwitch", request, "X-Authorization", extraHeaders);
  }

  /**
   * Unlinks the related Xbox Live account from the user's PlayFab account
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/account-management/unlinkxboxaccount Microsoft Documentation}
   * @example
   * await clientClient.UnlinkXboxAccount({});
   */
  UnlinkXboxAccount (request: UnlinkXboxAccountRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UnlinkXboxAccountResult>("/Client/UnlinkXboxAccount", request, "X-Authorization", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Opens the specified container, with the specified key (when required), and returns the contents of the
   * opened container. If the container (and key when relevant) are consumable (RemainingUses > 0), their RemainingUses will
   * be decremented, consistent with the operation of ConsumeItem.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/player-item-management/unlockcontainerinstance Microsoft Documentation}
   * @example
   * await clientClient.UnlockContainerInstance({
   *   "ContainerItemInstanceId": "123456788",
   *   "KeyItemInstanceId": "123456789"
   * });
   */
  UnlockContainerInstance (request: UnlockContainerInstanceRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UnlockContainerItemResult>("/Client/UnlockContainerInstance", request, "X-Authorization", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Searches target inventory for an ItemInstance matching the given CatalogItemId, if necessary unlocks it
   * using an appropriate key, and returns the contents of the opened container. If the container (and key when relevant) are
   * consumable (RemainingUses > 0), their RemainingUses will be decremented, consistent with the operation of ConsumeItem.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/player-item-management/unlockcontaineritem Microsoft Documentation}
   * @example
   * await clientClient.UnlockContainerItem({
   *   "ContainerItemId": "crate block 1"
   * });
   */
  UnlockContainerItem (request: UnlockContainerItemRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UnlockContainerItemResult>("/Client/UnlockContainerItem", request, "X-Authorization", extraHeaders);
  }

  /**
   * Update the avatar URL of the player
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/account-management/updateavatarurl Microsoft Documentation}
   * @example
   * await clientClient.UpdateAvatarUrl({
   *   "ImageUrl": "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
   * });
   */
  UpdateAvatarUrl (request: UpdateAvatarUrlRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Client/UpdateAvatarUrl", request, "X-Authorization", extraHeaders);
  }

  /**
   * Creates and updates the title-specific custom data for the user's character which is readable and writable by the client
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/character-data/updatecharacterdata Microsoft Documentation}
   * @example
   * await clientClient.UpdateCharacterData({
   *   "CharacterId": "98765456",
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
    return this.ExecuteRequestWrapper<UpdateCharacterDataResult>("/Client/UpdateCharacterData", request, "X-Authorization", extraHeaders);
  }

  /**
   * Updates the values of the specified title-specific statistics for the specific character. By default, clients are not
   * permitted to update statistics. Developers may override this setting in the Game Manager > Settings > API Features.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/characters/updatecharacterstatistics Microsoft Documentation}
   * @example
   * await clientClient.UpdateCharacterStatistics({
   *   "CharacterId": "98765432",
   *   "CharacterStatistics": {
   *     "Headshots": 18,
   *     "Kills": 47
   *   }
   * });
   */
  UpdateCharacterStatistics (request: UpdateCharacterStatisticsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdateCharacterStatisticsResult>("/Client/UpdateCharacterStatistics", request, "X-Authorization", extraHeaders);
  }

  /**
   * Updates the title-specific custom property values for a player
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/player-data-management/updateplayercustomproperties Microsoft Documentation}
   * @example
   * await clientClient.UpdatePlayerCustomProperties({
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
    return this.ExecuteRequestWrapper<UpdatePlayerCustomPropertiesResult>("/Client/UpdatePlayerCustomProperties", request, "X-Authorization", extraHeaders);
  }

  /**
   * Updates the values of the specified title-specific statistics for the user. By default, clients are not permitted to
   * update statistics. Developers may override this setting in the Game Manager > Settings > API Features.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/player-data-management/updateplayerstatistics Microsoft Documentation}
   * @example
   * await clientClient.UpdatePlayerStatistics({
   *   "Statistics": [
   *     {
   *       "StatisticName": "Points",
   *       "Version": 1,
   *       "Value": 600
   *     },
   *     {
   *       "StatisticName": "Wins",
   *       "Version": 0,
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
    return this.ExecuteRequestWrapper<UpdatePlayerStatisticsResult>("/Client/UpdatePlayerStatistics", request, "X-Authorization", extraHeaders);
  }

  /**
   * Adds, updates, and removes data keys for a shared group object. If the permission is set to Public, all fields updated
   * or added in this call will be readable by users not in the group. By default, data permissions are set to Private.
   * Regardless of the permission setting, only members of the group can update the data. Shared Groups are designed for
   * sharing data between a very small number of players, please see our guide:
   * https://docs.microsoft.com/gaming/playfab/features/social/groups/using-shared-group-data
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/shared-group-data/updatesharedgroupdata Microsoft Documentation}
   * @example
   * await clientClient.UpdateSharedGroupData({
   *   "SharedGroupId": "Clan Data",
   *   "Data": {
   *     "ClanKills": "34",
   *     "LastClanUpdate": "2014-10-03T09:21:14Z"
   *   },
   *   "Permission": "Public"
   * });
   */
  UpdateSharedGroupData (request: UpdateSharedGroupDataRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdateSharedGroupDataResult>("/Client/UpdateSharedGroupData", request, "X-Authorization", extraHeaders);
  }

  /**
   * Creates and updates the title-specific custom data for the user which is readable and writable by the client
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/player-data-management/updateuserdata Microsoft Documentation}
   * @example
   * await clientClient.UpdateUserData({
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
    return this.ExecuteRequestWrapper<UpdateUserDataResult>("/Client/UpdateUserData", request, "X-Authorization", extraHeaders);
  }

  /**
   * Creates and updates the publisher-specific custom data for the user which is readable and writable by the client
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/player-data-management/updateuserpublisherdata Microsoft Documentation}
   * @example
   * await clientClient.UpdateUserPublisherData({
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
    return this.ExecuteRequestWrapper<UpdateUserDataResult>("/Client/UpdateUserPublisherData", request, "X-Authorization", extraHeaders);
  }

  /**
   * Updates the values of the specified title-specific statistics for the user. By default, clients are not permitted to
   * update statistics. Developers may override this setting in the Game Manager > Settings > API Features.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/player-data-management/updateuserstatistics Microsoft Documentation}
   * @deprecated Please use UpdatePlayerStatistics instead.
   */
  UpdateUserStatistics (request: UpdateUserStatisticsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdateUserStatisticsResult>("/Client/UpdateUserStatistics", request, "X-Authorization", extraHeaders);
  }

  /**
   * Updates the title specific display name for the user
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/account-management/updateusertitledisplayname Microsoft Documentation}
   * @example
   * await clientClient.UpdateUserTitleDisplayName({
   *   "DisplayName": "User Title Name"
   * });
   */
  UpdateUserTitleDisplayName (request: UpdateUserTitleDisplayNameRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdateUserTitleDisplayNameResult>("/Client/UpdateUserTitleDisplayName", request, "X-Authorization", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Validates with Amazon that the receipt for an Amazon App Store in-app purchase is valid and that it matches
   * the purchased catalog item
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/platform-specific-methods/validateamazoniapreceipt Microsoft Documentation}
   * @example
   * await clientClient.ValidateAmazonIAPReceipt({
   *   "ReceiptId": "q1YqVbJSyjH28DGPKChw9c0o8nd3vSstssQtzSkrzM8tCk43K6z0d_HOTcwwN8vxCrVV0lEqBmpJzs_VK8hJrExLTNLLTCzQK8_MSUnJTy8LSpcoWRnoKKUAFRmaGBtZmBqCCFMzpVoA",
   *   "UserId": "l3HL7XppEMhrOGDgur9-ulvqomrSg6qyODKmah72lJU="
   * });
   */
  ValidateAmazonIAPReceipt (request: ValidateAmazonReceiptRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ValidateAmazonReceiptResult>("/Client/ValidateAmazonIAPReceipt", request, "X-Authorization", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Validates a Google Play purchase and gives the corresponding item to the player.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/platform-specific-methods/validategoogleplaypurchase Microsoft Documentation}
   * @example
   * await clientClient.ValidateGooglePlayPurchase({
   *   "ReceiptJson": "{\"orderId\":\"12999763169054705758.1375794066587622\",\"packageName\":\"com.playfab.android.testbed\",\"productId\":\"com.playfab.android.permatest.consumable\",\"purchaseTime\":1410891177231,\"purchaseState\":0,\"purchaseToken\":\"eaflhokdkobkmomjadmoobgb.AO-J1OwoLkW2cqvBcPEgk6SfGceQpOHALMUFmJYeawa-GuDFtl3oKct-5D28t_KvNscFiJOFiWXIS74vJBYg-CGFJgyrdbxalKEMPzXZrg5nLomCME-jIVFAUrzcPah-_66KPImG5ftsMJKI9uzldqEF9OPcakUEmt-kWoXAsl_6-9HH0gBCwh4\"}",
   *   "Signature": "ks12w0hHHpuit4xW3Fyoa5XX6TkxZ2KpEnBsLfpHHpeakYs2JgVtlLdgyLp/05Zp8oHAuKZyIAJTd2RIFXWMAUwDNUsI0JPBDMpr2oaL66Kuneg4VrGWJkJZTrvTyQoGpnTDdXfEME31iFKX6CrKHvWlAG9nwWxYatd58l83eevQ8CIrJhka/bC5ynw3j18OmFG7AcxymO37a4HkM8QjytvAYDJeOnDU9mooY7afcHIajtffdyAU9kzGWOqDByiU9IsRdkliwQoQYbuX/R5wQnMVZ+FGDDwO1mybx9B20rm7/WCBnWGy2NLsSAFI77iX8tUy/QebfBQhrVnRORi7bw==",
   *   "CurrencyCode": "USD",
   *   "PurchasePrice": 199
   * });
   */
  ValidateGooglePlayPurchase (request: ValidateGooglePlayPurchaseRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ValidateGooglePlayPurchaseResult>("/Client/ValidateGooglePlayPurchase", request, "X-Authorization", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Validates with the Apple store that the receipt for an iOS in-app purchase is valid and that it matches the
   * purchased catalog item
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/platform-specific-methods/validateiosreceipt Microsoft Documentation}
   * @example
   * await clientClient.ValidateIOSReceipt({
   *   "ReceiptData": "MTExMTExMTExMTENCjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMg0KMzMzMzMzMzMzMzMzMzMzMzMNCjQ0NDQ0NDQ0NDQ0NDQNCjU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NQ0KNjY2NjY2NjY2NjY2Ng0KNzc3Nzc3Nzc3Nzc3NzcNCjg4DQo5OTk5OTk5OTk5OTkNCjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA0KMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTENCjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjINCjMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMw0KNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0DQo1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1DQo2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2Ng0KNzc3Nzc3Nzc3NzcNCjg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4DQo5DQpBcHBsZSBJbmMuIFdvcmxkd2lkZSBEZXZlbG9wZXIgUmVsYXRpb25zIENlcnRpZmljYXRpb24gQXV0aG9yaXR5IChub3QgcmVhbGx5IC0gZmFrZSBQbGF5RmFiIGV4YW1wbGUsIGJ1dCBjb25ncmF0cyBvbiB0aGlua2luZyB0byBkZWNvZGUgdGhpcyEpDQowMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwDQoxMTExMTExMTExMQ0KMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyDQozMzMzMzMzMzMzMzMzMzMzMw0KNDQ0NDQ0NDQ0NDQ0NA0KNTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1DQo2NjY2NjY2NjY2NjY2DQo3Nzc3Nzc3Nzc3Nzc3Nw0KODgNCjk5OTk5OTk5OTk5OQ0KMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwDQoxMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMQ0KMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMg0KMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzDQo0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQNCjU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTUNCjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2DQo3Nzc3Nzc3Nzc3Nw0KODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODgNCjkNCkFwcGxlIEluYy4gV29ybGR3aWRlIERldmVsb3BlciBSZWxhdGlvbnMgQ2VydGlmaWNhdGlvbiBBdXRob3JpdHkgKG5vdCByZWFsbHkgLSBmYWtlIFBsYXlGYWIgZXhhbXBsZSwgYnV0IGNvbmdyYXRzIG9uIHRoaW5raW5nIHRvIGRlY29kZSB0aGlzISkNCjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDANCjExMTExMTExMTExDQoyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjINCjMzMzMzMzMzMzMzMzMzMzMzDQo0NDQ0NDQ0NDQ0NDQ0DQo1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTUNCjY2NjY2NjY2NjY2NjYNCjc3Nzc3Nzc3Nzc3Nzc3DQo4OA0KOTk5OTk5OTk5OTk5DQowMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDANCjExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExDQoyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyDQozMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMNCjQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NA0KNTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NQ0KNjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjYNCjc3Nzc3Nzc3Nzc3DQo4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4OA0KOQ0KQXBwbGUgSW5jLiBXb3JsZHdpZGUgRGV2ZWxvcGVyIFJlbGF0aW9ucyBDZXJ0aWZpY2F0aW9uIEF1dGhvcml0eSAobm90IHJlYWxseSAtIGZha2UgUGxheUZhYiBleGFtcGxlLCBidXQgY29uZ3JhdHMgb24gdGhpbmtpbmcgdG8gZGVjb2RlIHRoaXMhKQ0KMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA0KMTExMTExMTExMTENCjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMg0KMzMzMzMzMzMzMzMzMzMzMzMNCjQ0NDQ0NDQ0NDQ0NDQNCjU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NQ0KNjY2NjY2NjY2NjY2Ng0KNzc3Nzc3Nzc3Nzc3NzcNCjg4DQo5OTk5OTk5OTk5OTkNCjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA0KMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTENCjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjINCjMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMw0KNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0DQo1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1DQo2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2Ng0KNzc3Nzc3Nzc3NzcNCjg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4DQo5DQpBcHBsZSBJbmMuIFdvcmxkd2lkZSBEZXZlbG9wZXIgUmVsYXRpb25zIENlcnRpZmljYXRpb24gQXV0aG9yaXR5IChub3QgcmVhbGx5IC0gZmFrZSBQbGF5RmFiIGV4YW1wbGUsIGJ1dCBjb25ncmF0cyBvbiB0aGlua2luZyB0byBkZWNvZGUgdGhpcyEpDQowMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAw",
   *   "CurrencyCode": "GBP",
   *   "PurchasePrice": 199
   * });
   */
  ValidateIOSReceipt (request: ValidateIOSReceiptRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ValidateIOSReceiptResult>("/Client/ValidateIOSReceipt", request, "X-Authorization", extraHeaders);
  }

  /**
   * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
   * version 2._ Validates with Windows that the receipt for an Windows App Store in-app purchase is valid and that it
   * matches the purchased catalog item
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/platform-specific-methods/validatewindowsstorereceipt Microsoft Documentation}
   * @example
   * await clientClient.ValidateWindowsStoreReceipt({
   *   "Receipt": "<Receipt Version=\"1.0\" ReceiptDate=\"2012-08-30T23:10:05Z\" CertificateId=\"b809e47cd0110a4db043b3f73e83acd917fe1336\" ReceiptDeviceId=\"4e362949-acc3-fe3a-e71b-89893eb4f528\">\r\n    <AppReceipt Id=\"8ffa256d-eca8-712a-7cf8-cbf5522df24b\" AppId=\"55428GreenlakeApps.CurrentAppSimulatorEventTest_z7q3q7z11crfr\" PurchaseDate=\"2012-06-04T23:07:24Z\" LicenseType=\"Full\" />\r\n    <ProductReceipt Id=\"6bbf4366-6fb2-8be8-7947-92fd5f683530\" ProductId=\"Product1\" PurchaseDate=\"2012-08-30T23:08:52Z\" ExpirationDate=\"2012-09-02T23:08:49Z\" ProductType=\"Durable\" AppId=\"55428GreenlakeApps.CurrentAppSimulatorEventTest_z7q3q7z11crfr\" />\r\n    <Signature xmlns=\"http://www.w3.org/2000/09/xmldsig#\">\r\n        <SignedInfo>\r\n            <CanonicalizationMethod Algorithm=\"http://www.w3.org/2001/10/xml-exc-c14n#\" />\r\n            <SignatureMethod Algorithm=\"http://www.w3.org/2001/04/xmldsig-more#rsa-sha256\" />\r\n            <Reference URI=\"\">\r\n                <Transforms>\r\n                    <Transform Algorithm=\"http://www.w3.org/2000/09/xmldsig#enveloped-signature\" />\r\n                </Transforms>\r\n                <DigestMethod Algorithm=\"http://www.w3.org/2001/04/xmlenc#sha256\" />\r\n                <DigestValue>cdiU06eD8X/w1aGCHeaGCG9w/kWZ8I099rw4mmPpvdU=</DigestValue>\r\n            </Reference>\r\n        </SignedInfo>\r\n        <SignatureValue>SjRIxS/2r2P6ZdgaR9bwUSa6ZItYYFpKLJZrnAa3zkMylbiWjh9oZGGng2p6/gtBHC2dSTZlLbqnysJjl7mQp/A3wKaIkzjyRXv3kxoVaSV0pkqiPt04cIfFTP0JZkE5QD/vYxiWjeyGp1dThEM2RV811sRWvmEs/hHhVxb32e8xCLtpALYx3a9lW51zRJJN0eNdPAvNoiCJlnogAoTToUQLHs72I1dECnSbeNPXiG7klpy5boKKMCZfnVXXkneWvVFtAA1h2sB7ll40LEHO4oYN6VzD+uKd76QOgGmsu9iGVyRvvmMtahvtL1/pxoxsTRedhKq6zrzCfT8qfh3C1w==</SignatureValue>\r\n    </Signature>\r\n</Receipt>\r\n"
   * });
   */
  ValidateWindowsStoreReceipt (request: ValidateWindowsReceiptRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ValidateWindowsReceiptResult>("/Client/ValidateWindowsStoreReceipt", request, "X-Authorization", extraHeaders);
  }

  /**
   * Writes a character-based event into PlayStream.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/analytics/writecharacterevent Microsoft Documentation}
   * @example
   * await clientClient.WriteCharacterEvent({
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
  WriteCharacterEvent (request: WriteClientCharacterEventRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<WriteEventResponse>("/Client/WriteCharacterEvent", request, "X-Authorization", extraHeaders);
  }

  /**
   * Writes a player-based event into PlayStream.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/analytics/writeplayerevent Microsoft Documentation}
   * @example
   * await clientClient.WritePlayerEvent({
   *   "EventName": "player_defeated_enemy",
   *   "Timestamp": "2014-03-07T00:00:00Z",
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
  WritePlayerEvent (request: WriteClientPlayerEventRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<WriteEventResponse>("/Client/WritePlayerEvent", request, "X-Authorization", extraHeaders);
  }

  /**
   * Writes a title-based event into PlayStream.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/client/analytics/writetitleevent Microsoft Documentation}
   * @example
   * await clientClient.WriteTitleEvent({
   *   "EventName": "client_update_submitted",
   *   "Timestamp": "2016-03-07T00:00:00Z",
   *   "Body": {
   *     "Version": "1.4.50"
   *   }
   * });
   */
  WriteTitleEvent (request: WriteTitleEventRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<WriteEventResponse>("/Client/WriteTitleEvent", request, "X-Authorization", extraHeaders);
  }

};
