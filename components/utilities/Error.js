import React from "react";
import { View, Text } from "react-native";

export default function Errors({ errors }) {
  let count = 1;
  return (
    <View>
      {errors.map((err) => (
        <Text key={count++}>{err}</Text>
      ))}
    </View>
  );
}
