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
   * Reference: https://docs.microsoft.com/rest/api/playfab/cloudscript/server-side-cloud-script/executeentitycloudscript
   */
  ExecuteEntityCloudScript (request: ExecuteEntityCloudScriptRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ExecuteCloudScriptResult>("/CloudScript/ExecuteEntityCloudScript", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Cloud Script is one of PlayFab's most versatile features. It allows client code to request execution of any kind of
   * custom server-side functionality you can implement, and it can be used in conjunction with virtually anything.
   * Reference: https://docs.microsoft.com/rest/api/playfab/cloudscript/server-side-cloud-script/executefunction
   */
  ExecuteFunction (request: ExecuteFunctionRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ExecuteFunctionResult>("/CloudScript/ExecuteFunction", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets registered Azure Functions for a given title id and function name.
   * Reference: https://docs.microsoft.com/rest/api/playfab/cloudscript/server-side-cloud-script/getfunction
   */
  GetFunction (request: GetFunctionRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetFunctionResult>("/CloudScript/GetFunction", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Lists all currently registered Event Hub triggered Azure Functions for a given title.
   * Reference: https://docs.microsoft.com/rest/api/playfab/cloudscript/server-side-cloud-script/listeventhubfunctions
   */
  ListEventHubFunctions (request: ListFunctionsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListEventHubFunctionsResult>("/CloudScript/ListEventHubFunctions", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Lists all currently registered Azure Functions for a given title.
   * Reference: https://docs.microsoft.com/rest/api/playfab/cloudscript/server-side-cloud-script/listfunctions
   */
  ListFunctions (request: ListFunctionsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListFunctionsResult>("/CloudScript/ListFunctions", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Lists all currently registered HTTP triggered Azure Functions for a given title.
   * Reference: https://docs.microsoft.com/rest/api/playfab/cloudscript/server-side-cloud-script/listhttpfunctions
   */
  ListHttpFunctions (request: ListFunctionsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListHttpFunctionsResult>("/CloudScript/ListHttpFunctions", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Lists all currently registered Queue triggered Azure Functions for a given title.
   * Reference: https://docs.microsoft.com/rest/api/playfab/cloudscript/server-side-cloud-script/listqueuedfunctions
   */
  ListQueuedFunctions (request: ListFunctionsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListQueuedFunctionsResult>("/CloudScript/ListQueuedFunctions", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Generate an entity PlayStream event for the provided function result.
   * Reference: https://docs.microsoft.com/rest/api/playfab/cloudscript/server-side-cloud-script/postfunctionresultforentitytriggeredaction
   */
  PostFunctionResultForEntityTriggeredAction (request: PostFunctionResultForEntityTriggeredActionRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResult>("/CloudScript/PostFunctionResultForEntityTriggeredAction", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Generate an entity PlayStream event for the provided function result.
   * Reference: https://docs.microsoft.com/rest/api/playfab/cloudscript/server-side-cloud-script/postfunctionresultforfunctionexecution
   */
  PostFunctionResultForFunctionExecution (request: PostFunctionResultForFunctionExecutionRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResult>("/CloudScript/PostFunctionResultForFunctionExecution", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Generate a player PlayStream event for the provided function result.
   * Reference: https://docs.microsoft.com/rest/api/playfab/cloudscript/server-side-cloud-script/postfunctionresultforplayertriggeredaction
   */
  PostFunctionResultForPlayerTriggeredAction (request: PostFunctionResultForPlayerTriggeredActionRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResult>("/CloudScript/PostFunctionResultForPlayerTriggeredAction", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Generate a PlayStream event for the provided function result.
   * Reference: https://docs.microsoft.com/rest/api/playfab/cloudscript/server-side-cloud-script/postfunctionresultforscheduledtask
   */
  PostFunctionResultForScheduledTask (request: PostFunctionResultForScheduledTaskRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResult>("/CloudScript/PostFunctionResultForScheduledTask", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Registers an event hub triggered Azure Function with a title.
   * Reference: https://docs.microsoft.com/rest/api/playfab/cloudscript/server-side-cloud-script/registereventhubfunction
   */
  RegisterEventHubFunction (request: RegisterEventHubFunctionRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResult>("/CloudScript/RegisterEventHubFunction", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Registers an HTTP triggered Azure function with a title.
   * Reference: https://docs.microsoft.com/rest/api/playfab/cloudscript/server-side-cloud-script/registerhttpfunction
   */
  RegisterHttpFunction (request: RegisterHttpFunctionRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResult>("/CloudScript/RegisterHttpFunction", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Registers a queue triggered Azure Function with a title.
   * Reference: https://docs.microsoft.com/rest/api/playfab/cloudscript/server-side-cloud-script/registerqueuedfunction
   */
  RegisterQueuedFunction (request: RegisterQueuedFunctionRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResult>("/CloudScript/RegisterQueuedFunction", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Unregisters an Azure Function with a title.
   * Reference: https://docs.microsoft.com/rest/api/playfab/cloudscript/server-side-cloud-script/unregisterfunction
   */
  UnregisterFunction (request: UnregisterFunctionRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResult>("/CloudScript/UnregisterFunction", request, "X-EntityToken", extraHeaders);
  }

};
