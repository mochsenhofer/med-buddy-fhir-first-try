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

  console.log("currentResponseItem: ", currentResponseItem);
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
          value={currentResponseItemValue.valueInteger.toString()}
          onChangeText={() => {
            updateState(currentResponseItemValue.valueInteger);
          }}
        />
      );
    case "choice":
      return <Text>Choice</Text>;
  }
}
