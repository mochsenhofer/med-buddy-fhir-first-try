import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  SafeAreaView,
  SectionList,
  Text,
  TextInput,
  View,
  Alert,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { BottomNavigationView } from "../components/BottomNavigationView";
import RadioButtons from "../components/RadioButtons";
import useQuestionnaireData from "../hooks/useQuestionnaireData";
import renderSectionHeader from "../functions/renderSectionHeader";
import { faqScreenRoute } from "../navigation/Navigation";
import {
  updateValueCoding,
  updateValueInteger,
  updateValueString,
} from "../store/questionnaireResponseReducer";
import { commonStyle, questionnaireItemStyle } from "../styles/commonStyle";
import { findResponseItem } from "../functions/findResponseItem";

export default function AgreementScreen() {
  const { consentSections } = useQuestionnaireData();
  const [page, setPage] = useState(0);
  const navigation = useNavigation();
  const totalNumberOfPages = consentSections.length - 1;
  const currentQuestionnaireSection = [consentSections[page]];
  const questionnaireResponseInProgress = useSelector(
    (state) => state.questionnaireResponse || {}
  );
  const dispatch = useDispatch();

  function handleNextButtonPress() {
    // Check if it's the last page before navigating
    if (page < totalNumberOfPages) {
      setPage(page + 1);
    } else {
      // Navigate to the next screen
      Alert.alert("Alert Title", "My Alert Msg", [
        {
          text: "Finish",
          style: "destructive",
          onPress: navigation.navigate(faqScreenRoute),
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
      ]);
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

  function getValueByLinkId(item) {
    const responseItem = findResponseItem(
      item.linkId,
      questionnaireResponseInProgress.item || []
    );
    if (responseItem && responseItem.answer && responseItem.answer[0]) {
      switch (item.type) {
        case "integer":
          return responseItem.answer[0].valueInteger
            ? responseItem.answer[0].valueInteger.toString()
            : "";
        case "string":
          return responseItem.answer[0].valueString || "";
        case "choice":
          return responseItem.answer[0].valueCoding
            ? responseItem.answer[0].valueCoding.code
            : "";
        default:
          return "";
      }
    }
    return "";
  }

  function renderUserInputQuestionnaire({ item }) {
    const value = getValueByLinkId(item);

    switch (item.type) {
      case "integer":
        return (
          <TextInput
            style={questionnaireItemStyle.textInput}
            maxLength={item.maxLength}
            placeholder={item.text}
            keyboardType="numeric"
            value={value}
            onChangeText={(text) => {
              dispatch(
                updateValueInteger({
                  linkId: item.linkId,
                  value: parseInt(text),
                })
              );
            }}
          />
        );
      case "string":
        return <Text>Signature Canvas</Text>;

      case "choice":
        return (
          <RadioButtons
            options={item.answerOption}
            currentValue={value}
            onSelect={(option) =>
              dispatch(
                updateValueCoding({ linkId: item.linkId, value: option })
              )
            }
          />
        );
      default:
        return null;
    }
  }

  function renderQuestionnaireAndQuestionnaireResponseItem({ item }) {
    return (
      <View style={questionnaireItemStyle.questionContainer}>
        <Text style={questionnaireItemStyle.questionText}>{item.text}</Text>
        {renderUserInputQuestionnaire({ item })}
      </View>
    );
  }

  return (
    <SafeAreaView style={commonStyle.body}>
      <View style={commonStyle.header}>
        <Text>Questionnaire</Text>
      </View>
      <KeyboardAvoidingView style={commonStyle.section} behavior="padding">
        <SectionList
          sections={currentQuestionnaireSection}
          keyExtractor={(item) => item.linkId}
          renderSectionHeader={renderSectionHeader}
          renderItem={renderQuestionnaireAndQuestionnaireResponseItem}
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
