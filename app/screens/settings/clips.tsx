import { Stack } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const Clips = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Clips",
        }}
      />
      <ScrollView>
        <View style={styles.container}>
          <View>
            <View>
              <Text>
                Autorisez l&apos;enregistrement de ma voix dans les clips
              </Text>
              <Text>
                En activant ce paramètre, ta voix peut être incluse lorsque
                quelqu&apos;un dans le même salon vocal utilise des clip.
              </Text>
            </View>
          </View>
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

export default Clips;
