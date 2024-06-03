import React from "react";
import { View, Text, TextInput } from "react-native";
import { commonStyle, questionnaireItemStyle } from "../styles/commonStyle";

// Define renderItem function outside of the component's return statement
export default function renderQuestionnaireItem({
  qItem,
  currentQuestionnaireSectionLinkId,
  currentQuestionnaireResponseSectionLinkId,
  currentQuestionnaireResponseSection,
}) {
  return (
    <View style={commonStyle.sectionContainer}>
      <Text style={questionnaireItemStyle.questionText}>{qItem.text}</Text>
      {renderUserInput({ qItem, currentQuestionnaireResponseSection })}
    </View>
  );
}

function renderUserInput({ qItem, currentQuestionnaireResponseSection }) {
  const responseItem = currentQuestionnaireResponseSection[0].data.find(
    (item) => item.linkId === qItem.linkId
  );

  const updateValue = responseItem.answer[0];

  switch (qItem.type) {
    case "integer":
      return (
        <TextInput
          style={questionnaireItemStyle.textInput}
          keyboardType="numeric"
          placeholder="Enter a number"
          maxLength={qItem.maxLength}
          value={updateValue.valueInteger}
          onChangeText={(text) => {
            responseItem.answer[0].valueInteger = text;
          }}
        />
      );
    case "choice":
      return <Text>Choice</Text>;
  }
}
