import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
export default function Footer({ whichScreen, cartLength }) {
  return (
    <View style={styles.footerContainer}>
      <View style={styles.navbar}>
        <Pressable
          onPress={() => {
            whichScreen("home");
          }}
        >
          <Icon name="home" size={40} color="white" />
        </Pressable>
        <Pressable
          onPress={() => {
            whichScreen("cart");
          }}
          style={{ flexDirection: "row" }}
        >
          <Icon name="shopping-cart" size={40} color="white" />
          <Text style={{ color: "white" }}>{cartLength}</Text>
        </Pressable>
      </View>
    </View>
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
    paddingHorizontal: 10,
  },
});
