import React from "react";
import { View, SafeAreaView, Text } from "react-native";
import { commonStyle } from "../styles/commonStyle";
import { BottomNavigationView } from "../components/BottomNavigationView";
import {
  informationScreenRoute,
  videoScreenRoute,
} from "../navigation/Navigation";
import { useSelector } from "react-redux";
import { Patient } from "../fhir-resources/Patient";

export default function PreviewScreen() {
  const registeredPatient = useSelector((state) => state.patientData.patient);

  return (
    <SafeAreaView style={commonStyle.body}>
      <View style={commonStyle.header}>
        <Text>{registeredPatient.name[0].family}</Text>
      </View>
      <View style={commonStyle.section}>
        <Text>{JSON.stringify(registeredPatient, 2, null)}</Text>
      </View>
      <View style={commonStyle.footer}>
        <BottomNavigationView navigateTo={informationScreenRoute} />
      </View>
    </SafeAreaView>
  );
}
