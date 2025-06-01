import type {

  ExecuteEntityCloudScriptRequest,
  ExecuteFunctionRequest,
  GetFunctionRequest,
  ListFunctionsRequest,
  PostFunctionResultForEntityTriggeredActionRequest,
  PostFunctionResultForFunctionExecutionRequest,
  PostFunctionResultForPlayerTriggeredActionRequest,
  PostFunctionResultForScheduledTaskRequest,
  RegisterEventHubFunctionRequest,
  RegisterHttpFunctionRequest,
  RegisterQueuedFunctionRequest,
  UnregisterFunctionRequest,
  ExecuteCloudScriptResult,
  ExecuteFunctionResult,
  GetFunctionResult,
  ListEventHubFunctionsResult,
  ListFunctionsResult,
  ListHttpFunctionsResult,
  ListQueuedFunctionsResult,
  EmptyResult,
} from "../types/PlayFabCloudScriptApi";
import { PlayFabCommon } from "../PlayFabCommon";

export default class PlayFabCloudScriptApi extends PlayFabCommon {

    /**
     * Cloud Script is one of PlayFab's most versatile features. It allows client code to request execution of any kind of
     * custom server-side functionality you can implement, and it can be used in conjunction with virtually anything.
     * https://docs.microsoft.com/rest/api/playfab/cloudscript/server-side-cloud-script/executeentitycloudscript
     */
    ExecuteEntityCloudScript (request: ExecuteEntityCloudScriptRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ExecuteCloudScriptResult>("/CloudScript/ExecuteEntityCloudScript", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Cloud Script is one of PlayFab's most versatile features. It allows client code to request execution of any kind of
     * custom server-side functionality you can implement, and it can be used in conjunction with virtually anything.
     * https://docs.microsoft.com/rest/api/playfab/cloudscript/server-side-cloud-script/executefunction
     */
    ExecuteFunction (request: ExecuteFunctionRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ExecuteFunctionResult>("/CloudScript/ExecuteFunction", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Gets registered Azure Functions for a given title id and function name.
     * https://docs.microsoft.com/rest/api/playfab/cloudscript/server-side-cloud-script/getfunction
     */
    GetFunction (request: GetFunctionRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetFunctionResult>("/CloudScript/GetFunction", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Lists all currently registered Event Hub triggered Azure Functions for a given title.
     * https://docs.microsoft.com/rest/api/playfab/cloudscript/server-side-cloud-script/listeventhubfunctions
     */
    ListEventHubFunctions (request: ListFunctionsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ListEventHubFunctionsResult>("/CloudScript/ListEventHubFunctions", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Lists all currently registered Azure Functions for a given title.
     * https://docs.microsoft.com/rest/api/playfab/cloudscript/server-side-cloud-script/listfunctions
     */
    ListFunctions (request: ListFunctionsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ListFunctionsResult>("/CloudScript/ListFunctions", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Lists all currently registered HTTP triggered Azure Functions for a given title.
     * https://docs.microsoft.com/rest/api/playfab/cloudscript/server-side-cloud-script/listhttpfunctions
     */
    ListHttpFunctions (request: ListFunctionsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ListHttpFunctionsResult>("/CloudScript/ListHttpFunctions", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Lists all currently registered Queue triggered Azure Functions for a given title.
     * https://docs.microsoft.com/rest/api/playfab/cloudscript/server-side-cloud-script/listqueuedfunctions
     */
    ListQueuedFunctions (request: ListFunctionsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ListQueuedFunctionsResult>("/CloudScript/ListQueuedFunctions", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Generate an entity PlayStream event for the provided function result.
     * https://docs.microsoft.com/rest/api/playfab/cloudscript/server-side-cloud-script/postfunctionresultforentitytriggeredaction
     */
    PostFunctionResultForEntityTriggeredAction (request: PostFunctionResultForEntityTriggeredActionRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResult>("/CloudScript/PostFunctionResultForEntityTriggeredAction", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Generate an entity PlayStream event for the provided function result.
     * https://docs.microsoft.com/rest/api/playfab/cloudscript/server-side-cloud-script/postfunctionresultforfunctionexecution
     */
    PostFunctionResultForFunctionExecution (request: PostFunctionResultForFunctionExecutionRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResult>("/CloudScript/PostFunctionResultForFunctionExecution", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Generate a player PlayStream event for the provided function result.
     * https://docs.microsoft.com/rest/api/playfab/cloudscript/server-side-cloud-script/postfunctionresultforplayertriggeredaction
     */
    PostFunctionResultForPlayerTriggeredAction (request: PostFunctionResultForPlayerTriggeredActionRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResult>("/CloudScript/PostFunctionResultForPlayerTriggeredAction", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Generate a PlayStream event for the provided function result.
     * https://docs.microsoft.com/rest/api/playfab/cloudscript/server-side-cloud-script/postfunctionresultforscheduledtask
     */
    PostFunctionResultForScheduledTask (request: PostFunctionResultForScheduledTaskRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResult>("/CloudScript/PostFunctionResultForScheduledTask", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Registers an event hub triggered Azure Function with a title.
     * https://docs.microsoft.com/rest/api/playfab/cloudscript/server-side-cloud-script/registereventhubfunction
     */
    RegisterEventHubFunction (request: RegisterEventHubFunctionRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResult>("/CloudScript/RegisterEventHubFunction", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Registers an HTTP triggered Azure function with a title.
     * https://docs.microsoft.com/rest/api/playfab/cloudscript/server-side-cloud-script/registerhttpfunction
     */
    RegisterHttpFunction (request: RegisterHttpFunctionRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResult>("/CloudScript/RegisterHttpFunction", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Registers a queue triggered Azure Function with a title.
     * https://docs.microsoft.com/rest/api/playfab/cloudscript/server-side-cloud-script/registerqueuedfunction
     */
    RegisterQueuedFunction (request: RegisterQueuedFunctionRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResult>("/CloudScript/RegisterQueuedFunction", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Unregisters an Azure Function with a title.
     * https://docs.microsoft.com/rest/api/playfab/cloudscript/server-side-cloud-script/unregisterfunction
     */
    UnregisterFunction (request: UnregisterFunctionRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResult>("/CloudScript/UnregisterFunction", request, "X-EntityToken", customData, extraHeaders);
    }

};
