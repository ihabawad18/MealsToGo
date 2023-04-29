import React from "react";
import { View,Text, StyleSheet, StatusBar } from "react-native";
import  Ionicons from "react-native-vector-icons/Ionicons";
export const NoFavorite = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ops, you have no favorites</Text>
      <Ionicons name="md-sad-outline" size={25} color={"tomato"}/>
    </View>
  );
};
const styles=StyleSheet.create({
    container:{
        marginTop:StatusBar.currentHeight,
        flexGrow:1,
        alignItems:"center",
        justifyContent:"center",
    },
    text:{
        color:"tomato",
        fontSize:20,
        fontWeight:800,
        padding:5,
    }
});
