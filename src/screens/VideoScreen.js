import { useIsFocused } from "@react-navigation/native";
import { Video } from "expo-av";
import React, { useRef } from "react";
import { SafeAreaView, SectionList, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { textsInPatientsChosenLanguage } from "../assets/translationTexts/textsInPatientsChosenLanguage";
import { BottomNavigationView } from "../components/BottomNavigationView";
import renderSectionHeader from "../functions/renderSectionHeader";
import { questionnaireScreenRoute } from "../navigation/Navigation";
import { commonStyle } from "../styles/commonStyle";
import MedBuddyCornerLogo from "../components/MedBuddyCornerLogo";

export default function VideoScreen() {
  const registeredPatient = useSelector((state) => state.patient);
  const language = registeredPatient.communication[0].language.coding[0].code;
  const translatedVideoTexts =
    textsInPatientsChosenLanguage[language].videoScreen;
  const videoRef = useRef(null);
  const videoSrc = translatedVideoTexts.video;

  const videoScreenSections = [
    {
      title: translatedVideoTexts["v.1"],
      data: [
        {
          key: "videoSrc",
          video: videoSrc,
        },
      ],
    },
  ];

  function renderVideoItem({ item }) {
    return (
      <Video
        ref={videoRef}
        shouldPlay={useIsFocused()}
        source={item.video}
        style={styles.video}
        isMuted={false}
      />
    );
  }

  return (
    <SafeAreaView style={commonStyle.body}>
      <View style={commonStyle.header}>
        <MedBuddyCornerLogo />
      </View>
      <View style={[commonStyle.section, styles.center]}>
        <SectionList
          sections={videoScreenSections}
          keyExtractor={(item, index) => item + index}
          renderItem={renderVideoItem}
          renderSectionHeader={renderSectionHeader}
        />
      </View>
      <View style={commonStyle.footer}>
        <BottomNavigationView navigateTo={questionnaireScreenRoute} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  video: {
    width: "100%",
    height: "auto",
    aspectRatio: 1280 / 720,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});
