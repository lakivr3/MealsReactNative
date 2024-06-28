import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

import { Tabs } from "expo-router";

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

const TabsLayout = () => {
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

export default TabsLayout;
