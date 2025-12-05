import { Stack } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

const AccountSettings = () => {
  const [indexTab, setIndexTab] = useState(0);
  const tabs = [
    <SecurityTab key="SecurityTab" />,
    <StatusTab key="StatusTab" />,
  ];
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Compte",
        }}
      />
      <View style={styles.container}>
        <View style={styles.top}>
          <Pressable style={styles.topContainer} onPress={() => setIndexTab(0)}>
            <Text style={[styles.topTxt, { marginRight: 30 }]}>Sécurité</Text>
          </Pressable>
          <View style={styles.tab}></View>
          <Pressable style={styles.topContainer} onPress={() => setIndexTab(1)}>
            <Text style={[styles.topTxt, { marginLeft: 30 }]}>Statut</Text>
          </Pressable>
        </View>
        <ScrollView>{tabs[indexTab]}</ScrollView>
      </View>
    </>
  );
};

const SecurityTab = () => {
  return (
    <View>
      <Text>SecurityTab</Text>
    </View>
  );
};

const StatusTab = () => {
  return (
    <View>
      <Text>StatusTab</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    width: "80%",
    height: 65,
    flexDirection: "row",
    position: "fixed",
    margin: 15,
    padding: 20,
    justifyContent: "space-between",
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "lightgrey",
    borderRadius: 25,
  },
  topContainer: {
    width: "50%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 5,
  },
  topTxt: {
    padding: 2,
    zIndex: 10,
  },
  tab: {
    width: "50%",
    height: 55,
    marginHorizontal: 5,
    position: "absolute",
    backgroundColor: "white",
    alignSelf: "center",
    borderRadius: 20,
    marginLeft: "60%",
  },
});

export default AccountSettings;
