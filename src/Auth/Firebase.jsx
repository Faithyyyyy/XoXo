import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDIsoRKkgaKbBaaW9m_IP-8ipxF-19m0uk",
  authDomain: "xoxo-db.firebaseapp.com",
  projectId: "xoxo-db",
  storageBucket: "xoxo-db.appspot.com",
  messagingSenderId: "648019716902",
  appId: "1:648019716902:web:bf83448bf3f9b3e689afe7",
  measurementId: "G-XZH40XX5RY",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
