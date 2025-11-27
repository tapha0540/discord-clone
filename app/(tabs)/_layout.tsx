import { Tabs } from "expo-router";
import {
  FontAwesome,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        headerTitleStyle: { fontSize: 18, color: "black", fontWeight: "bold" },
        tabBarInactiveTintColor: "grey",
        tabBarActiveTintColor: "black",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Accueil",
          tabBarIcon: ({ color, size }) => {
            return <MaterialIcons name="home-work" size={size} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: "Notifications",
          headerShown: true,
          headerTitle: "Notifications",
          headerRight: ({ tintColor }) => {
            return (
              <View style={styles.headerRight}>
                <SimpleLineIcons name="options" size={20} color={tintColor} />
              </View>
            );
          },
          tabBarIcon: ({ color, size }) => {
            return <Octicons name="bell-fill" size={size} color={color} />;
          },
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Toi",
          tabBarIcon: ({ color, size }) => {
            return (
              <FontAwesome name="user-circle-o" size={size} color={color} />
            );
          },
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  headerRight: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    backgroundColor: "#ededed",
    marginRight: 10,
    borderRadius: 20,
  },
});

export default TabLayout;
