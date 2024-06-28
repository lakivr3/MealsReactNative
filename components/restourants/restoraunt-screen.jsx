import {
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useContext, useState } from "react";
import Search from "../Search";
import RestorauntInfoCard from "./restoraunt-info-component";
import { RestaurantsContext } from "@/services/restaurants/context";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { LocationContext } from "@/services/restaurants/mock/location/context";
import { FavoritesContext } from "@/services/favorites/context";
import FavoritesBar from "@/components/favorites/FavoritesBar";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

export default function RestorauntScreen() {
  const { keyword } = useContext(LocationContext);
  const { favorites } = useContext(FavoritesContext);

  const [isToggled, setIsToggled] = useState(false);

  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  return (
    <>
      <SafeAreaView className="flex-1 h-full">
        <View className="justify-center p-2 bg-white ">
          <Search
            isFavoritesToggle={isToggled}
            onFavoritesToggle={() => setIsToggled(!isToggled)}
          />
        </View>
        <View className="flex-1 bg-white p-2">
          <ActivityIndicator
            animating={isLoading}
            color={MD2Colors.orange600}
            size={60}
            className="justify-center align-middle flex-1"
          />
          {isToggled && <FavoritesBar favorites={favorites} />}
          <FlatList
            data={restaurants}
            renderItem={({ item }) => <RestorauntInfoCard restaurant={item} />}
            keyExtractor={(item) => item.name}
            contentContainerStyle={{ padding: 16 }}
          />
        </View>
      </SafeAreaView>
      <StatusBar style="auto" />
    </>
  );
}
