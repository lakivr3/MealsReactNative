import {
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useContext, useState } from "react";
import Search from "../../../Search";
import RestorauntInfoCard from "./restoraunt-info-component";
import { RestaurantsContext } from "@/services/restaurants/context";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { LocationContext } from "@/services/restaurants/mock/location/context";
import Details from "@/app/restaurants/[id]";

export default function RestorauntScreen() {
  const { keyword } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  return (
    <>
      <SafeAreaView className="flex-1 h-full">
        <View className="  justify-center p-2 bg-white ">
          <Search />
        </View>
        <View className="flex-1 bg-white p-2">
          <ActivityIndicator
            animating={isLoading}
            color={MD2Colors.orange600}
            size={60}
            className="justify-center align-middle flex-1"
          />
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
