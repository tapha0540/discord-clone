import { Stack } from "expo-router";
import { Text } from "react-native";

const AppIcon = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Icône de l'appli",
        }}
      />
      <Text>appIcon</Text>
    </>
  );
};

export default AppIcon;
