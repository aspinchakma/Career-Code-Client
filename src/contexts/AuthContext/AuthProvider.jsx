import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useState } from "react";
import { auth } from "../../firebase/firebase.init";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // provider
  const googleProvider = new GoogleAuthProvider();

  // signup user using google
  const handleSignInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // signup user using email and passwor
  const handleUserSignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in user
  const userSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const data = {
    userSignIn,
    handleSignInWithGoogle,
    handleUserSignUp,
    setUser,
  };
  console.log(user);
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
