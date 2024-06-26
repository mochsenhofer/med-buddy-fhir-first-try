import React, { useRef } from "react";
import {
  KeyboardAvoidingView,
  SafeAreaView,
  SectionList,
  Text,
  View,
  TextInput,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { BottomNavigationView } from "../components/BottomNavigationView";
import renderSectionHeader from "../functions/renderSectionHeader";
import { overviewScreenRoute } from "../navigation/Navigation";
import { commonStyle } from "../styles/commonStyle";
import { updateProperty } from "../store/questionnaireResponseReducer";
import { questionnaireSections } from "../fhir-resources/Questionnaire";
import { questionnaireItemStyle } from "../styles/commonStyle";

export default function QuestionnaireScreen() {
  const questionnaireResponseInProgress = useSelector(
    (state) => state.questionnaireResponse
  );
  const dispatch = useDispatch();

  function renderQuestionnaireItem({ item }) {
    return (
      <View style={questionnaireItemStyle.questionContainer}>
        <Text style={questionnaireItemStyle.questionText}>{item.text}</Text>
      </View>
    );
  }

  // onChange: (text) => {
  //   dispatch(updateProperty({ linkId: "1.1", value: parseInt(text) }));
  // },

  console.log(JSON.stringify(questionnaireSections));
  return (
    <SafeAreaView style={commonStyle.body}>
      <View style={commonStyle.header}>
        <Text>Questionnaire</Text>
      </View>
      <KeyboardAvoidingView style={commonStyle.section} behavior="padding">
        <SectionList
          sections={questionnaireSections}
          keyExtractor={(item) => item.linkId}
          renderSectionHeader={renderSectionHeader}
          renderItem={renderQuestionnaireItem}
          stickySectionHeadersEnabled={false}
        />
      </KeyboardAvoidingView>
      <View style={commonStyle.footer}>
        <BottomNavigationView navigateTo={overviewScreenRoute} />
      </View>
    </SafeAreaView>
  );
}
