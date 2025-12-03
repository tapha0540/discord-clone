import { Stack } from "expo-router";
import { Text } from "react-native";

const Appearance = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Appearance",
        }}
      />
      <Text>Appearance</Text>
    </>
  );
};

export default Appearance;
