import { initializeApp } from "firebase/app";
import {
  signInWithEmailAndPassword,
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyDD9RxYc7Vv8WHNPVH2p1VTBaoF4LfLyjI",
  authDomain: "meals-1b363.firebaseapp.com",
  projectId: "meals-1b363",
  storageBucket: "meals-1b363.appspot.com",
  messagingSenderId: "730657130294",
  appId: "1:730657130294:web:db93e440cd7a2233555597",
};

export const appAuth = initializeApp(firebaseConfig);
const auth = getAuth(appAuth);

export const loginRequest = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredential.user;
};

export const registerRequest = async (email, password) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredential.user;
};
