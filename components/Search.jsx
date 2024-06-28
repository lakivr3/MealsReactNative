import { LocationContext } from "@/services/restaurants/mock/location/context";
import React, { useEffect, useState, useContext } from "react";
import { Searchbar } from "react-native-paper";

const Search = ({ isFavoritesToggle, onFavoritesToggle }) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <Searchbar
      icon={isFavoritesToggle ? "heart" : "heart-outline"}
      onIconPress={onFavoritesToggle}
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

export default Search;
