import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default function Input({
  placeholder,
  secureText,
  name,
  onChange,
  defaultV,
}) {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureText}
        onChangeText={(text) => {
          onChange(text, name);
        }}
        defaultValue={defaultV}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: "#111",
    width: 400,
    paddingRight: 10,
    paddingLeft: 10,
    margin: 5,
    borderRadius: 10,
  },
});
