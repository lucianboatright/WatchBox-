import React from 'react';
import Watches from "./Components/Watches";
import './App.css';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from './firebase';
import firebase from "firebase"

const signInWithGoogle = () => auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());

const SignIn = () => (
  <main>
    <button onClick={signInWithGoogle}>Sign in</button>
  </main>
);



const App = () => {
  const [user] = useAuthState(auth);

  return user ? <Watches /> : <SignIn />;
}

export default App;
