import React from "react";
import { Text, TextInput } from "react-native";
import { questionnaireItemStyle } from "../styles/commonStyle";

export default function renderUserInput({
  qItem,
  currentQuestionnaireResponseSection,
}) {
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
