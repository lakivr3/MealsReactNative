import { View, Text } from "react-native";
import { Slot, SplashScreen, Stack, Tabs } from "expo-router";

import React from "react";

SplashScreen.preventAutoHideAsync();

const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="main" options={{ headerShown: false }} />
      <Stack.Screen name="loginscreen" options={{ headerShown: false }} />
      <Stack.Screen name="registerscreen" options={{ headerShown: false }} />
    </Stack>
  );
};

export default AuthLayout;
