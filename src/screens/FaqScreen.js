import React from "react";
import { View, Text, SafeAreaView, Alert } from "react-native";
import { commonStyle } from "../styles/commonStyle";
import { PrimaryButton } from "../components/BottomNavigationView";
import { DevSettings } from "react-native";

export default function FaqScreen() {
  function finishQuestionnaire() {
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Finish",
        style: "destructive",
        onPress: () => DevSettings.reload(),
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
    ]);
  }
  return (
    <SafeAreaView style={commonStyle.body}>
      <View style={commonStyle.header}>
        <Text style={commonStyle.title}>FAQ</Text>
      </View>
      <View style={commonStyle.section}></View>
      <View style={commonStyle.footer}>
        <PrimaryButton
          title="Finish"
          primaryButtonPressed={() => finishQuestionnaire()}
        />
      </View>
    </SafeAreaView>
  );
}
