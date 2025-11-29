import OnlineStatusIndicator from "../../components/home_components/online_status_indicator";
import {
  Entypo,
  FontAwesome,
  FontAwesome6,
  Fontisto,
  MaterialIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import {
  Dimensions,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const Profile = () => {
  return (
    <ScrollView style={styles.container}>
      <Top />
      <Middle />
      <Bottom />
    </ScrollView>
  );
};

const Top = () => {
  const randomTexts: string[] = [
    "Ajouter un statut",
    "Si ta vie avait un générique...",
    "Dans quel monde de fiction aimerais-tu vivre ?",
    "Quel est le talent le plus inutile que tu possèdes ?",
    "Qu'est-ce que tu as regardé récemment",
    "À quoi tu penses, en ce moment ?",
    "Ton anime préféré du moment ?",
  ];

  return (
    <ImageBackground
      source={require("../../assets/images/partial-react-logo.png")}
      style={styles.top}
    >
      <View style={styles.headings}>
        <Pressable style={styles.headingIconsContainer}>
          <Entypo name="shop" size={20} color="white" />
        </Pressable>
        <Pressable style={styles.nitroBtn}>
          <MaterialIcons name="electric-bolt" size={20} color="white" />
          <Text style={{ color: "white" }}>Nitro</Text>
        </Pressable>
        <Pressable style={styles.headingIconsContainer}>
          <Fontisto name="player-settings" size={20} color="white" />
        </Pressable>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: "-25%",
          flexDirection: "row",
          columnGap: 15,
          alignSelf: "center",
        }}
      >
        <Pressable style={styles.profileImgContainer}>
          <FontAwesome name="user-circle" size={70} color="black" />
          <OnlineStatusIndicator online={false} right={4} bottom={4} />
        </Pressable>
        <Pressable
          style={{
            flexDirection: "row",
            columnGap: 5,
            padding: 5,
            maxWidth: "80%",
            backgroundColor: "white",
            borderRadius: 17,
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#ededed",
            alignSelf: "flex-end",
            position: "relative",
            top: "20%",
          }}
        >
          <FontAwesome6
            name="circle-plus"
            size={20}
            color="black"
            style={{ position: "relative", marginHorizontal: "1%" }}
          />
          <View
            style={{
              minWidth: "auto",
              maxWidth: "80%",
            }}
          >
            <Text
              ellipsizeMode="tail"
              style={{
                textAlign: "center",
                fontWeight: "light",
                flexWrap: "wrap",
                fontSize: 12.5,
                color: "grey",
              }}
            >
              {
                randomTexts[3 /*Math.floor(Math.random() * randomTexts.length)*/]
              }
            </Text>
          </View>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

const Middle = () => {
  return (
    <View style={styles.middle}>
      <View style={styles.userCredentialContainer}>
        <Pressable style={styles.userNameContainer}>
          <Text>Username</Text>
          <SimpleLineIcons name="arrow-down" size={20} color="black" />
        </Pressable>
        <Text>pseudoName</Text>
      </View>
      <Pressable style={styles.editProfileBtn}>
        <MaterialIcons name="edit" size={20} color="white" />
        <Text style={styles.editBtnTxt}>Modifier le profile</Text>
      </Pressable>
    </View>
  );
};

const Bottom = () => {
  return <View style={styles.bottom}></View>;
};

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    width: width,
    height: height,
  },
  top: {
    width: width,
    height: height * 0.15,
    top: 0,
  },
  middle: {
    width: width * 0.95,
    height: height * 0.2,
    marginLeft: width * 0.025,
    marginTop: 60,
    alignItems: "center",
    rowGap: 20,
  },
  bottom: {},
  headings: {
    flexDirection: "row",
    columnGap: 10,
    position: "absolute",
    top: "30%",
    right: "3%",
  },
  headingIconsContainer: {
    padding: 5,
    borderRadius: 50,
    backgroundColor: "black",
    borderWidth: 0.15,
    borderColor: "darkgrey",
  },
  nitroBtn: {
    flexDirection: "row",
    columnGap: 5,
    backgroundColor: "black",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    borderWidth: 0.15,
    borderColor: "darkgrey",
  },
  editProfileBtn: {
    width: "90%",
    flexDirection: "row",
    backgroundColor: "blue",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    columnGap: 5,
  },
  editBtnTxt: { color: "white" },
  userCredentialContainer: {
    width: "90%",
  },
  userNameContainer: {
    flexDirection: "row",
    columnGap: 15,
  },
  profileImgContainer: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Profile;
