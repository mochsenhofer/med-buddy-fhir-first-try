import React from "react";
import { Text, View } from "react-native";
import { questionnaireItemStyle } from "../styles/commonStyle";
import { renderUserInput } from "./renderUserInput";

export const renderQuestionnaireItem = ({ item }) => (
  <View style={questionnaireItemStyle.questionContainer}>
    <Text style={questionnaireItemStyle.questionText}>{item.heading}</Text>
    {renderUserInput(item)}
  </View>
);
