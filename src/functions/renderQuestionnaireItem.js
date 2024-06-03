import React from "react";
import { Text, View } from "react-native";
import { commonStyle, questionnaireItemStyle } from "../styles/commonStyle";
import renderUserInput from "./renderUserInput";

// Define renderItem function outside of the component's return statement
export default function renderQuestionnaireItem({
  qItem,
  currentQuestionnaireResponseStateSection,
  setQuestionnaireResponseState,
}) {
  return (
    <View style={commonStyle.sectionContainer}>
      <Text style={questionnaireItemStyle.questionText}>{qItem.text}</Text>
      {renderUserInput({
        qItem,
        currentQuestionnaireResponseStateSection,
        setQuestionnaireResponseState,
      })}
    </View>
  );
}
