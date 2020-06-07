import React from "react";
import {
    StyleSheet,
    Text,
    Platform
} from "react-native";

function AppText({
    children
}) {
    return <Text style = {
        styles.text
    } > {
        children
    } < /Text>;
}

export default AppText;

const styles = StyleSheet.create({
    text: {
        color: "tomato",
        fontSize: 20,
        fontFamily: "Roboto",
    },
});