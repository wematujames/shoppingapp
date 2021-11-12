import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
export default function Navbar({ whichScreen }) {
  return (
    <View style={styles.navbarContainer}>
      <View style={styles.navbar}>
        <Text style={styles.navTitle}>Donald's</Text>
        <TouchableOpacity>
          <Pressable onPress={() => whichScreen("settings")}>
            <Icon name="cog" size={40} color="white" />
          </Pressable>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbarContainer: {
    backgroundColor: "orange",
    paddingVertical: 8,
    paddingTop: 30,
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  navTitle: {
    fontSize: 25,
    color: "#fff",
  },
});
