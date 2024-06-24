import React, { useRef, useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  SectionList,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import { questionnaireItemStyle, commonStyle } from "../styles/commonStyle";
import { BottomNavigationView } from "../components/BottomNavigationView";
import { overviewScreenRoute } from "../navigation/Navigation";
import { questionnaireSections } from "../fhir-resources/Questionnaire";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";

export default function QuestionnaireScreen() {
  const navigation = useNavigation();
  const [page, setPage] = useState(0);
  const currentQuestionnaireSection = [questionnaireSections[page]];
  const totalNumberOfPages = questionnaireSections.length - 1;
  const currentQuestionnaireResponseState = useSelector(
    (state) => state.questionnaireResponseData.questionnaireResponse
  );
  const dispatch = useDispatch();
  console.log(JSON.stringify(currentQuestionnaireResponseState.item[0]));

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

  function renderUserInput(item) {
    switch (item.type) {
      case "integer":
        return (
          <TextInput
            keyboardType="numeric"
            style={questionnaireItemStyle.textInput}
            maxLength={item.maxLength}
            key={item.linkId}
            onChangeText={(text) =>
              dispatch({
                type: "CHANGE_QUESTIONNAIRE_RESPONSE_ANSWER_VALUE_INTEGER",
                payload: text,
              })
            }
          />
        );
      case "string":
        return <Text>TextInput</Text>;
      case "choice":
        return <Text>RadioButtons</Text>;
      default:
        return null;
    }
  }
  function renderItem({ item }) {
    return (
      <View>
        <Text>
          {item.text} + {item.linkId}
        </Text>
        {renderUserInput(item)}
      </View>
    );
  }
  function renderSectionHeader({ section }) {
    return <Text>{section.title}</Text>;
  }
  return (
    <SafeAreaView style={commonStyle.body}>
      <View style={commonStyle.header}>
        <Text>Questionnaire</Text>
      </View>
      <KeyboardAvoidingView behavior="padding" style={commonStyle.section}>
        <SectionList
          sections={currentQuestionnaireSection}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
          keyExtractor={(item) => item.linkId}
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
