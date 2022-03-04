import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore/lite';
import { getDatabase } from "firebase/database";




// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAZ3xpss7kMrVljtzhQqxCnRfAr-NaNTow",
    authDomain: "cupidarrow-a5c67.firebaseapp.com",
    projectId: "cupidarrow-a5c67",
    storageBucket: "cupidarrow-a5c67.appspot.com",
    messagingSenderId: "577557217376",
    appId: "1:577557217376:web:24fe4b973ea1b3d7234305",
    measurementId: "G-T3PW968LV6"
  };

const firebaseApp = initializeApp(firebaseConfig);;

const database = getFirestore(firebaseApp);

export default database;