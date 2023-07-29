import { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
  isLoggedIn: boolean;
  setLoggedIn: (isLoggedIn: boolean) => void;
  username: string;
  setUsername: (username: string) => void;
  password: string;
  setPassword: (password: string) => void;

}

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  setLoggedIn: () => {},
  username: "",
  setUsername: () => {},
  password: "",
  setPassword: () => {},
});

export const useAuthContext = () => useContext(AuthContext);

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  
  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn, setUsername, setPassword, username, password }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
