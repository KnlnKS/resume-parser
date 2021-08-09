import Firebase from "firebase/app";
import "firebase/analytics";

if (!Firebase.apps.length) {
  Firebase.initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: "resume-parser-be685.appspot.com",
    messagingSenderId: "571728046970",
    appId: "1:571728046970:web:e351b8022bd3c98f5104c3",
    measurementId: "G-9KSWBKM256"
  });
}

export const API_URL = "/api/parse";
export const MAX_FILE_SIZE = 9 * 1000 * 1000; // 9 MB
export const firebase = Firebase;
