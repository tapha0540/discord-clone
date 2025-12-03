import { Stack } from "expo-router";
import { Text } from "react-native";

const AdvancedSettings = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Avancés",
        }}
      />
      <Text>AdvancedSettings</Text>
    </>
  );
};

export default AdvancedSettings;
