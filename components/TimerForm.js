import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

import TimerButton from "./TimerButton";

export default ({ id, title, project }) => {
  const {
    formContainer,
    attributeContainer,
    textInputTitle,
    textInputContainer,
    textInput,
    buttonGroup
  } = styles;
  const submitText = id ? "Update" : "Create";

  return (
    <View style={formContainer}>
      <View style={attributeContainer}>
        <Text style={textInputTitle}>Title</Text>
        <View style={textInputContainer}>
          <Text
            style={textInput}
            underlineColorAndroid="transparent"
            defaultValue={title}
          />
        </View>
      </View>
      <View style={attributeContainer}>
        <Text style={textInputTitle}>Project</Text>
        <View style={textInputContainer}>
          <Text
            style={textInput}
            underlineColorAndroid="transparent"
            defaultValue={project}
          />
        </View>
      </View>
      <View style={buttonGroup}>
        <TimerButton small color="#21BA45" title={submitText} />
        <TimerButton small color="#DB2828" title="Cancel" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: "white",
    borderColor: "#D6D7DA",
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    margin: 15,
    marginBottom: 0
  },
  attributeContainer: {
    marginVertical: 8
  },
  textInputContainer: {
    borderColor: "#D6D7DA",
    borderRadius: 2,
    borderWidth: 1,
    marginBottom: 5
  },
  textInput: {
    height: 30,
    padding: 5,
    fontSize: 12
  },
  textInputTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
