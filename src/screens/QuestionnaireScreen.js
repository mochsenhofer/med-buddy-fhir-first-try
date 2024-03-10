import React, { useState } from "react";
import { View, SafeAreaView, SectionList, Text } from "react-native";
import { commonStyle } from "../styles/commonStyle";
import { BottomNavigationView } from "../components/BottomNavigationView";
import { overviewScreenRoute } from "../navigation/Navigation";
import { questionnaireSections } from "../fhir-resources/Questionnaire";
import renderQuestionnaireItem from "../functions/renderQuestionnaireItem";
import renderSectionHeader from "../functions/renderSectionHeader";
import { useNavigation } from "@react-navigation/native";

export default function QuestionnaireScreen() {

    const navigation = useNavigation();
    const [page, setPage] = useState(0);
    const totalNumberOfPages = questionnaireSections.length - 1;

    function handleNextButtonPress() {
        // Check if it's the last page before navigating
        if (page < totalNumberOfPages) {
          setPage(page + 1);
          console.log(currentQuestionnaireSection);

        } else {
          // Navigate to the next screen
          console.log(currentQuestionnaireSection);
          navigation.navigate(overviewScreenRoute);
        }
      };

      function handleBackButtonPress() {
        // Check if you are on the first page
        if (page > 0) {
          // If not, go back one page
          setPage(page - 1);
        } else {
          // If on the first page, go back in navigation
          navigation.goBack();
        }
      };

    const currentQuestionnaireSection = [questionnaireSections[page]];
    console.log(currentQuestionnaireSection);

    return (
        <SafeAreaView style={commonStyle.body}>
            <View style={commonStyle.header}></View>
            <View style={commonStyle.section}>
            <SectionList
                sections={currentQuestionnaireSection}
                keyExtractor={(item, index) => item + index}
                renderItem={renderQuestionnaireItem}
                renderSectionHeader={renderSectionHeader}
            />
            </View>
            <View style={commonStyle.footer}>
                <BottomNavigationView primaryButtonPressed={handleNextButtonPress} secondaryButtonPressed={handleBackButtonPress} page={`${page + 1}`}/>
            </View>
        </SafeAreaView>
    );
}
