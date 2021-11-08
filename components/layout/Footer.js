import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
export default function Footer() {
  return (
    <TouchableOpacity style={styles.footerContainer}>
      <View style={styles.navbar}>
        <Icon name="home" size={40} color="white" />
        <Icon name="shopping-cart" size={40} color="white" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: "orange",
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 100,
  },
});
