import React, { useState } from "react";
import {
  List,
  Avatar,
  Button,
  Card,
  Text,
  TextInput,
} from "react-native-paper";
import {
  StyleSheet,
  StatusBar,
  View,
  Alert,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { RestaurantItems } from "./restaurant-items";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import StarRating from "react-native-star-rating-widget";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { Items } from "./restaurant-itemsData";
import { FavoriteIcon } from "../../Favorites/components/FavoriteIcon";
export const RestaurantDetailCard = (props) => {
  const [rating, setRating] = useState(0);
  const [BreakFastexpanded, setBreakFastExpanded] = React.useState(false);
  const [Dinnerexpanded, setDinnerExpanded] = React.useState(false);
  const [Lunchexpanded, setLunchExpanded] = React.useState(false);
  const [Drinksexpanded, setDrinksExpanded] = React.useState(false);

  const Arr = [
    {
      title: "BreakFast",
      value: BreakFastexpanded,
      setValue: (a) => {
        setBreakFastExpanded(a);
      },
    },
    {
      title: "Dinner",
      value: Dinnerexpanded,
      setValue: (a) => setDinnerExpanded(a),
    },
    {
      title: "Lunch",
      value: Lunchexpanded,
      setValue: (a) => setLunchExpanded(a),
    },
    {
      title: "Drinks",
      value: Drinksexpanded,
      setValue: (a) => setDrinksExpanded(a),
    },
  ];
  const ItemsN=Items;
  const renderItem = ({ item }) => {
    let icon="folder";
    if(item.title==="BreakFast"){
        icon="breakfast-dining"
    }
    else if(item.title==="Dinner"){
        icon="dinner-dining"
    }
    else if(item.title==="Lunch"){
      icon="lunch-dining"
    }
    else if(item.title==="Drinks"){
      icon="local-drink"
    }
    const passingOb=ItemsN.filter((it)=>{
      return it.type==item.title.toLowerCase();
    })
    const x = item.value;
    const col = x ? "tomato" : "black";
    return (
      <List.Accordion
        titleStyle={{ color: col }}
        title={item.title}
        left={()=><MaterialIcons name={icon} size={24} color={col} />}
        expanded={item.value}
        onPress={() => {
          item.setValue(!item.value);
        }}
      >
        
        <RestaurantItems data={passingOb} resId={props.id}/>
      </List.Accordion>
    );
  };
  const Closed = ({ isOpen }) => {
    if (!isOpen) {
      return (
        <Ionicons
          color="tomato"
          name="lock-closed"
          size={18}
          style={styles.icon}
        />
      );
    } else {
      return (
        <Ionicons
          color="tomato"
          name="lock-open"
          size={18}
          style={styles.icon}
        />
      );
    }
  };
  const navigation = useNavigation();
  const restaurant={
    id:props.id,
    photo:props.photo,
    isOpen:props.isOpen,
    title:props.title,
    subtitle:props.subtitle,
  }
  const url = props.photo;
  return (
    <View style={styles.list}>
      <View style={styles.Description}>
        <Card elevation={5} style={styles.card}>
          <FavoriteIcon restaurant={restaurant}/>
          <Card.Cover
            key={props.title}
            source={{ uri: url }}
            style={styles.cover}
          />

          <Text style={{ fontSize: 20, padding: 10, marginLeft: 12 }}>
            {props.title}
          </Text>
          <View style={styles.TT}>
            <StarRating
              style={styles.star}
              rating={rating}
              onChange={setRating}
              starSize={20}
              color="tomato"
            />
            <Closed isOpen={props.isOpen} />
          </View>
          <Text
            style={{
              padding: 10,
              marginLeft: 12,
              fontSize: 15,
              fontWeight: 600,
            }}
          >
            {props.subtitle}
          </Text>
          <TouchableOpacity
            onPress={() => 
            {
              console.log(props.id);
              navigation.goBack()
            }
              }
            style={styles.button}
            activeOpacity={0.7}
          >
            <Text style={styles.text}>Go Back</Text>
          </TouchableOpacity>
        </Card>
      </View>
      <FlatList
        contentContainerStyle={{ flexGrow: 1 }}
        style={styles.listStyle}
        data={Arr}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  list: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  items: {
    height:50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  card: {
    borderRadius: 0,
    backgroundColor: "white",
    //padding:10,
  },
  TT: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cover: {
    //paddingTop:16,
    //paddingLeft:16,
    //paddingRight:16,
    backgroundColor: "white",
  },
  icon: {
    marginRight: 20,
  },
  star: {
    paddingLeft: 10,
    marginLeft: 5,
  },
  button: {
    backgroundColor: "tomato",
    borderRadius: 5,
    padding: 5,
    margin: 10,
    marginBottom: 15,
    alignSelf: "center",
  },
  button2:{
    borderRadius: 50,
    width: 30,
    height: 30,
    alignItems:"center",
    backgroundColor: "tomato",

  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  itemtext:{
     color:"tomato",
     fontSize:15,
  },
});
