import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { mainBlue } from "../styles/colors";
import { commonStyle, fontStyle } from "../styles/commonStyle";
import { useNavigation } from "@react-navigation/native";
import {
  videoScreenRoute,
  informationScreenRoute,
} from "../navigation/Navigation";
import { Entypo } from "@expo/vector-icons";

export default function renderPreviewScreenItem({ item }) {
  const navigation = useNavigation();

  return (
    <View>
      <Text style={fontStyle.p2}>{item.text}</Text>
      <View style={styles.boxContainer}>
        <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.navigate(videoScreenRoute)}
        >
          <Text style={fontStyle.h5}>{item.videoBoxText}</Text>
          <Entypo name="video" size={"150%"} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.navigate(informationScreenRoute)}
        >
          <Text style={fontStyle.h5}>{item.readInfoBoxText}</Text>
          <Entypo name="open-book" size={"150%"} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const boxWidth = "auto";
const boxMinWidth = 300;

const styles = StyleSheet.create({
  boxContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  box: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: boxWidth,
    minWidth: boxMinWidth,
    minHeight: boxMinWidth,
    height: boxWidth,
    borderRadius: 50,
    margin: 60,
    marginHorizontal: 30,
    borderWidth: 5,
    borderColor: mainBlue,
  },
  boxImage: {
    width: "80%",
    height: 60,
  },
});
