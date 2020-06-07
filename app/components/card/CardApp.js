import React from "react";
import {StyleSheet, Text, View, Image} from "react-native";

import colours from "../../config/colours";
import AppText from "../AppText/AppText";

function CardApp({title, subTitle, image}) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.detailContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

export default CardApp;

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    backgroundColor: colours.white,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailContainer: {
    padding: 10,
  },
  title: {
    color: colours.black,
  },
  subTitle: {
    color: colours.secondary,
    fontWeight: "bold",
  },
});
