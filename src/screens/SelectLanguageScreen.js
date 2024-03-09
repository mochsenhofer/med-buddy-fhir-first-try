import { View, SafeAreaView } from "react-native";
import { commonStyle } from "../styles/commonStyle";

export default function SelectLanguageScreen() {
    return (
        <SafeAreaView style={commonStyle.body}>
            <View style={commonStyle.header}></View>
            <View style={commonStyle.section}></View>
            <View style={commonStyle.footer}></View>
        </SafeAreaView>
    );
}