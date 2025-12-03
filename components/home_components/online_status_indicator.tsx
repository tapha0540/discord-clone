import { StyleSheet, View } from "react-native";

const OnlineStatusIndicator = ({
  online,
  right,
  bottom,
}: {
  online: boolean;
  right: number;
  bottom: number;
}) => {
  return (
    <View
      style={[
        styles.onlineStatusIndicator,
        {
          backgroundColor: online ? "green" : "white",
          borderColor: online ? "green" : "grey",
          right: `${right}%`,
          bottom: `${bottom}%`,
        },
      ]}
    ></View>
  );
};

const styles = StyleSheet.create({
  onlineStatusIndicator: {
    width: "23%",
    height: "23%",
    position: "absolute",
    borderRadius: 60,
    borderWidth: 4,
    outlineColor: "white",
    outlineWidth: 2.5,
  },
});

export default OnlineStatusIndicator;
