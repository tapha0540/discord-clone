import { router } from "expo-router";
import { Image, View } from "react-native";

export default function Index() {
  setTimeout(() => router.push('/(tabs)'), 3000);  
    return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={require("@/assets/images/react-logo.png")}
        width={500}
        height={500}
      />
    </View>
  );
}
