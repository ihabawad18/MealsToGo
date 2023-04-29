import React,{useState} from "react";
import {
    createStackNavigator,
    TransitionPresets,
  } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RestaurantScreen } from "../features/restaurants/screens/restaurants.screen";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { View ,Text} from "react-native";
import { CartScreen } from "../features/Cart/Screens/Cart.screen";
import { SettingsScreen } from "../features/Settings/screens/settings.screen";
const Stack = createStackNavigator();
const HomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>
  );
};
import { FavoritesScreen } from "../features/Favorites/screens/FavoritesScreen";
import { RestaurantDetailScreen } from "../features/restaurants/screens/restaurantDetail.screen";

const Tab = createBottomTabNavigator();
const RestaurantStackNavigation = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.FadeFromBottomAndroid,
      }}
    >
      <Stack.Screen name="Restaurants" component={RestaurantScreen} />
      <Stack.Screen
        name="RestaurantDetail2"
        component={RestaurantDetailScreen}
      />
    </Stack.Navigator>
  );
};
export const UserAuth=()=>{
    return(
        <Tab.Navigator
            screenOptions={({ route }) => ({
              headerShown: false,
              tabBarIcon: ({ color, size }) => {
                let iconName;
                size = 20;
                if (route.name === "Restaurant") {
                  iconName = "md-restaurant";
                } else if (route.name === "Cart") {
                  iconName = "cart";
                } else if (route.name === "Settings") {
                  iconName = "md-settings";
                } else if (route.name === "Favorites") {
                  iconName = "favorite";
                }
                const yes = route.name === "Favorites";
                return !yes ? (
                  <Ionicons name={iconName} size={size} color={color} />
                ) : (
                  <MaterialIcons name={iconName} size={size} color={color} />
                );
              },
              tabBarActiveTintColor: "tomato",
              tabBarInactiveTintColor: "gray",
              tabBarStyle: { height: 45, paddingBottom: 3, paddingTop: 5 },
            })}
          >
            <Tab.Screen
              name="Restaurant"
              component={RestaurantStackNavigation}
            />

            <Tab.Screen name="Cart" component={CartScreen} />
            <Tab.Screen name="Favorites" component={FavoritesScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
    )
}