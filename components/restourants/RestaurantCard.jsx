import { Image, TouchableOpacity, View } from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import { router } from "expo-router";
import star from "../../assets/star";
import open from "../../assets/open";

import React from "react";
import { Link } from "expo-router";
import Favorite from "../favorites/Favorite";

export default function RestaurantCard({ restaurant }) {
  const {
    name,
    photos,
    vicinity: adress,
    rating,
    isOpenNow,
    placeId: id,
  } = restaurant;
  const rattingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <>
      <Card elevation={5} className="bg-white px-4 mb-6 py-8 ">
        <Favorite restaurant={restaurant} />
        <TouchableOpacity onPress={() => router.push(`restaurants/${id}`)}>
          <Card.Cover
            key={name}
            className="bg-white px-4"
            resizeMode="stretch"
            source={{ uri: photos[0] }}
          />
          <Card.Content className="pt-6 ">
            <Text className="font-lato text-lg">{name}</Text>
            <View className="flex-row justify-between mt-1">
              <View className="flex-row py-1">
                {rattingArray.map((r) => (
                  <SvgXml key={r} xml={star} width={20} height={20} />
                ))}
              </View>
              {isOpenNow ? (
                <SvgXml xml={open} width={30} height={30} />
              ) : (
                <Image
                  source={{
                    uri: "https://www.pngall.com/wp-content/uploads/4/Closed-Sign.png",
                  }}
                  height={30}
                  width={80}
                />
              )}
            </View>

            <Text className="font-oswald">{adress}</Text>
          </Card.Content>
        </TouchableOpacity>
      </Card>
    </>
  );
}
