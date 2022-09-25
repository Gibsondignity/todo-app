// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_-9uK5UPeQxr062FGMcIWXsvar_P--0o",
  authDomain: "todo-app-cd1fd.firebaseapp.com",
  projectId: "todo-app-cd1fd",
  storageBucket: "todo-app-cd1fd.appspot.com",
  messagingSenderId: "479449490807",
  appId: "1:479449490807:web:a7e561d8e27e628f976d72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);