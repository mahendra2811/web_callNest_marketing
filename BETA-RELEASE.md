# Local CallNest Beta release preparation

The `/beta/` page is separate from the Google Play app and shows a download only after a valid Beta manifest is available. No Beta APK or manifest is committed by this preparation.

1. Prepare a signed Beta APK using the Android Beta project's approved release process. Verify the release certificate fingerprint independently from the intended signing key; a debug certificate is not suitable for release.
2. Put Android SDK `apkanalyzer` and `apksigner` on `PATH`. Use the APK and matching local JSON metadata produced by the Beta release script:

   ```bash
   npm run sync-beta -- --apk /path/to/CallNest-Beta-X.Y.Z.apk --metadata /path/to/CallNest-Beta-X.Y.Z.json --cert-sha256 RELEASE_CERTIFICATE_SHA256
   ```

3. The command verifies the APK signature, package, version, metadata hash, size and expected release certificate. It writes a versioned immutable file such as `public/apk/callnest-beta-1.2.3-32.apk`, then updates `public/versions-beta.json` last. It refuses version-code rollback, certificate changes and overwrites. If manifest writing fails, the previous manifest still points to its previous immutable APK. It does not modify the stable channel, commit, push or deploy.

The Beta manifest and versioned APK must be deployed together: clients should verify the downloaded APK hash and Android verifies the signing certificate during installation. The existing `npm run sync-release` is for the stable channel and must not be used to publish Beta. After local sync, review the site changes, then build and deploy the website using its usual approved workflow. A new package ID installs separately from the Play and older apps, with separate app data. The Beta page links to its own privacy notice at `/beta/privacy/`.
