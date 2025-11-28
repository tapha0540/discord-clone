import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { ChatGroupDataType } from "@/components/home_components/interfaces";
import ChatGroupTabs from "@/components/home_components/chat_group_tabs";
import PriavteChatTab from "@/components/home_components/private_chat_tab";

const Home = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const chatGroupsData: ChatGroupDataType[] = [
    {
      groupTitle: "INFOGRAPHIE UCAD",
      salonsTitle: [],
      salons: [],
      groupIconSrc: "",
      totalMember: 25,
      totalMemberOnline: 5,
    },
  ];
  const tabs: React.JSX.Element[] = [
    <PriavteChatTab />,
    ...chatGroupsData.map((each, index: number) => {
      return <ChatGroupTabs key={index} {...each} />;
    }),
  ];
  return (
    <View style={styles.container}>
      <View style={styles.containerLeft}>
        <Feather
          key={0}
          name="message-circle"
          size={50}
          style={{ ...styles.MsgIcon, color: tabIndex == 0 ? "black" : "grey" }}
          onPress={() => setTabIndex(0)}
        />
        <View>
          {chatGroupsData.map(({}, index: number) => {
            return (
              <FontAwesome5
                key={index + 1}
                name="users"
                size={40}
                style={{ color: tabIndex == index + 1 ? "black" : "grey" }}
                onPress={() => setTabIndex(index + 1)}
              />
            );
          })}
        </View>
      </View>
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
    alignItems: "center",
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
  MsgIcon: {
    marginTop: 40,
    borderBottomWidth: 0.3,
    borderBlockColor: "#ededed",
  },
  chatGroupsIcons: {
    marginTop: 15,
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;
