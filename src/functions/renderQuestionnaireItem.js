import React from "react";
import { View, Text, TextInput } from "react-native";
import { commonStyle, questionnaireItemStyle } from "../styles/commonStyle";

// Define renderItem function outside of the component's return statement
export default function renderQuestionnaireItem({
  qItem,
  currentQuestionnaireSectionLinkId,
  currentQuestionnaireResponseSectionLinkId,
}) {
  return (
    <View style={commonStyle.sectionContainer}>
      <Text style={questionnaireItemStyle.questionText}>{qItem.text}</Text>
      {renderUserInput({ qItem })}
    </View>
  );
}

function renderUserInput({ qItem }) {
  switch (qItem.type) {
    case "integer":
      return (
        <TextInput
          style={questionnaireItemStyle.textInput}
          keyboardType="numeric"
          placeholder="Enter a number"
          maxLength={qItem.maxLength}
        />
      );
    case "choice":
      return <Text>Choice</Text>;
  }
}
