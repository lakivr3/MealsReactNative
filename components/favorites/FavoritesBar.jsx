import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { FavoritesContext } from "@/services/favorites/context";
import { useRouter } from "expo-router";

const FavoritesBar = ({ favorites }) => {
  const route = useRouter();

  if (!favorites.length) return null;
  return (
    <View className="p-2 px-4">
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favorites.map((restaurant) => {
          const key = restaurant.name.split(" ").join("");
          return (
            <View key={key} className="mr-2">
              <TouchableOpacity
                onPress={() => route.push(`/restaurants/${restaurant.placeId}`)}
              >
                <Image
                  source={{ uri: restaurant.photos[0] }}
                  width={100}
                  height={100}
                  className="rounded-xl"
                />
                <Text className="w-[100px] text-center">{restaurant.name}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default FavoritesBar;
