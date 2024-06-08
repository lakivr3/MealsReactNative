import { View, Text, StatusBar } from "react-native";
import React from "react";
import RestorauntScreen from "../components/features/restorants/components/restoraunt-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import Search from "../components/Search";
import RestorauntInfo from "../components/features/restorants/components/restoraunt-info-component";
import { Link } from "expo-router";

const Index = () => {
  return (
    <>
      <RestorauntScreen />

      <StatusBar style="auto" />
    </>
  );
};

export default Index;
