import React from "react";
import { View, Text, Button, StyleSheet, Pressable } from "react-native";

export default function CustomButton({ text, data, handleValidation }) {
  const onSubmit = (data) => {
    const isError = handleValidation(data);
    if (!isError) {
      if (data.confirmPassword) {
        // register new user
      } else {
        //login user
      }
    }
  };
  return (
    <Pressable style={styles.button} onPress={() => onSubmit(data)}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 10,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 10,
    backgroundColor: "#111",
  },
  text: {
    color: "#fff",
  },
});
