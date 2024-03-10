import React from "react";
import { View, SafeAreaView, SectionList, Text } from "react-native";
import { commonStyle } from "../styles/commonStyle";
import { BottomNavigationView } from "../components/BottomNavigationView";
import { overviewScreenRoute } from "../navigation/Navigation";
import { questionnaireSections } from "../fhir-resources/Questionnaire";


// Define renderItem function outside of the component's return statement
const renderItem = ({ item }) => (
    <View style={commonStyle.sectionContainer}>
        <Text style={commonStyle.text}>{item}</Text>
    </View>
);

// Define renderSectionHeader function outside of the component's return statement
function renderSectionHeader({ section: { title } }) { 
    return (
    <View style={commonStyle.sectionHeader}>
        <Text style={commonStyle.sectionHeaderText}>{title}</Text>
    </View>
)
};

export default function QuestionnaireScreen() {

    const currentQuestionnaireSection = [questionnaireSections[0]];
    console.log(currentQuestionnaireSection);

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
