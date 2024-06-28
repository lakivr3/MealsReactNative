import { View, Text, StatusBar } from "react-native";
import React, { useContext, useMemo } from "react";
import RestorauntScreen from "../../components/restourants/restoraunt-screen";
import { AuthContext } from "@/services/auth/context";
import { Redirect } from "expo-router";

const Index = () => {
  const { isAuthenticated, user } = useContext(AuthContext);
  if (!user) return <Redirect href="/main" />;
  return (
    <>
      <RestorauntScreen />
      <StatusBar style="auto" />
    </>
  );
};

export default Index;
