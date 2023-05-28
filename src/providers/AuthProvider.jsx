import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app);

// main
const AuthProvider = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // create user function email,password
  // register
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // google
  const google = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  
  // github
  const github = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);

  }

  const authInfo = {
    createUser,
    signIn,
    user,
    loading,
    logOut,
    google,
    github
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      console.log("logged in user inside auth state observer", loggedUser);
      setUser(loggedUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // main return
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
