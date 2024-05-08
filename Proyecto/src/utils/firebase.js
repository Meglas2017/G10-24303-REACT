// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; //
import {getFirestore} from "@firebase/firestore"//Traigo el servicio de bbdd firestore.
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBc3qrOHPtM6Uq1ujpddzJjqIeN1UGLtw",
  authDomain: "react-cac-d1f35.firebaseapp.com",
  projectId: "react-cac-d1f35",
  storageBucket: "react-cac-d1f35.appspot.com",
  messagingSenderId: "550428966628",
  appId: "1:550428966628:web:76ada1af6db7d239ac76f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); //inicializo firebase con la configuracion

export const bd = getFirestore(app);//Exporto la funcion de consulta a la base de datos con los parametros de inicializacion

