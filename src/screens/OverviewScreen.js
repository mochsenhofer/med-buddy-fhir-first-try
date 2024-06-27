import React from "react";
import { View, Text, SafeAreaView, SectionList } from "react-native";
import { commonStyle, fontStyle, overviewStyle } from "../styles/commonStyle";
import { BottomNavigationView } from "../components/BottomNavigationView";
import { agreementScreenRoute } from "../navigation/Navigation";
import { useSelector } from "react-redux";
import { Questionnaire } from "../fhir-resources/Questionnaire";
import useQuestionnaireData from "../components/QuestionnaireComponent";

export default function OverviewScreen() {
  const updatedQuestionnaireResponse = useSelector(
    (state) => state.questionnaireResponse
  );

  const questionnaireSections = useQuestionnaireData().questionnaireSections;

  console.log("questionnaireSections", JSON.stringify(questionnaireSections));
  console.log(
    "Questionnaire.item",
    JSON.stringify(Questionnaire.item, null, 2)
  );

  const updatedQuestionnaireResponseSections =
    updatedQuestionnaireResponse.item.map((uqrsItem) => ({
      title: uqrsItem.text, // Use 'text' as the title for the section
      data: uqrsItem.item, // Use 'item' as the data for the section
    }));

  function findQuestionnaireItemByLinkId(items, linkId) {
    for (const item of items) {
      if (item.linkId === linkId) {
        return item;
      }
      if (item.item) {
        const nestedItem = findQuestionnaireItemByLinkId(item.item, linkId);
        if (nestedItem) {
          return nestedItem;
        }
      }
    }
    return null;
  }

  function getQuestionnaireItemByLinkId(linkId) {
    const questionnaireItem = findQuestionnaireItemByLinkId(
      Questionnaire.item,
      linkId
    );
    return questionnaireItem || {}; // Return an empty object if not found to avoid errors
  }

  function renderOverviewItem({ item }) {
    const questionnaireItem = getQuestionnaireItemByLinkId(item.linkId);

    const renderAnswer = () => {
      switch (questionnaireItem.type) {
        case "integer":
          return (
            <Text style={fontStyle.p}>{item.answer[0]?.valueInteger}</Text>
          );
        case "string":
          return <Text style={fontStyle.p}>{item.answer[0]?.valueString}</Text>;
        case "choice":
          return (
            <Text style={fontStyle.p}>{item.answer[0]?.valueCoding.code}</Text>
          );
        default:
          return <Text>Unknown Type</Text>;
      }
    };

    return (
      <View style={overviewStyle.overviewContainer}>
        <Text style={fontStyle.p}>{questionnaireItem.text}</Text>
        {renderAnswer()}
      </View>
    );
  }

  function renderOverviewSectionHeader({ section: { title } }) {
    return <Text style={fontStyle.h3}>{title}</Text>;
  }

  return (
    <SafeAreaView style={commonStyle.body}>
      <View style={commonStyle.header}>
        <Text>Overview</Text>
      </View>
      <View style={commonStyle.section}>
        <SectionList
          sections={updatedQuestionnaireResponseSections}
          keyExtractor={(item) => item.linkId}
          renderItem={renderOverviewItem}
          renderSectionHeader={renderOverviewSectionHeader}
          stickySectionHeadersEnabled={false}
        />
      </View>
      <View style={commonStyle.footer}>
        <BottomNavigationView navigateTo={agreementScreenRoute} />
      </View>
    </SafeAreaView>
  );
}
