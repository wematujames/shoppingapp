import React from "react";
import { View, Text } from "react-native";

export default function Errors({ errors }) {
  return (
    <View>
      {errors.map((err) => (
        <Text>{err}</Text>
      ))}
    </View>
  );
}
