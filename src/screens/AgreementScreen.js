import React, { useState } from "react";
import { View, SafeAreaView, Text, SectionList } from "react-native";
import { commonStyle } from "../styles/commonStyle";
import { BottomNavigationView } from "../components/BottomNavigationView";
import { faqScreenRoute } from "../navigation/Navigation";
import { Link, useNavigation } from "@react-navigation/native";
import renderSectionHeader from "../functions/renderSectionHeader";
import renderInformationItem from "../functions/renderInformationItem";
import useQuestionnaireData from "../hooks/useQuestionnaireData";
import { renderUserInput } from "../functions/renderUserInput";
import RadioButtons from "../components/RadioButtons";

export default function AgreementScreen() {
  const navigation = useNavigation();
  const [primaryButtonPressed, setPrimaryButtonPressed] = useState(false);
  const { consentSections } = useQuestionnaireData();
  const [page, setPage] = useState(0);

  const consentSection = consentSections.map((section) => {
    section.linkId = "consent";
    return section;
  });

  const consentSectionTitle = consentSection[0].title;

  const currentConsentSectionText = consentSection[page].text;

  function handlePrimaryButtonPressed() {
    if (primaryButtonPressed) {
      navigation.navigate(faqScreenRoute);
    } else {
      setPrimaryButtonPressed(true);
    }
  }

  function handleSecondaryButtonPressed() {
    if (primaryButtonPressed) {
      setPrimaryButtonPressed(false);
    } else {
      navigation.goBack();
    }
  }

  function renderConsentItem({ item }) {
    console.log("renderConsentItem");
    return (
      <View style={commonStyle.section}>
        <Text>{item.text}</Text>
        <RadioButtons
          options={item.answerOption}
          selectedOption={item.answer}
          onSelect={(option) => console.log(option)}
        />
      </View>
    );
  }

  return (
    <SafeAreaView style={commonStyle.body}>
      <View style={commonStyle.header}></View>
      <View style={commonStyle.section}>
        {primaryButtonPressed ? (
          <Text>Primary button pressed</Text>
        ) : (
          <SectionList
            style={{ width: "100%" }}
            sections={consentSections}
            keyExtractor={(item, index) => item + index}
            renderItem={renderConsentItem}
            renderSectionHeader={renderSectionHeader}
          />
        )}
      </View>
      <View style={commonStyle.footer}>
        <BottomNavigationView
          secondaryButtonPressed={handleSecondaryButtonPressed}
          primaryButtonPressed={handlePrimaryButtonPressed}
        />
      </View>
    </SafeAreaView>
  );
}
