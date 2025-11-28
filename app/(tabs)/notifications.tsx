import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";

const Notifications = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Notifications récente</Text>
      <View style={styles.notifications}>
        {[
          {
            imgSrc: require("../../assets/images/react-logo.png"),
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
    color: "darkgrey",
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

export default Notifications;
