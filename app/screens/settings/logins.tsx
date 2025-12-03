import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const Logins = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Connexions",
          headerRight: () => <Text>Ajouter</Text>,
        }}
      />
      <View style={styles.container}></View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Logins;
