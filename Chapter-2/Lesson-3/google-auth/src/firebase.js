// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC2kstVMJZhPLdjymFK5-VgJ2uOvcaENZo",
  authDomain: "authenticate-user-1a17b.firebaseapp.com",
  projectId: "project-1043986599675",
  storageBucket: "authenticate-user-1a17b.firebasestorage.app",
  messagingSenderId: "1080816206808",
  appId: "1:1080816206808:web:b297afcc16d30efec128ad",
  measurementId: "G-01CTXZW0KZ",
};

//initialize firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};
