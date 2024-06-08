import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";

import { Slot, SplashScreen, Stack, Tabs } from "expo-router";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";

import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { Ionicons } from "@expo/vector-icons";

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
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 64,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Restaurants",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                color={color}
                focused={focused}
                name="restaurant"
                title="Restaurants"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="map"
          options={{
            title: "Map",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon color={color} focused={focused} name="map" title="Map" />
            ),
          }}
        />
        <Tabs.Screen
          name="setting"
          options={{
            title: "Settings",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                color={color}
                focused={focused}
                name="settings"
                title="Settings"
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};
const TabIcon = ({ title, color, name, focused }) => {
  return (
    <View className="items-center justify-center gap-2">
      <Ionicons size={28} name={name} color={color} />

      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs `}
        style={{ color }}
      >
        {title}
      </Text>
    </View>
  );
};

export default RootLayout;
