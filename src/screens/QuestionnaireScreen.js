import React from "react";
import { View, SafeAreaView, SectionList, Text } from "react-native";
import { commonStyle } from "../styles/commonStyle";
import { BottomNavigationView } from "../components/BottomNavigationView";
import { overviewScreenRoute } from "../navigation/Navigation";
import { Questionnaire } from "../fhir-resources/Questionnaire";

// Transform Questionnaire data for SectionList
const transformedSections = Questionnaire.item.map((qItem) => ({
    title: qItem.text, // Use 'text' as the title for the section
    data: qItem.item ? qItem.item.map(subItem => subItem.text) : [], // Map sub-items' 'text' to data if they exist
}));

// Define renderItem function outside of the component's return statement
const renderItem = ({ item }) => (
    <View style={commonStyle.sectionContainer}>
        <Text style={commonStyle.text}>{item}</Text>
    </View>
);

// Define renderSectionHeader function outside of the component's return statement
const renderSectionHeader = ({ section: { title } }) => (
    <View style={commonStyle.sectionHeader}>
        <Text style={commonStyle.sectionHeaderText}>{title}</Text>
    </View>
);

export default function QuestionnaireScreen() {

    const currentSection = [transformedSections[0]];
    console.log(currentSection);

    return (
        <SafeAreaView style={commonStyle.body}>
            <View style={commonStyle.header}></View>
            <SectionList
                sections={currentSection}
                keyExtractor={(item, index) => item + index}
                renderItem={renderItem}
                renderSectionHeader={renderSectionHeader}
            />
            <View style={commonStyle.footer}>
                <BottomNavigationView navigateTo={overviewScreenRoute} />
            </View>
        </SafeAreaView>
    );
}
