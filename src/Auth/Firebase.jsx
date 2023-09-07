import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAiroY6DYVwp2jjiUXN4_2XWocoRTcfQdU",
  authDomain: "xoxo-ff56e.firebaseapp.com",
  projectId: "xoxo-ff56e",
  storageBucket: "xoxo-ff56e.appspot.com",
  messagingSenderId: "833114438740",
  appId: "1:833114438740:web:8a80d64bfc973c4b2a41c1",
  measurementId: "G-SEHMTLMEYV"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
