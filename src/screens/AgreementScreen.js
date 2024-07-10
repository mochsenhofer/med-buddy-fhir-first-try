import { useNavigation } from "@react-navigation/native";
import React, { useState, useRef } from "react";
import {
  KeyboardAvoidingView,
  SafeAreaView,
  SectionList,
  Text,
  TextInput,
  View,
  Alert,
  StyleSheet,
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
  updatePatient,
  updateQuestionnaire,
  updateQuestionnaireResponseStatus,
} from "../store/questionnaireResponseReducer";
import { commonStyle, questionnaireItemStyle } from "../styles/commonStyle";
import { findResponseItem } from "../functions/findResponseItem";
import { Canvas } from "@benjeau/react-native-draw";
import { SecondaryButton } from "../components/BottomNavigationView";
import { textsInPatientsChosenLanguage } from "../assets/translationTexts/textsInPatientsChosenLanguage";

export default function AgreementScreen() {
  const { consentSections, Questionnaire } = useQuestionnaireData();
  const [page, setPage] = useState(0);
  const navigation = useNavigation();
  const totalNumberOfPages = consentSections.length - 1;
  const currentQuestionnaireSection = [consentSections[page]];
  const questionnaireResponseInProgress = useSelector(
    (state) => state.questionnaireResponse || {}
  );
  const registeredPatient = useSelector((state) => state.patient);
  const language = registeredPatient.communication[0].language.coding[0].code;
  const translatedConsentTexts =
    textsInPatientsChosenLanguage[language].consentScreen;
  const canvasRef = useRef(null);
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
          onPress: handleSave,
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

  const handleClear = () => {
    canvasRef.current?.clear();
  };

  const handleSave = async () => {
    signature = await canvasRef.current?.getSvg();
    dispatch(updateValueString({ linkId: "c.2.1", value: signature }));
    dispatch(updatePatient(registeredPatient));
    dispatch(updateQuestionnaire(Questionnaire));
    dispatch(updateQuestionnaireResponseStatus("completed"));

    navigation.navigate(faqScreenRoute);
  };

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
        return (
          <View style={styles.canvasContainer}>
            <Canvas
              ref={canvasRef}
              style={styles.signaturePad}
              width={canvasWidth}
              height={canvasHeight}
              roundPoints={true}
            />
            <Text>
              {page === 1 && (
                <Text style={questionnaireItemStyle.questionText}>
                  {translatedConsentTexts["signature"]}{" "}
                </Text>
              )}
            </Text>
          </View>
        );

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
        <Text
          style={[questionnaireItemStyle.questionText, styles.questionText]}
        >
          {item.text}
        </Text>
        {renderUserInputQuestionnaire({ item })}
      </View>
    );
  }

  return (
    <SafeAreaView style={commonStyle.body}>
      <View style={commonStyle.header}>
        <Text>{translatedConsentTexts["c.1"]}</Text>
      </View>
      <KeyboardAvoidingView style={commonStyle.section} behavior="padding">
        <SectionList
          sections={currentQuestionnaireSection}
          keyExtractor={(item) => item.linkId}
          renderSectionHeader={renderSectionHeader}
          renderItem={renderQuestionnaireAndQuestionnaireResponseItem}
          stickySectionHeadersEnabled={false}
          scrollEnabled={false}
        />
        {page === 1 && (
          <SecondaryButton
            secondaryButtonPressed={handleClear}
            text={translatedConsentTexts["clear"]}
            style={{
              bottom: 50,
            }}
          />
        )}
      </KeyboardAvoidingView>
      <View style={commonStyle.footer}>
        <BottomNavigationView
          primaryButtonPressed={handleNextButtonPress}
          secondaryButtonPressed={handleBackButtonPress}
        />
      </View>
    </SafeAreaView>
  );
}

const canvasWidth = 800;
const canvasHeight = 200;

const styles = StyleSheet.create({
  signaturePad: {
    backgroundColor: "white",
    flex: 1,
    width: canvasWidth,
    height: canvasHeight,
    borderRadius: 25,
    borderWidth: 5,
    marginBottom: 5,
  },
  canvasContainer: {
    flex: 1,
    flexDirection: "column",
  },
  questionText: {
    marginBottom: 20,
  },
});
