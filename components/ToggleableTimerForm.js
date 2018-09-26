import React from "react";
import { StyleSheet, View } from "react-native";

import TimerButton from "./TimerButton";
import TimerForm from "./TimerForm";

export default ({ isOpen }) => {
  const { container, buttonPadding } = styles;
  return (
    <View style={[container, !isOpen && buttonPadding]}>
      {isOpen ? <TimerForm /> : <TimerButton title="+" color="black" />}
    </View>
  );
};

const styles = StyleSheet.create({
  cotainer: {
    paddingVertical: 10
  },
  buttonPadding: {
    paddingHorizontal: 15
  }
});
