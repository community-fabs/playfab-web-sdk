import type {
  IPlayFabRequestCommon,
  IPlayFabResultCommon
} from "./PlayFab";

type EffectType = "Allow"
  | "Deny";

export interface EntityDataObject {
  /** Un-escaped JSON object, if DataAsObject is true. */
  DataObject?: any;
  /** Escaped string JSON body of the object, if DataAsObject is default or false. */
  EscapedDataObject?: string;
  /** Name of this object. */
  ObjectName?: string;
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

export interface EntityPermissionStatement {
  /** The action this statement effects. May be &#39;Read&#39;, &#39;Write&#39; or &#39;*&#39; for both read and write. */
  Action: string;
  /** A comment about the statement. Intended solely for bookkeeping and debugging. */
  Comment?: string;
  /** Additional conditions to be applied for entity resources. */
  Condition?: any;
  /** The effect this statement will have. It may be either Allow or Deny */
  Effect: string;
  /** The principal this statement will effect. */
  Principal: any;
  /** The resource this statements effects. Similar to &#39;pfrn:data--title![Title ID]/Profile/*&#39; */
  Resource: string;
}

export interface EntityProfileBody {
  /** Avatar URL for the entity. */
  AvatarUrl?: string;
  /** The creation time of this profile in UTC. */
  Created: string;
  /**
   * The display name of the entity. This field may serve different purposes for different entity types. i.e.: for a title
   * player account it could represent the display name of the player, whereas on a character it could be character&#39;s name.
   */
  DisplayName?: string;
  /** The entity id and type. */
  Entity?: EntityKey;
  /** The chain of responsibility for this entity. Use Lineage. */
  EntityChain?: string;
  /** The experiment variants of this profile. */
  ExperimentVariants?: string[];
  /** The files on this profile. */
  Files?: Record<string, EntityProfileFileMetadata>;
  /** The language on this profile. */
  Language?: string;
  /** The lineage of this profile. */
  Lineage?: EntityLineage;
  /** The objects on this profile. */
  Objects?: Record<string, EntityDataObject>;
  /**
   * The permissions that govern access to this entity profile and its properties. Only includes permissions set on this
   * profile, not global statements from titles and namespaces.
   */
  Permissions?: EntityPermissionStatement[];
  /** The statistics on this profile. */
  Statistics?: Record<string, EntityStatisticValue>;
  /**
   * The version number of the profile in persistent storage at the time of the read. Used for optional optimistic
   * concurrency during update.
   */
  VersionNumber: number;
}

export interface EntityProfileFileMetadata {
  /** Checksum value for the file, can be used to check if the file on the server has changed. */
  Checksum?: string;
  /** Name of the file */
  FileName?: string;
  /** Last UTC time the file was modified */
  LastModified: string;
  /** Storage service&#39;s reported byte count */
  Size: number;
}

export interface EntityStatisticValue {
  /** Metadata associated with the Statistic. */
  Metadata?: string;
  /** Statistic name */
  Name?: string;
  /** Statistic scores */
  Scores?: string[];
  /** Statistic version */
  Version: number;
}

export interface GetEntityProfileRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /**
   * Determines whether the objects will be returned as an escaped JSON string or as a un-escaped JSON object. Default is
   * JSON string.
   */
  DataAsObject?: boolean;
  /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
  Entity?: EntityKey;
}

export interface GetEntityProfileResponse extends IPlayFabResultCommon {
  /** Entity profile */
  Profile?: EntityProfileBody;
}

export interface GetEntityProfilesRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /**
   * Determines whether the objects will be returned as an escaped JSON string or as a un-escaped JSON object. Default is
   * JSON string.
   */
  DataAsObject?: boolean;
  /** Entity keys of the profiles to load. Must be between 1 and 25 */
  Entities: EntityKey[];
}

export interface GetEntityProfilesResponse extends IPlayFabResultCommon {
  /** Entity profiles */
  Profiles?: EntityProfileBody[];
}

export interface GetGlobalPolicyRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
  Entity?: EntityKey;
}

export interface GetGlobalPolicyResponse extends IPlayFabResultCommon {
  /** The permissions that govern access to all entities under this title or namespace. */
  Permissions?: EntityPermissionStatement[];
}

export interface GetTitlePlayersFromMasterPlayerAccountIdsRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Master player account ids. */
  MasterPlayerAccountIds: string[];
  /** Id of title to get players from. */
  TitleId?: string;
}

export interface GetTitlePlayersFromMasterPlayerAccountIdsResponse extends IPlayFabResultCommon {
  /** Optional id of title to get players from, required if calling using a master_player_account. */
  TitleId?: string;
  /** Dictionary of master player ids mapped to title player entity keys and id pairs */
  TitlePlayerAccounts?: Record<string, EntityKey>;
}

export interface GetTitlePlayersFromProviderIDsResponse extends IPlayFabResultCommon {
  /**
   * Dictionary of provider identifiers mapped to title_player_account lineage. Missing lineage indicates the player either
   * doesn&#39;t exist or doesn&#39;t play the requested title.
   */
  TitlePlayerAccounts?: Record<string, EntityLineage>;
}

export interface GetTitlePlayersFromXboxLiveIDsRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Xbox Sandbox the players had on their Xbox tokens. */
  Sandbox: string;
  /** Optional ID of title to get players from, required if calling using a master_player_account. */
  TitleId?: string;
  /** List of Xbox Live XUIDs */
  XboxLiveIds: string[];
}

type OperationTypes = "Created"
  | "Updated"
  | "Deleted"
  | "None";

export interface SetAvatarUrlRequest extends IPlayFabRequestCommon {
  /** URL of the avatar image. If empty, it removes the existing avatar URL */
  AvatarUrl: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
  Entity?: EntityKey;
  /** The expected version of the profile to perform this update on */
  ProfileVersion?: number;
}

export interface SetAvatarUrlResponse extends IPlayFabResultCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
  Entity?: EntityKey;
  /** The type of operation that occurred on the profile&#39;s avatar URL */
  OperationResult?: string;
  /** The updated version of the profile after the avatar URL update */
  ProfileVersion?: number;
}

export interface SetDisplayNameRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The new value to be set on Entity Profile&#39;s display name */
  DisplayName?: string;
  /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
  Entity?: EntityKey;
  /** The expected version of a profile to perform this update on */
  ExpectedVersion?: number;
}

export interface SetDisplayNameResponse extends IPlayFabResultCommon {
  /** The type of operation that occured on the profile&#39;s display name */
  OperationResult?: string;
  /** The updated version of the profile after the display name update */
  VersionNumber?: number;
}

export interface SetEntityProfilePolicyRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The entity to perform this action on. */
  Entity: EntityKey;
  /** The statements to include in the access policy. */
  Statements: EntityPermissionStatement[];
}

export interface SetEntityProfilePolicyResponse extends IPlayFabResultCommon {
  /**
   * The permissions that govern access to this entity profile and its properties. Only includes permissions set on this
   * profile, not global statements from titles and namespaces.
   */
  Permissions?: EntityPermissionStatement[];
}

export interface SetGlobalPolicyRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The permissions that govern access to all entities under this title or namespace. */
  Permissions?: EntityPermissionStatement[];
}

export interface SetGlobalPolicyResponse extends IPlayFabResultCommon {
}

export interface SetProfileLanguageRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
  Entity?: EntityKey;
  /** The expected version of a profile to perform this update on */
  ExpectedVersion?: number;
  /** The language to set on the given entity. Deletes the profile&#39;s language if passed in a null string. */
  Language?: string;
}

export interface SetProfileLanguageResponse extends IPlayFabResultCommon {
  /** The type of operation that occured on the profile&#39;s language */
  OperationResult?: string;
  /** The updated version of the profile after the language update */
  VersionNumber?: number;
}

