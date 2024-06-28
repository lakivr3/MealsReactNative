import { View, Text } from "react-native";
import { Slot, SplashScreen, Stack, Tabs } from "expo-router";

import React from "react";

SplashScreen.preventAutoHideAsync();

const FavoriteLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="camera" options={{ headerShown: false }} />
    </Stack>
  );
};

export default FavoriteLayout;
