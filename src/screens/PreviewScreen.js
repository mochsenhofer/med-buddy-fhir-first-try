import React from "react";
import {
  View,
  SafeAreaView,
  Text,
  KeyboardAvoidingView,
  SectionList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { commonStyle } from "../styles/commonStyle";
import { BottomNavigationView } from "../components/BottomNavigationView";
import {
  informationScreenRoute,
  videoScreenRoute,
} from "../navigation/Navigation";
import { useSelector } from "react-redux";
import { textsInPatientsChosenLanguage } from "../assets/translationTexts/textsInPatientsChosenLanguage";
import renderSectionHeader from "../functions/renderSectionHeader";
import renderInformationItem from "../functions/renderInformationItem";
import renderPreviewScreenItem from "../functions/renderPreviewScreenItem";

export default function PreviewScreen() {
  const registeredPatient = useSelector((state) => state.patient);
  const language = registeredPatient.communication[0].language.coding[0].code;
  const translatedPreviewTexts =
    textsInPatientsChosenLanguage[language].previewScreen;
  console.log("registeredPatient", registeredPatient);

  const previewSections = [
    {
      title: translatedPreviewTexts["heading"],
      data: [
        {
          text: translatedPreviewTexts["text"],
          videoBoxText: translatedPreviewTexts["watchVideo"],
          readInfoBoxText: translatedPreviewTexts["readInformation"],
          videoImage: require("../assets/images/english.png"),
          readInfoImage: require("../assets/images/austria.png"),
        },
      ],
    },
  ];

  return (
    <SafeAreaView style={commonStyle.body}>
      <View style={commonStyle.header}></View>
      <KeyboardAvoidingView style={commonStyle.section} behavior="padding">
        <SectionList
          sections={previewSections}
          keyExtractor={(item, index) => item + index}
          renderItem={renderPreviewScreenItem}
          renderSectionHeader={renderSectionHeader}
          scrollEnabled={false}
        />
      </KeyboardAvoidingView>
      <View style={commonStyle.footer}></View>
    </SafeAreaView>
  );
}
