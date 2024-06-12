import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { questionnaireItemStyle } from "../styles/commonStyle";

function RadioButton({ label, onPress, isSelected }) {
  return (
    <TouchableOpacity
      style={[
        questionnaireItemStyle.radioButton,
        isSelected && questionnaireItemStyle.radioButtonSelected,
      ]}
      onPress={onPress}
    >
      <Text style={questionnaireItemStyle.radioButtonText}>{label}</Text>
    </TouchableOpacity>
  );
}

export default function RadioButtons({ options, qItem, qrItem, updateState }) {
  const [selectedValue, setSelectedValue] = useState(
    qrItem.answer[0].valueCoding.code
  );

  return (
    <View style={questionnaireItemStyle.radioButtonView} key={qItem.linkId}>
      {options.map((option, index) => (
        <RadioButton
          key={index + "," + qItem.linkId}
          label={option.valueCoding.code}
          isSelected={selectedValue === option.valueCoding.code}
          onPress={() => {
            const newValue = option.valueCoding.code;
            setSelectedValue(newValue);
            updateState(newValue, qrItem.linkId, qItem.type);
          }}
        />
      ))}
    </View>
  );
}
