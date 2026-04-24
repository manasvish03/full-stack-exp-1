import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [role, setRole] = useState("user");
  const [token, setToken] = useState(null);

  const login = (name, userRole) => {
    setIsLoggedIn(true);
    setUserName(name);
    setRole(userRole);
    setToken("fake-jwt-token");
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserName("");
    setRole("user");
    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        userName,
        role,
        token,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
