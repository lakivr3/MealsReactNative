import { View, Text } from "react-native";
import MapView, { MapMarker, Callout } from "react-native-maps";
import React, { useContext, useEffect, useState } from "react";
import { LocationContext } from "@/services/restaurants/mock/location/context";
import { RestaurantsContext } from "@/services/restaurants/context";
import MapSearch from "@/components/map/MapSearch";
import MapCallout from "@/components/map/MapCallout";
import { useRouter } from "expo-router";

const Map = () => {
  const { location } = useContext(LocationContext);
  const { viewport, lat, lng } = location;
  const router = useRouter();

  const { restaurants } = useContext(RestaurantsContext);

  const [latDelta, setLatDelta] = useState(0);

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);
  return (
    <View className="relative">
      <MapSearch />
      <MapView
        className="w-[100%] h-[100%]"
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.03,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <MapMarker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              <Callout
                onPress={() =>
                  router.push(`/restaurants/${restaurant.placeId}`)
                }
              >
                <MapCallout restaurant={restaurant} />
              </Callout>
            </MapMarker>
          );
        })}
      </MapView>
    </View>
  );
};

export default Map;
