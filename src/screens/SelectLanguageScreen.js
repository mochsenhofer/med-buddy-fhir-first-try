import React from "react";
import { View, SafeAreaView } from "react-native";
import { commonStyle } from "../styles/commonStyle";
import { BottomNavigationView } from "../components/BottomNavigationView";
import { registrationScreenRoute } from "../navigation/Navigation";
import { Questionnaire } from "../fhir-resources/Questionnaire";
import { QuestionnaireResponse } from "../fhir-resources/QuestionnaireResponse";


export default function SelectLanguageScreen() {
    console.log('Questionnaire: ' + JSON.stringify(Questionnaire));
    console.log('QuestionnaireResponse: ' + JSON.stringify(QuestionnaireResponse));

    return (
        <SafeAreaView style={commonStyle.body}>
            <View style={commonStyle.header}></View>
            <View style={commonStyle.section}></View>
            <View style={commonStyle.footer}>
                <BottomNavigationView navigateTo={registrationScreenRoute}/>
            </View>
        </SafeAreaView>
    );
}