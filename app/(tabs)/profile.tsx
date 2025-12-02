import { NotebookContext, NotebookTxtType } from "@/context/NotebookContext";
import OnlineStatusIndicator from "../../components/home_components/online_status_indicator";
import {
  Entypo,
  FontAwesome,
  FontAwesome6,
  Fontisto,
  MaterialIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { router } from "expo-router";
import { useContext } from "react";
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
      <Bottom />
    </ScrollView>
  );
};

const Top = () => {
  const quotes: string[] = [
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
      <View style={styles.profileDataContainer}>
        <Pressable style={styles.profileImgContainer}>
          <FontAwesome name="user-circle" size={70} color="black" />
          <OnlineStatusIndicator online={false} right={4} bottom={4} />
        </Pressable>
        <Pressable style={styles.profileStatus}>
          <FontAwesome6
            name="circle-plus"
            size={20}
            color="black"
            //style={styles.circle}
          />

          <Text ellipsizeMode="tail" style={styles.quote}>
            {quotes[Math.floor(Math.random() * quotes.length)]}
          </Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

const Bottom = () => {
  return (
    <View style={styles.bottom}>
      <View style={styles.userCredentialContainer}>
        <Pressable style={styles.userNameContainer}>
          <Text style={styles.userName}>Moustapha Fall</Text>
          <SimpleLineIcons name="arrow-down" size={15} color="darkgrey" />
        </Pressable>
        <Text style={styles.userId}>pseudoName</Text>
      </View>
      <Pressable style={styles.editProfileBtn}>
        <MaterialIcons name="edit" size={20} color="white" />
        <Text style={styles.editBtnTxt}>Modifier le profile</Text>
      </Pressable>
      <View style={styles.userSignUpDateContainer}>
        <Text>Membre depuis</Text>
        <View style={{ flexDirection: "row", columnGap: 10 }}>
          <MaterialIcons name="chat" size={25} color="black" />
          <Text style={styles.userSignUpDate}>3 juin 2025</Text>
        </View>
      </View>
      <Pressable style={styles.addFriendsbtn}>
        <Text
          style={{
            fontWeight: "medium",
            fontSize: 16,
          }}
        >
          Amis
        </Text>
        <View
          style={{
            flexDirection: "row",
            columnGap: 15,
            alignItems: "center",
          }}
        >
          <FontAwesome name="user-circle" size={25} color="black" />
          <SimpleLineIcons name="arrow-right" size={15} color="black" />
        </View>
      </Pressable>
      <Notebook />
    </View>
  );
};

const Notebook = () => {
  const notebook: NotebookTxtType | null = useContext(NotebookContext);
  if (!notebook) return null;
  return (
    <Pressable
      style={styles.notebook}
      onPress={() => router.push("/screens/edit_notebook")}
    >
      <View style={styles.notebookHead}>
        <Text>Note (seulement visible par toi)</Text>
        <MaterialIcons
          name={
            notebook.notebookTxt.length === 0
              ? "my-library-add"
              : "my-library-books"
          }
          size={20}
          color="black"
        />
      </View>
      <Text>{notebook.notebookTxt}</Text>
    </Pressable>
  );
};

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dfe6f5",
    width: width,
    height: height,
  },
  top: {
    width: width,
    height: height * 0.15,
    top: 0,
  },
  bottom: {
    width: width * 0.9,
    marginLeft: width * 0.05,
    marginTop: 80,
    padding: 5,
    alignItems: "center",
    rowGap: 20,
    justifyContent: "center",
  },
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
    alignItems: "center",
  },
  profileDataContainer: {
    position: "absolute",
    bottom: "-25%",
    flexDirection: "row",
    columnGap: 10,
    justifyContent: "space-around",
    width: "100%",
    padding: 5,
  },
  quote: {
    textAlign: "center",
    fontWeight: "light",
    flexWrap: "wrap",
    fontSize: 12.5,
    color: "grey",
  },
  profileStatus: {
    flexDirection: "row",
    columnGap: 5,
    padding: 0,
    backgroundColor: "white",
    borderRadius: 17,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ededed",

    position: "relative",
    top: "20%",
  },
  editProfileBtn: {
    minWidth: width * 0.9,
    maxWidth: 350,
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
    width: "100%",
    marginBottom: 15,
  },
  userNameContainer: {
    flexDirection: "row",
    columnGap: 15,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  userName: { fontSize: 25, fontWeight: "900" },
  userId: { fontWeight: "100", fontSize: 14 },
  profileImgContainer: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  addFriendsbtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: width * 0.9,
    columnGap: 30,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 17,
    borderColor: "lightgrey",
    borderWidth: 1,
  },
  userSignUpDateContainer: {
    width: width * 0.9,
    rowGap: 15,
    backgroundColor: "white",
    padding: 12.5,
    borderRadius: 17,
    borderColor: "lightgrey",
    borderWidth: 1,
  },
  userSignUpDate: {
    fontSize: 14,
    fontWeight: "light",
  },
  notebook: {
    width: width * 0.9,
    backgroundColor: "white",
    padding: 12.5,
    borderRadius: 17,
    borderColor: "lightgrey",
    borderWidth: 1,
  },
  notebookHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
  noteBookIcon: {},
});

export default Profile;
