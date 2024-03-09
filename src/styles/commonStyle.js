import { StyleSheet } from "react-native";
import {backgroundWhite, mainBlue, medBuddyBlue} from "./colors";

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

const buttonFontSize = 30;

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
        backgroundColor: mainBlue,
    },
    primaryButtonText: {
        color: backgroundWhite,
        fontSize: buttonFontSize,
    },
    secondaryButton: {
        backgroundColor: backgroundWhite,
        borderWidth: 2,
        borderColor: mainBlue,
    },
    secondaryButtonText: {
        color: mainBlue,
        fontSize: buttonFontSize,
    },
});