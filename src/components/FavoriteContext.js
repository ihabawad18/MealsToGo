import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const FavoriteContext = React.createContext();

export const FavoriteContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const storeFavorites = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@favorites", jsonValue);
    } catch (e) {
      console.log(e);
    }
  };
  const LoadFavorites = async () => {
    try {
      const value = await AsyncStorage.getItem("@favorites");
      if (value !== null) {
        setFavorites(JSON.parse(value));
      }
    } catch (e) {
      console.log(e);
    }
  };

  const add = (restaurant) => {
    setFavorites([...favorites, restaurant]);
  };
  const remove = (restaurant) => {
    const newFavorites = favorites.filter((x) => {
      return x.id !== restaurant.id;
    });
    setFavorites(newFavorites);
  };
  useEffect(() => {
    LoadFavorites();
  }, []);
  useEffect(() => {
    storeFavorites(favorites);
  }, [favorites]);
  return (
    <FavoriteContext.Provider
      value={{
        add,
        remove,
        favorites,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
