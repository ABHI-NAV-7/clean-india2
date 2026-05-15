import { initializeApp }
from "firebase/app";

import {
  getAuth
} from "firebase/auth";

const firebaseConfig = {

  apiKey:
  "AIzaSyCQ_5GnhoA_2PAnx1vx9frhqjzjeKm7rS0",

  authDomain:
  "clean-india-33658.firebaseapp.com",

  projectId:
  "clean-india-33658",

  storageBucket:
  "clean-india-33658.firebasestorage.app",

  messagingSenderId:
  "218251593415",

  appId:
  "1:218251593415:web:5187c2016c98b0a3e8e0e2",

  measurementId:
  "G-TR305C0N0D"

};

const app =
initializeApp(firebaseConfig);

export const auth =
getAuth(app);