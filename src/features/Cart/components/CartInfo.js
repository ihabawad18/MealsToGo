import React, { useContext, useEffect, useState } from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { ThemeContext } from "../../../components/AppContext";
import { DATA } from "../../restaurants/components/restaurant-Data";
import { CartDetailInfo } from "./CartDetailInfo";
import { StatusBar } from "react-native";
export const CartInfo = () => {
  const { nbOfPresses } = useContext(ThemeContext);
  const [itemsintheCart, setItemsintheCart] = useState([]);
  const add = (item) => {
    setItemsintheCart(item);
  };
  const initialize = () => {
    let arr = [];
    for (let i = 0; i < nbOfPresses.length; i++) {
      let ok = false;
      for (let j = 1; j < nbOfPresses[0].length; j++) {
        ok = nbOfPresses[i][j] > 0 || ok;
      }
      if (ok == true) {
        arr.push(DATA[i]);
      }
    }
    setItemsintheCart(arr);
  };

  useEffect(() => {
    initialize();
    console.log(itemsintheCart);
  }, [nbOfPresses]);

  return itemsintheCart.length > 0 ? (
    <ScrollView style={styles.view}>
      <View style={StyleSheet.styleItems}>
        <CartDetailInfo items={itemsintheCart} nbofpresses={nbOfPresses} />
      </View>
    </ScrollView>
  ) : (
    <View style={[styles.view,{    alignItems:"center",
    justifyContent:"center",}]}>
      <Text style={styles.text}>
        Sorry! You dont have any items in your cart.
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  view: {
    flexGrow: 1,

    marginTop:StatusBar.currentHeight,
  },
  text: {
    fontWeight:"600",
    fontSize:15,
    color: "tomato",
  },
});
