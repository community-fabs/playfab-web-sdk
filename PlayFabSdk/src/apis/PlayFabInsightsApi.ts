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
     * https://docs.microsoft.com/rest/api/playfab/insights/analytics/getdetails
     */
    GetDetails (request: InsightsEmptyRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<InsightsGetDetailsResponse>("/Insights/GetDetails", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Retrieves the range of allowed values for performance and data storage retention values as well as the submeter details
     * for each performance level.
     * https://docs.microsoft.com/rest/api/playfab/insights/analytics/getlimits
     */
    GetLimits (request: InsightsEmptyRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<InsightsGetLimitsResponse>("/Insights/GetLimits", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Gets the status of a SetPerformance or SetStorageRetention operation.
     * https://docs.microsoft.com/rest/api/playfab/insights/analytics/getoperationstatus
     */
    GetOperationStatus (request: InsightsGetOperationStatusRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<InsightsGetOperationStatusResponse>("/Insights/GetOperationStatus", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Gets a list of pending SetPerformance and/or SetStorageRetention operations for the title.
     * https://docs.microsoft.com/rest/api/playfab/insights/analytics/getpendingoperations
     */
    GetPendingOperations (request: InsightsGetPendingOperationsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<InsightsGetPendingOperationsResponse>("/Insights/GetPendingOperations", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Sets the Insights performance level value for the title.
     * https://docs.microsoft.com/rest/api/playfab/insights/analytics/setperformance
     */
    SetPerformance (request: InsightsSetPerformanceRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<InsightsOperationResponse>("/Insights/SetPerformance", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Sets the Insights data storage retention days value for the title.
     * https://docs.microsoft.com/rest/api/playfab/insights/analytics/setstorageretention
     */
    SetStorageRetention (request: InsightsSetStorageRetentionRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<InsightsOperationResponse>("/Insights/SetStorageRetention", request, "X-EntityToken", customData, extraHeaders);
    }

};
