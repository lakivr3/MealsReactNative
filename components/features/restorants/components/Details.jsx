import { Image, ScrollView, View } from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import { router } from "expo-router";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

import React from "react";
import { Link } from "expo-router";

export default function DetailsCard({
  name,
  photos,
  adress,
  rating,
  isOpenNow,
  id,
}) {
  const rattingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <>
      <Card className="bg-white   ">
        <Card.Content>
          <Text variant="titleLarge" className="mb-4 font-lato  ">
            {name}
          </Text>
        </Card.Content>
        <Card.Cover
          key={name}
          className="bg-white px-4"
          resizeMode="stretch"
          source={{ uri: photos[0] }}
        />
        <Card.Content className="pt-6 ">
          <Text className="font-lato">{name}</Text>
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
      </Card>
    </>
  );
}
