import React, { useState } from "react";
import { View, SafeAreaView, Text, TextInput } from "react-native";
import { commonStyle, questionnaireItemStyle } from "../styles/commonStyle";
import { BottomNavigationView } from "../components/BottomNavigationView";
import { previewScreenRoute } from "../navigation/Navigation";
import { useSelector, useDispatch } from "react-redux";

export default function RegistrationScreen() {
  const registeredPatient = useSelector((state) => state.patientData.patient);
  const dispatch = useDispatch();

  // console.log(JSON.stringify(Patient));
  return (
    <SafeAreaView style={commonStyle.body}>
      <View style={commonStyle.header}></View>
      <View style={commonStyle.section}>
        <TextInput
          placeholder="Name"
          style={questionnaireItemStyle.textInput}
          value={registeredPatient.name[0].family}
          onChangeText={(text) => {
            dispatch({ type: "CHANGE_PATIENTS_FAMILY_NAME", payload: text });
          }}
        />
        <TextInput
          placeholder="Given Name"
          style={questionnaireItemStyle.textInput}
          value={registeredPatient.name[0].given[0]}
          onChangeText={(text) => {
            dispatch({ type: "CHANGE_PATIENTS_GIVEN_NAME", payload: text });
          }}
        />
        <TextInput
          placeholder="Date of Birth"
          style={questionnaireItemStyle.textInput}
          value={registeredPatient.birthDate}
          onChangeText={(text) => {
            dispatch({ type: "CHANGE_PATIENTS_BIRTHDATE", payload: text });
          }}
        />
        <TextInput
          placeholder="Insurance Number"
          style={questionnaireItemStyle.textInput}
          value={registeredPatient.identifier[0].value}
          maxLength={10}
          inputMode="numeric"
          onChangeText={(text) => {
            dispatch({
              type: "CHANGE_PATIENTS_INSURANCE_NUMBER",
              payload: text,
            });
          }}
        />
      </View>
      <View style={commonStyle.footer}>
        <BottomNavigationView navigateTo={previewScreenRoute} />
      </View>
    </SafeAreaView>
  );
}
