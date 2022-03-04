import { initializeApp } from 'firebase/app';
import { addDoc, doc, getDoc,  getFirestore, setDoc} from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";





// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZ3xpss7kMrVljtzhQqxCnRfAr-NaNTow",
  authDomain: "cupidarrow-a5c67.firebaseapp.com",
  databaseURL: "https://cupidarrow-a5c67-default-rtdb.firebaseio.com",
  projectId: "cupidarrow-a5c67",
  storageBucket: "cupidarrow-a5c67.appspot.com",
  messagingSenderId: "577557217376",
  appId: "1:577557217376:web:24fe4b973ea1b3d7234305",
  measurementId: "G-T3PW968LV6"
};

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);;

const database = getFirestore(firebaseApp);
const auth = getAuth();

export async function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password). then ((userCredential) => {
	  const user = userCredential.user;
	  createUserDoc(user);
  });

}

export function login(email, password) { 
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

// Custom Hook
export function useAuth() {
  const [ currentUser, setCurrentUser ] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, [])

  return currentUser;
}

export async function createUserDoc(user){
	if (!user) return;
	console.log(user.uid);
	const userRef = doc(database, `people/${user.uid}`);
	const snapshot = await getDoc(userRef); //get the user snapshot if exist
	// if not exist
	if (!snapshot.exists()) {
		const email = user.email;
		console.log(email);
		try {
			await setDoc(doc (database, "people", user.uid), {
				email: email,
				mathches : [ ],
				name : "Test",
				url : "none",
			})
		} catch(error) {
			console.log ('Eooro in creating user', error)
		}
	}else {
		console.log("DATA:!!! " , snapshot.data());
	}

}


export default database;