import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../firebase/firebase.init";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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

  // observer setup
  useEffect(() => {
    const unSubscribed = onAuthStateChanged(auth, (userInfo) => {
      if (userInfo) {
        setUser(userInfo);

        // stop loading
        setIsLoading(false);
      } else {
        // continue loading
        setIsLoading(true);
        setUser(null);
      }
    });

    // cleanup function
    return () => {
      unSubscribed();
    };
  }, []);

  // signout
  const userSignOut = () => {
    return signOut(auth);
  };
  const data = {
    user,
    userSignIn,
    handleSignInWithGoogle,
    handleUserSignUp,
    setUser,
    userSignOut,
  };
  console.log(user);
  console.log(isLoading);
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
