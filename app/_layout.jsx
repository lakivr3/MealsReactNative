import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";

import { Slot, SplashScreen, Stack, Tabs } from "expo-router";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";

import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import RestayrantsContextProvider from "@/services/restaurants/context";
import { LocationContextProvider } from "@/services/restaurants/mock/location/context";
import Navigation from "@/components/Navigation";

SplashScreen.preventAutoHideAsync();
const RootLayout = () => {
  let [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  let [latoLoaded] = useLato({
    Lato_400Regular,
  });

  useEffect(() => {
    if (oswaldLoaded && latoLoaded) SplashScreen.hideAsync();
  }, [oswaldLoaded, latoLoaded]);
  if (!oswaldLoaded || !latoLoaded) return null;
  return (
    <>
      <LocationContextProvider>
        <RestayrantsContextProvider>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen
              name="/restaurants/[id]"
              options={{ headerShown: false }}
            />
          </Stack>
        </RestayrantsContextProvider>
      </LocationContextProvider>
    </>
  );
};

export default RootLayout;
