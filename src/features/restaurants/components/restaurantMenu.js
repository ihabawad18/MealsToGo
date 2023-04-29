import React from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export const RestaurantMenu=()=>{
    const [BreakFastexpanded, setBreakFastExpanded] = React.useState(false);
    const [Dinnerexpanded, setDinnerExpanded] = React.useState(false);
    const [Lunchexpanded, setLunchExpanded] = React.useState(false);
    const [Drinksexpanded, setDrinksExpanded] = React.useState(false);

  return (
            <ScrollView>
                <List.Accordion
                title="BreakFast"
                left={(props) => (
                    <List.Icon
                    {...props}
                    color={BreakFastexpanded ? "tomato" : "black"}
                    icon="folder"
                    />
                )}
                expanded={BreakFastexpanded}
                onPress={() => setBreakFastExpanded(!BreakFastexpanded)}
                >
                <List.Item title="First item" />
                <List.Item title="Second item" />
                </List.Accordion>
                <List.Accordion
                title="Lunch"
                left={(props) => (
                    <List.Icon
                    {...props}
                    color={Lunchexpanded ? "tomato" : "black"}
                    icon="folder"
                    />
                )}
                expanded={Lunchexpanded}
                onPress={() => setLunchExpanded(!Lunchexpanded)}
                >
                <List.Item title="First item" />
                <List.Item title="Second item" />
                </List.Accordion>
                <List.Accordion
                title="Dinner"
                left={(props) => (
                    <List.Icon
                    {...props}
                    color={Dinnerexpanded ? "tomato" : "black"}
                    icon="folder"
                    />
                )}
                expanded={Dinnerexpanded}
                onPress={() => setDinnerExpanded(!Dinnerexpanded)}
                >
                <List.Item title="First item" />
                <List.Item title="Second item" />
                </List.Accordion>
                <List.Accordion
                title="Drinks"
                left={(props) => (
                    <List.Icon
                    {...props}
                    color={Drinksexpanded ? "tomato" : "black"}
                    icon="folder"
                    />
                )}
                expanded={Drinksexpanded}
                onPress={() => setDrinksExpanded(!Drinksexpanded)}
                >
                <List.Item title="First item" />
                <List.Item title="Second item" />
                </List.Accordion>
            </ScrollView>
);

}