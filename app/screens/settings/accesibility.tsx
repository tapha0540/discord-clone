import { Stack } from "expo-router";
import { Text } from "react-native";

const Accessibility = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Accessibility",
        }}
      />
      <Text>Accessibility</Text>
    </>
  );
};

export default Accessibility;
