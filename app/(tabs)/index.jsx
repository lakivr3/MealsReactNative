import { View, Text, StatusBar } from "react-native";
import React from "react";
import RestorauntScreen from "../../components/features/restorants/components/restoraunt-screen";

const Index = () => {
  return (
    <>
      <RestorauntScreen />

      <StatusBar style="auto" />
    </>
  );
};

export default Index;
