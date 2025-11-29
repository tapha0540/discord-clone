import { ScrollView, StyleSheet, Text, View } from "react-native";
import { UserContact } from "./interfaces";
import { FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import OnlineStatusIndicator from "./online_status_indicator";

const PriavteChatTab = () => {
  const userContacts: UserContact[] = [
    {
      profileImgSrc: require("@/assets/images/react-logo.png"),
      firstName: "Ahmadou",
      lastName: "Fall",
      color: "black",
      online: true,
    },
    {
      profileImgSrc: require("../../assets/images/favicon.png"),
      firstName: "Maniang",
      lastName: "Fall",
      color: "red",
      online: false,
    },
    {
      profileImgSrc: require("../../assets/images/react-logo.png"),
      firstName: "Serigne Fadilou",
      lastName: "Fall",
      color: "grey",
      online: true,
    },
    {
      profileImgSrc: require("../../assets/images/favicon.png"),
      firstName: "Bara",
      lastName: "Ndiaye",
      color: "green",
      online: false,
    },
    {
      profileImgSrc: require("../../assets/images/react-logo.png"),
      firstName: "Fatou",
      lastName: "Diop",
      color: "orange",
      online: true,
    },
    {
      profileImgSrc: require("../../assets/images/favicon.png"),
      firstName: "Astou Gawane",
      lastName: "Gaye",
      color: "gold",
      online: false,
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>Messages</Text>
        <View style={styles.iconsContainer}>
          <View style={styles.iconSearchContainer}>
            <FontAwesome
              name="search"
              size={18}
              color="black"
              style={styles.iconSearch}
            />
          </View>
          <View style={styles.addFriendsBtn}>
            <FontAwesome6 name="user-plus" size={20} color="grey" />
            <Text>Ajouter des amis</Text>
          </View>
        </View>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.middle}
      >
        {userContacts.map(({ color, online }, index: number) => {
          return (
            <View key={index} style={styles.contact}>
              <FontAwesome6 name="circle-user" size={50} color={color} />
              <OnlineStatusIndicator online={online} bottom={20} right={20} />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginLeft: "4.5%",
  },
  title: {
    fontSize: 18,
    marginLeft: 12,
  },
  top: {
    width: "90%",
    marginTop: 25,
    rowGap: 20,
  },
  middle: {
    marginTop: 21,
    marginBottom: 21,
  },
  iconsContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
  },
  contact: {
    position: "relative",
    width: 75,
    height: 75,
    borderWidth: 1,
    borderColor: "#ededed",
    borderRadius: 15,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
    marginRight: 5,
  },
  iconSearchContainer: {
    borderRadius: "50%",
    borderColor: "#ededed",
    borderWidth: 1,
    paddingHorizontal: 1,
  },
  addFriendsBtn: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    columnGap: 10,
    borderRadius: 50,
    borderColor: "#ededed",
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  iconSearch: { margin: 8 },
});

export default PriavteChatTab;
