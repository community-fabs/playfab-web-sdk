import { PlayFabClientApi, PlayFabMultiplayerApi } from "../src";

let clientApi: PlayFabClientApi;
let multiplayerApi: PlayFabMultiplayerApi;

describe("Common", () => {
  beforeEach(() => {
    clientApi = new PlayFabClientApi({
      titleId: "test-title-id",
      developerSecretKey: "developer-secret-key",
    });
    multiplayerApi = new PlayFabMultiplayerApi({
      titleId: "test-title-id",
      developerSecretKey: "developer-secret-key",
    });
  });

  it("should share SDK settings across SDKs", async () => {
    multiplayerApi.settings.titleId = "new-title-id";
    multiplayerApi.settings.developerSecretKey = "new-dev-secret";

    expect(clientApi.settings.titleId).toEqual("new-title-id");
    expect(clientApi.settings.developerSecretKey).toEqual("new-dev-secret");
  });
});
