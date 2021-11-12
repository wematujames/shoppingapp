import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

//Components
import Logon from "./components/Logon";
import Home from "./components/Home";
export default function App() {
  const [screen, setScreen] = useState("logon");
  const whichScreen = (screenName) => {
    setScreen(screenName);
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {screen === "logon" && <Logon setScreen={setScreen} />}
        {screen === "home" && <Home setScreen={setScreen} />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
  },
});
