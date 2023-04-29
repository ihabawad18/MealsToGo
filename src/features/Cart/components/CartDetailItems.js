import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Items } from "../../restaurants/components/restaurant-itemsData";
export const CartDetailItems = (props) => {
  
  return (
    <>
      {props.arr.map((item, i) => {
        if (item > 0 && Items[i-1]) {
          return (
            <View key={Items[i - 1].id} style={styles.view}>
              <Text style={styles.text}>
                {Items[i - 1].name } | {Items[i - 1].price}$
              </Text>
              <View style={styles.icons}>
                <TouchableOpacity
                  style={styles.button2}
                  onPress={() => {
                    props.incrementPresses(props.resId, i);
                  }}
                >
                  <Icon name="add" size={30} color="tomato" />
                  {props.nbOfPresses[props.resId][i] > 0 && (
                    <View style={styles.badge}>
                      <Text style={styles.badgeText}>
                        {props.nbOfPresses[props.resId][i]}
                      </Text>
                    </View>
                  )}
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    props.decrementPresses(props.resId, i);
                  }}
                >
                  <Icon name="remove" size={30} color="tomato" />
                </TouchableOpacity>
              </View>
            </View>
          );
        }
      })}
      </>

  );


};
const styles = StyleSheet.create({
  text: {
    color: "white",
    padding:10,
  },
  icons: {
    flexDirection: "row",
    flexGrow:1,
    justifyContent: "flex-end",
    alignItems:"flex-end",
  },
  view: {
    flexDirection: "row",
    flexGrow:1,
    alignItems:"center",
    padding: 10,
  },
  button2: {
    borderRadius: 50,
    width: 30,
    height: 30,
    alignItems: "center",
    backgroundColor: "white",
  },
  badge: {
    position: "absolute",
    top: -8,
    right: -8,
    backgroundColor: "red",
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
  button: {
    borderRadius: 50,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    marginHorizontal: 10,
  },
});
