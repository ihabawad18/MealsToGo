import React,{useContext} from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { FavoriteContext } from "../../../components/FavoriteContext";
import { View,StyleSheet,TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
export const FavoriteIcon=({restaurant})=>{
    const {favorites,add,remove}=useContext(FavoriteContext);
    const isFavorite = favorites.some((r) => r.id === restaurant.id);

    return (
        <TouchableOpacity style={styles.icon} onPress={()=>isFavorite?remove(restaurant):add(restaurant)}>
            <MaterialIcons size={30} color={isFavorite?"tomato":"white"} name={isFavorite ? "favorite" : "favorite-outline"}/>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    icon:{
        position:"absolute",
        top:10,
        right:10,
        zIndex:9,

    }
  });
  