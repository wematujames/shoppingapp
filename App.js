import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

//Components
import Logon from "./components/Logon";
import Home from "./components/Home";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Logon /> */}
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
