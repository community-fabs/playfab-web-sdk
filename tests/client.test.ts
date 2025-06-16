import { PlayFabClientApi } from "../src";
import { clearMockFetch, mockFetch, mockFetchResponse } from "./fetchUtils";
import { generatePlayFabResponse } from "./utils";

mockFetch();

let clientApi: PlayFabClientApi;

describe("PlayFabClientApi", () => {
  beforeEach(() => {
    clearMockFetch();
    clientApi = new PlayFabClientApi({
      titleId: "test-title-id",
      developerSecretKey: "developer-secret-key",
    });
  });

  it("should store auth context on login", async () => {
    mockFetchResponse(
      generatePlayFabResponse({
        SessionTicket: "mock_session_ticket",
        PlayFabId: "dummy_playfab_id",
        NewlyCreated: false,
        SettingsForUser: {
          NeedsAttribution: false,
          GatherDeviceInfo: true,
          GatherFocusInfo: true,
        },
        EntityToken: {
          EntityToken: "mock_entity_token",
          TokenExpiration: "2025-06-16T22:23:51Z",
          Entity: {
            Id: "dummy_playfab_id",
            Type: "title_player_account",
            TypeString: "title_player_account",
          },
        },
        TreatmentAssignment: {
          Variants: [],
          Variables: [],
        },
      })
    );

    await clientApi.LoginWithCustomID({
      CustomId: "test-custom-id",
    });

    expect(fetch).toHaveBeenCalled();

    expect(clientApi.entityToken).toEqual("mock_entity_token");
    expect(clientApi.sessionTicket).toEqual("mock_session_ticket");
  });
});
