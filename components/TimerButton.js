import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default ({ color, title, small, onPress }) => {
  const { button, buttonText, large } = styles;
  return (
    <TouchableOpacity
      style={[button, { borderColor: color }]}
      onPress={onPress}
    >
      <Text style={[buttonText, small ? styles.small : large, { color }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    minWidth: 100,
    borderWidth: 2,
    borderRadius: 3
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold"
  },
  small: {
    fontSize: 14,
    padding: 5
  },
  large: {
    fontSize: 16,
    padding: 10
  }
});
