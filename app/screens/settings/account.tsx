import SettingsOptionsList from "@/components/ui/SettingsOptionsList";
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
          <View style={styles.tabBar}>
            <Pressable
              style={styles.tabControllers}
              onPress={() => setIndexTab(0)}
            >
              <Text style={[styles.topTxt, { marginRight: 30 }]}>Sécurité</Text>
            </Pressable>
            <View style={[styles.tab, indexTab === 1 && { right: 0 }]}></View>
            <Pressable
              style={styles.tabControllers}
              onPress={() => setIndexTab(1)}
            >
              <Text style={[styles.topTxt, { marginLeft: 30 }]}>Statut</Text>
            </Pressable>
          </View>
        </View>
        <ScrollView>{tabs[indexTab]}</ScrollView>
      </View>
    </>
  );
};

const SecurityTab = () => {
  return (
    <View style={styles.tabsContonainers}>
      <SettingsOptionsList
        title="Information du compte"
        texts={["Nom d'utilisateur", "Nom d'affichage", "E-mail", "Téléphone"]}
        details={[
          "moustaphafall_0540",
          "Moustapha FALL",
          "fmoustapha095@gmail.com",
        ]}
      />
      <SettingsOptionsList
        title="Comment tu te connectes à ton compte"
        texts={[
          "Mot de passe",
          "Clés de sécurité",
          "Activer l'application d'authentification",
        ]}
        details={[null, "Ajouté: 0"]}
      />
      <SettingsOptionsList
        title="Gestion du compte"
        texts={["Désactiver le compte", "Supprimer le compte"]}
      />
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
    width: "100%",
    position: "fixed",
  },
  tabBar: {
    width: "85%",
    height: 50,
    flexDirection: "row",
    margin: 15,
    paddingHorizontal: 10,
    paddingVertical: 2,
    position: "fixed",
    justifyContent: "space-between",
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "lightgrey",
    borderRadius: 25,
  },
  tabControllers: {
    width: "50%",
    height: 40,
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
    height: 42,
    marginHorizontal: 5,
    position: "absolute",
    backgroundColor: "white",
    alignSelf: "center",
    borderRadius: 20,
  },
  tabsContonainers: {
    width: "95%",
    marginLeft: "2.5%",
    paddingHorizontal: 10,
  },
});

export default AccountSettings;
