import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{}}>
      <Tabs.Screen name="index" options={{ title: "Accueil" }} />
      <Tabs.Screen name="notifications" options={{ title: "Notifications" }} />
      <Tabs.Screen name="profile" options={{ title: "Toi" }} />
    </Tabs>
  );
}
