import type {
  IPlayFabRequestCommon,
  IPlayFabResultCommon
} from "./PlayFab";

    type AnalysisTaskState = "Waiting"

        | "ReadyForSubmission"
        | "SubmittingToPipeline"
        | "Running"
        | "Completed"
        | "Failed"
        | "Canceled";

    export interface CreateExclusionGroupRequest extends IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: Record<string, string | null >;
        /** Description of the exclusion group. */
        Description?: string;
        /** Friendly name of the exclusion group. */
        Name: string;

    }

    export interface CreateExclusionGroupResult extends IPlayFabResultCommon  {
        /** Identifier of the exclusion group. */
        ExclusionGroupId?: string;

    }

    export interface CreateExperimentRequest extends IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: Record<string, string | null >;
        /** Description of the experiment. */
        Description?: string;
        /** When experiment should end. */
        EndDate?: string;
        /** Id of the exclusion group. */
        ExclusionGroupId?: string;
        /** Percentage of exclusion group traffic that will see this experiment. */
        ExclusionGroupTrafficAllocation?: number;
        /** Type of experiment. */
        ExperimentType?: string;
        /** Friendly name of the experiment. */
        Name: string;
        /** Id of the segment to which this experiment applies. Defaults to the 'All Players' segment. */
        SegmentId?: string;
        /** When experiment should start. */
        StartDate: string;
        /**
         * List of title player account IDs that automatically receive treatments in the experiment, but are not included when
         * calculating experiment metrics.
         */
        TitlePlayerAccountTestIds?: string[];
        /** List of variants for the experiment. */
        Variants: Variant[];

    }

    export interface CreateExperimentResult extends IPlayFabResultCommon  {
        /** The ID of the new experiment. */
        ExperimentId?: string;

    }

    export interface DeleteExclusionGroupRequest extends IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: Record<string, string | null >;
        /** The ID of the exclusion group to delete. */
        ExclusionGroupId: string;

    }

    export interface DeleteExperimentRequest extends IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: Record<string, string | null >;
        /** The ID of the experiment to delete. */
        ExperimentId: string;

    }

    export interface EmptyResponse extends IPlayFabResultCommon  {

    }

    export interface EntityKey {
        /** Unique ID of the entity. */
        Id: string;
        /** Entity type. See https://docs.microsoft.com/gaming/playfab/features/data/entities/available-built-in-entity-types */
        Type?: string;

    }

    export interface ExclusionGroupTrafficAllocation {
        /** Id of the experiment. */
        ExperimentId?: string;
        /** Percentage of exclusion group traffic that will see this experiment. */
        TrafficAllocation: number;

    }

    export interface Experiment {
        /** Description of the experiment. */
        Description?: string;
        /** When experiment should end/was ended. */
        EndDate?: string;
        /** Id of the exclusion group for this experiment. */
        ExclusionGroupId?: string;
        /** Percentage of exclusion group traffic that will see this experiment. */
        ExclusionGroupTrafficAllocation?: number;
        /** Type of experiment. */
        ExperimentType?: string;
        /** Id of the experiment. */
        Id?: string;
        /** Friendly name of the experiment. */
        Name?: string;
        /** Id of the segment to which this experiment applies. Defaults to the 'All Players' segment. */
        SegmentId?: string;
        /** When experiment should start/was started. */
        StartDate: string;
        /** State experiment is currently in. */
        State?: string;
        /**
         * List of title player account IDs that automatically receive treatments in the experiment, but are not included when
         * calculating experiment metrics.
         */
        TitlePlayerAccountTestIds?: string[];
        /** List of variants for the experiment. */
        Variants?: Variant[];

    }

    export interface ExperimentExclusionGroup {
        /** Description of the exclusion group. */
        Description?: string;
        /** Id of the exclusion group. */
        ExclusionGroupId?: string;
        /** Friendly name of the exclusion group. */
        Name?: string;

    }

    type ExperimentState = "New"

        | "Started"
        | "Stopped"
        | "Deleted";

    type ExperimentType = "Active"

        | "Snapshot";

    export interface GetExclusionGroupsRequest extends IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: Record<string, string | null >;

    }

    export interface GetExclusionGroupsResult extends IPlayFabResultCommon  {
        /** List of exclusion groups for the title. */
        ExclusionGroups?: ExperimentExclusionGroup[];

    }

    export interface GetExclusionGroupTrafficRequest extends IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: Record<string, string | null >;
        /** The ID of the exclusion group. */
        ExclusionGroupId: string;

    }

    export interface GetExclusionGroupTrafficResult extends IPlayFabResultCommon  {
        /** List of traffic allocations for the exclusion group. */
        TrafficAllocations?: ExclusionGroupTrafficAllocation[];

    }

    export interface GetExperimentsRequest extends IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: Record<string, string | null >;

    }

    export interface GetExperimentsResult extends IPlayFabResultCommon  {
        /** List of experiments for the title. */
        Experiments?: Experiment[];

    }

    export interface GetLatestScorecardRequest extends IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: Record<string, string | null >;
        /** The ID of the experiment. */
        ExperimentId?: string;

    }

    export interface GetLatestScorecardResult extends IPlayFabResultCommon  {
        /** Scorecard for the experiment of the title. */
        Scorecard?: Scorecard;

    }

    export interface GetTreatmentAssignmentRequest extends IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: Record<string, string | null >;
        /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
        Entity?: EntityKey;

    }

    export interface GetTreatmentAssignmentResult extends IPlayFabResultCommon  {
        /** Treatment assignment for the entity. */
        TreatmentAssignment?: TreatmentAssignment;

    }

    export interface MetricData {
        /** The upper bound of the confidence interval for the relative delta (Delta.RelativeValue). */
        ConfidenceIntervalEnd: number;
        /** The lower bound of the confidence interval for the relative delta (Delta.RelativeValue). */
        ConfidenceIntervalStart: number;
        /** The absolute delta between TreatmentStats.Average and ControlStats.Average. */
        DeltaAbsoluteChange: number;
        /** The relative delta ratio between TreatmentStats.Average and ControlStats.Average. */
        DeltaRelativeChange: number;
        /** The machine name of the metric. */
        InternalName?: string;
        /** Indicates if a movement was detected on that metric. */
        Movement?: string;
        /** The readable name of the metric. */
        Name?: string;
        /** The expectation that a movement is real */
        PMove: number;
        /** The p-value resulting from the statistical test run for this metric */
        PValue: number;
        /** The threshold for observing sample ratio mismatch. */
        PValueThreshold: number;
        /** Indicates if the movement is statistically significant. */
        StatSigLevel?: string;
        /** Observed standard deviation value of the metric. */
        StdDev: number;
        /** Observed average value of the metric. */
        Value: number;

    }

    export interface Scorecard {
        /** Represents the date the scorecard was generated. */
        DateGenerated?: string;
        /** Represents the duration of scorecard analysis. */
        Duration?: string;
        /** Represents the number of events processed for the generation of this scorecard */
        EventsProcessed: number;
        /** Id of the experiment. */
        ExperimentId?: string;
        /** Friendly name of the experiment. */
        ExperimentName?: string;
        /** Represents the latest compute job status. */
        LatestJobStatus?: string;
        /** Represents the presence of a sample ratio mismatch in the scorecard data. */
        SampleRatioMismatch: boolean;
        /** Scorecard containing list of analysis. */
        ScorecardDataRows?: ScorecardDataRow[];

    }

    export interface ScorecardDataRow {
        /** Represents whether the variant is control or not. */
        IsControl: boolean;
        /** Data of the analysis with the internal name of the metric as the key and an object of metric data as value. */
        MetricDataRows?: Record<string, MetricData>;
        /** Represents the player count in the variant. */
        PlayerCount: number;
        /** Name of the variant of analysis. */
        VariantName?: string;

    }

    export interface StartExperimentRequest extends IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: Record<string, string | null >;
        /** The ID of the experiment to start. */
        ExperimentId: string;

    }

    export interface StopExperimentRequest extends IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: Record<string, string | null >;
        /** The ID of the experiment to stop. */
        ExperimentId: string;

    }

    export interface TreatmentAssignment {
        /** List of the experiment variables. */
        Variables?: Variable[];
        /** List of the experiment variants. */
        Variants?: string[];

    }

    export interface UpdateExclusionGroupRequest extends IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: Record<string, string | null >;
        /** Description of the exclusion group. */
        Description?: string;
        /** The ID of the exclusion group to update. */
        ExclusionGroupId: string;
        /** Friendly name of the exclusion group. */
        Name: string;

    }

    export interface UpdateExperimentRequest extends IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: Record<string, string | null >;
        /** Description of the experiment. */
        Description?: string;
        /** When experiment should end. */
        EndDate?: string;
        /** Id of the exclusion group. */
        ExclusionGroupId?: string;
        /** Percentage of exclusion group traffic that will see this experiment. */
        ExclusionGroupTrafficAllocation?: number;
        /** Type of experiment. */
        ExperimentType?: string;
        /** Id of the experiment. */
        Id: string;
        /** Friendly name of the experiment. */
        Name: string;
        /** Id of the segment to which this experiment applies. Defaults to the 'All Players' segment. */
        SegmentId?: string;
        /** When experiment should start. */
        StartDate: string;
        /**
         * List of title player account IDs that automatically receive treatments in the experiment, but are not included when
         * calculating experiment metrics.
         */
        TitlePlayerAccountTestIds?: string[];
        /** List of variants for the experiment. */
        Variants: Variant[];

    }

    export interface Variable {
        /** Name of the variable. */
        Name: string;
        /** Value of the variable. */
        Value?: string;

    }

    export interface Variant {
        /** Description of the variant. */
        Description?: string;
        /** Id of the variant. */
        Id?: string;
        /** Specifies if variant is control for experiment. */
        IsControl: boolean;
        /** Name of the variant. */
        Name: string;
        /** Id of the TitleDataOverride to use with this variant. */
        TitleDataOverrideLabel?: string;
        /** Percentage of target audience traffic that will see this variant. */
        TrafficPercentage: number;
        /** Variables returned by this variant. */
        Variables?: Variable[];

    }


