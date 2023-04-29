import React, { useState,useContext } from "react";
import { Avatar, Button, List,Card, Text, TextInput } from "react-native-paper";
import { StyleSheet, View, Alert, TouchableOpacity, ScrollView } from "react-native";
import StarRating from "react-native-star-rating-widget";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from "../../../components/AppContext";
import { FavoriteIcon } from "../../Favorites/components/FavoriteIcon";
export const RestaurantsInfoCard = (props) => {
  const [rating, setRating] = useState(0);
  const setID=(id)=>{
    setId(id);
  }
  const Closed = ({ isOpen }) => {
    if (!isOpen) {
      return <Ionicons color="tomato" name="lock-closed" size={18} style={styles.icon} />;
    } else {
      return <Ionicons color="tomato" name="lock-open" size={18} style={styles.icon} />;
    }
  };
  const navigation = useNavigation();
  const passingObj={
    photo:`${props.photo}`,
    isOpen:`${props.isOpen}`,
    title:`${props.title}`,
    subtitle:`${props.subtitle}`,
    id:props.id,
    }

  
  const url = props.photo;
  return (
    <Card elevation={5} style={styles.card}>
      <FavoriteIcon restaurant={passingObj}/>
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
        style={{ padding: 10, marginLeft: 12, fontSize: 15, fontWeight: 600 }}
      >
        {props.subtitle}
      </Text>
      <TouchableOpacity
        onPress={()=>
        {
          navigation.navigate('RestaurantDetail2',passingObj)
        }}
        style={styles.button}
        activeOpacity={0.7}
      >
        <Text style={styles.text}>More Info</Text>
      </TouchableOpacity>
      
    </Card>
  );
};
const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    margin: 20,
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
    padding:5,
    margin:10,
    marginBottom:15,
    alignSelf: "center",
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});
