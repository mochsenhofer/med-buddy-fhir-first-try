import React from "react";
import { Text, View } from "react-native";
import { questionnaireItemStyle, fontStyle } from "../styles/commonStyle";
import { renderUserInput } from "./renderUserInput";

export const renderQuestionnaireItem = ({ item }) => (
  <View style={questionnaireItemStyle.questionContainer}>
    <Text style={fontStyle.p2}>{item.heading}</Text>
    {renderUserInput(item)}
  </View>
);
