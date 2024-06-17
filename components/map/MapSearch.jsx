import { LocationContext } from "@/services/restaurants/mock/location/context";
import React, { useEffect, useState, useContext } from "react";
import { Searchbar } from "react-native-paper";

const MapSearch = ({ placeholder, value }) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <Searchbar
      className="absolute top-10 z-[999] mx-2"
      icon="map"
      placeholder="Search for a location"
      value={searchKeyword}
      onSubmitEditing={() => {
        search(searchKeyword);
      }}
      onChangeText={(e) => {
        setSearchKeyword(e);
      }}
      style={{ backgroundColor: "whitesmoke" }}
    />
  );
};

export default MapSearch;
