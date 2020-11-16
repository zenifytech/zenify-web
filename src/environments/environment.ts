// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  serviceUrl: "http://localhost:8080/zenify-api",
  configs: {
    firebaseBusiness: {
      apiKey: "AIzaSyAMGM6xfpMkwMiRXXTrbpkswiNIYaejpK8",
      authDomain: "zenify-project-management.firebaseapp.com",
      databaseURL: "https://zenify-project-management.firebaseio.com",
      projectId: "zenify-project-management",
      storageBucket: "zenify-project-management.appspot.com",
      messagingSenderId: "84341448693",
      appId: "1:84341448693:web:93cc627db895c3dc1e4abc",
      measurementId: "G-57HN05ECR2"
    },
    firebaseCommunity: {
      apiKey: "AIzaSyA8YVqNqt4xcdM4fOl7HPibMsnVQzC3-i0",
      authDomain: "zenify-associates.firebaseapp.com",
      databaseURL: "https://zenify-associates.firebaseio.com",
      projectId: "zenify-associates",
      storageBucket: "zenify-associates.appspot.com",
      messagingSenderId: "112544098575",
      appId: "1:112544098575:web:a2f8f528d6eadf2863f67a",
      measurementId: "G-5N78Q8N59Q"
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/dist/zone-error';  // Included with Angular CLI.
