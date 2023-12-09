import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

//AuthProvider provides authentication-related functionality
export const AuthProvider = ({ children }) => {
  // State to track the authentication status
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Authentication status set to true (login)
  const login = () => {
    setIsAuthenticated(true);
  };
  //Authentication status set to fals (logout)
  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
