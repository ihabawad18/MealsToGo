import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { StatusBar } from "react-native";
import { ScrollView,StyleSheet,Text,Image,View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export const GenerateFavorites=({favor})=>{
    const navigation = useNavigation();
    return (favor.map(
        (item)=>{
        const ph=item.photo;
        return (

            <View key={item.id} style={styles.items}>
                <TouchableOpacity activeOpacity={0.7} onPress={
                    ()=>{
                       navigation.navigate("RestaurantDetail2",item) 
                    }
                }>
                      <Image source={{ uri: ph }} style={{ width: 150, height: 150,borderRadius:10 }}/>

                </TouchableOpacity>
                    <Text style={styles.text}>{item.title}</Text>

                </View>
        )
    }))
  }
export const ShowFavorite = ({ favor }) => {
  
  return(
    <>
        <View style ={styles.view3}>
            <Text style={{fontSize:20,fontWeight:700,color:"tomato"}}>Your Favorites are here </Text>
            <MaterialIcons name="favorite" size={25} color={"tomato"}/>
        </View>
        <ScrollView horizontal style={styles.view} showsHorizontalScrollIndicator={false} >
            <GenerateFavorites favor={favor}/>
        </ScrollView>
        <View style={styles.view4}>
            <MaterialIcons name="arrow-back" size={60} color={"tomato"}/>
            <Text style={{color:"tomato",fontWeight:700,fontSize:20}}>Scroll</Text>
            <MaterialIcons name="arrow-forward" size={60} color={"tomato"}/>    
        </View>
        <View style={styles.view2}>

               <Image style={{ width: "100%",flex:1 }} source={{uri:"https://appinventiv.com/wp-content/uploads/sites/1/2016/10/Must-Have-Features-for-Your-Favourite-Restaurant-App.png"}}/>
        </View>

    </>
  )
};
const styles=StyleSheet.create({
    text:{
        color:"black",
        fontSize:20,
        marginTop:10,

    },
    text2:{
        color:"white",
        fontWeight:600,
        fontSize:30,
        width:150,
    },
    view4:{
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"row",
        paddingBottom:20,
    },
    view3:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:10,
        marginLeft:10,
        padding:10,
    },
    view2:{
        flexGrow:1,
        //backgroundColor:"tomato",
        alignItems:"center",
    },
    view:{
        //backgroundColor:"gray",
        flexGrow:0.05,
        //marginTop:100,
        //backgroundColor:"tomato"
    },items:{
        margin:20,
        alignItems:"center",
    },
});