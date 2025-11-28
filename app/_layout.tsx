import { Slot, SplashScreen } from "expo-router";
import { useEffect, useState } from "react";
import { Image, StyleSheet, View } from "react-native";

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    setTimeout(async () => {
      setIsReady(true);
      await SplashScreen.hideAsync();
    }, 2500);
  }, []);
  if (!isReady) {
    return (
      <View style={styles.container}>
        <Image
          source={require("../assets/images/react-logo.png")}
          width={100}
          height={100}
        />
      </View>
    );
  }
  return <Slot />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

export default App;
