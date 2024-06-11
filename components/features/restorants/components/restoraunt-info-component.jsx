import React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";
import RestaurantCard from "./RestaurantCard";

const RestorauntInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Food",
    icon,
    photos,
    adress = "Nikole Tesle 14",
    isOpenNow = false,
    rating = 4,
    vicinity,
    isClosedTemporarily = false,
  } = restaurant;
  return (
    <RestaurantCard
      key={name}
      name={name}
      photos={photos}
      adress={vicinity}
      rating={rating}
      isOpenNow={isOpenNow}
    />
  );
};

export default RestorauntInfoCard;
