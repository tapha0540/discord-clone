import {
  Entypo,
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const Settings = () => {
  const [inputSearch, setInputSearch] = useState<string>("");
  const iconsSize = 25;
  const iconsColor = "black";
  const accountSettings = {
    title: "Paramètres du compte",
    icons: [
      <MaterialIcons
        key={0}
        name="electric-bolt"
        size={iconsSize}
        color={iconsColor}
        style={styles.optionsIcons}
      />,
      <FontAwesome
        key={1}
        name="user-circle"
        size={iconsSize}
        color={iconsColor}
        style={styles.optionsIcons}
      />,
      <MaterialIcons
        key={2}
        name="emoji-people"
        size={iconsSize}
        color={iconsColor}
        style={styles.optionsIcons}
      />,
      <Fontisto
        key={3}
        name="locked"
        size={iconsSize}
        color={iconsColor}
        style={styles.optionsIcons}
      />,
      <Ionicons
        key={4}
        name="people"
        size={iconsSize}
        color={iconsColor}
        style={styles.optionsIcons}
      />,
      <Foundation
        key={5}
        name="key"
        size={iconsSize}
        color={iconsColor}
        style={styles.optionsIcons}
      />,
      <MaterialIcons
        key={6}
        name="devices"
        size={iconsSize}
        color={iconsColor}
        style={styles.optionsIcons}
      />,
      <Ionicons
        key={7}
        name="extension-puzzle"
        size={iconsSize}
        color={iconsColor}
        style={styles.optionsIcons}
      />,
      <Fontisto
        key={8}
        name="film"
        size={iconsSize}
        color={iconsColor}
        style={styles.optionsIcons}
      />,
      <MaterialIcons
        key={9}
        name="qr-code-scanner"
        size={iconsSize}
        color={iconsColor}
        style={styles.optionsIcons}
      />,
    ],
    texts: [
      "Obtenir Nitro",
      "Compte",
      "Contenu Social",
      "Données et confidentialité",
      "centre familial",
      "Application autorissées",
      "Appareils",
      "Connexions",
      "Clips",
      "Scannez le code QR",
    ],
    routesOnPressed: [
      "/screens/settings/get_nitro",
      "/screens/settings/account",
      "/screens/settings/social_content",
      "/screens/settings/data_and_confidentiality",
      "/screens/settings/family_center",
      "/screens/settings/authorised_applications",
      "/screens/settings/devices",
      "/screens/settings/logins",
      "/screens/settings/clips",
      "/screens/settings/scan_qr",
    ],
  };
  return (
    <>
      <Stack.Screen
        options={{
          title: "settings",
          headerTitle: "Paramètres",
          headerTitleAlign: "center",
        }}
      />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.inputSearchContainer}>
            <FontAwesome
              name="search"
              style={styles.searchIcon}
              size={20}
              color="black"
            />
            <TextInput
              value={inputSearch}
              style={styles.inputSearch}
              onChangeText={setInputSearch}
              placeholder="Rechercher"
            />
          </View>
          <View style={styles.settingsOptions}>
            <SettingsOptionsList
              title={accountSettings.title}
              icons={accountSettings.icons}
              texts={accountSettings.texts}
              routesOnPressed={accountSettings.routesOnPressed}
            />
            <SettingsOptionsList
              title="Paramètres de facturation"
              texts={["Boutique", "Quêtes", "Boost de serveur", "Cadeau Nitro"]}
              icons={[
                <Entypo
                  key={0}
                  name="shop"
                  size={iconsSize}
                  color={iconsColor}
                  style={styles.optionsIcons}
                />,
                <FontAwesome6
                  key={1}
                  name="medal"
                  size={iconsSize}
                  color={iconsColor}
                  style={styles.optionsIcons}
                />,
                <Octicons
                  key={2}
                  name="diamond"
                  size={iconsSize}
                  color={iconsColor}
                  style={styles.optionsIcons}
                />,
                <FontAwesome5
                  key={2}
                  name="gift"
                  size={iconsSize}
                  color={iconsColor}
                  style={styles.optionsIcons}
                />,
              ]}
              routesOnPressed={[
                "/screens/settings/shop",
                "/screens/settings/quest",
                "/screens/settings/server_boost",
                "/screens/settings/nitro_gift",
              ]}
            />
            <SettingsOptionsList
              title="Paramètres de l'appli"
              texts={[
                "Voix",
                "Apparence",
                "Accessibilité",
                "Langue",
                "Discuter",
                "Navigateur web",
                "Notifications",
                "Icône de l'appli",
                "Avancés",
              ]}
              icons={[
                <FontAwesome
                  key={0}
                  name="microphone"
                  size={iconsSize}
                  color={iconsColor}
                  style={styles.optionsIcons}
                />,
                <FontAwesome6
                  key={1}
                  name="palette"
                  size={iconsSize}
                  color={iconsColor}
                  style={styles.optionsIcons}
                />,
                <Octicons
                  key={2}
                  name="accessibility-inset"
                  size={iconsSize}
                  color={iconsColor}
                  style={styles.optionsIcons}
                />,
                <Ionicons
                  key={3}
                  name="language"
                  size={iconsSize}
                  color={iconsColor}
                  style={styles.optionsIcons}
                />,
                <MaterialIcons
                  key={4}
                  name="panorama"
                  size={iconsSize}
                  color={iconsColor}
                  style={styles.optionsIcons}
                />,
                <FontAwesome5
                  key={5}
                  name="globe-africa"
                  size={iconsSize}
                  color={iconsColor}
                  style={styles.optionsIcons}
                />,
                <Ionicons
                  key={6}
                  name="notifications"
                  size={iconsSize}
                  color={iconsColor}
                  style={styles.optionsIcons}
                />,
                <MaterialIcons
                  key={6}
                  name="logo-dev"
                  size={iconsSize}
                  color={iconsColor}
                  style={styles.optionsIcons}
                />,
                <MaterialIcons
                  key={7}
                  name="settings"
                  size={iconsSize}
                  color={iconsColor}
                  style={styles.optionsIcons}
                />,
              ]}
              routesOnPressed={[
                "/screens/settings/voice",
                "/screens/settings/appearance",
                "/screens/settings/accessibility",
                "/screens/settings/language",
                "/screens/settings/discuss",
                "/screens/settings/browser",
                "/screens/settings/notifications",
                "/screens/settings/app_icon",
                "/screens/settings/advanced",
              ]}
            />
            <SettingsOptionsList
              title="Assistance"
              texts={[
                "Assistance",
                "Transférer les journaux de débugage à l'assistance de l'appli",
                "Remerciements",
              ]}
              icons={[
                <FontAwesome5
                  key={0}
                  name="question-circle"
                  size={iconsSize}
                  color={iconsColor}
                  style={styles.optionsIcons}
                />,
                <FontAwesome6
                  key={1}
                  name="circle-exclamation"
                  size={iconsSize}
                  color={iconsColor}
                  style={styles.optionsIcons}
                />,
                <FontAwesome6
                  key={1}
                  name="circle-exclamation"
                  size={iconsSize}
                  color={iconsColor}
                  style={styles.optionsIcons}
                />,
              ]}
              routesOnPressed={[]}
            />
            <SettingsOptionsList
              title="Nouveautés"
              texts={["Nouveautés"]}
              icons={[
                <FontAwesome6
                  key={1}
                  name="circle-exclamation"
                  size={iconsSize}
                  color={iconsColor}
                  style={styles.optionsIcons}
                />,
              ]}
              routesOnPressed={["/screens/settings/new_features"]}
            />
            <Pressable style={styles.logout}>
              <MaterialIcons name="logout" size={iconsSize} color="red" />
              <Text style={styles.logoutTxt}>Déconnexion</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const SettingsOptionsList = ({
  title,
  texts,
  icons,
  routesOnPressed,
}: {
  title: string;
  texts: string[];
  icons: React.ReactNode[];
  routesOnPressed?: any[];
}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.optionsListContainer}>
        {texts.map((text, index) => {
          return (
            <Pressable
              key={index}
              style={styles.optionContainer}
              onPress={
                routesOnPressed
                  ? () => {
                      router.push(routesOnPressed[index]);
                    }
                  : null
              }
            >
              {icons[index]}
              <View
                style={[
                  styles.optionContainerLeft,
                  // disable border bottom for the last element.
                  index !== texts.length - 1 && {
                    borderBottomColor: "grey",
                    borderBottomWidth: 1,
                  },
                ]}
              >
                <Text style={styles.optionTxt}>{text}</Text>
                <SimpleLineIcons name="arrow-right" size={15} color="black" />
              </View>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputSearchContainer: {
    flexDirection: "row",
    width: "90%",
    margin: 15,
    backgroundColor: "lightgrey",
    borderRadius: 15,
    justifyContent: "space-around",
  },
  searchIcon: {
    alignSelf: "center",
  },
  inputSearch: {
    width: "82.5%",
    fontWeight: "thin",
  },
  settingsOptions: {
    width: "90%",
  },
  title: {},
  optionsListContainer: {
    marginVertical: 20,
    rowGap: 20,
    backgroundColor: "lightgrey",
    padding: 10,
    borderRadius: 20,
  },
  optionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 2,
    overflow: "hidden",
  },
  optionContainerLeft: {
    flex: 1,
    flexDirection: "row",
    columnGap: 15,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8,
  },
  optionsIcons: {
    margin: 5,
  },
  optionTxt: {
    fontSize: 14,
    fontWeight: "thin",
    margin: 5,
  },
  logout: {
    flexDirection: "row",
    columnGap: 20,
    backgroundColor: "lightgrey",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    marginBottom: 25,
  },
  logoutTxt: {},
});
export default Settings;
