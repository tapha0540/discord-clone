import { Text, View } from "react-native";
import { ChatGroupDataType } from "./interfaces";

const ChatGroupTabs = ({
  groupTitle,
  salonsTitle,
  salons,
  groupIconSrc,
  totalMember,
  totalMemberOnline,
}: ChatGroupDataType) => {
  return (
    <View>
      <Text style={{ fontSize: 18 }}>{groupTitle}</Text>
      <View></View>
    </View>
  );
};
export default ChatGroupTabs;
