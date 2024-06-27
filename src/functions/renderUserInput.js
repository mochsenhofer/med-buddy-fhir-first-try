import React, { useState } from "react";
import { TextInput, Text, TouchableOpacity } from "react-native";
import { questionnaireItemStyle } from "../styles/commonStyle";
import RadioButtons from "../components/RadioButtons";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export function renderUserInput(item) {
  const [selectedDate, setSelectedDate] = useState(
    item.value ? item.value : "DD-MM-YYYY"
  );
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const handleConfirm = (date) => {
    const day = ("0" + date.getDate()).slice(-2); // Ensure two digits for day
    const month = ("0" + (date.getMonth() + 1)).slice(-2); // Ensure two digits for month
    const year = date.getFullYear();
    setSelectedDate(`${day}-${month}-${year}`);
    item.onChange(`${year}-${month}-${day}`); // Update state with selected date
    setDatePickerVisibility(false);
  };
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
      return (
        <>
          <TouchableOpacity
            style={questionnaireItemStyle.textInput}
            onPress={() => setDatePickerVisibility(true)}
          >
            <Text>{selectedDate}</Text>
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            minimumDate={new Date(1900, 0, 1)} // Set minimum date to 1900-01-01
            maximumDate={new Date()}
            mode="date"
            value={item.value}
            onConfirm={(date) => {
              handleConfirm(date);
            }}
            onCancel={() => setDatePickerVisibility(false)}
          />
        </>
      );
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
