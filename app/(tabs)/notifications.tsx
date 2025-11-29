import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import notifications from "../../assets/data/notifications.json";

interface NotificationType {
  imgSrc: string;
  title: string;
  date: number;
}

const images: Map<string, string> = new Map([
  ["react-logo", require("../../assets/images/react-logo.png")],
  ["partial-react-logo", require("../../assets/images/partial-react-logo.png")],
]);

const Notification = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Notifications récente</Text>
      <View style={styles.notifications}>
        {notifications.map((notification: NotificationType, index: number) => {
          return (
            <View key={index} style={styles.notificationContainer}>
              <Image
                source={
                  images.get(notification.imgSrc) ?? images.get("react-logo")
                }
                style={styles.notificationImg}
              />
              <Text style={styles.notificationTitle}>{notification.title}</Text>
              <Text style={styles.notificationDate}>{notification.date} J</Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  title: {
    margin: 20,
    color: "black",
    fontSize: 16,
    fontWeight: "normal",
  },
  notifications: {
    flexDirection: "column",
    rowGap: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },
  notificationContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  notificationTitle: {
    color: "grey",
    textAlign: "center",
    width: "60%",
    fontWeight: "normal",
  },
  notificationImg: {
    width: 50,
    height: 50,
    borderColor: "#ededed",
    borderWidth: 1,
    borderRadius: 50,
  },
  notificationDate: {
    color: "grey",
    textAlign: "right",
    fontWeight: "normal",
  },
});

export default Notification;
