import React from "react";
import { Text, TextInput } from "react-native";
import { questionnaireItemStyle } from "../styles/commonStyle";

export default function renderUserInput({
  qItem,
  currentQuestionnaireResponseStateSection,
}) {
  const responseItem = currentQuestionnaireResponseStateSection[0].data.find(
    (qRitem) => qRitem.linkId === qItem.linkId
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
            console.log(
              JSON.stringify(currentQuestionnaireResponseStateSection)
            );
          }}
        />
      );
    case "choice":
      return <Text>Choice</Text>;
  }
}
