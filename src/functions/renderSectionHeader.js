import React from 'react';
import { View, Text } from 'react-native';
import { commonStyle, fontStyle } from '../styles/commonStyle';

// Define renderSectionHeader function outside of the component's return statement
export default function renderSectionHeader({ section: { title } }) { 
    return (
    <View style={commonStyle.sectionHeading}>
        <Text style={fontStyle.h2}>{title}</Text>
    </View>
)
};