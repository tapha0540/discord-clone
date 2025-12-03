import { Stack } from "expo-router";
import { Text } from "react-native";

const ServerBoost = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Boost de serveur",
        }}
      />
      <Text>ServerBoost</Text>
    </>
  );
};

export default ServerBoost;
