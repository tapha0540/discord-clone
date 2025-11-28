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
      profileImgSrc: require("@/assets/images/favicon.png"),
      firstName: "Maniang",
      lastName: "Fall",
      color: "red",
      online: false,
    },
    {
      profileImgSrc: require("@/assets/images/react-logo.png"),
      firstName: "Serigne Fadilou",
      lastName: "Fall",
      color: "grey",
      online: true,
    },
    {
      profileImgSrc: require("@/assets/images/favicon.png"),
      firstName: "Bara",
      lastName: "Ndiaye",
      color: "green",
      online: false,
    },
    {
      profileImgSrc: require("@/assets/images/react-logo.png"),
      firstName: "Fatou",
      lastName: "Diop",
      color: "orange",
      online: true,
    },
    {
      profileImgSrc: require("@/assets/images/favicon.png"),
      firstName: "Astou Gawane",
      lastName: "Gaye",
      color: "gold",
      online: false,
    },
  ];
  return (
    <>
      <View style={styles.top}>
        <Text style={styles.title}>Messages</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <View
            style={{
              borderRadius: 50,
              borderColor: "#ededed",
              borderWidth: 1,
            }}
          >
            <FontAwesome
              name="search"
              size={18}
              color="black"
              style={{ margin: 8 }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              columnGap: 10,
              borderRadius: 50,
              borderColor: "#ededed",
              borderWidth: 1,
              padding: 8,
            }}
          >
            <FontAwesome6 name="user-plus" size={20} color="black" />
            <Text>Ajouter des amis</Text>
          </View>
        </View>
      </View>
      <ScrollView
        horizontal={true}
        showsVerticalScrollIndicator={false}
        style={styles.middle}
      >
        {userContacts.map(({ color, online }, index: number) => {
          return (
            <View key={index} style={styles.contact}>
              <FontAwesome6 name="circle-user" size={50} color={color} />
              <OnlineStatusIndicator online={online} />
            </View>
          );
        })}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
  },
  top: {
    width: "90%",
    marginTop: 25,
    rowGap: 20,
  },
  middle: {
    marginTop: 20,
    marginBottom: 20,
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
});

export default PriavteChatTab;
