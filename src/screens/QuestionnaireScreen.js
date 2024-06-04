import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  SafeAreaView,
  SectionList,
  View,
} from "react-native";
import { BottomNavigationView } from "../components/BottomNavigationView";
import { questionnaireSections } from "../fhir-resources/Questionnaire";
import { QuestionnaireResponse } from "../fhir-resources/QuestionnaireResponse";
import renderQuestionnaireItem from "../functions/renderQuestionnaireItem";
import renderSectionHeader from "../functions/renderSectionHeader";
import { overviewScreenRoute } from "../navigation/Navigation";
import { commonStyle } from "../styles/commonStyle";

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
      navigation.navigate({ overviewScreenRoute });
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

  // Define current questionnaire section
  const currentQuestionnaireSection = [questionnaireSections[page]];
  const currentQuestionnaireSectionLinkId =
    currentQuestionnaireSection[0].linkId;

  // Define questionnaire response state sections
  const questionnaireResponseStateSections =
    questionnaireResponseState.item.map((qRSitem) => ({
      title: qRSitem.text, // Use 'text' as the title for the section
      linkId: qRSitem.linkId, // Use 'linkId' as the key for the section
      data: qRSitem.item ? qRSitem.item : [], // Pass the full item objects if they exist
    }));

  // const currentQuestionnaireResponseStateSection = [
  //   questionnaireResponseStateSections[page],
  // ];

  const currentQuestionnaireResponseStateSection =
    questionnaireResponseStateSections.filter(
      (qRSsection) => qRSsection.linkId === currentQuestionnaireSectionLinkId
    );

  console.log(
    "currentQuestionnaireResponseStateSection",
    JSON.stringify(currentQuestionnaireResponseStateSection[0].data)
  );

  function updateState(newValue, linkId) {
    setQuestionnaireResponseState((prevState) => {
      const updatedState = { ...prevState };
      const section = updatedState.item.find(
        (qRSitem) => qRSitem.linkId === currentQuestionnaireSectionLinkId
      );
      const item = section.item.find((qRitem) => qRitem.linkId === linkId);
      if (item) {
        item.answer[0].valueInteger = newValue;
      }
      return updatedState;
    });
  }

  return (
    <SafeAreaView style={commonStyle.body}>
      <View style={commonStyle.header}></View>
      <KeyboardAvoidingView behavior="padding" style={commonStyle.section}>
        <SectionList
          sections={currentQuestionnaireSection}
          keyExtractor={(qItem, index) => qItem + index}
          renderItem={({ item }) =>
            renderQuestionnaireItem({
              qItem: item,
              currentQuestionnaireSectionLinkId,
              currentQuestionnaireResponseStateSection,
              updateState,
            })
          }
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
