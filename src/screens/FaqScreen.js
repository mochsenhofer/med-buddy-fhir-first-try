import { push, ref, set } from "firebase/database";
import React, { useEffect } from "react";
import { Alert, DevSettings, SafeAreaView, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { PrimaryButton } from "../components/BottomNavigationView";
import { FIREBASE_DB } from "../firebase/firebase";
import { commonStyle } from "../styles/commonStyle";

// The FAQ Screen component
export default function FaqScreen() {
  // Extracting state from Redux store
  const updatedQuestionnaireResponse = useSelector(
    (state) => state.questionnaireResponse || {}
  );

  const linkedQuestionnaire = JSON.stringify(
    updatedQuestionnaireResponse.contained[1]
  );
  console.log("Linked Questionnaire: ", linkedQuestionnaire);

  // Function to upload data to Firebase
  async function uploadData() {
    try {
      const db = FIREBASE_DB;
      const questionnaireResponseRef = ref(db, "questionnaireResponses");
      const newQuestionnaireResponseRef = push(questionnaireResponseRef);

      await set(newQuestionnaireResponseRef, {
        resourceType: updatedQuestionnaireResponse.resourceType,
        status: updatedQuestionnaireResponse.status,
        id: newQuestionnaireResponseRef.key,
        contained: [
          updatedQuestionnaireResponse.contained[0],
          linkedQuestionnaire,
        ],
        questionnaire: updatedQuestionnaireResponse.questionnaire,
        author: updatedQuestionnaireResponse.author,
        item: updatedQuestionnaireResponse.item,
      });

      console.log("Data uploaded successfully");
    } catch (error) {
      console.error("Error adding document: ", error.message);
      Alert.alert("Upload Error", "Failed to upload data. Please try again.");
    }
  }

  // Effect to upload data on component mount
  useEffect(() => {
    (async () => {
      await uploadData();
    })();
  }, [updatedQuestionnaireResponse]);

  // Function to handle finish button press
  function finishQuestionnaire() {
    Alert.alert("Finish Questionnaire", "Are you sure you want to finish?", [
      {
        text: "Finish",
        style: "destructive",
        onPress: () => DevSettings.reload(),
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
    ]);
  }

  return (
    <SafeAreaView style={commonStyle.body}>
      <View style={commonStyle.header}>
        <Text style={commonStyle.title}>FAQ</Text>
      </View>
      <View style={commonStyle.section}>
        <Text>{JSON.stringify(updatedQuestionnaireResponse.contained[1])}</Text>
      </View>
      <View style={commonStyle.footer}>
        <PrimaryButton
          title="Finish"
          primaryButtonPressed={() => finishQuestionnaire()}
        />
      </View>
    </SafeAreaView>
  );
}
