import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAnPazTWFDL0G4Fttz2aneT8cZ9Y6W6CUQ",
  authDomain: "stefin-notes-practice-project.firebaseapp.com",
  projectId: "stefin-notes-practice-project",
  storageBucket: "stefin-notes-practice-project.appspot.com",
  messagingSenderId: "1026495759050",
  appId: "1:1026495759050:web:0f5286bcb6fb17ac022a33",
  measurementId: "G-B4H9PZGW3P",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
