import React from "react";
import { Text, TextInput } from "react-native";
import { questionnaireItemStyle } from "../styles/commonStyle";

export default function renderUserInput({
  qItem,
  currentQuestionnaireResponseStateSection,
  updateState,
}) {
  const currentResponseItem =
    currentQuestionnaireResponseStateSection[0].data.find(
      (qRitem) => qRitem.linkId === qItem.linkId
    );

  const currentResponseItemValue = currentResponseItem.answer[0];

  switch (qItem.type) {
    case "integer":
      return (
        <TextInput
          style={questionnaireItemStyle.textInput}
          keyboardType="numeric"
          placeholder="Enter a number"
          maxLength={qItem.maxLength}
          value={
            currentResponseItemValue.valueInteger !== undefined
              ? currentResponseItemValue.valueInteger.toString()
              : ""
          }
          onChangeText={(text) => {
            const newValue = text;
            updateState(newValue, currentResponseItem.linkId, qItem.type);
          }}
        />
      );
    case "string":
      return (
        <TextInput
          style={questionnaireItemStyle.textInput}
          placeholder="Enter text"
          value={currentResponseItemValue.valueString}
          onChangeText={(text) => {
            const newValue = text;
            updateState(newValue, currentResponseItem.linkId, qItem.type);
          }}
        />
      );
    case "choice":
      return <Text>Choice</Text>;
    default:
      return null; // Handle other types if necessary
  }
}
