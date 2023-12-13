import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7aQM6zGEcldXYSN05sHaqy3Wyf3uvNHE",
  authDomain: "coder-react-entrega-c3068.firebaseapp.com",
  projectId: "coder-react-entrega-c3068",
  storageBucket: "coder-react-entrega-c3068.appspot.com",
  messagingSenderId: "806590247125",
  appId: "1:806590247125:web:7acc17cfb50224ae78325c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exportamos nuestra base 
export const db = getFirestore(app)