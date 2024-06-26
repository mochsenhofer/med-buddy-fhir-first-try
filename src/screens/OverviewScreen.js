import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { commonStyle } from "../styles/commonStyle";
import { BottomNavigationView } from "../components/BottomNavigationView";
import { agreementScreenRoute } from "../navigation/Navigation";
import { useSelector } from "react-redux";

export default function OverviewScreen() {
  const updatedQuestionnaireResponse = useSelector(
    (state) => state.questionnaireResponse
  );

  return (
    <SafeAreaView style={commonStyle.body}>
      <View style={commonStyle.header}>
        <Text>
          Hello +
          {updatedQuestionnaireResponse.item[0].item[0].answer.valueInteger}
        </Text>
      </View>
      <View style={commonStyle.section}>
        <Text>{JSON.stringify(updatedQuestionnaireResponse)}</Text>
      </View>
      <View style={commonStyle.footer}>
        <BottomNavigationView navigateTo={agreementScreenRoute} />
      </View>
    </SafeAreaView>
  );
}
