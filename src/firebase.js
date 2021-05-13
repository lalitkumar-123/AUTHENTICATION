import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyDGxB9ZkBVo9NZAZGApPsL6dlByuDfq0EU",
    authDomain: "auth-test-26fd9.firebaseapp.com",
    projectId: "auth-test-26fd9",
    storageBucket: "auth-test-26fd9.appspot.com",
    messagingSenderId: "242161218277",
    appId: "1:242161218277:web:1e198361e84db695165a0c"
  };
 
const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export const storage = firebase.storage();
export default app; 