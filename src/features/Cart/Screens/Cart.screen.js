import React from "react";
import { View,Text,ImageBackground,StyleSheet, StatusBar } from "react-native";
import { CartInfo } from "../components/CartInfo";

export const CartScreen = () => {
    return (
        <View style={styles.container}>
            <CartInfo/>
        </View>
    );
  };
  
  const styles = StyleSheet.create({
    backgroundImage: {
      flex:1,
      resizeMode:"cover",
      marginTop:StatusBar.currentHeight,
    },
    container: {
      flex: 1,
    },
    textstyle:{
        color:"white",
    }
  });
