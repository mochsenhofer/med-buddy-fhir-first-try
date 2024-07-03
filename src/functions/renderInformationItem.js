import React from "react";
import { Text, View } from "react-native";
import { commonStyle, fontStyle } from "../styles/commonStyle";

export default function renderInformationItem({ item }) {
  return (
    <View style={commonStyle.item}>
      <Text style={fontStyle.p2}>{item.text}</Text>
    </View>
  );
}
