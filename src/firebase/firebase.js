// Your web app's Firebase configuration
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDhTt9XgSD9__gv_uvp_06ICPvhe-Y129U",
    authDomain: "chatapp-b42b5.firebaseapp.com",
    projectId: "chatapp-b42b5",
    storageBucket: "chatapp-b42b5.firebasestorage.app",
    messagingSenderId: "346033366799",
    appId: "1:346033366799:web:eb8835f1e52a7b9dcc407a"
};
  
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
export const auth = getAuth(app);
  