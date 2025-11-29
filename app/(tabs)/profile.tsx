import {
  Entypo,
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

const TopProfile = () => {
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
    </ImageBackground>
  );
};

const MiddleProfile = () => {
  return (
    <View style={styles.middle}>
      <View>
        <Pressable style={styles.userNameContainer}>
          <Text>Username</Text>
          <SimpleLineIcons name="arrow-down" size={20} color="black" />
        </Pressable>
        <Text>pseudoName</Text>
      </View>
      <Pressable style={styles.editProfileBtn}>
        <MaterialIcons name="edit" size={20} color="white" />
        <Text style={{ color: "white" }}>Modifier le profile</Text>
      </Pressable>
    </View>
  );
};

const BottomProfile = () => {
  return <View style={styles.bottom}></View>;
};

const Profile = () => {
  return (
    <ScrollView style={styles.container}>
      <TopProfile />
      <MiddleProfile />
      <BottomProfile />
    </ScrollView>
  );
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
    width: width,
    height: height * 0.2,
    marginTop: 25,
    alignItems: "center",
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
    width: width * 0.9,
    flexDirection: "row",
    backgroundColor: "blue",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    columnGap: 5,
  },
  userNameContainer: {
    flexDirection: "row",
  },
});

export default Profile;
