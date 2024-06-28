import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

import { Slot, SplashScreen, Stack, Tabs } from "expo-router";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";

import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import RestayrantsContextProvider from "@/services/restaurants/context";
import { LocationContextProvider } from "@/services/restaurants/mock/location/context";
import { FavoritesContextProvider } from "@/services/favorites/context";
import { AuthContext, AuthContextProvider } from "@/services/auth/context";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  useEffect(() => {
    if (oswaldLoaded && latoLoaded) SplashScreen.hideAsync();
  }, [oswaldLoaded, latoLoaded]);
  if (!oswaldLoaded || !latoLoaded) return null;

  return (
    <>
      <AuthContextProvider>
        <FavoritesContextProvider>
          <LocationContextProvider>
            <RestayrantsContextProvider>
              <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="(auth)" options={{ headerShown: false }} />
                <Stack.Screen
                  name="restaurants/[id]"
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="(favorites)"
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="(camera)"
                  options={{ headerShown: false }}
                />
              </Stack>
            </RestayrantsContextProvider>
          </LocationContextProvider>
        </FavoritesContextProvider>
      </AuthContextProvider>
    </>
  );
};

export default RootLayout;
