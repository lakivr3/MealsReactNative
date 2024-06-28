import { View, Text, FlatList } from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FavoritesContext } from "@/services/favorites/context";
import RestorauntInfoCard from "@/components/restourants/restoraunt-info-component";

const Favorite = () => {
  const { favorites } = useContext(FavoritesContext);
  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={favorites}
          renderItem={({ item }) => <RestorauntInfoCard restaurant={item} />}
          keyExtractor={(item) => item.name}
          contentContainerStyle={{ padding: 16 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Favorite;
