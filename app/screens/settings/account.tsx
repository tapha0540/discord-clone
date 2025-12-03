import { Stack } from "expo-router";
import { Text } from "react-native";

const AccountSettings = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Compte",
        }}
      />
      <Text>Account settings</Text>
    </>
  );
};

export default AccountSettings;
