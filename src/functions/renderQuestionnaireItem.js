import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { commonStyle, questionnaireItemStyle } from '../styles/commonStyle';
import { QuestionnaireResponse } from '../fhir-resources/QuestionnaireResponse';
import RadioButtons from '../components/RadioButtons';

// Define renderItem function outside of the component's return statement
export default function renderQuestionnaireItem({ item }) {
    return (
    <View style={commonStyle.sectionContainer}>
        <Text style={questionnaireItemStyle.questionText}>{item.text}</Text>
        {renderUserInput(item.type, item.maxLength, item.linkId, item.answerOption)}
    </View>
);
};


function renderUserInput(type, maxLength, linkId, answerOption) {

    console.log("QR: " + JSON.stringify(QuestionnaireResponse.item));


    
    switch (type) {
        case "integer":
            return (
                <TextInput
                    style={questionnaireItemStyle.textInput}
                    keyboardType="numeric"
                    maxLength={maxLength}
                />
            );
        case "string":
            return (
                <TextInput
                    style={questionnaireItemStyle.textInput}
                    keyboardType="default"
                    maxLength={maxLength}
                />
            );
        case "date":
            return (
                <TextInput
                    style={questionnaireItemStyle.textInput}
                    keyboardType="numeric"
                    maxLength={maxLength}
                />
            );
        case "choice":


            return (
                <RadioButtons 
                    options={answerOption} 
                    onSelect={(option) => console.log('Hier '+ option)} // todo: option in QuestionnaireResponse speichern
                />
            );
        default:
            return null;
    }
};