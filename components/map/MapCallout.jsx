import { View, Text, Platform } from "react-native";
import React from "react";
import { Svg, Image } from "react-native-svg";
import { Card } from "react-native-paper";

const MapCallout = ({ restaurant }) => {
  const { name, photos } = restaurant;
  return (
    <View className="w-[150px] h-[200px] justify-center items-center">
      <Svg width={150} height={140}>
        <Image
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
          href={{ uri: photos[0] }}
        />
      </Svg>
      <Text className="text-center mt-1 font-oswald">{name}</Text>
    </View>
  );
};

export default MapCallout;
