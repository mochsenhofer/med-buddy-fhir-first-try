import React from "react";
import { View, SafeAreaView } from "react-native";
import { commonStyle } from "../styles/commonStyle";
import { BottomNavigationView } from "../components/BottomNavigationView";
import { previewScreenRoute } from "../navigation/Navigation";
import { Patient } from "../fhir-resources/Patient";


export default function RegistrationScreen() {
    console.log(JSON.stringify(Patient));
    return (
        <SafeAreaView style={commonStyle.body}>
            <View style={commonStyle.header}></View>
            <View style={commonStyle.section}></View>
            <View style={commonStyle.footer}>
                <BottomNavigationView navigateTo={previewScreenRoute}/>
            </View>
        </SafeAreaView>
    );
}