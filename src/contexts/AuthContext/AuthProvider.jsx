import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const data = {
    name: "Aspin Chakma",
    age: 23,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
