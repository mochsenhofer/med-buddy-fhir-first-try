import React from "react";
import {
  KeyboardAvoidingView,
  SafeAreaView,
  SectionList,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import { textsInPatientsChosenLanguage } from "../assets/translationTexts/textsInPatientsChosenLanguage";
import MedBuddyCornerLogo from "../components/MedBuddyCornerLogo";
import renderPreviewScreenItem from "../functions/renderPreviewScreenItem";
import renderSectionHeader from "../functions/renderSectionHeader";
import { commonStyle } from "../styles/commonStyle";

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
        },
      ],
    },
  ];

  return (
    <SafeAreaView style={commonStyle.body}>
      <View style={commonStyle.header}>
        <MedBuddyCornerLogo />
      </View>
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
