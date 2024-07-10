import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Alert, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { homeScreenRoute } from "../navigation/Navigation";
import { DevSettings } from "react-native";

// Das Logo, welches links oben in der Ecke angezeigt wird

export default function MedBuddyCornerLogo() {
  const { navigate } = useNavigation();

  function handleLogoPress() {
    Alert.alert(
      "Warning",
      "You will lose all your data. Are you sure you want to go back to the home screen?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            DevSettings.reload(); // redux store zutücksetzen
          },
          style: "destructive",
        },
      ],
      { cancelable: false }
    );
  }

  return (
    <TouchableOpacity
      style={styles.cornerLogoContainer}
      onPress={() => handleLogoPress()}
    >
      <Image
        style={styles.cornerLogo}
        source={require("../assets/images/logo.png")}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cornerLogoContainer: {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 10,
    left: 10,
  },
  cornerLogo: {
    width: "100%",
    height: "100%",
  },
});
