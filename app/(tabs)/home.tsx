import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import { ChatGroupDataType } from "../../components/home_components/interfaces";
import ChatGroupTabs from "../../components/home_components/chat_group_tabs";
import PriavteChatTab from "../../components/home_components/private_chat_tab";

const Home = () => {
  const [tabIndex, setTabIndex] = useState(1);
  const chatGroupsData: ChatGroupDataType[] = [
    {
      groupTitle: "Programmation",
      salonsTitle: ["Salons textuels", "Salons vocaux"],
      salons: [
        ["programmation-c", "programmation-web-html-css-js"],
        ["Général"],
      ],
      groupIconSrc: "",
      totalMember: 23,
      totalMemberOnline: 1,
    },
    {
      groupTitle: "INFOGRAPHIE UCAD",
      salonsTitle: ["Salons textuels", "Salons vocaux"],
      salons: [["Général"], ["Général"]],
      groupIconSrc: "",
      totalMember: 25,
      totalMemberOnline: 5,
    },
  ];
  const tabs: React.JSX.Element[] = [
    <PriavteChatTab key={0} />,
    ...chatGroupsData.map((each, index: number) => {
      return <ChatGroupTabs key={index + 1} {...each} />;
    }),
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{ alignItems: "center", rowGap: 10 }}
        style={styles.containerLeft}
      >
        <FontAwesome
          key={0}
          size={45}
          style={styles.commentIcon}
          color={tabIndex === 0 ? "black" : "grey"}
          name={tabIndex === 0 ? "comment" : "comment-o"}
          onPress={() => setTabIndex(0)}
        />
        <View style={styles.chatGroupsIconsContainer}>
          {chatGroupsData.map((_, index: number) => {
            return (
              <FontAwesome5
                key={index + 1}
                name="users"
                size={40}
                style={{ color: tabIndex === index + 1 ? "black" : "grey" }}
                onPress={() => setTabIndex(index + 1)}
              />
            );
          })}
        </View>
      </ScrollView>
      <View style={styles.containerRight}>{tabs[tabIndex]}</View>
    </View>
  );
};
const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor: "#ededed",
  },
  containerLeft: {
    position: "absolute",
    top: 0,
    left: 0,
    width: width * 0.2,
    height: height,
    backgroundColor: "#ededed",
  },
  containerRight: {
    position: "absolute",
    top: height * 0.035,
    right: 0,
    width: width * 0.8,
    height: height,
    backgroundColor: "white",
    borderStartStartRadius: 0.1 * width,
    alignItems: "center",
  },
  commentIcon: {
    marginTop: 30,
    paddingVertical: 10,
    borderBottomWidth: 0.3,
    borderBlockColor: "#ededed",
  },
  chatGroupsIconsContainer: {
    rowGap: 10,
  },
  chatGroupsIcons: {
    marginTop: 15,
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;
