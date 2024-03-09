import React from "react";
import { View, SafeAreaView } from "react-native";
import { commonStyle } from "../styles/commonStyle";
import { BottomNavigationView } from "../components/BottomNavigationView";
import { informationScreenRoute, videoScreenRoute } from "../navigation/Navigation";


export default function PreviewScreen() {
    return (
        <SafeAreaView style={commonStyle.body}>
            <View style={commonStyle.header}></View>
            <View style={commonStyle.section}></View>
            <View style={commonStyle.footer}>
                <BottomNavigationView navigateTo={informationScreenRoute}/>
            </View>
        </SafeAreaView>
    );
}