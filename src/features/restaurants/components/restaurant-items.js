import React from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { StatusBar,View,Text } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useState } from "react";
import { RestaurantItem } from "./restaurant-item";
export const RestaurantItems=(props)=>{
    const ITEMS=props.data;
    return (
        <>
        {
            ITEMS.map((item)=>{
                return (
                    <RestaurantItem item={item} key={item.id} resId={props.resId} />
                )
            })
        }
        </>
    )

}
