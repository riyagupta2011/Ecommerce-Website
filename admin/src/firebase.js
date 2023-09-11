// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5t8fpUMEuG8HcmotadDw0t4AbjiUmtZI",
  authDomain: "shop-873b4.firebaseapp.com",
  projectId: "shop-873b4",
  storageBucket: "shop-873b4.appspot.com",
  messagingSenderId: "972246287092",
  appId: "1:972246287092:web:04fe01f0fb880bd9e7d4a1",
  measurementId: "G-PJTVPSCQZ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;