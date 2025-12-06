import { FontAwesome, MaterialIcons, Octicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: "grey",
        tabBarActiveTintColor: "black",
        animation: "shift",
      }}
    >
      <Tabs.Screen
        name="home"
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

export default TabLayout;
