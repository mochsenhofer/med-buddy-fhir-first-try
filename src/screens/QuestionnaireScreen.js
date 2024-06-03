import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  SectionList,
  KeyboardAvoidingView,
} from "react-native";
import { commonStyle } from "../styles/commonStyle";
import { BottomNavigationView } from "../components/BottomNavigationView";
import { overviewScreenRoute } from "../navigation/Navigation";
import { questionnaireSections } from "../fhir-resources/Questionnaire";
import renderQuestionnaireItem from "../functions/renderQuestionnaireItem";
import renderSectionHeader from "../functions/renderSectionHeader";
import { useNavigation } from "@react-navigation/native";
import { QuestionnaireResponse } from "../fhir-resources/QuestionnaireResponse";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

export default function QuestionnaireScreen() {
  const [questionnaireResponseState, setQuestionnaireResponseState] = useState(
    QuestionnaireResponse
  );
  const navigation = useNavigation();
  const [page, setPage] = useState(0);
  const totalNumberOfPages = questionnaireSections.length - 1;

  function handleNextButtonPress() {
    // Check if it's the last page before navigating
    if (page < totalNumberOfPages) {
      setPage(page + 1);
    } else {
      // Navigate to the next screen
      navigation.navigate(overviewScreenRoute);
    }
  }

  function handleBackButtonPress() {
    // Check if you are on the first page
    if (page > 0) {
      // If not, go back one page
      setPage(page - 1);
    } else {
      // If on the first page, go back in navigation
      navigation.goBack();
    }
  }

  const currentQuestionnaireSection = [questionnaireSections[page]];

  return (
    <SafeAreaView style={commonStyle.body}>
      <View style={commonStyle.header}></View>
      <KeyboardAvoidingView behavior="padding" style={commonStyle.section}>
        <SectionList
          sections={currentQuestionnaireSection}
          keyExtractor={(item, index) => item + index}
          renderItem={renderQuestionnaireItem}
          renderSectionHeader={renderSectionHeader}
          stickySectionHeadersEnabled={false}
        />
      </KeyboardAvoidingView>
      <View style={commonStyle.footer}>
        <BottomNavigationView
          primaryButtonPressed={handleNextButtonPress}
          secondaryButtonPressed={handleBackButtonPress}
          page={`${page + 1}`}
        />
      </View>
    </SafeAreaView>
  );
}
