
export function getBuildIdentifier(sdkName) {
  const { BUILD_PREFIX = "Custom_" } = process.env;

  return `${BUILD_PREFIX}${sdkName}`;
}