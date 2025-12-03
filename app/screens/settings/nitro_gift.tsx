import { Stack } from "expo-router";
import { ScrollView } from "react-native";

const NitroGift = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Cadeau Nitro",
        }}
      />
      <ScrollView></ScrollView>
    </>
  );
};
export default NitroGift;
