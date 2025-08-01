import type {
  IPlayFabRequestCommon,
  IPlayFabResultCommon
} from "./PlayFab";

type AccessPolicy = "Public"
  | "Friends"
  | "Private";

export interface AssetReference {
  /** The asset&#39;s file name. This is a filename with the .zip, .tar, or .tar.gz extension. */
  FileName?: string;
  /** The asset&#39;s mount path. */
  MountPath?: string;
}

export interface AssetReferenceParams {
  /** The asset&#39;s file name. */
  FileName: string;
  /** The asset&#39;s mount path. */
  MountPath?: string;
}

export interface AssetSummary {
  /** The asset&#39;s file name. This is a filename with the .zip, .tar, or .tar.gz extension. */
  FileName?: string;
  /** The metadata associated with the asset. */
  Metadata?: Record<string, string | null>;
}

type AttributeMergeFunction = "Min"
  | "Max"
  | "Average";

type AttributeNotSpecifiedBehavior = "UseDefault"
  | "MatchAny";

type AttributeSource = "User"
  | "PlayerEntity";

type AzureRegion = "AustraliaEast"
  | "AustraliaSoutheast"
  | "BrazilSouth"
  | "CentralUs"
  | "EastAsia"
  | "EastUs"
  | "EastUs2"
  | "JapanEast"
  | "JapanWest"
  | "NorthCentralUs"
  | "NorthEurope"
  | "SouthCentralUs"
  | "SoutheastAsia"
  | "WestEurope"
  | "WestUs"
  | "SouthAfricaNorth"
  | "WestCentralUs"
  | "KoreaCentral"
  | "FranceCentral"
  | "WestUs2"
  | "CentralIndia"
  | "UaeNorth"
  | "UkSouth"
  | "SwedenCentral"
  | "CanadaCentral"
  | "MexicoCentral";

type AzureVmFamily = "A"
  | "Av2"
  | "Dv2"
  | "Dv3"
  | "F"
  | "Fsv2"
  | "Dasv4"
  | "Dav4"
  | "Dadsv5"
  | "Dadsv6"
  | "Eav4"
  | "Easv4"
  | "Ev4"
  | "Esv4"
  | "Dsv3"
  | "Dsv2"
  | "NCasT4_v3"
  | "Ddv4"
  | "Ddsv4"
  | "HBv3"
  | "Ddv5"
  | "Ddsv5";

type AzureVmSize = "Standard_A1"
  | "Standard_A2"
  | "Standard_A3"
  | "Standard_A4"
  | "Standard_A1_v2"
  | "Standard_A2_v2"
  | "Standard_A4_v2"
  | "Standard_A8_v2"
  | "Standard_D1_v2"
  | "Standard_D2_v2"
  | "Standard_D3_v2"
  | "Standard_D4_v2"
  | "Standard_D5_v2"
  | "Standard_D2_v3"
  | "Standard_D4_v3"
  | "Standard_D8_v3"
  | "Standard_D16_v3"
  | "Standard_F1"
  | "Standard_F2"
  | "Standard_F4"
  | "Standard_F8"
  | "Standard_F16"
  | "Standard_F2s_v2"
  | "Standard_F4s_v2"
  | "Standard_F8s_v2"
  | "Standard_F16s_v2"
  | "Standard_D2as_v4"
  | "Standard_D4as_v4"
  | "Standard_D8as_v4"
  | "Standard_D16as_v4"
  | "Standard_D2a_v4"
  | "Standard_D4a_v4"
  | "Standard_D8a_v4"
  | "Standard_D16a_v4"
  | "Standard_D2ads_v5"
  | "Standard_D4ads_v5"
  | "Standard_D8ads_v5"
  | "Standard_D16ads_v5"
  | "Standard_D2ads_v6"
  | "Standard_D4ads_v6"
  | "Standard_D8ads_v6"
  | "Standard_D16ads_v6"
  | "Standard_E2a_v4"
  | "Standard_E4a_v4"
  | "Standard_E8a_v4"
  | "Standard_E16a_v4"
  | "Standard_E2as_v4"
  | "Standard_E4as_v4"
  | "Standard_E8as_v4"
  | "Standard_E16as_v4"
  | "Standard_D2s_v3"
  | "Standard_D4s_v3"
  | "Standard_D8s_v3"
  | "Standard_D16s_v3"
  | "Standard_DS1_v2"
  | "Standard_DS2_v2"
  | "Standard_DS3_v2"
  | "Standard_DS4_v2"
  | "Standard_DS5_v2"
  | "Standard_NC4as_T4_v3"
  | "Standard_D2d_v4"
  | "Standard_D4d_v4"
  | "Standard_D8d_v4"
  | "Standard_D16d_v4"
  | "Standard_D2ds_v4"
  | "Standard_D4ds_v4"
  | "Standard_D8ds_v4"
  | "Standard_D16ds_v4"
  | "Standard_HB120_16rs_v3"
  | "Standard_HB120_32rs_v3"
  | "Standard_HB120_64rs_v3"
  | "Standard_HB120_96rs_v3"
  | "Standard_HB120rs_v3"
  | "Standard_D2d_v5"
  | "Standard_D4d_v5"
  | "Standard_D8d_v5"
  | "Standard_D16d_v5"
  | "Standard_D32d_v5"
  | "Standard_D2ds_v5"
  | "Standard_D4ds_v5"
  | "Standard_D8ds_v5"
  | "Standard_D16ds_v5"
  | "Standard_D32ds_v5";

export interface BatchParameters {
  /**
   * The initial threshold value for determining if a match result is considered anomalous enough to be ignored. If this is
   * not specified and the parent model ID is specified, then the parent model&#39;s value will be used. Otherwise, a default
   * value of -20 is used. Note: This was the one that was used when creating the batch model, which might differ from
   * &lt;c&gt;CurrentAnomalousMatchResultIgnoreThreshold&lt;/c&gt; value.
   */
  AnomalousMatchResultIgnoreThreshold?: number;
  /** DateTime in UTC of the end of the range of match result end times for a batch run. The specified DateTime is exclusive. */
  MatchResultEndDateTime: string;
  /**
   * DateTime in UTC of the start of the range of match result end times for a batch run. The specified DateTime is
   * inclusive.
   */
  MatchResultStartDateTime: string;
  /** Maximum number of batch learning iterations to run. */
  MaxIterations: number;
  /** ID of the Model that was used as a parent of the batch run for creating this model. */
  ParentModelId?: string;
}

export interface BatchResults {
  /**
   * A dictionary containing the activity value for certain batch learning iterations. The key is the iteration number and
   * the value is the activity value. The activity value is a measure of how much the model is changing. The batch learning
   * algorithm will stop if the activity drops below a convergence threshold.
   */
  LearningActivity?: Record<string, number>;
  /**
   * The number of match results that were within the date range for the batch run but were ignored because they didn&#39;t have
   * the required conditions or events.
   */
  MatchResultsIgnoredCount: number;
  /** The number of match results that were processed in the batch run. */
  MatchResultsUsedCount: number;
  /** The total duration in seconds of the batch run. */
  RunTimeInSeconds: number;
}

export interface BuildAliasDetailsResponse extends IPlayFabResultCommon {
  /** The guid string alias Id of the alias to be created or updated. */
  AliasId?: string;
  /** The alias name. */
  AliasName?: string;
  /** Array of build selection criteria. */
  BuildSelectionCriteria?: BuildSelectionCriterion[];
  /**
   * Deprecated - Do not use
   * @deprecated Do not use
   */
  PageSize?: number;
  /**
   * Deprecated - Do not use
   * @deprecated Do not use
   */
  SkipToken?: string;
}

export interface BuildAliasParams {
  /** The guid string alias ID to use for the request. */
  AliasId: string;
}

export interface BuildRegion {
  /** The current multiplayer server stats for the region. */
  CurrentServerStats?: CurrentServerStats;
  /** Optional settings to control dynamic adjustment of standby target */
  DynamicStandbySettings?: DynamicStandbySettings;
  /** Whether the game assets provided for the build have been replicated to this region. */
  IsAssetReplicationComplete: boolean;
  /** The maximum number of multiplayer servers for the region. */
  MaxServers: number;
  /** Regional override for the number of multiplayer servers to host on a single VM of the build. */
  MultiplayerServerCountPerVm?: number;
  /** The build region. */
  Region?: string;
  /** Optional settings to set the standby target to specified values during the supplied schedules */
  ScheduledStandbySettings?: ScheduledStandbySettings;
  /** The target number of standby multiplayer servers for the region. */
  StandbyServers: number;
  /**
   * The status of multiplayer servers in the build region. Valid values are - Unknown, Initialized, Deploying, Deployed,
   * Unhealthy, Deleting, Deleted.
   */
  Status?: string;
  /** Regional override for the VM size the build was created on. */
  VmSize?: AzureVmSize;
}

export interface BuildRegionParams {
  /** Optional settings to control dynamic adjustment of standby target. If not specified, dynamic standby is disabled */
  DynamicStandbySettings?: DynamicStandbySettings;
  /** The maximum number of multiplayer servers for the region. */
  MaxServers: number;
  /** Regional override for the number of multiplayer servers to host on a single VM of the build. */
  MultiplayerServerCountPerVm?: number;
  /** The build region. */
  Region: string;
  /** Optional settings to set the standby target to specified values during the supplied schedules */
  ScheduledStandbySettings?: ScheduledStandbySettings;
  /** The number of standby multiplayer servers for the region. */
  StandbyServers: number;
  /** Regional override for the VM size the build was created on. */
  VmSize?: AzureVmSize;
}

export interface BuildSelectionCriterion {
  /** Dictionary of build ids and their respective weights for distribution of allocation requests. */
  BuildWeightDistribution?: Record<string, number>;
}

export interface BuildSummary {
  /** The guid string build ID of the build. */
  BuildId?: string;
  /** The build name. */
  BuildName?: string;
  /** The time the build was created in UTC. */
  CreationTime?: string;
  /** The metadata of the build. */
  Metadata?: Record<string, string | null>;
  /** The configuration and status for each region in the build. */
  RegionConfigurations?: BuildRegion[];
}

export interface CancelAllMatchmakingTicketsForPlayerRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The entity key of the player whose tickets should be canceled. */
  Entity?: EntityKey;
  /** The name of the queue from which a player&#39;s tickets should be canceled. */
  QueueName: string;
}

export interface CancelAllMatchmakingTicketsForPlayerResult extends IPlayFabResultCommon {
}

export interface CancelAllServerBackfillTicketsForPlayerRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The entity key of the player whose backfill tickets should be canceled. */
  Entity: EntityKey;
  /** The name of the queue from which a player&#39;s backfill tickets should be canceled. */
  QueueName: string;
}

export interface CancelAllServerBackfillTicketsForPlayerResult extends IPlayFabResultCommon {
}

type CancellationReason = "Requested"
  | "Internal"
  | "Timeout";

export interface CancelMatchmakingTicketRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The name of the queue the ticket is in. */
  QueueName: string;
  /** The Id of the ticket to find a match for. */
  TicketId: string;
}

export interface CancelMatchmakingTicketResult extends IPlayFabResultCommon {
}

export interface CancelModelRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The ID of the Model we want to cancel a batch run for. */
  ModelId: string;
  /** The ID of the Scenario that the requested model belongs to. */
  ScenarioId: string;
}

export interface CancelModelResponse extends IPlayFabResultCommon {
}

export interface CancelServerBackfillTicketRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The name of the queue the ticket is in. */
  QueueName: string;
  /** The Id of the ticket to find a match for. */
  TicketId: string;
}

export interface CancelServerBackfillTicketResult extends IPlayFabResultCommon {
}

export interface Certificate {
  /** Base64 encoded string contents of the certificate. */
  Base64EncodedValue: string;
  /** A name for the certificate. This is used to reference certificates in build configurations. */
  Name: string;
  /**
   * If required for your PFX certificate, use this field to provide a password that will be used to install the certificate
   * on the container.
   */
  Password?: string;
}

export interface CertificateSummary {
  /** The name of the certificate. */
  Name?: string;
  /** The thumbprint for the certificate. */
  Thumbprint?: string;
}

export interface CognitiveServicesLocale {
  /** Gender of the locale if available */
  Gender?: string;
  /** The code for supported locale */
  Locale?: string;
  /** Name of the locale if available */
  Name?: string;
  /** Short name of the locale if available */
  ShortName?: string;
}

type CognitiveServicesType = "SpeechToText"
  | "SpeechToTextTranslation"
  | "TextToSpeech"
  | "TextToText";

export interface ConditionsSet {
  /** A map from condition names to condition values in which to get the skills of the players. */
  Conditions?: Record<string, string | null>;
}

export interface ConnectedPlayer {
  /** The player ID of the player connected to the multiplayer server. */
  PlayerId?: string;
}

type ContainerFlavor = "ManagedWindowsServerCore"
  | "CustomLinux"
  | "ManagedWindowsServerCorePreview"
  | "Invalid";

export interface ContainerImageReference {
  /** The container image name. */
  ImageName: string;
  /** The container tag. */
  Tag?: string;
}

export interface CoreCapacity {
  /** The available core capacity for the (Region, VmFamily) */
  Available: number;
  /** The AzureRegion */
  Region?: string;
  /** The total core capacity for the (Region, VmFamily) */
  Total: number;
  /** The AzureVmFamily */
  VmFamily?: AzureVmFamily;
}

export interface CoreCapacityChange {
  /** New quota core limit for the given vm family/region. */
  NewCoreLimit: number;
  /** Region to change. */
  Region: string;
  /** Virtual machine family to change. */
  VmFamily: AzureVmFamily;
}

export interface CreateBaseModelRequest extends IPlayFabRequestCommon {
  /** A list of condition keys and their associated affinity weights for this model. */
  Conditions?: ModelCondition[];
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The name of the model that will be created. */
  ModelName: string;
  /** The ID of the scenario to create the base model. */
  ScenarioId: string;
}

export interface CreateBaseModelResponse extends IPlayFabResultCommon {
  /** The id of the model that was created. */
  ModelId?: string;
}

export interface CreateBatchModelRequest extends IPlayFabRequestCommon {
  /**
   * The threshold value for determining if a match result is considered anomalous enough to be ignored. It must be negative.
   * If this is not specified and the parent model ID is specified, then the parent model&#39;s value will be used. Otherwise, a
   * default value of -20 is used. Typically, increasing it by 1 to -19 will roughly detect 3x more anomalous matches.
   * Typically, decreasing it by 1 to -21 will roughly detect 3x less anomalous matches.
   */
  AnomalousMatchResultIgnoreThreshold?: number;
  /** A list of condition keys and their associated affinity weights for this model. */
  Conditions?: ModelCondition[];
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** A list of events used in this model. */
  Events?: string[];
  /**
   * A model ID which is the batch run uses as a starting point for learning. If not supplied a base model is used as the
   * starting point.
   */
  InitialSettingsModelId?: string;
  /** The exclusive end time of match results used for this mode. */
  MatchResultEndTimeUtc: string;
  /** The inclusive start time of match results used for this mode. */
  MatchResultStartTimeUtc: string;
  /** The maximum number of batch learning iterations to run. */
  MaxIterations: number;
  /** The name of the model that will be created. */
  ModelName: string;
  /** The ID of the scenario for this batch model. */
  ScenarioId: string;
}

export interface CreateBatchModelResponse extends IPlayFabResultCommon {
  /** The id of the model that was created. Null if the request failed. */
  ModelId?: string;
}

export interface CreateBuildAliasRequest extends IPlayFabRequestCommon {
  /** The alias name. */
  AliasName: string;
  /** Array of build selection criteria. */
  BuildSelectionCriteria?: BuildSelectionCriterion[];
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
}

export interface CreateBuildWithCustomContainerRequest extends IPlayFabRequestCommon {
  /**
   * When true, assets will not be copied for each server inside the VM. All serverswill run from the same set of assets, or
   * will have the same assets mounted in the container.
   */
  AreAssetsReadonly?: boolean;
  /** The build name. */
  BuildName: string;
  /** The flavor of container to create a build from. */
  ContainerFlavor?: ContainerFlavor;
  /** The container reference, consisting of the image name and tag. */
  ContainerImageReference?: ContainerImageReference;
  /**
   * The name of the container repository.
   * @deprecated Please use ContainerImageReference instead.
   */
  ContainerRepositoryName?: string;
  /** The container command to run when the multiplayer server has been allocated, including any arguments. */
  ContainerRunCommand?: string;
  /**
   * The tag for the container.
   * @deprecated Please use ContainerImageReference instead.
   */
  ContainerTag?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The list of game assets related to the build. */
  GameAssetReferences?: AssetReferenceParams[];
  /** The game certificates for the build. */
  GameCertificateReferences?: GameCertificateReferenceParams[];
  /** The game secrets for the build. */
  GameSecretReferences?: GameSecretReferenceParams[];
  /** The Linux instrumentation configuration for the build. */
  LinuxInstrumentationConfiguration?: LinuxInstrumentationConfiguration;
  /**
   * Metadata to tag the build. The keys are case insensitive. The build metadata is made available to the server through
   * Game Server SDK (GSDK).Constraints: Maximum number of keys: 30, Maximum key length: 50, Maximum value length: 100
   */
  Metadata?: Record<string, string | null>;
  /** The configuration for the monitoring application on the build */
  MonitoringApplicationConfiguration?: MonitoringApplicationConfigurationParams;
  /** The number of multiplayer servers to host on a single VM. */
  MultiplayerServerCountPerVm: number;
  /** The ports to map the build on. */
  Ports: Port[];
  /** The region configurations for the build. */
  RegionConfigurations: BuildRegionParams[];
  /** The resource constraints to apply to each server on the VM (EXPERIMENTAL API) */
  ServerResourceConstraints?: ServerResourceConstraintParams;
  /**
   * DEPRECATED - this is always true. Assets are downloaded and uncompressed in memory, without the compressedversion being
   * written first to disc.
   * @deprecated Please use  instead.
   */
  UseStreamingForAssetDownloads?: boolean;
  /** The VM size to create the build on. */
  VmSize?: AzureVmSize;
  /** The configuration for the VmStartupScript for the build */
  VmStartupScriptConfiguration?: VmStartupScriptParams;
}

export interface CreateBuildWithCustomContainerResponse extends IPlayFabResultCommon {
  /**
   * When true, assets will not be copied for each server inside the VM. All serverswill run from the same set of assets, or
   * will have the same assets mounted in the container.
   */
  AreAssetsReadonly?: boolean;
  /** The guid string build ID. Must be unique for every build. */
  BuildId?: string;
  /** The build name. */
  BuildName?: string;
  /** The flavor of container of the build. */
  ContainerFlavor?: ContainerFlavor;
  /** The container command to run when the multiplayer server has been allocated, including any arguments. */
  ContainerRunCommand?: string;
  /** The time the build was created in UTC. */
  CreationTime?: string;
  /** The custom game container image reference information. */
  CustomGameContainerImage?: ContainerImageReference;
  /** The game assets for the build. */
  GameAssetReferences?: AssetReference[];
  /** The game certificates for the build. */
  GameCertificateReferences?: GameCertificateReference[];
  /** The game secrets for the build. */
  GameSecretReferences?: GameSecretReference[];
  /** The Linux instrumentation configuration for this build. */
  LinuxInstrumentationConfiguration?: LinuxInstrumentationConfiguration;
  /** The metadata of the build. */
  Metadata?: Record<string, string | null>;
  /** The configuration for the monitoring application for the build */
  MonitoringApplicationConfiguration?: MonitoringApplicationConfiguration;
  /** The number of multiplayer servers to host on a single VM of the build. */
  MultiplayerServerCountPerVm: number;
  /** The OS platform used for running the game process. */
  OsPlatform?: string;
  /** The ports the build is mapped on. */
  Ports?: Port[];
  /** The region configuration for the build. */
  RegionConfigurations?: BuildRegion[];
  /** The resource constraints to apply to each server on the VM (EXPERIMENTAL API) */
  ServerResourceConstraints?: ServerResourceConstraintParams;
  /** The type of game server being hosted. */
  ServerType?: string;
  /**
   * When true, assets will be downloaded and uncompressed in memory, without the compressedversion being written first to
   * disc.
   */
  UseStreamingForAssetDownloads?: boolean;
  /** The VM size the build was created on. */
  VmSize?: AzureVmSize;
  /** The configuration for the VmStartupScript feature for the build */
  VmStartupScriptConfiguration?: VmStartupScriptConfiguration;
}

export interface CreateBuildWithManagedContainerRequest extends IPlayFabRequestCommon {
  /**
   * When true, assets will not be copied for each server inside the VM. All serverswill run from the same set of assets, or
   * will have the same assets mounted in the container.
   */
  AreAssetsReadonly?: boolean;
  /** The build name. */
  BuildName: string;
  /** The flavor of container to create a build from. */
  ContainerFlavor?: ContainerFlavor;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The list of game assets related to the build. */
  GameAssetReferences: AssetReferenceParams[];
  /** The game certificates for the build. */
  GameCertificateReferences?: GameCertificateReferenceParams[];
  /** The game secrets for the build. */
  GameSecretReferences?: GameSecretReferenceParams[];
  /**
   * The directory containing the game executable. This would be the start path of the game assets that contain the main game
   * server executable. If not provided, a best effort will be made to extract it from the start game command.
   */
  GameWorkingDirectory?: string;
  /** The instrumentation configuration for the build. */
  InstrumentationConfiguration?: InstrumentationConfiguration;
  /**
   * Metadata to tag the build. The keys are case insensitive. The build metadata is made available to the server through
   * Game Server SDK (GSDK).Constraints: Maximum number of keys: 30, Maximum key length: 50, Maximum value length: 100
   */
  Metadata?: Record<string, string | null>;
  /** The configuration for the monitoring application on the build */
  MonitoringApplicationConfiguration?: MonitoringApplicationConfigurationParams;
  /** The number of multiplayer servers to host on a single VM. */
  MultiplayerServerCountPerVm: number;
  /** The ports to map the build on. */
  Ports: Port[];
  /** The region configurations for the build. */
  RegionConfigurations: BuildRegionParams[];
  /** The resource constraints to apply to each server on the VM (EXPERIMENTAL API) */
  ServerResourceConstraints?: ServerResourceConstraintParams;
  /** The command to run when the multiplayer server is started, including any arguments. */
  StartMultiplayerServerCommand: string;
  /**
   * DEPRECATED - this is always true. Assets are downloaded and uncompressed in memory, without the compressedversion being
   * written first to disc.
   * @deprecated Please use  instead.
   */
  UseStreamingForAssetDownloads?: boolean;
  /** The VM size to create the build on. */
  VmSize?: AzureVmSize;
  /** The configuration for the VmStartupScript for the build */
  VmStartupScriptConfiguration?: VmStartupScriptParams;
  /** The crash dump configuration for the build. */
  WindowsCrashDumpConfiguration?: WindowsCrashDumpConfiguration;
}

export interface CreateBuildWithManagedContainerResponse extends IPlayFabResultCommon {
  /**
   * When true, assets will not be copied for each server inside the VM. All serverswill run from the same set of assets, or
   * will have the same assets mounted in the container.
   */
  AreAssetsReadonly?: boolean;
  /** The guid string build ID. Must be unique for every build. */
  BuildId?: string;
  /** The build name. */
  BuildName?: string;
  /** The flavor of container of the build. */
  ContainerFlavor?: ContainerFlavor;
  /** The time the build was created in UTC. */
  CreationTime?: string;
  /** The game assets for the build. */
  GameAssetReferences?: AssetReference[];
  /** The game certificates for the build. */
  GameCertificateReferences?: GameCertificateReference[];
  /** The game secrets for the build. */
  GameSecretReferences?: GameSecretReference[];
  /**
   * The directory containing the game executable. This would be the start path of the game assets that contain the main game
   * server executable. If not provided, a best effort will be made to extract it from the start game command.
   */
  GameWorkingDirectory?: string;
  /** The instrumentation configuration for this build. */
  InstrumentationConfiguration?: InstrumentationConfiguration;
  /** The metadata of the build. */
  Metadata?: Record<string, string | null>;
  /** The configuration for the monitoring application for the build */
  MonitoringApplicationConfiguration?: MonitoringApplicationConfiguration;
  /** The number of multiplayer servers to host on a single VM of the build. */
  MultiplayerServerCountPerVm: number;
  /** The OS platform used for running the game process. */
  OsPlatform?: string;
  /** The ports the build is mapped on. */
  Ports?: Port[];
  /** The region configuration for the build. */
  RegionConfigurations?: BuildRegion[];
  /** The resource constraints to apply to each server on the VM (EXPERIMENTAL API) */
  ServerResourceConstraints?: ServerResourceConstraintParams;
  /** The type of game server being hosted. */
  ServerType?: string;
  /** The command to run when the multiplayer server has been allocated, including any arguments. */
  StartMultiplayerServerCommand?: string;
  /**
   * When true, assets will be downloaded and uncompressed in memory, without the compressedversion being written first to
   * disc.
   */
  UseStreamingForAssetDownloads?: boolean;
  /** The VM size the build was created on. */
  VmSize?: AzureVmSize;
  /** The configuration for the VmStartupScript feature for the build */
  VmStartupScriptConfiguration?: VmStartupScriptConfiguration;
}

export interface CreateBuildWithProcessBasedServerRequest extends IPlayFabRequestCommon {
  /**
   * When true, assets will not be copied for each server inside the VM. All serverswill run from the same set of assets, or
   * will have the same assets mounted in the container.
   */
  AreAssetsReadonly?: boolean;
  /** The build name. */
  BuildName: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The list of game assets related to the build. */
  GameAssetReferences: AssetReferenceParams[];
  /** The game certificates for the build. */
  GameCertificateReferences?: GameCertificateReferenceParams[];
  /** The game secrets for the build. */
  GameSecretReferences?: GameSecretReferenceParams[];
  /**
   * The working directory for the game process. If this is not provided, the working directory will be set based on the
   * mount path of the game server executable.
   */
  GameWorkingDirectory?: string;
  /** The instrumentation configuration for the Build. Used only if it is a Windows Build. */
  InstrumentationConfiguration?: InstrumentationConfiguration;
  /**
   * Indicates whether this build will be created using the OS Preview versionPreview OS is recommended for dev builds to
   * detect any breaking changes before they are released to retail. Retail builds should set this value to false.
   */
  IsOSPreview?: boolean;
  /** The Linux instrumentation configuration for the Build. Used only if it is a Linux Build. */
  LinuxInstrumentationConfiguration?: LinuxInstrumentationConfiguration;
  /**
   * Metadata to tag the build. The keys are case insensitive. The build metadata is made available to the server through
   * Game Server SDK (GSDK).Constraints: Maximum number of keys: 30, Maximum key length: 50, Maximum value length: 100
   */
  Metadata?: Record<string, string | null>;
  /** The configuration for the monitoring application on the build */
  MonitoringApplicationConfiguration?: MonitoringApplicationConfigurationParams;
  /** The number of multiplayer servers to host on a single VM. */
  MultiplayerServerCountPerVm: number;
  /** The OS platform used for running the game process. */
  OsPlatform?: string;
  /** The ports to map the build on. */
  Ports: Port[];
  /** The region configurations for the build. */
  RegionConfigurations: BuildRegionParams[];
  /**
   * The command to run when the multiplayer server is started, including any arguments. The path to any executable should be
   * relative to the root asset folder when unzipped.
   */
  StartMultiplayerServerCommand: string;
  /**
   * DEPRECATED - this is always true. Assets are downloaded and uncompressed in memory, without the compressedversion being
   * written first to disc.
   * @deprecated Please use  instead.
   */
  UseStreamingForAssetDownloads?: boolean;
  /** The VM size to create the build on. */
  VmSize?: AzureVmSize;
  /** The configuration for the VmStartupScript for the build */
  VmStartupScriptConfiguration?: VmStartupScriptParams;
}

export interface CreateBuildWithProcessBasedServerResponse extends IPlayFabResultCommon {
  /**
   * When true, assets will not be copied for each server inside the VM. All serverswill run from the same set of assets, or
   * will have the same assets mounted in the container.
   */
  AreAssetsReadonly?: boolean;
  /** The guid string build ID. Must be unique for every build. */
  BuildId?: string;
  /** The build name. */
  BuildName?: string;
  /** The flavor of container of the build. */
  ContainerFlavor?: ContainerFlavor;
  /** The time the build was created in UTC. */
  CreationTime?: string;
  /** The game assets for the build. */
  GameAssetReferences?: AssetReference[];
  /** The game certificates for the build. */
  GameCertificateReferences?: GameCertificateReference[];
  /** The game secrets for the build. */
  GameSecretReferences?: GameSecretReference[];
  /**
   * The working directory for the game process. If this is not provided, the working directory will be set based on the
   * mount path of the game server executable.
   */
  GameWorkingDirectory?: string;
  /** The instrumentation configuration for this build. */
  InstrumentationConfiguration?: InstrumentationConfiguration;
  /**
   * Indicates whether this build will be created using the OS Preview versionPreview OS is recommended for dev builds to
   * detect any breaking changes before they are released to retail. Retail builds should set this value to false.
   */
  IsOSPreview?: boolean;
  /** The Linux instrumentation configuration for this build. */
  LinuxInstrumentationConfiguration?: LinuxInstrumentationConfiguration;
  /** The metadata of the build. */
  Metadata?: Record<string, string | null>;
  /** The configuration for the monitoring application for the build */
  MonitoringApplicationConfiguration?: MonitoringApplicationConfiguration;
  /** The number of multiplayer servers to host on a single VM of the build. */
  MultiplayerServerCountPerVm: number;
  /** The OS platform used for running the game process. */
  OsPlatform?: string;
  /** The ports the build is mapped on. */
  Ports?: Port[];
  /** The region configuration for the build. */
  RegionConfigurations?: BuildRegion[];
  /** The type of game server being hosted. */
  ServerType?: string;
  /**
   * The command to run when the multiplayer server is started, including any arguments. The path to any executable is
   * relative to the root asset folder when unzipped.
   */
  StartMultiplayerServerCommand?: string;
  /**
   * When true, assets will be downloaded and uncompressed in memory, without the compressedversion being written first to
   * disc.
   */
  UseStreamingForAssetDownloads?: boolean;
  /** The VM size the build was created on. */
  VmSize?: AzureVmSize;
  /** The configuration for the VmStartupScript feature for the build */
  VmStartupScriptConfiguration?: VmStartupScriptConfiguration;
}

export interface CreateLobbyRequest extends IPlayFabRequestCommon {
  /**
   * The policy indicating who is allowed to join the lobby, and the visibility to queries. May be &#39;Public&#39;, &#39;Friends&#39; or
   * &#39;Private&#39;. Public means the lobby is both visible in queries and any player may join, including invited players. Friends
   * means that users who are bidirectional friends of members in the lobby may search to find friend lobbies, to retrieve
   * its connection string. Private means the lobby is not visible in queries, and a player must receive an invitation to
   * join. Defaults to &#39;Public&#39; on creation. Can only be changed by the lobby owner.
   */
  AccessPolicy?: AccessPolicy;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /**
   * The private key-value pairs which are visible to all entities in the lobby. At most 30 key-value pairs may be stored
   * here, keys are limited to 30 characters and values to 1000. The total size of all lobbyData values may not exceed 4096
   * bytes. Keys are case sensitive.
   */
  LobbyData?: Record<string, string | null>;
  /** The maximum number of players allowed in the lobby. The value must be between 2 and 128. */
  MaxPlayers: number;
  /**
   * The member initially added to the lobby. Client must specify exactly one member, which is the creator&#39;s entity and
   * member data. Member PubSubConnectionHandle must be null or empty. Game servers must not specify any members.
   */
  Members?: Member[];
  /** The lobby owner. Must be the calling entity. */
  Owner: EntityKey;
  /**
   * The policy for how a new owner is chosen. May be &#39;Automatic&#39;, &#39;Manual&#39; or &#39;None&#39;. Can only be specified by clients. If
   * client-owned and &#39;Automatic&#39; - The Lobby service will automatically assign another connected owner when the current
   * owner leaves or disconnects. The useConnections property must be true. If client - owned and &#39;Manual&#39; - Ownership is
   * protected as long as the current owner is connected. If the current owner leaves or disconnects any member may set
   * themselves as the current owner. The useConnections property must be true. If client-owned and &#39;None&#39; - Any member can
   * set ownership. The useConnections property can be either true or false.
   */
  OwnerMigrationPolicy?: OwnerMigrationPolicy;
  /**
   * A setting that controls whether only the lobby owner can send invites to join the lobby. When true, only the lobby owner
   * can send invites. When false or not specified, any member can send invites. Defaults to false if not specified.
   * Restricted to client owned lobbies.
   */
  RestrictInvitesToLobbyOwner: boolean;
  /**
   * The public key-value pairs which allow queries to differentiate between lobbies. Queries will refer to these key-value
   * pairs in their filter and order by clauses to retrieve lobbies fitting the specified criteria. At most 30 key-value
   * pairs may be stored here. Keys are of the format string_key1, string_key2 ... string_key30 for string values, or
   * number_key1, number_key2, ... number_key30 for numeric values.Numeric values are floats. Values can be at most 256
   * characters long. The total size of all searchData values may not exceed 1024 bytes.
   */
  SearchData?: Record<string, string | null>;
  /**
   * A setting to control whether connections are used. Defaults to true. When true, notifications are sent to subscribed
   * players, disconnect detection removes connectionHandles, only owner migration policies using connections are allowed,
   * and lobbies must have at least one connected member to be searchable or be a server hosted lobby with a connected
   * server. If false, then notifications are not sent, connections are not allowed, and lobbies do not need connections to
   * be searchable.
   */
  UseConnections: boolean;
}

export interface CreateLobbyResult extends IPlayFabResultCommon {
  /** A field which indicates which lobby the user will be joining. */
  ConnectionString: string;
  /** Id to uniquely identify a lobby. */
  LobbyId: string;
}

export interface CreateMatchmakingTicketRequest extends IPlayFabRequestCommon {
  /** The User who created this ticket. */
  Creator: MatchmakingPlayer;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** How long to attempt matching this ticket in seconds. */
  GiveUpAfterSeconds: number;
  /** A list of Entity Keys of other users to match with. */
  MembersToMatchWith?: EntityKey[];
  /** The Id of a match queue. */
  QueueName: string;
}

export interface CreateMatchmakingTicketResult extends IPlayFabResultCommon {
  /** The Id of the ticket to find a match for. */
  TicketId: string;
}

export interface CreateRemoteUserRequest extends IPlayFabRequestCommon {
  /** The guid string build ID of to create the remote user for. */
  BuildId: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The expiration time for the remote user created. Defaults to expiring in one day if not specified. */
  ExpirationTime?: string;
  /** The region of virtual machine to create the remote user for. */
  Region: string;
  /** The username to create the remote user with. */
  Username: string;
  /** The virtual machine ID the multiplayer server is located on. */
  VmId: string;
}

export interface CreateRemoteUserResponse extends IPlayFabResultCommon {
  /** The expiration time for the remote user created. */
  ExpirationTime?: string;
  /** The generated password for the remote user that was created. */
  Password?: string;
  /** The username for the remote user that was created. */
  Username?: string;
}

export interface CreateScenarioRequest extends IPlayFabRequestCommon {
  /** A dictionary of allowed condition keys and the allowed condition values for each. */
  Conditions?: ScenarioConfigCondition[];
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** List of strings that represents all the events that are allowed to be present in a MatchResult. */
  Events?: string[];
  /** The name of the scenario to create. */
  Name: string;
}

export interface CreateScenarioResponse extends IPlayFabResultCommon {
  /** The id of the scenario that was created. */
  ScenarioId?: string;
}

export interface CreateServerBackfillTicketRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** How long to attempt matching this ticket in seconds. */
  GiveUpAfterSeconds: number;
  /** The users who will be part of this ticket, along with their team assignments. */
  Members: MatchmakingPlayerWithTeamAssignment[];
  /** The Id of a match queue. */
  QueueName: string;
  /** The details of the server the members are connected to. */
  ServerDetails?: ServerDetails;
}

export interface CreateServerBackfillTicketResult extends IPlayFabResultCommon {
  /** The Id of the ticket to find a match for. */
  TicketId: string;
}

export interface CreateServerMatchmakingTicketRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** How long to attempt matching this ticket in seconds. */
  GiveUpAfterSeconds: number;
  /** The users who will be part of this ticket. */
  Members: MatchmakingPlayer[];
  /** The Id of a match queue. */
  QueueName: string;
}

export interface CreateTitleMultiplayerServersQuotaChangeRequest extends IPlayFabRequestCommon {
  /** A brief description of the requested changes. */
  ChangeDescription?: string;
  /** Changes to make to the titles cores quota. */
  Changes: CoreCapacityChange[];
  /** Email to be contacted by our team about this request. Only required when a request is not approved. */
  ContactEmail?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Additional information about this request that our team can use to better understand the requirements. */
  Notes?: string;
  /** When these changes would need to be in effect. Only required when a request is not approved. */
  StartDate?: string;
}

export interface CreateTitleMultiplayerServersQuotaChangeResponse extends IPlayFabResultCommon {
  /** Id of the change request that was created. */
  RequestId?: string;
  /** Determines if the request was approved or not. When false, our team is reviewing and may respond within 2 business days. */
  WasApproved: boolean;
}

export interface CurrentServerStats {
  /** The number of active multiplayer servers. */
  Active: number;
  /** The number of multiplayer servers still downloading game resources (such as assets). */
  Propping: number;
  /** The number of standingby multiplayer servers. */
  StandingBy: number;
  /** The total number of multiplayer servers. */
  Total: number;
}

export interface CustomDifferenceRuleExpansion {
  /** Manually specify the values to use for each expansion interval (this overrides Difference, Delta, and MaxDifference). */
  DifferenceOverrides: OverrideDouble[];
  /** How many seconds before this rule is expanded. */
  SecondsBetweenExpansions: number;
}

export interface CustomRegionSelectionRuleExpansion {
  /** Manually specify the maximum latency to use for each expansion interval. */
  MaxLatencyOverrides: OverrideUnsignedInt[];
  /** How many seconds before this rule is expanded. */
  SecondsBetweenExpansions: number;
}

export interface CustomSetIntersectionRuleExpansion {
  /** Manually specify the values to use for each expansion interval. */
  MinIntersectionSizeOverrides: OverrideUnsignedInt[];
  /** How many seconds before this rule is expanded. */
  SecondsBetweenExpansions: number;
}

export interface CustomTeamDifferenceRuleExpansion {
  /** Manually specify the team difference value to use for each expansion interval. */
  DifferenceOverrides: OverrideDouble[];
  /** How many seconds before this rule is expanded. */
  SecondsBetweenExpansions: number;
}

export interface CustomTeamSizeBalanceRuleExpansion {
  /** Manually specify the team size difference to use for each expansion interval. */
  DifferenceOverrides: OverrideUnsignedInt[];
  /** How many seconds before this rule is expanded. */
  SecondsBetweenExpansions: number;
}

export interface DeactivateModelRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The ID of model that will be deactivated. */
  ModelId: string;
  /** The ID of the scenario for the model to deactivate. */
  ScenarioId: string;
}

export interface DeactivateModelResponse extends IPlayFabResultCommon {
}

export interface DeleteAssetRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The filename of the asset to delete. */
  FileName: string;
}

export interface DeleteBuildAliasRequest extends IPlayFabRequestCommon {
  /** The guid string alias ID of the alias to perform the action on. */
  AliasId: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
}

export interface DeleteBuildRegionRequest extends IPlayFabRequestCommon {
  /** The guid string ID of the build we want to update regions for. */
  BuildId: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The build region to delete. */
  Region: string;
}

export interface DeleteBuildRequest extends IPlayFabRequestCommon {
  /** The guid string build ID of the build to delete. */
  BuildId: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
}

export interface DeleteCertificateRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The name of the certificate. */
  Name: string;
}

export interface DeleteContainerImageRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The container image repository we want to delete. */
  ImageName?: string;
}

export interface DeleteLobbyRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The id of the lobby. */
  LobbyId?: string;
}

export interface DeleteModelRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The ID of the model to be deleted. */
  ModelId: string;
  /** The ID of the scenario for the model to delete. */
  ScenarioId: string;
}

export interface DeleteModelResponse extends IPlayFabResultCommon {
}

export interface DeleteRemoteUserRequest extends IPlayFabRequestCommon {
  /** The guid string build ID of the multiplayer server where the remote user is to delete. */
  BuildId: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The region of the multiplayer server where the remote user is to delete. */
  Region: string;
  /** The username of the remote user to delete. */
  Username: string;
  /** The virtual machine ID the multiplayer server is located on. */
  VmId: string;
}

export interface DeleteScenarioRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /**
   * If this flag is specified, the scenario will be deleted even if it contains models, as long as they are in either a
   * failed, cancelled, or deactivated state.
   */
  ForceDelete: boolean;
  /** The Scenario ID of the scenario to be deleted. */
  ScenarioId: string;
}

export interface DeleteScenarioResponse extends IPlayFabResultCommon {
}

export interface DeleteSecretRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The name of the secret. */
  Name: string;
}

export interface DifferenceRule {
  /** Description of the attribute used by this rule to match tickets. */
  Attribute: QueueRuleAttribute;
  /**
   * Describes the behavior when an attribute is not specified in the ticket creation request or in the user&#39;s entity
   * profile.
   */
  AttributeNotSpecifiedBehavior: AttributeNotSpecifiedBehavior;
  /**
   * Collection of fields relating to expanding this rule at set intervals. Only one expansion can be set per rule. When this
   * is set, Difference is ignored.
   */
  CustomExpansion?: CustomDifferenceRuleExpansion;
  /**
   * The default value assigned to tickets that are missing the attribute specified by AttributePath (assuming that
   * AttributeNotSpecifiedBehavior is false). Optional.
   */
  DefaultAttributeValue?: number;
  /** The allowed difference between any two tickets at the start of matchmaking. */
  Difference: number;
  /** Collection of fields relating to expanding this rule at set intervals. Only one expansion can be set per rule. */
  LinearExpansion?: LinearDifferenceRuleExpansion;
  /** How values are treated when there are multiple players in a single ticket. */
  MergeFunction: AttributeMergeFunction;
  /** Friendly name chosen by developer. */
  Name: string;
  /**
   * How many seconds before this rule is no longer enforced (but tickets that comply with this rule will still be
   * prioritized over those that don&#39;t). Leave blank if this rule is always enforced.
   */
  SecondsUntilOptional?: number;
  /** The relative weight of this rule compared to others. */
  Weight: number;
}

type DirectPeerConnectivityOptions = "None"
  | "SamePlatformType"
  | "DifferentPlatformType"
  | "AnyPlatformType"
  | "SameEntityLoginProvider"
  | "DifferentEntityLoginProvider"
  | "AnyEntityLoginProvider"
  | "AnyPlatformTypeAndEntityLoginProvider"
  | "OnlyServers";

export interface DynamicStandbySettings {
  /**
   * List of auto standing by trigger values and corresponding standing by multiplier. Defaults to 1.5X at 50%, 3X at 25%,
   * and 4X at 5%
   */
  DynamicFloorMultiplierThresholds?: DynamicStandbyThreshold[];
  /** When true, dynamic standby will be enabled */
  IsEnabled: boolean;
  /** The time it takes to reduce target standing by to configured floor value after an increase. Defaults to 30 minutes */
  RampDownSeconds?: number;
}

export interface DynamicStandbyThreshold {
  /** When the trigger threshold is reached, multiply by this value */
  Multiplier: number;
  /** The multiplier will be applied when the actual standby divided by target standby floor is less than this value */
  TriggerThresholdPercentage: number;
}

export interface EmptyResponse extends IPlayFabResultCommon {
}

export interface EnableMultiplayerServersForTitleRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
}

export interface EnableMultiplayerServersForTitleResponse extends IPlayFabResultCommon {
  /** The enabled status for the multiplayer server features for the title. */
  Status?: TitleMultiplayerServerEnabledStatus;
}

export interface EnablePartiesForTitleRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
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

type ExternalFriendSources = "None"
  | "Steam"
  | "Facebook"
  | "Xbox"
  | "Psn"
  | "All";

export interface FindFriendLobbiesRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /**
   * Controls whether this query should link to friends made on the Facebook network. Defaults to false
   * @deprecated Please use ExternalPlatformFriends instead.
   */
  ExcludeFacebookFriends?: boolean;
  /**
   * Controls whether this query should link to friends made on the Steam network. Defaults to false
   * @deprecated Please use ExternalPlatformFriends instead.
   */
  ExcludeSteamFriends?: boolean;
  /** Indicates which other platforms&#39; friends this query should link to. */
  ExternalPlatformFriends?: ExternalFriendSources;
  /**
   * OData style string that contains one or more filters. Only the following operators are supported: &quot;and&quot; (logical and),
   * &quot;eq&quot; (equal), &quot;ne&quot; (not equals), &quot;ge&quot; (greater than or equal), &quot;gt&quot; (greater than), &quot;le&quot; (less than or equal), and &quot;lt&quot;
   * (less than). The left-hand side of each OData logical expression should be either a search property key (e.g.
   * string_key1, number_key3, etc) or one of the pre-defined search keys all of which must be prefixed by &quot;lobby/&quot;:
   * lobby/memberCount (number of players in a lobby), lobby/maxMemberCount (maximum number of players allowed in a lobby),
   * lobby/memberCountRemaining (remaining number of players who can be allowed in a lobby), lobby/membershipLock (must equal
   * &#39;Unlocked&#39; or &#39;Locked&#39;), lobby/amOwner (required to equal &quot;true&quot;), lobby/amMember (required to equal &quot;true&quot;).
   */
  Filter?: string;
  /**
   * OData style string that contains sorting for this query in either ascending (&quot;asc&quot;) or descending (&quot;desc&quot;) order.
   * OrderBy clauses are of the form &quot;number_key1 asc&quot; or the pre-defined search key &quot;lobby/memberCount asc&quot;,
   * &quot;lobby/memberCountRemaining desc&quot; and &quot;lobby/maxMemberCount desc&quot;. To sort by closest, a moniker `distance{number_key1 =
   * 5}` can be used to sort by distance from the given number. This field only supports either one sort clause or one
   * distance clause.
   */
  OrderBy?: string;
  /** Request pagination information. */
  Pagination?: PaginationRequest;
  /** Xbox token if Xbox friends should be included. Requires Xbox be configured on PlayFab. */
  XboxToken?: string;
}

export interface FindFriendLobbiesResult extends IPlayFabResultCommon {
  /** Array of lobbies found that matched FindFriendLobbies request. */
  Lobbies: FriendLobbySummary[];
  /** Pagination response for FindFriendLobbies request. */
  Pagination: PaginationResponse;
}

export interface FindLobbiesRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /**
   * OData style string that contains one or more filters. Only the following operators are supported: &quot;and&quot; (logical and),
   * &quot;eq&quot; (equal), &quot;ne&quot; (not equals), &quot;ge&quot; (greater than or equal), &quot;gt&quot; (greater than), &quot;le&quot; (less than or equal), and &quot;lt&quot;
   * (less than). The left-hand side of each OData logical expression should be either a search property key (e.g.
   * string_key1, number_key3, etc) or one of the pre-defined search keys all of which must be prefixed by &quot;lobby/&quot;:
   * lobby/memberCount (number of players in a lobby), lobby/maxMemberCount (maximum number of players allowed in a lobby),
   * lobby/memberCountRemaining (remaining number of players who can be allowed in a lobby), lobby/membershipLock (must equal
   * &#39;Unlocked&#39; or &#39;Locked&#39;), lobby/amOwner (required to equal &quot;true&quot;), lobby/amMember (required to equal &quot;true&quot;).
   */
  Filter?: string;
  /**
   * OData style string that contains sorting for this query in either ascending (&quot;asc&quot;) or descending (&quot;desc&quot;) order.
   * OrderBy clauses are of the form &quot;number_key1 asc&quot; or the pre-defined search key &quot;lobby/memberCount asc&quot;,
   * &quot;lobby/memberCountRemaining desc&quot; and &quot;lobby/maxMemberCount desc&quot;. To sort by closest, a moniker `distance{number_key1 =
   * 5}` can be used to sort by distance from the given number. This field only supports either one sort clause or one
   * distance clause.
   */
  OrderBy?: string;
  /** Request pagination information. */
  Pagination?: PaginationRequest;
}

export interface FindLobbiesResult extends IPlayFabResultCommon {
  /** Array of lobbies found that matched FindLobbies request. */
  Lobbies: LobbySummary[];
  /** Pagination response for FindLobbies request. */
  Pagination: PaginationResponse;
}

export interface FriendLobbySummary {
  /**
   * A string used to join the lobby.This field is populated by the Lobby service.Invites are performed by communicating this
   * connectionString to other players.
   */
  ConnectionString: string;
  /** The current number of players in the lobby. */
  CurrentPlayers: number;
  /** Friends in Lobby. */
  Friends?: EntityKey[];
  /** Id to uniquely identify a lobby. */
  LobbyId: string;
  /** The maximum number of players allowed in the lobby. */
  MaxPlayers: number;
  /** A setting indicating whether members are allowed to join this lobby. When Locked new members are prevented from joining. */
  MembershipLock?: MembershipLock;
  /** The client or server entity which owns this lobby. */
  Owner: EntityKey;
  /** Search data. */
  SearchData?: Record<string, string | null>;
}

export interface GameCertificateReference {
  /**
   * An alias for the game certificate. The game server will reference this alias via GSDK config to retrieve the game
   * certificate. This alias is used as an identifier in game server code to allow a new certificate with different Name
   * field to be uploaded without the need to change any game server code to reference the new Name.
   */
  GsdkAlias?: string;
  /**
   * The name of the game certificate. This name should match the name of a certificate that was previously uploaded to this
   * title.
   */
  Name?: string;
}

export interface GameCertificateReferenceParams {
  /**
   * An alias for the game certificate. The game server will reference this alias via GSDK config to retrieve the game
   * certificate. This alias is used as an identifier in game server code to allow a new certificate with different Name
   * field to be uploaded without the need to change any game server code to reference the new Name.
   */
  GsdkAlias: string;
  /**
   * The name of the game certificate. This name should match the name of a certificate that was previously uploaded to this
   * title.
   */
  Name: string;
}

export interface GameSecretReference {
  /** The name of the game secret. This name should match the name of a secret that was previously added to this title. */
  Name?: string;
}

export interface GameSecretReferenceParams {
  /** The name of the game secret. This name should match the name of a secret that was previously added to this title. */
  Name: string;
}

export interface GetAssetDownloadUrlRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The asset&#39;s file name to get the download URL for. */
  FileName: string;
}

export interface GetAssetDownloadUrlResponse extends IPlayFabResultCommon {
  /** The asset&#39;s download URL. */
  AssetDownloadUrl?: string;
  /** The asset&#39;s file name to get the download URL for. */
  FileName?: string;
}

export interface GetAssetUploadUrlRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The asset&#39;s file name to get the upload URL for. */
  FileName: string;
}

export interface GetAssetUploadUrlResponse extends IPlayFabResultCommon {
  /** The asset&#39;s upload URL. */
  AssetUploadUrl?: string;
  /** The asset&#39;s file name to get the upload URL for. */
  FileName?: string;
}

export interface GetBuildAliasRequest extends IPlayFabRequestCommon {
  /** The guid string alias ID of the alias to perform the action on. */
  AliasId: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
}

export interface GetBuildRequest extends IPlayFabRequestCommon {
  /** The guid string build ID of the build to get. */
  BuildId: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
}

export interface GetBuildResponse extends IPlayFabResultCommon {
  /**
   * When true, assets will not be copied for each server inside the VM. All serverswill run from the same set of assets, or
   * will have the same assets mounted in the container.
   */
  AreAssetsReadonly?: boolean;
  /** The guid string build ID of the build. */
  BuildId?: string;
  /** The build name. */
  BuildName?: string;
  /** The current build status. Valid values are - Deploying, Deployed, DeletingRegion, Unhealthy. */
  BuildStatus?: string;
  /** The flavor of container of he build. */
  ContainerFlavor?: ContainerFlavor;
  /**
   * The container command to run when the multiplayer server has been allocated, including any arguments. This only applies
   * to custom builds. If the build is a managed build, this field will be null.
   */
  ContainerRunCommand?: string;
  /** The time the build was created in UTC. */
  CreationTime?: string;
  /** The custom game container image for a custom build. */
  CustomGameContainerImage?: ContainerImageReference;
  /** The game assets for the build. */
  GameAssetReferences?: AssetReference[];
  /** The game certificates for the build. */
  GameCertificateReferences?: GameCertificateReference[];
  /** The instrumentation configuration of the build. */
  InstrumentationConfiguration?: InstrumentationConfiguration;
  /**
   * Metadata of the build. The keys are case insensitive. The build metadata is made available to the server through Game
   * Server SDK (GSDK).
   */
  Metadata?: Record<string, string | null>;
  /** The number of multiplayer servers to hosted on a single VM of the build. */
  MultiplayerServerCountPerVm: number;
  /** The OS platform used for running the game process. */
  OsPlatform?: string;
  /** The ports the build is mapped on. */
  Ports?: Port[];
  /** The region configuration for the build. */
  RegionConfigurations?: BuildRegion[];
  /** The resource constraints to apply to each server on the VM. */
  ServerResourceConstraints?: ServerResourceConstraintParams;
  /** The type of game server being hosted. */
  ServerType?: string;
  /**
   * The command to run when the multiplayer server has been allocated, including any arguments. This only applies to managed
   * builds. If the build is a custom build, this field will be null.
   */
  StartMultiplayerServerCommand?: string;
  /**
   * When true, assets will be downloaded and uncompressed in memory, without the compressedversion being written first to
   * disc.
   * @deprecated Do not use
   */
  UseStreamingForAssetDownloads?: boolean;
  /** The VM size the build was created on. */
  VmSize?: AzureVmSize;
  /** The configuration for the VmStartupScript feature for the build */
  VmStartupScriptConfiguration?: VmStartupScriptConfiguration;
}

export interface GetCognitiveServicesLocalesRequest extends IPlayFabRequestCommon {
  /** The type of the cognitive service for which locales are being requested. */
  CognitiveServicesType: CognitiveServicesType;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The region the client is closest to (A service endpoint will be provided for this region or one nearest one available). */
  Region: string;
}

export interface GetCognitiveServicesLocalesResponse extends IPlayFabResultCommon {
  /** The locales for the cognitive service. */
  Locales?: CognitiveServicesLocale[];
}

export interface GetCognitiveServicesTokenRequest extends IPlayFabRequestCommon {
  /** The type of the cognitive service for which a token is being requested. */
  CognitiveServicesType: CognitiveServicesType;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The region the client is closest to (A service endpoint will be provided for this region or one nearest one available). */
  Region: string;
}

export interface GetCognitiveServicesTokenResponse extends IPlayFabResultCommon {
  /** Token expiration time. */
  ExpirationTimeUtc?: string;
  /** The url for the service where further requests can be made with the given token. */
  ServiceEndpoint?: string;
  /** The token for the cognitive service. */
  Token?: string;
}

export interface GetContainerRegistryCredentialsRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
}

export interface GetContainerRegistryCredentialsResponse extends IPlayFabResultCommon {
  /** The url of the container registry. */
  DnsName?: string;
  /** The password for accessing the container registry. */
  Password?: string;
  /** The username for accessing the container registry. */
  Username?: string;
}

export interface GetLobbyRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The id of the lobby. */
  LobbyId?: string;
}

export interface GetLobbyResult extends IPlayFabResultCommon {
  /** The information pertaining to the requested lobby. */
  Lobby: Lobby;
}

export interface GetMatchmakingQueueRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The Id of the matchmaking queue to retrieve. */
  QueueName?: string;
}

export interface GetMatchmakingQueueResult extends IPlayFabResultCommon {
  /** The matchmaking queue config. */
  MatchmakingQueue?: MatchmakingQueueConfig;
}

export interface GetMatchmakingTicketRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /**
   * Determines whether the matchmaking attributes will be returned as an escaped JSON string or as an un-escaped JSON
   * object.
   */
  EscapeObject: boolean;
  /** The name of the queue to find a match for. */
  QueueName: string;
  /** The Id of the ticket to find a match for. */
  TicketId: string;
}

export interface GetMatchmakingTicketResult extends IPlayFabResultCommon {
  /**
   * The reason why the current ticket was canceled. This field is only set if the ticket is in canceled state.
   * @deprecated Please use CancellationReasonString instead.
   */
  CancellationReason?: CancellationReason;
  /**
   * The reason why the current ticket was canceled. This field is only set if the ticket is in canceled state. Please retry
   * if CancellationReason is RetryRequired.
   */
  CancellationReasonString?: string;
  /** Change number used for differentiating older matchmaking status updates from newer ones. */
  ChangeNumber?: number;
  /** The server date and time at which ticket was created. */
  Created: string;
  /** The Creator&#39;s entity key. */
  Creator: EntityKey;
  /** How long to attempt matching this ticket in seconds. */
  GiveUpAfterSeconds: number;
  /** The Id of a match. */
  MatchId?: string;
  /** A list of Users that have joined this ticket. */
  Members: MatchmakingPlayer[];
  /** A list of PlayFab Ids of Users to match with. */
  MembersToMatchWith?: EntityKey[];
  /** The Id of a match queue. */
  QueueName: string;
  /**
   * The current ticket status. Possible values are: WaitingForPlayers, WaitingForMatch, WaitingForServer, Canceled and
   * Matched.
   */
  Status: string;
  /** The Id of the ticket to find a match for. */
  TicketId: string;
}

export interface GetMatchRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /**
   * Determines whether the matchmaking attributes will be returned as an escaped JSON string or as an un-escaped JSON
   * object.
   */
  EscapeObject: boolean;
  /** The Id of a match. */
  MatchId: string;
  /** The name of the queue to join. */
  QueueName: string;
  /** Determines whether the matchmaking attributes for each user should be returned in the response for match request. */
  ReturnMemberAttributes: boolean;
}

export interface GetMatchResult extends IPlayFabResultCommon {
  /** A string that is used by players that are matched together to join an arranged lobby. */
  ArrangementString?: string;
  /** The Id of a match. */
  MatchId: string;
  /** A list of Users that are matched together, along with their team assignments. */
  Members: MatchmakingPlayerWithTeamAssignment[];
  /**
   * A list of regions that the match could be played in sorted by preference. This value is only set if the queue has a
   * region selection rule.
   */
  RegionPreferences?: string[];
  /** The details of the server that the match has been allocated to. */
  ServerDetails?: ServerDetails;
}

export interface GetModelDetailsRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The ID of the Model we want to retrieve details for. */
  ModelId: string;
  /** The ID of the Scenario that the requested model belongs to. */
  ScenarioId: string;
}

export interface GetModelDetailsResponse extends IPlayFabResultCommon {
  /** The details of the Model that was requested. */
  ModelDetails?: ModelDetails;
}

export interface GetModelsByScenarioRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The ID of the scenario to get the model. */
  ScenarioId: string;
}

export interface GetModelsByScenarioResponse extends IPlayFabResultCommon {
  /** The model result based on the given scenario. */
  Models?: ModelSummary[];
}

export interface GetMultiplayerServerAndTokenRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /**
   * The title generated guid string session ID of the multiplayer server to get details for. This is to keep track of
   * multiplayer server sessions.
   */
  SessionId: string;
  /** List of players for which to get tokens. */
  TokenPlayerIds: string[];
}

export interface GetMultiplayerServerAndTokenResponse extends IPlayFabResultCommon {
  /** The identity of the build in which the server was allocated. */
  BuildId?: string;
  /** The connected players in the multiplayer server. */
  ConnectedPlayers?: ConnectedPlayer[];
  /** The fully qualified domain name of the virtual machine that is hosting this multiplayer server. */
  FQDN?: string;
  /** The public IPv4 address of the virtual machine that is hosting this multiplayer server. */
  IPV4Address?: string;
  /** The time (UTC) at which a change in the multiplayer server state was observed. */
  LastStateTransitionTime?: string;
  /** A set of tokens that can be used to connect to the server. Tokens match the requested user ids */
  PlayerTokens?: PlayerToken[];
  /** The ports the multiplayer server uses. */
  Ports?: Port[];
  /** The list of public Ipv4 addresses associated with the server. */
  PublicIPV4Addresses?: PublicIpAddress[];
  /** The region the multiplayer server is located in. */
  Region?: string;
  /** The string server ID of the multiplayer server generated by PlayFab. */
  ServerId?: string;
  /** The guid string session ID of the multiplayer server. */
  SessionId?: string;
  /** The state of the multiplayer server. */
  State?: string;
  /** The virtual machine ID that the multiplayer server is located on. */
  VmId?: string;
}

export interface GetMultiplayerServerDetailsRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /**
   * The title generated guid string session ID of the multiplayer server to get details for. This is to keep track of
   * multiplayer server sessions.
   */
  SessionId: string;
}

export interface GetMultiplayerServerDetailsResponse extends IPlayFabResultCommon {
  /** The identity of the build in which the server was allocated. */
  BuildId?: string;
  /** The connected players in the multiplayer server. */
  ConnectedPlayers?: ConnectedPlayer[];
  /** The fully qualified domain name of the virtual machine that is hosting this multiplayer server. */
  FQDN?: string;
  /** The public IPv4 address of the virtual machine that is hosting this multiplayer server. */
  IPV4Address?: string;
  /** The time (UTC) at which a change in the multiplayer server state was observed. */
  LastStateTransitionTime?: string;
  /** The ports the multiplayer server uses. */
  Ports?: Port[];
  /** The list of public Ipv4 addresses associated with the server. */
  PublicIPV4Addresses?: PublicIpAddress[];
  /** The region the multiplayer server is located in. */
  Region?: string;
  /** The string server ID of the multiplayer server generated by PlayFab. */
  ServerId?: string;
  /** The guid string session ID of the multiplayer server. */
  SessionId?: string;
  /** The state of the multiplayer server. */
  State?: string;
  /** The virtual machine ID that the multiplayer server is located on. */
  VmId?: string;
}

export interface GetMultiplayerServerLogsRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /**
   * The region of the multiplayer server to get logs for.
   * @deprecated Do not use
   */
  Region?: string;
  /** The server ID of multiplayer server to get logs for. */
  ServerId: string;
}

export interface GetMultiplayerServerLogsResponse extends IPlayFabResultCommon {
  /** URL for logs download. */
  LogDownloadUrl?: string;
}

export interface GetMultiplayerSessionLogsBySessionIdRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The server ID of multiplayer server to get logs for. */
  SessionId: string;
}

export interface GetPlayerSkillForConditionsFromModelRequest extends IPlayFabRequestCommon {
  /** A map from condition names to condition values in which to get the skills of the players. */
  Conditions: ConditionsSet[];
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** If set to true, TrueSkill will return the player&#39;s SkillBreakdown as part of the response. */
  IncludeSkillBreakdown: boolean;
  /** ID of the model to get the players&#39; skill from. */
  ModelId: string;
  /** List of players to retrieve skill values for. */
  Players: TrueSkillPlayer[];
  /** ID of the scenario to get the players&#39; skill from. */
  ScenarioId: string;
}

export interface GetPlayerSkillForConditionsFromModelResponse extends IPlayFabResultCommon {
  /** If the specified model is marked as primary for the given scenario. */
  IsModelPrimary: boolean;
  /** The skill values for the specified players in a given model. */
  Skills?: PlayerSkills[];
}

export interface GetPlayerSkillForConditionsRequest extends IPlayFabRequestCommon {
  /** A map from condition names to condition values in which to get the skills of the players. */
  Conditions: ConditionsSet[];
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** If set to true, TrueSkill will return the player&#39;s SkillBreakdown as part of the response. */
  IncludeSkillBreakdown: boolean;
  /** List of players to retrieve skill values for. */
  Players: TrueSkillPlayer[];
  /** ID of the scenario to get the players&#39; skill from. */
  ScenarioId: string;
}

export interface GetPlayerSkillForConditionsResponse extends IPlayFabResultCommon {
  /** ID of the Model where the skill values were retrieved from. */
  ModelId?: string;
  /** The skill values for the specified players in the primary model of a given scenario. */
  Skills?: PlayerSkills[];
}

export interface GetPlayerSkillFromModelRequest extends IPlayFabRequestCommon {
  /** A map from condition names to condition values in which to get the skills of the players. */
  Conditions?: Record<string, string | null>;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** If set to true, TrueSkill will return the player&#39;s SkillBreakdown as part of the response. */
  IncludeSkillBreakdown: boolean;
  /** ID of the model to get the players&#39; skill from. */
  ModelId: string;
  /** List of players to retrieve skill values for. */
  Players: TrueSkillPlayer[];
  /** ID of the scenario to get the players&#39; skill from. */
  ScenarioId: string;
}

export interface GetPlayerSkillFromModelResponse extends IPlayFabResultCommon {
  /** If the specified model is marked as primary for the given scenario. */
  IsModelPrimary: boolean;
  /** The skill values for the specified players in a given model. */
  Skills?: PlayerSkill[];
}

export interface GetPlayerSkillRequest extends IPlayFabRequestCommon {
  /** A map from condition names to condition values in which to get the skills of the players. */
  Conditions?: Record<string, string | null>;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** If set to true, TrueSkill will return the player&#39;s SkillBreakdown as part of the response. */
  IncludeSkillBreakdown: boolean;
  /** List of players to retrieve skill values for. */
  Players: TrueSkillPlayer[];
  /** ID of the scenario to get the players&#39; skill from. */
  ScenarioId: string;
}

export interface GetPlayerSkillResponse extends IPlayFabResultCommon {
  /** ID of the Model where the skill values were retrieved from. */
  ModelId?: string;
  /** The skill values for the specified players in the primary model of a given scenario. */
  Skills?: PlayerSkill[];
}

export interface GetQueueStatisticsRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The name of the queue. */
  QueueName: string;
}

export interface GetQueueStatisticsResult extends IPlayFabResultCommon {
  /** The current number of players in the matchmaking queue, who are waiting to be matched. */
  NumberOfPlayersMatching?: number;
  /** Statistics representing the time (in seconds) it takes for tickets to find a match. */
  TimeToMatchStatisticsInSeconds?: Statistics;
}

export interface GetRemoteLoginEndpointRequest extends IPlayFabRequestCommon {
  /** The guid string build ID of the multiplayer server to get remote login information for. */
  BuildId: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The region of the multiplayer server to get remote login information for. */
  Region: string;
  /** The virtual machine ID the multiplayer server is located on. */
  VmId: string;
}

export interface GetRemoteLoginEndpointResponse extends IPlayFabResultCommon {
  /** The remote login IPV4 address of multiplayer server. */
  IPV4Address?: string;
  /** The remote login port of multiplayer server. */
  Port: number;
}

export interface GetScenarioConfigurationRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The Scenario ID of the given scenario. */
  ScenarioId: string;
}

export interface GetScenarioConfigurationResponse extends IPlayFabResultCommon {
  /** The requested Scenario Configuration. */
  ScenarioConfiguration?: ScenarioConfiguration;
}

export interface GetScenarioConfigurationsRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
}

export interface GetScenarioConfigurationsResponse extends IPlayFabResultCommon {
  /** The Scenario Configurations of the title. */
  ScenarioConfigurations?: ScenarioConfiguration[];
}

export interface GetServerBackfillTicketRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /**
   * Determines whether the matchmaking attributes will be returned as an escaped JSON string or as an un-escaped JSON
   * object.
   */
  EscapeObject: boolean;
  /** The name of the queue to find a match for. */
  QueueName: string;
  /** The Id of the ticket to find a match for. */
  TicketId: string;
}

export interface GetServerBackfillTicketResult extends IPlayFabResultCommon {
  /**
   * The reason why the current ticket was canceled. This field is only set if the ticket is in canceled state.
   * @deprecated Please use CancellationReasonString instead.
   */
  CancellationReason?: CancellationReason;
  /** The reason why the current ticket was canceled. This field is only set if the ticket is in canceled state. */
  CancellationReasonString?: string;
  /** The server date and time at which ticket was created. */
  Created: string;
  /** How long to attempt matching this ticket in seconds. */
  GiveUpAfterSeconds: number;
  /** The Id of a match. */
  MatchId?: string;
  /** A list of Users that are part of this ticket, along with their team assignments. */
  Members: MatchmakingPlayerWithTeamAssignment[];
  /** The Id of a match queue. */
  QueueName: string;
  /** The details of the server the members are connected to. */
  ServerDetails: ServerDetails;
  /** The current ticket status. Possible values are: WaitingForMatch, Canceled and Matched. */
  Status: string;
  /** The Id of the ticket to find a match for. */
  TicketId: string;
}

export interface GetTitleEnabledForMultiplayerServersStatusRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
}

export interface GetTitleEnabledForMultiplayerServersStatusResponse extends IPlayFabResultCommon {
  /** The enabled status for the multiplayer server features for the title. */
  Status?: TitleMultiplayerServerEnabledStatus;
}

export interface GetTitleMultiplayerServersQuotaChangeRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Id of the change request to get. */
  RequestId: string;
}

export interface GetTitleMultiplayerServersQuotaChangeResponse extends IPlayFabResultCommon {
  /** The change request for this title. */
  Change?: QuotaChange;
}

export interface GetTitleMultiplayerServersQuotasRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
}

export interface GetTitleMultiplayerServersQuotasResponse extends IPlayFabResultCommon {
  /** The various quotas for multiplayer servers for the title. */
  Quotas?: TitleMultiplayerServersQuotas;
}

export interface InstrumentationConfiguration {
  /** Designates whether windows instrumentation configuration will be enabled for this Build */
  IsEnabled?: boolean;
  /**
   * This property is deprecated, use IsEnabled. The list of processes to be monitored on a VM for this build. Providing
   * processes will turn on performance metrics collection for this build. Process names should not include extensions. If
   * the game server process is: GameServer.exe; then, ProcessesToMonitor = [ GameServer ]
   */
  ProcessesToMonitor?: string[];
}

export interface InviteToLobbyRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The entity invited to the lobby. */
  InviteeEntity?: EntityKey;
  /** The id of the lobby. */
  LobbyId?: string;
  /** The member entity sending the invite. Must be a member of the lobby. */
  MemberEntity?: EntityKey;
}

export interface JoinArrangedLobbyRequest extends IPlayFabRequestCommon {
  /**
   * The policy indicating who is allowed to join the lobby, and the visibility to queries. May be &#39;Public&#39;, &#39;Friends&#39; or
   * &#39;Private&#39;. Public means the lobby is both visible in queries and any player may join, including invited players. Friends
   * means that users who are bidirectional friends of members in the lobby may search to find friend lobbies, to retrieve
   * its connection string. Private means the lobby is not visible in queries, and a player must receive an invitation to
   * join. Defaults to &#39;Public&#39; on creation. Can only be changed by the lobby owner.
   */
  AccessPolicy?: AccessPolicy;
  /**
   * A field which indicates which lobby the user will be joining. This field is opaque to everyone except the Lobby service
   * and the creator of the arrangementString (Matchmaking). This string defines a unique identifier for the arranged lobby
   * as well as the title and member the string is valid for. Arrangement strings have an expiration.
   */
  ArrangementString: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The maximum number of players allowed in the lobby. The value must be between 2 and 128. */
  MaxPlayers: number;
  /**
   * The private key-value pairs used by the member to communicate information to other members and the owner. Visible to all
   * entities in the lobby. At most 30 key-value pairs may be stored here, keys are limited to 30 characters and values to
   * 1000. The total size of all memberData values may not exceed 4096 bytes. Keys are case sensitive.
   */
  MemberData?: Record<string, string | null>;
  /** The member entity who is joining the lobby. The first member to join will be the lobby owner. */
  MemberEntity: EntityKey;
  /**
   * The policy for how a new owner is chosen. May be &#39;Automatic&#39;, &#39;Manual&#39; or &#39;None&#39;. Can only be specified by clients. If
   * client-owned and &#39;Automatic&#39; - The Lobby service will automatically assign another connected owner when the current
   * owner leaves or disconnects. The useConnections property must be true. If client - owned and &#39;Manual&#39; - Ownership is
   * protected as long as the current owner is connected. If the current owner leaves or disconnects any member may set
   * themselves as the current owner. The useConnections property must be true. If client-owned and &#39;None&#39; - Any member can
   * set ownership. The useConnections property can be either true or false.
   */
  OwnerMigrationPolicy?: OwnerMigrationPolicy;
  /**
   * A setting that controls whether only the lobby owner can send invites to join the lobby. When true, only the lobby owner
   * can send invites. When false or not specified, any member can send invites. Defaults to false if not specified.
   * Restricted to client owned lobbies.
   */
  RestrictInvitesToLobbyOwner: boolean;
  /**
   * A setting to control whether connections are used. Defaults to true. When true, notifications are sent to subscribed
   * players, disconnect detection removes connectionHandles, only owner migration policies using connections are allowed,
   * and lobbies must have at least one connected member to be searchable or be a server hosted lobby with a connected
   * server. If false, then notifications are not sent, connections are not allowed, and lobbies do not need connections to
   * be searchable.
   */
  UseConnections: boolean;
}

export interface JoinLobbyAsServerRequest extends IPlayFabRequestCommon {
  /**
   * A field which indicates which lobby the game_server will be joining. This field is opaque to everyone except the Lobby
   * service.
   */
  ConnectionString: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /**
   * The private key-value pairs which are visible to all entities in the lobby but can only be modified by the joined
   * server.At most 30 key - value pairs may be stored here, keys are limited to 30 characters and values to 1000.The total
   * size of all serverData values may not exceed 4096 bytes.
   */
  ServerData?: Record<string, string | null>;
  /**
   * The game_server entity which is joining the Lobby. If a different game_server entity has already joined the request will
   * fail unless the joined entity is disconnected, in which case the incoming game_server entity will replace the
   * disconnected entity.
   */
  ServerEntity: EntityKey;
}

export interface JoinLobbyAsServerResult extends IPlayFabResultCommon {
  /** Successfully joined lobby&#39;s id. */
  LobbyId: string;
}

export interface JoinLobbyRequest extends IPlayFabRequestCommon {
  /** A field which indicates which lobby the user will be joining. This field is opaque to everyone except the Lobby service. */
  ConnectionString?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /**
   * The private key-value pairs used by the member to communicate information to other members and the owner. Visible to all
   * entities in the lobby. At most 30 key-value pairs may be stored here, keys are limited to 30 characters and values to
   * 1000. The total size of all memberData values may not exceed 4096 bytes.Keys are case sensitive.
   */
  MemberData?: Record<string, string | null>;
  /** The member entity who is joining the lobby. */
  MemberEntity?: EntityKey;
}

export interface JoinLobbyResult extends IPlayFabResultCommon {
  /** Successfully joined lobby&#39;s id. */
  LobbyId: string;
}

export interface JoinMatchmakingTicketRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The User who wants to join the ticket. Their Id must be listed in PlayFabIdsToMatchWith. */
  Member: MatchmakingPlayer;
  /** The name of the queue to join. */
  QueueName: string;
  /** The Id of the ticket to find a match for. */
  TicketId: string;
}

export interface JoinMatchmakingTicketResult extends IPlayFabResultCommon {
}

export interface LeaveLobbyAsServerRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The id of the lobby. */
  LobbyId: string;
  /**
   * The game_server entity leaving the lobby. If the game_server was subscribed to notifications, it will be unsubscribed.
   * If a the given game_server entity is not in the lobby, it will fail.
   */
  ServerEntity: EntityKey;
}

export interface LeaveLobbyRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The id of the lobby. */
  LobbyId?: string;
  /** The member entity leaving the lobby. */
  MemberEntity?: EntityKey;
}

export interface LinearDifferenceRuleExpansion {
  /** This value gets added to Difference at every expansion interval. */
  Delta: number;
  /** Once the total difference reaches this value, expansion stops. Optional. */
  Limit?: number;
  /** How many seconds before this rule is expanded. */
  SecondsBetweenExpansions: number;
}

export interface LinearRegionSelectionRuleExpansion {
  /** This value gets added to MaxLatency at every expansion interval. */
  Delta: number;
  /** Once the max Latency reaches this value, expansion stops. */
  Limit: number;
  /** How many seconds before this rule is expanded. */
  SecondsBetweenExpansions: number;
}

export interface LinearSetIntersectionRuleExpansion {
  /** This value gets added to MinIntersectionSize at every expansion interval. */
  Delta: number;
  /** How many seconds before this rule is expanded. */
  SecondsBetweenExpansions: number;
}

export interface LinearTeamDifferenceRuleExpansion {
  /** This value gets added to Difference at every expansion interval. */
  Delta: number;
  /** Once the total difference reaches this value, expansion stops. Optional. */
  Limit?: number;
  /** How many seconds before this rule is expanded. */
  SecondsBetweenExpansions: number;
}

export interface LinearTeamSizeBalanceRuleExpansion {
  /** This value gets added to Difference at every expansion interval. */
  Delta: number;
  /** Once the total difference reaches this value, expansion stops. Optional. */
  Limit?: number;
  /** How many seconds before this rule is expanded. */
  SecondsBetweenExpansions: number;
}

export interface LinuxInstrumentationConfiguration {
  /** Designates whether Linux instrumentation configuration will be enabled for this Build */
  IsEnabled: boolean;
}

export interface ListAssetSummariesRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The page size for the request. */
  PageSize?: number;
  /** The skip token for the paged request. */
  SkipToken?: string;
}

export interface ListAssetSummariesResponse extends IPlayFabResultCommon {
  /** The list of asset summaries. */
  AssetSummaries?: AssetSummary[];
  /** The page size on the response. */
  PageSize: number;
  /** The skip token for the paged response. */
  SkipToken?: string;
}

export interface ListBuildAliasesRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The page size for the request. */
  PageSize?: number;
  /** The skip token for the paged request. */
  SkipToken?: string;
}

export interface ListBuildAliasesResponse extends IPlayFabResultCommon {
  /** The list of build aliases for the title */
  BuildAliases?: BuildAliasDetailsResponse[];
  /** The page size on the response. */
  PageSize: number;
  /** The skip token for the paged response. */
  SkipToken?: string;
}

export interface ListBuildSummariesRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The page size for the request. */
  PageSize?: number;
  /** The skip token for the paged request. */
  SkipToken?: string;
}

export interface ListBuildSummariesResponse extends IPlayFabResultCommon {
  /** The list of build summaries for a title. */
  BuildSummaries?: BuildSummary[];
  /** The page size on the response. */
  PageSize: number;
  /** The skip token for the paged response. */
  SkipToken?: string;
}

export interface ListCertificateSummariesRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The page size for the request. */
  PageSize?: number;
  /** The skip token for the paged request. */
  SkipToken?: string;
}

export interface ListCertificateSummariesResponse extends IPlayFabResultCommon {
  /** The list of game certificates. */
  CertificateSummaries?: CertificateSummary[];
  /** The page size on the response. */
  PageSize: number;
  /** The skip token for the paged response. */
  SkipToken?: string;
}

export interface ListContainerImagesRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The page size for the request. */
  PageSize?: number;
  /** The skip token for the paged request. */
  SkipToken?: string;
}

export interface ListContainerImagesResponse extends IPlayFabResultCommon {
  /** The list of container images. */
  Images?: string[];
  /** The page size on the response. */
  PageSize: number;
  /** The skip token for the paged response. */
  SkipToken?: string;
}

export interface ListContainerImageTagsRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The container images we want to list tags for. */
  ImageName?: string;
  /** The page size for the request. */
  PageSize?: number;
  /** The skip token for the paged request. */
  SkipToken?: string;
}

export interface ListContainerImageTagsResponse extends IPlayFabResultCommon {
  /** The page size on the response. */
  PageSize: number;
  /** The skip token for the paged response. */
  SkipToken?: string;
  /** The list of tags for a particular container image. */
  Tags?: string[];
}

export interface ListMatchmakingQueuesRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
}

export interface ListMatchmakingQueuesResult extends IPlayFabResultCommon {
  /** The list of matchmaking queue configs for this title. */
  MatchMakingQueues?: MatchmakingQueueConfig[];
}

export interface ListMatchmakingTicketsForPlayerRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The entity key for which to find the ticket Ids. */
  Entity?: EntityKey;
  /** The name of the queue to find a match for. */
  QueueName: string;
}

export interface ListMatchmakingTicketsForPlayerResult extends IPlayFabResultCommon {
  /** The list of ticket Ids the user is a member of. */
  TicketIds: string[];
}

export interface ListMultiplayerServersRequest extends IPlayFabRequestCommon {
  /** The guid string build ID of the multiplayer servers to list. */
  BuildId: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The page size for the request. */
  PageSize?: number;
  /** The region the multiplayer servers to list. */
  Region: string;
  /** The skip token for the paged request. */
  SkipToken?: string;
}

export interface ListMultiplayerServersResponse extends IPlayFabResultCommon {
  /** The list of multiplayer server summary details. */
  MultiplayerServerSummaries?: MultiplayerServerSummary[];
  /** The page size on the response. */
  PageSize: number;
  /** The skip token for the paged response. */
  SkipToken?: string;
}

export interface ListPartyQosServersRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /**
   * Qos servers version
   * @deprecated Do not use
   */
  Version?: string;
}

export interface ListPartyQosServersResponse extends IPlayFabResultCommon {
  /** The page size on the response. */
  PageSize: number;
  /** The list of QoS servers. */
  QosServers?: QosServer[];
  /** The skip token for the paged response. */
  SkipToken?: string;
}

export interface ListQosServersForTitleRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /**
   * Indicates that the response should contain Qos servers for all regions, including those where there are no builds
   * deployed for the title.
   */
  IncludeAllRegions?: boolean;
  /** Indicates the Routing Preference used by the Qos servers. The default Routing Preference is Microsoft */
  RoutingPreference?: string;
}

export interface ListQosServersForTitleResponse extends IPlayFabResultCommon {
  /** The page size on the response. */
  PageSize: number;
  /** The list of QoS servers. */
  QosServers?: QosServer[];
  /** The skip token for the paged response. */
  SkipToken?: string;
}

/** @deprecated Do not use */
export interface ListQosServersRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
}

/** @deprecated Do not use */
export interface ListQosServersResponse extends IPlayFabResultCommon {
  /** The page size on the response. */
  PageSize: number;
  /** The list of QoS servers. */
  QosServers?: QosServer[];
  /** The skip token for the paged response. */
  SkipToken?: string;
}

export interface ListSecretSummariesRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The page size for the request. */
  PageSize?: number;
  /** The skip token for the paged request. */
  SkipToken?: string;
}

export interface ListSecretSummariesResponse extends IPlayFabResultCommon {
  /** The page size on the response. */
  PageSize: number;
  /** The list of game secret. */
  SecretSummaries?: SecretSummary[];
  /** The skip token for the paged response. */
  SkipToken?: string;
}

export interface ListServerBackfillTicketsForPlayerRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The entity key for which to find the ticket Ids. */
  Entity: EntityKey;
  /** The name of the queue the tickets are in. */
  QueueName: string;
}

export interface ListServerBackfillTicketsForPlayerResult extends IPlayFabResultCommon {
  /** The list of backfill ticket Ids the user is a member of. */
  TicketIds: string[];
}

export interface ListTitleMultiplayerServersQuotaChangesRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
}

export interface ListTitleMultiplayerServersQuotaChangesResponse extends IPlayFabResultCommon {
  /** All change requests for this title. */
  Changes?: QuotaChange[];
}

export interface ListVirtualMachineSummariesRequest extends IPlayFabRequestCommon {
  /** The guid string build ID of the virtual machines to list. */
  BuildId: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The page size for the request. */
  PageSize?: number;
  /** The region of the virtual machines to list. */
  Region: string;
  /** The skip token for the paged request. */
  SkipToken?: string;
}

export interface ListVirtualMachineSummariesResponse extends IPlayFabResultCommon {
  /** The page size on the response. */
  PageSize: number;
  /** The skip token for the paged response. */
  SkipToken?: string;
  /** The list of virtual machine summaries. */
  VirtualMachines?: VirtualMachineSummary[];
}

export interface Lobby {
  /** A setting indicating who is allowed to join this lobby, as well as see it in queries. */
  AccessPolicy: AccessPolicy;
  /** A number that increments once for each request that modifies the lobby. */
  ChangeNumber: number;
  /**
   * A string used to join the lobby. This field is populated by the Lobby service. Invites are performed by communicating
   * this connectionString to other players.
   */
  ConnectionString: string;
  /** Lobby data. */
  LobbyData?: Record<string, string | null>;
  /** Id to uniquely identify a lobby. */
  LobbyId: string;
  /** The maximum number of players allowed in the lobby. */
  MaxPlayers: number;
  /** Array of all lobby members. */
  Members?: Member[];
  /** A setting indicating whether members are allowed to join this lobby. When Locked new members are prevented from joining. */
  MembershipLock: MembershipLock;
  /** The client or server entity which owns this lobby. */
  Owner?: EntityKey;
  /** A setting indicating the owner migration policy. If server owned, this field is not present. */
  OwnerMigrationPolicy?: OwnerMigrationPolicy;
  /**
   * An opaque string stored on a SubscribeToLobbyResource call, which indicates the connection an owner or member has with
   * PubSub.
   */
  PubSubConnectionHandle?: string;
  /**
   * A setting that controls lobby invites. When true only owners can invite new players, when false all members area allowed
   * to invite.
   */
  RestrictInvitesToLobbyOwner: boolean;
  /** Search data. */
  SearchData?: Record<string, string | null>;
  /** Preview: Lobby joined server. This is not the server owner, rather the server that has joined a client owned lobby. */
  Server?: LobbyServer;
  /** A flag which determines if connections are used. Defaults to true. Only set on create. */
  UseConnections: boolean;
}

export interface LobbyEmptyResult extends IPlayFabResultCommon {
}

export interface LobbyServer {
  /** Opaque string, stored on a Subscribe call, which indicates the connection a joined server has with PubSub. */
  PubSubConnectionHandle?: string;
  /** Key-value pairs specific to the joined server. */
  ServerData?: Record<string, string | null>;
  /** The server entity key. */
  ServerEntity?: EntityKey;
}

export interface LobbySummary {
  /**
   * A string used to join the lobby.This field is populated by the Lobby service.Invites are performed by communicating this
   * connectionString to other players.
   */
  ConnectionString: string;
  /** The current number of players in the lobby. */
  CurrentPlayers: number;
  /** Id to uniquely identify a lobby. */
  LobbyId: string;
  /** The maximum number of players allowed in the lobby. */
  MaxPlayers: number;
  /** A setting indicating whether members are allowed to join this lobby. When Locked new members are prevented from joining. */
  MembershipLock?: MembershipLock;
  /** The client or server entity which owns this lobby. */
  Owner: EntityKey;
  /** Search data. */
  SearchData?: Record<string, string | null>;
}

export interface MatchmakingPlayer {
  /** The user&#39;s attributes custom to the title. */
  Attributes?: MatchmakingPlayerAttributes;
  /** The entity key of the matchmaking user. */
  Entity: EntityKey;
}

export interface MatchmakingPlayerAttributes {
  /** A data object representing a user&#39;s attributes. */
  DataObject?: any;
  /** An escaped data object representing a user&#39;s attributes. */
  EscapedDataObject?: string;
}

export interface MatchmakingPlayerWithTeamAssignment {
  /**
   * The user&#39;s attributes custom to the title. These attributes will be null unless the request has ReturnMemberAttributes
   * flag set to true.
   */
  Attributes?: MatchmakingPlayerAttributes;
  /** The entity key of the matchmaking user. */
  Entity: EntityKey;
  /** The Id of the team the User is assigned to. */
  TeamId?: string;
}

export interface MatchmakingQueueConfig {
  /** This is the buildAlias that will be used to allocate the multiplayer server for the match. */
  BuildAliasParams?: BuildAliasParams;
  /** This is the buildId that will be used to allocate the multiplayer server for the match. */
  BuildId?: string;
  /** List of difference rules used to find an optimal match. */
  DifferenceRules?: DifferenceRule[];
  /** List of match total rules used to find an optimal match. */
  MatchTotalRules?: MatchTotalRule[];
  /** Maximum number of players in a match. */
  MaxMatchSize: number;
  /** Maximum number of players in a ticket. Optional. */
  MaxTicketSize?: number;
  /** Minimum number of players in a match. */
  MinMatchSize: number;
  /** Unique identifier for a Queue. Chosen by the developer. */
  Name: string;
  /** Region selection rule used to find an optimal match. */
  RegionSelectionRule?: RegionSelectionRule;
  /** Boolean flag to enable server allocation for the queue. */
  ServerAllocationEnabled: boolean;
  /** List of set intersection rules used to find an optimal match. */
  SetIntersectionRules?: SetIntersectionRule[];
  /** Controls which statistics are visible to players. */
  StatisticsVisibilityToPlayers?: StatisticsVisibilityToPlayers;
  /** List of string equality rules used to find an optimal match. */
  StringEqualityRules?: StringEqualityRule[];
  /** List of team difference rules used to find an optimal match. */
  TeamDifferenceRules?: TeamDifferenceRule[];
  /** The team configuration for a match. This may be null if there are no teams. */
  Teams?: MatchmakingQueueTeam[];
  /** Team size balance rule used to find an optimal match. */
  TeamSizeBalanceRule?: TeamSizeBalanceRule;
  /** Team ticket size similarity rule used to find an optimal match. */
  TeamTicketSizeSimilarityRule?: TeamTicketSizeSimilarityRule;
}

export interface MatchmakingQueueTeam {
  /** The maximum number of players required for the team. */
  MaxTeamSize: number;
  /** The minimum number of players required for the team. */
  MinTeamSize: number;
  /** A name to identify the team. This is case insensitive. */
  Name: string;
}

export interface MatchResult {
  /** Time when the match ended. */
  EndDateTimeUtc: string;
  /** ID of the scenario that this match result belongs to. */
  ScenarioId: string;
  /** Time when the match started. */
  StartDateTimeUtc: string;
  /** List of teams that participated in the given match. */
  Teams: MatchResultTeam[];
}

export interface MatchResultPlayer {
  /** ID of the Bot. This field should be empty if player isn&#39;t a bot. */
  BotId?: number;
  /** How the player&#39;s participation ended in the match. CompletionStatus can only be Completed, Quit, Disconnected or Kicked. */
  CompletionStatus: string;
  /** A map from condition name to condition value of this player in the given match. */
  Conditions?: Record<string, string | null>;
  /** Entity of the given player. This field should be empty if player is a bot. */
  Entity?: EntityKey;
  /** A map from event name to the count of events of this player in the given match. */
  EventCounts?: Record<string, number>;
  /** GUID shared by players on this team that formed a group to play together prior to matchmaking. */
  PreMatchPartyId?: string;
  /** Duration that the given player stayed in the match. */
  SecondsPlayed: number;
}

export interface MatchResultTeam {
  /** List of players that participated in the given match in this team. */
  Players: MatchResultPlayer[];
  /**
   * Rank of the given team in the match. Rank starts from 0 and increment based on the team placing, the winning team being
   * 0. Teams can have the same rank to denote draws.
   */
  Rank: number;
}

export interface MatchTotalRule {
  /** Description of the attribute used by this rule to match tickets. */
  Attribute: QueueRuleAttribute;
  /** Collection of fields relating to expanding this rule at set intervals. */
  Expansion?: MatchTotalRuleExpansion;
  /** The maximum total value for a group. Must be &gt;= Min. */
  Max: number;
  /** The minimum total value for a group. Must be &gt;=2. */
  Min: number;
  /** Friendly name chosen by developer. */
  Name: string;
  /**
   * How many seconds before this rule is no longer enforced (but tickets that comply with this rule will still be
   * prioritized over those that don&#39;t). Leave blank if this rule is always enforced.
   */
  SecondsUntilOptional?: number;
  /** The relative weight of this rule compared to others. */
  Weight: number;
}

export interface MatchTotalRuleExpansion {
  /** Manually specify the values to use for each expansion interval. When this is set, Max is ignored. */
  MaxOverrides?: OverrideDouble[];
  /** Manually specify the values to use for each expansion interval. When this is set, Min is ignored. */
  MinOverrides?: OverrideDouble[];
  /** How many seconds before this rule is expanded. */
  SecondsBetweenExpansions: number;
}

export interface Member {
  /** Key-value pairs specific to member. */
  MemberData?: Record<string, string | null>;
  /** The member entity key. */
  MemberEntity?: EntityKey;
  /** Opaque string, stored on a Subscribe call, which indicates the connection an owner or member has with PubSub. */
  PubSubConnectionHandle?: string;
}

type MembershipLock = "Unlocked"
  | "Locked";

export interface ModelCondition {
  /** The key for this condition. */
  Key: string;
  /**
   * A number representing the rank of this condition in terms of how important the condition is in comparison to the other
   * ones in the model. This number should be between 1 and the total number of condition in the model, and it should be
   * unique across all the conditions. The lower the specified rank the more important the condition, 1 being the most
   * important. This will be used for identifying similar conditions when the model has no data about some conditions.
   */
  Rank: number;
}

export interface ModelDetails {
  /**
   * The number of batch learning iterations that have been run for this model. When null, it means that this is a base
   * model.
   */
  BatchIterations?: number;
  /**
   * List of parameters that were used for creating this model via batch run. The value for the parameters is null when the
   * model is a base model.
   */
  BatchParameters?: BatchParameters;
  /**
   * The summary of the batch results for this model. This will be null when the model is a base model or when the batch run
   * hasn&#39;t finished..
   */
  BatchResults?: BatchResults;
  /** List of condition keys and their associated affinity weights that this model supports. */
  Conditions?: ModelCondition[];
  /** Time when the Model was created. */
  CreationDateTime: string;
  /**
   * The current threshold value for determining if a match result is considered anomalous enough to be ignored. This will be
   * null when creating a batch model and the settings have not been loaded yet. Note:
   * &lt;c&gt;BatchParameters.AnomalousMatchResultIgnoreThreshold&lt;/c&gt; value was the one that was used when creating the batch
   * model, which might differ from this value.
   */
  CurrentAnomalousMatchResultIgnoreThreshold?: number;
  /**
   * An integer between 0 and MaxStateProgress (inclusive) indicating progress within the model&#39;s current state, or null if
   * the current state is not a state with measurable progress.
   */
  CurrentStateProgress?: number;
  /**
   * Time remaining in seconds to finish the current model state. If it is a base model, the model isn&#39;t in a state with
   * measurable progress, or if the time remaining is unknown, this field will be null.
   */
  EstimatedTimeRemainingInSeconds?: number;
  /** List of events that the Model supports. */
  Events?: string[];
  /** The primary flag of the model. */
  IsPrimary: boolean;
  /**
   * The maximum progress value for the model&#39;s current state, or null if the current state is not a state with measurable
   * progress.
   */
  MaxStateProgress?: number;
  /** String that represents the method that was used for creating this model. The value can only be either Base or Batch. */
  ModelCreationMethod?: string;
  /** The ID of the model. */
  ModelId?: string;
  /** The name of the model. */
  ModelName?: string;
  /**
   * The state of the model. ModelState can be Pending, LoadingMatches, BuildingModel, SavingModel, ReadyForCatchUp,
   * CatchingUp, CatchUpFailed, Active, Cancelled, BatchFailed, or Deactivated.
   */
  ModelState?: string;
}

export interface ModelSummary {
  /** Time when the Model was created. */
  CreationDateTime: string;
  /** The primary flag of the model. */
  IsPrimary: boolean;
  /** The ID of the model. */
  ModelId?: string;
  /** The name of the model. */
  ModelName?: string;
  /**
   * The state of the model. ModelState can be Pending, LoadingMatches, BuildingModel, SavingModel, ReadyForCatchUp,
   * CatchingUp, CatchUpFailed, Active, Cancelled, BatchFailed, or Deactivated.
   */
  ModelState?: string;
}

export interface MonitoringApplicationConfiguration {
  /** Asset which contains the monitoring application files and scripts. */
  AssetReference: AssetReference;
  /** Execution script name, this will be the main executable for the monitoring application. */
  ExecutionScriptName: string;
  /** Installation script name, this will be run before the ExecutionScript. */
  InstallationScriptName?: string;
  /** Timespan the monitoring application will be kept alive when running from the start of the VM */
  OnStartRuntimeInMinutes?: number;
}

export interface MonitoringApplicationConfigurationParams {
  /** Asset which contains the monitoring application files and scripts. */
  AssetReference: AssetReferenceParams;
  /** Execution script name, this will be the main executable for the monitoring application. */
  ExecutionScriptName: string;
  /** Installation script name, this will be run before the ExecutionScript. */
  InstallationScriptName?: string;
  /** Timespan the monitoring application will be kept alive when running from the start of the VM */
  OnStartRuntimeInMinutes?: number;
}

export interface MultiplayerServerSummary {
  /** The connected players in the multiplayer server. */
  ConnectedPlayers?: ConnectedPlayer[];
  /** The time (UTC) at which a change in the multiplayer server state was observed. */
  LastStateTransitionTime?: string;
  /** The region the multiplayer server is located in. */
  Region?: string;
  /** The string server ID of the multiplayer server generated by PlayFab. */
  ServerId?: string;
  /** The title generated guid string session ID of the multiplayer server. */
  SessionId?: string;
  /** The state of the multiplayer server. */
  State?: string;
  /** The virtual machine ID that the multiplayer server is located on. */
  VmId?: string;
}

type OsPlatform = "Windows"
  | "Linux";

export interface OverrideDouble {
  /** The custom expansion value. */
  Value: number;
}

export interface OverrideUnsignedInt {
  /** The custom expansion value. */
  Value: number;
}

type OwnerMigrationPolicy = "None"
  | "Automatic"
  | "Manual"
  | "Server";

export interface PaginationRequest {
  /** Continuation token returned as a result in a previous FindLobbies call. Cannot be specified by clients. */
  ContinuationToken?: string;
  /** The number of lobbies that should be retrieved. Cannot be specified by servers, clients may specify any value up to 50 */
  PageSizeRequested?: number;
}

export interface PaginationResponse {
  /** Continuation token returned by server call. Not returned for clients */
  ContinuationToken?: string;
  /** The number of lobbies that matched the search request. */
  TotalMatchedLobbyCount?: number;
}

export interface PartyBuildAliasParams {
  /** The guid string alias ID to use for the request. */
  AliasId: string;
}

export interface PartyInvitationConfiguration {
  /**
   * The list of PlayFab EntityKeys that the invitation allows to authenticate into the network. If this list is empty, all
   * users are allowed to authenticate using the invitation&#39;s identifier. This list may contain no more than 1024 items.
   */
  EntityKeys?: EntityKey[];
  /** The invite identifier for this party. If this value is specified, it must be no longer than 127 characters. */
  Identifier?: string;
  /** Controls which participants can revoke this invite. */
  Revocability?: string;
}

type PartyInvitationRevocability = "Creator"
  | "Anyone";

export interface PartyNetworkConfiguration {
  /** Controls whether and how to support direct peer-to-peer connection attempts among devices in the network. */
  DirectPeerConnectivityOptions?: string;
  /** The maximum number of devices allowed to connect to the network. Must be between 1 and 128, inclusive. */
  MaxDevices: number;
  /** The maximum number of devices allowed per user. Must be greater than 0. */
  MaxDevicesPerUser: number;
  /** The maximum number of endpoints allowed per device. Must be between 0 and 32, inclusive. */
  MaxEndpointsPerDevice: number;
  /** The maximum number of unique users allowed in the network. Must be greater than 0. */
  MaxUsers: number;
  /** The maximum number of users allowed per device. Must be between 1 and 8, inclusive. */
  MaxUsersPerDevice: number;
  /**
   * An optionally-specified configuration for the initial invitation for this party. If not provided, default configuration
   * values will be used: a title-unique invitation identifier will be generated, the revocability will be Anyone, and the
   * EntityID list will be empty.
   */
  PartyInvitationConfiguration?: PartyInvitationConfiguration;
}

export interface PlayerSkill {
  /** Entity of the given player. */
  Entity?: EntityKey;
  /** Time when the last match to update the player&#39;s skill was uploaded. */
  LastProcessedMatchUploadTimeUtc: string;
  /**
   * The given player&#39;s skill value to be used for Matchmaking computed by TrueSkill. This takes into account the player&#39;s
   * squad size, as well as other modifiers related to the skills in this condition as a whole
   */
  MatchmakingSkillValue: number;
  /**
   * A detailed breakdown of the player&#39;s skill. This will only be returned if IncludeSkillBreakdown was specified and true
   * in the request.
   */
  SkillBreakdown?: SkillBreakdown;
  /** The given player&#39;s individual skill computed by TrueSkill. */
  SkillValue: number;
}

export interface PlayerSkillForCondition {
  /** Set of Conditions of the respective player skills data. */
  Conditions?: Record<string, string | null>;
  /**
   * The given player&#39;s skill value to be used for Matchmaking computed by TrueSkill. This takes into account the player&#39;s
   * squad size, as well as other modifiers related to the skills in this condition as a whole
   */
  MatchmakingSkillValue: number;
  /**
   * A detailed breakdown of the player&#39;s skill. This will only be returned if IncludeSkillBreakdown was specified and true
   * in the request.
   */
  SkillBreakdown?: SkillBreakdown;
  /** The given player&#39;s individual skill computed by TrueSkill. */
  SkillValue: number;
}

export interface PlayerSkills {
  /** Entity of the given player. */
  Entity?: EntityKey;
  /** Time when the last match to update the player&#39;s skill was uploaded. */
  LastProcessedMatchUploadTimeUtc: string;
  /** List of skill values for all the conditions sets that were requested. */
  SkillsForConditions?: PlayerSkillForCondition[];
}

export interface PlayerToken {
  /** The player id of the player for which the token applies. */
  PlayerId?: string;
  /** The (base64 encoded) token. */
  Token?: string;
}

export interface Port {
  /** The name for the port. */
  Name: string;
  /** The number for the port. */
  Num: number;
  /** The protocol for the port. */
  Protocol: ProtocolType;
}

type ProtocolType = "TCP"
  | "UDP";

export interface PublicIpAddress {
  /** FQDN of the public IP */
  FQDN: string;
  /** Server IP Address */
  IpAddress: string;
  /** Routing Type of the public IP. */
  RoutingType: string;
}

export interface QosServer {
  /** The region the QoS server is located in. */
  Region?: string;
  /** The QoS server URL. */
  ServerUrl?: string;
}

export interface QueueRuleAttribute {
  /** Specifies which attribute in a ticket to use. */
  Path: string;
  /** Specifies which source the attribute comes from. */
  Source: AttributeSource;
}

export interface QuotaChange {
  /** A brief description of the requested changes. */
  ChangeDescription?: string;
  /** Requested changes to make to the titles cores quota. */
  Changes?: CoreCapacityChange[];
  /** Whether or not this request is pending a review. */
  IsPendingReview: boolean;
  /** Additional information about this request that our team can use to better understand the requirements. */
  Notes?: string;
  /** Id of the change request. */
  RequestId?: string;
  /** Comments by our team when a request is reviewed. */
  ReviewComments?: string;
  /** Whether or not this request was approved. */
  WasApproved: boolean;
}

export interface RegionSelectionRule {
  /**
   * Controls how the Max Latency parameter expands over time. Only one expansion can be set per rule. When this is set,
   * MaxLatency is ignored.
   */
  CustomExpansion?: CustomRegionSelectionRuleExpansion;
  /** Controls how the Max Latency parameter expands over time. Only one expansion can be set per rule. */
  LinearExpansion?: LinearRegionSelectionRuleExpansion;
  /** Specifies the maximum latency that is allowed between the client and the selected server. The value is in milliseconds. */
  MaxLatency: number;
  /** Friendly name chosen by developer. */
  Name: string;
  /** Specifies which attribute in a ticket to use. */
  Path: string;
  /**
   * How many seconds before this rule is no longer enforced (but tickets that comply with this rule will still be
   * prioritized over those that don&#39;t). Leave blank if this rule is always enforced.
   */
  SecondsUntilOptional?: number;
  /** The relative weight of this rule compared to others. */
  Weight: number;
}

export interface RemoveMatchmakingQueueRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The Id of the matchmaking queue to remove. */
  QueueName?: string;
}

export interface RemoveMatchmakingQueueResult extends IPlayFabResultCommon {
}

export interface RemoveMemberFromLobbyRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The id of the lobby. */
  LobbyId?: string;
  /** The member entity to be removed from the lobby. */
  MemberEntity?: EntityKey;
  /** If true, removed member can never rejoin this lobby. */
  PreventRejoin: boolean;
}

export interface RequestMultiplayerServerAndTokenRequest extends IPlayFabRequestCommon {
  /** The identifiers of the build alias to use for the request. */
  BuildAliasParams?: BuildAliasParams;
  /** The guid string build ID of the multiplayer server to request. */
  BuildId?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /**
   * Initial list of players (potentially matchmade) allowed to connect to the game. This list is passed to the game server
   * when requested (via GSDK) and can be used to validate players connecting to it.
   */
  InitialPlayers?: string[];
  /**
   * The preferred regions to request a multiplayer server from. The Multiplayer Service will iterate through the regions in
   * the specified order and allocate a server from the first one that has servers available.
   */
  PreferredRegions: string[];
  /**
   * Data encoded as a string that is passed to the game server when requested. This can be used to communicate information
   * such as game mode or map through the request flow. Maximum size is 8KB
   */
  SessionCookie?: string;
  /** A guid string session ID created track the multiplayer server session over its life. */
  SessionId: string;
  /** List of players for which to get tokens. */
  TokenPlayerIds: string[];
}

export interface RequestMultiplayerServerAndTokenResponse extends IPlayFabResultCommon {
  /** The identity of the build in which the server was allocated. */
  BuildId?: string;
  /** The connected players in the multiplayer server. */
  ConnectedPlayers?: ConnectedPlayer[];
  /** The fully qualified domain name of the virtual machine that is hosting this multiplayer server. */
  FQDN?: string;
  /** The public IPv4 address of the virtual machine that is hosting this multiplayer server. */
  IPV4Address?: string;
  /** The time (UTC) at which a change in the multiplayer server state was observed. */
  LastStateTransitionTime?: string;
  /** A set of tokens that can be used to connect to the server. Tokens match the requested user ids */
  PlayerTokens?: PlayerToken[];
  /** The ports the multiplayer server uses. */
  Ports?: Port[];
  /** The list of public Ipv4 addresses associated with the server. */
  PublicIPV4Addresses?: PublicIpAddress[];
  /** The region the multiplayer server is located in. */
  Region?: string;
  /** The string server ID of the multiplayer server generated by PlayFab. */
  ServerId?: string;
  /** The guid string session ID of the multiplayer server. */
  SessionId?: string;
  /** The state of the multiplayer server. */
  State?: string;
  /** The virtual machine ID that the multiplayer server is located on. */
  VmId?: string;
}

export interface RequestMultiplayerServerRequest extends IPlayFabRequestCommon {
  /** The identifiers of the build alias to use for the request. */
  BuildAliasParams?: BuildAliasParams;
  /** The guid string build ID of the multiplayer server to request. */
  BuildId?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /**
   * Initial list of players (potentially matchmade) allowed to connect to the game. This list is passed to the game server
   * when requested (via GSDK) and can be used to validate players connecting to it.
   */
  InitialPlayers?: string[];
  /**
   * The preferred regions to request a multiplayer server from. The Multiplayer Service will iterate through the regions in
   * the specified order and allocate a server from the first one that has servers available.
   */
  PreferredRegions: string[];
  /**
   * Data encoded as a string that is passed to the game server when requested. This can be used to communicate information
   * such as game mode or map through the request flow. Maximum size is 8KB
   */
  SessionCookie?: string;
  /** A guid string session ID created track the multiplayer server session over its life. */
  SessionId: string;
}

export interface RequestMultiplayerServerResponse extends IPlayFabResultCommon {
  /** The identity of the build in which the server was allocated. */
  BuildId?: string;
  /** The connected players in the multiplayer server. */
  ConnectedPlayers?: ConnectedPlayer[];
  /** The fully qualified domain name of the virtual machine that is hosting this multiplayer server. */
  FQDN?: string;
  /** The public IPv4 address of the virtual machine that is hosting this multiplayer server. */
  IPV4Address?: string;
  /** The time (UTC) at which a change in the multiplayer server state was observed. */
  LastStateTransitionTime?: string;
  /** The ports the multiplayer server uses. */
  Ports?: Port[];
  /** The list of public Ipv4 addresses associated with the server. */
  PublicIPV4Addresses?: PublicIpAddress[];
  /** The region the multiplayer server is located in. */
  Region?: string;
  /** The string server ID of the multiplayer server generated by PlayFab. */
  ServerId?: string;
  /** The guid string session ID of the multiplayer server. */
  SessionId?: string;
  /** The state of the multiplayer server. */
  State?: string;
  /** The virtual machine ID that the multiplayer server is located on. */
  VmId?: string;
}

export interface RequestPartyRequest extends IPlayFabRequestCommon {
  /** The identifiers of the build alias to use for the request. */
  BuildAliasParams?: PartyBuildAliasParams;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** A guid string party ID created track the party session over its life. */
  PartyId: string;
  /**
   * The preferred regions to request a party session from. The party service will iterate through the regions in the
   * specified order and allocate a party session from the first one that is available.
   */
  PreferredRegions: string[];
  /**
   * Data encoded as a string that is passed to the party when requested. This can be used to to communicate information such
   * as party type through the request flow.
   */
  SessionCookie?: string;
  /** The client version for the party being requested. */
  Version?: string;
}

export interface RequestPartyResponse extends IPlayFabResultCommon {
  /** The build id that the party was allocated on. */
  BuildId?: string;
  /** The connected players in the party. */
  ConnectedPlayers?: ConnectedPlayer[];
  /** The thumbprint of the DTLS certificate presented by the party session */
  DTLSCertificateSHA2Thumbprint?: string;
  /** The fully qualified domain name of the virtual machine that is hosting this party session. */
  FQDN?: string;
  /** The IPv4 address of the virtual machine that is hosting this party session. */
  IPV4Address?: string;
  /** The time (UTC) at which a change in the party state was observed. */
  LastStateTransitionTime?: string;
  /** The guid string party ID of the party session. */
  PartyId?: string;
  /** The ports the party session uses. */
  Ports?: Port[];
  /** The region the party session is located in. */
  Region?: string;
  /** The string server ID of the party session generated by PlayFab. */
  ServerId?: string;
  /** The state of the party session. */
  State?: string;
  /** The virtual machine ID that the party session is located on. */
  VmId?: string;
}

export interface RequestPartyServiceRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The network configuration for this request. */
  NetworkConfiguration: PartyNetworkConfiguration;
  /** A guid string party ID created track the party session over its life. */
  PartyId?: string;
  /**
   * The preferred regions to request a party session from. The party service will iterate through the regions in the
   * specified order and allocate a party session from the first one that is available.
   */
  PreferredRegions: string[];
}

export interface RequestPartyServiceResponse extends IPlayFabResultCommon {
  /**
   * The invitation identifier supplied in the PartyInvitationConfiguration, or the PlayFab-generated guid if none was
   * supplied.
   */
  InvitationId?: string;
  /** The guid string party ID of the party session. */
  PartyId?: string;
  /** A base-64 encoded string containing the serialized network descriptor for this party. */
  SerializedNetworkDescriptor?: string;
}

export interface RolloverContainerRegistryCredentialsRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
}

export interface RolloverContainerRegistryCredentialsResponse extends IPlayFabResultCommon {
  /** The url of the container registry. */
  DnsName?: string;
  /** The password for accessing the container registry. */
  Password?: string;
  /** The username for accessing the container registry. */
  Username?: string;
}

type RoutingType = "Microsoft"
  | "Internet";

export interface ScenarioConfigCondition {
  /** The key for a scenario condition. */
  Key: string;
  /** List of strings that represents all the values for a condition. */
  Values: string[];
}

export interface ScenarioConfigEvent {
  /** The name for a scenario event. */
  Name?: string;
  /** The state of a scenario event. State can be Allowed or Required. */
  State?: string;
}

export interface ScenarioConfigResponseCondition {
  /** The key for a scenario condition. */
  Key: string;
  /** The state of a scenario condition. State can be Allowed or Required. */
  State?: string;
  /** List of strings that represents all the values for a condition. */
  Values: string[];
}

export interface ScenarioConfiguration {
  /** A list of condition keys, allowed condition values, and state for each that are allowed to be present in a MatchResult. */
  Conditions?: ScenarioConfigResponseCondition[];
  /** List of all the Events that are allowed to be present in a MatchResult for this scenario. */
  Events?: ScenarioConfigEvent[];
  /** The id of the returned scenario. */
  Id?: string;
  /** The friendly name of the returned scenario. */
  Name?: string;
  /** The ID of the primary model of the scenario. */
  PrimaryModelId?: string;
}

export interface Schedule {
  /** A short description about this schedule. For example, &quot;Game launch on July 15th&quot;. */
  Description?: string;
  /**
   * The date and time in UTC at which the schedule ends. If IsRecurringWeekly is true, this schedule will keep renewing for
   * future weeks until disabled or removed.
   */
  EndTime: string;
  /** Disables the schedule. */
  IsDisabled: boolean;
  /** If true, the StartTime and EndTime will get renewed every week. */
  IsRecurringWeekly: boolean;
  /** The date and time in UTC at which the schedule starts. */
  StartTime: string;
  /** The standby target to maintain for the duration of the schedule. */
  TargetStandby: number;
}

export interface ScheduledStandbySettings {
  /** When true, scheduled standby will be enabled */
  IsEnabled: boolean;
  /** A list of non-overlapping schedules */
  ScheduleList?: Schedule[];
}

export interface Secret {
  /** Optional secret expiration date. */
  ExpirationDate?: string;
  /** A name for the secret. This is used to reference secrets in build configurations. */
  Name: string;
  /** Secret value. */
  Value: string;
}

export interface SecretSummary {
  /** Optional secret expiration date. */
  ExpirationDate?: string;
  /** The name of the secret. */
  Name?: string;
  /** The secret version auto-generated after upload. */
  Version?: string;
}

export interface ServerDetails {
  /** The fully qualified domain name of the virtual machine that is hosting this multiplayer server. */
  Fqdn?: string;
  /** The IPv4 address of the virtual machine that is hosting this multiplayer server. */
  IPV4Address?: string;
  /** The ports the multiplayer server uses. */
  Ports?: Port[];
  /** The server&#39;s region. */
  Region?: string;
  /** The string server ID of the multiplayer server generated by PlayFab. */
  ServerId?: string;
}

export interface ServerResourceConstraintParams {
  /** The maximum number of cores that each server is allowed to use. */
  CpuLimit: number;
  /**
   * The maximum number of GiB of memory that each server is allowed to use. WARNING: After exceeding this limit, the server
   * will be killed
   */
  MemoryLimitGB: number;
}

type ServerType = "Container"
  | "Process";

export interface SetIntersectionRule {
  /** Description of the attribute used by this rule to match tickets. */
  Attribute: QueueRuleAttribute;
  /**
   * Describes the behavior when an attribute is not specified in the ticket creation request or in the user&#39;s entity
   * profile.
   */
  AttributeNotSpecifiedBehavior: AttributeNotSpecifiedBehavior;
  /**
   * Collection of fields relating to expanding this rule at set intervals. Only one expansion can be set per rule. When this
   * is set, MinIntersectionSize is ignored.
   */
  CustomExpansion?: CustomSetIntersectionRuleExpansion;
  /**
   * The default value assigned to tickets that are missing the attribute specified by AttributePath (assuming that
   * AttributeNotSpecifiedBehavior is UseDefault). Values must be unique.
   */
  DefaultAttributeValue?: string[];
  /** Collection of fields relating to expanding this rule at set intervals. Only one expansion can be set per rule. */
  LinearExpansion?: LinearSetIntersectionRuleExpansion;
  /** The minimum number of values that must match between sets. */
  MinIntersectionSize: number;
  /** Friendly name chosen by developer. */
  Name: string;
  /**
   * How many seconds before this rule is no longer enforced (but tickets that comply with this rule will still be
   * prioritized over those that don&#39;t). Leave blank if this rule is always enforced.
   */
  SecondsUntilOptional?: number;
  /** The relative weight of this rule compared to others. */
  Weight: number;
}

export interface SetMatchmakingQueueRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The matchmaking queue config. */
  MatchmakingQueue: MatchmakingQueueConfig;
}

export interface SetMatchmakingQueueResult extends IPlayFabResultCommon {
}

export interface ShutdownMultiplayerServerRequest extends IPlayFabRequestCommon {
  /**
   * The guid string build ID of the multiplayer server to delete.
   * @deprecated Do not use
   */
  BuildId?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /**
   * The region of the multiplayer server to shut down.
   * @deprecated Do not use
   */
  Region?: string;
  /** A guid string session ID of the multiplayer server to shut down. */
  SessionId: string;
}

export interface SkillBreakdown {
  /** A number denoting the number of matches that the player has played in the specific conditions. */
  Experience: number;
  /** The average skill of the given player&#39;s skill distribution. */
  Mean: number;
  /**
   * A double between 0 and 1 denoting the approximate percentage of players that have lower skill than the given player.
   * QuantileRank is only supported for batch models. Note: The percentage is based on quantiles of player skill obtained
   * when the model was created, and those quantiles could become less accurate over time.
   */
  QuantileRank?: number;
  /** The variance of the given player&#39;s skill based on their skill distribution. */
  Variance: number;
}

export interface Statistics {
  /** The average. */
  Average: number;
  /** The 50th percentile. */
  Percentile50: number;
  /** The 90th percentile. */
  Percentile90: number;
  /** The 99th percentile. */
  Percentile99: number;
}

export interface StatisticsVisibilityToPlayers {
  /** Whether to allow players to view the current number of players in the matchmaking queue. */
  ShowNumberOfPlayersMatching: boolean;
  /** Whether to allow players to view statistics representing the time it takes for tickets to find a match. */
  ShowTimeToMatch: boolean;
}

export interface StringEqualityRule {
  /** Description of the attribute used by this rule to match tickets. */
  Attribute: QueueRuleAttribute;
  /**
   * Describes the behavior when an attribute is not specified in the ticket creation request or in the user&#39;s entity
   * profile.
   */
  AttributeNotSpecifiedBehavior: AttributeNotSpecifiedBehavior;
  /**
   * The default value assigned to tickets that are missing the attribute specified by AttributePath (assuming that
   * AttributeNotSpecifiedBehavior is false).
   */
  DefaultAttributeValue?: string;
  /**
   * Collection of fields relating to expanding this rule at set intervals. For StringEqualityRules, this is limited to
   * turning the rule off or on during different intervals.
   */
  Expansion?: StringEqualityRuleExpansion;
  /** Friendly name chosen by developer. */
  Name: string;
  /**
   * How many seconds before this rule is no longer enforced (but tickets that comply with this rule will still be
   * prioritized over those that don&#39;t). Leave blank if this rule is always enforced.
   */
  SecondsUntilOptional?: number;
  /** The relative weight of this rule compared to others. */
  Weight: number;
}

export interface StringEqualityRuleExpansion {
  /** List of bools specifying whether the rule is applied during this expansion. */
  EnabledOverrides: boolean[];
  /** How many seconds before this rule is expanded. */
  SecondsBetweenExpansions: number;
}

export interface SubscribeToLobbyResourceRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The entity performing the subscription. */
  EntityKey: EntityKey;
  /** Opaque string, given to a client upon creating a connection with PubSub. */
  PubSubConnectionHandle: string;
  /**
   * The name of the resource to subscribe to. For LobbyChange subscriptions this is the lobbyId. For LobbyInvite
   * subscriptions this should always be &quot;@me&quot;.
   */
  ResourceId: string;
  /** Version number for the subscription of this resource. */
  SubscriptionVersion: number;
  /**
   * Subscription type. &quot;LobbyChange&quot; subscriptions allow a member or owner to receive notifications of lobby data, member or
   * owner changes. &quot;LobbyInvite&quot; subscriptions allow a player to receive invites to lobbies. A player does not need to be a
   * member of a lobby to receive lobby invites.
   */
  Type: SubscriptionType;
}

export interface SubscribeToLobbyResourceResult extends IPlayFabResultCommon {
  /** Topic will be returned in all notifications that are the result of this subscription. */
  Topic: string;
}

export interface SubscribeToMatchResourceRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The entity performing the subscription. The entity must be authorized to use this connectionHandle. */
  EntityKey: EntityKey;
  /**
   * Opaque string, given to a client upon creating a connection with PubSub. Notifications will be sent to the connection
   * associated with this handle.
   */
  PubSubConnectionHandle: string;
  /**
   * The name of the resource to subscribe to. It follows the format {queueName}|{ticketId} for MatchTicketStatusChange. For
   * MatchInvite, ResourceId is @me.
   */
  ResourceId: string;
  /** Version number for the subscription of this resource. Current supported version must be 1. */
  SubscriptionVersion: number;
  /**
   * Subscription type. MatchInvite subscriptions are per-player. MatchTicketStatusChange subscriptions are per-ticket.
   * Subscribe calls are idempotent. Subscribing on the same resource for the same connection results in success.
   */
  Type: string;
}

export interface SubscribeToMatchResourceResult extends IPlayFabResultCommon {
  /** Matchmaking resource */
  Topic: string;
}

type SubscriptionType = "LobbyChange"
  | "LobbyInvite";

export interface TeamDifferenceRule {
  /** Description of the attribute used by this rule to match teams. */
  Attribute: QueueRuleAttribute;
  /**
   * Collection of fields relating to expanding this rule at set intervals. Only one expansion can be set per rule. When this
   * is set, Difference is ignored.
   */
  CustomExpansion?: CustomTeamDifferenceRuleExpansion;
  /**
   * The default value assigned to tickets that are missing the attribute specified by AttributePath (assuming that
   * AttributeNotSpecifiedBehavior is false).
   */
  DefaultAttributeValue: number;
  /** The allowed difference between any two teams at the start of matchmaking. */
  Difference: number;
  /** Collection of fields relating to expanding this rule at set intervals. Only one expansion can be set per rule. */
  LinearExpansion?: LinearTeamDifferenceRuleExpansion;
  /** Friendly name chosen by developer. */
  Name: string;
  /**
   * How many seconds before this rule is no longer enforced (but tickets that comply with this rule will still be
   * prioritized over those that don&#39;t). Leave blank if this rule is always enforced.
   */
  SecondsUntilOptional?: number;
}

export interface TeamSizeBalanceRule {
  /**
   * Controls how the Difference parameter expands over time. Only one expansion can be set per rule. When this is set,
   * Difference is ignored.
   */
  CustomExpansion?: CustomTeamSizeBalanceRuleExpansion;
  /** The allowed difference in team size between any two teams. */
  Difference: number;
  /** Controls how the Difference parameter expands over time. Only one expansion can be set per rule. */
  LinearExpansion?: LinearTeamSizeBalanceRuleExpansion;
  /** Friendly name chosen by developer. */
  Name: string;
  /**
   * How many seconds before this rule is no longer enforced (but tickets that comply with this rule will still be
   * prioritized over those that don&#39;t). Leave blank if this rule is always enforced.
   */
  SecondsUntilOptional?: number;
}

export interface TeamTicketSizeSimilarityRule {
  /** Friendly name chosen by developer. */
  Name: string;
  /**
   * How many seconds before this rule is no longer enforced (but tickets that comply with this rule will still be
   * prioritized over those that don&#39;t). Leave blank if this rule is always enforced.
   */
  SecondsUntilOptional?: number;
}

type TitleMultiplayerServerEnabledStatus = "Initializing"
  | "Enabled"
  | "Disabled";

export interface TitleMultiplayerServersQuotas {
  /** The core capacity for the various regions and VM Family */
  CoreCapacities?: CoreCapacity[];
}

export interface TrueSkillPlayer {
  /** Entity of the player to retrieve skill values for. */
  Entity: EntityKey;
  /**
   * Size of the squad that the player is currently on. If this value is not specified, we consider the player to not be in a
   * squad.
   */
  SquadSize?: number;
}

export interface UnsubscribeFromLobbyResourceRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The entity which performed the subscription. */
  EntityKey: EntityKey;
  /** Opaque string, given to a client upon creating a connection with PubSub. */
  PubSubConnectionHandle: string;
  /** The name of the resource to unsubscribe from. */
  ResourceId: string;
  /** Version number passed for the subscription of this resource. */
  SubscriptionVersion: number;
  /** Subscription type. */
  Type: SubscriptionType;
}

export interface UnsubscribeFromMatchResourceRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The entity performing the unsubscription. The entity must be authorized to use this connectionHandle. */
  EntityKey: EntityKey;
  /** Opaque string, given to a client upon creating a connection with PubSub. */
  PubSubConnectionHandle: string;
  /**
   * The name of the resource to unsubscribe from. It follows the format {queueName}|{ticketId} for MatchTicketStatusChange.
   * For MatchInvite, ResourceId is @me.
   */
  ResourceId: string;
  /** Version number for the unsubscription from this resource. */
  SubscriptionVersion: number;
  /** Type of the subscription to be canceled. */
  Type: string;
}

export interface UnsubscribeFromMatchResourceResult extends IPlayFabResultCommon {
}

export interface UntagContainerImageRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The container image which tag we want to remove. */
  ImageName?: string;
  /** The tag we want to remove. */
  Tag?: string;
}

export interface UpdateBuildAliasRequest extends IPlayFabRequestCommon {
  /** The guid string alias Id of the alias to be updated. */
  AliasId: string;
  /** The alias name. */
  AliasName?: string;
  /** Array of build selection criteria. */
  BuildSelectionCriteria?: BuildSelectionCriterion[];
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
}

export interface UpdateBuildNameRequest extends IPlayFabRequestCommon {
  /** The guid string ID of the build we want to update the name of. */
  BuildId: string;
  /** The build name. */
  BuildName: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
}

export interface UpdateBuildRegionRequest extends IPlayFabRequestCommon {
  /** The guid string ID of the build we want to update regions for. */
  BuildId: string;
  /** The updated region configuration that should be applied to the specified build. */
  BuildRegion: BuildRegionParams;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
}

export interface UpdateBuildRegionsRequest extends IPlayFabRequestCommon {
  /** The guid string ID of the build we want to update regions for. */
  BuildId: string;
  /** The updated region configuration that should be applied to the specified build. */
  BuildRegions: BuildRegionParams[];
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
}

export interface UpdateLobbyAsServerRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The id of the lobby. */
  LobbyId: string;
  /**
   * The private key-value pairs which are visible to all entities in the lobby and modifiable by the joined server.
   * Optional. Sets or updates key-value pairs on the lobby. Only the current lobby lobby server can set serverData. Keys may
   * be an arbitrary string of at most 30 characters. The total size of all serverData values may not exceed 4096 bytes.
   * Values are not individually limited. There can be up to 30 key-value pairs stored here. Keys are case sensitive.
   */
  ServerData?: Record<string, string | null>;
  /**
   * The keys to delete from the lobby serverData. Optional. Optional. Deletes key-value pairs on the lobby. Only the current
   * joined lobby server can delete serverData. All the specified keys will be removed from the serverData. Keys that do not
   * exist in the lobby are a no-op. If the key to delete exists in the serverData (same request) it will result in a bad
   * request.
   */
  ServerDataToDelete?: string[];
  /**
   * The lobby server. Optional. Set a different server as the joined server of the lobby (there can only be 1 joined
   * server). When changing the server the previous server will automatically be unsubscribed.
   */
  ServerEntity?: EntityKey;
}

export interface UpdateLobbyRequest extends IPlayFabRequestCommon {
  /**
   * The policy indicating who is allowed to join the lobby, and the visibility to queries. May be &#39;Public&#39;, &#39;Friends&#39; or
   * &#39;Private&#39;. Public means the lobby is both visible in queries and any player may join, including invited players. Friends
   * means that users who are bidirectional friends of members in the lobby may search to find friend lobbies, to retrieve
   * its connection string. Private means the lobby is not visible in queries, and a player must receive an invitation to
   * join. Defaults to &#39;Public&#39; on creation. Can only be changed by the lobby owner.
   */
  AccessPolicy?: AccessPolicy;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /**
   * The private key-value pairs which are visible to all entities in the lobby. Optional. Sets or updates key-value pairs on
   * the lobby. Only the current lobby owner can set lobby data. Keys may be an arbitrary string of at most 30 characters.
   * The total size of all lobbyData values may not exceed 4096 bytes. Values are not individually limited. There can be up
   * to 30 key-value pairs stored here. Keys are case sensitive.
   */
  LobbyData?: Record<string, string | null>;
  /** The keys to delete from the lobby LobbyData. Optional. Behaves similar to searchDataToDelete, but applies to lobbyData. */
  LobbyDataToDelete?: string[];
  /** The id of the lobby. */
  LobbyId?: string;
  /**
   * The maximum number of players allowed in the lobby. Updates the maximum allowed number of players in the lobby. Only the
   * current lobby owner can set this. If set, the value must be greater than or equal to the number of members currently in
   * the lobby.
   */
  MaxPlayers?: number;
  /**
   * The private key-value pairs used by the member to communicate information to other members and the owner. Optional. Sets
   * or updates new key-value pairs on the caller&#39;s member data. New keys will be added with their values and existing keys
   * will be updated with the new values. Visible to all entities in the lobby. At most 30 key-value pairs may be stored
   * here, keys are limited to 30 characters and values to 1000. The total size of all memberData values may not exceed 4096
   * bytes. Keys are case sensitive. Servers cannot specifiy this.
   */
  MemberData?: Record<string, string | null>;
  /**
   * The keys to delete from the lobby MemberData. Optional. Deletes key-value pairs on the caller&#39;s member data. All the
   * specified keys will be removed from the caller&#39;s member data. Keys that do not exist are a no-op. If the key to delete
   * exists in the memberData (same request) it will result in a bad request. Servers cannot specifiy this.
   */
  MemberDataToDelete?: string[];
  /** The member entity whose data is being modified. Servers cannot specify this. */
  MemberEntity?: EntityKey;
  /**
   * A setting indicating whether the lobby is locked. May be &#39;Unlocked&#39; or &#39;Locked&#39;. When Locked new members are not allowed
   * to join. Defaults to &#39;Unlocked&#39; on creation. Can only be changed by the lobby owner.
   */
  MembershipLock?: MembershipLock;
  /**
   * The lobby owner. Optional. Set to transfer ownership of the lobby. If client - owned and &#39;Automatic&#39; - The Lobby service
   * will automatically assign another connected owner when the current owner leaves or disconnects. useConnections must be
   * true. If client - owned and &#39;Manual&#39; - Ownership is protected as long as the current owner is connected. If the current
   * owner leaves or disconnects any member may set themselves as the current owner. The useConnections property must be
   * true. If client-owned and &#39;None&#39; - Any member can set ownership. The useConnections property can be either true or
   * false. For all client-owned lobbies when the owner leaves and a new owner can not be automatically selected - The owner
   * field is set to null. For all client-owned lobbies when the owner disconnects and a new owner can not be automatically
   * selected - The owner field remains unchanged and the current owner retains all owner abilities for the lobby. If
   * server-owned (must be &#39;Server&#39;) - Any server can set ownership. The useConnections property must be true.
   */
  Owner?: EntityKey;
  /**
   * The public key-value pairs which allow queries to differentiate between lobbies. Optional. Sets or updates key-value
   * pairs on the lobby for use with queries. Only the current lobby owner can set search data. New keys will be added with
   * their values and existing keys will be updated with the new values. There can be up to 30 key-value pairs stored here.
   * Keys are of the format string_key1, string_key2... string_key30 for string values, or number_key1, number_key2, ...
   * number_key30 for numeric values. Numeric values are floats. Values can be at most 256 characters long. The total size of
   * all searchData values may not exceed 1024 bytes.Keys are case sensitive.
   */
  SearchData?: Record<string, string | null>;
  /**
   * The keys to delete from the lobby SearchData. Optional. Deletes key-value pairs on the lobby. Only the current lobby
   * owner can delete search data. All the specified keys will be removed from the search data. Keys that do not exist in the
   * lobby are a no-op.If the key to delete exists in the searchData (same request) it will result in a bad request.
   */
  SearchDataToDelete?: string[];
}

export interface UpdateModelRequest extends IPlayFabRequestCommon {
  /** Optional new threshold value for anomalous match results in the model. */
  AnomalousMatchResultIgnoreThreshold?: number;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The ID of the Model we want to update. */
  ModelId: string;
  /** Optional new friendly name for the model. */
  ModelName?: string;
  /** The ID of the Scenario that the requested model belongs to. */
  ScenarioId: string;
}

export interface UpdateModelResponse extends IPlayFabResultCommon {
}

export interface UpdatePrimaryModelRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The ID of model that will be marked as primary. */
  ModelId: string;
  /** The ID of the scenario to update. */
  ScenarioId: string;
}

export interface UpdatePrimaryModelResponse extends IPlayFabResultCommon {
}

export interface UpdateScenarioConfigurationRequest extends IPlayFabRequestCommon {
  /** List of strings that represents all the conditions that are to be removed. */
  ConditionsToRemove?: string[];
  /** A dictionary of conditions that are to be added or updated. */
  ConditionsToUpdateOrAdd?: ScenarioConfigCondition[];
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** List of strings that represents all the events that are to be added. */
  EventsToAdd?: string[];
  /** List of strings that represents all the events that are to be removed. */
  EventsToRemove?: string[];
  /** The friendly name of the given scenario to be updated. */
  Name?: string;
  /** The Scenario ID of the given scenario. */
  ScenarioId: string;
}

export interface UpdateScenarioConfigurationResponse extends IPlayFabResultCommon {
}

export interface UploadCertificateRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Forces the certificate renewal if the certificate already exists. Default is false */
  ForceUpdate?: boolean;
  /** The game certificate to upload. */
  GameCertificate: Certificate;
}

export interface UploadMatchResultRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The match result to be uploaded for computing player skills. */
  MatchResult: MatchResult;
}

export interface UploadMatchResultResponse extends IPlayFabResultCommon {
  /** Identifier of the MatchResult, unique within the title. */
  MatchResultId?: string;
  /** Time that the MatchResult was uploaded. Null if the upload of the given MatchResult failed. */
  UploadTimeUtc: string;
}

export interface UploadSecretRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Forces the secret renewal if the secret already exists. Default is false */
  ForceUpdate?: boolean;
  /** The game secret to add. */
  GameSecret: Secret;
}

export interface VirtualMachineSummary {
  /** The virtual machine health status. */
  HealthStatus?: string;
  /** The virtual machine state. */
  State?: string;
  /** The virtual machine ID. */
  VmId?: string;
}

export interface VmStartupScriptConfiguration {
  /** Optional port requests (name/protocol) that will be used by the VmStartupScript. Max of 5 requests. */
  PortRequests?: VmStartupScriptPortRequest[];
  /** Asset which contains the VmStartupScript script and any other required files. */
  VmStartupScriptAssetReference: AssetReference;
}

export interface VmStartupScriptParams {
  /** Optional port requests (name/protocol) that will be used by the VmStartupScript. Max of 5 requests. */
  PortRequests?: VmStartupScriptPortRequestParams[];
  /** Asset which contains the VmStartupScript script and any other required files. */
  VmStartupScriptAssetReference: AssetReferenceParams;
}

export interface VmStartupScriptPortRequest {
  /** The name for the port. */
  Name: string;
  /** The protocol for the port. */
  Protocol: ProtocolType;
}

export interface VmStartupScriptPortRequestParams {
  /** The name for the port. */
  Name: string;
  /** The protocol for the port. */
  Protocol: ProtocolType;
}

export interface WindowsCrashDumpConfiguration {
  /** See https://docs.microsoft.com/en-us/windows/win32/wer/collecting-user-mode-dumps for valid values. */
  CustomDumpFlags?: number;
  /** See https://docs.microsoft.com/en-us/windows/win32/wer/collecting-user-mode-dumps for valid values. */
  DumpType?: number;
  /** Designates whether automatic crash dump capturing will be enabled for this Build. */
  IsEnabled: boolean;
}

