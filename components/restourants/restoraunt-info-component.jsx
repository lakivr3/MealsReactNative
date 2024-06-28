import React from "react";
import RestaurantCard from "./RestaurantCard";

const RestorauntInfoCard = ({ restaurant = {} }) => {
  return <RestaurantCard restaurant={restaurant} />;
};

export default RestorauntInfoCard;
