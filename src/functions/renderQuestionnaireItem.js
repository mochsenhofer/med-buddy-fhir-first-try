import React from "react";
import { View, Text, TextInput } from "react-native";
import { commonStyle, questionnaireItemStyle } from "../styles/commonStyle";
import { QuestionnaireResponse } from "../fhir-resources/QuestionnaireResponse";

// Define renderItem function outside of the component's return statement
export default function renderQuestionnaireItem({ item: questionItem }) {
  return (
    <View style={commonStyle.sectionContainer}>
      <Text style={questionnaireItemStyle.questionText}>
        {questionItem.text}
      </Text>
      {renderUserInput({ questionItem })}
    </View>
  );
}

function renderUserInput({ questionItem }) {
  //   console.log("questionItem: " + JSON.stringify(questionItem));
  switch (questionItem.type) {
    case "integer":
      return (
        <TextInput
          style={questionnaireItemStyle.textInput}
          keyboardType="numeric"
          placeholder="Enter a number"
          maxLength={questionItem.maxLength}
        />
      );
    case "choice":
      return <Text>Choice</Text>;
  }
}
