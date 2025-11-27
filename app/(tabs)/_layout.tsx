import { Tabs } from "expo-router";
import { Text, View } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Accueil" }} />
      <Tabs.Screen
        name="notifications"
        options={{
          title: "Notifications",
          headerShown: true,
          headerTitle: "Notifications",
          tabBarIcon: ({
            focused,
            color,
            size,
          }: {
            focused: boolean;
            color: string;
            size: number;
          }) => {
            return (
              <View>
                <Text>ok</Text>
              </View>
            );
          },
        }}
      />
      <Tabs.Screen name="profile" options={{ title: "Toi" }} />
    </Tabs>
  );
}
