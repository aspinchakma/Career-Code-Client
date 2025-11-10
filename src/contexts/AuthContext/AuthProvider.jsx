import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../firebase/firebase.init";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const handleUserSignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const data = {
    name: "Aspin Chakma",
    age: 23,
    handleUserSignUp,
    setUser,
  };
  console.log(user);
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
