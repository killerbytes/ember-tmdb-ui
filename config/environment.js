/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'tmdb-ember',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },
    firebase: {
      apiKey: "AIzaSyD7Li0Zu9JiqaoOcflZom1BBonRFu4nEkE",
      authDomain: "media-library.firebaseapp.com",
      databaseURL: "https://media-library.firebaseio.com",
      storageBucket: "firebase-media-library.appspot.com",
      messagingSenderId: "605315783938"
    },
    torii: {
      sessionServiceName: 'session'
    },    
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      HOST: "https://api.themoviedb.org/3",
      API_KEY: "49cfdb743cedde0892fc3dbfb373fe4b"
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
