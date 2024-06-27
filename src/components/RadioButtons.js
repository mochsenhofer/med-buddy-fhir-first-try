import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { questionnaireItemStyle } from "../styles/commonStyle";

function RadioButton({ text, selected, onSelect }) {
  return (
    <TouchableOpacity
      style={[
        questionnaireItemStyle.radioButton,
        selected && questionnaireItemStyle.radioButtonSelected,
      ]}
      onPress={onSelect}
    >
      <Text
        style={[
          questionnaireItemStyle.radioButtonText,
          selected && questionnaireItemStyle.radioButtonSelectedText,
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}

export default function RadioButtons({ options, currentValue, onSelect }) {
  const [selectedOption, setSelectedOption] = useState(currentValue);

  useEffect(() => {
    setSelectedOption(currentValue);
  }, [currentValue]);

  const handleSelect = (code) => {
    setSelectedOption(code);
    onSelect(code);
  };

  return (
    <View style={questionnaireItemStyle.radioButtonView}>
      {options.map((option) => (
        <RadioButton
          key={option.valueCoding.code}
          text={option.valueCoding.display}
          selected={option.valueCoding.code === selectedOption}
          onSelect={() => handleSelect(option.valueCoding.code)}
        />
      ))}
    </View>
  );
}
