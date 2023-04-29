import React, { useEffect,useState,useContext } from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { StatusBar,View,Text } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ThemeContext } from "../../../components/AppContext";
export const RestaurantItem = (props) => {
  //const [pressCount, setPressCount] = useState(0);
  const c = useContext(ThemeContext);
  return (
    <View key={props.item.id} style={styles.items}>
      <Text style={styles.itemtext}>
        {props.item.name} ({props.item.price}$)
      </Text>
      <TouchableOpacity
        style={styles.button2}
        onPress={() => {
              console.log(props.resId);
              c.incrementPresses(props.resId,props.item.id);
        }}
      >
        <Icon name="add" size={30} color="white" />
        {c.nbOfPresses[props.resId][props.item.id] > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{c.nbOfPresses[props.resId][props.item.id]}</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  list: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  items: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button2: {
    borderRadius: 50,
    width: 30,
    height: 30,
    alignItems: "center",
    backgroundColor: "tomato",
    marginRight: 70,
  },
  itemtext: {
    color: "tomato",
    fontSize: 15,
    alignSelf: "center",
    marginLeft: 70,
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
});
