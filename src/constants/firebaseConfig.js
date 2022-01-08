import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCsskezU0g7uM4dWLtaU4b4sDv5qVFlmqA",
  authDomain: "green-run-sports-auth.firebaseapp.com",
  projectId: "green-run-sports-auth",
  storageBucket: "green-run-sports-auth.appspot.com",
  messagingSenderId: "734618977036",
  appId: "1:734618977036:web:9446bb41dedcfcf06c7f29",
  measurementId: "G-DQS35GPBFD",
};

const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore();
