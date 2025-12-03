import { Stack } from "expo-router";
import { View, StyleSheet, Text } from "react-native";

const Browser = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Navigateur web",
        }}
      />
      <View style={styles.container}>
        <Text>Navigateur web</Text>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text>Navigateur intégré à l&apos;appli</Text>
            <View></View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text>Navigateur externe</Text>
            <View></View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Browser;
