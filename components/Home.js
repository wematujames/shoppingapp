import React from "react";
import { View, Text, StyleSheet } from "react-native";

//components
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Products from "./shop/Products";

export default function Home() {
  return (
    <View style={styles.home}>
      <Navbar />
      <Products />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: "space-between",
  },
});
