import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { mainBlue } from "../styles/colors";
import { commonStyle, fontStyle } from "../styles/commonStyle";
import { useNavigation } from "@react-navigation/native";
import {
  videoScreenRoute,
  informationScreenRoute,
} from "../navigation/Navigation";

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
          <Text>{item.videoBoxText}</Text>
          <Image style={styles.boxImage} src={item.videoImage} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.navigate(informationScreenRoute)}
        >
          <Text>{item.readInfoBoxText}</Text>
          <Image style={styles.boxImage} src={item.readInfoImage} />
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
    justifyContent: "flex-start",
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
