import React, { useEffect } from "react";
import { useState, useContext } from "react";
import { Button, Searchbar, List, ThemeProvider } from "react-native-paper";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  ScrollView,
  FlatList,
} 
from "react-native";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { NavigationContainer } from "@react-navigation/native";
import { Items } from "./src/features/restaurants/components/restaurant-itemsData";
import { ThemeContext } from "./src/components/AppContext";
import { DATA } from "./src/features/restaurants/components/restaurant-Data";
import { FavoriteContextProvider } from "./src/components/FavoriteContext";
import { UserAuth } from "./src/screens/userAuth";
import {UserNotAuth} from "./src/screens/userNotAuth";
import { useAuthentication } from "./useAuthentication";
const Presses = Array.from({ length: DATA.length }, () =>
  Array.from({ length: Items.length }, () => 0)
);

export default function App() {
  const [loading, setLoading] = useState(true)
  const [userr, setUserr] = useState(null)
  const [nbOfPresses, setNbOfPresses] = useState(Presses);
  const { user } = useAuthentication();  useEffect(()=>{
      
  })
  function incrementPresses(row, col) {
    const updatedNbOfPresses = [...nbOfPresses];
    updatedNbOfPresses[row][col] += 1;
    setNbOfPresses(updatedNbOfPresses);
  }
  function decrementPresses(row, col) {
    const updatedNbOfPresses = [...nbOfPresses];
    updatedNbOfPresses[row][col] -= 1;
    setNbOfPresses(updatedNbOfPresses);
  }


  useEffect(() => {}, [nbOfPresses]);
  return (
    <FavoriteContextProvider>
      <ThemeContext.Provider
        value={{
          nbOfPresses,
          incrementPresses,
          decrementPresses
        }}
      >
        <NavigationContainer>
            {user?
              (<UserAuth/>):(<UserNotAuth/>)
            }
        </NavigationContainer>
        <ExpoStatusBar style="auto" />
      </ThemeContext.Provider>
    </FavoriteContextProvider>
  );
}
const styles = StyleSheet.create({
  tabs: {
    margin: 5,
  },
});
