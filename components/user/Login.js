import { StyleSheet, View, Text, Pressable, TextInput } from "react-native";
import React, { useState } from "react";
//Components
import Input from "../utilities/Input";
import Button from "../utilities/Button";

export default function Login({ handleValidation }) {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  //Handle input change
  const handleChange = (name, value) => {
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <View style={styles.login}>
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
      <Button
        handleValidation={handleValidation}
        text="Log In"
        data={userInfo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  login: {
    backgroundColor: "orange",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    padding: 5,
  },
});

// //Check passwords match
// const checkPasswordMatch = () => {
//   const p1 = register.password;
//   const p2 = register.passoword2;
//   if (p2 !== p1) {
//     setAlert((prev) => ({ ...prev, pswdErr: "Passwords do not match" }));
//   }
// };

// //Validate email
// function validateEmail(email) {
//   const re =
//     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(String(email).toLowerCase());
// }
