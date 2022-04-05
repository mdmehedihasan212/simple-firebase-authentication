/**
 * Steps to use firebase
 * Create a project on console.firebase.google.com
 * Install firebase
 * Register web api in firebase 
 * Copy firebase init code from firebase setting into project setting and create into src file paste
 * Import app in react app from firebase.init.js file
 * Import getAuth from firebase with variable
 * Turn on authentication
 * Click google file enable and project name and selected email for notification
 * GoogleAuthProvider import from firebase docs google sing in
 * Then signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user;
  })
  .catch((error) => {
    const errorCode = error.code;
 * 
 */