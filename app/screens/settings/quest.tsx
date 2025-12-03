import { Stack } from "expo-router";
import { ScrollView, StyleSheet } from "react-native";

const Quest = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Quêtes",
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

export default Quest;
