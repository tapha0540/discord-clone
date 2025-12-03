import { NotebookContext } from "@/context/NotebookContext";
import { router, Stack } from "expo-router";
import { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";

const EditNotebook = () => {
  const notebook = useContext(NotebookContext);
  const [value, setValue] = useState<string>(notebook?.notebookTxt ?? "");
  const [height, setHeight] = useState<number>(100);
  const [isFocus, setIsFocus] = useState<boolean>(false);

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Modifier la note",
          headerRight: () => (
            <Text
              style={styles.headerRightTxt}
              onPress={() => {
                notebook?.setNotebookTxt(value);
                router.back();
              }}
            >
              Enregistrer
            </Text>
          ),
          headerTitleAlign: "center",
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.topTxtContainer}>
          <Text style={styles.topTxt}>Note(seulement visible par toi)</Text>
        </View>
        <KeyboardAvoidingView
          style={[styles.txtInputContainer, { height: height }]}
        >
          <TextInput
            multiline
            value={value}
            onChangeText={setValue}
            style={[styles.textInput, isFocus && styles.textInputFocused]}
            textAlignVertical="top"
            placeholder="Touche pour ajouter une note"
            autoFocus
            onContentSizeChange={(e) =>
              setHeight(e.nativeEvent.contentSize.height)
            }
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
          />
        </KeyboardAvoidingView>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerRightTxt: {
    paddingHorizontal: 10,
    color: "blue",
  },
  topTxtContainer: {
    marginTop: 10,
  },
  topTxt: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontSize: 18,
  },
  txtInputContainer: {
    paddingHorizontal: 25,
    paddingVertical: 5,
    minHeight: 100,
  },
  textInput: {
    flex: 1,
    padding: 12,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    outlineColor: "transparent",
  },
  textInputFocused: {
    shadowColor: "black",
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    elevation: 4,
  },
});

export default EditNotebook;
