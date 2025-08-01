import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    Addon: "src/apis/PlayFabAddonApi.ts",
    Admin: "src/apis/PlayFabAdminApi.ts",
    Authentication: "src/apis/PlayFabAuthenticationApi.ts",
    Client: "src/apis/PlayFabClientApi.ts",
    CloudScript: "src/apis/PlayFabCloudScriptApi.ts",
    Data: "src/apis/PlayFabDataApi.ts",
    Economy: "src/apis/PlayFabEconomyApi.ts",
    Events: "src/apis/PlayFabEventsApi.ts",
    Experimentation: "src/apis/PlayFabExperimentationApi.ts",
    Groups: "src/apis/PlayFabGroupsApi.ts",
    Insights: "src/apis/PlayFabInsightsApi.ts",
    Localization: "src/apis/PlayFabLocalizationApi.ts",
    Matchmaker: "src/apis/PlayFabMatchmakerApi.ts",
    Multiplayer: "src/apis/PlayFabMultiplayerApi.ts",
    Profiles: "src/apis/PlayFabProfilesApi.ts",
    Progression: "src/apis/PlayFabProgressionApi.ts",
    Server: "src/apis/PlayFabServerApi.ts",
  },
  tsconfig: "tsconfig.json",
  sourcemap: true,
  clean: true,
  dts: true,
  format: "esm",
  platform: "browser",
});
