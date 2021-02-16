// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url: 'http://localhost:5000/gotyfunctionsapi/us-central1',
  firebase: {
    apiKey:                  "YOUR_KEY_HERE",
    authDomain:              "YOUR_KEY_HERE",
    projectId:               "YOUR_KEY_HERE",
    storageBucket:           "YOUR_KEY_HERE",
    messagingSenderId:       "YOUR_KEY_HERE",
    appId:                   "YOUR_KEY_HERE"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
