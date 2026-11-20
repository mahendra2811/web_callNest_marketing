/** Beta has a separate Android application ID and download from the Play app. */
export const BETA = {
  name: "CallNest Beta",
  applicationId: "com.pooniya.callnestbeta",
  manifestPath: "/versions-beta.json",
  apkPath: "/apk/callnest-beta-latest.apk",
  privacyPath: "/beta/privacy/",
  minAndroid: 8,
  description: "A separate Android app for trying upcoming CallNest improvements.",
} as const;
