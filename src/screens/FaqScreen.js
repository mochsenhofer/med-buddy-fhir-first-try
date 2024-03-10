import React from "react";
import { View, SafeAreaView } from "react-native";
import { commonStyle } from "../styles/commonStyle";
import { PrimaryButton } from "../components/BottomNavigationView";
import { homeScreenRoute } from "../navigation/Navigation";


export default function FaqScreen() {
    return (
        <SafeAreaView style={commonStyle.body}>
            <View style={commonStyle.header}></View>
            <View style={commonStyle.section}></View>
            <View style={commonStyle.footer}>
                <PrimaryButton 
                    title="Finish"
                    onPress={() => navigation.navigate(homeScreenRoute)}
                />
            </View>
        </SafeAreaView>
    );
}