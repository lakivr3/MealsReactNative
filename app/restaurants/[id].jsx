import React, { useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import { RestaurantsContext } from "@/services/restaurants/context";
import DetailsCard from "@/components/restourants/Details";
import { List } from "react-native-paper";
import { ScrollView } from "react-native";

const Details = () => {
  const { id } = useLocalSearchParams();
  const { restaurants } = useContext(RestaurantsContext);

  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const restaurant = restaurants.find((e) => e.placeId === id);
  return (
    <SafeAreaView>
      <ScrollView>
        <DetailsCard restaurant={restaurant} />
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="Eggs Benedict" />
          <List.Item title="Classic Breakfast" />
        </List.Accordion>

        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="pizza" />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;
