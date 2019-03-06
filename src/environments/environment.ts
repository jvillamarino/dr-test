// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  firebase:{
    apiKey: "AIzaSyAdwYXDWTapKBRC8c3TD2cqG5P-_gxVdkc",
    authDomain: "dr-security.firebaseapp.com",
    databaseURL: "https://dr-security.firebaseio.com",
    projectId: "dr-security",
    storageBucket: "dr-security.appspot.com",
    messagingSenderId: "456572942913"
  }
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
