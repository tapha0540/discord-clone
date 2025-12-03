import { Stack } from "expo-router";
import { ScrollView, StyleSheet } from "react-native";

const Language = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Langue",
        }}
      />
      <ScrollView style={styles.container}></ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Language;
