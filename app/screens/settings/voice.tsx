import { Stack } from "expo-router";
import { ScrollView } from "react-native";

const Voice = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Voix",
        }}
      />
      <ScrollView></ScrollView>
    </>
  );
};

export default Voice;
