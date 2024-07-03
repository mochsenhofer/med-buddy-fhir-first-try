import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
import { registrationScreenRoute } from "../navigation/Navigation";
import { updateLanguage } from "../store/patientReducer";
import { commonStyle } from "../styles/commonStyle";
import { questionnaireSections } from "../fhir-resources/Questionnaire";

export default function SelectLanguageScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const languageButtonProps = [
    {
      title: "Willkommen",
      description: "Für Deutsch klicken",
      key: "de",
      image: require("../assets/images/austria.png"),
    },
    {
      title: "Welcome",
      description: "For English click",
      key: "en",
      image: require("../assets/images/english.png"),
    },
    {
      title: "Witamy",
      description: "Kliknij, aby po polsku",
      key: "pl",
      image: require("../assets/images/polish.png"),
    },
  ];

  function selectLanguage(language) {
    console.log("Selected Language: ", language);
    dispatch(updateLanguage(language));
    navigation.navigate(registrationScreenRoute);
  }

  function renderLanguageButton({ item }) {
    return (
      <TouchableOpacity
        style={styles.languageButton}
        onPress={() => selectLanguage(item.key)}
      >
        <Image source={item.image} style={styles.languageImage} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={commonStyle.body}>
      <View style={commonStyle.header}></View>
      <View style={[commonStyle.section, { width: "90%" }]}>
        <FlatList
          contentContainerStyle={styles.flatListContainer}
          data={languageButtonProps}
          renderItem={renderLanguageButton}
          keyExtractor={(item) => item.key}
          numColumns={3}
          scrollEnabled={false}
        />
      </View>
      <View style={commonStyle.footer}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flatListContainer: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  languageButton: {
    flexDirection: "row",
    padding: 15,
    margin: 15,
    alignItems: "center",
    borderRadius: 1000,
    borderWidth: 2,
    borderColor: "black",
    width: "30%",
  },
  languageImage: {
    width: 75,
    height: 75,
    marginRight: 10,
    borderRadius: 1000,
  },
  textContainer: {
    flexDirection: "column",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  description: {
    fontSize: 15,
    color: "grey",
  },
});
