// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// const firebaseConfig = {
//   apiKey: process.env.APIKEY,
//   authDomain: process.env.AUTHDOMAIN,
//   projectId: process.env.PROJECTID,
//   storageBucket: process.env.STORAGEBUCKET,
//   messagingSenderId: process.env.MESSAGINGSENDERID,
//   appId: process.env.APPID
// };

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4SfS1MAbicu19JMhG88jGKmVBlJmiz68",
  authDomain: "react-annie.firebaseapp.com",
  projectId: "react-annie",
  storageBucket: "react-annie.appspot.com",
  messagingSenderId: "32985259473",
  appId: "1:32985259473:web:0df5d2604848728436d4f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

