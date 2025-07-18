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
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/cloudscript/server-side-cloud-script/executeentitycloudscript Microsoft Documentation}
   * @example
   * await cloudscriptClient.ExecuteEntityCloudScript({
   *   "FunctionName": "levelCompleted",
   *   "FunctionParameter": {
   *     "level": 3,
   *     "points": 400
   *   },
   *   "RevisionSelection": "Live",
   *   "GeneratePlayStreamEvent": true,
   *   "Entity": {
   *     "Id": "aaa",
   *     "Type": "title_player_account",
   *     "TypeString": "title_player_account"
   *   }
   * });
   */
  ExecuteEntityCloudScript (request: ExecuteEntityCloudScriptRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ExecuteCloudScriptResult>("/CloudScript/ExecuteEntityCloudScript", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Cloud Script is one of PlayFab's most versatile features. It allows client code to request execution of any kind of
   * custom server-side functionality you can implement, and it can be used in conjunction with virtually anything.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/cloudscript/server-side-cloud-script/executefunction Microsoft Documentation}
   * @example
   * await cloudscriptClient.ExecuteFunction({
   *   "FunctionName": "LevelCompleted",
   *   "FunctionParameter": {
   *     "level": 3,
   *     "points": 400
   *   },
   *   "GeneratePlayStreamEvent": true,
   *   "Entity": {
   *     "Id": "aaa",
   *     "Type": "title_player_account",
   *     "TypeString": "title_player_account"
   *   }
   * });
   */
  ExecuteFunction (request: ExecuteFunctionRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ExecuteFunctionResult>("/CloudScript/ExecuteFunction", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets registered Azure Functions for a given title id and function name.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/cloudscript/server-side-cloud-script/getfunction Microsoft Documentation}
   * @example
   * await cloudscriptClient.GetFunction({
   *   "FunctionName": "LevelCompleted"
   * });
   */
  GetFunction (request: GetFunctionRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetFunctionResult>("/CloudScript/GetFunction", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Lists all currently registered Event Hub triggered Azure Functions for a given title.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/cloudscript/server-side-cloud-script/listeventhubfunctions Microsoft Documentation}
   * @example
   * await cloudscriptClient.ListEventHubFunctions({});
   */
  ListEventHubFunctions (request: ListFunctionsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListEventHubFunctionsResult>("/CloudScript/ListEventHubFunctions", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Lists all currently registered Azure Functions for a given title.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/cloudscript/server-side-cloud-script/listfunctions Microsoft Documentation}
   * @example
   * await cloudscriptClient.ListFunctions({});
   */
  ListFunctions (request: ListFunctionsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListFunctionsResult>("/CloudScript/ListFunctions", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Lists all currently registered HTTP triggered Azure Functions for a given title.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/cloudscript/server-side-cloud-script/listhttpfunctions Microsoft Documentation}
   * @example
   * await cloudscriptClient.ListHttpFunctions({});
   */
  ListHttpFunctions (request: ListFunctionsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListHttpFunctionsResult>("/CloudScript/ListHttpFunctions", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Lists all currently registered Queue triggered Azure Functions for a given title.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/cloudscript/server-side-cloud-script/listqueuedfunctions Microsoft Documentation}
   * @example
   * await cloudscriptClient.ListQueuedFunctions({});
   */
  ListQueuedFunctions (request: ListFunctionsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListQueuedFunctionsResult>("/CloudScript/ListQueuedFunctions", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Generate an entity PlayStream event for the provided function result.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/cloudscript/server-side-cloud-script/postfunctionresultforentitytriggeredaction Microsoft Documentation}
   * @example
   * await cloudscriptClient.PostFunctionResultForEntityTriggeredAction({
   *   "FunctionResult": {
   *     "ExecutionTimeMilliseconds": 367,
   *     "FunctionName": "LevelCompleted",
   *     "FunctionResult": {
   *       "newScore": 25,
   *       "isWinner": false
   *     },
   *     "FunctionResultSize": 43
   *   },
   *   "Entity": {
   *     "Id": "ID",
   *     "Type": "title_player_account",
   *     "TypeString": "title_player_account"
   *   }
   * });
   */
  PostFunctionResultForEntityTriggeredAction (request: PostFunctionResultForEntityTriggeredActionRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResult>("/CloudScript/PostFunctionResultForEntityTriggeredAction", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Generate an entity PlayStream event for the provided function result.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/cloudscript/server-side-cloud-script/postfunctionresultforfunctionexecution Microsoft Documentation}
   * @example
   * await cloudscriptClient.PostFunctionResultForFunctionExecution({
   *   "FunctionResult": {
   *     "ExecutionTimeMilliseconds": 367,
   *     "FunctionName": "LevelCompleted",
   *     "FunctionResult": {
   *       "newScore": 25,
   *       "isWinner": false
   *     },
   *     "FunctionResultSize": 43
   *   },
   *   "Entity": {
   *     "Id": "ID",
   *     "Type": "title_player_account",
   *     "TypeString": "title_player_account"
   *   }
   * });
   */
  PostFunctionResultForFunctionExecution (request: PostFunctionResultForFunctionExecutionRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResult>("/CloudScript/PostFunctionResultForFunctionExecution", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Generate a player PlayStream event for the provided function result.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/cloudscript/server-side-cloud-script/postfunctionresultforplayertriggeredaction Microsoft Documentation}
   * @example
   * await cloudscriptClient.PostFunctionResultForPlayerTriggeredAction({
   *   "PlayStreamEventEnvelope": {
   *     "EntityId": "1234ABCD",
   *     "EntityType": "title_player_account",
   *     "EventName": "player_logged_in",
   *     "EventNamespace": "com.playfab",
   *     "EventData": "someeventdata",
   *     "EventSettings": "someeventsettings",
   *     "EventToBeDropped": false
   *   },
   *   "PlayerProfile": {
   *     "TitleId": "FFFF",
   *     "PlayerId": "1234ABCD",
   *     "Created": "2019-02-11T20:23:05Z",
   *     "LastLogin": "2020-02-11T20:23:05Z",
   *     "DisplayName": "Gudge"
   *   },
   *   "FunctionResult": {
   *     "ExecutionTimeMilliseconds": 367,
   *     "FunctionName": "LevelCompleted",
   *     "FunctionResult": {
   *       "newScore": 25,
   *       "isWinner": false
   *     },
   *     "FunctionResultSize": 43
   *   }
   * });
   */
  PostFunctionResultForPlayerTriggeredAction (request: PostFunctionResultForPlayerTriggeredActionRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResult>("/CloudScript/PostFunctionResultForPlayerTriggeredAction", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Generate a PlayStream event for the provided function result.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/cloudscript/server-side-cloud-script/postfunctionresultforscheduledtask Microsoft Documentation}
   * @example
   * await cloudscriptClient.PostFunctionResultForScheduledTask({
   *   "ScheduledTaskId": {
   *     "Name": "MyTask",
   *     "Id": "d739e188-22f6-4d13-a4d5-df2e93d4d2f7"
   *   },
   *   "FunctionResult": {
   *     "ExecutionTimeMilliseconds": 367,
   *     "FunctionName": "LevelCompleted",
   *     "FunctionResult": {
   *       "newScore": 25,
   *       "isWinner": false
   *     },
   *     "FunctionResultSize": 43
   *   }
   * });
   */
  PostFunctionResultForScheduledTask (request: PostFunctionResultForScheduledTaskRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResult>("/CloudScript/PostFunctionResultForScheduledTask", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Registers an event hub triggered Azure Function with a title.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/cloudscript/server-side-cloud-script/registereventhubfunction Microsoft Documentation}
   * @example
   * await cloudscriptClient.RegisterEventHubFunction({
   *   "EventHubName": "fn-eventhub",
   *   "ConnectionString": "SampleConnectionString",
   *   "FunctionName": "functionName"
   * });
   */
  RegisterEventHubFunction (request: RegisterEventHubFunctionRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResult>("/CloudScript/RegisterEventHubFunction", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Registers an HTTP triggered Azure function with a title.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/cloudscript/server-side-cloud-script/registerhttpfunction Microsoft Documentation}
   * @example
   * await cloudscriptClient.RegisterHttpFunction({
   *   "FunctionUrl": "http://function.url",
   *   "FunctionName": "functionName"
   * });
   */
  RegisterHttpFunction (request: RegisterHttpFunctionRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResult>("/CloudScript/RegisterHttpFunction", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Registers a queue triggered Azure Function with a title.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/cloudscript/server-side-cloud-script/registerqueuedfunction Microsoft Documentation}
   * @example
   * await cloudscriptClient.RegisterQueuedFunction({
   *   "QueueName": "fn-queue",
   *   "ConnectionString": "SampleConnectionString",
   *   "FunctionName": "functionName"
   * });
   */
  RegisterQueuedFunction (request: RegisterQueuedFunctionRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResult>("/CloudScript/RegisterQueuedFunction", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Unregisters an Azure Function with a title.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/cloudscript/server-side-cloud-script/unregisterfunction Microsoft Documentation}
   * @example
   * await cloudscriptClient.UnregisterFunction({
   *   "FunctionName": "functionName"
   * });
   */
  UnregisterFunction (request: UnregisterFunctionRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResult>("/CloudScript/UnregisterFunction", request, "X-EntityToken", extraHeaders);
  }

};
