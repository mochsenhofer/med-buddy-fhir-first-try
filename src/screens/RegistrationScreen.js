import React, { useRef } from "react";
import {
  View,
  SafeAreaView,
  TextInput,
  Text,
  KeyboardAvoidingView,
  FlatList,
} from "react-native";
import { commonStyle, questionnaireItemStyle } from "../styles/commonStyle";
import { BottomNavigationView } from "../components/BottomNavigationView";
import { previewScreenRoute } from "../navigation/Navigation";
import { useSelector, useDispatch } from "react-redux";
import {
  updateGivenName,
  updateFamilyName,
  updateInsuranceNumber,
  updateBirthDate,
  updateGender,
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
      heading: "Given Name",
      key: "givenName",
      value: registeredPatient.name[0].given[0],
      placeholder: "Given Name",
      onChange: (text) => dispatch(updateGivenName(text)),
      autoFocus: true,
      ref: registrationRefs.givenName,
      onSubmitEditing: () => registrationRefs.familyName.current.focus(),
    },
    {
      heading: "Family Name",
      key: "familyName",
      value: registeredPatient.name[0].family,
      placeholder: "Family Name",
      onChange: (text) => dispatch(updateFamilyName(text)),
      ref: registrationRefs.familyName,
      onSubmitEditing: () => registrationRefs.insuranceNumber.current.focus(),
    },
    {
      heading: "Insurance Number",
      key: "insuranceNumber",
      value: registeredPatient.identifier[0].value,
      placeholder: "Insurance Number",
      onChange: (text) => dispatch(updateInsuranceNumber(text)),
      ref: registrationRefs.insuranceNumber,
      onSubmitEditing: () => registrationRefs.birthDate.current.focus(),
      maxLength: 10,
    },
    {
      heading: "Date of Birth",
      key: "birthDate",
      value: registeredPatient.birthDate,
      placeholder: "Birth Date",
      onChange: (text) => dispatch(updateBirthDate(text)),
      ref: registrationRefs.birthDate,
      onSubmitEditing: () => registrationRefs.gender.current.focus(),
    },
    {
      heading: "Gender",
      key: "gender",
      value: registeredPatient.gender,
      placeholder: "Gender",
      onChange: (text) => dispatch(updateGender(text)),
      ref: registrationRefs.gender,
      onSubmitEditing: () => {}, // No next input, maybe submit form or blur
    },
  ];

  return (
    <SafeAreaView style={commonStyle.body}>
      <View style={commonStyle.header}>
        <Text>
          Registration + {registeredPatient.name[0].given[0]} +{" "}
          {registeredPatient.name[0].family}
        </Text>
      </View>
      <KeyboardAvoidingView style={commonStyle.section} behavior="padding">
        <FlatList
          style={{ width: "100%" }}
          data={registrationFormFields}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <>
              <Text style={questionnaireItemStyle.questionText}>
                {item.heading}
              </Text>
              <TextInput
                style={questionnaireItemStyle.textInput}
                onChangeText={item.onChange}
                value={item.value}
                placeholder={item.placeholder}
                autoFocus={item.autoFocus}
                ref={item.ref}
                onSubmitEditing={item.onSubmitEditing}
                maxLength={item.maxLength}
              />
            </>
          )}
        />
      </KeyboardAvoidingView>
      <View style={commonStyle.footer}>
        <BottomNavigationView navigateTo={previewScreenRoute} />
      </View>
    </SafeAreaView>
  );
}
