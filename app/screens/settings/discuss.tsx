import { Stack } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const Discuss = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Discuter",
        }}
      />
      <ScrollView>
        <View style={styles.container}>
          <Text>afficher les images</Text>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Discuss;
