import { Image, View } from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

import React from "react";

export default function RestaurantCard({
  name,
  photos,
  adress,
  rating,
  isOpenNow,
}) {
  const rattingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <>
      <Card elevation={5} className="bg-white px-4 mb-6">
        <Card.Content>
          <Text variant="titleLarge" className="mb-4 font-lato  ">
            {name}
          </Text>
        </Card.Content>
        <Card.Cover
          key={name}
          className="bg-white px-4"
          resizeMode="stretch"
          source={{ uri: photos }}
        />
        <Card.Content className="pt-6 ">
          <Text className="font-lato">{name}</Text>
          <View className="flex-row justify-between">
            <View className="flex-row py-1">
              {rattingArray.map((r) => (
                <SvgXml key={r} xml={star} width={20} height={20} />
              ))}
            </View>
            {isOpenNow ? (
              <SvgXml xml={open} width={100} height={30} />
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
