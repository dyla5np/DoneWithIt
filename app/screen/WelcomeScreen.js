import React from "react";
import {StyleSheet, Text, View, ImageBackground, Image} from "react-native";
import colours from "../config/colours";

import AppButton from "../components/button/AppButton";

const WelcomeScreen = (props) => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.text}>Sell What You Don't Need</Text>
      </View>
      <AppButton title='Log In' />
      <AppButton title='Register' color='secondary' />
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    resizeMode: "cover",
    opacity: 5,
  },
  logo: {
    width: 100,
    height: 100,
    position: "relative",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 10,
    fontFamily: "Roboto",
  },
});
