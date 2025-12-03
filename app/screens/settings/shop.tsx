import { Entypo, FontAwesome } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { ScrollView } from "react-native";

const Shop = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Boutique",
          headerTitleAlign: "left",
          headerLeft: () => <Entypo name="shop" size={20} color="black" />,
          headerBackVisible: true,
          headerRight: () => (
            <FontAwesome name="bars" size={20} color="black" />
          ),
        }}
      />
      <ScrollView></ScrollView>
    </>
  );
};

export default Shop;
