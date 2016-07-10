var Rebase = require('re-base');

var firebaseConfig = {
  apiKey: "AIzaSyA3NQBrAf_ezOopTutuCFhaiCKA4J8ASTA",
  authDomain: "userzoom-2bbd6.firebaseapp.com",
  databaseURL: "https://userzoom-2bbd6.firebaseio.com",
  storageBucket: "userzoom-2bbd6.appspot.com",
};

const base = Rebase.createClass('https://userzoom-2bbd6.firebaseio.com');

/*
// Create a callback to handle the result of the authentication
function authHandler(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    console.log("Authenticated successfully with payload:", authData);
  }
}

// Authentication via OAuth providers ("facebook", "github", "google", or "twitter")
//base.authWithOAuthPopup("facebook", authHandler);
//base.authWithOAuthRedirect("facebook", authHandler);
//base.authWithOAuthToken("facebook", token, authHandler);

// Log a user out
//base.unauth()

// Get authentication information
var authData = base.getAuth();
// Listen to authentication
function authDataCallback(authData) {
  if (authData) {
    console.log("User " + authData.uid + " is logged in with " + authData.provider);
  } else {
    console.log("User is logged out");
  }
}
*/

/*
var ref = new Firebase("https://userzoom-2bbd6.firebaseio.com/userzoomers");
/
ref.onAuth(authDataCallback);
*/

export {base};