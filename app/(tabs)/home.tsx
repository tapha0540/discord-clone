import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import { ChatGroupDataType } from "../../components/home_components/interfaces";
import ChatGroupTabs from "../../components/home_components/chat_group_tabs";
import PriavteChatTab from "../../components/home_components/private_chat_tab";
import chatGroupsData from "../../assets/data/chat_groups_data.json";

const Home = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const tabs: React.JSX.Element[] = [
    <PriavteChatTab key={0} />,
    ...chatGroupsData.map((each: ChatGroupDataType, index: number) => {
      return <ChatGroupTabs key={index + 1} {...each} />;
    }),
  ];

  return (
    <View style={styles.container}>
      <Left
        tabIndex={tabIndex}
        setTabIndex={setTabIndex}
        chatGroupsData={chatGroupsData}
      />
      <Right tabIndex={tabIndex} tabs={tabs} />
    </View>
  );
};

const Left = ({
  tabIndex,
  setTabIndex,
  chatGroupsData,
}: {
  tabIndex: number;
  setTabIndex: React.Dispatch<React.SetStateAction<number>>;
  chatGroupsData: ChatGroupDataType[];
}) => {
  return (
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
        {chatGroupsData.map((_, index) => {
          const actualIndex: number = index + 1;
          return (
            <FontAwesome5
              key={actualIndex}
              name="users"
              size={40}
              style={{ color: tabIndex === actualIndex ? "black" : "grey" }}
              onPress={() => setTabIndex(actualIndex)}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

const Right = ({
  tabIndex,
  tabs,
}: {
  tabIndex: number;
  tabs: React.JSX.Element[];
}) => {
  return <View style={styles.containerRight}>{tabs[tabIndex]}</View>;
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
