import React from "react";
import { Text, TextInput } from "react-native";
import { questionnaireItemStyle } from "../styles/commonStyle";

export default function renderUserInput({
  qItem,
  currentQuestionnaireResponseStateSection,
  setQuestionnaireResponseState,
}) {
  const currentResponseValue =
    currentQuestionnaireResponseStateSection[0].data.find(
      (qRitem) => qRitem.linkId === qItem.linkId
    );

  console.log("currentResponseValue", currentResponseValue);
  console.log(
    "currentQuestionnaireResponseStateSection",
    currentQuestionnaireResponseStateSection
  );

  switch (qItem.type) {
    case "integer":
      return (
        <TextInput
          style={questionnaireItemStyle.textInput}
          keyboardType="numeric"
          placeholder="Enter a number"
          maxLength={qItem.maxLength}
          value={currentResponseValue.valueInteger}
          onChangeText={(text) => {
            currentResponseValue.valueInteger = text;
          }}
        />
      );
    case "choice":
      return <Text>Choice</Text>;
  }
}
