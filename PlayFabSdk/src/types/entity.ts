import { IPlayFabRequestCommon, IPlayFabResultCommon } from "./common";

export interface DeleteRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: { [key: string]: string | null };
  /** The game_server entity to be removed. */
  Entity: EntityKey;
}

export interface EntityKey {
  /** Unique ID of the entity. */
  Id: string;
  /** Entity type. See https://docs.microsoft.com/gaming/playfab/features/data/entities/available-built-in-entity-types */
  Type?: string;
}

export interface EntityLineage {
  /** The Character Id of the associated entity. */
  CharacterId?: string;
  /** The Group Id of the associated entity. */
  GroupId?: string;
  /** The Master Player Account Id of the associated entity. */
  MasterPlayerAccountId?: string;
  /** The Namespace Id of the associated entity. */
  NamespaceId?: string;
  /** The Title Id of the associated entity. */
  TitleId?: string;
  /** The Title Player Account Id of the associated entity. */
  TitlePlayerAccountId?: string;
}

export interface EntityTokenResponse {
  /** The entity id and type. */
  Entity?: EntityKey;
  /** The token used to set X-EntityToken for all entity based API calls. */
  EntityToken?: string;
  /** The time the token will expire, if it is an expiring token, in UTC. */
  TokenExpiration?: string;
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
