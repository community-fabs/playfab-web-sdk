import type { EmptyResponse } from "../types/PlayFab";
import type {

  CreateExclusionGroupRequest,
  CreateExperimentRequest,
  DeleteExclusionGroupRequest,
  DeleteExperimentRequest,
  GetExclusionGroupsRequest,
  GetExclusionGroupTrafficRequest,
  GetExperimentsRequest,
  GetLatestScorecardRequest,
  GetTreatmentAssignmentRequest,
  StartExperimentRequest,
  StopExperimentRequest,
  UpdateExclusionGroupRequest,
  UpdateExperimentRequest,
  CreateExclusionGroupResult,
  CreateExperimentResult,
  GetExclusionGroupsResult,
  GetExclusionGroupTrafficResult,
  GetExperimentsResult,
  GetLatestScorecardResult,
  GetTreatmentAssignmentResult,
} from "../types/PlayFabExperimentationApi";
import { PlayFabCommon } from "../PlayFabCommon";

export default class PlayFabExperimentationApi extends PlayFabCommon {

    /**
     * Creates a new experiment exclusion group for a title.
     * https://docs.microsoft.com/rest/api/playfab/experimentation/experimentation/createexclusiongroup
     */
    CreateExclusionGroup (request: CreateExclusionGroupRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<CreateExclusionGroupResult>("/Experimentation/CreateExclusionGroup", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Creates a new experiment for a title.
     * https://docs.microsoft.com/rest/api/playfab/experimentation/experimentation/createexperiment
     */
    CreateExperiment (request: CreateExperimentRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<CreateExperimentResult>("/Experimentation/CreateExperiment", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Deletes an existing exclusion group for a title.
     * https://docs.microsoft.com/rest/api/playfab/experimentation/experimentation/deleteexclusiongroup
     */
    DeleteExclusionGroup (request: DeleteExclusionGroupRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/Experimentation/DeleteExclusionGroup", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Deletes an existing experiment for a title.
     * https://docs.microsoft.com/rest/api/playfab/experimentation/experimentation/deleteexperiment
     */
    DeleteExperiment (request: DeleteExperimentRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/Experimentation/DeleteExperiment", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Gets the details of all exclusion groups for a title.
     * https://docs.microsoft.com/rest/api/playfab/experimentation/experimentation/getexclusiongroups
     */
    GetExclusionGroups (request: GetExclusionGroupsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetExclusionGroupsResult>("/Experimentation/GetExclusionGroups", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Gets the details of all exclusion groups for a title.
     * https://docs.microsoft.com/rest/api/playfab/experimentation/experimentation/getexclusiongrouptraffic
     */
    GetExclusionGroupTraffic (request: GetExclusionGroupTrafficRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetExclusionGroupTrafficResult>("/Experimentation/GetExclusionGroupTraffic", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Gets the details of all experiments for a title.
     * https://docs.microsoft.com/rest/api/playfab/experimentation/experimentation/getexperiments
     */
    GetExperiments (request: GetExperimentsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetExperimentsResult>("/Experimentation/GetExperiments", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Gets the latest scorecard of the experiment for the title.
     * https://docs.microsoft.com/rest/api/playfab/experimentation/experimentation/getlatestscorecard
     */
    GetLatestScorecard (request: GetLatestScorecardRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetLatestScorecardResult>("/Experimentation/GetLatestScorecard", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Gets the treatment assignments for a player for every running experiment in the title.
     * https://docs.microsoft.com/rest/api/playfab/experimentation/experimentation/gettreatmentassignment
     */
    GetTreatmentAssignment (request: GetTreatmentAssignmentRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetTreatmentAssignmentResult>("/Experimentation/GetTreatmentAssignment", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Starts an existing experiment for a title.
     * https://docs.microsoft.com/rest/api/playfab/experimentation/experimentation/startexperiment
     */
    StartExperiment (request: StartExperimentRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/Experimentation/StartExperiment", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Stops an existing experiment for a title.
     * https://docs.microsoft.com/rest/api/playfab/experimentation/experimentation/stopexperiment
     */
    StopExperiment (request: StopExperimentRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/Experimentation/StopExperiment", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Updates an existing exclusion group for a title.
     * https://docs.microsoft.com/rest/api/playfab/experimentation/experimentation/updateexclusiongroup
     */
    UpdateExclusionGroup (request: UpdateExclusionGroupRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/Experimentation/UpdateExclusionGroup", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Updates an existing experiment for a title.
     * https://docs.microsoft.com/rest/api/playfab/experimentation/experimentation/updateexperiment
     */
    UpdateExperiment (request: UpdateExperimentRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/Experimentation/UpdateExperiment", request, "X-EntityToken", customData, extraHeaders);
    }

};
