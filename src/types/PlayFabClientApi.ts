import type {
  IPlayFabRequestCommon,
  IPlayFabResultCommon
} from "./PlayFab";

export interface AcceptTradeRequest extends IPlayFabRequestCommon {
  /**
   * Items from the accepting player&#39;s inventory in exchange for the offered items in the trade. In the case of a gift, this
   * will be null.
   */
  AcceptedInventoryInstanceIds?: string[];
  /** Player who opened the trade. */
  OfferingPlayerId: string;
  /** Trade identifier. */
  TradeId: string;
}

export interface AcceptTradeResponse extends IPlayFabResultCommon {
  /** Details about trade which was just accepted. */
  Trade?: TradeInfo;
}

type AdActivity = "Opened"
  | "Closed"
  | "Start"
  | "End";

export interface AdCampaignAttributionModel {
  /** UTC time stamp of attribution */
  AttributedAt: string;
  /** Attribution campaign identifier */
  CampaignId?: string;
  /** Attribution network name */
  Platform?: string;
}

export interface AddFriendRequest extends IPlayFabRequestCommon {
  /** Email address of the user to attempt to add to the local user&#39;s friend list. */
  FriendEmail?: string;
  /** PlayFab identifier of the user to attempt to add to the local user&#39;s friend list. */
  FriendPlayFabId?: string;
  /** Title-specific display name of the user to attempt to add to the local user&#39;s friend list. */
  FriendTitleDisplayName?: string;
  /** PlayFab username of the user to attempt to add to the local user&#39;s friend list. */
  FriendUsername?: string;
}

export interface AddFriendResult extends IPlayFabResultCommon {
  /** True if the friend request was processed successfully. */
  Created: boolean;
}

export interface AddGenericIDRequest extends IPlayFabRequestCommon {
  /** Generic service identifier to add to the player account. */
  GenericId: GenericServiceId;
}

export interface AddGenericIDResult extends IPlayFabResultCommon {
}

export interface AddOrUpdateContactEmailRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The new contact email to associate with the player. */
  EmailAddress: string;
}

export interface AddOrUpdateContactEmailResult extends IPlayFabResultCommon {
}

export interface AddSharedGroupMembersRequest extends IPlayFabRequestCommon {
  /** An array of unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabIds: string[];
  /** Unique identifier for the shared group. */
  SharedGroupId: string;
}

export interface AddSharedGroupMembersResult extends IPlayFabResultCommon {
}

export interface AddUsernamePasswordRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** User email address attached to their account */
  Email: string;
  /** Password for the PlayFab account (6-100 characters) */
  Password: string;
  /** PlayFab username for the account (3-20 characters) */
  Username: string;
}

export interface AddUsernamePasswordResult extends IPlayFabResultCommon {
  /** PlayFab unique user name. */
  Username?: string;
}

export interface AddUserVirtualCurrencyRequest extends IPlayFabRequestCommon {
  /** Amount to be added to the user balance of the specified virtual currency. */
  Amount: number;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Name of the virtual currency which is to be incremented. */
  VirtualCurrency: string;
}

export interface AdPlacementDetails {
  /** Placement unique ID */
  PlacementId?: string;
  /** Placement name */
  PlacementName?: string;
  /** If placement has viewing limits indicates how many views are left */
  PlacementViewsRemaining?: number;
  /** If placement has viewing limits indicates when they will next reset */
  PlacementViewsResetMinutes?: number;
  /** Optional URL to a reward asset */
  RewardAssetUrl?: string;
  /** Reward description */
  RewardDescription?: string;
  /** Reward unique ID */
  RewardId?: string;
  /** Reward name */
  RewardName?: string;
}

export interface AdRewardItemGranted {
  /** Catalog ID */
  CatalogId?: string;
  /** Catalog item display name */
  DisplayName?: string;
  /** Inventory instance ID */
  InstanceId?: string;
  /** Item ID */
  ItemId?: string;
}

export interface AdRewardResults {
  /** Array of the items granted to the player */
  GrantedItems?: AdRewardItemGranted[];
  /** Dictionary of virtual currencies that were granted to the player */
  GrantedVirtualCurrencies?: Record<string, number>;
  /** Dictionary of statistics that were modified for the player */
  IncrementedStatistics?: Record<string, number>;
}

export interface AndroidDevicePushNotificationRegistrationRequest extends IPlayFabRequestCommon {
  /** Message to display when confirming push notification. */
  ConfirmationMessage?: string;
  /**
   * Registration ID provided by the Google Cloud Messaging service when the title registered to receive push notifications
   * (see the GCM documentation, here: http://developer.android.com/google/gcm/client.html).
   */
  DeviceToken: string;
  /** If true, send a test push message immediately after sucessful registration. Defaults to false. */
  SendPushNotificationConfirmation?: boolean;
}

export interface AndroidDevicePushNotificationRegistrationResult extends IPlayFabResultCommon {
}

export interface AttributeInstallRequest extends IPlayFabRequestCommon {
  /** The adid for this device. */
  Adid?: string;
  /**
   * The android advertising id. This field is deprecated in favor of Adid for clarity.
   * @deprecated Please use Adid instead.
   */
  Android_Id?: string;
  /** The IdentifierForAdvertisers for iOS Devices. */
  Idfa?: string;
}

export interface AttributeInstallResult extends IPlayFabResultCommon {
}

export interface BattleNetAccountPlayFabIdPair {
  /** Unique Battle.net account identifier for a user. */
  BattleNetAccountId?: string;
  /** Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the Battle.net account identifier. */
  PlayFabId?: string;
}

export interface CancelTradeRequest extends IPlayFabRequestCommon {
  /** Trade identifier. */
  TradeId: string;
}

export interface CancelTradeResponse extends IPlayFabResultCommon {
  /** Details about trade which was just canceled. */
  Trade?: TradeInfo;
}

export interface CartItem {
  /** Description of the catalog item. */
  Description?: string;
  /** Display name for the catalog item. */
  DisplayName?: string;
  /** Class name to which catalog item belongs. */
  ItemClass?: string;
  /** Unique identifier for the catalog item. */
  ItemId?: string;
  /** Unique instance identifier for this catalog item. */
  ItemInstanceId?: string;
  /** Cost of the catalog item for each applicable real world currency. */
  RealCurrencyPrices?: Record<string, number>;
  /** Amount of each applicable virtual currency which will be received as a result of purchasing this catalog item. */
  VCAmount?: Record<string, number>;
  /** Cost of the catalog item for each applicable virtual currency. */
  VirtualCurrencyPrices?: Record<string, number>;
}

export interface CatalogItem {
  /**
   * defines the bundle properties for the item - bundles are items which contain other items, including random drop tables
   * and virtual currencies
   */
  Bundle?: CatalogItemBundleInfo;
  /** if true, then an item instance of this type can be used to grant a character to a user. */
  CanBecomeCharacter: boolean;
  /** catalog version for this item */
  CatalogVersion?: string;
  /** defines the consumable properties (number of uses, timeout) for the item */
  Consumable?: CatalogItemConsumableInfo;
  /**
   * defines the container properties for the item - what items it contains, including random drop tables and virtual
   * currencies, and what item (if any) is required to open it via the UnlockContainerItem API
   */
  Container?: CatalogItemContainerInfo;
  /** game specific custom data */
  CustomData?: string;
  /** text description of item, to show in-game */
  Description?: string;
  /** text name for the item, to show in-game */
  DisplayName?: string;
  /**
   * If the item has IsLImitedEdition set to true, and this is the first time this ItemId has been defined as a limited
   * edition item, this value determines the total number of instances to allocate for the title. Once this limit has been
   * reached, no more instances of this ItemId can be created, and attempts to purchase or grant it will return a Result of
   * false for that ItemId. If the item has already been defined to have a limited edition count, or if this value is less
   * than zero, it will be ignored.
   */
  InitialLimitedEditionCount: number;
  /** BETA: If true, then only a fixed number can ever be granted. */
  IsLimitedEdition: boolean;
  /**
   * if true, then only one item instance of this type will exist and its remaininguses will be incremented instead.
   * RemainingUses will cap out at Int32.Max (2,147,483,647). All subsequent increases will be discarded
   */
  IsStackable: boolean;
  /** if true, then an item instance of this type can be traded between players using the trading APIs */
  IsTradable: boolean;
  /** class to which the item belongs */
  ItemClass?: string;
  /** unique identifier for this item */
  ItemId: string;
  /**
   * URL to the item image. For Facebook purchase to display the image on the item purchase page, this must be set to an HTTP
   * URL.
   */
  ItemImageUrl?: string;
  /** override prices for this item for specific currencies */
  RealCurrencyPrices?: Record<string, number>;
  /** list of item tags */
  Tags?: string[];
  /** price of this item in virtual currencies and &quot;RM&quot; (the base Real Money purchase price, in USD pennies) */
  VirtualCurrencyPrices?: Record<string, number>;
}

export interface CatalogItemBundleInfo {
  /** unique ItemId values for all items which will be added to the player inventory when the bundle is added */
  BundledItems?: string[];
  /**
   * unique TableId values for all RandomResultTable objects which are part of the bundle (random tables will be resolved and
   * add the relevant items to the player inventory when the bundle is added)
   */
  BundledResultTables?: string[];
  /** virtual currency types and balances which will be added to the player inventory when the bundle is added */
  BundledVirtualCurrencies?: Record<string, number>;
}

export interface CatalogItemConsumableInfo {
  /** number of times this object can be used, after which it will be removed from the player inventory */
  UsageCount?: number;
  /**
   * duration in seconds for how long the item will remain in the player inventory - once elapsed, the item will be removed
   * (recommended minimum value is 5 seconds, as lower values can cause the item to expire before operations depending on
   * this item&#39;s details have completed)
   */
  UsagePeriod?: number;
  /**
   * all inventory item instances in the player inventory sharing a non-null UsagePeriodGroup have their UsagePeriod values
   * added together, and share the result - when that period has elapsed, all the items in the group will be removed
   */
  UsagePeriodGroup?: string;
}

export interface CatalogItemContainerInfo {
  /** unique ItemId values for all items which will be added to the player inventory, once the container has been unlocked */
  ItemContents?: string[];
  /**
   * ItemId for the catalog item used to unlock the container, if any (if not specified, a call to UnlockContainerItem will
   * open the container, adding the contents to the player inventory and currency balances)
   */
  KeyItemId?: string;
  /**
   * unique TableId values for all RandomResultTable objects which are part of the container (once unlocked, random tables
   * will be resolved and add the relevant items to the player inventory)
   */
  ResultTableContents?: string[];
  /** virtual currency types and balances which will be added to the player inventory when the container is unlocked */
  VirtualCurrencyContents?: Record<string, number>;
}

export interface CharacterInventory {
  /** The id of this character. */
  CharacterId?: string;
  /** The inventory of this character. */
  Inventory?: ItemInstance[];
}

export interface CharacterLeaderboardEntry {
  /** PlayFab unique identifier of the character that belongs to the user for this leaderboard entry. */
  CharacterId?: string;
  /** Title-specific display name of the character for this leaderboard entry. */
  CharacterName?: string;
  /** Name of the character class for this entry. */
  CharacterType?: string;
  /** Title-specific display name of the user for this leaderboard entry. */
  DisplayName?: string;
  /** PlayFab unique identifier of the user for this leaderboard entry. */
  PlayFabId?: string;
  /** User&#39;s overall position in the leaderboard. */
  Position: number;
  /** Specific value of the user&#39;s statistic. */
  StatValue: number;
}

export interface CharacterResult {
  /** The id for this character on this player. */
  CharacterId?: string;
  /** The name of this character. */
  CharacterName?: string;
  /** The type-string that was given to this character on creation. */
  CharacterType?: string;
}

type CloudScriptRevisionOption = "Live"
  | "Latest"
  | "Specific";

/** @deprecated Do not use */
export interface CollectionFilter {
  /** List of Exclude rules, with any of which if a collection matches, it is excluded by the filter. */
  Excludes?: Container_Dictionary_String_String[];
  /**
   * List of Include rules, with any of which if a collection matches, it is included by the filter, unless it is excluded by
   * one of the Exclude rule
   */
  Includes?: Container_Dictionary_String_String[];
}

export interface ConfirmPurchaseRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Purchase order identifier returned from StartPurchase. */
  OrderId: string;
}

export interface ConfirmPurchaseResult extends IPlayFabResultCommon {
  /** Array of items purchased. */
  Items?: ItemInstance[];
  /** Purchase order identifier. */
  OrderId?: string;
  /** Date and time of the purchase. */
  PurchaseDate: string;
}

export interface ConsumeItemRequest extends IPlayFabRequestCommon {
  /** Unique PlayFab assigned ID for a specific character owned by a user */
  CharacterId?: string;
  /** Number of uses to consume from the item. */
  ConsumeCount: number;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Unique instance identifier of the item to be consumed. */
  ItemInstanceId: string;
}

export interface ConsumeItemResult extends IPlayFabResultCommon {
  /** Unique instance identifier of the item with uses consumed. */
  ItemInstanceId?: string;
  /** Number of uses remaining on the item. */
  RemainingUses: number;
}

export interface ConsumeMicrosoftStoreEntitlementsRequest extends IPlayFabRequestCommon {
  /** Catalog version to use */
  CatalogVersion?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Marketplace specific payload containing details to fetch in app purchase transactions */
  MarketplaceSpecificData: MicrosoftStorePayload;
}

export interface ConsumeMicrosoftStoreEntitlementsResponse extends IPlayFabResultCommon {
  /** Details for the items purchased. */
  Items?: ItemInstance[];
}

export interface ConsumePS5EntitlementsRequest extends IPlayFabRequestCommon {
  /** Catalog version to use */
  CatalogVersion?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Marketplace specific payload containing details to fetch in app purchase transactions */
  MarketplaceSpecificData: PlayStation5Payload;
}

export interface ConsumePS5EntitlementsResult extends IPlayFabResultCommon {
  /** Details for the items purchased. */
  Items?: ItemInstance[];
}

export interface ConsumePSNEntitlementsRequest extends IPlayFabRequestCommon {
  /** Which catalog to match granted entitlements against. If null, defaults to title default catalog */
  CatalogVersion?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Id of the PlayStation :tm: Network service label to consume entitlements from */
  ServiceLabel: number;
}

export interface ConsumePSNEntitlementsResult extends IPlayFabResultCommon {
  /** Array of items granted to the player as a result of consuming entitlements. */
  ItemsGranted?: ItemInstance[];
}

export interface ConsumeXboxEntitlementsRequest extends IPlayFabRequestCommon {
  /** Catalog version to use */
  CatalogVersion?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Token provided by the Xbox Live SDK/XDK method GetTokenAndSignatureAsync(&quot;POST&quot;, &quot;https://playfabapi.com/&quot;, &quot;&quot;). */
  XboxToken: string;
}

export interface ConsumeXboxEntitlementsResult extends IPlayFabResultCommon {
  /** Details for the items purchased. */
  Items?: ItemInstance[];
}

export interface ContactEmailInfoModel {
  /** The email address */
  EmailAddress?: string;
  /** The name of the email info data */
  Name?: string;
  /** The verification status of the email */
  VerificationStatus?: EmailVerificationStatus;
}

/** @deprecated Do not use */
export interface Container_Dictionary_String_String {
  /** Content of data */
  Data?: Record<string, string | null>;
}

type ContinentCode = "AF"
  | "AN"
  | "AS"
  | "EU"
  | "NA"
  | "OC"
  | "SA"
  | "Unknown";

type CountryCode = "AF"
  | "AX"
  | "AL"
  | "DZ"
  | "AS"
  | "AD"
  | "AO"
  | "AI"
  | "AQ"
  | "AG"
  | "AR"
  | "AM"
  | "AW"
  | "AU"
  | "AT"
  | "AZ"
  | "BS"
  | "BH"
  | "BD"
  | "BB"
  | "BY"
  | "BE"
  | "BZ"
  | "BJ"
  | "BM"
  | "BT"
  | "BO"
  | "BQ"
  | "BA"
  | "BW"
  | "BV"
  | "BR"
  | "IO"
  | "BN"
  | "BG"
  | "BF"
  | "BI"
  | "KH"
  | "CM"
  | "CA"
  | "CV"
  | "KY"
  | "CF"
  | "TD"
  | "CL"
  | "CN"
  | "CX"
  | "CC"
  | "CO"
  | "KM"
  | "CG"
  | "CD"
  | "CK"
  | "CR"
  | "CI"
  | "HR"
  | "CU"
  | "CW"
  | "CY"
  | "CZ"
  | "DK"
  | "DJ"
  | "DM"
  | "DO"
  | "EC"
  | "EG"
  | "SV"
  | "GQ"
  | "ER"
  | "EE"
  | "ET"
  | "FK"
  | "FO"
  | "FJ"
  | "FI"
  | "FR"
  | "GF"
  | "PF"
  | "TF"
  | "GA"
  | "GM"
  | "GE"
  | "DE"
  | "GH"
  | "GI"
  | "GR"
  | "GL"
  | "GD"
  | "GP"
  | "GU"
  | "GT"
  | "GG"
  | "GN"
  | "GW"
  | "GY"
  | "HT"
  | "HM"
  | "VA"
  | "HN"
  | "HK"
  | "HU"
  | "IS"
  | "IN"
  | "ID"
  | "IR"
  | "IQ"
  | "IE"
  | "IM"
  | "IL"
  | "IT"
  | "JM"
  | "JP"
  | "JE"
  | "JO"
  | "KZ"
  | "KE"
  | "KI"
  | "KP"
  | "KR"
  | "KW"
  | "KG"
  | "LA"
  | "LV"
  | "LB"
  | "LS"
  | "LR"
  | "LY"
  | "LI"
  | "LT"
  | "LU"
  | "MO"
  | "MK"
  | "MG"
  | "MW"
  | "MY"
  | "MV"
  | "ML"
  | "MT"
  | "MH"
  | "MQ"
  | "MR"
  | "MU"
  | "YT"
  | "MX"
  | "FM"
  | "MD"
  | "MC"
  | "MN"
  | "ME"
  | "MS"
  | "MA"
  | "MZ"
  | "MM"
  | "NA"
  | "NR"
  | "NP"
  | "NL"
  | "NC"
  | "NZ"
  | "NI"
  | "NE"
  | "NG"
  | "NU"
  | "NF"
  | "MP"
  | "NO"
  | "OM"
  | "PK"
  | "PW"
  | "PS"
  | "PA"
  | "PG"
  | "PY"
  | "PE"
  | "PH"
  | "PN"
  | "PL"
  | "PT"
  | "PR"
  | "QA"
  | "RE"
  | "RO"
  | "RU"
  | "RW"
  | "BL"
  | "SH"
  | "KN"
  | "LC"
  | "MF"
  | "PM"
  | "VC"
  | "WS"
  | "SM"
  | "ST"
  | "SA"
  | "SN"
  | "RS"
  | "SC"
  | "SL"
  | "SG"
  | "SX"
  | "SK"
  | "SI"
  | "SB"
  | "SO"
  | "ZA"
  | "GS"
  | "SS"
  | "ES"
  | "LK"
  | "SD"
  | "SR"
  | "SJ"
  | "SZ"
  | "SE"
  | "CH"
  | "SY"
  | "TW"
  | "TJ"
  | "TZ"
  | "TH"
  | "TL"
  | "TG"
  | "TK"
  | "TO"
  | "TT"
  | "TN"
  | "TR"
  | "TM"
  | "TC"
  | "TV"
  | "UG"
  | "UA"
  | "AE"
  | "GB"
  | "US"
  | "UM"
  | "UY"
  | "UZ"
  | "VU"
  | "VE"
  | "VN"
  | "VG"
  | "VI"
  | "WF"
  | "EH"
  | "YE"
  | "ZM"
  | "ZW"
  | "Unknown";

export interface CreateSharedGroupRequest extends IPlayFabRequestCommon {
  /** Unique identifier for the shared group (a random identifier will be assigned, if one is not specified). */
  SharedGroupId?: string;
}

export interface CreateSharedGroupResult extends IPlayFabResultCommon {
  /** Unique identifier for the shared group. */
  SharedGroupId?: string;
}

type Currency = "AED"
  | "AFN"
  | "ALL"
  | "AMD"
  | "ANG"
  | "AOA"
  | "ARS"
  | "AUD"
  | "AWG"
  | "AZN"
  | "BAM"
  | "BBD"
  | "BDT"
  | "BGN"
  | "BHD"
  | "BIF"
  | "BMD"
  | "BND"
  | "BOB"
  | "BRL"
  | "BSD"
  | "BTN"
  | "BWP"
  | "BYR"
  | "BZD"
  | "CAD"
  | "CDF"
  | "CHF"
  | "CLP"
  | "CNY"
  | "COP"
  | "CRC"
  | "CUC"
  | "CUP"
  | "CVE"
  | "CZK"
  | "DJF"
  | "DKK"
  | "DOP"
  | "DZD"
  | "EGP"
  | "ERN"
  | "ETB"
  | "EUR"
  | "FJD"
  | "FKP"
  | "GBP"
  | "GEL"
  | "GGP"
  | "GHS"
  | "GIP"
  | "GMD"
  | "GNF"
  | "GTQ"
  | "GYD"
  | "HKD"
  | "HNL"
  | "HRK"
  | "HTG"
  | "HUF"
  | "IDR"
  | "ILS"
  | "IMP"
  | "INR"
  | "IQD"
  | "IRR"
  | "ISK"
  | "JEP"
  | "JMD"
  | "JOD"
  | "JPY"
  | "KES"
  | "KGS"
  | "KHR"
  | "KMF"
  | "KPW"
  | "KRW"
  | "KWD"
  | "KYD"
  | "KZT"
  | "LAK"
  | "LBP"
  | "LKR"
  | "LRD"
  | "LSL"
  | "LYD"
  | "MAD"
  | "MDL"
  | "MGA"
  | "MKD"
  | "MMK"
  | "MNT"
  | "MOP"
  | "MRO"
  | "MUR"
  | "MVR"
  | "MWK"
  | "MXN"
  | "MYR"
  | "MZN"
  | "NAD"
  | "NGN"
  | "NIO"
  | "NOK"
  | "NPR"
  | "NZD"
  | "OMR"
  | "PAB"
  | "PEN"
  | "PGK"
  | "PHP"
  | "PKR"
  | "PLN"
  | "PYG"
  | "QAR"
  | "RON"
  | "RSD"
  | "RUB"
  | "RWF"
  | "SAR"
  | "SBD"
  | "SCR"
  | "SDG"
  | "SEK"
  | "SGD"
  | "SHP"
  | "SLL"
  | "SOS"
  | "SPL"
  | "SRD"
  | "STD"
  | "SVC"
  | "SYP"
  | "SZL"
  | "THB"
  | "TJS"
  | "TMT"
  | "TND"
  | "TOP"
  | "TRY"
  | "TTD"
  | "TVD"
  | "TWD"
  | "TZS"
  | "UAH"
  | "UGX"
  | "USD"
  | "UYU"
  | "UZS"
  | "VEF"
  | "VND"
  | "VUV"
  | "WST"
  | "XAF"
  | "XCD"
  | "XDR"
  | "XOF"
  | "XPF"
  | "YER"
  | "ZAR"
  | "ZMW"
  | "ZWD";

/** @deprecated Do not use */
export interface CurrentGamesRequest extends IPlayFabRequestCommon {
  /** Build to match against. */
  BuildVersion?: string;
  /** Game mode to look for. */
  GameMode?: string;
  /** Region to check for Game Server Instances. */
  Region?: Region;
  /** Statistic name to find statistic-based matches. */
  StatisticName?: string;
  /** Filter to include and/or exclude Game Server Instances associated with certain tags. */
  TagFilter?: CollectionFilter;
}

/** @deprecated Do not use */
export interface CurrentGamesResult extends IPlayFabResultCommon {
  /** number of games running */
  GameCount: number;
  /** array of games found */
  Games?: GameInfo[];
  /** total number of players across all servers */
  PlayerCount: number;
}

export interface CustomPropertyDetails {
  /** The custom property&#39;s name. */
  Name?: string;
  /** The custom property&#39;s value. */
  Value?: any;
}

export interface DeletedPropertyDetails {
  /** The name of the property which was requested to be deleted. */
  Name?: string;
  /** Indicates whether or not the property was deleted. If false, no property with that name existed. */
  WasDeleted: boolean;
}

export interface DeletePlayerCustomPropertiesRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /**
   * Optional field used for concurrency control. One can ensure that the delete operation will only be performed if the
   * player&#39;s properties have not been updated by any other clients since the last version.
   */
  ExpectedPropertiesVersion?: number;
  /** A list of property names denoting which properties should be deleted. */
  PropertyNames: string[];
}

export interface DeletePlayerCustomPropertiesResult extends IPlayFabResultCommon {
  /** The list of properties requested to be deleted. */
  DeletedProperties?: DeletedPropertyDetails[];
  /**
   * Indicates the current version of a player&#39;s properties that have been set. This is incremented after updates and
   * deletes. This version can be provided in update and delete calls for concurrency control.
   */
  PropertiesVersion: number;
}

export interface DeviceInfoRequest extends IPlayFabRequestCommon {
  /** Information posted to the PlayStream Event. Currently arbitrary, and specific to the environment sending it. */
  Info?: Record<string, any>;
}

type EmailVerificationStatus = "Unverified"
  | "Pending"
  | "Confirmed";

export interface EmptyResponse extends IPlayFabResultCommon {
}

export interface EmptyResult extends IPlayFabResultCommon {
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

export interface EntityTokenResponse {
  /** The entity id and type. */
  Entity?: EntityKey;
  /** The token used to set X-EntityToken for all entity based API calls. */
  EntityToken?: string;
  /** The time the token will expire, if it is an expiring token, in UTC. */
  TokenExpiration?: string;
}

export interface ExecuteCloudScriptRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The name of the CloudScript function to execute */
  FunctionName: string;
  /** Object that is passed in to the function as the first argument */
  FunctionParameter?: any;
  /**
   * Generate a &#39;player_executed_cloudscript&#39; PlayStream event containing the results of the function execution and other
   * contextual information. This event will show up in the PlayStream debugger console for the player in Game Manager.
   */
  GeneratePlayStreamEvent?: boolean;
  /**
   * Option for which revision of the CloudScript to execute. &#39;Latest&#39; executes the most recently created revision, &#39;Live&#39;
   * executes the current live, published revision, and &#39;Specific&#39; executes the specified revision. The default value is
   * &#39;Specific&#39;, if the SpeificRevision parameter is specified, otherwise it is &#39;Live&#39;.
   */
  RevisionSelection?: CloudScriptRevisionOption;
  /** The specivic revision to execute, when RevisionSelection is set to &#39;Specific&#39; */
  SpecificRevision?: number;
}

export interface ExecuteCloudScriptResult extends IPlayFabResultCommon {
  /** Number of PlayFab API requests issued by the CloudScript function */
  APIRequestsIssued: number;
  /** Information about the error, if any, that occurred during execution */
  Error?: ScriptExecutionError;
  ExecutionTimeSeconds: number;
  /** The name of the function that executed */
  FunctionName?: string;
  /** The object returned from the CloudScript function, if any */
  FunctionResult?: any;
  /**
   * Flag indicating if the FunctionResult was too large and was subsequently dropped from this event. This only occurs if
   * the total event size is larger than 350KB.
   */
  FunctionResultTooLarge?: boolean;
  /** Number of external HTTP requests issued by the CloudScript function */
  HttpRequestsIssued: number;
  /**
   * Entries logged during the function execution. These include both entries logged in the function code using log.info()
   * and log.error() and error entries for API and HTTP request failures.
   */
  Logs?: LogStatement[];
  /**
   * Flag indicating if the logs were too large and were subsequently dropped from this event. This only occurs if the total
   * event size is larger than 350KB after the FunctionResult was removed.
   */
  LogsTooLarge?: boolean;
  MemoryConsumedBytes: number;
  /**
   * Processor time consumed while executing the function. This does not include time spent waiting on API calls or HTTP
   * requests.
   */
  ProcessorTimeSeconds: number;
  /** The revision of the CloudScript that executed */
  Revision: number;
}

type ExternalFriendSources = "None"
  | "Steam"
  | "Facebook"
  | "Xbox"
  | "Psn"
  | "All";

export interface FacebookInstantGamesPlayFabIdPair {
  /** Unique Facebook Instant Games identifier for a user. */
  FacebookInstantGamesId?: string;
  /** Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the Facebook Instant Games identifier. */
  PlayFabId?: string;
}

export interface FacebookPlayFabIdPair {
  /** Unique Facebook identifier for a user. */
  FacebookId?: string;
  /** Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the Facebook identifier. */
  PlayFabId?: string;
}

export interface FriendInfo {
  /**
   * This field is not populated.
   * @deprecated Do not use
   */
  CurrentMatchmakerLobbyId?: string;
  /** Available Facebook information (if the user and connected Facebook friend both have PlayFab Accounts in the same title). */
  FacebookInfo?: UserFacebookInfo;
  /** PlayFab unique identifier for this friend. */
  FriendPlayFabId?: string;
  /**
   * Available Game Center information (if the user and connected Game Center friend both have PlayFab Accounts in the same
   * title).
   */
  GameCenterInfo?: UserGameCenterInfo;
  /** The profile of the user, if requested. */
  Profile?: PlayerProfileModel;
  /**
   * Available PlayStation :tm: Network information, if the user connected PlayStation :tm Network friend both have PlayFab
   * Accounts in the same title.
   */
  PSNInfo?: UserPsnInfo;
  /** Available Steam information (if the user and connected Steam friend both have PlayFab Accounts in the same title). */
  SteamInfo?: UserSteamInfo;
  /** Tags which have been associated with this friend. */
  Tags?: string[];
  /** Title-specific display name for this friend. */
  TitleDisplayName?: string;
  /** PlayFab unique username for this friend. */
  Username?: string;
  /** Available Xbox information, (if the user and connected Xbox Live friend both have PlayFab Accounts in the same title). */
  XboxInfo?: UserXboxInfo;
}

export interface GameCenterPlayFabIdPair {
  /** Unique Game Center identifier for a user. */
  GameCenterId?: string;
  /** Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the Game Center identifier. */
  PlayFabId?: string;
}

/** @deprecated Do not use */
export interface GameInfo {
  /** build version this server is running */
  BuildVersion?: string;
  /** game mode this server is running */
  GameMode?: string;
  /** game session custom data */
  GameServerData?: string;
  /**
   * game specific string denoting server configuration
   * @deprecated Please use GameServerStateEnum instead.
   */
  GameServerState?: number;
  /** game specific string denoting server configuration */
  GameServerStateEnum?: GameInstanceState;
  /** last heartbeat of the game server instance, used in external game server provider mode */
  LastHeartbeat?: string;
  /** unique lobby identifier for this game server */
  LobbyID?: string;
  /** maximum players this server can support */
  MaxPlayers?: number;
  /** array of current player IDs on this server */
  PlayerUserIds?: string[];
  /** region to which this server is associated */
  Region?: Region;
  /** duration in seconds this server has been running */
  RunTime: number;
  /**
   * IPV4 address of the server
   * @deprecated Please use ServerIPV4Address instead.
   */
  ServerHostname?: string;
  /** IPV4 address of the server */
  ServerIPV4Address?: string;
  /** IPV6 address of the server */
  ServerIPV6Address?: string;
  /** port number to use for non-http communications with the server */
  ServerPort?: number;
  /** Public DNS name (if any) of the server */
  ServerPublicDNSName?: string;
  /** stastic used to match this game in player statistic matchmaking */
  StatisticName?: string;
  /** game session tags */
  Tags?: Record<string, string | null>;
}

type GameInstanceState = "Open"
  | "Closed";

/** @deprecated Do not use */
export interface GameServerRegionsRequest extends IPlayFabRequestCommon {
  /** version of game server for which stats are being requested */
  BuildVersion: string;
  /**
   * Unique identifier for the title, found in the Settings &gt; Game Properties section of the PlayFab developer site when a
   * title has been selected.
   */
  TitleId?: string;
}

/** @deprecated Do not use */
export interface GameServerRegionsResult extends IPlayFabResultCommon {
  /** array of regions found matching the request parameters */
  Regions?: RegionInfo[];
}

export interface GenericPlayFabIdPair {
  /** Unique generic service identifier for a user. */
  GenericId?: GenericServiceId;
  /** Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the given generic identifier. */
  PlayFabId?: string;
}

export interface GenericServiceId {
  /** Name of the service for which the player has a unique identifier. */
  ServiceName: string;
  /** Unique identifier of the player in that service. */
  UserId: string;
}

export interface GetAccountInfoRequest extends IPlayFabRequestCommon {
  /** User email address for the account to find (if no Username is specified). */
  Email?: string;
  /**
   * Unique PlayFab identifier of the user whose info is being requested. Optional, defaults to the authenticated user if no
   * other lookup identifier set.
   */
  PlayFabId?: string;
  /**
   * Title-specific username for the account to find (if no Email is set). Note that if the non-unique Title Display Names
   * option is enabled for the title, attempts to look up users by Title Display Name will always return AccountNotFound.
   */
  TitleDisplayName?: string;
  /** PlayFab Username for the account to find (if no PlayFabId is specified). */
  Username?: string;
}

export interface GetAccountInfoResult extends IPlayFabResultCommon {
  /** Account information for the local user. */
  AccountInfo?: UserAccountInfo;
}

export interface GetAdPlacementsRequest extends IPlayFabRequestCommon {
  /** The current AppId to use */
  AppId: string;
  /** Using the name or unique identifier, filter the result for get a specific placement. */
  Identifier?: NameIdentifier;
}

export interface GetAdPlacementsResult extends IPlayFabResultCommon {
  /** Array of results */
  AdPlacements?: AdPlacementDetails[];
}

export interface GetCatalogItemsRequest extends IPlayFabRequestCommon {
  /** Which catalog is being requested. If null, uses the default catalog. */
  CatalogVersion?: string;
}

export interface GetCatalogItemsResult extends IPlayFabResultCommon {
  /** Array of items which can be purchased. */
  Catalog?: CatalogItem[];
}

export interface GetCharacterDataRequest extends IPlayFabRequestCommon {
  /** Unique PlayFab assigned ID for a specific character owned by a user */
  CharacterId: string;
  /**
   * The version that currently exists according to the caller. The call will return the data for all of the keys if the
   * version in the system is greater than this.
   */
  IfChangedFromDataVersion?: number;
  /** Specific keys to search for in the custom user data. */
  Keys?: string[];
  /** Unique PlayFab identifier of the user to load data for. Optional, defaults to yourself if not set. */
  PlayFabId?: string;
}

export interface GetCharacterDataResult extends IPlayFabResultCommon {
  /** Unique PlayFab assigned ID for a specific character owned by a user */
  CharacterId?: string;
  /** User specific data for this title. */
  Data?: Record<string, UserDataRecord>;
  /**
   * Indicates the current version of the data that has been set. This is incremented with every set call for that type of
   * data (read-only, internal, etc). This version can be provided in Get calls to find updated data.
   */
  DataVersion: number;
}

export interface GetCharacterInventoryRequest extends IPlayFabRequestCommon {
  /** Used to limit results to only those from a specific catalog version. */
  CatalogVersion?: string;
  /** Unique PlayFab assigned ID for a specific character owned by a user */
  CharacterId: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
}

export interface GetCharacterInventoryResult extends IPlayFabResultCommon {
  /** Unique identifier of the character for this inventory. */
  CharacterId?: string;
  /** Array of inventory items belonging to the character. */
  Inventory?: ItemInstance[];
  /** Array of virtual currency balance(s) belonging to the character. */
  VirtualCurrency?: Record<string, number>;
  /** Array of remaining times and timestamps for virtual currencies. */
  VirtualCurrencyRechargeTimes?: Record<string, VirtualCurrencyRechargeTime>;
}

export interface GetCharacterLeaderboardRequest extends IPlayFabRequestCommon {
  /**
   * Optional character type on which to filter the leaderboard entries.
   * @deprecated Do not use
   */
  CharacterType?: string;
  /** Maximum number of entries to retrieve. Default 10, maximum 100. */
  MaxResultsCount?: number;
  /** First entry in the leaderboard to be retrieved. */
  StartPosition: number;
  /** Unique identifier for the title-specific statistic for the leaderboard. */
  StatisticName: string;
}

export interface GetCharacterLeaderboardResult extends IPlayFabResultCommon {
  /** Ordered list of leaderboard entries. */
  Leaderboard?: CharacterLeaderboardEntry[];
}

export interface GetCharacterStatisticsRequest extends IPlayFabRequestCommon {
  /** Unique PlayFab assigned ID for a specific character owned by a user */
  CharacterId: string;
}

export interface GetCharacterStatisticsResult extends IPlayFabResultCommon {
  /** The requested character statistics. */
  CharacterStatistics?: Record<string, number>;
}

/** @deprecated Do not use */
export interface GetCloudScriptUrlRequest extends IPlayFabRequestCommon {
  /**
   * Specifies whether the URL returned should be the one for the most recently uploaded Revision of the Cloud Script (true),
   * or the Revision most recently set to live (false). Defaults to false.
   */
  Testing?: boolean;
  /** Cloud Script Version to use. Defaults to 1. */
  Version?: number;
}

/** @deprecated Do not use */
export interface GetCloudScriptUrlResult extends IPlayFabResultCommon {
  /** URL of the Cloud Script logic server. */
  Url?: string;
}

export interface GetContentDownloadUrlRequest extends IPlayFabRequestCommon {
  /** HTTP method to fetch item - GET or HEAD. Use HEAD when only fetching metadata. Default is GET. */
  HttpMethod?: string;
  /** Key of the content item to fetch, usually formatted as a path, e.g. images/a.png */
  Key: string;
  /**
   * True to download through CDN. CDN provides higher download bandwidth and lower latency. However, if you want the latest,
   * non-cached version of the content during development, set this to false. Default is true.
   */
  ThruCDN?: boolean;
}

export interface GetContentDownloadUrlResult extends IPlayFabResultCommon {
  /** URL for downloading content via HTTP GET or HEAD method. The URL will expire in approximately one hour. */
  URL?: string;
}

/** @deprecated Do not use */
export interface GetFriendLeaderboardAroundCurrentUserRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /**
   * Indicates which other platforms&#39; friends should be included in the response. In HTTP, it is represented as a
   * comma-separated list of platforms.
   */
  ExternalPlatformFriends?: ExternalFriendSources;
  /**
   * Indicates whether Facebook friends should be included in the response. Default is true.
   * @deprecated Please use ExternalPlatformFriends instead.
   */
  IncludeFacebookFriends?: boolean;
  /**
   * Indicates whether Steam service friends should be included in the response. Default is true.
   * @deprecated Please use ExternalPlatformFriends instead.
   */
  IncludeSteamFriends?: boolean;
  /** Maximum number of entries to retrieve. Default 10, maximum 100. */
  MaxResultsCount?: number;
  /** Statistic used to rank players for this leaderboard. */
  StatisticName: string;
  /** Xbox token if Xbox friends should be included. Requires Xbox be configured on PlayFab. */
  XboxToken?: string;
}

/** @deprecated Do not use */
export interface GetFriendLeaderboardAroundCurrentUserResult extends IPlayFabResultCommon {
  /** Ordered listing of users and their positions in the requested leaderboard. */
  Leaderboard?: PlayerLeaderboardEntry[];
  /** The time the next scheduled reset will occur. Null if the leaderboard does not reset on a schedule. */
  NextReset?: string;
  /** The version of the leaderboard returned. */
  Version: number;
}

export interface GetFriendLeaderboardAroundPlayerRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /**
   * Indicates which other platforms&#39; friends should be included in the response. In HTTP, it is represented as a
   * comma-separated list of platforms.
   */
  ExternalPlatformFriends?: ExternalFriendSources;
  /**
   * Indicates whether Facebook friends should be included in the response. Default is true.
   * @deprecated Please use ExternalPlatformFriends instead.
   */
  IncludeFacebookFriends?: boolean;
  /**
   * Indicates whether Steam service friends should be included in the response. Default is true.
   * @deprecated Please use ExternalPlatformFriends instead.
   */
  IncludeSteamFriends?: boolean;
  /** Maximum number of entries to retrieve. Default 10, maximum 100. */
  MaxResultsCount?: number;
  /** PlayFab unique identifier of the user to center the leaderboard around. If null will center on the logged in user. */
  PlayFabId?: string;
  /**
   * If non-null, this determines which properties of the resulting player profiles to return. For API calls from the client,
   * only the allowed client profile properties for the title may be requested. These allowed properties are configured in
   * the Game Manager &quot;Client Profile Options&quot; tab in the &quot;Settings&quot; section.
   */
  ProfileConstraints?: PlayerProfileViewConstraints;
  /** Statistic used to rank players for this leaderboard. */
  StatisticName: string;
  /** If set to false, Version is considered null. If true, uses the specified Version */
  UseSpecificVersion?: boolean;
  /** The version of the leaderboard to get. */
  Version?: number;
  /** Xbox token if Xbox friends should be included. Requires Xbox be configured on PlayFab. */
  XboxToken?: string;
}

export interface GetFriendLeaderboardAroundPlayerResult extends IPlayFabResultCommon {
  /** Ordered listing of users and their positions in the requested leaderboard. */
  Leaderboard?: PlayerLeaderboardEntry[];
  /** The time the next scheduled reset will occur. Null if the leaderboard does not reset on a schedule. */
  NextReset?: string;
  /** The version of the leaderboard returned. */
  Version: number;
}

export interface GetFriendLeaderboardRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /**
   * Indicates which other platforms&#39; friends should be included in the response. In HTTP, it is represented as a
   * comma-separated list of platforms.
   */
  ExternalPlatformFriends?: ExternalFriendSources;
  /**
   * Indicates whether Facebook friends should be included in the response. Default is true.
   * @deprecated Please use ExternalPlatformFriends instead.
   */
  IncludeFacebookFriends?: boolean;
  /**
   * Indicates whether Steam service friends should be included in the response. Default is true.
   * @deprecated Please use ExternalPlatformFriends instead.
   */
  IncludeSteamFriends?: boolean;
  /** Maximum number of entries to retrieve. Default 10, maximum 100. */
  MaxResultsCount?: number;
  /**
   * If non-null, this determines which properties of the resulting player profiles to return. For API calls from the client,
   * only the allowed client profile properties for the title may be requested. These allowed properties are configured in
   * the Game Manager &quot;Client Profile Options&quot; tab in the &quot;Settings&quot; section.
   */
  ProfileConstraints?: PlayerProfileViewConstraints;
  /** Position in the leaderboard to start this listing (defaults to the first entry). */
  StartPosition: number;
  /** Statistic used to rank friends for this leaderboard. */
  StatisticName: string;
  /** If set to false, Version is considered null. If true, uses the specified Version */
  UseSpecificVersion?: boolean;
  /** The version of the leaderboard to get. */
  Version?: number;
  /** Xbox token if Xbox friends should be included. Requires Xbox be configured on PlayFab. */
  XboxToken?: string;
}

export interface GetFriendsListRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /**
   * Indicates which other platforms&#39; friends should be included in the response. In HTTP, it is represented as a
   * comma-separated list of platforms.
   */
  ExternalPlatformFriends?: ExternalFriendSources;
  /**
   * Indicates whether Facebook friends should be included in the response. Default is true.
   * @deprecated Please use ExternalPlatformFriends instead.
   */
  IncludeFacebookFriends?: boolean;
  /**
   * Indicates whether Steam service friends should be included in the response. Default is true.
   * @deprecated Please use ExternalPlatformFriends instead.
   */
  IncludeSteamFriends?: boolean;
  /**
   * If non-null, this determines which properties of the resulting player profiles to return. For API calls from the client,
   * only the allowed client profile properties for the title may be requested. These allowed properties are configured in
   * the Game Manager &quot;Client Profile Options&quot; tab in the &quot;Settings&quot; section.
   */
  ProfileConstraints?: PlayerProfileViewConstraints;
  /** Xbox token if Xbox friends should be included. Requires Xbox be configured on PlayFab. */
  XboxToken?: string;
}

export interface GetFriendsListResult extends IPlayFabResultCommon {
  /** Array of friends found. */
  Friends?: FriendInfo[];
}

export interface GetLeaderboardAroundCharacterRequest extends IPlayFabRequestCommon {
  /** Unique PlayFab assigned ID for a specific character on which to center the leaderboard. */
  CharacterId: string;
  /**
   * Optional character type on which to filter the leaderboard entries.
   * @deprecated Do not use
   */
  CharacterType?: string;
  /** Maximum number of entries to retrieve. Default 10, maximum 100. */
  MaxResultsCount?: number;
  /** Unique identifier for the title-specific statistic for the leaderboard. */
  StatisticName: string;
}

export interface GetLeaderboardAroundCharacterResult extends IPlayFabResultCommon {
  /** Ordered list of leaderboard entries. */
  Leaderboard?: CharacterLeaderboardEntry[];
}

/** @deprecated Do not use */
export interface GetLeaderboardAroundCurrentUserRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Maximum number of entries to retrieve. Default 10, maximum 100. */
  MaxResultsCount?: number;
  /** Statistic used to rank players for this leaderboard. */
  StatisticName: string;
}

/** @deprecated Do not use */
export interface GetLeaderboardAroundCurrentUserResult extends IPlayFabResultCommon {
  /** Ordered listing of users and their positions in the requested leaderboard. */
  Leaderboard?: PlayerLeaderboardEntry[];
  /** The time the next scheduled reset will occur. Null if the leaderboard does not reset on a schedule. */
  NextReset?: string;
  /** The version of the leaderboard returned. */
  Version: number;
}

export interface GetLeaderboardAroundPlayerRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Maximum number of entries to retrieve. Default 10, maximum 100. */
  MaxResultsCount?: number;
  /** PlayFab unique identifier of the user to center the leaderboard around. If null will center on the logged in user. */
  PlayFabId?: string;
  /**
   * If non-null, this determines which properties of the resulting player profiles to return. For API calls from the client,
   * only the allowed client profile properties for the title may be requested. These allowed properties are configured in
   * the Game Manager &quot;Client Profile Options&quot; tab in the &quot;Settings&quot; section.
   */
  ProfileConstraints?: PlayerProfileViewConstraints;
  /** Statistic used to rank players for this leaderboard. */
  StatisticName: string;
  /** If set to false, Version is considered null. If true, uses the specified Version */
  UseSpecificVersion?: boolean;
  /** The version of the leaderboard to get. */
  Version?: number;
}

export interface GetLeaderboardAroundPlayerResult extends IPlayFabResultCommon {
  /** Ordered listing of users and their positions in the requested leaderboard. */
  Leaderboard?: PlayerLeaderboardEntry[];
  /** The time the next scheduled reset will occur. Null if the leaderboard does not reset on a schedule. */
  NextReset?: string;
  /** The version of the leaderboard returned. */
  Version: number;
}

export interface GetLeaderboardForUsersCharactersRequest extends IPlayFabRequestCommon {
  /**
   * Maximum number of entries to retrieve.
   * @deprecated Please use  instead.
   */
  MaxResultsCount?: number;
  /** Unique identifier for the title-specific statistic for the leaderboard. */
  StatisticName: string;
}

export interface GetLeaderboardForUsersCharactersResult extends IPlayFabResultCommon {
  /** Ordered list of leaderboard entries. */
  Leaderboard?: CharacterLeaderboardEntry[];
}

export interface GetLeaderboardRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Maximum number of entries to retrieve. Default 10, maximum 100. */
  MaxResultsCount?: number;
  /**
   * If non-null, this determines which properties of the resulting player profiles to return. For API calls from the client,
   * only the allowed client profile properties for the title may be requested. These allowed properties are configured in
   * the Game Manager &quot;Client Profile Options&quot; tab in the &quot;Settings&quot; section.
   */
  ProfileConstraints?: PlayerProfileViewConstraints;
  /** Position in the leaderboard to start this listing (defaults to the first entry). */
  StartPosition: number;
  /** Statistic used to rank players for this leaderboard. */
  StatisticName: string;
  /** If set to false, Version is considered null. If true, uses the specified Version */
  UseSpecificVersion?: boolean;
  /** The version of the leaderboard to get. */
  Version?: number;
}

export interface GetLeaderboardResult extends IPlayFabResultCommon {
  /** Ordered listing of users and their positions in the requested leaderboard. */
  Leaderboard?: PlayerLeaderboardEntry[];
  /** The time the next scheduled reset will occur. Null if the leaderboard does not reset on a schedule. */
  NextReset?: string;
  /** The version of the leaderboard returned. */
  Version: number;
}

export interface GetPaymentTokenRequest extends IPlayFabRequestCommon {
  /** The name of service to provide the payment token. Allowed Values are: xsolla */
  TokenProvider: string;
}

export interface GetPaymentTokenResult extends IPlayFabResultCommon {
  /** PlayFab&#39;s purchase order identifier. */
  OrderId?: string;
  /** The token from provider. */
  ProviderToken?: string;
}

export interface GetPhotonAuthenticationTokenRequest extends IPlayFabRequestCommon {
  /** The Photon applicationId for the game you wish to log into. */
  PhotonApplicationId: string;
}

export interface GetPhotonAuthenticationTokenResult extends IPlayFabResultCommon {
  /** The Photon authentication token for this game-session. */
  PhotonCustomAuthenticationToken?: string;
}

export interface GetPlayerCombinedInfoRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Flags for which pieces of info to return for the user. */
  InfoRequestParameters: GetPlayerCombinedInfoRequestParams;
  /** PlayFabId of the user whose data will be returned. If not filled included, we return the data for the calling player. */
  PlayFabId?: string;
}

export interface GetPlayerCombinedInfoRequestParams {
  /** Whether to get character inventories. Defaults to false. */
  GetCharacterInventories: boolean;
  /** Whether to get the list of characters. Defaults to false. */
  GetCharacterList: boolean;
  /** Whether to get player profile. Defaults to false. Has no effect for a new player. */
  GetPlayerProfile: boolean;
  /** Whether to get player statistics. Defaults to false. */
  GetPlayerStatistics: boolean;
  /** Whether to get title data. Defaults to false. */
  GetTitleData: boolean;
  /** Whether to get the player&#39;s account Info. Defaults to false */
  GetUserAccountInfo: boolean;
  /** Whether to get the player&#39;s custom data. Defaults to false */
  GetUserData: boolean;
  /** Whether to get the player&#39;s inventory. Defaults to false */
  GetUserInventory: boolean;
  /** Whether to get the player&#39;s read only data. Defaults to false */
  GetUserReadOnlyData: boolean;
  /** Whether to get the player&#39;s virtual currency balances. Defaults to false */
  GetUserVirtualCurrency: boolean;
  /** Specific statistics to retrieve. Leave null to get all keys. Has no effect if GetPlayerStatistics is false */
  PlayerStatisticNames?: string[];
  /** Specifies the properties to return from the player profile. Defaults to returning the player&#39;s display name. */
  ProfileConstraints?: PlayerProfileViewConstraints;
  /** Specific keys to search for in the custom data. Leave null to get all keys. Has no effect if GetTitleData is false */
  TitleDataKeys?: string[];
  /** Specific keys to search for in the custom data. Leave null to get all keys. Has no effect if GetUserData is false */
  UserDataKeys?: string[];
  /**
   * Specific keys to search for in the custom data. Leave null to get all keys. Has no effect if GetUserReadOnlyData is
   * false
   */
  UserReadOnlyDataKeys?: string[];
}

export interface GetPlayerCombinedInfoResult extends IPlayFabResultCommon {
  /** Results for requested info. */
  InfoResultPayload?: GetPlayerCombinedInfoResultPayload;
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId?: string;
}

export interface GetPlayerCombinedInfoResultPayload {
  /** Account information for the user. This is always retrieved. */
  AccountInfo?: UserAccountInfo;
  /** Inventories for each character for the user. */
  CharacterInventories?: CharacterInventory[];
  /** List of characters for the user. */
  CharacterList?: CharacterResult[];
  /**
   * The profile of the players. This profile is not guaranteed to be up-to-date. For a new player, this profile will not
   * exist.
   */
  PlayerProfile?: PlayerProfileModel;
  /** List of statistics for this player. */
  PlayerStatistics?: StatisticValue[];
  /** Title data for this title. */
  TitleData?: Record<string, string | null>;
  /** User specific custom data. */
  UserData?: Record<string, UserDataRecord>;
  /** The version of the UserData that was returned. */
  UserDataVersion: number;
  /** Array of inventory items in the user&#39;s current inventory. */
  UserInventory?: ItemInstance[];
  /** User specific read-only data. */
  UserReadOnlyData?: Record<string, UserDataRecord>;
  /** The version of the Read-Only UserData that was returned. */
  UserReadOnlyDataVersion: number;
  /** Dictionary of virtual currency balance(s) belonging to the user. */
  UserVirtualCurrency?: Record<string, number>;
  /** Dictionary of remaining times and timestamps for virtual currencies. */
  UserVirtualCurrencyRechargeTimes?: Record<string, VirtualCurrencyRechargeTime>;
}

export interface GetPlayerCustomPropertyRequest extends IPlayFabRequestCommon {
  /** Specific property name to search for in the player&#39;s properties. */
  PropertyName: string;
}

export interface GetPlayerCustomPropertyResult extends IPlayFabResultCommon {
  /**
   * Indicates the current version of a player&#39;s properties that have been set. This is incremented after updates and
   * deletes. This version can be provided in update and delete calls for concurrency control.
   */
  PropertiesVersion: number;
  /** Player specific property and its corresponding value. */
  Property?: CustomPropertyDetails;
}

export interface GetPlayerProfileRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId?: string;
  /**
   * If non-null, this determines which properties of the resulting player profiles to return. For API calls from the client,
   * only the allowed client profile properties for the title may be requested. These allowed properties are configured in
   * the Game Manager &quot;Client Profile Options&quot; tab in the &quot;Settings&quot; section.
   */
  ProfileConstraints?: PlayerProfileViewConstraints;
}

export interface GetPlayerProfileResult extends IPlayFabResultCommon {
  /**
   * The profile of the player. This profile is not guaranteed to be up-to-date. For a new player, this profile will not
   * exist.
   */
  PlayerProfile?: PlayerProfileModel;
}

export interface GetPlayerSegmentsRequest extends IPlayFabRequestCommon {
}

export interface GetPlayerSegmentsResult extends IPlayFabResultCommon {
  /** Array of segments the requested player currently belongs to. */
  Segments?: GetSegmentResult[];
}

export interface GetPlayerStatisticsRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** statistics to return (current version will be returned for each) */
  StatisticNames?: string[];
  /**
   * statistics to return, if StatisticNames is not set (only statistics which have a version matching that provided will be
   * returned)
   */
  StatisticNameVersions?: StatisticNameVersion[];
}

export interface GetPlayerStatisticsResult extends IPlayFabResultCommon {
  /** User statistics for the requested user. */
  Statistics?: StatisticValue[];
}

export interface GetPlayerStatisticVersionsRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** unique name of the statistic */
  StatisticName?: string;
}

export interface GetPlayerStatisticVersionsResult extends IPlayFabResultCommon {
  /** version change history of the statistic */
  StatisticVersions?: PlayerStatisticVersion[];
}

export interface GetPlayerTagsRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Optional namespace to filter results by */
  Namespace?: string;
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId: string;
}

export interface GetPlayerTagsResult extends IPlayFabResultCommon {
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId: string;
  /** Canonical tags (including namespace and tag&#39;s name) for the requested user */
  Tags: string[];
}

export interface GetPlayerTradesRequest extends IPlayFabRequestCommon {
  /** Returns only trades with the given status. If null, returns all trades. */
  StatusFilter?: TradeStatus;
}

export interface GetPlayerTradesResponse extends IPlayFabResultCommon {
  /** History of trades which this player has accepted. */
  AcceptedTrades?: TradeInfo[];
  /** The trades for this player which are currently available to be accepted. */
  OpenedTrades?: TradeInfo[];
}

export interface GetPlayFabIDsFromBattleNetAccountIdsRequest extends IPlayFabRequestCommon {
  /**
   * Array of unique Battle.net account identifiers for which the title needs to get PlayFab identifiers. The array cannot
   * exceed 10 in length.
   */
  BattleNetAccountIds: string[];
}

export interface GetPlayFabIDsFromBattleNetAccountIdsResult extends IPlayFabResultCommon {
  /** Mapping of Battle.net account identifiers to PlayFab identifiers. */
  Data?: BattleNetAccountPlayFabIdPair[];
}

export interface GetPlayFabIDsFromFacebookIDsRequest extends IPlayFabRequestCommon {
  /**
   * Array of unique Facebook identifiers for which the title needs to get PlayFab identifiers. The array cannot exceed 25 in
   * length.
   */
  FacebookIDs: string[];
}

export interface GetPlayFabIDsFromFacebookIDsResult extends IPlayFabResultCommon {
  /** Mapping of Facebook identifiers to PlayFab identifiers. */
  Data?: FacebookPlayFabIdPair[];
}

export interface GetPlayFabIDsFromFacebookInstantGamesIdsRequest extends IPlayFabRequestCommon {
  /**
   * Array of unique Facebook Instant Games identifiers for which the title needs to get PlayFab identifiers. The array
   * cannot exceed 25 in length.
   */
  FacebookInstantGamesIds: string[];
}

export interface GetPlayFabIDsFromFacebookInstantGamesIdsResult extends IPlayFabResultCommon {
  /** Mapping of Facebook Instant Games identifiers to PlayFab identifiers. */
  Data?: FacebookInstantGamesPlayFabIdPair[];
}

export interface GetPlayFabIDsFromGameCenterIDsRequest extends IPlayFabRequestCommon {
  /**
   * Array of unique Game Center identifiers (the Player Identifier) for which the title needs to get PlayFab identifiers.
   * The array cannot exceed 25 in length.
   */
  GameCenterIDs: string[];
}

export interface GetPlayFabIDsFromGameCenterIDsResult extends IPlayFabResultCommon {
  /** Mapping of Game Center identifiers to PlayFab identifiers. */
  Data?: GameCenterPlayFabIdPair[];
}

export interface GetPlayFabIDsFromGenericIDsRequest extends IPlayFabRequestCommon {
  /**
   * Array of unique generic service identifiers for which the title needs to get PlayFab identifiers. Currently limited to a
   * maximum of 10 in a single request.
   */
  GenericIDs: GenericServiceId[];
}

export interface GetPlayFabIDsFromGenericIDsResult extends IPlayFabResultCommon {
  /** Mapping of generic service identifiers to PlayFab identifiers. */
  Data?: GenericPlayFabIdPair[];
}

export interface GetPlayFabIDsFromGoogleIDsRequest extends IPlayFabRequestCommon {
  /**
   * Array of unique Google identifiers (Google+ user IDs) for which the title needs to get PlayFab identifiers. The array
   * cannot exceed 25 in length.
   */
  GoogleIDs: string[];
}

export interface GetPlayFabIDsFromGoogleIDsResult extends IPlayFabResultCommon {
  /** Mapping of Google identifiers to PlayFab identifiers. */
  Data?: GooglePlayFabIdPair[];
}

export interface GetPlayFabIDsFromGooglePlayGamesPlayerIDsRequest extends IPlayFabRequestCommon {
  /**
   * Array of unique Google Play Games identifiers (Google+ user IDs) for which the title needs to get PlayFab identifiers.
   * The array cannot exceed 25 in length.
   */
  GooglePlayGamesPlayerIDs: string[];
}

export interface GetPlayFabIDsFromGooglePlayGamesPlayerIDsResult extends IPlayFabResultCommon {
  /** Mapping of Google Play Games identifiers to PlayFab identifiers. */
  Data?: GooglePlayGamesPlayFabIdPair[];
}

export interface GetPlayFabIDsFromKongregateIDsRequest extends IPlayFabRequestCommon {
  /**
   * Array of unique Kongregate identifiers (Kongregate&#39;s user_id) for which the title needs to get PlayFab identifiers. The
   * array cannot exceed 25 in length.
   */
  KongregateIDs: string[];
}

export interface GetPlayFabIDsFromKongregateIDsResult extends IPlayFabResultCommon {
  /** Mapping of Kongregate identifiers to PlayFab identifiers. */
  Data?: KongregatePlayFabIdPair[];
}

export interface GetPlayFabIDsFromNintendoServiceAccountIdsRequest extends IPlayFabRequestCommon {
  /**
   * Array of unique Nintendo Switch Account identifiers for which the title needs to get PlayFab identifiers. The array
   * cannot exceed 25 in length.
   */
  NintendoAccountIds: string[];
}

export interface GetPlayFabIDsFromNintendoServiceAccountIdsResult extends IPlayFabResultCommon {
  /** Mapping of Nintendo Switch Service Account identifiers to PlayFab identifiers. */
  Data?: NintendoServiceAccountPlayFabIdPair[];
}

export interface GetPlayFabIDsFromNintendoSwitchDeviceIdsRequest extends IPlayFabRequestCommon {
  /**
   * Array of unique Nintendo Switch Device identifiers for which the title needs to get PlayFab identifiers. The array
   * cannot exceed 25 in length.
   */
  NintendoSwitchDeviceIds: string[];
}

export interface GetPlayFabIDsFromNintendoSwitchDeviceIdsResult extends IPlayFabResultCommon {
  /** Mapping of Nintendo Switch Device identifiers to PlayFab identifiers. */
  Data?: NintendoSwitchPlayFabIdPair[];
}

export interface GetPlayFabIDsFromPSNAccountIDsRequest extends IPlayFabRequestCommon {
  /** Id of the PlayStation :tm: Network issuer environment. If null, defaults to production environment. */
  IssuerId?: number;
  /**
   * Array of unique PlayStation :tm: Network identifiers for which the title needs to get PlayFab identifiers. The array
   * cannot exceed 25 in length.
   */
  PSNAccountIDs: string[];
}

export interface GetPlayFabIDsFromPSNAccountIDsResult extends IPlayFabResultCommon {
  /** Mapping of PlayStation :tm: Network identifiers to PlayFab identifiers. */
  Data?: PSNAccountPlayFabIdPair[];
}

export interface GetPlayFabIDsFromPSNOnlineIDsRequest extends IPlayFabRequestCommon {
  /** Id of the PlayStation :tm: Network issuer environment. If null, defaults to production environment. */
  IssuerId?: number;
  /**
   * Array of unique PlayStation :tm: Network identifiers for which the title needs to get PlayFab identifiers. The array
   * cannot exceed 25 in length.
   */
  PSNOnlineIDs: string[];
}

export interface GetPlayFabIDsFromPSNOnlineIDsResult extends IPlayFabResultCommon {
  /** Mapping of PlayStation :tm: Network identifiers to PlayFab identifiers. */
  Data?: PSNOnlinePlayFabIdPair[];
}

export interface GetPlayFabIDsFromSteamIDsRequest extends IPlayFabRequestCommon {
  /**
   * Deprecated: Please use SteamStringIDs
   * @deprecated Please use SteamStringIDs instead.
   */
  SteamIDs?: number[];
  /**
   * Array of unique Steam identifiers (Steam profile IDs) for which the title needs to get PlayFab identifiers. The array
   * cannot exceed 25 in length.
   */
  SteamStringIDs?: string[];
}

export interface GetPlayFabIDsFromSteamIDsResult extends IPlayFabResultCommon {
  /** Mapping of Steam identifiers to PlayFab identifiers. */
  Data?: SteamPlayFabIdPair[];
}

export interface GetPlayFabIDsFromSteamNamesRequest extends IPlayFabRequestCommon {
  /**
   * Array of unique Steam identifiers for which the title needs to get PlayFab identifiers. The array cannot exceed 25 in
   * length.
   */
  SteamNames: string[];
}

export interface GetPlayFabIDsFromSteamNamesResult extends IPlayFabResultCommon {
  /** Mapping of Steam identifiers to PlayFab identifiers. */
  Data?: SteamNamePlayFabIdPair[];
}

export interface GetPlayFabIDsFromTwitchIDsRequest extends IPlayFabRequestCommon {
  /**
   * Array of unique Twitch identifiers (Twitch&#39;s _id) for which the title needs to get PlayFab identifiers. The array cannot
   * exceed 25 in length.
   */
  TwitchIds: string[];
}

export interface GetPlayFabIDsFromTwitchIDsResult extends IPlayFabResultCommon {
  /** Mapping of Twitch identifiers to PlayFab identifiers. */
  Data?: TwitchPlayFabIdPair[];
}

export interface GetPlayFabIDsFromXboxLiveIDsRequest extends IPlayFabRequestCommon {
  /** The ID of Xbox Live sandbox. */
  Sandbox?: string;
  /**
   * Array of unique Xbox Live account identifiers for which the title needs to get PlayFab identifiers. The array cannot
   * exceed 25 in length.
   */
  XboxLiveAccountIDs: string[];
}

export interface GetPlayFabIDsFromXboxLiveIDsResult extends IPlayFabResultCommon {
  /** Mapping of Xbox Live identifiers to PlayFab identifiers. */
  Data?: XboxLiveAccountPlayFabIdPair[];
}

export interface GetPublisherDataRequest extends IPlayFabRequestCommon {
  /** array of keys to get back data from the Publisher data blob, set by the admin tools */
  Keys: string[];
}

export interface GetPublisherDataResult extends IPlayFabResultCommon {
  /** a dictionary object of key / value pairs */
  Data?: Record<string, string | null>;
}

export interface GetPurchaseRequest extends IPlayFabRequestCommon {
  /** Purchase order identifier. */
  OrderId: string;
}

export interface GetPurchaseResult extends IPlayFabResultCommon {
  /**
   * Array of items purchased.
   * @deprecated Please use  instead.
   */
  Items?: ItemInstance[];
  /** Purchase order identifier. */
  OrderId?: string;
  /** Payment provider used for transaction (If not VC) */
  PaymentProvider?: string;
  /** Date and time of the purchase. */
  PurchaseDate: string;
  /** Provider transaction ID (If not VC) */
  TransactionId?: string;
  /** PlayFab transaction status */
  TransactionStatus?: string;
}

export interface GetSegmentResult {
  /** Identifier of the segments AB Test, if it is attached to one. */
  ABTestParent?: string;
  /** Unique identifier for this segment. */
  Id: string;
  /** Segment name. */
  Name?: string;
}

export interface GetSharedGroupDataRequest extends IPlayFabRequestCommon {
  /** If true, return the list of all members of the shared group. */
  GetMembers?: boolean;
  /**
   * Specific keys to retrieve from the shared group (if not specified, all keys will be returned, while an empty array
   * indicates that no keys should be returned).
   */
  Keys?: string[];
  /** Unique identifier for the shared group. */
  SharedGroupId: string;
}

export interface GetSharedGroupDataResult extends IPlayFabResultCommon {
  /** Data for the requested keys. */
  Data?: Record<string, SharedGroupDataRecord>;
  /** List of PlayFabId identifiers for the members of this group, if requested. */
  Members?: string[];
}

export interface GetStoreItemsRequest extends IPlayFabRequestCommon {
  /** Catalog version to store items from. Use default catalog version if null */
  CatalogVersion?: string;
  /** Unqiue identifier for the store which is being requested. */
  StoreId: string;
}

export interface GetStoreItemsResult extends IPlayFabResultCommon {
  /** The base catalog that this store is a part of. */
  CatalogVersion?: string;
  /** Additional data about the store. */
  MarketingData?: StoreMarketingModel;
  /** How the store was last updated (Admin or a third party). */
  Source?: SourceType;
  /** Array of items which can be purchased from this store. */
  Store?: StoreItem[];
  /** The ID of this store. */
  StoreId?: string;
}

export interface GetTimeRequest extends IPlayFabRequestCommon {
}

export interface GetTimeResult extends IPlayFabResultCommon {
  /** Current server time when the request was received, in UTC */
  Time: string;
}

export interface GetTitleDataRequest extends IPlayFabRequestCommon {
  /** Specific keys to search for in the title data (leave null to get all keys) */
  Keys?: string[];
  /**
   * Optional field that specifies the name of an override. This value is ignored when used by the game client; otherwise,
   * the overrides are applied automatically to the title data.
   */
  OverrideLabel?: string;
}

export interface GetTitleDataResult extends IPlayFabResultCommon {
  /** a dictionary object of key / value pairs */
  Data?: Record<string, string | null>;
}

export interface GetTitleNewsRequest extends IPlayFabRequestCommon {
  /** Limits the results to the last n entries. Defaults to 10 if not set. */
  Count?: number;
}

export interface GetTitleNewsResult extends IPlayFabResultCommon {
  /** Array of news items. */
  News?: TitleNewsItem[];
}

export interface GetTitlePublicKeyRequest extends IPlayFabRequestCommon {
  /**
   * Unique identifier for the title, found in the Settings &gt; Game Properties section of the PlayFab developer site when a
   * title has been selected.
   */
  TitleId: string;
  /** The shared secret key for this title */
  TitleSharedSecret: string;
}

export interface GetTitlePublicKeyResult extends IPlayFabResultCommon {
  /** Base64 encoded RSA CSP byte array blob containing the title&#39;s public RSA key */
  RSAPublicKey?: string;
}

export interface GetTradeStatusRequest extends IPlayFabRequestCommon {
  /** Player who opened trade. */
  OfferingPlayerId: string;
  /** Trade identifier as returned by OpenTradeOffer. */
  TradeId: string;
}

export interface GetTradeStatusResponse extends IPlayFabResultCommon {
  /** Information about the requested trade. */
  Trade?: TradeInfo;
}

/** @deprecated Do not use */
export interface GetUserCombinedInfoRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** User email address for the account to find (if no Username is specified). */
  Email?: string;
  /** If set to false, account info will not be returned. Defaults to true. */
  GetAccountInfo?: boolean;
  /**
   * If set to false, inventory will not be returned. Defaults to true. Inventory will never be returned for users other than
   * yourself.
   */
  GetInventory?: boolean;
  /** If set to false, read-only user data will not be returned. Defaults to true. */
  GetReadOnlyData?: boolean;
  /** If set to false, custom user data will not be returned. Defaults to true. */
  GetUserData?: boolean;
  /**
   * If set to false, virtual currency balances will not be returned. Defaults to true. Currency balances will never be
   * returned for users other than yourself.
   */
  GetVirtualCurrency?: boolean;
  /**
   * Unique PlayFab identifier of the user whose info is being requested. Optional, defaults to the authenticated user if no
   * other lookup identifier set.
   */
  PlayFabId?: string;
  /**
   * User read-only custom data keys to return. If set to null, all keys will be returned. For users other than yourself,
   * only public data will be returned.
   */
  ReadOnlyDataKeys?: string[];
  /** Title-specific username for the account to find (if no Email is set). */
  TitleDisplayName?: string;
  /**
   * User custom data keys to return. If set to null, all keys will be returned. For users other than yourself, only public
   * data will be returned.
   */
  UserDataKeys?: string[];
  /** PlayFab Username for the account to find (if no PlayFabId is specified). */
  Username?: string;
}

/** @deprecated Do not use */
export interface GetUserCombinedInfoResult extends IPlayFabResultCommon {
  /** Account information for the user. */
  AccountInfo?: UserAccountInfo;
  /** User specific custom data. */
  Data?: Record<string, UserDataRecord>;
  /** The version of the UserData that was returned. */
  DataVersion: number;
  /** Array of inventory items in the user&#39;s current inventory. */
  Inventory?: ItemInstance[];
  /** Unique PlayFab identifier of the owner of the combined info. */
  PlayFabId?: string;
  /** User specific read-only data. */
  ReadOnlyData?: Record<string, UserDataRecord>;
  /** The version of the Read-Only UserData that was returned. */
  ReadOnlyDataVersion: number;
  /** Array of virtual currency balance(s) belonging to the user. */
  VirtualCurrency?: Record<string, number>;
  /** Array of remaining times and timestamps for virtual currencies. */
  VirtualCurrencyRechargeTimes?: Record<string, VirtualCurrencyRechargeTime>;
}

export interface GetUserDataRequest extends IPlayFabRequestCommon {
  /**
   * The version that currently exists according to the caller. The call will return the data for all of the keys if the
   * version in the system is greater than this.
   */
  IfChangedFromDataVersion?: number;
  /** List of unique keys to load from. */
  Keys?: string[];
  /**
   * Unique PlayFab identifier of the user to load data for. Optional, defaults to yourself if not set. When specified to a
   * PlayFab id of another player, then this will only return public keys for that account.
   */
  PlayFabId?: string;
}

export interface GetUserDataResult extends IPlayFabResultCommon {
  /** User specific data for this title. */
  Data?: Record<string, UserDataRecord>;
  /**
   * Indicates the current version of the data that has been set. This is incremented with every set call for that type of
   * data (read-only, internal, etc). This version can be provided in Get calls to find updated data.
   */
  DataVersion: number;
}

export interface GetUserInventoryRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
}

export interface GetUserInventoryResult extends IPlayFabResultCommon {
  /** Array of inventory items belonging to the user. */
  Inventory?: ItemInstance[];
  /** Array of virtual currency balance(s) belonging to the user. */
  VirtualCurrency?: Record<string, number>;
  /** Array of remaining times and timestamps for virtual currencies. */
  VirtualCurrencyRechargeTimes?: Record<string, VirtualCurrencyRechargeTime>;
}

/** @deprecated Do not use */
export interface GetUserStatisticsRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
}

/** @deprecated Do not use */
export interface GetUserStatisticsResult extends IPlayFabResultCommon {
  /** User statistics for the active title. */
  UserStatistics?: Record<string, number>;
}

export interface GooglePlayFabIdPair {
  /** Unique Google identifier for a user. */
  GoogleId?: string;
  /** Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the Google identifier. */
  PlayFabId?: string;
}

export interface GooglePlayGamesPlayFabIdPair {
  /** Unique Google Play Games identifier for a user. */
  GooglePlayGamesPlayerId?: string;
  /** Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the Google Play Games identifier. */
  PlayFabId?: string;
}

export interface GrantCharacterToUserRequest extends IPlayFabRequestCommon {
  /** Catalog version from which items are to be granted. */
  CatalogVersion?: string;
  /** Non-unique display name of the character being granted (1-40 characters in length). */
  CharacterName: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /**
   * Catalog item identifier of the item in the user&#39;s inventory that corresponds to the character in the catalog to be
   * created.
   */
  ItemId: string;
}

export interface GrantCharacterToUserResult extends IPlayFabResultCommon {
  /** Unique identifier tagged to this character. */
  CharacterId?: string;
  /** Type of character that was created. */
  CharacterType?: string;
  /** Indicates whether this character was created successfully. */
  Result: boolean;
}

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

export interface ItemPurchaseRequest {
  /** Title-specific text concerning this purchase. */
  Annotation?: string;
  /** Unique ItemId of the item to purchase. */
  ItemId: string;
  /** How many of this item to purchase. Min 1, maximum 25. */
  Quantity: number;
  /** Items to be upgraded as a result of this purchase (upgraded items are hidden, as they are &quot;replaced&quot; by the new items). */
  UpgradeFromItems?: string[];
}

export interface KongregatePlayFabIdPair {
  /** Unique Kongregate identifier for a user. */
  KongregateId?: string;
  /** Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the Kongregate identifier. */
  PlayFabId?: string;
}

export interface LinkAndroidDeviceIDRequest extends IPlayFabRequestCommon {
  /** Specific model of the user&#39;s device. */
  AndroidDevice?: string;
  /** Android device identifier for the user&#39;s device. */
  AndroidDeviceId: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** If another user is already linked to the device, unlink the other user and re-link. */
  ForceLink?: boolean;
  /** Specific Operating System version for the user&#39;s device. */
  OS?: string;
}

export interface LinkAndroidDeviceIDResult extends IPlayFabResultCommon {
}

export interface LinkAppleRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** If another user is already linked to a specific Apple account, unlink the other user and re-link. */
  ForceLink?: boolean;
  /**
   * The JSON Web token (JWT) returned by Apple after login. Represented as the identityToken field in the authorization
   * credential payload. Used to validate the request and find the user ID (Apple subject) to link with.
   */
  IdentityToken: string;
}

export interface LinkBattleNetAccountRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** If another user is already linked to a specific Battle.net account, unlink the other user and re-link. */
  ForceLink?: boolean;
  /** The JSON Web Token (JWT) returned by Battle.net after login */
  IdentityToken: string;
}

export interface LinkCustomIDRequest extends IPlayFabRequestCommon {
  /** Custom unique identifier for the user, generated by the title. */
  CustomId: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** If another user is already linked to the custom ID, unlink the other user and re-link. */
  ForceLink?: boolean;
}

export interface LinkCustomIDResult extends IPlayFabResultCommon {
}

export interface LinkedPlatformAccountModel {
  /** Linked account email of the user on the platform, if available */
  Email?: string;
  /** Authentication platform */
  Platform?: LoginIdentityProvider;
  /** Unique account identifier of the user on the platform */
  PlatformUserId?: string;
  /** Linked account username of the user on the platform, if available */
  Username?: string;
}

export interface LinkFacebookAccountRequest extends IPlayFabRequestCommon {
  /** Unique identifier from Facebook for the user. */
  AccessToken?: string;
  /** Token used for limited login authentication. */
  AuthenticationToken?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** If another user is already linked to the account, unlink the other user and re-link. */
  ForceLink?: boolean;
}

export interface LinkFacebookAccountResult extends IPlayFabResultCommon {
}

export interface LinkFacebookInstantGamesIdRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Facebook Instant Games signature for the user. */
  FacebookInstantGamesSignature: string;
  /** If another user is already linked to the Facebook Instant Games ID, unlink the other user and re-link. */
  ForceLink?: boolean;
}

export interface LinkFacebookInstantGamesIdResult extends IPlayFabResultCommon {
}

export interface LinkGameCenterAccountRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /**
   * If another user is already linked to the account, unlink the other user and re-link. If the current user is already
   * linked, link both accounts
   */
  ForceLink?: boolean;
  /** Game Center identifier for the player account to be linked. */
  GameCenterId: string;
  /** The URL for the public encryption key that will be used to verify the signature. */
  PublicKeyUrl?: string;
  /** A random value used to compute the hash and keep it randomized. */
  Salt?: string;
  /** The verification signature of the authentication payload. */
  Signature?: string;
  /**
   * The integer representation of date and time that the signature was created on. PlayFab will reject authentication
   * signatures not within 10 minutes of the server&#39;s current time.
   */
  Timestamp?: string;
}

export interface LinkGameCenterAccountResult extends IPlayFabResultCommon {
}

export interface LinkGoogleAccountRequest extends IPlayFabRequestCommon {
  /**
   * OAuth 2.0 access token obtained on the client by calling the getAccessToken() Google client API.
   * @deprecated Please use ServerAuthCode instead.
   */
  AccessToken?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /**
   * If another user is already linked to the account, unlink the other user and re-link. If the current user is already
   * linked, link both accounts
   */
  ForceLink?: boolean;
  /**
   * Server authentication code obtained on the client by calling getServerAuthCode()
   * (https://developers.google.com/identity/sign-in/android/offline-access) from Google Play for the user.
   */
  ServerAuthCode?: string;
}

export interface LinkGoogleAccountResult extends IPlayFabResultCommon {
}

export interface LinkGooglePlayGamesServicesAccountRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /**
   * If another user is already linked to the account, unlink the other user and re-link. If the current user is already
   * linked, link both accounts
   */
  ForceLink?: boolean;
  /**
   * OAuth 2.0 server authentication code obtained on the client by calling the requestServerSideAccess()
   * (https://developers.google.com/games/services/android/signin) Google Play Games client API.
   */
  ServerAuthCode: string;
}

export interface LinkGooglePlayGamesServicesAccountResult extends IPlayFabResultCommon {
}

export interface LinkIOSDeviceIDRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Vendor-specific iOS identifier for the user&#39;s device. */
  DeviceId: string;
  /** Specific model of the user&#39;s device. */
  DeviceModel?: string;
  /** If another user is already linked to the device, unlink the other user and re-link. */
  ForceLink?: boolean;
  /** Specific Operating System version for the user&#39;s device. */
  OS?: string;
}

export interface LinkIOSDeviceIDResult extends IPlayFabResultCommon {
}

export interface LinkKongregateAccountRequest extends IPlayFabRequestCommon {
  /** Valid session auth ticket issued by Kongregate */
  AuthTicket: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** If another user is already linked to the account, unlink the other user and re-link. */
  ForceLink?: boolean;
  /** Numeric user ID assigned by Kongregate */
  KongregateId: string;
}

export interface LinkKongregateAccountResult extends IPlayFabResultCommon {
}

export interface LinkNintendoServiceAccountRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** If another user is already linked to a specific Nintendo Switch account, unlink the other user and re-link. */
  ForceLink?: boolean;
  /**
   * The JSON Web token (JWT) returned by Nintendo after login. Used to validate the request and find the user ID (Nintendo
   * Switch subject) to link with.
   */
  IdentityToken: string;
}

export interface LinkNintendoSwitchDeviceIdRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** If another user is already linked to the Nintendo Switch Device ID, unlink the other user and re-link. */
  ForceLink?: boolean;
  /** Nintendo Switch unique identifier for the user&#39;s device. */
  NintendoSwitchDeviceId: string;
}

export interface LinkNintendoSwitchDeviceIdResult extends IPlayFabResultCommon {
}

export interface LinkOpenIdConnectRequest extends IPlayFabRequestCommon {
  /** A name that identifies which configured OpenID Connect provider relationship to use. Maximum 100 characters. */
  ConnectionId: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** If another user is already linked to a specific OpenId Connect user, unlink the other user and re-link. */
  ForceLink?: boolean;
  /**
   * The JSON Web token (JWT) returned by the identity provider after login. Represented as the id_token field in the
   * identity provider&#39;s response. Used to validate the request and find the user ID (OpenID Connect subject) to link with.
   */
  IdToken: string;
}

export interface LinkPSNAccountRequest extends IPlayFabRequestCommon {
  /** Authentication code provided by the PlayStation :tm: Network. */
  AuthCode: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** If another user is already linked to the account, unlink the other user and re-link. */
  ForceLink?: boolean;
  /** Id of the PlayStation :tm: Network issuer environment. If null, defaults to production environment. */
  IssuerId?: number;
  /** Redirect URI supplied to PlayStation :tm: Network when requesting an auth code */
  RedirectUri: string;
}

export interface LinkPSNAccountResult extends IPlayFabResultCommon {
}

export interface LinkSteamAccountRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** If another user is already linked to the account, unlink the other user and re-link. */
  ForceLink?: boolean;
  /**
   * Authentication token for the user, returned as a byte array from Steam, and converted to a string (for example, the byte
   * 0x08 should become &quot;08&quot;).
   */
  SteamTicket: string;
  /**
   * True if ticket was generated using ISteamUser::GetAuthTicketForWebAPI() using &quot;AzurePlayFab&quot; as the identity string.
   * False if the ticket was generated with ISteamUser::GetAuthSessionTicket().
   */
  TicketIsServiceSpecific?: boolean;
}

export interface LinkSteamAccountResult extends IPlayFabResultCommon {
}

export interface LinkTwitchAccountRequest extends IPlayFabRequestCommon {
  /** Valid token issued by Twitch */
  AccessToken: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** If another user is already linked to the account, unlink the other user and re-link. */
  ForceLink?: boolean;
}

export interface LinkTwitchAccountResult extends IPlayFabResultCommon {
}

export interface LinkXboxAccountRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** If another user is already linked to the account, unlink the other user and re-link. */
  ForceLink?: boolean;
  /** Token provided by the Xbox Live SDK/XDK method GetTokenAndSignatureAsync(&quot;POST&quot;, &quot;https://playfabapi.com/&quot;, &quot;&quot;). */
  XboxToken: string;
}

export interface LinkXboxAccountResult extends IPlayFabResultCommon {
}

export interface ListPlayerCustomPropertiesRequest extends IPlayFabRequestCommon {
}

export interface ListPlayerCustomPropertiesResult extends IPlayFabResultCommon {
  /** Player specific properties and their corresponding values for this title. */
  Properties?: CustomPropertyDetails[];
  /**
   * Indicates the current version of a player&#39;s properties that have been set. This is incremented after updates and
   * deletes. This version can be provided in update and delete calls for concurrency control.
   */
  PropertiesVersion: number;
}

export interface ListUsersCharactersRequest extends IPlayFabRequestCommon {
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId?: string;
}

export interface ListUsersCharactersResult extends IPlayFabResultCommon {
  /** The requested list of characters. */
  Characters?: CharacterResult[];
}

export interface LocationModel {
  /** City name. */
  City?: string;
  /** The two-character continent code for this location */
  ContinentCode?: ContinentCode;
  /** The two-character ISO 3166-1 country code for the country associated with the location */
  CountryCode?: CountryCode;
  /** Latitude coordinate of the geographic location. */
  Latitude?: number;
  /** Longitude coordinate of the geographic location. */
  Longitude?: number;
}

/** @deprecated Do not use */
export interface LogEventRequest extends IPlayFabRequestCommon {
  /**
   * Contains all the data for this event. Event Values can be strings, booleans or numerics (float, double, integer, long)
   * and must be consistent on a per-event basis (if the Value for Key &#39;A&#39; in Event &#39;Foo&#39; is an integer the first time it is
   * sent, it must be an integer in all subsequent &#39;Foo&#39; events). As with event names, Keys must also not use reserved words
   * (see above). Finally, the size of the Body for an event must be less than 32KB (UTF-8 format).
   */
  Body?: Record<string, any>;
  /**
   * A unique event name which will be used as the table name in the Redshift database. The name will be made lower case, and
   * cannot not contain spaces. The use of underscores is recommended, for readability. Events also cannot match reserved
   * terms. The PlayFab reserved terms are &#39;log_in&#39; and &#39;purchase&#39;, &#39;create&#39; and &#39;request&#39;, while the Redshift reserved terms
   * can be found here: http://docs.aws.amazon.com/redshift/latest/dg/r_pg_keywords.html.
   */
  EventName?: string;
  /** Flag to set event Body as profile details in the Redshift database as well as a standard event. */
  ProfileSetEvent: boolean;
  /** Optional timestamp for this event. If null, the a timestamp is auto-assigned to the event on the server. */
  Timestamp?: string;
}

/** @deprecated Do not use */
export interface LogEventResult extends IPlayFabResultCommon {
}

type LoginIdentityProvider = "Unknown"
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

export interface LoginResult extends IPlayFabResultCommon {
  /**
   * If LoginTitlePlayerAccountEntity flag is set on the login request the title_player_account will also be logged in and
   * returned.
   */
  EntityToken?: EntityTokenResponse;
  /** Results for requested info. */
  InfoResultPayload?: GetPlayerCombinedInfoResultPayload;
  /** The time of this user&#39;s previous login. If there was no previous login, then it&#39;s DateTime.MinValue */
  LastLoginTime?: string;
  /** True if the master_player_account was newly created on this login. */
  NewlyCreated: boolean;
  /** Player&#39;s unique PlayFabId. */
  PlayFabId?: string;
  /** Unique token authorizing the user and game at the server level, for the current session. */
  SessionTicket?: string;
  /** Settings specific to this user. */
  SettingsForUser?: UserSettings;
  /** The experimentation treatments for this user at the time of login. */
  TreatmentAssignment?: TreatmentAssignment;
}

export interface LoginWithAndroidDeviceIDRequest extends IPlayFabRequestCommon {
  /** Specific model of the user&#39;s device. */
  AndroidDevice?: string;
  /** Android device identifier for the user&#39;s device. */
  AndroidDeviceId?: string;
  /** Automatically create a PlayFab account if one is not currently linked to this ID. */
  CreateAccount?: boolean;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Base64 encoded body that is encrypted with the Title&#39;s public RSA key (Enterprise Only). */
  EncryptedRequest?: string;
  /** Flags for which pieces of info to return for the user. */
  InfoRequestParameters?: GetPlayerCombinedInfoRequestParams;
  /**
   * Formerly triggered an Entity login with a normal client login. This is now automatic, and always-on.
   * @deprecated Do not use
   */
  LoginTitlePlayerAccountEntity?: boolean;
  /** Specific Operating System version for the user&#39;s device. */
  OS?: string;
  /** Player secret that is used to verify API request signatures (Enterprise Only). */
  PlayerSecret?: string;
  /**
   * Unique identifier for the title, found in the Settings &gt; Game Properties section of the PlayFab developer site when a
   * title has been selected.
   */
  TitleId?: string;
}

export interface LoginWithAppleRequest extends IPlayFabRequestCommon {
  /** Automatically create a PlayFab account if one is not currently linked to this ID. */
  CreateAccount?: boolean;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Base64 encoded body that is encrypted with the Title&#39;s public RSA key (Enterprise Only). */
  EncryptedRequest?: string;
  /**
   * The JSON Web token (JWT) returned by Apple after login. Represented as the identityToken field in the authorization
   * credential payload. If you choose to ignore the expiration date for identity tokens, you will receive an NotAuthorized
   * error if Apple rotates the signing key. In this case, users have to login to provide a fresh identity token.
   */
  IdentityToken: string;
  /** Flags for which pieces of info to return for the user. */
  InfoRequestParameters?: GetPlayerCombinedInfoRequestParams;
  /**
   * Formerly triggered an Entity login with a normal client login. This is now automatic, and always-on.
   * @deprecated Do not use
   */
  LoginTitlePlayerAccountEntity?: boolean;
  /** Player secret that is used to verify API request signatures (Enterprise Only). */
  PlayerSecret?: string;
  /**
   * Unique identifier for the title, found in the Settings &gt; Game Properties section of the PlayFab developer site when a
   * title has been selected.
   */
  TitleId?: string;
}

export interface LoginWithBattleNetRequest extends IPlayFabRequestCommon {
  /** Automatically create a PlayFab account if one is not currently linked to this ID. */
  CreateAccount?: boolean;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Base64 encoded body that is encrypted with the Title&#39;s public RSA key (Enterprise Only). */
  EncryptedRequest?: string;
  /** The JSON Web Token (JWT) returned by Battle.net after login */
  IdentityToken: string;
  /** Flags for which pieces of info to return for the user. */
  InfoRequestParameters?: GetPlayerCombinedInfoRequestParams;
  /**
   * Formerly triggered an Entity login with a normal client login. This is now automatic, and always-on.
   * @deprecated Do not use
   */
  LoginTitlePlayerAccountEntity?: boolean;
  /** Player secret that is used to verify API request signatures (Enterprise Only). */
  PlayerSecret?: string;
  /**
   * Unique identifier for the title, found in the Settings &gt; Game Properties section of the PlayFab developer site when a
   * title has been selected.
   */
  TitleId?: string;
}

export interface LoginWithCustomIDRequest extends IPlayFabRequestCommon {
  /** Automatically create a PlayFab account if one is not currently linked to this ID. */
  CreateAccount?: boolean;
  /** Custom unique identifier for the user, generated by the title. */
  CustomId?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Base64 encoded body that is encrypted with the Title&#39;s public RSA key (Enterprise Only). */
  EncryptedRequest?: string;
  /** Flags for which pieces of info to return for the user. */
  InfoRequestParameters?: GetPlayerCombinedInfoRequestParams;
  /**
   * Formerly triggered an Entity login with a normal client login. This is now automatic, and always-on.
   * @deprecated Do not use
   */
  LoginTitlePlayerAccountEntity?: boolean;
  /** Player secret that is used to verify API request signatures (Enterprise Only). */
  PlayerSecret?: string;
  /**
   * Unique identifier for the title, found in the Settings &gt; Game Properties section of the PlayFab developer site when a
   * title has been selected.
   */
  TitleId?: string;
}

export interface LoginWithEmailAddressRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Email address for the account. */
  Email: string;
  /** Flags for which pieces of info to return for the user. */
  InfoRequestParameters?: GetPlayerCombinedInfoRequestParams;
  /**
   * Formerly triggered an Entity login with a normal client login. This is now automatic, and always-on.
   * @deprecated Do not use
   */
  LoginTitlePlayerAccountEntity?: boolean;
  /** Password for the PlayFab account (6-100 characters) */
  Password: string;
  /**
   * Unique identifier for the title, found in the Settings &gt; Game Properties section of the PlayFab developer site when a
   * title has been selected.
   */
  TitleId?: string;
}

export interface LoginWithFacebookInstantGamesIdRequest extends IPlayFabRequestCommon {
  /** Automatically create a PlayFab account if one is not currently linked to this ID. */
  CreateAccount?: boolean;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Base64 encoded body that is encrypted with the Title&#39;s public RSA key (Enterprise Only). */
  EncryptedRequest?: string;
  /** Facebook Instant Games signature for the user. */
  FacebookInstantGamesSignature: string;
  /** Flags for which pieces of info to return for the user. */
  InfoRequestParameters?: GetPlayerCombinedInfoRequestParams;
  /**
   * Formerly triggered an Entity login with a normal client login. This is now automatic, and always-on.
   * @deprecated Do not use
   */
  LoginTitlePlayerAccountEntity?: boolean;
  /** Player secret that is used to verify API request signatures (Enterprise Only). */
  PlayerSecret?: string;
  /**
   * Unique identifier for the title, found in the Settings &gt; Game Properties section of the PlayFab developer site when a
   * title has been selected.
   */
  TitleId?: string;
}

export interface LoginWithFacebookRequest extends IPlayFabRequestCommon {
  /** Unique identifier from Facebook for the user. */
  AccessToken?: string;
  /** Token used for limited login authentication. */
  AuthenticationToken?: string;
  /** Automatically create a PlayFab account if one is not currently linked to this ID. */
  CreateAccount?: boolean;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Base64 encoded body that is encrypted with the Title&#39;s public RSA key (Enterprise Only). */
  EncryptedRequest?: string;
  /** Flags for which pieces of info to return for the user. */
  InfoRequestParameters?: GetPlayerCombinedInfoRequestParams;
  /**
   * Formerly triggered an Entity login with a normal client login. This is now automatic, and always-on.
   * @deprecated Do not use
   */
  LoginTitlePlayerAccountEntity?: boolean;
  /** Player secret that is used to verify API request signatures (Enterprise Only). */
  PlayerSecret?: string;
  /**
   * Unique identifier for the title, found in the Settings &gt; Game Properties section of the PlayFab developer site when a
   * title has been selected.
   */
  TitleId?: string;
}

export interface LoginWithGameCenterRequest extends IPlayFabRequestCommon {
  /** Automatically create a PlayFab account if one is not currently linked to this ID. */
  CreateAccount?: boolean;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Base64 encoded body that is encrypted with the Title&#39;s public RSA key (Enterprise Only). */
  EncryptedRequest?: string;
  /** Flags for which pieces of info to return for the user. */
  InfoRequestParameters?: GetPlayerCombinedInfoRequestParams;
  /**
   * Formerly triggered an Entity login with a normal client login. This is now automatic, and always-on.
   * @deprecated Do not use
   */
  LoginTitlePlayerAccountEntity?: boolean;
  /** Unique Game Center player id. */
  PlayerId?: string;
  /** Player secret that is used to verify API request signatures (Enterprise Only). */
  PlayerSecret?: string;
  /** The URL for the public encryption key that will be used to verify the signature. */
  PublicKeyUrl?: string;
  /** A random value used to compute the hash and keep it randomized. */
  Salt?: string;
  /** The verification signature of the authentication payload. */
  Signature?: string;
  /**
   * The integer representation of date and time that the signature was created on. PlayFab will reject authentication
   * signatures not within 10 minutes of the server&#39;s current time.
   */
  Timestamp?: string;
  /**
   * Unique identifier for the title, found in the Settings &gt; Game Properties section of the PlayFab developer site when a
   * title has been selected.
   */
  TitleId?: string;
}

export interface LoginWithGoogleAccountRequest extends IPlayFabRequestCommon {
  /**
   * OAuth 2.0 access token obtained on the client by calling the getAccessToken() Google client API.
   * @deprecated Please use ServerAuthCode instead.
   */
  AccessToken?: string;
  /** Automatically create a PlayFab account if one is not currently linked to this ID. */
  CreateAccount?: boolean;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Base64 encoded body that is encrypted with the Title&#39;s public RSA key (Enterprise Only). */
  EncryptedRequest?: string;
  /** Flags for which pieces of info to return for the user. */
  InfoRequestParameters?: GetPlayerCombinedInfoRequestParams;
  /**
   * Formerly triggered an Entity login with a normal client login. This is now automatic, and always-on.
   * @deprecated Do not use
   */
  LoginTitlePlayerAccountEntity?: boolean;
  /** Player secret that is used to verify API request signatures (Enterprise Only). */
  PlayerSecret?: string;
  /**
   * Deprecated - Do not use
   * @deprecated Do not use
   */
  PublisherId?: string;
  /**
   * OAuth 2.0 server authentication code obtained on the client by calling the getServerAuthCode()
   * (https://developers.google.com/identity/sign-in/android/offline-access) Google client API.
   */
  ServerAuthCode?: string;
  /** Optional boolean to opt out of setting the MPA email when creating a Google account, defaults to true. */
  SetEmail?: boolean;
  /**
   * Unique identifier for the title, found in the Settings &gt; Game Properties section of the PlayFab developer site when a
   * title has been selected.
   */
  TitleId?: string;
}

export interface LoginWithGooglePlayGamesServicesRequest extends IPlayFabRequestCommon {
  /** Automatically create a PlayFab account if one is not currently linked to this ID. */
  CreateAccount?: boolean;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Base64 encoded body that is encrypted with the Title&#39;s public RSA key (Enterprise Only). */
  EncryptedRequest?: string;
  /** Flags for which pieces of info to return for the user. */
  InfoRequestParameters?: GetPlayerCombinedInfoRequestParams;
  /**
   * Formerly triggered an Entity login with a normal client login. This is now automatic, and always-on.
   * @deprecated Do not use
   */
  LoginTitlePlayerAccountEntity?: boolean;
  /** Player secret that is used to verify API request signatures (Enterprise Only). */
  PlayerSecret?: string;
  /**
   * OAuth 2.0 server authentication code obtained on the client by calling the requestServerSideAccess()
   * (https://developers.google.com/games/services/android/signin) Google Play Games client API.
   */
  ServerAuthCode?: string;
  /**
   * Unique identifier for the title, found in the Settings &gt; Game Properties section of the PlayFab developer site when a
   * title has been selected.
   */
  TitleId?: string;
}

export interface LoginWithIOSDeviceIDRequest extends IPlayFabRequestCommon {
  /** Automatically create a PlayFab account if one is not currently linked to this ID. */
  CreateAccount?: boolean;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Vendor-specific iOS identifier for the user&#39;s device. */
  DeviceId?: string;
  /** Specific model of the user&#39;s device. */
  DeviceModel?: string;
  /** Base64 encoded body that is encrypted with the Title&#39;s public RSA key (Enterprise Only). */
  EncryptedRequest?: string;
  /** Flags for which pieces of info to return for the user. */
  InfoRequestParameters?: GetPlayerCombinedInfoRequestParams;
  /**
   * Formerly triggered an Entity login with a normal client login. This is now automatic, and always-on.
   * @deprecated Do not use
   */
  LoginTitlePlayerAccountEntity?: boolean;
  /** Specific Operating System version for the user&#39;s device. */
  OS?: string;
  /** Player secret that is used to verify API request signatures (Enterprise Only). */
  PlayerSecret?: string;
  /**
   * Unique identifier for the title, found in the Settings &gt; Game Properties section of the PlayFab developer site when a
   * title has been selected.
   */
  TitleId?: string;
}

export interface LoginWithKongregateRequest extends IPlayFabRequestCommon {
  /** Token issued by Kongregate&#39;s client API for the user. */
  AuthTicket?: string;
  /** Automatically create a PlayFab account if one is not currently linked to this ID. */
  CreateAccount?: boolean;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Base64 encoded body that is encrypted with the Title&#39;s public RSA key (Enterprise Only). */
  EncryptedRequest?: string;
  /** Flags for which pieces of info to return for the user. */
  InfoRequestParameters?: GetPlayerCombinedInfoRequestParams;
  /** Numeric user ID assigned by Kongregate */
  KongregateId?: string;
  /**
   * Formerly triggered an Entity login with a normal client login. This is now automatic, and always-on.
   * @deprecated Do not use
   */
  LoginTitlePlayerAccountEntity?: boolean;
  /** Player secret that is used to verify API request signatures (Enterprise Only). */
  PlayerSecret?: string;
  /**
   * Unique identifier for the title, found in the Settings &gt; Game Properties section of the PlayFab developer site when a
   * title has been selected.
   */
  TitleId?: string;
}

export interface LoginWithNintendoServiceAccountRequest extends IPlayFabRequestCommon {
  /** Automatically create a PlayFab account if one is not currently linked to this ID. */
  CreateAccount?: boolean;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Base64 encoded body that is encrypted with the Title&#39;s public RSA key (Enterprise Only). */
  EncryptedRequest?: string;
  /** The JSON Web token (JWT) returned by Nintendo after login. */
  IdentityToken: string;
  /** Flags for which pieces of info to return for the user. */
  InfoRequestParameters?: GetPlayerCombinedInfoRequestParams;
  /**
   * Formerly triggered an Entity login with a normal client login. This is now automatic, and always-on.
   * @deprecated Do not use
   */
  LoginTitlePlayerAccountEntity?: boolean;
  /** Player secret that is used to verify API request signatures (Enterprise Only). */
  PlayerSecret?: string;
  /**
   * Unique identifier for the title, found in the Settings &gt; Game Properties section of the PlayFab developer site when a
   * title has been selected.
   */
  TitleId?: string;
}

export interface LoginWithNintendoSwitchDeviceIdRequest extends IPlayFabRequestCommon {
  /** Automatically create a PlayFab account if one is not currently linked to this ID. */
  CreateAccount?: boolean;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Base64 encoded body that is encrypted with the Title&#39;s public RSA key (Enterprise Only). */
  EncryptedRequest?: string;
  /** Flags for which pieces of info to return for the user. */
  InfoRequestParameters?: GetPlayerCombinedInfoRequestParams;
  /**
   * Formerly triggered an Entity login with a normal client login. This is now automatic, and always-on.
   * @deprecated Do not use
   */
  LoginTitlePlayerAccountEntity?: boolean;
  /** Nintendo Switch unique identifier for the user&#39;s device. */
  NintendoSwitchDeviceId?: string;
  /** Player secret that is used to verify API request signatures (Enterprise Only). */
  PlayerSecret?: string;
  /**
   * Unique identifier for the title, found in the Settings &gt; Game Properties section of the PlayFab developer site when a
   * title has been selected.
   */
  TitleId?: string;
}

export interface LoginWithOpenIdConnectRequest extends IPlayFabRequestCommon {
  /** A name that identifies which configured OpenID Connect provider relationship to use. Maximum 100 characters. */
  ConnectionId: string;
  /** Automatically create a PlayFab account if one is not currently linked to this ID. */
  CreateAccount?: boolean;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Base64 encoded body that is encrypted with the Title&#39;s public RSA key (Enterprise Only). */
  EncryptedRequest?: string;
  /**
   * The JSON Web token (JWT) returned by the identity provider after login. Represented as the id_token field in the
   * identity provider&#39;s response.
   */
  IdToken: string;
  /** Flags for which pieces of info to return for the user. */
  InfoRequestParameters?: GetPlayerCombinedInfoRequestParams;
  /**
   * Formerly triggered an Entity login with a normal client login. This is now automatic, and always-on.
   * @deprecated Do not use
   */
  LoginTitlePlayerAccountEntity?: boolean;
  /** Player secret that is used to verify API request signatures (Enterprise Only). */
  PlayerSecret?: string;
  /**
   * Unique identifier for the title, found in the Settings &gt; Game Properties section of the PlayFab developer site when a
   * title has been selected.
   */
  TitleId?: string;
}

export interface LoginWithPlayFabRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Flags for which pieces of info to return for the user. */
  InfoRequestParameters?: GetPlayerCombinedInfoRequestParams;
  /**
   * Formerly triggered an Entity login with a normal client login. This is now automatic, and always-on.
   * @deprecated Do not use
   */
  LoginTitlePlayerAccountEntity?: boolean;
  /** Password for the PlayFab account (6-100 characters) */
  Password: string;
  /**
   * Unique identifier for the title, found in the Settings &gt; Game Properties section of the PlayFab developer site when a
   * title has been selected.
   */
  TitleId?: string;
  /** PlayFab username for the account. */
  Username: string;
}

export interface LoginWithPSNRequest extends IPlayFabRequestCommon {
  /** Auth code provided by the PlayStation :tm: Network OAuth provider. */
  AuthCode?: string;
  /** Automatically create a PlayFab account if one is not currently linked to this ID. */
  CreateAccount?: boolean;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Base64 encoded body that is encrypted with the Title&#39;s public RSA key (Enterprise Only). */
  EncryptedRequest?: string;
  /** Flags for which pieces of info to return for the user. */
  InfoRequestParameters?: GetPlayerCombinedInfoRequestParams;
  /** Id of the PlayStation :tm: Network issuer environment. If null, defaults to production environment. */
  IssuerId?: number;
  /**
   * Formerly triggered an Entity login with a normal client login. This is now automatic, and always-on.
   * @deprecated Do not use
   */
  LoginTitlePlayerAccountEntity?: boolean;
  /** Player secret that is used to verify API request signatures (Enterprise Only). */
  PlayerSecret?: string;
  /** Redirect URI supplied to PlayStation :tm: Network when requesting an auth code */
  RedirectUri?: string;
  /**
   * Unique identifier for the title, found in the Settings &gt; Game Properties section of the PlayFab developer site when a
   * title has been selected.
   */
  TitleId?: string;
}

export interface LoginWithSteamRequest extends IPlayFabRequestCommon {
  /** Automatically create a PlayFab account if one is not currently linked to this ID. */
  CreateAccount?: boolean;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Base64 encoded body that is encrypted with the Title&#39;s public RSA key (Enterprise Only). */
  EncryptedRequest?: string;
  /** Flags for which pieces of info to return for the user. */
  InfoRequestParameters?: GetPlayerCombinedInfoRequestParams;
  /**
   * Formerly triggered an Entity login with a normal client login. This is now automatic, and always-on.
   * @deprecated Do not use
   */
  LoginTitlePlayerAccountEntity?: boolean;
  /** Player secret that is used to verify API request signatures (Enterprise Only). */
  PlayerSecret?: string;
  /**
   * Authentication token for the user, returned as a byte array from Steam, and converted to a string (for example, the byte
   * 0x08 should become &quot;08&quot;).
   */
  SteamTicket?: string;
  /**
   * True if ticket was generated using ISteamUser::GetAuthTicketForWebAPI() using &quot;AzurePlayFab&quot; as the identity string.
   * False if the ticket was generated with ISteamUser::GetAuthSessionTicket().
   */
  TicketIsServiceSpecific?: boolean;
  /**
   * Unique identifier for the title, found in the Settings &gt; Game Properties section of the PlayFab developer site when a
   * title has been selected.
   */
  TitleId?: string;
}

export interface LoginWithTwitchRequest extends IPlayFabRequestCommon {
  /** Token issued by Twitch&#39;s API for the user. */
  AccessToken?: string;
  /** Automatically create a PlayFab account if one is not currently linked to this ID. */
  CreateAccount?: boolean;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Base64 encoded body that is encrypted with the Title&#39;s public RSA key (Enterprise Only). */
  EncryptedRequest?: string;
  /** Flags for which pieces of info to return for the user. */
  InfoRequestParameters?: GetPlayerCombinedInfoRequestParams;
  /**
   * Formerly triggered an Entity login with a normal client login. This is now automatic, and always-on.
   * @deprecated Do not use
   */
  LoginTitlePlayerAccountEntity?: boolean;
  /** Player secret that is used to verify API request signatures (Enterprise Only). */
  PlayerSecret?: string;
  /**
   * Unique identifier for the title, found in the Settings &gt; Game Properties section of the PlayFab developer site when a
   * title has been selected.
   */
  TitleId?: string;
}

export interface LoginWithXboxRequest extends IPlayFabRequestCommon {
  /** Automatically create a PlayFab account if one is not currently linked to this ID. */
  CreateAccount?: boolean;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Base64 encoded body that is encrypted with the Title&#39;s public RSA key (Enterprise Only). */
  EncryptedRequest?: string;
  /** Flags for which pieces of info to return for the user. */
  InfoRequestParameters?: GetPlayerCombinedInfoRequestParams;
  /**
   * Formerly triggered an Entity login with a normal client login. This is now automatic, and always-on.
   * @deprecated Do not use
   */
  LoginTitlePlayerAccountEntity?: boolean;
  /** Player secret that is used to verify API request signatures (Enterprise Only). */
  PlayerSecret?: string;
  /**
   * Unique identifier for the title, found in the Settings &gt; Game Properties section of the PlayFab developer site when a
   * title has been selected.
   */
  TitleId?: string;
  /** Token provided by the Xbox Live SDK/XDK method GetTokenAndSignatureAsync(&quot;POST&quot;, &quot;https://playfabapi.com/&quot;, &quot;&quot;). */
  XboxToken?: string;
}

export interface LogStatement {
  /** Optional object accompanying the message as contextual information */
  Data?: any;
  /** &#39;Debug&#39;, &#39;Info&#39;, or &#39;Error&#39; */
  Level?: string;
  Message?: string;
}

/** @deprecated Do not use */
export interface MatchmakeRequest extends IPlayFabRequestCommon {
  /** Build version to match against. [Note: Required if LobbyId is not specified] */
  BuildVersion?: string;
  /** Character to use for stats based matching. Leave null to use account stats. */
  CharacterId?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /**
   * Deprecated - Do not use
   * @deprecated Do not use
   */
  EnableQueue?: boolean;
  /** Game mode to match make against. [Note: Required if LobbyId is not specified] */
  GameMode?: string;
  /** Lobby identifier to match make against. This is used to select a specific Game Server Instance. */
  LobbyId?: string;
  /** Region to match make against. [Note: Required if LobbyId is not specified] */
  Region?: Region;
  /** Start a game session if one with an open slot is not found. Defaults to true. */
  StartNewIfNoneFound?: boolean;
  /** Player statistic to use in finding a match. May be null for no stat-based matching. */
  StatisticName?: string;
  /** Filter to include and/or exclude Game Server Instances associated with certain Tags */
  TagFilter?: CollectionFilter;
}

/** @deprecated Do not use */
export interface MatchmakeResult extends IPlayFabResultCommon {
  /** timestamp for when the server will expire, if applicable */
  Expires?: string;
  /** unique lobby identifier of the server matched */
  LobbyID?: string;
  /** time in milliseconds the application is configured to wait on matchmaking results */
  PollWaitTimeMS?: number;
  /**
   * IPV4 address of the server
   * @deprecated Please use ServerIPV4Address instead.
   */
  ServerHostname?: string;
  /** IPV4 address of the server */
  ServerIPV4Address?: string;
  /** IPV6 address of the server */
  ServerIPV6Address?: string;
  /** port number to use for non-http communications with the server */
  ServerPort?: number;
  /** Public DNS name (if any) of the server */
  ServerPublicDNSName?: string;
  /** result of match making process */
  Status?: MatchmakeStatus;
  /** server authorization ticket (used by RedeemMatchmakerTicket to validate user insertion into the game) */
  Ticket?: string;
}

type MatchmakeStatus = "Complete"
  | "Waiting"
  | "GameNotFound"
  | "NoAvailableSlots"
  | "SessionClosed";

export interface MembershipModel {
  /** Whether this membership is active. That is, whether the MembershipExpiration time has been reached. */
  IsActive: boolean;
  /** The time this membership expires */
  MembershipExpiration: string;
  /** The id of the membership */
  MembershipId?: string;
  /**
   * Membership expirations can be explicitly overridden (via game manager or the admin api). If this membership has been
   * overridden, this will be the new expiration time.
   */
  OverrideExpiration?: string;
  /** Whether the override expiration is set. */
  OverrideIsSet?: boolean;
  /** The list of subscriptions that this player has for this membership */
  Subscriptions?: SubscriptionModel[];
}

export interface MicrosoftStorePayload {
  /** Microsoft store ID key. This is optional. Alternatively you can use XboxToken */
  CollectionsMsIdKey?: string;
  /** If collectionsMsIdKey is provided, this will verify the user id in the collectionsMsIdKey is the same. */
  UserId?: string;
  /**
   * Token provided by the Xbox Live SDK/XDK method GetTokenAndSignatureAsync(&quot;POST&quot;, &quot;https://playfabapi.com/&quot;, &quot;&quot;). This is
   * optional. Alternatively can use CollectionsMsIdKey
   */
  XboxToken?: string;
}

export interface ModifyUserVirtualCurrencyResult extends IPlayFabResultCommon {
  /** Balance of the virtual currency after modification. */
  Balance: number;
  /**
   * Amount added or subtracted from the user&#39;s virtual currency. Maximum VC balance is Int32 (2,147,483,647). Any increase
   * over this value will be discarded.
   */
  BalanceChange: number;
  /** User currency was subtracted from. */
  PlayFabId?: string;
  /** Name of the virtual currency which was modified. */
  VirtualCurrency?: string;
}

export interface NameIdentifier {
  /** Id Identifier, if present */
  Id?: string;
  /** Name Identifier, if present */
  Name?: string;
}

export interface NintendoServiceAccountPlayFabIdPair {
  /** Unique Nintendo Switch Service Account identifier for a user. */
  NintendoServiceAccountId?: string;
  /**
   * Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the Nintendo Switch Service Account
   * identifier.
   */
  PlayFabId?: string;
}

export interface NintendoSwitchPlayFabIdPair {
  /** Unique Nintendo Switch Device identifier for a user. */
  NintendoSwitchDeviceId?: string;
  /** Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the Nintendo Switch Device identifier. */
  PlayFabId?: string;
}

export interface OpenTradeRequest extends IPlayFabRequestCommon {
  /**
   * Players who are allowed to accept the trade. If null, the trade may be accepted by any player. If empty, the trade may
   * not be accepted by any player.
   */
  AllowedPlayerIds?: string[];
  /** Player inventory items offered for trade. If not set, the trade is effectively a gift request */
  OfferedInventoryInstanceIds?: string[];
  /** Catalog items accepted for the trade. If not set, the trade is effectively a gift. */
  RequestedCatalogItemIds?: string[];
}

export interface OpenTradeResponse extends IPlayFabResultCommon {
  /** The information about the trade that was just opened. */
  Trade?: TradeInfo;
}

export interface PayForPurchaseRequest extends IPlayFabRequestCommon {
  /** Currency to use to fund the purchase. */
  Currency: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Purchase order identifier returned from StartPurchase. */
  OrderId: string;
  /** Payment provider to use to fund the purchase. */
  ProviderName: string;
  /** Payment provider transaction identifier. Required for Facebook Payments. */
  ProviderTransactionId?: string;
}

export interface PayForPurchaseResult extends IPlayFabResultCommon {
  /** Local credit applied to the transaction (provider specific). */
  CreditApplied: number;
  /** Purchase order identifier. */
  OrderId?: string;
  /** Provider used for the transaction. */
  ProviderData?: string;
  /** A token generated by the provider to authenticate the request (provider-specific). */
  ProviderToken?: string;
  /** URL to the purchase provider page that details the purchase. */
  PurchaseConfirmationPageURL?: string;
  /** Currency for the transaction, may be a virtual currency or real money. */
  PurchaseCurrency?: string;
  /** Cost of the transaction. */
  PurchasePrice: number;
  /** Status of the transaction. */
  Status?: TransactionStatus;
  /** Virtual currencies granted by the transaction, if any. */
  VCAmount?: Record<string, number>;
  /** Current virtual currency balances for the user. */
  VirtualCurrency?: Record<string, number>;
}

export interface PaymentOption {
  /** Specific currency to use to fund the purchase. */
  Currency?: string;
  /** Amount of the specified currency needed for the purchase. */
  Price: number;
  /** Name of the purchase provider for this option. */
  ProviderName?: string;
  /** Amount of existing credit the user has with the provider. */
  StoreCredit: number;
}

export interface PlayerLeaderboardEntry {
  /** Title-specific display name of the user for this leaderboard entry. */
  DisplayName?: string;
  /** PlayFab unique identifier of the user for this leaderboard entry. */
  PlayFabId?: string;
  /** User&#39;s overall position in the leaderboard. */
  Position: number;
  /** The profile of the user, if requested. */
  Profile?: PlayerProfileModel;
  /** Specific value of the user&#39;s statistic. */
  StatValue: number;
}

export interface PlayerProfileModel {
  /** List of advertising campaigns the player has been attributed to */
  AdCampaignAttributions?: AdCampaignAttributionModel[];
  /** URL of the player&#39;s avatar image */
  AvatarUrl?: string;
  /** If the player is currently banned, the UTC Date when the ban expires */
  BannedUntil?: string;
  /** List of all contact email info associated with the player account */
  ContactEmailAddresses?: ContactEmailInfoModel[];
  /** Player record created */
  Created?: string;
  /** Player display name */
  DisplayName?: string;
  /**
   * List of experiment variants for the player. Note that these variants are not guaranteed to be up-to-date when returned
   * during login because the player profile is updated only after login. Instead, use the LoginResult.TreatmentAssignment
   * property during login to get the correct variants and variables.
   */
  ExperimentVariants?: string[];
  /** UTC time when the player most recently logged in to the title */
  LastLogin?: string;
  /** List of all authentication systems linked to this player account */
  LinkedAccounts?: LinkedPlatformAccountModel[];
  /** List of geographic locations from which the player has logged in to the title */
  Locations?: LocationModel[];
  /** List of memberships for the player, along with whether are expired. */
  Memberships?: MembershipModel[];
  /** Player account origination */
  Origination?: LoginIdentityProvider;
  /** PlayFab player account unique identifier */
  PlayerId?: string;
  /** Publisher this player belongs to */
  PublisherId?: string;
  /** List of configured end points registered for sending the player push notifications */
  PushNotificationRegistrations?: PushNotificationRegistrationModel[];
  /** List of leaderboard statistic values for the player */
  Statistics?: StatisticModel[];
  /** List of player&#39;s tags for segmentation */
  Tags?: TagModel[];
  /** Title ID this player profile applies to */
  TitleId?: string;
  /**
   * Sum of the player&#39;s purchases made with real-money currencies, converted to US dollars equivalent and represented as a
   * whole number of cents (1/100 USD). For example, 999 indicates nine dollars and ninety-nine cents.
   */
  TotalValueToDateInUSD?: number;
  /** List of the player&#39;s lifetime purchase totals, summed by real-money currency */
  ValuesToDate?: ValueToDateModel[];
}

export interface PlayerProfileViewConstraints {
  /** Whether to show player&#39;s avatar URL. Defaults to false */
  ShowAvatarUrl: boolean;
  /** Whether to show the banned until time. Defaults to false */
  ShowBannedUntil: boolean;
  /** Whether to show campaign attributions. Defaults to false */
  ShowCampaignAttributions: boolean;
  /** Whether to show contact email addresses. Defaults to false */
  ShowContactEmailAddresses: boolean;
  /** Whether to show the created date. Defaults to false */
  ShowCreated: boolean;
  /** Whether to show the display name. Defaults to false */
  ShowDisplayName: boolean;
  /** Whether to show player&#39;s experiment variants. Defaults to false */
  ShowExperimentVariants: boolean;
  /** Whether to show the last login time. Defaults to false */
  ShowLastLogin: boolean;
  /** Whether to show the linked accounts. Defaults to false */
  ShowLinkedAccounts: boolean;
  /** Whether to show player&#39;s locations. Defaults to false */
  ShowLocations: boolean;
  /** Whether to show player&#39;s membership information. Defaults to false */
  ShowMemberships: boolean;
  /** Whether to show origination. Defaults to false */
  ShowOrigination: boolean;
  /** Whether to show push notification registrations. Defaults to false */
  ShowPushNotificationRegistrations: boolean;
  /** Reserved for future development */
  ShowStatistics: boolean;
  /** Whether to show tags. Defaults to false */
  ShowTags: boolean;
  /** Whether to show the total value to date in usd. Defaults to false */
  ShowTotalValueToDateInUsd: boolean;
  /** Whether to show the values to date. Defaults to false */
  ShowValuesToDate: boolean;
}

export interface PlayerStatisticVersion {
  /** time when the statistic version became active */
  ActivationTime: string;
  /** time when the statistic version became inactive due to statistic version incrementing */
  DeactivationTime?: string;
  /** time at which the statistic version was scheduled to become active, based on the configured ResetInterval */
  ScheduledActivationTime?: string;
  /** time at which the statistic version was scheduled to become inactive, based on the configured ResetInterval */
  ScheduledDeactivationTime?: string;
  /** name of the statistic when the version became active */
  StatisticName?: string;
  /** version of the statistic */
  Version: number;
}

export interface PlayStation5Payload {
  /** An optional list of entitlement ids to query against PlayStation :tm: Network */
  Ids?: string[];
  /** Id of the PlayStation :tm: Network service label to consume entitlements from */
  ServiceLabel?: string;
}

export interface PSNAccountPlayFabIdPair {
  /**
   * Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the PlayStation :tm: Network
   * identifier.
   */
  PlayFabId?: string;
  /** Unique PlayStation :tm: Network identifier for a user. */
  PSNAccountId?: string;
}

export interface PSNOnlinePlayFabIdPair {
  /**
   * Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the PlayStation :tm: Network
   * identifier.
   */
  PlayFabId?: string;
  /** Unique PlayStation :tm: Network identifier for a user. */
  PSNOnlineId?: string;
}

export interface PurchaseItemRequest extends IPlayFabRequestCommon {
  /** Catalog version for the items to be purchased (defaults to most recent version. */
  CatalogVersion?: string;
  /** Unique PlayFab assigned ID for a specific character owned by a user */
  CharacterId?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Unique identifier of the item to purchase. */
  ItemId: string;
  /** Price the client expects to pay for the item (in case a new catalog or store was uploaded, with new prices). */
  Price: number;
  /** Store to buy this item through. If not set, prices default to those in the catalog. */
  StoreId?: string;
  /** Virtual currency to use to purchase the item. */
  VirtualCurrency: string;
}

export interface PurchaseItemResult extends IPlayFabResultCommon {
  /** Details for the items purchased. */
  Items?: ItemInstance[];
}

export interface PurchaseReceiptFulfillment {
  /** Items granted to the player in fulfillment of the validated receipt. */
  FulfilledItems?: ItemInstance[];
  /**
   * Source of the payment price information for the recorded purchase transaction. A value of &#39;Request&#39; indicates that the
   * price specified in the request was used, whereas a value of &#39;Catalog&#39; indicates that the real-money price of the catalog
   * item matching the product ID in the validated receipt transaction and the currency specified in the request (defaulting
   * to USD) was used.
   */
  RecordedPriceSource?: string;
  /** Currency used to purchase the items (ISO 4217 currency code). */
  RecordedTransactionCurrency?: string;
  /** Amount of the stated currency paid for the items, in centesimal units */
  RecordedTransactionTotal?: number;
}

type PushNotificationPlatform = "ApplePushNotificationService"
  | "GoogleCloudMessaging";

export interface PushNotificationRegistrationModel {
  /** Notification configured endpoint */
  NotificationEndpointARN?: string;
  /** Push notification platform */
  Platform?: PushNotificationPlatform;
}

export interface RedeemCouponRequest extends IPlayFabRequestCommon {
  /** Catalog version of the coupon. If null, uses the default catalog */
  CatalogVersion?: string;
  /** Optional identifier for the Character that should receive the item. If null, item is added to the player */
  CharacterId?: string;
  /** Generated coupon code to redeem. */
  CouponCode: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
}

export interface RedeemCouponResult extends IPlayFabResultCommon {
  /** Items granted to the player as a result of redeeming the coupon. */
  GrantedItems?: ItemInstance[];
}

export interface RefreshPSNAuthTokenRequest extends IPlayFabRequestCommon {
  /** Auth code returned by PlayStation :tm: Network OAuth system. */
  AuthCode: string;
  /** Id of the PlayStation :tm: Network issuer environment. If null, defaults to production environment. */
  IssuerId?: number;
  /** Redirect URI supplied to PlayStation :tm: Network when requesting an auth code */
  RedirectUri: string;
}

type Region = "USCentral"
  | "USEast"
  | "EUWest"
  | "Singapore"
  | "Japan"
  | "Brazil"
  | "Australia";

/** @deprecated Do not use */
export interface RegionInfo {
  /** indicates whether the server specified is available in this region */
  Available: boolean;
  /** name of the region */
  Name?: string;
  /** url to ping to get roundtrip time */
  PingUrl?: string;
  /** unique identifier for the region */
  Region?: Region;
}

export interface RegisterForIOSPushNotificationRequest extends IPlayFabRequestCommon {
  /** Message to display when confirming push notification. */
  ConfirmationMessage?: string;
  /** Unique token generated by the Apple Push Notification service when the title registered to receive push notifications. */
  DeviceToken: string;
  /** If true, send a test push message immediately after sucessful registration. Defaults to false. */
  SendPushNotificationConfirmation?: boolean;
}

export interface RegisterForIOSPushNotificationResult extends IPlayFabResultCommon {
}

export interface RegisterPlayFabUserRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** An optional parameter for setting the display name for this title (3-25 characters). */
  DisplayName?: string;
  /** User email address attached to their account */
  Email?: string;
  /** Base64 encoded body that is encrypted with the Title&#39;s public RSA key (Enterprise Only). */
  EncryptedRequest?: string;
  /** Flags for which pieces of info to return for the user. */
  InfoRequestParameters?: GetPlayerCombinedInfoRequestParams;
  /**
   * Formerly triggered an Entity login with a normal client login. This is now automatic, and always-on.
   * @deprecated Do not use
   */
  LoginTitlePlayerAccountEntity?: boolean;
  /**
   * The Origination of a user is determined by the API call used to create the account. In the case of RegisterPlayFabUser,
   * it will be Organic.
   * @deprecated Do not use
   */
  Origination?: string;
  /** Password for the PlayFab account (6-100 characters) */
  Password?: string;
  /** Player secret that is used to verify API request signatures (Enterprise Only). */
  PlayerSecret?: string;
  /**
   * An optional parameter that specifies whether both the username and email parameters are required. If true, both
   * parameters are required; if false, the user must supply either the username or email parameter. The default value is
   * true.
   */
  RequireBothUsernameAndEmail?: boolean;
  /**
   * Unique identifier for the title, found in the Settings &gt; Game Properties section of the PlayFab developer site when a
   * title has been selected.
   */
  TitleId?: string;
  /** PlayFab username for the account (3-20 characters) */
  Username?: string;
}

export interface RegisterPlayFabUserResult extends IPlayFabResultCommon {
  /**
   * If LoginTitlePlayerAccountEntity flag is set on the login request the title_player_account will also be logged in and
   * returned.
   */
  EntityToken?: EntityTokenResponse;
  /** PlayFab unique identifier for this newly created account. */
  PlayFabId?: string;
  /** Unique token identifying the user and game at the server level, for the current session. */
  SessionTicket?: string;
  /** Settings specific to this user. */
  SettingsForUser?: UserSettings;
  /** PlayFab unique user name. */
  Username?: string;
}

export interface RemoveContactEmailRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
}

export interface RemoveContactEmailResult extends IPlayFabResultCommon {
}

export interface RemoveFriendRequest extends IPlayFabRequestCommon {
  /** PlayFab identifier of the friend account which is to be removed. */
  FriendPlayFabId: string;
}

export interface RemoveFriendResult extends IPlayFabResultCommon {
}

export interface RemoveGenericIDRequest extends IPlayFabRequestCommon {
  /** Generic service identifier to be removed from the player. */
  GenericId: GenericServiceId;
}

export interface RemoveGenericIDResult extends IPlayFabResultCommon {
}

export interface RemoveSharedGroupMembersRequest extends IPlayFabRequestCommon {
  /** An array of unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabIds: string[];
  /** Unique identifier for the shared group. */
  SharedGroupId: string;
}

export interface RemoveSharedGroupMembersResult extends IPlayFabResultCommon {
}

export interface ReportAdActivityRequest extends IPlayFabRequestCommon {
  /** Type of activity, may be Opened, Closed, Start or End */
  Activity: AdActivity;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Unique ID of the placement to report for */
  PlacementId: string;
  /** Unique ID of the reward the player was offered */
  RewardId: string;
}

export interface ReportAdActivityResult extends IPlayFabResultCommon {
}

export interface ReportPlayerClientRequest extends IPlayFabRequestCommon {
  /** Optional additional comment by reporting player. */
  Comment?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Unique PlayFab identifier of the reported player. */
  ReporteeId: string;
}

export interface ReportPlayerClientResult extends IPlayFabResultCommon {
  /** The number of remaining reports which may be filed today. */
  SubmissionsRemaining: number;
  /**
   * Deprecated: Always true
   * @deprecated Do not use
   */
  Updated?: boolean;
}

export interface RestoreIOSPurchasesRequest extends IPlayFabRequestCommon {
  /** Catalog version of the restored items. If null, defaults to primary catalog. */
  CatalogVersion?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Base64 encoded receipt data, passed back by the App Store as a result of a successful purchase. */
  ReceiptData: string;
}

export interface RestoreIOSPurchasesResult extends IPlayFabResultCommon {
  /** Fulfilled inventory items and recorded purchases in fulfillment of the validated receipt transactions. */
  Fulfillments?: PurchaseReceiptFulfillment[];
}

export interface RewardAdActivityRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Placement unique ID */
  PlacementId: string;
  /** Reward unique ID */
  RewardId: string;
}

export interface RewardAdActivityResult extends IPlayFabResultCommon {
  /** PlayStream Event ID that was generated by this reward (all subsequent events are associated with this event identifier) */
  AdActivityEventId?: string;
  /** Debug results from the grants */
  DebugResults?: string[];
  /** Id of the placement the reward was for */
  PlacementId?: string;
  /** Name of the placement the reward was for */
  PlacementName?: string;
  /** If placement has viewing limits indicates how many views are left */
  PlacementViewsRemaining?: number;
  /** If placement has viewing limits indicates when they will next reset */
  PlacementViewsResetMinutes?: number;
  /** Reward results */
  RewardResults?: AdRewardResults;
}

/** @deprecated Do not use */
export interface RunCloudScriptRequest extends IPlayFabRequestCommon {
  /** server action to trigger */
  ActionId: string;
  /** parameters to pass into the action (If you use this, don&#39;t use ParamsEncoded) */
  Params?: any;
  /** json-encoded parameters to pass into the action (If you use this, don&#39;t use Params) */
  ParamsEncoded?: string;
}

/** @deprecated Do not use */
export interface RunCloudScriptResult extends IPlayFabResultCommon {
  /** id of Cloud Script run */
  ActionId?: string;
  /** any log statements generated during the run of this action */
  ActionLog?: string;
  /** time this script took to run, in seconds */
  ExecutionTime: number;
  /** return values from the server action as a dynamic object */
  Results?: any;
  /** return values from the server action as a JSON encoded string */
  ResultsEncoded?: string;
  /** revision of Cloud Script run */
  Revision: number;
  /** version of Cloud Script run */
  Version: number;
}

export interface ScriptExecutionError {
  /**
   * Error code, such as CloudScriptNotFound, JavascriptException, CloudScriptFunctionArgumentSizeExceeded,
   * CloudScriptAPIRequestCountExceeded, CloudScriptAPIRequestError, or CloudScriptHTTPRequestError
   */
  Error?: string;
  /** Details about the error */
  Message?: string;
  /** Point during the execution of the script at which the error occurred, if any */
  StackTrace?: string;
}

export interface SendAccountRecoveryEmailRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** User email address attached to their account */
  Email: string;
  /** The email template id of the account recovery email template to send. */
  EmailTemplateId?: string;
  /**
   * Deprecated - Do not use
   * @deprecated Do not use
   */
  PublisherId?: string;
  /**
   * Unique identifier for the title, found in the Settings &gt; Game Properties section of the PlayFab developer site when a
   * title has been selected.
   */
  TitleId: string;
}

export interface SendAccountRecoveryEmailResult extends IPlayFabResultCommon {
}

export interface SetFriendTagsRequest extends IPlayFabRequestCommon {
  /** PlayFab identifier of the friend account to which the tag(s) should be applied. */
  FriendPlayFabId: string;
  /** Array of tags to set on the friend account. */
  Tags: string[];
}

export interface SetFriendTagsResult extends IPlayFabResultCommon {
}

export interface SetPlayerSecretRequest extends IPlayFabRequestCommon {
  /** Base64 encoded body that is encrypted with the Title&#39;s public RSA key (Enterprise Only). */
  EncryptedRequest?: string;
  /** Player secret that is used to verify API request signatures (Enterprise Only). */
  PlayerSecret?: string;
}

export interface SetPlayerSecretResult extends IPlayFabResultCommon {
}

export interface SharedGroupDataRecord {
  /** Timestamp for when this data was last updated. */
  LastUpdated: string;
  /** Unique PlayFab identifier of the user to last update this value. */
  LastUpdatedBy?: string;
  /** Indicates whether this data can be read by all users (public) or only members of the group (private). */
  Permission?: UserDataPermission;
  /** Data stored for the specified group data key. */
  Value?: string;
}

type SourceType = "Admin"
  | "BackEnd"
  | "GameClient"
  | "GameServer"
  | "Partner"
  | "Custom"
  | "API";

/** @deprecated Do not use */
export interface StartGameRequest extends IPlayFabRequestCommon {
  /** version information for the build of the game server which is to be started */
  BuildVersion: string;
  /** character to use for stats based matching. Leave null to use account stats */
  CharacterId?: string;
  /** custom command line argument when starting game server process */
  CustomCommandLineData?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** the title-defined game mode this server is to be running (defaults to 0 if there is only one mode) */
  GameMode: string;
  /** the region to associate this server with for match filtering */
  Region: Region;
  /** player statistic for others to use in finding this game. May be null for no stat-based matching */
  StatisticName?: string;
}

/** @deprecated Do not use */
export interface StartGameResult extends IPlayFabResultCommon {
  /** timestamp for when the server should expire, if applicable */
  Expires?: string;
  /** unique identifier for the lobby of the server started */
  LobbyID?: string;
  /** password required to log into the server */
  Password?: string;
  /**
   * server IPV4 address
   * @deprecated Please use ServerIPV4Address instead.
   */
  ServerHostname?: string;
  /** server IPV4 address */
  ServerIPV4Address?: string;
  /** server IPV6 address */
  ServerIPV6Address?: string;
  /** port on the server to be used for communication */
  ServerPort?: number;
  /** server public DNS name */
  ServerPublicDNSName?: string;
  /** unique identifier for the server */
  Ticket?: string;
}

export interface StartPurchaseRequest extends IPlayFabRequestCommon {
  /** Catalog version for the items to be purchased. Defaults to most recent catalog. */
  CatalogVersion?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Array of items to purchase. */
  Items: ItemPurchaseRequest[];
  /** Store through which to purchase items. If not set, prices will be pulled from the catalog itself. */
  StoreId?: string;
}

export interface StartPurchaseResult extends IPlayFabResultCommon {
  /** Cart items to be purchased. */
  Contents?: CartItem[];
  /** Purchase order identifier. */
  OrderId?: string;
  /** Available methods by which the user can pay. */
  PaymentOptions?: PaymentOption[];
  /** Current virtual currency totals for the user. */
  VirtualCurrencyBalances?: Record<string, number>;
}

export interface StatisticModel {
  /** Statistic name */
  Name?: string;
  /** Statistic value */
  Value: number;
  /** Statistic version (0 if not a versioned statistic) */
  Version: number;
}

export interface StatisticNameVersion {
  /** unique name of the statistic */
  StatisticName: string;
  /** the version of the statistic to be returned */
  Version: number;
}

export interface StatisticUpdate {
  /** unique name of the statistic */
  StatisticName: string;
  /** statistic value for the player */
  Value: number;
  /**
   * for updates to an existing statistic value for a player, the version of the statistic when it was loaded. Null when
   * setting the statistic value for the first time.
   */
  Version?: number;
}

export interface StatisticValue {
  /** unique name of the statistic */
  StatisticName?: string;
  /** statistic value for the player */
  Value: number;
  /** for updates to an existing statistic value for a player, the version of the statistic when it was loaded */
  Version: number;
}

export interface SteamNamePlayFabIdPair {
  /** Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the Steam identifier. */
  PlayFabId?: string;
  /** Unique Steam identifier for a user, also known as Steam persona name. */
  SteamName?: string;
}

export interface SteamPlayFabIdPair {
  /** Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the Steam identifier. */
  PlayFabId?: string;
  /**
   * Deprecated: Please use SteamStringId
   * @deprecated Please use SteamStringId instead.
   */
  SteamId?: number;
  /** Unique Steam identifier for a user. */
  SteamStringId?: string;
}

export interface StoreItem {
  /** Store specific custom data. The data only exists as part of this store; it is not transferred to item instances */
  CustomData?: any;
  /** Intended display position for this item. Note that 0 is the first position */
  DisplayPosition?: number;
  /**
   * Unique identifier of the item as it exists in the catalog - note that this must exactly match the ItemId from the
   * catalog
   */
  ItemId: string;
  /** Override prices for this item for specific currencies */
  RealCurrencyPrices?: Record<string, number>;
  /** Override prices for this item in virtual currencies and &quot;RM&quot; (the base Real Money purchase price, in USD pennies) */
  VirtualCurrencyPrices?: Record<string, number>;
}

export interface StoreMarketingModel {
  /** Tagline for a store. */
  Description?: string;
  /** Display name of a store as it will appear to users. */
  DisplayName?: string;
  /** Custom data about a store. */
  Metadata?: any;
}

export interface SubscriptionModel {
  /** When this subscription expires. */
  Expiration: string;
  /** The time the subscription was orignially purchased */
  InitialSubscriptionTime: string;
  /** Whether this subscription is currently active. That is, if Expiration &gt; now. */
  IsActive: boolean;
  /** The status of this subscription, according to the subscription provider. */
  Status?: SubscriptionProviderStatus;
  /** The id for this subscription */
  SubscriptionId?: string;
  /** The item id for this subscription from the primary catalog */
  SubscriptionItemId?: string;
  /** The provider for this subscription. Apple or Google Play are supported today. */
  SubscriptionProvider?: string;
}

type SubscriptionProviderStatus = "NoError"
  | "Cancelled"
  | "UnknownError"
  | "BillingError"
  | "ProductUnavailable"
  | "CustomerDidNotAcceptPriceChange"
  | "FreeTrial"
  | "PaymentPending";

export interface SubtractUserVirtualCurrencyRequest extends IPlayFabRequestCommon {
  /** Amount to be subtracted from the user balance of the specified virtual currency. */
  Amount: number;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Name of the virtual currency which is to be decremented. */
  VirtualCurrency: string;
}

export interface TagModel {
  /** Full value of the tag, including namespace */
  TagValue?: string;
}

type TitleActivationStatus = "None"
  | "ActivatedTitleKey"
  | "PendingSteam"
  | "ActivatedSteam"
  | "RevokedSteam";

export interface TitleNewsItem {
  /** News item text. */
  Body?: string;
  /** Unique identifier of news item. */
  NewsId?: string;
  /** Date and time when the news item was posted. */
  Timestamp: string;
  /** Title of the news item. */
  Title?: string;
}

export interface TradeInfo {
  /** Item instances from the accepting player that are used to fulfill the trade. If null, no one has accepted the trade. */
  AcceptedInventoryInstanceIds?: string[];
  /** The PlayFab ID of the player who accepted the trade. If null, no one has accepted the trade. */
  AcceptedPlayerId?: string;
  /** An optional list of players allowed to complete this trade. If null, anybody can complete the trade. */
  AllowedPlayerIds?: string[];
  /** If set, The UTC time when this trade was canceled. */
  CancelledAt?: string;
  /** If set, The UTC time when this trade was fulfilled. */
  FilledAt?: string;
  /** If set, The UTC time when this trade was made invalid. */
  InvalidatedAt?: string;
  /** The catalogItem Ids of the item instances being offered. */
  OfferedCatalogItemIds?: string[];
  /** The itemInstance Ids that are being offered. */
  OfferedInventoryInstanceIds?: string[];
  /** The PlayFabId for the offering player. */
  OfferingPlayerId?: string;
  /** The UTC time when this trade was created. */
  OpenedAt?: string;
  /** The catalogItem Ids requested in exchange. */
  RequestedCatalogItemIds?: string[];
  /** Describes the current state of this trade. */
  Status?: TradeStatus;
  /** The identifier for this trade. */
  TradeId?: string;
}

type TradeStatus = "Invalid"
  | "Opening"
  | "Open"
  | "Accepting"
  | "Accepted"
  | "Filled"
  | "Cancelled";

type TransactionStatus = "CreateCart"
  | "Init"
  | "Approved"
  | "Succeeded"
  | "FailedByProvider"
  | "DisputePending"
  | "RefundPending"
  | "Refunded"
  | "RefundFailed"
  | "ChargedBack"
  | "FailedByUber"
  | "FailedByPlayFab"
  | "Revoked"
  | "TradePending"
  | "Traded"
  | "Upgraded"
  | "StackPending"
  | "Stacked"
  | "Other"
  | "Failed";

export interface TreatmentAssignment {
  /** List of the experiment variables. */
  Variables?: Variable[];
  /** List of the experiment variants. */
  Variants?: string[];
}

export interface TwitchPlayFabIdPair {
  /** Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the Twitch identifier. */
  PlayFabId?: string;
  /** Unique Twitch identifier for a user. */
  TwitchId?: string;
}

export interface UnlinkAndroidDeviceIDRequest extends IPlayFabRequestCommon {
  /**
   * Android device identifier for the user&#39;s device. If not specified, the most recently signed in Android Device ID will be
   * used.
   */
  AndroidDeviceId?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
}

export interface UnlinkAndroidDeviceIDResult extends IPlayFabResultCommon {
}

export interface UnlinkAppleRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
}

export interface UnlinkBattleNetAccountRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
}

export interface UnlinkCustomIDRequest extends IPlayFabRequestCommon {
  /**
   * Custom unique identifier for the user, generated by the title. If not specified, the most recently signed in Custom ID
   * will be used.
   */
  CustomId?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
}

export interface UnlinkCustomIDResult extends IPlayFabResultCommon {
}

export interface UnlinkFacebookAccountRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
}

export interface UnlinkFacebookAccountResult extends IPlayFabResultCommon {
}

export interface UnlinkFacebookInstantGamesIdRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Facebook Instant Games identifier for the user. If not specified, the most recently signed in ID will be used. */
  FacebookInstantGamesId?: string;
}

export interface UnlinkFacebookInstantGamesIdResult extends IPlayFabResultCommon {
}

export interface UnlinkGameCenterAccountRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
}

export interface UnlinkGameCenterAccountResult extends IPlayFabResultCommon {
}

export interface UnlinkGoogleAccountRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
}

export interface UnlinkGoogleAccountResult extends IPlayFabResultCommon {
}

export interface UnlinkGooglePlayGamesServicesAccountRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
}

export interface UnlinkGooglePlayGamesServicesAccountResult extends IPlayFabResultCommon {
}

export interface UnlinkIOSDeviceIDRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /**
   * Vendor-specific iOS identifier for the user&#39;s device. If not specified, the most recently signed in iOS Device ID will
   * be used.
   */
  DeviceId?: string;
}

export interface UnlinkIOSDeviceIDResult extends IPlayFabResultCommon {
}

export interface UnlinkKongregateAccountRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
}

export interface UnlinkKongregateAccountResult extends IPlayFabResultCommon {
}

export interface UnlinkNintendoServiceAccountRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
}

export interface UnlinkNintendoSwitchDeviceIdRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Nintendo Switch Device identifier for the user. If not specified, the most recently signed in device ID will be used. */
  NintendoSwitchDeviceId?: string;
}

export interface UnlinkNintendoSwitchDeviceIdResult extends IPlayFabResultCommon {
}

export interface UnlinkOpenIdConnectRequest extends IPlayFabRequestCommon {
  /** A name that identifies which configured OpenID Connect provider relationship to use. Maximum 100 characters. */
  ConnectionId: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
}

export interface UnlinkPSNAccountRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
}

export interface UnlinkPSNAccountResult extends IPlayFabResultCommon {
}

export interface UnlinkSteamAccountRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
}

export interface UnlinkSteamAccountResult extends IPlayFabResultCommon {
}

export interface UnlinkTwitchAccountRequest extends IPlayFabRequestCommon {
  /**
   * Valid token issued by Twitch. Used to specify which twitch account to unlink from the profile. By default it uses the
   * one that is present on the profile.
   */
  AccessToken?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
}

export interface UnlinkTwitchAccountResult extends IPlayFabResultCommon {
}

export interface UnlinkXboxAccountRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /**
   * Token provided by the Xbox Live SDK/XDK method GetTokenAndSignatureAsync(&quot;POST&quot;, &quot;https://playfabapi.com/&quot;, &quot;&quot;).
   * @deprecated Do not use
   */
  XboxToken?: string;
}

export interface UnlinkXboxAccountResult extends IPlayFabResultCommon {
}

export interface UnlockContainerInstanceRequest extends IPlayFabRequestCommon {
  /**
   * Specifies the catalog version that should be used to determine container contents. If unspecified, uses catalog
   * associated with the item instance.
   */
  CatalogVersion?: string;
  /** Unique PlayFab assigned ID for a specific character owned by a user */
  CharacterId?: string;
  /** ItemInstanceId of the container to unlock. */
  ContainerItemInstanceId: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /**
   * ItemInstanceId of the key that will be consumed by unlocking this container. If the container requires a key, this
   * parameter is required.
   */
  KeyItemInstanceId?: string;
}

export interface UnlockContainerItemRequest extends IPlayFabRequestCommon {
  /**
   * Specifies the catalog version that should be used to determine container contents. If unspecified, uses default/primary
   * catalog.
   */
  CatalogVersion?: string;
  /** Unique PlayFab assigned ID for a specific character owned by a user */
  CharacterId?: string;
  /** Catalog ItemId of the container type to unlock. */
  ContainerItemId: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
}

export interface UnlockContainerItemResult extends IPlayFabResultCommon {
  /** Items granted to the player as a result of unlocking the container. */
  GrantedItems?: ItemInstance[];
  /** Unique instance identifier of the container unlocked. */
  UnlockedItemInstanceId?: string;
  /** Unique instance identifier of the key used to unlock the container, if applicable. */
  UnlockedWithItemInstanceId?: string;
  /** Virtual currency granted to the player as a result of unlocking the container. */
  VirtualCurrency?: Record<string, number>;
}

export interface UpdateAvatarUrlRequest extends IPlayFabRequestCommon {
  /** URL of the avatar image. If empty, it removes the existing avatar URL. */
  ImageUrl: string;
}

export interface UpdateCharacterDataRequest extends IPlayFabRequestCommon {
  /** Unique PlayFab assigned ID for a specific character owned by a user */
  CharacterId: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /**
   * Key-value pairs to be written to the custom data. Note that keys are trimmed of whitespace, are limited in size, and may
   * not begin with a &#39;!&#39; character or be null.
   */
  Data?: Record<string, string | null>;
  /**
   * Optional list of Data-keys to remove from UserData. Some SDKs cannot insert null-values into Data due to language
   * constraints. Use this to delete the keys directly.
   */
  KeysToRemove?: string[];
  /** Permission to be applied to all user data keys written in this request. Defaults to &quot;private&quot; if not set. */
  Permission?: UserDataPermission;
}

export interface UpdateCharacterDataResult extends IPlayFabResultCommon {
  /**
   * Indicates the current version of the data that has been set. This is incremented with every set call for that type of
   * data (read-only, internal, etc). This version can be provided in Get calls to find updated data.
   */
  DataVersion: number;
}

export interface UpdateCharacterStatisticsRequest extends IPlayFabRequestCommon {
  /** Unique PlayFab assigned ID for a specific character owned by a user */
  CharacterId: string;
  /** Statistics to be updated with the provided values, in the Key(string), Value(int) pattern. */
  CharacterStatistics?: Record<string, number>;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
}

export interface UpdateCharacterStatisticsResult extends IPlayFabResultCommon {
}

export interface UpdatePlayerCustomPropertiesRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /**
   * Optional field used for concurrency control. One can ensure that the update operation will only be performed if the
   * player&#39;s properties have not been updated by any other clients since last the version.
   */
  ExpectedPropertiesVersion?: number;
  /** Collection of properties to be set for a player. */
  Properties: UpdateProperty[];
}

export interface UpdatePlayerCustomPropertiesResult extends IPlayFabResultCommon {
  /**
   * Indicates the current version of a player&#39;s properties that have been set. This is incremented after updates and
   * deletes. This version can be provided in update and delete calls for concurrency control.
   */
  PropertiesVersion: number;
}

export interface UpdatePlayerStatisticsRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Statistics to be updated with the provided values */
  Statistics: StatisticUpdate[];
}

export interface UpdatePlayerStatisticsResult extends IPlayFabResultCommon {
}

export interface UpdateProperty {
  /** Name of the custom property. Can contain Unicode letters and digits. They are limited in size. */
  Name: string;
  /** Value of the custom property. Limited to booleans, numbers, and strings. */
  Value: any;
}

export interface UpdateSharedGroupDataRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /**
   * Key-value pairs to be written to the custom data. Note that keys are trimmed of whitespace, are limited in size, and may
   * not begin with a &#39;!&#39; character or be null.
   */
  Data?: Record<string, string | null>;
  /**
   * Optional list of Data-keys to remove from UserData. Some SDKs cannot insert null-values into Data due to language
   * constraints. Use this to delete the keys directly.
   */
  KeysToRemove?: string[];
  /** Permission to be applied to all user data keys in this request. */
  Permission?: UserDataPermission;
  /** Unique identifier for the shared group. */
  SharedGroupId: string;
}

export interface UpdateSharedGroupDataResult extends IPlayFabResultCommon {
}

export interface UpdateUserDataRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /**
   * Key-value pairs to be written to the custom data. Note that keys are trimmed of whitespace, are limited in size, and may
   * not begin with a &#39;!&#39; character or be null.
   */
  Data?: Record<string, string | null>;
  /**
   * Optional list of Data-keys to remove from UserData. Some SDKs cannot insert null-values into Data due to language
   * constraints. Use this to delete the keys directly.
   */
  KeysToRemove?: string[];
  /**
   * Permission to be applied to all user data keys written in this request. Defaults to &quot;private&quot; if not set. This is used
   * for requests by one player for information about another player; those requests will only return Public keys.
   */
  Permission?: UserDataPermission;
}

export interface UpdateUserDataResult extends IPlayFabResultCommon {
  /**
   * Indicates the current version of the data that has been set. This is incremented with every set call for that type of
   * data (read-only, internal, etc). This version can be provided in Get calls to find updated data.
   */
  DataVersion: number;
}

/** @deprecated Do not use */
export interface UpdateUserStatisticsRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /**
   * Statistics to be updated with the provided values. UserStatistics object must follow the Key(string), Value(int)
   * pattern.
   */
  UserStatistics?: Record<string, number>;
}

/** @deprecated Do not use */
export interface UpdateUserStatisticsResult extends IPlayFabResultCommon {
}

export interface UpdateUserTitleDisplayNameRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** New title display name for the user - must be between 3 and 25 characters. */
  DisplayName: string;
}

export interface UpdateUserTitleDisplayNameResult extends IPlayFabResultCommon {
  /** Current title display name for the user (this will be the original display name if the rename attempt failed). */
  DisplayName?: string;
}

export interface UserAccountInfo {
  /** User Android device information, if an Android device has been linked */
  AndroidDeviceInfo?: UserAndroidDeviceInfo;
  /** Sign in with Apple account information, if an Apple account has been linked */
  AppleAccountInfo?: UserAppleIdInfo;
  /** Battle.net account information, if a Battle.net account has been linked */
  BattleNetAccountInfo?: UserBattleNetInfo;
  /** Timestamp indicating when the user account was created */
  Created: string;
  /** Custom ID information, if a custom ID has been assigned */
  CustomIdInfo?: UserCustomIdInfo;
  /** User Facebook information, if a Facebook account has been linked */
  FacebookInfo?: UserFacebookInfo;
  /** Facebook Instant Games account information, if a Facebook Instant Games account has been linked */
  FacebookInstantGamesIdInfo?: UserFacebookInstantGamesIdInfo;
  /** User Gamecenter information, if a Gamecenter account has been linked */
  GameCenterInfo?: UserGameCenterInfo;
  /** User Google account information, if a Google account has been linked */
  GoogleInfo?: UserGoogleInfo;
  /** User Google Play Games account information, if a Google Play Games account has been linked */
  GooglePlayGamesInfo?: UserGooglePlayGamesInfo;
  /** User iOS device information, if an iOS device has been linked */
  IosDeviceInfo?: UserIosDeviceInfo;
  /** User Kongregate account information, if a Kongregate account has been linked */
  KongregateInfo?: UserKongregateInfo;
  /** Nintendo Switch account information, if a Nintendo Switch account has been linked */
  NintendoSwitchAccountInfo?: UserNintendoSwitchAccountIdInfo;
  /** Nintendo Switch device information, if a Nintendo Switch device has been linked */
  NintendoSwitchDeviceIdInfo?: UserNintendoSwitchDeviceIdInfo;
  /** OpenID Connect information, if any OpenID Connect accounts have been linked */
  OpenIdInfo?: UserOpenIdInfo[];
  /** Unique identifier for the user account */
  PlayFabId?: string;
  /** Personal information for the user which is considered more sensitive */
  PrivateInfo?: UserPrivateAccountInfo;
  /** User PlayStation :tm: Network account information, if a PlayStation :tm: Network account has been linked */
  PsnInfo?: UserPsnInfo;
  /** Server Custom ID information, if a server custom ID has been assigned */
  ServerCustomIdInfo?: UserServerCustomIdInfo;
  /** User Steam information, if a Steam account has been linked */
  SteamInfo?: UserSteamInfo;
  /** Title-specific information for the user account */
  TitleInfo?: UserTitleInfo;
  /** User Twitch account information, if a Twitch account has been linked */
  TwitchInfo?: UserTwitchInfo;
  /** User account name in the PlayFab service */
  Username?: string;
  /** User XBox account information, if a XBox account has been linked */
  XboxInfo?: UserXboxInfo;
}

export interface UserAndroidDeviceInfo {
  /** Android device ID */
  AndroidDeviceId?: string;
}

export interface UserAppleIdInfo {
  /** Apple subject ID */
  AppleSubjectId?: string;
}

export interface UserBattleNetInfo {
  /** Battle.net identifier */
  BattleNetAccountId?: string;
  /** Battle.net display name */
  BattleNetBattleTag?: string;
}

export interface UserCustomIdInfo {
  /** Custom ID */
  CustomId?: string;
}

type UserDataPermission = "Private"
  | "Public";

export interface UserDataRecord {
  /** Timestamp for when this data was last updated. */
  LastUpdated: string;
  /**
   * Indicates whether this data can be read by all users (public) or only the user (private). This is used for GetUserData
   * requests being made by one player about another player.
   */
  Permission?: UserDataPermission;
  /** Data stored for the specified user data key. */
  Value?: string;
}

export interface UserFacebookInfo {
  /** Facebook identifier */
  FacebookId?: string;
  /** Facebook full name */
  FullName?: string;
}

export interface UserFacebookInstantGamesIdInfo {
  /** Facebook Instant Games ID */
  FacebookInstantGamesId?: string;
}

export interface UserGameCenterInfo {
  /** Gamecenter identifier */
  GameCenterId?: string;
}

export interface UserGoogleInfo {
  /** Email address of the Google account */
  GoogleEmail?: string;
  /** Gender information of the Google account */
  GoogleGender?: string;
  /** Google ID */
  GoogleId?: string;
  /** Locale of the Google account */
  GoogleLocale?: string;
  /** Name of the Google account user */
  GoogleName?: string;
}

export interface UserGooglePlayGamesInfo {
  /** Avatar image url of the Google Play Games player */
  GooglePlayGamesPlayerAvatarImageUrl?: string;
  /** Display name of the Google Play Games player */
  GooglePlayGamesPlayerDisplayName?: string;
  /** Google Play Games player ID */
  GooglePlayGamesPlayerId?: string;
}

export interface UserIosDeviceInfo {
  /** iOS device ID */
  IosDeviceId?: string;
}

export interface UserKongregateInfo {
  /** Kongregate ID */
  KongregateId?: string;
  /** Kongregate Username */
  KongregateName?: string;
}

export interface UserNintendoSwitchAccountIdInfo {
  /** Nintendo Switch account subject ID */
  NintendoSwitchAccountSubjectId?: string;
}

export interface UserNintendoSwitchDeviceIdInfo {
  /** Nintendo Switch Device ID */
  NintendoSwitchDeviceId?: string;
}

export interface UserOpenIdInfo {
  /** OpenID Connection ID */
  ConnectionId?: string;
  /** OpenID Issuer */
  Issuer?: string;
  /** OpenID Subject */
  Subject?: string;
}

type UserOrigination = "Organic"
  | "Steam"
  | "Google"
  | "Amazon"
  | "Facebook"
  | "Kongregate"
  | "GamersFirst"
  | "Unknown"
  | "IOS"
  | "LoadTest"
  | "Android"
  | "PSN"
  | "GameCenter"
  | "CustomId"
  | "XboxLive"
  | "Parse"
  | "Twitch"
  | "ServerCustomId"
  | "NintendoSwitchDeviceId"
  | "FacebookInstantGamesId"
  | "OpenIdConnect"
  | "Apple"
  | "NintendoSwitchAccount"
  | "GooglePlayGames"
  | "XboxMobileStore"
  | "King"
  | "BattleNet";

export interface UserPrivateAccountInfo {
  /** user email address */
  Email?: string;
}

export interface UserPsnInfo {
  /** PlayStation :tm: Network account ID */
  PsnAccountId?: string;
  /** PlayStation :tm: Network online ID */
  PsnOnlineId?: string;
}

export interface UserServerCustomIdInfo {
  /** Custom ID */
  CustomId?: string;
}

export interface UserSettings {
  /** Boolean for whether this player is eligible for gathering device info. */
  GatherDeviceInfo: boolean;
  /** Boolean for whether this player should report OnFocus play-time tracking. */
  GatherFocusInfo: boolean;
  /** Boolean for whether this player is eligible for ad tracking. */
  NeedsAttribution: boolean;
}

export interface UserSteamInfo {
  /** what stage of game ownership the user is listed as being in, from Steam */
  SteamActivationStatus?: TitleActivationStatus;
  /** the country in which the player resides, from Steam data */
  SteamCountry?: string;
  /** currency type set in the user Steam account */
  SteamCurrency?: Currency;
  /** Steam identifier */
  SteamId?: string;
  /** Steam display name */
  SteamName?: string;
}

export interface UserTitleInfo {
  /** URL to the player&#39;s avatar. */
  AvatarUrl?: string;
  /**
   * timestamp indicating when the user was first associated with this game (this can differ significantly from when the user
   * first registered with PlayFab)
   */
  Created: string;
  /** name of the user, as it is displayed in-game */
  DisplayName?: string;
  /**
   * timestamp indicating when the user first signed into this game (this can differ from the Created timestamp, as other
   * events, such as issuing a beta key to the user, can associate the title to the user)
   */
  FirstLogin?: string;
  /** boolean indicating whether or not the user is currently banned for a title */
  isBanned?: boolean;
  /** timestamp for the last user login for this title */
  LastLogin?: string;
  /** source by which the user first joined the game, if known */
  Origination?: UserOrigination;
  /** Title player account entity for this user */
  TitlePlayerAccount?: EntityKey;
}

export interface UserTwitchInfo {
  /** Twitch ID */
  TwitchId?: string;
  /** Twitch Username */
  TwitchUserName?: string;
}

export interface UserXboxInfo {
  /** XBox user ID */
  XboxUserId?: string;
  /** XBox user sandbox */
  XboxUserSandbox?: string;
}

export interface ValidateAmazonReceiptRequest extends IPlayFabRequestCommon {
  /** Catalog version of the fulfilled items. If null, defaults to the primary catalog. */
  CatalogVersion?: string;
  /** Currency used to pay for the purchase (ISO 4217 currency code). */
  CurrencyCode?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Amount of the stated currency paid, in centesimal units. */
  PurchasePrice: number;
  /** ReceiptId returned by the Amazon App Store in-app purchase API */
  ReceiptId: string;
  /** AmazonId of the user making the purchase as returned by the Amazon App Store in-app purchase API */
  UserId: string;
}

export interface ValidateAmazonReceiptResult extends IPlayFabResultCommon {
  /** Fulfilled inventory items and recorded purchases in fulfillment of the validated receipt transactions. */
  Fulfillments?: PurchaseReceiptFulfillment[];
}

export interface ValidateGooglePlayPurchaseRequest extends IPlayFabRequestCommon {
  /** Catalog version of the fulfilled items. If null, defaults to the primary catalog. */
  CatalogVersion?: string;
  /** Currency used to pay for the purchase (ISO 4217 currency code). */
  CurrencyCode?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Amount of the stated currency paid, in centesimal units. */
  PurchasePrice?: number;
  /** Original JSON string returned by the Google Play IAB API. */
  ReceiptJson: string;
  /** Signature returned by the Google Play IAB API. */
  Signature: string;
}

export interface ValidateGooglePlayPurchaseResult extends IPlayFabResultCommon {
  /** Fulfilled inventory items and recorded purchases in fulfillment of the validated receipt transactions. */
  Fulfillments?: PurchaseReceiptFulfillment[];
}

export interface ValidateIOSReceiptRequest extends IPlayFabRequestCommon {
  /** Catalog version of the fulfilled items. If null, defaults to the primary catalog. */
  CatalogVersion?: string;
  /** Currency used to pay for the purchase (ISO 4217 currency code). */
  CurrencyCode?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Amount of the stated currency paid, in centesimal units. */
  PurchasePrice: number;
  /** Base64 encoded receipt data, passed back by the App Store as a result of a successful purchase. */
  ReceiptData: string;
}

export interface ValidateIOSReceiptResult extends IPlayFabResultCommon {
  /** Fulfilled inventory items and recorded purchases in fulfillment of the validated receipt transactions. */
  Fulfillments?: PurchaseReceiptFulfillment[];
}

export interface ValidateWindowsReceiptRequest extends IPlayFabRequestCommon {
  /** Catalog version of the fulfilled items. If null, defaults to the primary catalog. */
  CatalogVersion?: string;
  /** Currency used to pay for the purchase (ISO 4217 currency code). */
  CurrencyCode: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Amount of the stated currency paid, in centesimal units. */
  PurchasePrice: number;
  /** XML Receipt returned by the Windows App Store in-app purchase API */
  Receipt: string;
}

export interface ValidateWindowsReceiptResult extends IPlayFabResultCommon {
  /** Fulfilled inventory items and recorded purchases in fulfillment of the validated receipt transactions. */
  Fulfillments?: PurchaseReceiptFulfillment[];
}

export interface ValueToDateModel {
  /** ISO 4217 code of the currency used in the purchases */
  Currency?: string;
  /**
   * Total value of the purchases in a whole number of 1/100 monetary units. For example, 999 indicates nine dollars and
   * ninety-nine cents when Currency is &#39;USD&#39;)
   */
  TotalValue: number;
  /**
   * Total value of the purchases in a string representation of decimal monetary units. For example, &#39;9.99&#39; indicates nine
   * dollars and ninety-nine cents when Currency is &#39;USD&#39;.
   */
  TotalValueAsDecimal?: string;
}

export interface Variable {
  /** Name of the variable. */
  Name: string;
  /** Value of the variable. */
  Value?: string;
}

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

export interface WriteClientCharacterEventRequest extends IPlayFabRequestCommon {
  /** Custom event properties. Each property consists of a name (string) and a value (JSON object). */
  Body?: Record<string, any>;
  /** Unique PlayFab assigned ID for a specific character owned by a user */
  CharacterId: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /**
   * The name of the event, within the namespace scoped to the title. The naming convention is up to the caller, but it
   * commonly follows the subject_verb_object pattern (e.g. player_logged_in).
   */
  EventName: string;
  /** The time (in UTC) associated with this event. The value defaults to the current time. */
  Timestamp?: string;
}

export interface WriteClientPlayerEventRequest extends IPlayFabRequestCommon {
  /** Custom data properties associated with the event. Each property consists of a name (string) and a value (JSON object). */
  Body?: Record<string, any>;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /**
   * The name of the event, within the namespace scoped to the title. The naming convention is up to the caller, but it
   * commonly follows the subject_verb_object pattern (e.g. player_logged_in).
   */
  EventName: string;
  /** The time (in UTC) associated with this event. The value defaults to the current time. */
  Timestamp?: string;
}

export interface WriteEventResponse extends IPlayFabResultCommon {
  /**
   * The unique identifier of the event. The values of this identifier consist of ASCII characters and are not constrained to
   * any particular format.
   */
  EventId?: string;
}

export interface WriteTitleEventRequest extends IPlayFabRequestCommon {
  /** Custom event properties. Each property consists of a name (string) and a value (JSON object). */
  Body?: Record<string, any>;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /**
   * The name of the event, within the namespace scoped to the title. The naming convention is up to the caller, but it
   * commonly follows the subject_verb_object pattern (e.g. player_logged_in).
   */
  EventName: string;
  /** The time (in UTC) associated with this event. The value defaults to the current time. */
  Timestamp?: string;
}

export interface XboxLiveAccountPlayFabIdPair {
  /** Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the Xbox Live identifier. */
  PlayFabId?: string;
  /** Unique Xbox Live identifier for a user. */
  XboxLiveAccountId?: string;
}

