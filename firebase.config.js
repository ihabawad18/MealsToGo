import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC77WenYGm_pb1BUrnv0m3dg7Bs1uigN2s",

  authDomain: "mealstogo-bd6a0.firebaseapp.com",

  projectId: "mealstogo-bd6a0",

  storageBucket: "mealstogo-bd6a0.appspot.com",

  messagingSenderId: "682996640873",

  appId: "1:682996640873:web:0a4d43ff7b04938e3106f8",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore();

export { auth, db };
