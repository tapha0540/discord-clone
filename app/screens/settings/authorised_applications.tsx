import { Stack } from "expo-router";
import { Text } from "react-native";

const AuthorisedApplications = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Applications autorisées",
        }}
      />
      <Text>AuthorisedApplications</Text>
    </>
  );
};

export default AuthorisedApplications;
