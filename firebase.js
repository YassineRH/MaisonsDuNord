import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  projectId: import.meta.env.VITE_PROJECT_ID,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
