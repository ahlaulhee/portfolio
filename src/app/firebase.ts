// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjZtKRK3PfxgHFwlrHtppVeVZB9iaX4U8",
  authDomain: "portfolio-term.firebaseapp.com",
  projectId: "portfolio-term",
  storageBucket: "portfolio-term.appspot.com",
  messagingSenderId: "167067445957",
  appId: "1:167067445957:web:a8881ca787444bccf89eac",
  measurementId: "G-XJTCQDHQ82",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
