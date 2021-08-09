import { initializeApp } from "firebase/app";

export const API_URL = "/api/parse";
export const MAX_FILE_SIZE = 3 * 1000 * 1000; // 3 MB
export const TOAST_DURATION = 3000;
export const FIREBASE = initializeApp({
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: "resume-parser-be685.appspot.com",
  messagingSenderId: "571728046970",
  appId: "1:571728046970:web:e351b8022bd3c98f5104c3",
  measurementId: "G-9KSWBKM256",
});
