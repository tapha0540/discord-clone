import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";

const Notifications = () => {
  return (
    <ScrollView>
      <Text style={styles.title}>Notifications récente</Text>
      <View style={styles.notifications}>
        {[
          {
            imgSrc: require("@/assets/images/react-logo.png"),
            title: "Tu as reçu de nouveaux messages dans w3schools.",
            date: 9,
          },
          {
            imgSrc: require("@/assets/images/favicon.png"),
            title: "Tu as reçu de nouveaux messages dans w3schools.",
            date: 24,
          },
          {
            imgSrc: require("@/assets/images/react-logo.png"),
            title: "Tu as reçu de nouveaux messages dans w3schools.",
            date: 26,
          },
          {
            imgSrc: require("@/assets/images/favicon.png"),
            title: "Tu as reçu de nouveaux messages dans w3schools.",
            date: 28,
          },
          {
            imgSrc: require("@/assets/images/react-logo.png"),
            title: "Tu as reçu de nouveaux messages dans w3schools.",
            date: 29,
          },
          {
            imgSrc: require("@/assets/images/favicon.png"),
            title: "Tu as reçu de nouveaux messages dans w3schools.",
            date: 30,
          },
          {
            imgSrc: require("@/assets/images/react-logo.png"),
            title: "Tu as reçu de nouveaux messages dans w3schools.",
            date: 31,
          },
        ].map((notification, index: number) => {
          return (
            <View key={index} style={styles.notificationContainer}>
              <Image
                source={notification.imgSrc}
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
    color: "grey",
  },
  title: {
    margin: 20,
    color: "grey",
    fontSize: 16,
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
  },
  notificationImg: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderColor: "grey",
    borderWidth: 1,
  },
  notificationDate: {
    color: "grey",
    textAlign: "right",
  },
});

export default Notifications;
