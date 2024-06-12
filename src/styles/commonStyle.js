import { StyleSheet } from "react-native";
import { backgroundWhite, mainBlue, medBuddyBlue } from "./colors";

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
    flex: 0.75,
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
    fontSize: 20,
    color: mainBlue,
    fontWeight: "bold",
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

const questionnaireItemBorderWidth = 2;
const questionnaireItemHeight = 40;
const questionnaireItemBorderRadius = 1000;
const questionnaireItemHorizontalMargin = 20;

export const questionnaireItemStyle = StyleSheet.create({
  textInput: {
    height: questionnaireItemHeight,
    width: "90%",
    borderColor: "black",
    borderWidth: questionnaireItemBorderWidth,
    borderRadius: questionnaireItemBorderRadius,
    marginHorizontal: questionnaireItemHorizontalMargin,
    paddingHorizontal: 20,
  },
  radioButtonView: {
    height: questionnaireItemHeight,
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: questionnaireItemBorderRadius,
    marginHorizontal: questionnaireItemHorizontalMargin,
  },
  questionText: {
    fontSize: 20,
    marginBottom: 5,
    marginTop: 10,
  },
  radioButton: {
    backgroundColor: "transparent",
    width: "33%",
    height: questionnaireItemHeight,
    borderWidth: questionnaireItemBorderWidth,
    borderColor: mainBlue,
    borderRadius: questionnaireItemBorderRadius,
    alignItems: "center",
    justifyContent: "center",
  },
  radioButtonText: {
    color: mainBlue,
    fontSize: 20,
  },
  radioButtonSelected: {
    backgroundColor: medBuddyBlue,
  },
});
