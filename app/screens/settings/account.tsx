import { Stack } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const AccountSettings = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Compte",
        }}
      />
      <View style={styles.container}>
        <View style={styles.top}>
          <Text>Sécurité</Text>
          <View style={styles.tab}></View>
          <Text>Statut</Text>
        </View>
        <ScrollView></ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    width: "80%",
    flexDirection: "row",
    position: "fixed",
    margin: 15,
    padding: 20,
    alignSelf: "center",
    backgroundColor: "lightgrey",
    borderRadius: 25,
  },
  topTxt: {
    justifyContent: "space-around",
    padding: 10,
  },
  tab: {
    height: "95%",
    position: "absolute",
    backgroundColor: "red",
  },
});

export default AccountSettings;
