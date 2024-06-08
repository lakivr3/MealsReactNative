import * as React from "react";
import { Searchbar } from "react-native-paper";

const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={setSearchQuery}
      style={{ backgroundColor: "whitesmoke" }}
      value={searchQuery}
    />
  );
};

export default Search;
