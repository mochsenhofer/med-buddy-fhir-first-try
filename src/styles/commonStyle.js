import { StyleSheet } from "react-native";
import {backgroundWhite, mainBlue, medBuddyBlue} from "./colors";

export const commonStyle = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
    },
    header: {
        flex: 1.5,
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "blue",
    },
    section: {
        flex: 5,
        width: "75%",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        backgroundColor: "red",
    },
    footer: {
        flex: 1,
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "green",
    },
    sectionHeading: {
        margin: 10,
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

export const fontStyle = StyleSheet.create({
    h1: {
        fontSize: 40,
        fontWeight: "bold",
    },
    h2: {
        fontSize: 25,
        color: mainBlue,
        textTransform: "uppercase",
    },
    h3: {
        fontSize: 20,
        fontWeight: "bold",
    },
    h4: {
        fontSize: 15,
        fontWeight: "bold",
    },
});

export const questionnaireItemStyle = StyleSheet.create({
    textInput: {
        height: 40,
        width: "100%",
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 1000,
    },
    questionText: {
        fontSize: 20,
    },
});