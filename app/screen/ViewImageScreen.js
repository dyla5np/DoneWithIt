import React from "react";
import {StyleSheet, Text, View, Image} from "react-native";
import colours from "../config/colours";

const ViewImageScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image
        resizeMode='contain'
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
};

export default ViewImageScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  container: {
    backgroundColor: colours.black,
    flex: 1,
  },
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: "#fc5c65",
    position: "absolute",
    top: 40,
    left: 30,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: "#4ecdc4",
    position: "absolute",
    top: 40,
    right: 30,
  },
});
