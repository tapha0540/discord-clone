import { Pressable, StyleSheet, Text, View } from "react-native";
import { ChatGroupDataType } from "./interfaces";
import {
  AntDesign,
  FontAwesome,
  FontAwesome6,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { useState } from "react";

const ChatGroupTabs = ({
  groupTitle,
  salonsTitle,
  salons,
  groupIconSrc,
  totalMember,
  totalMemberOnline,
}: ChatGroupDataType) => {
  return (
    <View style={styles.container}>
      {/* Group tab Title */}
      <View style={styles.top}>
        <View style={styles.titleContainer}>
          <Text style={styles.chatGroupTitle}>{groupTitle}</Text>
          <SimpleLineIcons name="arrow-right" size={15} color="black" />
        </View>
        <View style={styles.iconsContainers}>
          <View style={styles.searchIconContainer}>
            <FontAwesome name="search" size={20} color="black" />
            <Text style={styles.seachIconText}>Rechercher</Text>
          </View>
          <View style={styles.iconContainer}>
            <AntDesign name="usergroup-add" size={20} color="black" />
          </View>
          <View style={styles.iconContainer}>
            <FontAwesome6 name="calendar-day" size={20} color="black" />
          </View>
        </View>
      </View>
      {/* Salons */}
      <View style={styles.middle}>
        {salonsTitle.map((salonTitle: string, index: number) => {
          if (index > salons.length || salons[index].length === 0) {
            return null;
          }
          return (
            <DisplaySalon
              key={index}
              salonTitle={salonTitle}
              index={index}
              salon={salons[index]}
            />
          );
        })}
      </View>
    </View>
  );
};

const DisplaySalon = ({
  salonTitle,
  salon,
  index,
}: {
  salonTitle: string;
  salon: string[];
  index: number;
}) => {
  const [isPressed, setIsPressed] = useState(true);
  return (
    <View key={index}>
      <Pressable
        style={styles.salonTitleContainer}
        onPress={() => setIsPressed(!isPressed)}
      >
        <SimpleLineIcons
          name={isPressed ? "arrow-down" : "arrow-right"}
          size={12}
        />
        <Text>{salonTitle}</Text>
      </Pressable>
      <View style={styles.salon}>
        {isPressed &&
          salon.map((element, index: number) => {
            return (
              <View key={index} style={styles.salonItem}>
                <FontAwesome name="hashtag" size={15} color="grey" />
                <Text style={{ textOverflow: "ellipsis", color: "grey" }}>
                  {element}
                </Text>
              </View>
            );
          })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  top: {
    position: "sticky",
    marginTop: "7%",
    rowGap: 12,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ededed",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 15,
    marginLeft: "4%",
  },
  chatGroupTitle: { fontSize: 16, marginLeft: "3%" },
  iconsContainers: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginLeft: "4%",
  },
  searchIconContainer: {
    width: "60%",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ededed",
    borderRadius: 50,
    paddingVertical: 7,
    paddingHorizontal: 15,
  },
  seachIconText: {
    fontSize: 12.5,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ededed",
    borderRadius: 50,
    paddingVertical: 7,
    paddingHorizontal: 10,
  },
  middle: {
    marginTop: 20,
    rowGap: 10,
  },
  salon: {
    marginTop: 8,
    rowGap: 5,
  },
  salonTitleContainer: {
    flexDirection: "row",
    columnGap: 10,
    marginLeft: 5,
    alignItems: "center",
  },
  salonItem: {
    flexDirection: "row",
    columnGap: 12,
    marginLeft: 18,
    alignItems: "center",
  },
});

export default ChatGroupTabs;
