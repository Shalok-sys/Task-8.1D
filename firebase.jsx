// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7oGrRSW3Cw8Ned3vjmTGZrCh80Cro9Ls",
  authDomain: "article-ques.firebaseapp.com",
  projectId: "article-ques",
  storageBucket: "article-ques.appspot.com",
  messagingSenderId: "182683886554",
  appId: "1:182683886554:web:f1352b210d8c1d0bf096e3",
  measurementId: "G-B47Q9PVC60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app; // This app will be exported to extract data from the firebase as this variable app is initialised as an app with the configurations of our actual web app deployed on firebase. 
