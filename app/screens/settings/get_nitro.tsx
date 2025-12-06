import { Stack } from "expo-router";
import { ActivityIndicator, ScrollView, StyleSheet } from "react-native";

const GetNitro = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Obtenir Nitro",
        }}
      />
      <ScrollView style={styles.container}>
        <ActivityIndicator
          color="blue"
          style={styles.activityIndicator}
          size={50}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  activityIndicator: {
    position: "absolute",
    marginTop: "70%",
    alignSelf: "center",
  },
});

export default GetNitro;
