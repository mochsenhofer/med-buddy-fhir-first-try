import React from "react";
import { View, SafeAreaView, Text } from "react-native";
import { commonStyle } from "../styles/commonStyle";
import { BottomNavigationView } from "../components/BottomNavigationView";
import {
  informationScreenRoute,
  videoScreenRoute,
} from "../navigation/Navigation";
import { useSelector } from "react-redux";

export default function PreviewScreen() {
  const registeredPatient = useSelector((state) => state.patient);

  return (
    <SafeAreaView style={commonStyle.body}>
      <View style={commonStyle.header}>
        <Text>Preview + {registeredPatient.name[0].given}</Text>
      </View>
      <View style={commonStyle.section}>
        <Text>{JSON.stringify(registeredPatient)}</Text>
      </View>
      <View style={commonStyle.footer}>
        <BottomNavigationView navigateTo={informationScreenRoute} />
      </View>
    </SafeAreaView>
  );
}
