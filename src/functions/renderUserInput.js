import React from "react";
import { TextInput, Text } from "react-native";
import { questionnaireItemStyle } from "../styles/commonStyle";
import RadioButtons from "../components/RadioButtons";

export function renderUserInput(item) {
  switch (item.type) {
    case "string":
    case "integer":
      return (
        <TextInput
          style={questionnaireItemStyle.textInput}
          onChangeText={item.onChange}
          value={item.value}
          placeholder={item.placeholder}
          autoFocus={item.autoFocus}
          ref={item.ref}
          onSubmitEditing={item.onSubmitEditing}
          maxLength={item.maxLength}
          keyboardType={item.type === "integer" ? "numeric" : "default"}
          autoComplete="off"
        />
      );
    case "date":
      return <Text>Datepicker placeholder</Text>;
    case "choice":
      return (
        <RadioButtons
          options={item.options}
          currentValue={item.value}
          onSelect={item.onChange}
        />
      );
    default:
      return null;
  }
}
