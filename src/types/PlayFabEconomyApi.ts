import type {
  IPlayFabRequestCommon,
  IPlayFabResultCommon
} from "./PlayFab";

export interface AddInventoryItemsOperation {
  /** The amount to add to the current item amount. */
  Amount?: number;
  /** The duration to add to the current item expiration date. */
  DurationInSeconds?: number;
  /** The inventory item the operation applies to. */
  Item?: InventoryItemReference;
  /** The values to apply to a stack newly created by this operation. */
  NewStackValues?: InitialValues;
}

export interface AddInventoryItemsRequest extends IPlayFabRequestCommon {
  /** The amount to add for the current item. */
  Amount?: number;
  /**
   * The id of the entity&#39;s collection to perform this action on. (Default=&quot;default&quot;). The number of inventory collections is
   * unlimited.
   */
  CollectionId?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The duration to add to the current item expiration date. */
  DurationInSeconds?: number;
  /** The entity to perform this action on. */
  Entity?: EntityKey;
  /**
   * ETags are used for concurrency checking when updating resources. More information about using ETags can be found here:
   * https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/catalog/etags
   */
  ETag?: string;
  /**
   * The Idempotency ID for this request. Idempotency IDs can be used to prevent operation replay in the medium term but will
   * be garbage collected eventually.
   */
  IdempotencyId?: string;
  /** The inventory item the request applies to. */
  Item?: InventoryItemReference;
  /** The values to apply to a stack newly created by this request. */
  NewStackValues?: InitialValues;
}

export interface AddInventoryItemsResponse extends IPlayFabResultCommon {
  /**
   * ETags are used for concurrency checking when updating resources. More information about using ETags can be found here:
   * https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/catalog/etags
   */
  ETag?: string;
  /** The idempotency id used in the request. */
  IdempotencyId?: string;
  /** The ids of transactions that occurred as a result of the request. */
  TransactionIds?: string[];
}

export interface AlternateId {
  /** Type of the alternate ID. */
  Type?: string;
  /** Value of the alternate ID. */
  Value?: string;
}

export interface CatalogAlternateId {
  /** Type of the alternate ID. */
  Type?: string;
  /** Value of the alternate ID. */
  Value?: string;
}

export interface CatalogConfig {
  /** A list of player entity keys that will have admin permissions. There is a maximum of 64 entities that can be added. */
  AdminEntities?: EntityKey[];
  /** The set of configuration that only applies to catalog items. */
  Catalog?: CatalogSpecificConfig;
  /** A list of deep link formats. Up to 10 can be added. */
  DeepLinkFormats?: DeepLinkFormat[];
  /**
   * A list of display properties to index. Up to 5 mappings can be added per Display Property Type. More info on display
   * properties can be found here:
   * https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/catalog/content-types-tags-and-properties#displayproperties
   */
  DisplayPropertyIndexInfos?: DisplayPropertyIndexInfo[];
  /** The set of configuration that only applies to Files. */
  File?: FileConfig;
  /** The set of configuration that only applies to Images. */
  Image?: ImageConfig;
  /** Flag defining whether catalog is enabled. */
  IsCatalogEnabled: boolean;
  /**
   * A list of Platforms that can be applied to catalog items. Each platform can have a maximum character length of 40 and up
   * to 128 platforms can be listed.
   */
  Platforms?: string[];
  /** The set of configuration that only applies to Ratings and Reviews. */
  Review?: ReviewConfig;
  /** A set of player entity keys that are allowed to review content. There is a maximum of 128 entities that can be added. */
  ReviewerEntities?: EntityKey[];
  /** The set of configuration that only applies to user generated contents. */
  UserGeneratedContent?: UserGeneratedContentSpecificConfig;
}

export interface CatalogItem {
  /**
   * The alternate IDs associated with this item. An alternate ID can be set to &#39;FriendlyId&#39; or any of the supported
   * marketplace names.
   */
  AlternateIds?: CatalogAlternateId[];
  /** The set of content/files associated with this item. Up to 100 files can be added to an item. */
  Contents?: Content[];
  /** The client-defined type of the item. */
  ContentType?: string;
  /** The date and time when this item was created. */
  CreationDate?: string;
  /** The ID of the creator of this catalog item. */
  CreatorEntity?: EntityKey;
  /** The set of platform specific deep links for this item. */
  DeepLinks?: DeepLink[];
  /**
   * The Stack Id that will be used as default for this item in Inventory when an explicit one is not provided. This
   * DefaultStackId can be a static stack id or &#39;{guid}&#39;, which will generate a unique stack id for the item. If null,
   * Inventory&#39;s default stack id will be used.
   */
  DefaultStackId?: string;
  /**
   * A dictionary of localized descriptions. Key is language code and localized string is the value. The NEUTRAL locale is
   * required. Descriptions have a 10000 character limit per country code.
   */
  Description?: Record<string, string | null>;
  /**
   * Game specific properties for display purposes. This is an arbitrary JSON blob. The Display Properties field has a 10000
   * byte limit per item.
   */
  DisplayProperties?: any;
  /** The user provided version of the item for display purposes. Maximum character length of 50. */
  DisplayVersion?: string;
  /** The date of when the item will cease to be available. If not provided then the product will be available indefinitely. */
  EndDate?: string;
  /** The current ETag value that can be used for optimistic concurrency in the If-None-Match header. */
  ETag?: string;
  /** The unique ID of the item. */
  Id?: string;
  /**
   * The images associated with this item. Images can be thumbnails or screenshots. Up to 100 images can be added to an item.
   * Only .png, .jpg, .gif, and .bmp file types can be uploaded
   */
  Images?: Image[];
  /** Indicates if the item is hidden. */
  IsHidden?: boolean;
  /**
   * The item references associated with this item. For example, the items in a Bundle/Store/Subscription. Every item can
   * have up to 50 item references.
   */
  ItemReferences?: CatalogItemReference[];
  /**
   * A dictionary of localized keywords. Key is language code and localized list of keywords is the value. Keywords have a 50
   * character limit per keyword and up to 32 keywords can be added per country code.
   */
  Keywords?: Record<string, KeywordSet>;
  /** The date and time this item was last updated. */
  LastModifiedDate?: string;
  /** The moderation state for this item. */
  Moderation?: ModerationState;
  /** The platforms supported by this item. */
  Platforms?: string[];
  /** The prices the item can be purchased for. */
  PriceOptions?: CatalogPriceOptions;
  /** Rating summary for this item. */
  Rating?: Rating;
  /** The real price the item was purchased for per marketplace. */
  RealMoneyPriceDetails?: RealMoneyPriceDetails;
  /** The date of when the item will be available. If not provided then the product will appear immediately. */
  StartDate?: string;
  /** Optional details for stores items. */
  StoreDetails?: StoreDetails;
  /** The list of tags that are associated with this item. Up to 32 tags can be added to an item. */
  Tags?: string[];
  /**
   * A dictionary of localized titles. Key is language code and localized string is the value. The NEUTRAL locale is
   * required. Titles have a 512 character limit per country code.
   */
  Title?: Record<string, string | null>;
  /**
   * The high-level type of the item. The following item types are supported: bundle, catalogItem, currency, store, ugc,
   * subscription.
   */
  Type?: string;
}

export interface CatalogItemReference {
  /** The amount of the catalog item. */
  Amount?: number;
  /** The unique ID of the catalog item. */
  Id?: string;
  /** The prices the catalog item can be purchased for. */
  PriceOptions?: CatalogPriceOptions;
}

export interface CatalogPrice {
  /** The amounts of the catalog item price. Each price can have up to 15 item amounts. */
  Amounts?: CatalogPriceAmount[];
  /** The per-unit amount this price can be used to purchase. */
  UnitAmount?: number;
  /** The per-unit duration this price can be used to purchase. The maximum duration is 100 years. */
  UnitDurationInSeconds?: number;
}

export interface CatalogPriceAmount {
  /** The amount of the price. */
  Amount: number;
  /** The Item Id of the price. */
  ItemId?: string;
  /** Stack Id the client expects to use to purchase the item. */
  StackId?: string;
}

export interface CatalogPriceAmountOverride {
  /** The exact value that should be utilized in the override. */
  FixedValue?: number;
  /** The id of the item this override should utilize. */
  ItemId?: string;
  /**
   * The multiplier that will be applied to the base Catalog value to determine what value should be utilized in the
   * override.
   */
  Multiplier?: number;
}

export interface CatalogPriceOptions {
  /** Prices of the catalog item. An item can have up to 15 prices */
  Prices?: CatalogPrice[];
}

export interface CatalogPriceOptionsOverride {
  /** The prices utilized in the override. */
  Prices?: CatalogPriceOverride[];
}

export interface CatalogPriceOverride {
  /** The currency amounts utilized in the override for a singular price. */
  Amounts?: CatalogPriceAmountOverride[];
}

export interface CatalogSpecificConfig {
  /**
   * The set of content types that will be used for validation. Each content type can have a maximum character length of 40
   * and up to 128 types can be listed.
   */
  ContentTypes?: string[];
  /**
   * The set of tags that will be used for validation. Each tag can have a maximum character length of 32 and up to 1024 tags
   * can be listed.
   */
  Tags?: string[];
}

export interface CatalogView {
  /** Number of items to retrieve. If null, all applicable items are returned. */
  Count?: number;
  /** The date and time when this view was created. */
  CreationDate?: string;
  /** The current ETag value that can be used for optimistic concurrency. */
  ETag?: string;
  /**
   * The format to use when exporting the view file. Supported file formats are: Json, JsonLines, GZippedJson,
   * GZippedJsonLines
   */
  FileFormat?: ViewFileFormat;
  /** An OData filter used to refine the search query. */
  Filter?: string;
  /** An optional alternate friendly ID associated with this view. */
  FriendlyId?: string;
  /** The unique ID of the view. */
  Id?: string;
  /** Indicates whether the view should be generated for title use or for public use. */
  IsTitleView?: boolean;
  /** The localized languages to query and retreive, separated by commas (,). */
  Language?: string;
  /** The date and time this view was last updated. */
  LastModifiedDate?: string;
  /** Diagnostic information from the last time the view was generated. */
  LastViewDiagnostics?: CatalogViewDiagnostics;
  /**
   * An OData select query option used to augment the search results. If not defined, the default search result metadata will
   * be returned.
   */
  Select?: string;
  /** The store to restrict the search request to. */
  Store?: string;
  /** The URL of the view file. */
  Url?: string;
}

export interface CatalogViewDiagnostics {
  /** The last date and time when this view was generated. */
  GeneratedDate?: string;
  /** The last count of items included in the view. */
  ItemCount?: number;
  /** The last size of the view in bytes. */
  SizeInBytes?: number;
  /** The last status of the view. */
  Status?: CatalogViewStatus;
}

type CatalogViewStatus = "Unknown"
  | "Success"
  | "FileSizeExceeded"
  | "Error"
  | "StoreDoesNotExist"
  | "TransientError"
  | "PartialSuccess"
  | "Pending";

export interface CategoryRatingConfig {
  /** Name of the category. */
  Name?: string;
}

export interface CompleteVersionedCatalogUploadRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Version of the catalog. */
  Version?: string;
}

export interface CompleteVersionedCatalogUploadResponse extends IPlayFabResultCommon {
  /** Version of the catalog. */
  Version?: string;
}

type ConcernCategory = "None"
  | "OffensiveContent"
  | "ChildExploitation"
  | "MalwareOrVirus"
  | "PrivacyConcerns"
  | "MisleadingApp"
  | "PoorPerformance"
  | "ReviewResponse"
  | "SpamAdvertising"
  | "Profanity";

export interface Content {
  /** The content unique ID. */
  Id?: string;
  /**
   * The maximum client version that this content is compatible with. Client Versions can be up to 3 segments separated by
   * periods(.) and each segment can have a maximum value of 65535.
   */
  MaxClientVersion?: string;
  /**
   * The minimum client version that this content is compatible with. Client Versions can be up to 3 segments separated by
   * periods(.) and each segment can have a maximum value of 65535.
   */
  MinClientVersion?: string;
  /**
   * The list of tags that are associated with this content. Tags must be defined in the Catalog Config before being used in
   * content.
   */
  Tags?: string[];
  /** The client-defined type of the content. Content Types must be defined in the Catalog Config before being used. */
  Type?: string;
  /** The Azure CDN URL for retrieval of the catalog item binary content. */
  Url?: string;
}

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

export interface CreateDraftItemRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Metadata describing the new catalog item to be created. */
  Item?: CatalogItem;
  /** Whether the item should be published immediately. This value is optional, defaults to false. */
  Publish: boolean;
}

export interface CreateDraftItemResponse extends IPlayFabResultCommon {
  /** Updated metadata describing the catalog item just created. */
  Item?: CatalogItem;
}

export interface CreateUploadUrlsRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Description of the files to be uploaded by the client. */
  Files?: UploadInfo[];
}

export interface CreateUploadUrlsResponse extends IPlayFabResultCommon {
  /** List of URLs metadata for the files to be uploaded by the client. */
  UploadUrls?: UploadUrlMetadata[];
}

export interface CreateVersionedCatalogUploadURLRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Version of the catalog. */
  Version?: string;
}

export interface CreateVersionedCatalogUploadURLResponse extends IPlayFabResultCommon {
  /** Write-only Url for uploading the versioned catalog. */
  Url?: string;
  /** Version of the catalog. */
  Version?: string;
}

export interface CreateViewRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Metadata describing the new catalog view to be created. */
  View?: CatalogView;
}

export interface CreateViewResponse extends IPlayFabResultCommon {
  /** Updated metadata describing the catalog view just created. */
  View?: CatalogView;
}

export interface DeepLink {
  /** Target platform for this deep link. */
  Platform?: string;
  /** The deep link for this platform. */
  Url?: string;
}

export interface DeepLinkFormat {
  /** The format of the deep link to return. The format should contain &#39;{id}&#39; to represent where the item ID should be placed. */
  Format?: string;
  /** The target platform for the deep link. */
  Platform?: string;
}

export interface DeleteEntityItemReviewsRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The entity to perform this action on. */
  Entity?: EntityKey;
}

export interface DeleteEntityItemReviewsResponse extends IPlayFabResultCommon {
}

export interface DeleteInventoryCollectionRequest extends IPlayFabRequestCommon {
  /** The inventory collection id the request applies to. */
  CollectionId?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The entity the request is about. Set to the caller by default. */
  Entity?: EntityKey;
  /**
   * ETags are used for concurrency checking when updating resources. More information about using ETags can be found here:
   * https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/catalog/etags
   */
  ETag?: string;
}

export interface DeleteInventoryCollectionResponse extends IPlayFabResultCommon {
}

export interface DeleteInventoryItemsOperation {
  /** The inventory item the operation applies to. */
  Item?: InventoryItemReference;
}

export interface DeleteInventoryItemsRequest extends IPlayFabRequestCommon {
  /**
   * The id of the entity&#39;s collection to perform this action on. (Default=&quot;default&quot;). The number of inventory collections is
   * unlimited.
   */
  CollectionId?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The entity to perform this action on. */
  Entity?: EntityKey;
  /**
   * ETags are used for concurrency checking when updating resources. More information about using ETags can be found here:
   * https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/catalog/etags
   */
  ETag?: string;
  /**
   * The Idempotency ID for this request. Idempotency IDs can be used to prevent operation replay in the medium term but will
   * be garbage collected eventually.
   */
  IdempotencyId?: string;
  /** The inventory item the request applies to. */
  Item?: InventoryItemReference;
}

export interface DeleteInventoryItemsResponse extends IPlayFabResultCommon {
  /** ETags are used for concurrency checking when updating resources. */
  ETag?: string;
  /** The idempotency id used in the request. */
  IdempotencyId?: string;
  /** The ids of transactions that occurred as a result of the request. */
  TransactionIds?: string[];
}

export interface DeleteItemRequest extends IPlayFabRequestCommon {
  /** An alternate ID associated with this item. */
  AlternateId?: CatalogAlternateId;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The entity to perform this action on. */
  Entity?: EntityKey;
  /** The unique ID of the item. */
  Id?: string;
}

export interface DeleteItemResponse extends IPlayFabResultCommon {
}

export interface DeleteVersionedCatalogRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Version of the catalog. */
  Version?: string;
}

export interface DeleteViewRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Friendly ID associated with the view. Mutually exclusive with Id. */
  FriendlyId?: string;
  /** The unique ID of the item. Mutually exclusive with FriendlyId. */
  Id?: string;
}

export interface DeleteViewResponse extends IPlayFabResultCommon {
}

export interface DisplayPropertyIndexInfo {
  /** The property name in the &#39;DisplayProperties&#39; property to be indexed. */
  Name?: string;
  /** The type of the property to be indexed. */
  Type?: DisplayPropertyType;
}

type DisplayPropertyType = "None"
  | "QueryDateTime"
  | "QueryDouble"
  | "QueryString"
  | "SearchString";

export interface EmptyResponse extends IPlayFabResultCommon {
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

export interface ExecuteInventoryOperationsRequest extends IPlayFabRequestCommon {
  /**
   * The id of the entity&#39;s collection to perform this action on. (Default=&quot;default&quot;). The number of inventory collections is
   * unlimited.
   */
  CollectionId?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The entity to perform this action on. */
  Entity?: EntityKey;
  /**
   * ETags are used for concurrency checking when updating resources. More information about using ETags can be found here:
   * https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/catalog/etags
   */
  ETag?: string;
  /**
   * The Idempotency ID for this request. Idempotency IDs can be used to prevent operation replay in the medium term but will
   * be garbage collected eventually.
   */
  IdempotencyId?: string;
  /**
   * The operations to run transactionally. The operations will be executed in-order sequentially and will succeed or fail as
   * a batch. Up to 50 operations can be added.
   */
  Operations?: InventoryOperation[];
}

export interface ExecuteInventoryOperationsResponse extends IPlayFabResultCommon {
  /**
   * ETags are used for concurrency checking when updating resources. More information about using ETags can be found here:
   * https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/catalog/etags
   */
  ETag?: string;
  /** The idempotency id used in the request. */
  IdempotencyId?: string;
  /** The ids of the transactions that occurred as a result of the request. */
  TransactionIds?: string[];
}

export interface ExecuteTransferOperationsRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The inventory collection id the request is transferring from. (Default=&quot;default&quot;) */
  GivingCollectionId?: string;
  /** The entity the request is transferring from. Set to the caller by default. */
  GivingEntity?: EntityKey;
  /**
   * ETags are used for concurrency checking when updating resources. More information about using ETags can be found here:
   * https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/catalog/etags
   */
  GivingETag?: string;
  /** The idempotency id for the request. */
  IdempotencyId?: string;
  /**
   * The transfer operations to run transactionally. The operations will be executed in-order sequentially and will succeed
   * or fail as a batch. Up to 50 operations can be added.
   */
  Operations?: TransferInventoryItemsOperation[];
  /** The inventory collection id the request is transferring to. (Default=&quot;default&quot;) */
  ReceivingCollectionId?: string;
  /** The entity the request is transferring to. Set to the caller by default. */
  ReceivingEntity?: EntityKey;
}

export interface ExecuteTransferOperationsResponse extends IPlayFabResultCommon {
  /**
   * ETags are used for concurrency checking when updating resources (before transferring from). This value will be empty if
   * the operation has not completed yet. More information about using ETags can be found here:
   * https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/catalog/etags
   */
  GivingETag?: string;
  /** The ids of transactions that occurred as a result of the request&#39;s giving action. */
  GivingTransactionIds?: string[];
  /** The Idempotency ID for this request. */
  IdempotencyId?: string;
  /**
   * The transfer operation status. Possible values are &#39;InProgress&#39; or &#39;Completed&#39;. If the operation has completed, the
   * response code will be 200. Otherwise, it will be 202.
   */
  OperationStatus?: string;
  /**
   * The token that can be used to get the status of the transfer operation. This will only have a value if OperationStatus
   * is &#39;InProgress&#39;.
   */
  OperationToken?: string;
  /**
   * ETags are used for concurrency checking when updating resources (before transferring to). This value will be empty if
   * the operation has not completed yet.
   */
  ReceivingETag?: string;
  /** The ids of transactions that occurred as a result of the request&#39;s receiving action. */
  ReceivingTransactionIds?: string[];
}

export interface ExportVersionedCatalogRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Whether or not the export should read from BlobCatalog. */
  ReadFromBlobCatalog: boolean;
  /** Version of the catalog. */
  Version?: string;
}

export interface FileConfig {
  /**
   * The set of content types that will be used for validation. Each content type can have a maximum character length of 40
   * and up to 128 types can be listed.
   */
  ContentTypes?: string[];
  /**
   * The set of tags that will be used for validation. Each tag can have a maximum character length of 32 and up to 1024 tags
   * can be listed.
   */
  Tags?: string[];
}

export interface FilterOptions {
  /**
   * The OData filter utilized. Mutually exclusive with &#39;IncludeAllItems&#39;. More info about Filter Complexity limits can be
   * found here: https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/catalog/search#limits
   */
  Filter?: string;
  /** The flag that overrides the filter and allows for returning all catalog items. Mutually exclusive with &#39;Filter&#39;. */
  IncludeAllItems?: boolean;
}

export interface GetCatalogConfigRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
}

export interface GetCatalogConfigResponse extends IPlayFabResultCommon {
  /** The catalog configuration. */
  Config?: CatalogConfig;
}

export interface GetDraftItemRequest extends IPlayFabRequestCommon {
  /** An alternate ID associated with this item. */
  AlternateId?: CatalogAlternateId;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The entity to perform this action on. */
  Entity?: EntityKey;
  /** The unique ID of the item. */
  Id?: string;
}

export interface GetDraftItemResponse extends IPlayFabResultCommon {
  /** Full metadata of the catalog item requested. */
  Item?: CatalogItem;
}

export interface GetDraftItemsRequest extends IPlayFabRequestCommon {
  /** List of item alternate IDs. */
  AlternateIds?: CatalogAlternateId[];
  /**
   * An opaque token used to retrieve the next page of items created by the caller, if any are available. Should be null on
   * initial request.
   */
  ContinuationToken?: string;
  /** Number of items to retrieve. This value is optional. Default value is 10. */
  Count?: number;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The entity to perform this action on. */
  Entity?: EntityKey;
  /** List of Item Ids. */
  Ids?: string[];
}

export interface GetDraftItemsResponse extends IPlayFabResultCommon {
  /** An opaque token used to retrieve the next page of items, if any are available. */
  ContinuationToken?: string;
  /** A set of items created by the entity. */
  Items?: CatalogItem[];
}

export interface GetEntityDraftItemsRequest extends IPlayFabRequestCommon {
  /**
   * An opaque token used to retrieve the next page of items created by the caller, if any are available. Should be null on
   * initial request.
   */
  ContinuationToken?: string;
  /** Number of items to retrieve. This value is optional. Default value is 10. */
  Count: number;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The entity to perform this action on. */
  Entity?: EntityKey;
  /**
   * OData Filter to refine the items returned. CatalogItem properties &#39;type&#39; can be used in the filter. For example: &quot;type
   * eq &#39;ugc&#39;&quot;
   */
  Filter?: string;
}

export interface GetEntityDraftItemsResponse extends IPlayFabResultCommon {
  /** An opaque token used to retrieve the next page of items, if any are available. */
  ContinuationToken?: string;
  /** A set of items created by the entity. */
  Items?: CatalogItem[];
}

export interface GetEntityItemReviewRequest extends IPlayFabRequestCommon {
  /** An alternate ID associated with this item. */
  AlternateId?: CatalogAlternateId;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The entity to perform this action on. */
  Entity?: EntityKey;
  /** The unique ID of the item. */
  Id?: string;
}

export interface GetEntityItemReviewResponse extends IPlayFabResultCommon {
  /** The review the entity submitted for the requested item. */
  Review?: Review;
}

export interface GetInventoryCollectionIdsRequest extends IPlayFabRequestCommon {
  /** An opaque token used to retrieve the next page of collection ids, if any are available. */
  ContinuationToken?: string;
  /** Number of items to retrieve. This value is optional. The default value is 10 */
  Count: number;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The entity the request is about. Set to the caller by default. */
  Entity?: EntityKey;
}

export interface GetInventoryCollectionIdsResponse extends IPlayFabResultCommon {
  /** The requested inventory collection ids. */
  CollectionIds?: string[];
  /** An opaque token used to retrieve the next page of collection ids, if any are available. */
  ContinuationToken?: string;
}

export interface GetInventoryItemsRequest extends IPlayFabRequestCommon {
  /** The id of the entity&#39;s collection to perform this action on. (Default=&quot;default&quot;) */
  CollectionId?: string;
  /**
   * An opaque token used to retrieve the next page of items in the inventory, if any are available. Should be null on
   * initial request.
   */
  ContinuationToken?: string;
  /** Number of items to retrieve. This value is optional. Maximum page size is 50. The default value is 10 */
  Count: number;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The entity to perform this action on. */
  Entity?: EntityKey;
  /**
   * OData Filter to refine the items returned. InventoryItem properties &#39;type&#39;, &#39;id&#39;, and &#39;stackId&#39; can be used in the
   * filter. For example: &quot;type eq &#39;currency&#39;&quot;
   */
  Filter?: string;
}

export interface GetInventoryItemsResponse extends IPlayFabResultCommon {
  /** An opaque token used to retrieve the next page of items, if any are available. */
  ContinuationToken?: string;
  /**
   * ETags are used for concurrency checking when updating resources. More information about using ETags can be found here:
   * https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/catalog/etags
   */
  ETag?: string;
  /** The requested inventory items. */
  Items?: InventoryItem[];
}

export interface GetInventoryOperationStatusRequest extends IPlayFabRequestCommon {
  /** The id of the entity&#39;s collection to perform this action on. (Default=&quot;default&quot;) */
  CollectionId?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The entity to perform this action on. */
  Entity?: EntityKey;
}

export interface GetInventoryOperationStatusResponse extends IPlayFabResultCommon {
  /** The inventory operation status. */
  OperationStatus?: string;
}

export interface GetItemContainersRequest extends IPlayFabRequestCommon {
  /** An alternate ID associated with this item. */
  AlternateId?: CatalogAlternateId;
  /**
   * An opaque token used to retrieve the next page of items in the inventory, if any are available. Should be null on
   * initial request.
   */
  ContinuationToken?: string;
  /** Number of items to retrieve. This value is optional. Default value is 10. */
  Count: number;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The entity to perform this action on. */
  Entity?: EntityKey;
  /** The unique ID of the item. */
  Id?: string;
}

export interface GetItemContainersResponse extends IPlayFabResultCommon {
  /** List of Bundles and Stores containing the requested items. */
  Containers?: CatalogItem[];
  /** An opaque token used to retrieve the next page of items, if any are available. */
  ContinuationToken?: string;
}

export interface GetItemModerationStateRequest extends IPlayFabRequestCommon {
  /** An alternate ID associated with this item. */
  AlternateId?: CatalogAlternateId;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The unique ID of the item. */
  Id?: string;
}

export interface GetItemModerationStateResponse extends IPlayFabResultCommon {
  /** The current moderation state for the requested item. */
  State?: ModerationState;
}

export interface GetItemPublishStatusRequest extends IPlayFabRequestCommon {
  /** An alternate ID associated with this item. */
  AlternateId?: CatalogAlternateId;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The entity to perform this action on. */
  Entity?: EntityKey;
  /** The unique ID of the item. */
  Id?: string;
}

export interface GetItemPublishStatusResponse extends IPlayFabResultCommon {
  /** High level status of the published item. */
  Result?: PublishResult;
  /** Descriptive message about the current status of the publish. */
  StatusMessage?: string;
}

export interface GetItemRequest extends IPlayFabRequestCommon {
  /** An alternate ID associated with this item. */
  AlternateId?: CatalogAlternateId;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The entity to perform this action on. */
  Entity?: EntityKey;
  /** The unique ID of the item. */
  Id?: string;
}

export interface GetItemResponse extends IPlayFabResultCommon {
  /** The item result. */
  Item?: CatalogItem;
}

export interface GetItemReviewsRequest extends IPlayFabRequestCommon {
  /** An alternate ID associated with this item. */
  AlternateId?: CatalogAlternateId;
  /** An opaque token used to retrieve the next page of items, if any are available. */
  ContinuationToken?: string;
  /** Number of items to retrieve. This value is optional. Default value is 10. */
  Count: number;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The unique ID of the item. */
  Id?: string;
  /**
   * An OData orderBy used to order the results of the query. Possible values are Helpfulness, Rating, and Submitted (For
   * example: &quot;Submitted desc&quot;)
   */
  OrderBy?: string;
}

export interface GetItemReviewsResponse extends IPlayFabResultCommon {
  /** An opaque token used to retrieve the next page of items, if any are available. */
  ContinuationToken?: string;
  /** The paginated set of results. */
  Reviews?: Review[];
}

export interface GetItemReviewSummaryRequest extends IPlayFabRequestCommon {
  /** An alternate ID associated with this item. */
  AlternateId?: CatalogAlternateId;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The unique ID of the item. */
  Id?: string;
}

export interface GetItemReviewSummaryResponse extends IPlayFabResultCommon {
  /** The least favorable review for this item. */
  LeastFavorableReview?: Review;
  /** The most favorable review for this item. */
  MostFavorableReview?: Review;
  /** The summary of ratings associated with this item. */
  Rating?: Rating;
  /** The total number of reviews associated with this item. */
  ReviewsCount: number;
}

export interface GetItemsRequest extends IPlayFabRequestCommon {
  /** List of item alternate IDs. */
  AlternateIds?: CatalogAlternateId[];
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The entity to perform this action on. */
  Entity?: EntityKey;
  /** List of Item Ids. */
  Ids?: string[];
}

export interface GetItemsResponse extends IPlayFabResultCommon {
  /** Metadata of set of items. */
  Items?: CatalogItem[];
}

export interface GetMicrosoftStoreAccessTokensRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
}

export interface GetMicrosoftStoreAccessTokensResponse extends IPlayFabResultCommon {
  /**
   * The collections access token for calling https://onestore.microsoft.com/b2b/keys/create/collections to obtain a
   * CollectionsIdKey for the user
   */
  CollectionsAccessToken?: string;
  /** The date the collections access token expires */
  CollectionsAccessTokenExpirationDate: string;
}

export interface GetTransactionHistoryRequest extends IPlayFabRequestCommon {
  /** The id of the entity&#39;s collection to perform this action on. (Default=&quot;default&quot;) */
  CollectionId?: string;
  /** An opaque token used to retrieve the next page of items, if any are available. Should be null on initial request. */
  ContinuationToken?: string;
  /** Number of items to retrieve. This value is optional. The default value is 10 */
  Count: number;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The entity to perform this action on. */
  Entity?: EntityKey;
  /**
   * An OData filter used to refine the TransactionHistory. Transaction properties &#39;timestamp&#39;, &#39;transactionid&#39;, &#39;apiname&#39;
   * and &#39;operationtype&#39; can be used in the filter. Properties &#39;transactionid&#39;, &#39;apiname&#39;, and &#39;operationtype&#39; cannot be used
   * together in a single request. The &#39;timestamp&#39; property can be combined with &#39;apiname&#39; or &#39;operationtype&#39; in a single
   * request. For example: &quot;timestamp ge 2023-06-20T23:30Z&quot; or &quot;transactionid eq &#39;10&#39;&quot; or &quot;(timestamp ge 2023-06-20T23:30Z)
   * and (apiname eq &#39;AddInventoryItems&#39;)&quot;. By default, a 6 month timespan from the current date is used.
   */
  Filter?: string;
  /**
   * An OData orderby to order TransactionHistory results. The only supported values are &#39;timestamp asc&#39; or &#39;timestamp desc&#39;.
   * Default orderby is &#39;timestamp asc&#39;
   */
  OrderBy?: string;
}

export interface GetTransactionHistoryResponse extends IPlayFabResultCommon {
  /** An opaque token used to retrieve the next page of items, if any are available. Should be null on initial request. */
  ContinuationToken?: string;
  /** The requested inventory transactions. */
  Transactions?: Transaction[];
}

export interface GetVersionedCatalogItemRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Id of the item. */
  Id?: string;
  /** Version of the catalog. */
  Version?: string;
}

export interface GetVersionedCatalogItemResponse extends IPlayFabResultCommon {
  /** The versioned catalog item. */
  Item?: VersionedCatalogItem;
}

export interface GetVersionedCatalogUploadStatusRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Version of the catalog. */
  Version?: string;
}

export interface GetVersionedCatalogUploadStatusResponse extends IPlayFabResultCommon {
  /** Status of the upload. */
  Status?: string;
}

export interface GetViewRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The entity to perform this action on. */
  Entity?: EntityKey;
  /** Friendly ID associated with the view. Mutually exclusive with Id. */
  FriendlyId?: string;
  /** The unique ID of the view. Mutually exclusive with FriendlyId. */
  Id?: string;
}

export interface GetViewResponse extends IPlayFabResultCommon {
  /** Metadata defining the view. */
  View?: CatalogView;
}

export interface GetViewsRequest extends IPlayFabRequestCommon {
  /**
   * An opaque token used to retrieve the next page of views created by the caller, if any are available. Should be null on
   * initial request.
   */
  ContinuationToken?: string;
  /** Number of views to retrieve. This value is optional. Default value is 10. */
  Count?: number;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The entity to perform this action on. */
  Entity?: EntityKey;
}

export interface GetViewsResponse extends IPlayFabResultCommon {
  /** An opaque token used to retrieve the next page of items, if any are available. */
  ContinuationToken?: string;
  /** List of metadata defining the views. */
  Views?: CatalogView[];
}

export interface GooglePlayProductPurchase {
  /** The Product ID (SKU) of the InApp product purchased from the Google Play store. */
  ProductId?: string;
  /** The token provided to the player&#39;s device when the product was purchased */
  Token?: string;
}

type HelpfulnessVote = "None"
  | "UnHelpful"
  | "Helpful";

export interface IActionResult extends IPlayFabResultCommon {
}

export interface Image {
  /** The image unique ID. */
  Id?: string;
  /**
   * The client-defined tag associated with this image. Tags must be defined in the Catalog Config before being used in
   * images
   */
  Tag?: string;
  /** Images can be defined as either a &quot;thumbnail&quot; or &quot;screenshot&quot;. There can only be one &quot;thumbnail&quot; image per item. */
  Type?: string;
  /** The URL for retrieval of the image. */
  Url?: string;
}

export interface ImageConfig {
  /**
   * The set of tags that will be used for validation. Each tag can have a maximum character length of 32 and up to 1024 tags
   * can be listed.
   */
  Tags?: string[];
}

export interface InitialValues {
  /** Game specific properties for display purposes. The Display Properties field has a 1000 byte limit. */
  DisplayProperties?: any;
}

export interface InventoryItem {
  /** The amount of the item. */
  Amount?: number;
  /**
   * Game specific properties for display purposes. This is an arbitrary JSON blob. The Display Properties field has a 1000
   * byte limit.
   */
  DisplayProperties?: any;
  /** Only used for subscriptions. The date of when the item will expire in UTC. */
  ExpirationDate?: string;
  /** The id of the item. This should correspond to the item id in the catalog. */
  Id?: string;
  /** The stack id of the item. */
  StackId?: string;
  /** The type of the item. This should correspond to the item type in the catalog. */
  Type?: string;
}

export interface InventoryItemReference {
  /** The inventory item alternate id the request applies to. */
  AlternateId?: AlternateId;
  /** The inventory item id the request applies to. */
  Id?: string;
  /** The inventory stack id the request should redeem to. (Default=&quot;default&quot;) */
  StackId?: string;
}

export interface InventoryOperation {
  /** The add operation. */
  Add?: AddInventoryItemsOperation;
  /** The delete operation. */
  Delete?: DeleteInventoryItemsOperation;
  /** The purchase operation. */
  Purchase?: PurchaseInventoryItemsOperation;
  /** The subtract operation. */
  Subtract?: SubtractInventoryItemsOperation;
  /** The transfer operation. */
  Transfer?: TransferInventoryItemsOperation;
  /** The update operation. */
  Update?: UpdateInventoryItemsOperation;
}

export interface KeywordSet {
  /** A list of localized keywords. */
  Values?: string[];
}

export interface ListVersionedCatalogsRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
}

export interface ListVersionedCatalogsResponse extends IPlayFabResultCommon {
  /** The list of versioned catalogs. */
  VersionedCatalogs?: VersionedCatalog[];
  /** The source from where the versioned catalogs are coming from. */
  VersionedCatalogsSource?: string;
}

export interface ModerationState {
  /** The date and time this moderation state was last updated. */
  LastModifiedDate?: string;
  /** The current stated reason for the associated item being moderated. */
  Reason?: string;
  /** The current moderation status for the associated item. */
  Status?: ModerationStatus;
}

type ModerationStatus = "Unknown"
  | "AwaitingModeration"
  | "Approved"
  | "Rejected";

export interface Permissions {
  /**
   * The list of ids of Segments that the a player can be in to purchase from the store. When a value is provided, the player
   * must be in at least one of the segments listed for the purchase to be allowed.
   */
  SegmentIds?: string[];
}

export interface PublishDraftItemRequest extends IPlayFabRequestCommon {
  /** An alternate ID associated with this item. */
  AlternateId?: CatalogAlternateId;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The entity to perform this action on. */
  Entity?: EntityKey;
  /**
   * ETag of the catalog item to published from the working catalog to the public catalog. Used for optimistic concurrency.
   * If the provided ETag does not match the ETag in the current working catalog, the request will be rejected. If not
   * provided, the current version of the document in the working catalog will be published.
   */
  ETag?: string;
  /** The unique ID of the item. */
  Id?: string;
}

export interface PublishDraftItemResponse extends IPlayFabResultCommon {
}

type PublishResult = "Unknown"
  | "Pending"
  | "Succeeded"
  | "Failed"
  | "Canceled";

export interface PurchaseInventoryItemsOperation {
  /** The amount to purchase. */
  Amount?: number;
  /**
   * Indicates whether stacks reduced to an amount of 0 during the operation should be deleted from the inventory. (Default =
   * false)
   */
  DeleteEmptyStacks: boolean;
  /** The duration to purchase. */
  DurationInSeconds?: number;
  /** The inventory item the operation applies to. */
  Item?: InventoryItemReference;
  /** The values to apply to a stack newly created by this operation. */
  NewStackValues?: InitialValues;
  /**
   * The per-item price the item is expected to be purchased at. This must match a value configured in the Catalog or
   * specified Store.
   */
  PriceAmounts?: PurchasePriceAmount[];
  /** The id of the Store to purchase the item from. */
  StoreId?: string;
}

export interface PurchaseInventoryItemsRequest extends IPlayFabRequestCommon {
  /** The amount to purchase. */
  Amount?: number;
  /**
   * The id of the entity&#39;s collection to perform this action on. (Default=&quot;default&quot;). The number of inventory collections is
   * unlimited.
   */
  CollectionId?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /**
   * Indicates whether stacks reduced to an amount of 0 during the request should be deleted from the inventory.
   * (Default=false)
   */
  DeleteEmptyStacks: boolean;
  /** The duration to purchase. */
  DurationInSeconds?: number;
  /** The entity to perform this action on. */
  Entity?: EntityKey;
  /**
   * ETags are used for concurrency checking when updating resources. More information about using ETags can be found here:
   * https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/catalog/etags
   */
  ETag?: string;
  /**
   * The Idempotency ID for this request. Idempotency IDs can be used to prevent operation replay in the medium term but will
   * be garbage collected eventually.
   */
  IdempotencyId?: string;
  /** The inventory item the request applies to. */
  Item?: InventoryItemReference;
  /** The values to apply to a stack newly created by this request. */
  NewStackValues?: InitialValues;
  /**
   * The per-item price the item is expected to be purchased at. This must match a value configured in the Catalog or
   * specified Store.
   */
  PriceAmounts?: PurchasePriceAmount[];
  /** Details the overrides used in a purchase operation. */
  PurchaseOverrides?: PurchaseOverridesInfo;
  /** The id of the Store to purchase the item from. */
  StoreId?: string;
}

export interface PurchaseInventoryItemsResponse extends IPlayFabResultCommon {
  /**
   * ETags are used for concurrency checking when updating resources. More information about using ETags can be found here:
   * https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/catalog/etags
   */
  ETag?: string;
  /** The idempotency id used in the request. */
  IdempotencyId?: string;
  /** The ids of transactions that occurred as a result of the request. */
  TransactionIds?: string[];
}

export interface PurchaseOverridesInfo {
}

export interface PurchasePriceAmount {
  /** The amount of the inventory item to use in the purchase . */
  Amount: number;
  /** The inventory item id to use in the purchase . */
  ItemId?: string;
  /** The inventory stack id the to use in the purchase. Set to &quot;default&quot; by default */
  StackId?: string;
}

export interface Rating {
  /** The average rating for this item. */
  Average?: number;
  /** The total count of 1 star ratings for this item. */
  Count1Star?: number;
  /** The total count of 2 star ratings for this item. */
  Count2Star?: number;
  /** The total count of 3 star ratings for this item. */
  Count3Star?: number;
  /** The total count of 4 star ratings for this item. */
  Count4Star?: number;
  /** The total count of 5 star ratings for this item. */
  Count5Star?: number;
  /** The total count of ratings for this item. */
  TotalCount?: number;
}

export interface RealMoneyPriceDetails {
  /** The &#39;AppleAppStore&#39; price amount per CurrencyCode. &#39;USD&#39; supported only. */
  AppleAppStorePrices?: Record<string, number>;
  /** The &#39;GooglePlay&#39; price amount per CurrencyCode. &#39;USD&#39; supported only. */
  GooglePlayPrices?: Record<string, number>;
  /** The &#39;MicrosoftStore&#39; price amount per CurrencyCode. &#39;USD&#39; supported only. */
  MicrosoftStorePrices?: Record<string, number>;
  /** The &#39;NintendoEShop&#39; price amount per CurrencyCode. &#39;USD&#39; supported only. */
  NintendoEShopPrices?: Record<string, number>;
  /** The &#39;PlayStationStore&#39; price amount per CurrencyCode. &#39;USD&#39; supported only. */
  PlayStationStorePrices?: Record<string, number>;
  /** The &#39;Steam&#39; price amount per CurrencyCode. &#39;USD&#39; supported only. */
  SteamPrices?: Record<string, number>;
}

export interface RedeemAppleAppStoreInventoryItemsRequest extends IPlayFabRequestCommon {
  /** The id of the entity&#39;s collection to perform this action on. (Default=&quot;default&quot;) */
  CollectionId?: string;
  /** The country code of the real money transaction. */
  CountryCode?: CountryCode;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The entity to perform this action on. */
  Entity?: EntityKey;
  /**
   * The inventory items to redeem. These items are required to have an alternate id that corresponds to the marketplace to
   * redeem from.
   */
  Items?: InventoryItemReference[];
  /** The receipt provided by the Apple marketplace upon successful purchase. */
  Receipt?: string;
}

export interface RedeemAppleAppStoreInventoryItemsResponse extends IPlayFabResultCommon {
  /** The list of failed redemptions from the external marketplace. */
  Failed?: RedemptionFailure[];
  /** The list of successful redemptions from the external marketplace. */
  Succeeded?: RedemptionSuccess[];
  /** The Transaction IDs associated with the inventory modifications */
  TransactionIds?: string[];
}

export interface RedeemGooglePlayInventoryItemsRequest extends IPlayFabRequestCommon {
  /** The id of the entity&#39;s collection to perform this action on. (Default=&quot;default&quot;) */
  CollectionId?: string;
  /** The country code of the real money transaction. */
  CountryCode?: CountryCode;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The entity to perform this action on. */
  Entity?: EntityKey;
  /**
   * The inventory items to redeem. These items are required to have an alternate id that corresponds to the marketplace to
   * redeem from.
   */
  Items?: InventoryItemReference[];
  /** The list of purchases to redeem */
  Purchases?: GooglePlayProductPurchase[];
}

export interface RedeemGooglePlayInventoryItemsResponse extends IPlayFabResultCommon {
  /** The list of failed redemptions from the external marketplace. */
  Failed?: RedemptionFailure[];
  /** The list of successful redemptions from the external marketplace. */
  Succeeded?: RedemptionSuccess[];
  /** The Transaction IDs associated with the inventory modifications */
  TransactionIds?: string[];
}

export interface RedeemMicrosoftStoreInventoryItemsRequest extends IPlayFabRequestCommon {
  /** The id of the entity&#39;s collection to perform this action on. (Default=&quot;default&quot;) */
  CollectionId?: string;
  /** The OneStore Collections Id Key used for AAD authentication. */
  CollectionsIdKey?: string;
  /** The country code of the real money transaction. */
  CountryCode?: CountryCode;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The entity to perform this action on. */
  Entity?: EntityKey;
  /**
   * The inventory items to redeem. These items are required to have an alternate id that corresponds to the marketplace to
   * redeem from.
   */
  Items?: InventoryItemReference[];
  /**
   * Xbox Token used for delegated business partner authentication. Token provided by the Xbox Live SDK method
   * GetTokenAndSignatureAsync(&quot;POST&quot;, &quot;https://playfabapi.com/&quot;, &quot;&quot;).
   */
  XboxToken?: string;
}

export interface RedeemMicrosoftStoreInventoryItemsResponse extends IPlayFabResultCommon {
  /** The list of failed redemptions from the external marketplace. */
  Failed?: RedemptionFailure[];
  /** The list of successful redemptions from the external marketplace. */
  Succeeded?: RedemptionSuccess[];
  /** The Transaction IDs associated with the inventory modifications */
  TransactionIds?: string[];
}

export interface RedeemNintendoEShopInventoryItemsRequest extends IPlayFabRequestCommon {
  /** The id of the entity&#39;s collection to perform this action on. (Default=&quot;default&quot;) */
  CollectionId?: string;
  /** The country code of the real money transaction. */
  CountryCode?: CountryCode;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The entity to perform this action on. */
  Entity?: EntityKey;
  /**
   * The inventory items to redeem. These items are required to have an alternate id that corresponds to the marketplace to
   * redeem from.
   */
  Items?: InventoryItemReference[];
  /** The Nintendo provided token authorizing redemption */
  NintendoServiceAccountIdToken?: string;
}

export interface RedeemNintendoEShopInventoryItemsResponse extends IPlayFabResultCommon {
  /** The list of failed redemptions from the external marketplace. */
  Failed?: RedemptionFailure[];
  /** The list of successful redemptions from the external marketplace. */
  Succeeded?: RedemptionSuccess[];
  /** The Transaction IDs associated with the inventory modifications */
  TransactionIds?: string[];
}

export interface RedeemPlayStationStoreInventoryItemsRequest extends IPlayFabRequestCommon {
  /** Auth code returned by PlayStation :tm: Network OAuth system. */
  AuthorizationCode?: string;
  /** The id of the entity&#39;s collection to perform this action on. (Default=&quot;default&quot;) */
  CollectionId?: string;
  /** The country code of the real money transaction. */
  CountryCode?: CountryCode;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The entity to perform this action on. */
  Entity?: EntityKey;
  /**
   * The inventory items to redeem. These items are required to have an alternate id that corresponds to the marketplace to
   * redeem from.
   */
  Items?: InventoryItemReference[];
  /** Redirect URI supplied to PlayStation :tm: Network when requesting an auth code. */
  RedirectUri?: string;
  /** Optional Service Label to pass into the request. */
  ServiceLabel?: string;
}

export interface RedeemPlayStationStoreInventoryItemsResponse extends IPlayFabResultCommon {
  /** The list of failed redemptions from the external marketplace. */
  Failed?: RedemptionFailure[];
  /** The list of successful redemptions from the external marketplace. */
  Succeeded?: RedemptionSuccess[];
  /** The Transaction IDs associated with the inventory modifications */
  TransactionIds?: string[];
}

export interface RedeemSteamInventoryItemsRequest extends IPlayFabRequestCommon {
  /** The id of the entity&#39;s collection to perform this action on. (Default=&quot;default&quot;) */
  CollectionId?: string;
  /** The country code of the real money transaction. */
  CountryCode?: CountryCode;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The entity to perform this action on. */
  Entity?: EntityKey;
  /**
   * The inventory items to redeem. These items are required to have an alternate id that corresponds to the marketplace to
   * redeem from.
   */
  Items?: InventoryItemReference[];
}

export interface RedeemSteamInventoryItemsResponse extends IPlayFabResultCommon {
  /** The list of failed redemptions from the external marketplace. */
  Failed?: RedemptionFailure[];
  /** The list of successful redemptions from the external marketplace. */
  Succeeded?: RedemptionSuccess[];
  /** The Transaction IDs associated with the inventory modifications */
  TransactionIds?: string[];
}

export interface RedemptionFailure {
  /** The marketplace failure code. */
  FailureCode?: string;
  /** The marketplace error details explaining why the offer failed to redeem. */
  FailureDetails?: string;
  /** The Marketplace Alternate ID being redeemed. */
  MarketplaceAlternateId?: string;
  /** The transaction id in the external marketplace. */
  MarketplaceTransactionId?: string;
}

export interface RedemptionSuccess {
  /** The Marketplace Alternate ID being redeemed. */
  MarketplaceAlternateId?: string;
  /** The transaction id in the external marketplace. */
  MarketplaceTransactionId?: string;
  /** The timestamp for when the redeem was completed. */
  SuccessTimestamp: string;
}

export interface ReportItemRequest extends IPlayFabRequestCommon {
  /** An alternate ID associated with this item. */
  AlternateId?: CatalogAlternateId;
  /** Category of concern for this report. */
  ConcernCategory?: ConcernCategory;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The entity to perform this action on. */
  Entity?: EntityKey;
  /** The unique ID of the item. */
  Id?: string;
  /** The string reason for this report. */
  Reason?: string;
}

export interface ReportItemResponse extends IPlayFabResultCommon {
}

export interface ReportItemReviewRequest extends IPlayFabRequestCommon {
  /** An alternate ID of the item associated with the review. */
  AlternateId?: CatalogAlternateId;
  /** The reason this review is being reported. */
  ConcernCategory?: ConcernCategory;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The entity to perform this action on. */
  Entity?: EntityKey;
  /** The string ID of the item associated with the review. */
  ItemId?: string;
  /** The string reason for this report. */
  Reason?: string;
  /** The ID of the review to submit a report for. */
  ReviewId?: string;
}

export interface ReportItemReviewResponse extends IPlayFabResultCommon {
}

export interface Review {
  /** The star rating associated with each selected category in this review. */
  CategoryRatings?: Record<string, number>;
  /** The number of negative helpfulness votes for this review. */
  HelpfulNegative: number;
  /** The number of positive helpfulness votes for this review. */
  HelpfulPositive: number;
  /** Indicates whether the review author has the item installed. */
  IsInstalled: boolean;
  /** The ID of the item being reviewed. */
  ItemId?: string;
  /** The version of the item being reviewed. */
  ItemVersion?: string;
  /** The locale for which this review was submitted in. */
  Locale?: string;
  /** Star rating associated with this review. */
  Rating: number;
  /** The ID of the author of the review. */
  ReviewerEntity?: EntityKey;
  /** The ID of the review. */
  ReviewId?: string;
  /** The full text of this review. */
  ReviewText?: string;
  /** The date and time this review was last submitted. */
  Submitted: string;
  /** The title of this review. */
  Title?: string;
}

export interface ReviewConfig {
  /** A set of categories that can be applied toward ratings and reviews. */
  CategoryRatings?: CategoryRatingConfig[];
}

export interface ReviewItemRequest extends IPlayFabRequestCommon {
  /** An alternate ID associated with this item. */
  AlternateId?: CatalogAlternateId;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The entity to perform this action on. */
  Entity?: EntityKey;
  /** The unique ID of the item. */
  Id?: string;
  /** The review to submit. */
  Review?: Review;
}

export interface ReviewItemResponse extends IPlayFabResultCommon {
}

export interface ReviewTakedown {
  /** An alternate ID associated with this item. */
  AlternateId?: CatalogAlternateId;
  /** The ID of the item associated with the review to take down. */
  ItemId?: string;
  /** The ID of the review to take down. */
  ReviewId?: string;
}

export interface SearchItemsRequest extends IPlayFabRequestCommon {
  /** An opaque token used to retrieve the next page of items, if any are available. */
  ContinuationToken?: string;
  /** Number of items to retrieve. This value is optional. Maximum page size is 50. Default value is 10. */
  Count: number;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The entity to perform this action on. */
  Entity?: EntityKey;
  /**
   * An OData filter used to refine the search query (For example: &quot;type eq &#39;ugc&#39;&quot;). More info about Filter Complexity limits
   * can be found here: https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/catalog/search#limits
   */
  Filter?: string;
  /** The locale to be returned in the result. */
  Language?: string;
  /** An OData orderBy used to order the results of the search query. For example: &quot;rating/average asc&quot; */
  OrderBy?: string;
  /** The text to search for. */
  Search?: string;
  /**
   * An OData select query option used to augment the search results. If not defined, the default search result metadata will
   * be returned.
   */
  Select?: string;
  /** The store to restrict the search request to. */
  Store?: StoreReference;
}

export interface SearchItemsResponse extends IPlayFabResultCommon {
  /** An opaque token used to retrieve the next page of items, if any are available. */
  ContinuationToken?: string;
  /** The paginated set of results for the search query. */
  Items?: CatalogItem[];
}

export interface SetItemModerationStateRequest extends IPlayFabRequestCommon {
  /** An alternate ID associated with this item. */
  AlternateId?: CatalogAlternateId;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The unique ID of the item. */
  Id?: string;
  /** The reason for the moderation state change for the associated item. */
  Reason?: string;
  /** The status to set for the associated item. */
  Status?: ModerationStatus;
}

export interface SetItemModerationStateResponse extends IPlayFabResultCommon {
}

export interface StoreDetails {
  /** The options for the filter in filter-based stores. These options are mutually exclusive with item references. */
  FilterOptions?: FilterOptions;
  /** The permissions that control which players can purchase from the store. */
  Permissions?: Permissions;
  /** The global prices utilized in the store. These options are mutually exclusive with price options in item references. */
  PriceOptionsOverride?: CatalogPriceOptionsOverride;
}

export interface StoreReference {
  /** An alternate ID of the store. */
  AlternateId?: CatalogAlternateId;
  /** The unique ID of the store. */
  Id?: string;
}

export interface SubmitItemReviewVoteRequest extends IPlayFabRequestCommon {
  /** An alternate ID of the item associated with the review. */
  AlternateId?: CatalogAlternateId;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The entity to perform this action on. */
  Entity?: EntityKey;
  /** The string ID of the item associated with the review. */
  ItemId?: string;
  /** The ID of the review to submit a helpfulness vote for. */
  ReviewId?: string;
  /** The helpfulness vote of the review. */
  Vote?: HelpfulnessVote;
}

export interface SubmitItemReviewVoteResponse extends IPlayFabResultCommon {
}

export interface SubtractInventoryItemsOperation {
  /** The amount to subtract from the current item amount. */
  Amount?: number;
  /**
   * Indicates whether stacks reduced to an amount of 0 during the request should be deleted from the inventory. (Default =
   * false).
   */
  DeleteEmptyStacks: boolean;
  /** The duration to subtract from the current item expiration date. */
  DurationInSeconds?: number;
  /** The inventory item the operation applies to. */
  Item?: InventoryItemReference;
}

export interface SubtractInventoryItemsRequest extends IPlayFabRequestCommon {
  /** The amount to subtract for the current item. */
  Amount?: number;
  /**
   * The id of the entity&#39;s collection to perform this action on. (Default=&quot;default&quot;). The number of inventory collections is
   * unlimited.
   */
  CollectionId?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /**
   * Indicates whether stacks reduced to an amount of 0 during the request should be deleted from the inventory.
   * (Default=false)
   */
  DeleteEmptyStacks: boolean;
  /** The duration to subtract from the current item expiration date. */
  DurationInSeconds?: number;
  /** The entity to perform this action on. */
  Entity?: EntityKey;
  /**
   * ETags are used for concurrency checking when updating resources. More information about using ETags can be found here:
   * https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/catalog/etags
   */
  ETag?: string;
  /**
   * The Idempotency ID for this request. Idempotency IDs can be used to prevent operation replay in the medium term but will
   * be garbage collected eventually.
   */
  IdempotencyId?: string;
  /** The inventory item the request applies to. */
  Item?: InventoryItemReference;
}

export interface SubtractInventoryItemsResponse extends IPlayFabResultCommon {
  /**
   * ETags are used for concurrency checking when updating resources. More information about using ETags can be found here:
   * https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/catalog/etags
   */
  ETag?: string;
  /** The idempotency id used in the request. */
  IdempotencyId?: string;
  /** The ids of transactions that occurred as a result of the request. */
  TransactionIds?: string[];
}

export interface TakedownItemReviewsRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The set of reviews to take down. */
  Reviews?: ReviewTakedown[];
}

export interface TakedownItemReviewsResponse extends IPlayFabResultCommon {
}

export interface Transaction {
  /** The API call that caused this transaction. */
  ApiName?: string;
  /** Additional details about the transaction. Null if it was not a clawback operation. */
  ClawbackDetails?: TransactionClawbackDetails;
  /** The country of the caller of the operation. */
  CountryCode?: CountryCode;
  /** The custom tags associated with this transactions. */
  CustomTags?: Record<string, string | null>;
  /** The type of item that the the operation occurred on. */
  ItemType?: string;
  /** The operations that occurred. */
  Operations?: TransactionOperation[];
  /** The type of operation that was run. */
  OperationType?: string;
  /** Additional details about the transaction. Null if it was not a purchase operation. */
  PurchaseDetails?: TransactionPurchaseDetails;
  /** Additional details about the transaction. Null if it was not a redeem operation. */
  RedeemDetails?: TransactionRedeemDetails;
  /** The time this transaction occurred in UTC. */
  Timestamp: string;
  /** The id of the transaction. This should be treated like an opaque token. */
  TransactionId?: string;
  /** Additional details about the transaction. Null if it was not a transfer operation. */
  TransferDetails?: TransactionTransferDetails;
}

export interface TransactionClawbackDetails {
  /** The id of the clawed back operation. */
  TransactionIdClawedback?: string;
}

export interface TransactionOperation {
  /** The amount of items in this transaction. */
  Amount?: number;
  /** The duration modified in this transaction. */
  DurationInSeconds?: number;
  /** The friendly id of the items in this transaction. */
  ItemFriendlyId?: string;
  /** The item id of the items in this transaction. */
  ItemId?: string;
  /** The type of item that the operation occurred on. */
  ItemType?: string;
  /** The stack id of the items in this transaction. */
  StackId?: string;
  /** The type of the operation that occurred. */
  Type?: string;
}

export interface TransactionPurchaseDetails {
  /** The friendly id of the Store the item was purchased from or null. */
  StoreFriendlyId?: string;
  /** The id of the Store the item was purchased from or null. */
  StoreId?: string;
}

export interface TransactionRedeemDetails {
  /** The marketplace that the offer is being redeemed from. */
  Marketplace?: string;
  /** The transaction Id returned from the marketplace. */
  MarketplaceTransactionId?: string;
  /** The offer Id of the item being redeemed. */
  OfferId?: string;
}

export interface TransactionTransferDetails {
  /** The collection id the items were transferred from or null if it was the current collection. */
  GivingCollectionId?: string;
  /** The entity the items were transferred from or null if it was the current entity. */
  GivingEntity?: EntityKey;
  /** The collection id the items were transferred to or null if it was the current collection. */
  ReceivingCollectionId?: string;
  /** The entity the items were transferred to or null if it was the current entity. */
  ReceivingEntity?: EntityKey;
  /** The id of the transfer that occurred. */
  TransferId?: string;
}

export interface TransferInventoryItemsOperation {
  /** The amount to transfer. */
  Amount?: number;
  /**
   * Indicates whether stacks reduced to an amount of 0 during the operation should be deleted from the inventory. (Default =
   * false)
   */
  DeleteEmptyStacks: boolean;
  /** The inventory item the operation is transferring from. */
  GivingItem?: InventoryItemReference;
  /** The values to apply to a stack newly created by this operation. */
  NewStackValues?: InitialValues;
  /** The inventory item the operation is transferring to. */
  ReceivingItem?: InventoryItemReference;
}

export interface TransferInventoryItemsRequest extends IPlayFabRequestCommon {
  /** The amount to transfer . */
  Amount?: number;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /**
   * Indicates whether stacks reduced to an amount of 0 during the request should be deleted from the inventory. (Default =
   * false)
   */
  DeleteEmptyStacks: boolean;
  /** The inventory collection id the request is transferring from. (Default=&quot;default&quot;) */
  GivingCollectionId?: string;
  /** The entity the request is transferring from. Set to the caller by default. */
  GivingEntity?: EntityKey;
  /**
   * ETags are used for concurrency checking when updating resources (before transferring from). More information about using
   * ETags can be found here: https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/catalog/etags
   */
  GivingETag?: string;
  /** The inventory item the request is transferring from. */
  GivingItem?: InventoryItemReference;
  /** The idempotency id for the request. */
  IdempotencyId?: string;
  /** The values to apply to a stack newly created by this request. */
  NewStackValues?: InitialValues;
  /** The inventory collection id the request is transferring to. (Default=&quot;default&quot;) */
  ReceivingCollectionId?: string;
  /** The entity the request is transferring to. Set to the caller by default. */
  ReceivingEntity?: EntityKey;
  /** The inventory item the request is transferring to. */
  ReceivingItem?: InventoryItemReference;
}

export interface TransferInventoryItemsResponse extends IPlayFabResultCommon {
  /**
   * ETags are used for concurrency checking when updating resources (after transferring from). More information about using
   * ETags can be found here: https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/catalog/etags
   */
  GivingETag?: string;
  /** The ids of transactions that occurred as a result of the request&#39;s giving action. */
  GivingTransactionIds?: string[];
  /** The idempotency id for the request. */
  IdempotencyId?: string;
  /**
   * The transfer operation status. Possible values are &#39;InProgress&#39; or &#39;Completed&#39;. If the operation has completed, the
   * response code will be 200. Otherwise, it will be 202.
   */
  OperationStatus?: string;
  /**
   * The token that can be used to get the status of the transfer operation. This will only have a value if OperationStatus
   * is &#39;InProgress&#39;.
   */
  OperationToken?: string;
  /** The ids of transactions that occurred as a result of the request&#39;s receiving action. */
  ReceivingTransactionIds?: string[];
}

export interface UpdateCatalogConfigRequest extends IPlayFabRequestCommon {
  /** The updated catalog configuration. */
  Config?: CatalogConfig;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
}

export interface UpdateCatalogConfigResponse extends IPlayFabResultCommon {
}

export interface UpdateDraftItemRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Updated metadata describing the catalog item to be updated. */
  Item?: CatalogItem;
  /** Whether the item should be published immediately. This value is optional, defaults to false. */
  Publish: boolean;
}

export interface UpdateDraftItemResponse extends IPlayFabResultCommon {
  /** Updated metadata describing the catalog item just updated. */
  Item?: CatalogItem;
}

export interface UpdateInventoryItemsOperation {
  /** The inventory item to update with the specified values. */
  Item?: InventoryItem;
}

export interface UpdateInventoryItemsRequest extends IPlayFabRequestCommon {
  /**
   * The id of the entity&#39;s collection to perform this action on. (Default=&quot;default&quot;). The number of inventory collections is
   * unlimited.
   */
  CollectionId?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The entity to perform this action on. */
  Entity?: EntityKey;
  /**
   * ETags are used for concurrency checking when updating resources. More information about using ETags can be found here:
   * https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/catalog/etags
   */
  ETag?: string;
  /**
   * The Idempotency ID for this request. Idempotency IDs can be used to prevent operation replay in the medium term but will
   * be garbage collected eventually.
   */
  IdempotencyId?: string;
  /** The inventory item to update with the specified values. */
  Item?: InventoryItem;
}

export interface UpdateInventoryItemsResponse extends IPlayFabResultCommon {
  /**
   * ETags are used for concurrency checking when updating resources. More information about using ETags can be found here:
   * https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/catalog/etags
   */
  ETag?: string;
  /** The idempotency id used in the request. */
  IdempotencyId?: string;
  /** The ids of transactions that occurred as a result of the request. */
  TransactionIds?: string[];
}

export interface UpdateViewRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Updated metadata describing the catalog view to be updated. */
  View?: CatalogView;
}

export interface UpdateViewResponse extends IPlayFabResultCommon {
  /** Updated metadata describing the catalog view just updated */
  View?: CatalogView;
}

export interface UploadInfo {
  /** Name of the file to be uploaded. */
  FileName?: string;
}

export interface UploadUrlMetadata {
  /** Name of the file for which this upload URL was requested. */
  FileName?: string;
  /** Unique ID for the binary content to be uploaded to the target URL. */
  Id?: string;
  /** URL for the binary content to be uploaded to. */
  Url?: string;
}

export interface UserGeneratedContentSpecificConfig {
  /** The set of content types that will be used for validation. */
  ContentTypes?: string[];
  /** The set of tags that will be used for validation. */
  Tags?: string[];
}

export interface VersionedCatalog {
  /** Version of the catalog. */
  Version?: string;
}

export interface VersionedCatalogItem {
  /** A list of alternate ids for this item. */
  AlternateIds?: VersionedCatalogItemAlternateId[];
  /** The content type of the item. */
  ContentType?: string;
  /** The creation date of the item. */
  CreationDate?: string;
  /** The creator entity of the item. */
  CreatorEntity?: VersionedCatalogItemCreatorEntity;
  /** The Stack Id that will be used as default for this item in Inventory when an explicit one is not provided. */
  DefaultStackId?: string;
  /** The description of the item. */
  Description?: Record<string, string | null>;
  /** The end date of the item. */
  EndDate?: string;
  /** The friendly id of the item. */
  FriendlyId?: string;
  /** The id identifying the item. */
  Id?: string;
  /** Indicates if the item is hidden. */
  IsHidden?: boolean;
  /** Indicates if the item is for testing. */
  IsTest?: boolean;
  /** The item references associated with this item. */
  ItemReferences?: VersionedCatalogItemReference[];
  /** The keywords of the item. */
  Keywords?: Record<string, VersionedCatalogItemKeywordSet>;
  /** The last modified date of the item. */
  LastModifiedDate?: string;
  /** The payout information of the payee. */
  PayoutInfo?: VersionedCatalogItemPayoutInfo;
  /** The platforms of the item. */
  Platforms?: string[];
  /** The prices the item can be purchased for. */
  Price?: VersionedCatalogItemPrice;
  /** The real price the item was purchased for per marketplace. */
  RealMoneyPriceDetails?: VersionedCatalogItemRealMoneyPriceDetails;
  /** The start date of the item. */
  StartDate?: string;
  /** Optional details for stores items. */
  StoreDetails?: VersionedCatalogItemStoreDetails;
  /** The tags of the item. */
  Tags?: string[];
  /** The title of the item. */
  Title?: Record<string, string | null>;
  /** Whether a non-title entity can interact with the item. */
  TitleExclusive?: boolean;
  /** The service defined type of the item. */
  Type?: string;
}

export interface VersionedCatalogItemAlternateId {
  /** Type of the Alternate Id. */
  Type?: string;
  /** Value of the Alternate Id. */
  Value?: string;
}

export interface VersionedCatalogItemCreatorEntity {
  /** The id of the creator entity. */
  Id?: string;
  /** The type of the creator entity. */
  Type?: string;
}

export interface VersionedCatalogItemFilterOptions {
  /** The OData filter utilized. Mutually exclusive with &#39;IncludeAllItems&#39;. */
  Filter?: string;
  /** The flag that overrides the filter and allows for returning all catalog items. Mutually exclusive with &#39;Filter&#39;. */
  IncludeAllItems?: boolean;
}

export interface VersionedCatalogItemKeywordSet {
  /** A list of localized keywords. */
  Values?: string[];
}

export interface VersionedCatalogItemOverride {
  /** The exact value that should be utilized in the override. */
  FixedValue?: number;
  /** The id of the item this override should utilize. */
  ItemId?: string;
  /**
   * The multiplier that will be applied to the base Catalog value to determine what value should be utilized in the
   * override.
   */
  Multiplier?: number;
}

export interface VersionedCatalogItemPayoutInfo {
  /** The Dev Center account id of the payee. */
  AccountSellerId?: string;
  /** The tax code for payout calculations. */
  TaxCode?: string;
  /** The Universal account id of the payee. */
  Uaid?: string;
}

export interface VersionedCatalogItemPermissions {
  /** The list of ids of Segments that the a player can be in to purchase from the store. */
  SegmentIds?: string[];
}

export interface VersionedCatalogItemPrice {
  /** The amount the payee will receive. */
  PayoutAmount?: number;
  /** Prices of the catalog item. */
  Prices?: VersionedCatalogItemPriceInstance[];
  /** A standardized sorting key to allow proper sorting between items with prices in different currencies. */
  Sort?: number;
}

export interface VersionedCatalogItemPriceAmount {
  /** The amount of the price. */
  Amount?: number;
  /** Indicates whether the item this price references is defined at the namespace level or not. */
  IsFromNamespace?: boolean;
  /** The Item Id of the price. */
  ItemId?: string;
  /** Stack Id the client expects to use to purchase the item. */
  StackId?: string;
}

export interface VersionedCatalogItemPriceInstance {
  /** The amounts of the catalog item price. Each price can have up to 15 item amounts. */
  Amounts?: VersionedCatalogItemPriceAmount[];
  /** The per-unit amount this price can be used to purchase. */
  UnitAmount?: number;
  /** The per-unit duration this price can be used to purchase. The maximum duration is 100 years. */
  UnitDurationInSeconds?: number;
}

export interface VersionedCatalogItemPriceOverride {
  /** The currency amounts utilized in the override for a singular price. */
  Amounts?: VersionedCatalogItemOverride[];
}

export interface VersionedCatalogItemPricesOverride {
  /** The payout amount utilized in the override. */
  PayoutAmount?: VersionedCatalogItemOverride;
  /** The prices utilized in the override. */
  Prices?: VersionedCatalogItemPriceOverride[];
}

export interface VersionedCatalogItemRealMoneyPriceDetails {
  /** The &#39;AppleAppStore&#39; price amount per CurrencyCode. &#39;USD&#39; supported only. */
  AppleAppStorePrices?: Record<string, number>;
  /** The &#39;GooglePlay&#39; price amount per CurrencyCode. &#39;USD&#39; supported only. */
  GooglePlayPrices?: Record<string, number>;
  /** The &#39;MicrosoftStore&#39; price amount per CurrencyCode. &#39;USD&#39; supported only. */
  MicrosoftStorePrices?: Record<string, number>;
  /** The &#39;NintendoEShop&#39; price amount per CurrencyCode. &#39;USD&#39; supported only. */
  NintendoEShopPrices?: Record<string, number>;
  /** The &#39;PlayStationStore&#39; price amount per CurrencyCode. &#39;USD&#39; supported only. */
  PlayStationStorePrices?: Record<string, number>;
  /** The &#39;Steam&#39; price amount per CurrencyCode. &#39;USD&#39; supported only. */
  SteamPrices?: Record<string, number>;
}

export interface VersionedCatalogItemReference {
  /** The amount of the catalog item. */
  Amount?: number;
  /** The duration in seconds of the catalog item. */
  DurationInSeconds?: number;
  /** The unique id of the catalog item. */
  Id?: string;
  /** Indicates whether the item this reference represents is defined at the namespace level or not. */
  IsFromNamespace?: boolean;
  /** The prices the catalog item can be purchased for. */
  Price?: VersionedCatalogItemPrice;
}

export interface VersionedCatalogItemStoreDetails {
  /** The options for the filter in filter-based stores. These options are mutually exclusive with item references. */
  FilterOptions?: VersionedCatalogItemFilterOptions;
  /** The permissions that control which players can purchase from the store. */
  Permissions?: VersionedCatalogItemPermissions;
  /** The global prices utilized in the store. These options are mutually exclusive with price options in item references. */
  PricesOverride?: VersionedCatalogItemPricesOverride;
}

type ViewFileFormat = "Unknown"
  | "Json"
  | "JsonLines"
  | "GZippedJson"
  | "GZippedJsonLines";

