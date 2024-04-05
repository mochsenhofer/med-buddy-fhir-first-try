import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { questionnaireItemStyle } from "../styles/commonStyle";

function RadioButton({ selected, text, onPress }) { // Changed parameter to onPress for clarity
    return (
        <TouchableOpacity style={questionnaireItemStyle.radioButton} onPress={onPress}>
            <Text style={questionnaireItemStyle.radioButtonText}>{text}</Text>
        </TouchableOpacity>
    );
}

export default function RadioButtons({ options, onSelect }) {
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    function radioButtonPressed(option) { // Now accepts option as an argument
        setSelectedAnswer(option);
        onSelect(option); // Pass the option to the onSelect prop
    }

    return (
        <View style={styles.radioButtonView}>
            {options.map((option, index) => (
                <RadioButton
                    key={index}
                    selected={selectedAnswer === option}
                    text={option.valueCoding.code}
                    onPress={() => radioButtonPressed(option.valueCoding.code)} // Correctly invoking the function on press
                />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    radioButtonView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "80%",
    },
});
