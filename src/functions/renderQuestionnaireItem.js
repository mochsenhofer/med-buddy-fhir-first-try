import React from 'react';
import { View, Text } from 'react-native';
import { commonStyle } from '../styles/commonStyle';

// Define renderItem function outside of the component's return statement
export default function renderQuestionnaireItem({ item }) {
    console.log(item)
    return (
    <View style={commonStyle.sectionContainer}>
        <Text style={commonStyle.text}>{item.text}</Text>
        {item.type === "choice" ? <Text >Radio</Text> : null}
        {item.type === "text" ? <Text >Text</Text> : null}
    </View>
);
};