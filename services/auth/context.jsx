import { View, Text } from "react-native";
import React, { useState, createContext, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  signInWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { appAuth, loginRequest, registerRequest } from "./service";
import { useRouter } from "expo-router";

const auth = getAuth(appAuth);

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState([]);
  const router = useRouter();
  useEffect(() => {
    onAuthStateChanged(auth, (usr) => {
      setIsLoading(true);
      if (usr) {
        setUser(usr);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    });
  }, []);

  const onLogin = async (email, password) => {
    setIsLoading(true);
    try {
      const u = await loginRequest(email, password);
      setUser(u);
      router.push("/");
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  };

  const onRegister = async (email, password, repeatedPassword) => {
    setIsLoading(true);
    if (password !== repeatedPassword) {
      setError("Error: Passwords do not match");
      setIsLoading(false);
      return;
    }
    try {
      const u = await registerRequest(email, password);
      setUser(u);
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
      if (user) router.push("/");
    }
  };
  const onLogout = async () => {
    setUser(null);
    await signOut(auth);
    router.push("/main");
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
