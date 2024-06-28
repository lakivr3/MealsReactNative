import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../auth/context";

export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [favorites, setFavorites] = useState([]);

  const saveFavorites = async (value, uid) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@favorites-${uid}`, jsonValue);
    } catch (e) {
      console.log("error storing", e);
    }
  };
  const loadFavorites = async (uid) => {
    try {
      const jsonValue = await AsyncStorage.getItem(`@favorites-${uid}`);
      if (jsonValue !== null) setFavorites(JSON.parse(jsonValue));
    } catch (e) {
      console.log("error loading", e);
    }
  };

  const add = (restaurant) => {
    setFavorites([...favorites, restaurant]);
  };
  const remove = (restaurant) => {
    const newFavorites = favorites.filter(
      (x) => x.placeId !== restaurant.placeId
    );
    setFavorites(newFavorites);
  };
  useEffect(() => {
    if (user) {
      loadFavorites(user.uid);
    }
  }, [user]);
  useEffect(() => {
    if (user) {
      saveFavorites(favorites, user.uid);
    }
  }, [favorites, user]);

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFaovorites: add, removeFavorites: remove }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
