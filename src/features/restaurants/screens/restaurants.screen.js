import React from "react";
import { useState } from 'react';
import { Button,Searchbar } from 'react-native-paper';
import { StyleSheet, Text, View,StatusBar, SafeAreaView } from "react-native";
import { RestaurantsInfoCard } from "../components/restaurant-infoCard";

export const RestaurantScreen = ()=>{

    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = query => setSearchQuery(query);
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
          <RestaurantsInfoCard/>
      </View>
    </SafeAreaView>


    )

} 
const styles = StyleSheet.create({
    container: {
      marginTop:StatusBar.currentHeight,
      flex: 1,
      backgroundColor:"gray",
    },
    search:{
      padding : 10,
      //backgroundColor:"green",
    }
    ,
    searchbox:{
      borderRadius:0,
      backgroundColor:"white",
    },
    list:{
      flex:1,
      padding:15,
      backgroundColor:"blue",
    }
  });
  