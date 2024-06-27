import React, { useRef } from "react";
import {
  KeyboardAvoidingView,
  SafeAreaView,
  SectionList,
  Text,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { BottomNavigationView } from "../components/BottomNavigationView";
import { renderQuestionnaireItem } from "../functions/renderQuestionnaireItem";
import renderSectionHeader from "../functions/renderSectionHeader";
import { previewScreenRoute } from "../navigation/Navigation";
import { commonStyle } from "../styles/commonStyle";
import {
  updateBirthDate,
  updateFamilyName,
  updateGender,
  updateGivenName,
  updateInsuranceNumber,
} from "./../store/patientReducer";

export default function RegistrationScreen() {
  const registeredPatient = useSelector((state) => state.patient);
  const dispatch = useDispatch();

  const registrationRefs = {
    givenName: useRef(null),
    familyName: useRef(null),
    insuranceNumber: useRef(null),
    birthDate: useRef(null),
    gender: useRef(null),
  };

  const registrationFormFields = [
    {
      title: "Personal Information",
      data: [
        {
          heading: "Given Name",
          key: "givenName",
          value: registeredPatient.name[0].given[0],
          placeholder: "Given Name",
          onChange: (text) => dispatch(updateGivenName(text)),
          autoFocus: true,
          ref: registrationRefs.givenName,
          onSubmitEditing: () => registrationRefs.familyName.current.focus(),
          type: "string",
        },
        {
          heading: "Family Name",
          key: "familyName",
          value: registeredPatient.name[0].family,
          placeholder: "Family Name",
          onChange: (text) => dispatch(updateFamilyName(text)),
          ref: registrationRefs.familyName,
          onSubmitEditing: () =>
            registrationRefs.insuranceNumber.current.focus(),
          type: "string",
        },
        {
          heading: "Insurance Number",
          key: "insuranceNumber",
          value: registeredPatient.identifier[0].value,
          placeholder: "Insurance Number",
          onChange: (text) => dispatch(updateInsuranceNumber(text)),
          ref: registrationRefs.insuranceNumber,
          maxLength: 10,
          onSubmitEditing: () => {},
          type: "integer",
        },
        {
          heading: "Date of Birth",
          key: "birthDate",
          value: registeredPatient.birthDate,
          placeholder: "Birth Date",
          onChange: (text) => dispatch(updateBirthDate(text)),
          ref: registrationRefs.birthDate,
          onSubmitEditing: () => registrationRefs.gender.current.focus(),
          type: "date",
        },
        {
          heading: "Gender",
          key: "gender",
          value: registeredPatient.gender,
          placeholder: "Gender",
          onChange: (text) => dispatch(updateGender(text)),
          ref: registrationRefs.gender,
          options: [
            { valueCoding: { display: "male", code: "male" } },
            {
              valueCoding: { display: "female", code: "female" },
            },
            { valueCoding: { display: "other", code: "other" } },
          ],
          onSubmitEditing: () => {}, // No next input, maybe submit form or blur
          type: "choice",
        },
      ],
    },
  ];

  return (
    <SafeAreaView style={commonStyle.body}>
      <View style={commonStyle.header}>
        <Text>
          Registration +
          {registeredPatient.communication[0].language.coding[0].code}
        </Text>
      </View>
      <KeyboardAvoidingView style={commonStyle.section} behavior="padding">
        <SectionList
          sections={registrationFormFields}
          keyExtractor={(item) => item.key}
          renderSectionHeader={renderSectionHeader}
          renderItem={renderQuestionnaireItem}
          stickySectionHeadersEnabled={false}
        />
      </KeyboardAvoidingView>
      <View style={commonStyle.footer}>
        <BottomNavigationView navigateTo={previewScreenRoute} />
      </View>
    </SafeAreaView>
  );
}
