import React from "react";
import {Text, View, TouchableOpacity} from "react-native";

import styles from "./styles";
import colours from "../../config/colours";

function AppButton({title, color = "primary"}) {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: colours[color]}]}>
      <Text style={styles.text} onPress={() => console.log("Button clicked")}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default AppButton;
