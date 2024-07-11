import React from "react";
import { View, Text, SafeAreaView, SectionList } from "react-native";
import { commonStyle, fontStyle } from "../styles/commonStyle";
import { BottomNavigationView } from "../components/BottomNavigationView";
import { agreementScreenRoute } from "../navigation/Navigation";
import { useSelector } from "react-redux";
import { textsInPatientsChosenLanguage } from "../assets/translationTexts/textsInPatientsChosenLanguage";
import MedBuddyCornerLogo from "../components/MedBuddyCornerLogo";

export default function OverviewScreen() {
  const updatedQuestionnaireResponse = useSelector(
    (state) => state.questionnaireResponse
  );
  const registeredPatient = useSelector((state) => state.patient);
  const language = registeredPatient.communication[0].language.coding[0].code;
  const translatedQuestionnaireTexts =
    textsInPatientsChosenLanguage[language].questionnaireScreen.questionnaire;
  const translatedPatientTexts =
    textsInPatientsChosenLanguage[language].registrationScreen;
  const translatedOverviewTexts =
    textsInPatientsChosenLanguage[language].overviewSectionHeadings;

  function findAnswerByLinkId(linkId) {
    for (const item of updatedQuestionnaireResponse.item) {
      for (const subItem of item.item || []) {
        if (subItem.linkId === linkId) {
          return (
            subItem.answer?.[0]?.valueCoding?.code ||
            subItem.answer?.[0]?.valueInteger ||
            subItem.answer?.[0]?.valueString ||
            "N/A"
          );
        }
      }
    }
    return "N/A";
  }

  const overviewScreenFields = [
    {
      title: translatedOverviewTexts["oSH.1"],
      key: "personalInformation",
      data: [
        {
          text: translatedPatientTexts["p.1.1"],
          answer: registeredPatient.name[0].given[0],
          key: "p.1.1",
        },
        {
          text: translatedPatientTexts["p.1.2"],
          answer: registeredPatient.name[0].family,
          key: "p.1.2",
        },
        {
          text: translatedPatientTexts["p.1.3"],
          answer: registeredPatient.identifier[0].value,

          key: "p.1.3",
        },
        {
          text: translatedPatientTexts["p.1.4"],
          answer: registeredPatient.birthDate,
          key: "p.1.4",
        },
        {
          text: translatedPatientTexts["p.1.5"],
          answer: registeredPatient.gender,
          key: "p.1.5",
        },
        {
          key: "q.1.1",
          text: translatedQuestionnaireTexts["q.1.1"],
          answer: findAnswerByLinkId("q.1.1"),
        },
        {
          key: "q.1.2",
          text: translatedQuestionnaireTexts["q.1.2"],
          answer: findAnswerByLinkId("q.1.2"),
        },
        {
          key: "q.1.3",
          text: translatedQuestionnaireTexts["q.1.3"],
          answer: findAnswerByLinkId("q.1.3"),
        },
      ],
    },
    {
      title: translatedOverviewTexts["oSH.2"],
      key: "examinations",
      data: [
        {
          key: "q.2.1",
          text: translatedQuestionnaireTexts["q.2.1"],
          answer: findAnswerByLinkId("q.2.1"),
        },
        {
          key: "q.2.2",
          text: translatedQuestionnaireTexts["q.2.2"],
          answer: findAnswerByLinkId("q.2.2"),
        },
        {
          key: "q.2.3",
          text: translatedQuestionnaireTexts["q.2.3"],
          answer: findAnswerByLinkId("q.2.3"),
        },
        {
          key: "q.2.4",
          text: translatedQuestionnaireTexts["q.2.4"],
          answer: findAnswerByLinkId("q.2.4"),
        },
      ],
    },
    {
      title: translatedOverviewTexts["oSH.3"],
      key: "medicalConditions",
      data: [
        {
          key: "q.3.1",
          text: translatedQuestionnaireTexts["q.3.1"],
          answer: findAnswerByLinkId("q.3.1"),
        },
        {
          key: "q.3.2",
          text: translatedQuestionnaireTexts["q.3.2"],
          answer: findAnswerByLinkId("q.3.2"),
        },
        {
          key: "q.3.3",
          text: translatedQuestionnaireTexts["q.3.3"],
          answer: findAnswerByLinkId("q.3.3"),
        },
        {
          key: "q.3.4",
          text: translatedQuestionnaireTexts["q.3.4"],
          answer: findAnswerByLinkId("q.3.4"),
        },
      ],
    },
    {
      title: translatedOverviewTexts["oSH.4"],
      key: "medicationAndDevices",
      data: [
        {
          key: "q.4.1",
          text: translatedQuestionnaireTexts["q.4.1"],
          answer: findAnswerByLinkId("q.4.1"),
        },
        {
          key: "q.4.2",
          text: translatedQuestionnaireTexts["q.4.2"],
          answer: findAnswerByLinkId("q.4.2"),
        },
        {
          key: "q.4.3",
          text: translatedQuestionnaireTexts["q.4.3"],
          answer: findAnswerByLinkId("q.4.3"),
        },
        {
          key: "q.4.4",
          text: translatedQuestionnaireTexts["q.4.4"],
          answer: findAnswerByLinkId("q.4.4"),
        },
        {
          key: "q.4.5",
          text: translatedQuestionnaireTexts["q.4.5"],
          answer: findAnswerByLinkId("q.4.5"),
        },
        {
          key: "q.4.6",
          text: translatedQuestionnaireTexts["q.4.6"],
          answer: findAnswerByLinkId("q.4.6"),
        },
      ],
    },
    {
      title: translatedOverviewTexts["oSH.5"],
      key: "additionalQuestions",
      data: [
        {
          key: "q.5.1",
          text: translatedQuestionnaireTexts["q.5.1"],
          answer: findAnswerByLinkId("q.5.1"),
        },
        {
          key: "q.5.2",
          text: translatedQuestionnaireTexts["q.5.2"],
          answer: findAnswerByLinkId("q.5.2"),
        },
      ],
    },
  ];

  function renderOverviewItem({ item }) {
    switch (item.answer) {
      case "Y":
        item.answer = translatedQuestionnaireTexts["q.yes"];
        break;
      case "N":
        item.answer = translatedQuestionnaireTexts["q.no"];
        break;
      case "ASKU":
        item.answer = translatedQuestionnaireTexts["q.idk"];
        break;
      case "male":
        item.answer = translatedPatientTexts["p.male"];
        break;
      case "female":
        item.answer = translatedPatientTexts["p.female"];
        break;
      case "other":
        item.answer = translatedPatientTexts["p.other"];
        break;
      default:
        item.answer = item.answer;
    }
    return (
      <View>
        <Text style={fontStyle.p}>{item.text}</Text>
        <Text style={fontStyle.p2}>{item.answer}</Text>
      </View>
    );
  }

  function renderOverviewSectionHeader({ section }) {
    return (
      <View style={fontStyle.h2}>
        <Text style={fontStyle.h2}>{section.title}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={commonStyle.body}>
      <View style={commonStyle.header}>
        <MedBuddyCornerLogo />
      </View>
      <View style={commonStyle.section}>
        <SectionList
          style={{ marginBottom: 30, width: "100%" }}
          sections={overviewScreenFields}
          keyExtractor={(item) => item.key}
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
