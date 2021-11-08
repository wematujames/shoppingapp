import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";

export default function UserRedirect({
  handleUserStatus,
  question,
  recommendation,
}) {
  return (
    <TouchableOpacity styles={styles.recommendation}>
      <Text onPress={handleUserStatus} style={styles.signupLink}>
        {question} {recommendation}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  recommendation: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  signupLink: {
    fontSize: 18,
    margin: 5,
    padding: 3,
  },
  userLink: {
    fontWeight: "bold",
  },
});
