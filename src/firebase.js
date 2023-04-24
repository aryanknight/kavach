import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOES9IRrmoKGg5jqLUZXTA44i-faP6r8k",
  authDomain: "kavach-868dd.firebaseapp.com",
  projectId: "kavach-868dd",
  storageBucket: "kavach-868dd.appspot.com",
  messagingSenderId: "919360003856",
  appId: "1:919360003856:web:d8e88b7883e44a49d0cf95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();