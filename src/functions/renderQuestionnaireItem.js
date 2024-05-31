import React from "react";
import { View, Text, TextInput } from "react-native";
import { commonStyle, questionnaireItemStyle } from "../styles/commonStyle";
import { QuestionnaireResponse } from "../fhir-resources/QuestionnaireResponse";

// Define renderItem function outside of the component's return statement
export default function renderQuestionnaireItem({
  question,
  response,
  onChange,
}) {
  return (
    <View style={commonStyle.sectionContainer}>
      <Text style={questionnaireItemStyle.questionText}>{question.text}</Text>
      {renderUserInput({ question, response, onChange })}
    </View>
  );
}

function renderUserInput({ question, response, onChange }) {
  console.log("linkID: " + question.linkId);
  switch (question.type) {
    case "integer":
      return (
        <TextInput
          style={questionnaireItemStyle.textInput}
          keyboardType="numeric"
          placeholder="Enter a number"
          maxLength={question.maxLength}
          value={String(response.answer[0].valueInteger)}
          onChangeText={(text) =>
            onChange({
              linkId: question.linkId,
              value: parseInt(text, 10),
            })
          }
        />
      );
    case "choice":
      return <Text>Choice</Text>;
  }
}
