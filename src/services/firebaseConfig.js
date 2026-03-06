import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBojBb6PTvUmi-OWwcCuVrKAIELsyU25fc",
  authDomain: "ravenecommerce-1c6b3.firebaseapp.com",
  projectId: "ravenecommerce-1c6b3",
  storageBucket: "ravenecommerce-1c6b3.firebasestorage.app",
  messagingSenderId: "143359315754",
  appId: "1:143359315754:web:65c044af324b483169d853"
};

// Lógica para evitar el error de "duplicate-app"
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export default app;
