import React, { useState } from "react";
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

export default function RadioButtons({ options, onSelect }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <View style={questionnaireItemStyle.radioButtonView}>
      {options.map((option) => (
        <RadioButton
          key={option.display}
          text={option.display}
          selected={option.code === selectedOption}
          onSelect={() => handleSelect(option.code)}
        />
      ))}
    </View>
  );
}
