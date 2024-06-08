import { View, Text, StatusBar, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import Search from "../../../Search";
import RestorauntInfoCard from "./restoraunt-info-component";

export default function RestorauntScreen() {
  return (
    <>
      <SafeAreaView className="flex-1 h-full">
        <View className="  justify-center p-2 bg-white ">
          <Search />
        </View>
        <View className="flex-1 bg-white p-2">
          <FlatList
            data={[{ name: 1 }, { name: 2 }]}
            renderItem={() => <RestorauntInfoCard />}
            keyExtractor={(item) => item.name}
            contentContainerStyle={{ padding: 16 }}
          />
        </View>
      </SafeAreaView>
      <StatusBar style="auto" />
    </>
  );
}
