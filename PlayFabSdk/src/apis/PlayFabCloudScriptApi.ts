import type { ApiCallback } from "../types/Playfab";
import { PlayFabCommon } from "../PlayFabCommon";
import {
  ExecuteEntityCloudScriptRequest,
  ExecuteCloudScriptResult,
  ExecuteFunctionRequest,
  ExecuteFunctionResult,
  GetFunctionRequest,
  GetFunctionResult,
  ListFunctionsRequest,
  ListEventHubFunctionsResult,
  ListFunctionsResult,
  ListHttpFunctionsResult,
  ListQueuedFunctionsResult,
  PostFunctionResultForEntityTriggeredActionRequest,
  EmptyResult,
  PostFunctionResultForFunctionExecutionRequest,
  PostFunctionResultForPlayerTriggeredActionRequest,
  PostFunctionResultForScheduledTaskRequest,
  RegisterEventHubFunctionRequest,
  RegisterHttpFunctionRequest,
  RegisterQueuedFunctionRequest,
  UnregisterFunctionRequest,
} from "../types/PlayFabCloudScriptApi";

export class PlayFabCloudScriptApi extends PlayFabCommon {
  /**
   * Cloud Script is one of PlayFab's most versatile features. It allows client code to request execution of any kind of
   * custom server-side functionality you can implement, and it can be used in conjunction with virtually anything.
   * https://docs.microsoft.com/rest/api/playfab/cloudscript/server-side-cloud-script/executeentitycloudscript
   */
  ExecuteEntityCloudScript(
    request: ExecuteEntityCloudScriptRequest,
    callback: ApiCallback<ExecuteCloudScriptResult>,
    customData?: any,
    extraHeaders?: { [key: string]: string }
  ) {
    return this.ExecuteRequestWrapper(
      "/CloudScript/ExecuteEntityCloudScript",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Cloud Script is one of PlayFab's most versatile features. It allows client code to request execution of any kind of
   * custom server-side functionality you can implement, and it can be used in conjunction with virtually anything.
   * https://docs.microsoft.com/rest/api/playfab/cloudscript/server-side-cloud-script/executefunction
   */
  ExecuteFunction(
    request: ExecuteFunctionRequest,
    callback: ApiCallback<ExecuteFunctionResult>,
    customData?: any,
    extraHeaders?: { [key: string]: string }
  ) {
    return this.ExecuteRequestWrapper(
      "/CloudScript/ExecuteFunction",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Gets registered Azure Functions for a given title id and function name.
   * https://docs.microsoft.com/rest/api/playfab/cloudscript/server-side-cloud-script/getfunction
   */
  GetFunction(
    request: GetFunctionRequest,
    callback: ApiCallback<GetFunctionResult>,
    customData?: any,
    extraHeaders?: { [key: string]: string }
  ) {
    return this.ExecuteRequestWrapper(
      "/CloudScript/GetFunction",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Lists all currently registered Event Hub triggered Azure Functions for a given title.
   * https://docs.microsoft.com/rest/api/playfab/cloudscript/server-side-cloud-script/listeventhubfunctions
   */
  ListEventHubFunctions(
    request: ListFunctionsRequest,
    callback: ApiCallback<ListEventHubFunctionsResult>,
    customData?: any,
    extraHeaders?: { [key: string]: string }
  ) {
    return this.ExecuteRequestWrapper(
      "/CloudScript/ListEventHubFunctions",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Lists all currently registered Azure Functions for a given title.
   * https://docs.microsoft.com/rest/api/playfab/cloudscript/server-side-cloud-script/listfunctions
   */
  ListFunctions(
    request: ListFunctionsRequest,
    callback: ApiCallback<ListFunctionsResult>,
    customData?: any,
    extraHeaders?: { [key: string]: string }
  ) {
    return this.ExecuteRequestWrapper(
      "/CloudScript/ListFunctions",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Lists all currently registered HTTP triggered Azure Functions for a given title.
   * https://docs.microsoft.com/rest/api/playfab/cloudscript/server-side-cloud-script/listhttpfunctions
   */
  ListHttpFunctions(
    request: ListFunctionsRequest,
    callback: ApiCallback<ListHttpFunctionsResult>,
    customData?: any,
    extraHeaders?: { [key: string]: string }
  ) {
    return this.ExecuteRequestWrapper(
      "/CloudScript/ListHttpFunctions",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Lists all currently registered Queue triggered Azure Functions for a given title.
   * https://docs.microsoft.com/rest/api/playfab/cloudscript/server-side-cloud-script/listqueuedfunctions
   */
  ListQueuedFunctions(
    request: ListFunctionsRequest,
    callback: ApiCallback<ListQueuedFunctionsResult>,
    customData?: any,
    extraHeaders?: { [key: string]: string }
  ) {
    return this.ExecuteRequestWrapper(
      "/CloudScript/ListQueuedFunctions",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Generate an entity PlayStream event for the provided function result.
   * https://docs.microsoft.com/rest/api/playfab/cloudscript/server-side-cloud-script/postfunctionresultforentitytriggeredaction
   */
  PostFunctionResultForEntityTriggeredAction(
    request: PostFunctionResultForEntityTriggeredActionRequest,
    callback: ApiCallback<EmptyResult>,
    customData?: any,
    extraHeaders?: { [key: string]: string }
  ) {
    return this.ExecuteRequestWrapper(
      "/CloudScript/PostFunctionResultForEntityTriggeredAction",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Generate an entity PlayStream event for the provided function result.
   * https://docs.microsoft.com/rest/api/playfab/cloudscript/server-side-cloud-script/postfunctionresultforfunctionexecution
   */
  PostFunctionResultForFunctionExecution(
    request: PostFunctionResultForFunctionExecutionRequest,
    callback: ApiCallback<EmptyResult>,
    customData?: any,
    extraHeaders?: { [key: string]: string }
  ) {
    return this.ExecuteRequestWrapper(
      "/CloudScript/PostFunctionResultForFunctionExecution",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Generate a player PlayStream event for the provided function result.
   * https://docs.microsoft.com/rest/api/playfab/cloudscript/server-side-cloud-script/postfunctionresultforplayertriggeredaction
   */
  PostFunctionResultForPlayerTriggeredAction(
    request: PostFunctionResultForPlayerTriggeredActionRequest,
    callback: ApiCallback<EmptyResult>,
    customData?: any,
    extraHeaders?: { [key: string]: string }
  ) {
    return this.ExecuteRequestWrapper(
      "/CloudScript/PostFunctionResultForPlayerTriggeredAction",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Generate a PlayStream event for the provided function result.
   * https://docs.microsoft.com/rest/api/playfab/cloudscript/server-side-cloud-script/postfunctionresultforscheduledtask
   */
  PostFunctionResultForScheduledTask(
    request: PostFunctionResultForScheduledTaskRequest,
    callback: ApiCallback<EmptyResult>,
    customData?: any,
    extraHeaders?: { [key: string]: string }
  ) {
    return this.ExecuteRequestWrapper(
      "/CloudScript/PostFunctionResultForScheduledTask",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Registers an event hub triggered Azure Function with a title.
   * https://docs.microsoft.com/rest/api/playfab/cloudscript/server-side-cloud-script/registereventhubfunction
   */
  RegisterEventHubFunction(
    request: RegisterEventHubFunctionRequest,
    callback: ApiCallback<EmptyResult>,
    customData?: any,
    extraHeaders?: { [key: string]: string }
  ) {
    return this.ExecuteRequestWrapper(
      "/CloudScript/RegisterEventHubFunction",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Registers an HTTP triggered Azure function with a title.
   * https://docs.microsoft.com/rest/api/playfab/cloudscript/server-side-cloud-script/registerhttpfunction
   */
  RegisterHttpFunction(
    request: RegisterHttpFunctionRequest,
    callback: ApiCallback<EmptyResult>,
    customData?: any,
    extraHeaders?: { [key: string]: string }
  ) {
    return this.ExecuteRequestWrapper(
      "/CloudScript/RegisterHttpFunction",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Registers a queue triggered Azure Function with a title.
   * https://docs.microsoft.com/rest/api/playfab/cloudscript/server-side-cloud-script/registerqueuedfunction
   */
  RegisterQueuedFunction(
    request: RegisterQueuedFunctionRequest,
    callback: ApiCallback<EmptyResult>,
    customData?: any,
    extraHeaders?: { [key: string]: string }
  ) {
    return this.ExecuteRequestWrapper(
      "/CloudScript/RegisterQueuedFunction",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Unregisters an Azure Function with a title.
   * https://docs.microsoft.com/rest/api/playfab/cloudscript/server-side-cloud-script/unregisterfunction
   */
  UnregisterFunction(
    request: UnregisterFunctionRequest,
    callback: ApiCallback<EmptyResult>,
    customData?: any,
    extraHeaders?: { [key: string]: string }
  ) {
    return this.ExecuteRequestWrapper(
      "/CloudScript/UnregisterFunction",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
}
