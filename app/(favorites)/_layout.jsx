import { View, Text } from "react-native";
import { Slot, SplashScreen, Stack, Tabs } from "expo-router";

import React from "react";

SplashScreen.preventAutoHideAsync();

const FavoriteLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="favorite" options={{ headerShown: true }} />
    </Stack>
  );
};

export default FavoriteLayout;
