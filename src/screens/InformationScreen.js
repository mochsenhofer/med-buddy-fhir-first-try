import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  SafeAreaView,
  SectionList,
  Text,
  View,
} from "react-native";
import { BottomNavigationView } from "../components/BottomNavigationView";
import renderSectionHeader from "../functions/renderSectionHeader";
import useQuestionnaireData from "../hooks/useQuestionnaireData";
import { questionnaireScreenRoute } from "../navigation/Navigation";
import { commonStyle } from "../styles/commonStyle";
import renderInformationItem from "../functions/renderInformationItem";

export default function InformationScreen() {
  const { informationSections } = useQuestionnaireData();
  const [page, setPage] = useState(0);
  const navigation = useNavigation();
  const totalNumberOfPages = informationSections.length - 1;
  const currentInformationSection = [informationSections[page]];

  function handleNextButtonPress() {
    // Check if it's the last page before navigating
    if (page < totalNumberOfPages) {
      setPage(page + 1);
    } else {
      // Navigate to the next screen
      navigation.navigate(questionnaireScreenRoute);
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

  return (
    <SafeAreaView style={commonStyle.body}>
      <View style={commonStyle.header}>
        <Text>Information</Text>
      </View>
      <KeyboardAvoidingView style={commonStyle.section}>
        <SectionList
          sections={currentInformationSection}
          keyExtractor={(item, index) => item + index}
          renderItem={renderInformationItem}
          renderSectionHeader={renderSectionHeader}
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
