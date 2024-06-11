import { LocationContext } from "@/services/restaurants/mock/location/context";
import React, { useEffect, useState, useContext } from "react";
import { Searchbar } from "react-native-paper";

const Search = ({ placeholder, value }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  return (
    <Searchbar
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
