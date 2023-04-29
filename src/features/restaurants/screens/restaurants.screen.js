import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Searchbar, ActivityIndicator } from "react-native-paper";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  FlatList,
  Alert,
} from "react-native";
import { RestaurantsInfoCard } from "../components/restaurant-infoCard";
import { DATA } from "../components/restaurant-Data";
const MemoizedRestaurantsInfoCard = React.memo(RestaurantsInfoCard);

export const RestaurantScreen = (props) => {
  const [isLoading, setisLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredArray, setFilteredArray] = useState(DATA);
  const [errorMessage,setErrorMessage]=useState(null);
  
  useEffect(()=>{
    setErrorMessage(filteredArray.length>0?null:"Nothing Found! Please enter a valid search keyword");
  },[filteredArray])
  const handleSearch = (query) => {
      
        setisLoading(true);
        setSearchQuery(query);
        setTimeout(() => {
          const filtered = DATA.filter((item) =>
            item.subtitle.toLowerCase().includes(query.toLowerCase())
          );
          setFilteredArray(filtered);
          setisLoading(false);
        }, 700);
      
  };
  const onChangeSearch = (query) => {
      handleSearch(query);
  };
  const renderItem = ({ item }) => {
    return (
      <MemoizedRestaurantsInfoCard
        title={item.title}
        subtitle={item.subtitle}
        photo={item.photo}
        isOpen={item.isOpen}
        id={item.id}
      />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar
          style={styles.searchbox}
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
        <View style={styles.list}>
        {isLoading ? (
          <ActivityIndicator style={styles.loading} />
        ) : errorMessage===null ? (
          <FlatList
            style={styles.listStyle}
            data={filteredArray}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <View style>
            <Text style={styles.textstyle}>{errorMessage}</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
  },
  search: {
    padding: 5,
    paddingBottom: 0,
    backgroundColor: "#f3f6f4",
  },
  searchbox: {
    margin: 10,
    borderRadius: 15,
    backgroundColor: "white",
  },
  listStyle: {
    backgroundColor: "#f3f6f4",
  },
  list: {
    flex: 1,
    backgroundColor: "white",
  },
  loading: {
    position: "absolute",
    top: "50%",
    left: "50%",
    margin: -25,
  },
  textstyle:{
    color:"red",
    margin:20,
    fontWeight:500,
    fontSize:14,
  }
});
