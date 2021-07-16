import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCk7mftRywC0lOnkkAYoE4PAscU-4-woAc",
  authDomain: "slidcon.firebaseapp.com",
  projectId: "slidcon",
  storageBucket: "slidcon.appspot.com",
  messagingSenderId: "438423139989",
  appId: "1:438423139989:web:8ef70ba02217891b4a4d9c",
};

export const firebaseApp = initializeApp(firebaseConfig);
