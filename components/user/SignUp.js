import { StyleSheet, View, Text, Pressable, TextInput } from "react-native";
import React, { useState } from "react";
//Components
import Input from "../utilities/Input";
import Button from "../utilities/Button";

export default function SignUp({ handleValidation }) {
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  //Handle input change
  const handleChange = (name, value) => {
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <View style={styles.signUp}>
      <Input
        placeholder="Username"
        defaultV={userInfo.username}
        onChange={(text) => handleChange("username", text)}
      />
      <Input
        placeholder="Email"
        defaultV={userInfo.email}
        onChange={(text) => handleChange("email", text)}
      />
      <Input
        placeholder="Password"
        defaultV={userInfo.password}
        secureText={true}
        onChange={(text) => handleChange("password", text)}
      />
      <Input
        placeholder="Cofirm password"
        defaultV={userInfo.confirmPassword}
        secureText={true}
        onChange={(text) => handleChange("confirmPassword", text)}
      />
      <Button
        handleValidation={handleValidation}
        text="Sign Up"
        data={userInfo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  signUp: {
    backgroundColor: "orange",
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    padding: 5,
  },
  heading: {
    fontSize: 50,
    margin: 10,
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
