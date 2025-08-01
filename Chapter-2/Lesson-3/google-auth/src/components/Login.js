import React from "react";
import { signInWithGoogle } from "../firebase";

function Login() {
  const handleSignIn = async () => {
    try {
      await signInWithGoogle();
      //redirect
    } catch (err) {
      console.log(err);
      // display the message
    }
  };

  return (
    <p>
      <button onClick={handleSignIn}>Sign in With google</button>
    </p>
  );
}

export default Login;
