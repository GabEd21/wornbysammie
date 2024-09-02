import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCorXmLlBOG8t4nbZo5GauV07KZZmmVL9U",
  authDomain: "wornbysammie.firebaseapp.com",
  projectId: "wornbysammie",
  storageBucket: "wornbysammie.appspot.com",
  messagingSenderId: "905728330370",
  appId: "1:905728330370:web:d1c7c98b53752f54d3c29b",
  measurementId: "G-R8WS57G0QK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

export {auth,provider};