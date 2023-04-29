import React from "react";
import { RestaurantsInfoCard } from "../components/restaurant-infoCard";
import {RestaurantDetailCard} from "../components/RestaurantDetailCard";
import { Text } from "react-native-paper";
export const RestaurantDetailScreen = ({ route}) => {
    const { title } = route.params;
    const { subtitle } = route.params;
    const { isOpen } = route.params;
    const { photo } = route.params;
    const { id } = route.params;

    return (
        <RestaurantDetailCard
            title={title}
            subtitle={subtitle}
            photo={photo}
            isOpen={isOpen}
            id={id}
        />
    )

};
