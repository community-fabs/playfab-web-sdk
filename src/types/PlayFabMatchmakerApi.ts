import type {
  IPlayFabRequestCommon,
  IPlayFabResultCommon
} from "./PlayFab";

/** @deprecated Do not use */
export interface AuthUserRequest extends IPlayFabRequestCommon {
  /** Session Ticket provided by the client. */
  AuthorizationTicket: string;
}

/** @deprecated Do not use */
export interface AuthUserResponse extends IPlayFabResultCommon {
  /** Boolean indicating if the user has been authorized to use the external match-making service. */
  Authorized: boolean;
  /** PlayFab unique identifier of the account that has been authorized. */
  PlayFabId?: string;
}

/** @deprecated Do not use */
export interface DeregisterGameRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Unique identifier for the Game Server Instance that is being deregistered. */
  LobbyId: string;
}

/** @deprecated Do not use */
export interface DeregisterGameResponse extends IPlayFabResultCommon {
}

/** @deprecated Do not use */
export interface ItemInstance {
  /** Game specific comment associated with this instance when it was added to the user inventory. */
  Annotation?: string;
  /** Array of unique items that were awarded when this catalog item was purchased. */
  BundleContents?: string[];
  /**
   * Unique identifier for the parent inventory item, as defined in the catalog, for object which were added from a bundle or
   * container.
   */
  BundleParent?: string;
  /** Catalog version for the inventory item, when this instance was created. */
  CatalogVersion?: string;
  /**
   * A set of custom key-value pairs on the instance of the inventory item, which is not to be confused with the catalog
   * item&#39;s custom data.
   */
  CustomData?: Record<string, string | null>;
  /** CatalogItem.DisplayName at the time this item was purchased. */
  DisplayName?: string;
  /** Timestamp for when this instance will expire. */
  Expiration?: string;
  /** Class name for the inventory item, as defined in the catalog. */
  ItemClass?: string;
  /** Unique identifier for the inventory item, as defined in the catalog. */
  ItemId?: string;
  /** Unique item identifier for this specific instance of the item. */
  ItemInstanceId?: string;
  /** Timestamp for when this instance was purchased. */
  PurchaseDate?: string;
  /** Total number of remaining uses, if this is a consumable item. */
  RemainingUses?: number;
  /** Currency type for the cost of the catalog item. Not available when granting items. */
  UnitCurrency?: string;
  /** Cost of the catalog item in the given currency. Not available when granting items. */
  UnitPrice: number;
  /** The number of uses that were added or removed to this item in this call. */
  UsesIncrementedBy?: number;
}

/** @deprecated Do not use */
export interface PlayerJoinedRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /**
   * Unique identifier of the Game Server Instance the user is joining. This must be a Game Server Instance started with the
   * Matchmaker/StartGame API.
   */
  LobbyId: string;
  /** PlayFab unique identifier for the player joining. */
  PlayFabId: string;
}

/** @deprecated Do not use */
export interface PlayerJoinedResponse extends IPlayFabResultCommon {
}

/** @deprecated Do not use */
export interface PlayerLeftRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /**
   * Unique identifier of the Game Server Instance the user is leaving. This must be a Game Server Instance started with the
   * Matchmaker/StartGame API.
   */
  LobbyId: string;
  /** PlayFab unique identifier for the player leaving. */
  PlayFabId: string;
}

/** @deprecated Do not use */
export interface PlayerLeftResponse extends IPlayFabResultCommon {
}

type Region = "USCentral"
  | "USEast"
  | "EUWest"
  | "Singapore"
  | "Japan"
  | "Brazil"
  | "Australia";

/** @deprecated Do not use */
export interface RegisterGameRequest extends IPlayFabRequestCommon {
  /** Unique identifier of the build running on the Game Server Instance. */
  Build: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /**
   * Game Mode the Game Server instance is running. Note that this must be defined in the Game Modes tab in the PlayFab Game
   * Manager, along with the Build ID (the same Game Mode can be defined for multiple Build IDs).
   */
  GameMode: string;
  /** Previous lobby id if re-registering an existing game. */
  LobbyId?: string;
  /**
   * Region in which the Game Server Instance is running. For matchmaking using non-AWS region names, set this to any AWS
   * region and use Tags (below) to specify your custom region.
   */
  Region: Region;
  /**
   * IPV4 address of the Game Server Instance.
   * @deprecated Please use ServerIPV4Address instead.
   */
  ServerHost?: string;
  /** IPV4 address of the game server instance. */
  ServerIPV4Address?: string;
  /** IPV6 address (if any) of the game server instance. */
  ServerIPV6Address?: string;
  /** Port number for communication with the Game Server Instance. */
  ServerPort: string;
  /** Public DNS name (if any) of the server */
  ServerPublicDNSName?: string;
  /** Tags for the Game Server Instance */
  Tags?: Record<string, string | null>;
}

/** @deprecated Do not use */
export interface RegisterGameResponse extends IPlayFabResultCommon {
  /**
   * Unique identifier generated for the Game Server Instance that is registered. If LobbyId is specified in request and the
   * game still exists in PlayFab, the LobbyId in request is returned. Otherwise a new lobby id will be returned.
   */
  LobbyId?: string;
}

/** @deprecated Do not use */
export interface StartGameRequest extends IPlayFabRequestCommon {
  /** Unique identifier of the previously uploaded build executable which is to be started. */
  Build: string;
  /** Custom command line argument when starting game server process. */
  CustomCommandLineData?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /**
   * HTTP endpoint URL for receiving game status events, if using an external matchmaker. When the game ends, PlayFab will
   * make a POST request to this URL with the X-SecretKey header set to the value of the game&#39;s secret and an
   * application/json body of { &quot;EventName&quot;: &quot;game_ended&quot;, &quot;GameID&quot;: &quot;&lt;gameid&gt;&quot; }.
   */
  ExternalMatchmakerEventEndpoint: string;
  /** Game mode for this Game Server Instance. */
  GameMode: string;
  /** Region with which to associate the server, for filtering. */
  Region: Region;
}

/** @deprecated Do not use */
export interface StartGameResponse extends IPlayFabResultCommon {
  /** Unique identifier for the game/lobby in the new Game Server Instance. */
  GameID?: string;
  /**
   * IPV4 address of the new Game Server Instance.
   * @deprecated Please use ServerIPV4Address instead.
   */
  ServerHostname?: string;
  /** IPV4 address of the server */
  ServerIPV4Address?: string;
  /** IPV6 address of the new Game Server Instance. */
  ServerIPV6Address?: string;
  /** Port number for communication with the Game Server Instance. */
  ServerPort: number;
  /** Public DNS name (if any) of the server */
  ServerPublicDNSName?: string;
}

/** @deprecated Do not use */
export interface UserInfoRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /**
   * Minimum catalog version for which data is requested (filters the results to only contain inventory items which have a
   * catalog version of this or higher).
   */
  MinCatalogVersion: number;
  /** PlayFab unique identifier of the user whose information is being requested. */
  PlayFabId: string;
}

/** @deprecated Do not use */
export interface UserInfoResponse extends IPlayFabResultCommon {
  /** Array of inventory items in the user&#39;s current inventory. */
  Inventory?: ItemInstance[];
  /** Boolean indicating whether the user is a developer. */
  IsDeveloper: boolean;
  /** PlayFab unique identifier of the user whose information was requested. */
  PlayFabId?: string;
  /** Steam unique identifier, if the user has an associated Steam account. */
  SteamId?: string;
  /** Title specific display name, if set. */
  TitleDisplayName?: string;
  /** PlayFab unique user name. */
  Username?: string;
  /** Array of virtual currency balance(s) belonging to the user. */
  VirtualCurrency?: Record<string, number>;
  /** Array of remaining times and timestamps for virtual currencies. */
  VirtualCurrencyRechargeTimes?: Record<string, VirtualCurrencyRechargeTime>;
}

/** @deprecated Do not use */
export interface VirtualCurrencyRechargeTime {
  /**
   * Maximum value to which the regenerating currency will automatically increment. Note that it can exceed this value
   * through use of the AddUserVirtualCurrency API call. However, it will not regenerate automatically until it has fallen
   * below this value.
   */
  RechargeMax: number;
  /** Server timestamp in UTC indicating the next time the virtual currency will be incremented. */
  RechargeTime: string;
  /** Time remaining (in seconds) before the next recharge increment of the virtual currency. */
  SecondsToRecharge: number;
}

