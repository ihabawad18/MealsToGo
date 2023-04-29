import React, { useContext } from "react";
import { StyleSheet, View, StatusBar, FlatList, Text } from "react-native";
import { RestaurantsInfoCard } from "../../restaurants/components/restaurant-infoCard";
import { FavoriteContext } from "../../../components/FavoriteContext";
import { ShowFavorite } from "../components/showFavorite";
import { NoFavorite } from "../components/NoFavorite";
export const FavoritesScreen = () => {
  const MemoizedRestaurantsInfoCard = React.memo(RestaurantsInfoCard);
  const Fav = useContext(FavoriteContext);
  const renderItem = ({ item }) => {
    return (
      <MemoizedRestaurantsInfoCard
        title={item.title}
        subtitle={item.subtitle}
        photo={item.photo}
        isOpen={item.isOpen}
        id={item.id}
      />
    );
  };
  return (
    <>
      {Fav.favorites.length > 0?
      (<View style={styles.container}>
        <ShowFavorite favor={Fav.favorites}/>
      </View>)
      :
      (
        <NoFavorite/> 
      )
      }
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
  },
  listStyle: {
    backgroundColor: "#f3f6f4",
  },
  list: {
    flex: 1,
    backgroundColor: "white",
  },
});
