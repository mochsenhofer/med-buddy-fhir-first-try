import React, { useRef } from "react";
import {
  KeyboardAvoidingView,
  SafeAreaView,
  SectionList,
  Text,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { BottomNavigationView } from "../components/BottomNavigationView";
import { renderQuestionnaireItem } from "../functions/renderQuestionnaireItem";
import renderSectionHeader from "../functions/renderSectionHeader";
import { overviewScreenRoute } from "../navigation/Navigation";
import { commonStyle } from "../styles/commonStyle";
import { updateSize } from "../store/questionnaireResponseReducer";

export default function QuestionnaireScreen() {
  const questionnaireResponseInProgress = useSelector(
    (state) => state.questionnaireResponse
  );
  const dispatch = useDispatch();

  const questionnaireRefs = {
    size: useRef(null),
    weight: useRef(null),
  };

  const questionnaireItems = [
    {
      title:
        "Please answer the following questions to the best of your knowledge.",
      data: [
        {
          heading: "Size",
          key: "size",
          value: questionnaireResponseInProgress.size,
          placeholder: "Size",
          onChange: (text) => {
            dispatch(updateSize(text));
          },
          autoFocus: true,
          ref: questionnaireRefs.size,
          type: "integer",
          maxLength: 3,
        },
      ],
    },
  ];

  return (
    <SafeAreaView style={commonStyle.body}>
      <View style={commonStyle.header}>
        <Text>Questionnaire</Text>
      </View>
      <KeyboardAvoidingView style={commonStyle.section} behavior="padding">
        <SectionList
          sections={questionnaireItems}
          keyExtractor={(item) => item.key}
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
