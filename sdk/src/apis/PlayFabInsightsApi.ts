import type {
  InsightsEmptyRequest,
  InsightsGetOperationStatusRequest,
  InsightsGetPendingOperationsRequest,
  InsightsSetPerformanceRequest,
  InsightsSetStorageRetentionRequest,
  InsightsGetDetailsResponse,
  InsightsGetLimitsResponse,
  InsightsGetOperationStatusResponse,
  InsightsGetPendingOperationsResponse,
  InsightsOperationResponse,
} from "../types/PlayFabInsightsApi";
import { PlayFabCommon } from "../PlayFabCommon";

export default class PlayFabInsightsApi extends PlayFabCommon {

  /**
   * Gets the current values for the Insights performance and data storage retention, list of pending operations, and the
   * performance and data storage retention limits.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/insights/analytics/getdetails Microsoft Documentation}
   * @example
   * await insightsClient.GetDetails({});
   */
  GetDetails (request: InsightsEmptyRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<InsightsGetDetailsResponse>("/Insights/GetDetails", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Retrieves the range of allowed values for performance and data storage retention values as well as the submeter details
   * for each performance level.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/insights/analytics/getlimits Microsoft Documentation}
   * @example
   * await insightsClient.GetLimits({});
   */
  GetLimits (request: InsightsEmptyRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<InsightsGetLimitsResponse>("/Insights/GetLimits", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets the status of a SetPerformance or SetStorageRetention operation.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/insights/analytics/getoperationstatus Microsoft Documentation}
   * @example
   * await insightsClient.GetOperationStatus({
   *   "OperationId": "3ee468c4-ad09-4bb1-bccf-209ef5abfb96"
   * });
   */
  GetOperationStatus (request: InsightsGetOperationStatusRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<InsightsGetOperationStatusResponse>("/Insights/GetOperationStatus", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets a list of pending SetPerformance and/or SetStorageRetention operations for the title.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/insights/analytics/getpendingoperations Microsoft Documentation}
   * @example
   * await insightsClient.GetPendingOperations({
   *   "OperationType": "SetPerformance"
   * });
   */
  GetPendingOperations (request: InsightsGetPendingOperationsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<InsightsGetPendingOperationsResponse>("/Insights/GetPendingOperations", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Sets the Insights performance level value for the title.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/insights/analytics/setperformance Microsoft Documentation}
   * @example
   * await insightsClient.SetPerformance({
   *   "PerformanceLevel": 3
   * });
   */
  SetPerformance (request: InsightsSetPerformanceRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<InsightsOperationResponse>("/Insights/SetPerformance", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Sets the Insights data storage retention days value for the title.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/insights/analytics/setstorageretention Microsoft Documentation}
   * @example
   * await insightsClient.SetStorageRetention({
   *   "RetentionDays": 30
   * });
   */
  SetStorageRetention (request: InsightsSetStorageRetentionRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<InsightsOperationResponse>("/Insights/SetStorageRetention", request, "X-EntityToken", extraHeaders);
  }

};
