import React from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";

import EditableTimer from "./components/EditableTimer";
import ToggleableTimerForm from "./components/ToggleableTimerForm";

export default class App extends React.Component {
  render() {
    const { appContainer, titleContainer, title, timerList } = styles;
    return (
      <View style={appContainer}>
        <View style={titleContainer}>
          <Text style={title}>Timers</Text>
        </View>
        <ScrollView style={timerList}>
          <ToggleableTimerForm isOpen={false} />
          <EditableTimer
            id="1"
            title="Mow the Lawn"
            project="House Chores"
            elapsed="8986300"
            isRunning
          />
          <EditableTimer
            id="2"
            title="Bake squash"
            project="Kitchen Chores"
            elapsed="3890985"
            editFormOpen
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1
  },
  titleContainer: {
    paddingTop: 35,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#D6D7DA"
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },
  timerList: {
    paddingBottom: 15
  }
});

// page 97
