import {
    StyleSheet,
} from 'react-native';

import colors from '../../config/colours'

const styles = StyleSheet.create({
    button: {
        width: "90%",
        height: 50,
        backgroundColor: colors.primary,
        borderRadius: 40,
        alignItems: "center",
        justifyContent: "center",
        margin: 5
    },
    text: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        textTransform: "uppercase"
    },

});

export default styles