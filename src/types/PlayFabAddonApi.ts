import type {
  IPlayFabRequestCommon,
  IPlayFabResultCommon
} from "./PlayFab";

export interface CreateOrUpdateAppleRequest extends IPlayFabRequestCommon {
  /** iOS App Bundle ID obtained after setting up your app in the App Store. */
  AppBundleId: string;
  /** iOS App Shared Secret obtained after setting up your app in the App Store. */
  AppSharedSecret?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
  Entity?: EntityKey;
  /** If an error should be returned if the addon already exists. */
  ErrorIfExists?: boolean;
  /**
   * Ignore expiration date for identity tokens. Be aware that when set to true this can invalidate expired tokens in the
   * case where Apple rotates their signing keys.
   */
  IgnoreExpirationDate?: boolean;
  /** Require secure authentication only for this app. */
  RequireSecureAuthentication?: boolean;
}

export interface CreateOrUpdateAppleResponse extends IPlayFabResultCommon {
}

export interface CreateOrUpdateFacebookInstantGamesRequest extends IPlayFabRequestCommon {
  /** Facebook App ID obtained after setting up your app in Facebook Instant Games. */
  AppID: string;
  /** Facebook App Secret obtained after setting up your app in Facebook Instant Games. */
  AppSecret: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
  Entity?: EntityKey;
  /** If an error should be returned if the addon already exists. */
  ErrorIfExists?: boolean;
}

export interface CreateOrUpdateFacebookInstantGamesResponse extends IPlayFabResultCommon {
}

export interface CreateOrUpdateFacebookRequest extends IPlayFabRequestCommon {
  /** Facebook App ID obtained after setting up your app in Facebook. */
  AppID: string;
  /** Facebook App Secret obtained after setting up your app in Facebook. */
  AppSecret: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
  Entity?: EntityKey;
  /** If an error should be returned if the addon already exists. */
  ErrorIfExists?: boolean;
  /** Email address for purchase dispute notifications. */
  NotificationEmail: string;
}

export interface CreateOrUpdateFacebookResponse extends IPlayFabResultCommon {
}

export interface CreateOrUpdateGoogleRequest extends IPlayFabRequestCommon {
  /**
   * Google App License Key obtained after setting up your app in the Google Play developer portal. Required if using Google
   * receipt validation.
   */
  AppLicenseKey?: string;
  /**
   * Google App Package ID obtained after setting up your app in the Google Play developer portal. Required if using Google
   * receipt validation.
   */
  AppPackageID?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
  Entity?: EntityKey;
  /** If an error should be returned if the addon already exists. */
  ErrorIfExists?: boolean;
  /**
   * Google OAuth Client ID obtained through the Google Developer Console by creating a new set of &quot;OAuth Client ID&quot;.
   * Required if using Google Authentication.
   */
  OAuthClientID?: string;
  /**
   * Google OAuth Client Secret obtained through the Google Developer Console by creating a new set of &quot;OAuth Client ID&quot;.
   * Required if using Google Authentication.
   */
  OAuthClientSecret?: string;
  /**
   * Authorized Redirect Uri obtained through the Google Developer Console. This currently defaults to
   * https://oauth.playfab.com/oauth2/google. If you are authenticating players via browser, please update this to your own
   * domain.
   */
  OAuthCustomRedirectUri?: string;
  /** Needed to enable pending purchase handling and subscription processing. */
  ServiceAccountKey?: string;
}

export interface CreateOrUpdateGoogleResponse extends IPlayFabResultCommon {
}

export interface CreateOrUpdateKongregateRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
  Entity?: EntityKey;
  /** If an error should be returned if the addon already exists. */
  ErrorIfExists?: boolean;
  /** Kongregate Secret API Key obtained after setting up your game in your Kongregate developer account. */
  SecretAPIKey: string;
}

export interface CreateOrUpdateKongregateResponse extends IPlayFabResultCommon {
}

export interface CreateOrUpdateNintendoRequest extends IPlayFabRequestCommon {
  /** Nintendo Switch Application ID, without the &quot;0x&quot; prefix. */
  ApplicationID?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
  Entity?: EntityKey;
  /** List of Nintendo Environments, currently supporting up to 4. Needs Catalog enabled. */
  Environments?: NintendoEnvironment[];
  /** If an error should be returned if the addon already exists. */
  ErrorIfExists?: boolean;
}

export interface CreateOrUpdateNintendoResponse extends IPlayFabResultCommon {
}

export interface CreateOrUpdatePSNRequest extends IPlayFabRequestCommon {
  /** Client ID obtained after setting up your game with Sony. This one is associated with the existing PS4 marketplace. */
  ClientID?: string;
  /** Client secret obtained after setting up your game with Sony. This one is associated with the existing PS4 marketplace. */
  ClientSecret?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
  Entity?: EntityKey;
  /** If an error should be returned if the addon already exists. */
  ErrorIfExists?: boolean;
  /**
   * Client ID obtained after setting up your game with Sony. This one is associated with the modern marketplace, which
   * includes PS5, cross-generation for PS4, and unified entitlements.
   */
  NextGenClientID?: string;
  /**
   * Client secret obtained after setting up your game with Sony. This one is associated with the modern marketplace, which
   * includes PS5, cross-generation for PS4, and unified entitlements.
   */
  NextGenClientSecret?: string;
}

export interface CreateOrUpdatePSNResponse extends IPlayFabResultCommon {
}

export interface CreateOrUpdateSteamRequest extends IPlayFabRequestCommon {
  /** Application ID obtained after setting up your app in Valve&#39;s developer portal. */
  ApplicationId: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Enforce usage of AzurePlayFab identity in user authentication tickets. */
  EnforceServiceSpecificTickets?: boolean;
  /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
  Entity?: EntityKey;
  /** If an error should be returned if the addon already exists. */
  ErrorIfExists?: boolean;
  /** Sercet Key obtained after setting up your app in Valve&#39;s developer portal. */
  SecretKey: string;
  /** Use Steam Payments sandbox endpoint for test transactions. */
  UseSandbox?: boolean;
}

export interface CreateOrUpdateSteamResponse extends IPlayFabResultCommon {
}

export interface CreateOrUpdateToxModRequest extends IPlayFabRequestCommon {
  /** Account ID obtained after creating your ToxMod developer account. */
  AccountId: string;
  /** Account Key obtained after creating your ToxMod developer account. */
  AccountKey: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Whether ToxMod Addon is Enabled by Title. */
  Enabled: boolean;
  /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
  Entity?: EntityKey;
  /** If an error should be returned if the addon already exists. */
  ErrorIfExists?: boolean;
}

export interface CreateOrUpdateToxModResponse extends IPlayFabResultCommon {
}

export interface CreateOrUpdateTwitchRequest extends IPlayFabRequestCommon {
  /** Client ID obtained after creating your Twitch developer account. */
  ClientID?: string;
  /** Client Secret obtained after creating your Twitch developer account. */
  ClientSecret?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
  Entity?: EntityKey;
  /** If an error should be returned if the addon already exists. */
  ErrorIfExists?: boolean;
}

export interface CreateOrUpdateTwitchResponse extends IPlayFabResultCommon {
}

export interface DeleteAppleRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
  Entity?: EntityKey;
}

export interface DeleteAppleResponse extends IPlayFabResultCommon {
}

export interface DeleteFacebookInstantGamesRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
  Entity?: EntityKey;
}

export interface DeleteFacebookInstantGamesResponse extends IPlayFabResultCommon {
}

export interface DeleteFacebookRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
  Entity?: EntityKey;
}

export interface DeleteFacebookResponse extends IPlayFabResultCommon {
}

export interface DeleteGoogleRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
  Entity?: EntityKey;
}

export interface DeleteGoogleResponse extends IPlayFabResultCommon {
}

export interface DeleteKongregateRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
  Entity?: EntityKey;
}

export interface DeleteKongregateResponse extends IPlayFabResultCommon {
}

export interface DeleteNintendoRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
  Entity?: EntityKey;
}

export interface DeleteNintendoResponse extends IPlayFabResultCommon {
}

export interface DeletePSNRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
  Entity?: EntityKey;
}

export interface DeletePSNResponse extends IPlayFabResultCommon {
}

export interface DeleteSteamRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
  Entity?: EntityKey;
}

export interface DeleteSteamResponse extends IPlayFabResultCommon {
}

export interface DeleteToxModRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
  Entity?: EntityKey;
}

export interface DeleteToxModResponse extends IPlayFabResultCommon {
}

export interface DeleteTwitchRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
  Entity?: EntityKey;
}

export interface DeleteTwitchResponse extends IPlayFabResultCommon {
}

export interface EntityKey {
  /** Unique ID of the entity. */
  Id: string;
  /** Entity type. See https://docs.microsoft.com/gaming/playfab/features/data/entities/available-built-in-entity-types */
  Type?: string;
  /**
   * Alternate name for Type.
   * @deprecated Please use Type instead.
   */
  TypeString?: string;
}

export interface GetAppleRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
  Entity?: EntityKey;
}

export interface GetAppleResponse extends IPlayFabResultCommon {
  /** iOS App Bundle ID obtained after setting up your app in the App Store. */
  AppBundleId?: string;
  /** Addon status. */
  Created: boolean;
  /** Ignore expiration date for identity tokens. */
  IgnoreExpirationDate?: boolean;
  /** Require secure authentication only for this app. */
  RequireSecureAuthentication?: boolean;
}

export interface GetFacebookInstantGamesRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
  Entity?: EntityKey;
}

export interface GetFacebookInstantGamesResponse extends IPlayFabResultCommon {
  /** Facebook App ID obtained after setting up your app in Facebook Instant Games. */
  AppID?: string;
  /** Addon status. */
  Created: boolean;
}

export interface GetFacebookRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
  Entity?: EntityKey;
}

export interface GetFacebookResponse extends IPlayFabResultCommon {
  /** Facebook App ID obtained after setting up your app in Facebook. */
  AppID?: string;
  /** Addon status. */
  Created: boolean;
  /** Email address for purchase dispute notifications. */
  NotificationEmail?: string;
}

export interface GetGoogleRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
  Entity?: EntityKey;
}

export interface GetGoogleResponse extends IPlayFabResultCommon {
  /**
   * Google App Package ID obtained after setting up your app in the Google Play developer portal. Required if using Google
   * receipt validation.
   */
  AppPackageID?: string;
  /** Addon status. */
  Created: boolean;
  /**
   * Google OAuth Client ID obtained through the Google Developer Console by creating a new set of &quot;OAuth Client ID&quot;.
   * Required if using Google Authentication.
   */
  OAuthClientID?: string;
  /**
   * Authorized Redirect Uri obtained through the Google Developer Console. This currently defaults to
   * https://oauth.playfab.com/oauth2/google. If you are authenticating players via browser, please update this to your own
   * domain.
   */
  OauthCustomRedirectUri?: string;
}

export interface GetKongregateRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
  Entity?: EntityKey;
}

export interface GetKongregateResponse extends IPlayFabResultCommon {
  /** Addon status. */
  Created: boolean;
}

export interface GetNintendoRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
  Entity?: EntityKey;
}

export interface GetNintendoResponse extends IPlayFabResultCommon {
  /** Nintendo Switch Application ID, without the &quot;0x&quot; prefix. */
  ApplicationID?: string;
  /** Addon status. */
  Created: boolean;
  /** List of Nintendo Environments, currently supporting up to 4. */
  Environments?: NintendoEnvironment[];
}

export interface GetPSNRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
  Entity?: EntityKey;
}

export interface GetPSNResponse extends IPlayFabResultCommon {
  /** Client ID obtained after setting up your game with Sony. This one is associated with the existing PS4 marketplace. */
  ClientID?: string;
  /** Addon status. */
  Created: boolean;
  /**
   * Client ID obtained after setting up your game with Sony. This one is associated with the modern marketplace, which
   * includes PS5, cross-generation for PS4, and unified entitlements.
   */
  NextGenClientID?: string;
}

export interface GetSteamRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
  Entity?: EntityKey;
}

export interface GetSteamResponse extends IPlayFabResultCommon {
  /** Application ID obtained after setting up your game in Valve&#39;s developer portal. */
  ApplicationId?: string;
  /** Addon status. */
  Created: boolean;
  /** Enforce usage of AzurePlayFab identity in user authentication tickets. */
  EnforceServiceSpecificTickets?: boolean;
  /** Use Steam Payments sandbox endpoint for test transactions. */
  UseSandbox?: boolean;
}

export interface GetToxModRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
  Entity?: EntityKey;
}

export interface GetToxModResponse extends IPlayFabResultCommon {
  /** Account ID obtained after creating your Twitch developer account. */
  AccountId?: string;
  /** Account Key obtained after creating your Twitch developer account. */
  AccountKey?: string;
  /** Addon status. */
  Created: boolean;
  /** Whether the ToxMod Addon is enabled by the title. */
  Enabled: boolean;
}

export interface GetTwitchRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
  Entity?: EntityKey;
}

export interface GetTwitchResponse extends IPlayFabResultCommon {
  /** Client ID obtained after creating your Twitch developer account. */
  ClientID?: string;
  /** Addon status. */
  Created: boolean;
}

export interface NintendoEnvironment {
  /** Client ID for the Nintendo Environment. */
  ClientID?: string;
  /** Client Secret for the Nintendo Environment. */
  ClientSecret?: string;
  /** ID for the Nintendo Environment. */
  ID?: string;
}

