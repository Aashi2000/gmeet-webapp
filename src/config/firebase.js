// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAuth } from "firebase/auth";
import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBnyHSgOqRYM9zX2JixBxwt-1du_Ysfdgo",
//   authDomain: "gmeet-5a2ca.firebaseapp.com",
//   projectId: "gmeet-5a2ca",
//   storageBucket: "gmeet-5a2ca.appspot.com",
//   messagingSenderId: "712283956146",
//   appId: "1:712283956146:web:e20b176bae0160e60fbaab"
// };
const firebaseConfig = {
  apiKey: "AIzaSyBn3phY0O2ELHSm8yKX1NR0CazYe0FMT5s",
  authDomain: "meet-cln.firebaseapp.com",
  projectId: "meet-cln",
  storageBucket: "meet-cln.appspot.com",
  messagingSenderId: "33033612862",
  appId: "1:33033612862:web:6b3b9365aab6d6bdaaeb6f",
  measurementId: "G-Q484S74SV8",
};

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const auth =getAuth(app);
// export {auth};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
export {auth};