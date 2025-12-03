import { HeaderTitle } from "@react-navigation/elements";
import { Stack } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const NewFeatures = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: () => (
            <View style={styles.headerTitle}>
              <Text>Nouveautés</Text>
              <Text style={{ fontSize: 10, fontWeight: "200" }}>
                25 septembre 2025
              </Text>
            </View>
          ),
        }}
      />
      <ScrollView></ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
  headerTitle: {
    justifyContent: "center",
  },
});

export default NewFeatures;
