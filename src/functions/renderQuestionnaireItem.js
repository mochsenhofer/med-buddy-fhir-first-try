import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { commonStyle, questionnaireItemStyle } from '../styles/commonStyle';
import { QuestionnaireResponse } from '../fhir-resources/QuestionnaireResponse';

// Define renderItem function outside of the component's return statement
export default function renderQuestionnaireItem({ item, onChange }) {
    return (
    <View style={commonStyle.sectionContainer}>
        <Text style={questionnaireItemStyle.questionText}>{item.text}</Text>
        {renderUserInput({ item, onChange })}
    </View>
);
};

function renderUserInput({ item, onChange }) {
    console.log('linkID: ' + item.linkId);
    switch(item.type) {
        case 'integer':
            return (
                <TextInput
                    style={questionnaireItemStyle.textInput}
                    keyboardType='numeric'
                    placeholder='Enter a number'
                    maxLength={item.maxLength}
                    onChangeText={(text) => onChange({linkId: item.linkId, value: text})}
                />
            );
        case 'choice':
            return (
                <Text>Choice</Text>
            );
}
};
