import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext, useMemo } from "react";
import { FavoritesContext } from "@/services/favorites/context";
import { AntDesign } from "@expo/vector-icons";

const Favorite = ({ restaurant }) => {
  const { favorites, addFaovorites, removeFavorites } =
    useContext(FavoritesContext);
  const isFavorite = useMemo(
    () => favorites.find((r) => r.placeId === restaurant.placeId),
    [favorites]
  );
  return (
    <TouchableOpacity
      className="absolute top-4 -right-3 w-[64px] z-10"
      onPress={() =>
        !isFavorite ? addFaovorites(restaurant) : removeFavorites(restaurant)
      }
    >
      <AntDesign
        name={isFavorite ? "heart" : "hearto"}
        size={24}
        color={isFavorite ? "red" : "white"}
      />
    </TouchableOpacity>
  );
};

export default Favorite;
