import React from 'react';
import Watches from "./Watches";
import './App.css';

const signInWithGoogle = () => {};

const SignIn = () => (
  <main>
    <button onClick={signInWithGoogle}>Sign in</button>
  </main>
);



const App = () => {
  const user = "test":

  return user ? <Watches /> : <SignIn />;
}

export default App;
