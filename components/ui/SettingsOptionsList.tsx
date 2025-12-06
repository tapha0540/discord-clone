import { SimpleLineIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

const SettingsOptionsList = ({
  title,
  texts,
  icons,
  routesOnPressed,
  details,
  disableArrowRightIcon = false,
}: {
  title: string;
  texts: string[];
  icons?: React.ReactNode[];
  routesOnPressed?: any[];
  details?: (string | null)[];
  disableArrowRightIcon?: boolean;
}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.optionsListContainer}>
        {texts.map((text, index) => {
          return (
            <Pressable
              key={index}
              style={styles.optionContainer}
              onPress={
                routesOnPressed
                  ? () => {
                      router.push(routesOnPressed[index]);
                    }
                  : null
              }
            >
              {icons && icons[index]}
              <View
                style={[
                  styles.optionContainerLeft,
                  // disable border bottom for the last element.
                  index !== texts.length - 1 && {
                    borderBottomColor: "grey",
                    borderBottomWidth: 1,
                  },
                ]}
              >
                <Text style={styles.optionTxt}>{text}</Text>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    columnGap: 8,
                  }}
                >
                  <Text style={{ color: "grey", fontSize: 12.5 }}>
                    {details && details[index]}
                  </Text>
                  {disableArrowRightIcon !== true && (
                    <SimpleLineIcons
                      name="arrow-right"
                      size={15}
                      color="black"
                    />
                  )}
                </View>
              </View>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {},
  optionsListContainer: {
    marginVertical: 20,
    rowGap: 20,
    backgroundColor: "lightgrey",
    padding: 8,
    borderRadius: 20,
  },
  optionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 2,
    overflow: "hidden",
  },
  optionContainerLeft: {
    flex: 1,
    flexDirection: "row",
    columnGap: 5,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8,
  },
  optionTxt: {
    fontSize: 13.5,
    fontWeight: "thin",
    margin: 5,
  },
});

export default SettingsOptionsList;
