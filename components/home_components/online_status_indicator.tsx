import { StyleSheet, View } from "react-native";

const OnlineStatusIndicator = ({ online }: { online: boolean }) => {
  return (
    <View
      style={{
        ...styles.onlineStatusIndicator,
        backgroundColor: online ? "green" : "white",
        borderColor: online ? "green" : "grey",
      }}
    ></View>
  );
};

const styles = StyleSheet.create({
  onlineStatusIndicator: {
    position: "absolute",
    bottom: "20%",
    right: "20%",
    width: 12,
    height: 12,
    borderRadius: 60,
    borderWidth: 4,
    outlineColor: "white",
    outlineWidth: 2.5,
  },
});

export default OnlineStatusIndicator;
