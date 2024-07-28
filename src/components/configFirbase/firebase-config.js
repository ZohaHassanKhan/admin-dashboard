import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDGMVCOqdr0Uo8r2jyL0vJssZlYcggldCs",
  authDomain: "fydp-dd939.firebaseapp.com",
  projectId: "fydp-dd939",
  storageBucket: "fydp-dd939.appspot.com",
  messagingSenderId: "981585952013",
  appId: "1:981585952013:web:a61867fafc7ee3ee998444",
  measurementId: "G-YNED425YQ0",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
