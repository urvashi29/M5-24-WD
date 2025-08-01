import React, { useState, useEffect } from "react";
import { auth } from "./firebase";
import Login from "./components/Login";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log(user);
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  handleLogout = () => {
    auth.signOut();
    //pop up
  };

  return (
    <p>
      {user ? (
        <>
          {" "}
          <p>Welcome! {user.displayName}</p>
          <button onClick={handleLogout}>Sign out</button>{" "}
        </>
      ) : (
        <Login />
      )}
    </p>
  );
}

export default App;
