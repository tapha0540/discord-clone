import { Stack } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const Devices = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Données et confidentialité",
        }}
      />
      <ScrollView>
        <View style={styles.container}>
          <Text>
            Voici tous les appareils connectés à ton compte Discord. Tu peux
            déconnecter tous les appareils en une fois ou séparémment. {"\n"}
            Si tu remarque une activité inhabituelle sur ton compte, change le
            mot de passe de ton compte Discord immédiatement.
          </Text>
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

export default Devices;
