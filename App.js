import { useState } from 'react';
import { Button,Searchbar } from 'react-native-paper';
import { StyleSheet, Text, View,StatusBar, SafeAreaView } from "react-native";
import { RestaurantScreen } from './src/features/restaurants/screens/restaurants.screen';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';

import AppLoading from 'expo-app-loading';

export default function App() {

  if(!OswaldLoaded || !LatoLoaded){
    return <AppLoading />;
  }
  else{
    return (
      <>
      <RestaurantScreen font={fonts}/>
      <ExpoStatusBar style='auto'/>
      </>
    );
  }

}

