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
import {
  Questionnaire,
  questionnaireSections,
} from "../fhir-resources/Questionnaire";
import renderQuestionnaireItem from "../functions/renderQuestionnaireItem";
import renderSectionHeader from "../functions/renderSectionHeader";
import { useNavigation } from "@react-navigation/native";
import { QuestionnaireResponse } from "../fhir-resources/QuestionnaireResponse";

export default function QuestionnaireScreen() {
  const navigation = useNavigation();
  const [page, setPage] = useState(0);
  const [response, setResponse] = useState(QuestionnaireResponse);
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

  /**
   * Get a section by its linkId
   * @param {string} linkId - The linkId of the question in the format "x"
   */
  function getSectionById(linkId) {
    return Questionnaire.item.find((item) => item.linkId === linkId);
  }

  /**
   * Get a question by its linkId
   * @param {string} linkId - The linkId of the question in the format "x.x"
   */
  function getQuestionById(linkId) {
    const sectionId = linkId.split(".")[0];
    const section = getSectionById(sectionId);

    return section.item.find((item) => item.linkId === linkId);
  }

  /**
   * Get a response section by its linkId
   * @param {string} linkId - The linkId of the section in the format "x"
   */
  function getResponseSectionById(linkId) {
    return response.item.find((item) => item.linkId === linkId);
  }

  /**
   * @param {string} linkId Id of a question of the format "x.x"
   */
  function getQuestionResponseById(linkId) {
    const sectionId = linkId.split(".")[0];
    const section = getResponseSectionById(sectionId);

    return section.item.find((item) => item.linkId === linkId);
  }

  function onQuestionValueChanged({ linkId, value }) {
    const sectionId = linkId.split(".")[0];

    const newResponse = {
      ...response,
      item: response.item.map((section) => {
        if (section.linkId !== sectionId) return section;

        return {
          ...section,
          item: section.item.map((questionResponse) => {
            if (questionResponse.linkId !== linkId) return questionResponse;

            return {
              ...questionResponse,
              answer: [
                {
                  // TODO: Make a switch here depending on question type
                  valueInteger: value,
                },
              ],
            };
          }),
        };
      }),
    };

    setResponse(newResponse);
  }

  const currentQuestionnaireSection = [questionnaireSections[page]];

  return (
    <SafeAreaView style={commonStyle.body}>
      <View style={commonStyle.header}></View>
      <KeyboardAvoidingView behavior="padding" style={commonStyle.section}>
        <SectionList
          sections={currentQuestionnaireSection}
          keyExtractor={(item, index) => item + index}
          renderItem={(listItem) => {
            const question = listItem.item;
            return renderQuestionnaireItem({
              question,
              response: getQuestionResponseById(question.linkId),
              onChange: onQuestionValueChanged,
            });
          }}
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
