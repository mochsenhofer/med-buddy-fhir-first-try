import { StyleSheet } from "react-native";
import { backgroundWhite, mainBlue, medBuddyBlue } from "./colors";

export const commonStyle = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  header: {
    flex: 1.25,
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
  },
  footer: {
    flex: 0.75,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
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
    fontSize: 22,
    color: mainBlue,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  h3: {
    fontSize: 18,
    color: mainBlue,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 5,
  },
  h4: {
    fontSize: 15,
    fontWeight: "bold",
  },
  p: {
    fontSize: 18,
  },
  p2: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 10,
  },
});

const questionnaireItemBorderWidth = 2;
const questionnaireItemHeight = 40;
const questionnaireItemBorderRadius = 1000;
const questionnaireItemHorizontalMargin = 20;

export const questionnaireItemStyle = StyleSheet.create({
  questionContainer: {
    width: "100%",
    minWidth: 500,
  },
  textInput: {
    height: questionnaireItemHeight,
    width: "90%",
    borderColor: "black",
    borderWidth: questionnaireItemBorderWidth,
    borderRadius: questionnaireItemBorderRadius,
    marginHorizontal: questionnaireItemHorizontalMargin,
    paddingHorizontal: 20,
    justifyContent: "center",
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
    paddingHorizontal: 20,
  },
  radioButtonText: {
    color: mainBlue,
    fontSize: 20,
  },
  radioButtonSelected: {
    backgroundColor: medBuddyBlue,
    borderColor: medBuddyBlue,
  },
  radioButtonSelectedText: {
    color: backgroundWhite,
    fontSize: 25,
  },
});

export const overviewStyle = StyleSheet.create({
  overviewContainer: {
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 5,
  },
});
