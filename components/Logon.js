import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
//components
import SignUp from "./user/SignUp";
import Login from "./user/Login";
import Button from "./utilities/Button";
import UserRedirect from "./utilities/UserRedirect";
import Error from "./utilities/Error";

export default function LogOn() {
  const [errors, setErrors] = useState([]);
  const [isRegistered, setIsRegistered] = useState(true);

  const handleUserStatus = () => {
    setIsRegistered(!isRegistered);
  };
  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  const validatePassword = (errArray, password1, password2) => {
    //Check length
    !password1.length < 8 &&
      errArray.push("Password must be at least 8 characters");
    //Check if passwords match
    password1 !== password2 && errArray.push("Passwords do not match");
  };

  const handleValidation = (infos) => {
    const foundErrors = [];

    for (let info in infos) {
      if (infos[info] === "") {
        foundErrors.push(
          `${info.slice(0, 1).toLocaleUpperCase()}${info.slice(1)} is required`
        );
      }
    }
    //Validate email
    if (infos.email && infos.email !== "") {
      const isValidEmail = validateEmail(infos.email);
      !isValidEmail && foundErrors.push("Email is invalid");
    }
    //Validatepasswords
    if (infos.confirmPassword) {
      validatePassword(foundErrors, infos.password, infos.confirmPassword);
    }
    setErrors(foundErrors);
    setTimeout(() => setErrors([]), 10000);
    return errors.length === 0 ? false : true;
  };

  if (isRegistered) {
    return (
      <View style={styles.login}>
        <Text style={styles.heading}>Login</Text>
        <Error errors={errors} />
        <Login handleValidation={handleValidation} />

        <UserRedirect
          question="Don't have an account? "
          recommendation="Sign Up"
          handleUserStatus={handleUserStatus}
        />
      </View>
    );
  } else {
    return (
      <View style={styles.login}>
        <Text style={styles.heading}>Sign Up</Text>
        <Error errors={errors} />
        <SignUp handleValidation={handleValidation} />
        <UserRedirect
          question="Already have an account? "
          recommendation="Sign In"
          handleUserStatus={handleUserStatus}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  login: {
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
});
