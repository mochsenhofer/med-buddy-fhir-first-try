import React from "react";
import { View, Text, TextInput } from "react-native";
import { commonStyle, questionnaireItemStyle } from "../styles/commonStyle";
import { QuestionnaireResponse } from "../fhir-resources/QuestionnaireResponse";

// Define renderItem function outside of the component's return statement
export default function renderQuestionnaireItem({ item }) {
  return (
    <View style={commonStyle.sectionContainer}>
      <Text style={questionnaireItemStyle.questionText}>{item.text}</Text>
      {renderUserInput({ item })}
    </View>
  );
}

function renderUserInput({ item }) {
  console.log("linkID: " + item.linkId);
  switch (item.type) {
    case "integer":
      return (
        <TextInput
          style={questionnaireItemStyle.textInput}
          keyboardType="numeric"
          placeholder="Enter a number"
          maxLength={item.maxLength}
        />
      );
    case "choice":
      return <Text>Choice</Text>;
  }
}
