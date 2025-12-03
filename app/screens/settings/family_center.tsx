import { Stack } from "expo-router";
import { ScrollView, Text, View } from "react-native";

const FamilyCenter = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Centre familial",
        }}
      />
      <ScrollView>
        <View>
          <Text>Pourquoi le centre familial</Text>
        </View>
      </ScrollView>
    </>
  );
};

export default FamilyCenter;
