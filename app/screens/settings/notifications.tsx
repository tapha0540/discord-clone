import { Stack } from "expo-router";
import { ScrollView, StyleSheet } from "react-native";

const Notifications = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Notifications",
        }}
      />
      <ScrollView></ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Notifications;
