import React, { useContext } from "react";
import { ThemeContext } from "../../../components/AppContext";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Card } from "react-native-paper";
import { CartDetailItems } from "./CartDetailItems";
import { Items } from "../../restaurants/components/restaurant-itemsData";
export const CartDetailInfo = (props) => {
  const { incrementPresses, nbOfPresses, decrementPresses } =
    useContext(ThemeContext);
  const arr = props.items;
  const PriceCompute = (i) => {
    let total = 0;
    for (let j = 0; j < Items.length+1; j++) {
      if (nbOfPresses[i][j] > 0 && Items[j-1]) {
        console.log(j);
        total += nbOfPresses[i][j] * Items[j-1].price;
      }
    }
    return total;
  };
  const determineItems=()=>{
    const obj=[];
    for(var i=0;i<Items.length;i++){
      const x={};
      Items[i];
    }
  }
  return arr.map((item) => {
    return (
      <View key={item.id} style={{ alignItems: "center" }}>
        
        <Card elevation={5} style={styles.card}>
          <Card.Cover
            key={item.title}
            source={{ uri: item.photo }}
            style={styles.cover}
          />
          <Text
            style={{
              fontSize: 18,
              padding: 10,
              marginLeft: 12,
              color: "white",
            }}
          >
            {item.title}
          </Text>
          <CartDetailItems
            resId={item.id}
            arr={nbOfPresses[item.id]}
            incrementPresses={incrementPresses}
            decrementPresses={decrementPresses}
            nbOfPresses={nbOfPresses}
          />
        </Card>
        <View style={styles.priceContainer}>
          <Text style={[styles.textstyle,{fontSize:13}]}>
            You have to pay {PriceCompute(item.id)}$ for {item.title}
          </Text>
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.buttonText}>Pay Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  });
};
const styles = StyleSheet.create({
  cover: {
    height: 150,
  },
  card: {
    backgroundColor: "tomato",
    margin: 30,
    width: 250,
    //padding:10,
  },
  container: {
    flex: 1,
  },
  textstyle: {
    color: "white",
    marginTop: 20,
    fontWeight: 700,
  },
  priceContainer: {
    width:260,
    alignItems: "center",
    backgroundColor: "tomato",
    borderRadius: 10,
    margin: 10,
    padding: 20,
  },
  submitButton: {
    backgroundColor: "white",
    borderRadius: 5,
    marginTop: 10,
    padding: 7,
  },
  buttonText: {
    color: "tomato",
    fontWeight: "bold",
    textAlign: "center",
  },
});
