import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
export default function Navbar() {
  return (
    <TouchableOpacity style={styles.navbarContainer}>
      <View style={styles.navbar}>
        <Text style={styles.navTitle}>Shop D</Text>
        <Icon name="cog" size={40} color="white" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  navbarContainer: {
    backgroundColor: "orange",
    padding: 10,
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navTitle: {
    fontSize: 25,
    color: "#fff",
  },
});
