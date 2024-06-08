import React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";
import RestaurantCard from "./RestaurantCard";

const RestorauntInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Food",
    icon,
    photos = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/800px-Good_Food_Display_-_NCI_Visuals_Online.jpg",

    adress = "Nikole Tesle 14",
    isOpenNow = false,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;
  return (
    <RestaurantCard
      key={name}
      name={name}
      photos={photos}
      adress={adress}
      rating={rating}
      isOpenNow={isOpenNow}
    />
  );
};

export default RestorauntInfoCard;
