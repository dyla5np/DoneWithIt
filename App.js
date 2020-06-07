import React from "react";
import {StyleSheet, View} from "react-native";

import WelcomeScreen from "./app/screen/WelcomeScreen";
import CardApp from "./app/components/card/CardApp";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#f8f4f4",
        padding: 20,
        paddingTop: 80,
      }}>
      <CardApp
        title='Green jacket for sale'
        subTitle='$200'
        image={require("./app/assets/jacket.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
