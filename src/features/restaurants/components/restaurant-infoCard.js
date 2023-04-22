import React from "react";
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { StyleSheet} from "react-native";
import {
  useFonts as OswaldFonts,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import {
  useFonts as LatoFonts,
  Lato_400Regular,
} from '@expo-google-fonts/lato';
export const RestaurantsInfoCard = () => {
  const fonts={
    Oswald:"Oswald_400Regular",
    Lato:"Lato_400Regular",
  };
  const [OswaldLoaded] = OswaldFonts({
    Oswald_400Regular,
  });
  const [LatoLoaded] = LatoFonts({
    Oswald_400Regular,
  });
  return (
    <Card elevation={5} style={styles.card}>
    <Card.Cover key="title" source={{ uri: "https://picsum.photos/700" }} style={styles.cover} />
      <Text style={styles.title}>title</Text>
      
    </Card>
  );
};
const styles =StyleSheet.create({
    card:{
        backgroundColor:"white",
    },
    cover:{
        padding:20,
        backgroundColor:"white",
    }
    ,
    title:{
      fontFamily:
      'Oswald_400Regular',
        padding:16,
    }
})