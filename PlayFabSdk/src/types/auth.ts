import { IPlayFabRequestCommon, IPlayFabResultCommon } from "./common";
import { EntityKey, EntityLineage, EntityTokenResponse } from "./entity";

export interface AuthenticateCustomIdRequest extends IPlayFabRequestCommon {
  /**
   * The customId used to create and retrieve game_server entity tokens. This is unique at the title level. CustomId must be
   * between 32 and 100 characters.
   */
  CustomId: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: { [key: string]: string | null };
}

export interface AuthenticateCustomIdResult extends IPlayFabResultCommon {
  /** The token generated used to set X-EntityToken for game_server calls. */
  EntityToken?: EntityTokenResponse;
  /** True if the account was newly created on this authentication. */
  NewlyCreated: boolean;
}

export interface DeleteRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: { [key: string]: string | null };
  /** The game_server entity to be removed. */
  Entity: EntityKey;
}

export interface GetEntityTokenRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: { [key: string]: string | null };
  /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
  Entity?: EntityKey;
}

export interface GetEntityTokenResponse extends IPlayFabResultCommon {
  /** The entity id and type. */
  Entity?: EntityKey;
  /** The token used to set X-EntityToken for all entity based API calls. */
  EntityToken?: string;
  /** The time the token will expire, if it is an expiring token, in UTC. */
  TokenExpiration?: string;
}

export type IdentifiedDeviceType =
  | "Unknown"
  | "XboxOne"
  | "Scarlett"
  | "WindowsOneCore"
  | "WindowsOneCoreMobile"
  | "Win32"
  | "android"
  | "iOS"
  | "PlayStation"
  | "Nintendo";

export type LoginIdentityProvider =
  | "Unknown"
  | "PlayFab"
  | "Custom"
  | "GameCenter"
  | "GooglePlay"
  | "Steam"
  | "XBoxLive"
  | "PSN"
  | "Kongregate"
  | "Facebook"
  | "IOSDevice"
  | "AndroidDevice"
  | "Twitch"
  | "WindowsHello"
  | "GameServer"
  | "CustomServer"
  | "NintendoSwitch"
  | "FacebookInstantGames"
  | "OpenIdConnect"
  | "Apple"
  | "NintendoSwitchAccount"
  | "GooglePlayGames"
  | "XboxMobileStore"
  | "King"
  | "BattleNet";

export interface ValidateEntityTokenRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: { [key: string]: string | null };
  /** Client EntityToken */
  EntityToken: string;
}

export interface ValidateEntityTokenResponse extends IPlayFabResultCommon {
  /** The entity id and type. */
  Entity?: EntityKey;
  /** The authenticated device for this entity, for the given login */
  IdentifiedDeviceType?: string;
  /** The identity provider for this entity, for the given login */
  IdentityProvider?: string;
  /** The ID issued by the identity provider, e.g. a XUID on Xbox Live */
  IdentityProviderIssuedId?: string;
  /** The lineage of this profile. */
  Lineage?: EntityLineage;
}
