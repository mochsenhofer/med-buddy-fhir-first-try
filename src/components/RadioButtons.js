import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { questionnaireItemStyle } from "../styles/commonStyle";
import { useSelector } from "react-redux";
import { textsInPatientsChosenLanguage } from "../assets/translationTexts/textsInPatientsChosenLanguage";

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
  const language = useSelector(
    (state) => state.patient.communication[0].language.coding[0].code
  );
  const translatedPatientTexts =
    textsInPatientsChosenLanguage[language].questionnaireScreen.questionnaire;

  useEffect(() => {
    setSelectedOption(currentValue);
  }, [currentValue]);

  const handleSelect = (code) => {
    setSelectedOption(code);
    onSelect(code);
  };

  return (
    <View style={questionnaireItemStyle.radioButtonView}>
      {options.map((option) => {
        if (option.valueCoding.code === "ASKU") {
          option.valueCoding.display = translatedPatientTexts["q.idk"];
        }
        return (
          <RadioButton
            key={option.valueCoding.code}
            text={option.valueCoding.display}
            selected={option.valueCoding.code === selectedOption}
            onSelect={() => handleSelect(option.valueCoding.code)}
          />
        );
      })}
    </View>
  );
}
