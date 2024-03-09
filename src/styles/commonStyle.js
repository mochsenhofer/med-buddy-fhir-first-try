import { StyleSheet } from "react-native";
import colors from "./colors";

export const commonStyle = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
    },
    header: {
        flex: 1.75,
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "blue",
    },
    section: {
        flex: 5,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red",
    },
    footer: {
        flex: 1.5,
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "green",
    },
});

const buttonFontSize = 20;

export const buttonStyle = StyleSheet.create({
    button: {
        width: 200,
        height: 80,
        padding: 10,
        margin: 20,
        borderRadius: 1000,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    primaryButton: {
        backgroundColor: colors.mainBlue,
    },
    primaryButtonText: {
        color: colors.backgroundWhite,
        fontSize: buttonFontSize,
    },
    secondaryButton: {
        backgroundColor: colors.backgroundWhite,
    },
    secondaryButtonText: {
        color: colors.mainBlue,
        fontSize: buttonFontSize,
    },
});