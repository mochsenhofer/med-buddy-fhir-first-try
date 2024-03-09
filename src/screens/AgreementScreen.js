import React from "react";
import { View, SafeAreaView } from "react-native";
import { commonStyle } from "../styles/commonStyle";
import { BottomNavigationView } from "../components/BottomNavigationView";
import { faqScreenRoute } from "../navigation/Navigation";


export default function AgreementScreen() {
    return (
        <SafeAreaView style={commonStyle.body}>
            <View style={commonStyle.header}></View>
            <View style={commonStyle.section}></View>
            <View style={commonStyle.footer}>
                <BottomNavigationView navigateTo={faqScreenRoute}/>
            </View>
        </SafeAreaView>
    );
}