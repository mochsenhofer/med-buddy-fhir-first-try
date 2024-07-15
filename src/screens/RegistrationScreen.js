import React, { useRef } from "react";
import {
  KeyboardAvoidingView,
  SafeAreaView,
  SectionList,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { textsInPatientsChosenLanguage } from "../assets/translationTexts/textsInPatientsChosenLanguage";
import { BottomNavigationView } from "../components/BottomNavigationView";
import MedBuddyCornerLogo from "../components/MedBuddyCornerLogo";
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
  updatePatientId,
} from "./../store/patientReducer";
import { updateAuthor } from "./../store/questionnaireResponseReducer";
import { FIREBASE_DB } from "../firebase/firebase";
import { push, ref, set } from "firebase/database";
import { useNavigation } from "@react-navigation/native";

export default function RegistrationScreen() {
  const registeredPatient = useSelector((state) => state.patient);
  const language = registeredPatient.communication[0].language.coding[0].code;
  const navigation = useNavigation();
  const translatedRegistrationTexts =
    textsInPatientsChosenLanguage[language].registrationScreen;

  const dispatch = useDispatch();

  const registrationRefs = {
    givenName: useRef(null),
    familyName: useRef(null),
    insuranceNumber: useRef(null),
    birthDate: useRef(null),
    gender: useRef(null),
  };

  async function handleNextPressed() {
    try {
      const db = FIREBASE_DB;

      const patientRef = ref(db, "patients/");

      const newPatientRef = push(patientRef);
      console.log(newPatientRef.key);

      await set(newPatientRef, {
        resourceType: registeredPatient.resourceType,
        id: newPatientRef.key,
        name: [
          {
            given: [registeredPatient.name[0].given[0]],
            family: registeredPatient.name[0].family,
          },
        ],
        identifier: [
          {
            value: registeredPatient.identifier[0].value,
          },
        ],
        birthDate: registeredPatient.birthDate,
        gender: registeredPatient.gender,
      });
      dispatch(updateAuthor(newPatientRef.key));
      dispatch(updatePatientId(newPatientRef.key));
    } catch (error) {
      console.error("Error adding document: ", error);
    } finally {
      navigation.navigate(previewScreenRoute);
    }
  }

  const registrationFormFields = [
    {
      title: translatedRegistrationTexts["heading"],
      data: [
        {
          heading: translatedRegistrationTexts["subheading"],
        },
        {
          heading: translatedRegistrationTexts["p.1.1"],
          key: "givenName",
          value: registeredPatient.name[0].given[0],
          placeholder: `${translatedRegistrationTexts["p.1.1"]}`,
          onChange: (text) => dispatch(updateGivenName(text)),
          autoFocus: true,
          ref: registrationRefs.givenName,
          onSubmitEditing: () => registrationRefs.familyName.current.focus(),
          type: "string",
        },
        {
          heading: `${translatedRegistrationTexts["p.1.2"]}`,
          key: "familyName",
          value: registeredPatient.name[0].family,
          placeholder: `${translatedRegistrationTexts["p.1.2"]}`,
          onChange: (text) => dispatch(updateFamilyName(text)),
          ref: registrationRefs.familyName,
          onSubmitEditing: () =>
            registrationRefs.insuranceNumber.current.focus(),
          type: "string",
        },
        {
          heading: `${translatedRegistrationTexts["p.1.3"]}`,
          key: "insuranceNumber",
          value: registeredPatient.identifier[0].value,
          placeholder: `${translatedRegistrationTexts["p.1.3"]}`,
          onChange: (text) => dispatch(updateInsuranceNumber(text)),
          ref: registrationRefs.insuranceNumber,
          maxLength: 10,
          onSubmitEditing: () => {},
          type: "integer",
        },
        {
          heading: `${translatedRegistrationTexts["p.1.4"]}`,
          key: "birthDate",
          value: registeredPatient.birthDate,
          placeholder: `${translatedRegistrationTexts["p.1.4"]}`,
          onChange: (text) => dispatch(updateBirthDate(text)),
          ref: registrationRefs.birthDate,
          onSubmitEditing: () => registrationRefs.gender.current.focus(),
          type: "date",
        },
        {
          heading: `${translatedRegistrationTexts["p.1.5"]}`,
          key: "gender",
          value: registeredPatient.gender,
          placeholder: `${translatedRegistrationTexts["p.1.5"]}`,
          onChange: (text) => dispatch(updateGender(text)),
          ref: registrationRefs.gender,
          options: [
            {
              valueCoding: {
                display: `${translatedRegistrationTexts["p.male"]}`,
                code: "male",
              },
            },
            {
              valueCoding: {
                display: `${translatedRegistrationTexts["p.female"]}`,
                code: "female",
              },
            },
            {
              valueCoding: {
                display: `${translatedRegistrationTexts["p.other"]}`,
                code: "other",
              },
            },
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
        <MedBuddyCornerLogo />
      </View>
      <KeyboardAvoidingView style={commonStyle.section} behavior="padding">
        <SectionList
          sections={registrationFormFields}
          keyExtractor={(item) => item.key}
          renderSectionHeader={renderSectionHeader}
          renderItem={renderQuestionnaireItem}
          stickySectionHeadersEnabled={false}
          scrollEnabled={false}
        />
      </KeyboardAvoidingView>
      <View style={commonStyle.footer}>
        <BottomNavigationView primaryButtonPressed={handleNextPressed} />
      </View>
    </SafeAreaView>
  );
}
