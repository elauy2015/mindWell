"use client";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { checkAuthToken, loginuser, logoutUser } from "../helper/api-communicator";
import toast from "react-hot-toast";

type User = {
  name: string;
  email: string;
  image?: string;
};

type UserAuth = {
  isLoggedIn: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};
const AuthContext = createContext<UserAuth | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    //for skip logging if have valid cookies
    //checkear si funciona en produccion
      const res = async () => {
        const data = await checkAuthToken();
        if (data) {
          setUser({
            email: data.email,
            name: data.name,
            image: data?.image ?? "https://i.pravatar.cc/300",
          });
          setIsLoggedIn(true);
        }
      };
      res();
  }, []);

  const login = async (email: string, password: string) => {
    const data = await loginuser(email, password);
    if (data) {
      setUser({
        email: data.email,
        name: data.name,
        image: data?.image ?? "https://i.pravatar.cc/300",
      });
      setIsLoggedIn(true);
    }
  };
  const signup = async (name: string, email: string, password: string) => {};
  const logout = async () => {
    await logoutUser();
    toast.success("Logout success", {id: "logout"})
    setIsLoggedIn(false);
    setUser(null);
    window.location.reload();
  };

  const value = {
    user,
    isLoggedIn,
    login,
    signup,
    logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
