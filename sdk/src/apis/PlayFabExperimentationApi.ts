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
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/experimentation/experimentation/createexclusiongroup Microsoft Documentation}
   * @example
   * await experimentationClient.CreateExclusionGroup({
   *   "Name": "Commerce Exclusion Group",
   *   "Description": "Exclusion group for independent, commerce-related experiments"
   * });
   */
  CreateExclusionGroup (request: CreateExclusionGroupRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateExclusionGroupResult>("/Experimentation/CreateExclusionGroup", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Creates a new experiment for a title.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/experimentation/experimentation/createexperiment Microsoft Documentation}
   * @example
   * await experimentationClient.CreateExperiment({
   *   "Name": "BackgroundColor Experiment",
   *   "Description": "Tests whether a green background color increases revenue",
   *   "StartDate": "2019-10-25T20:37:00Z",
   *   "EndDate": "2019-11-13T20:37:00Z",
   *   "Variants": [
   *     {
   *       "Name": "Control",
   *       "Description": "Control variant",
   *       "TrafficPercentage": 10,
   *       "Variables": [
   *         {
   *           "Name": "BackgroundColor",
   *           "Value": "White"
   *         }
   *       ],
   *       "IsControl": true
   *     },
   *     {
   *       "Name": "Treatment",
   *       "Description": "Treatment variant",
   *       "TrafficPercentage": 90,
   *       "Variables": [
   *         {
   *           "Name": "BackgroundColor",
   *           "Value": "Green"
   *         }
   *       ],
   *       "IsControl": false
   *     }
   *   ],
   *   "ExperimentType": "Active"
   * });
   */
  CreateExperiment (request: CreateExperimentRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateExperimentResult>("/Experimentation/CreateExperiment", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Deletes an existing exclusion group for a title.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/experimentation/experimentation/deleteexclusiongroup Microsoft Documentation}
   * @example
   * await experimentationClient.DeleteExclusionGroup({
   *   "ExclusionGroupId": "00000000-0000-0000-0000-000000000000"
   * });
   */
  DeleteExclusionGroup (request: DeleteExclusionGroupRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Experimentation/DeleteExclusionGroup", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Deletes an existing experiment for a title.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/experimentation/experimentation/deleteexperiment Microsoft Documentation}
   * @example
   * await experimentationClient.DeleteExperiment({
   *   "ExperimentId": "00000000-0000-0000-0000-000000000000"
   * });
   */
  DeleteExperiment (request: DeleteExperimentRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Experimentation/DeleteExperiment", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets the details of all exclusion groups for a title.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/experimentation/experimentation/getexclusiongroups Microsoft Documentation}
   * @example
   * await experimentationClient.GetExclusionGroups({});
   */
  GetExclusionGroups (request: GetExclusionGroupsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetExclusionGroupsResult>("/Experimentation/GetExclusionGroups", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets the details of all exclusion groups for a title.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/experimentation/experimentation/getexclusiongrouptraffic Microsoft Documentation}
   * @example
   * await experimentationClient.GetExclusionGroupTraffic({});
   */
  GetExclusionGroupTraffic (request: GetExclusionGroupTrafficRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetExclusionGroupTrafficResult>("/Experimentation/GetExclusionGroupTraffic", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets the details of all experiments for a title.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/experimentation/experimentation/getexperiments Microsoft Documentation}
   * @example
   * await experimentationClient.GetExperiments({});
   */
  GetExperiments (request: GetExperimentsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetExperimentsResult>("/Experimentation/GetExperiments", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets the latest scorecard of the experiment for the title.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/experimentation/experimentation/getlatestscorecard Microsoft Documentation}
   * @example
   * await experimentationClient.GetLatestScorecard({
   *   "ExperimentId": "00000000-0000-0000-0000-000000000000"
   * });
   */
  GetLatestScorecard (request: GetLatestScorecardRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetLatestScorecardResult>("/Experimentation/GetLatestScorecard", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets the treatment assignments for a player for every running experiment in the title.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/experimentation/experimentation/gettreatmentassignment Microsoft Documentation}
   * @example
   * await experimentationClient.GetTreatmentAssignment({});
   */
  GetTreatmentAssignment (request: GetTreatmentAssignmentRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetTreatmentAssignmentResult>("/Experimentation/GetTreatmentAssignment", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Starts an existing experiment for a title.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/experimentation/experimentation/startexperiment Microsoft Documentation}
   * @example
   * await experimentationClient.StartExperiment({
   *   "ExperimentId": "00000000-0000-0000-0000-000000000000"
   * });
   */
  StartExperiment (request: StartExperimentRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Experimentation/StartExperiment", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Stops an existing experiment for a title.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/experimentation/experimentation/stopexperiment Microsoft Documentation}
   * @example
   * await experimentationClient.StopExperiment({
   *   "ExperimentId": "00000000-0000-0000-0000-000000000000"
   * });
   */
  StopExperiment (request: StopExperimentRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Experimentation/StopExperiment", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Updates an existing exclusion group for a title.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/experimentation/experimentation/updateexclusiongroup Microsoft Documentation}
   * @example
   * await experimentationClient.UpdateExclusionGroup({
   *   "ExclusionGroupId": "00000000-0000-0000-0000-000000000000",
   *   "Name": "Commerce Exclusion Group",
   *   "Description": "Exclusion group for independent, commerce-related experiments"
   * });
   */
  UpdateExclusionGroup (request: UpdateExclusionGroupRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Experimentation/UpdateExclusionGroup", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Updates an existing experiment for a title.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/experimentation/experimentation/updateexperiment Microsoft Documentation}
   * @example
   * await experimentationClient.UpdateExperiment({
   *   "Name": "BackgroundColor Experiment",
   *   "Id": "B9A90E90-A009-4254-80A4-46B5933E9D26",
   *   "Description": "Tests whether a green background color increases revenue",
   *   "StartDate": "2019-10-25T20:37:00Z",
   *   "EndDate": "2019-11-13T20:37:00Z",
   *   "SegmentId": "0",
   *   "Variants": [
   *     {
   *       "Name": "Control",
   *       "Description": "Control variant",
   *       "TrafficPercentage": 10,
   *       "Variables": [
   *         {
   *           "Name": "BackgroundColor",
   *           "Value": "White"
   *         }
   *       ],
   *       "IsControl": true
   *     },
   *     {
   *       "Name": "Treatment",
   *       "Description": "Treatment variant",
   *       "TrafficPercentage": 90,
   *       "Variables": [
   *         {
   *           "Name": "BackgroundColor",
   *           "Value": "Green"
   *         }
   *       ],
   *       "IsControl": false
   *     }
   *   ],
   *   "ExperimentType": "Active"
   * });
   */
  UpdateExperiment (request: UpdateExperimentRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Experimentation/UpdateExperiment", request, "X-EntityToken", extraHeaders);
  }

};
