export interface IPlayFabRequestCommon {}
export interface IPlayFabError {
  code: number;
  status: string;
  error: string;
  errorCode: number;
  errorMessage: string;
  errorDetails?: { [key: string]: string[] };
  request?: any;
  customData?: any;
  retryAfterSeconds?: number;
}
export interface SuccessContainer<TResult extends IPlayFabResultCommon>
  extends IPlayFabError {
  data: TResult;
}
export interface IPlayFabResultCommon extends IPlayFabError {}
export interface ApiCallback<TResult extends IPlayFabResultCommon> {
  (result: SuccessContainer<TResult> | null, error: IPlayFabError | null): void;
}

export interface EmptyResponse extends IPlayFabResultCommon {}
