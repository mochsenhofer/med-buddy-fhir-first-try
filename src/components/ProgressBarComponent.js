import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ProgressSteps, {
  Title,
  Content,
} from "@joaosousa/react-native-progress-steps";
import { medBuddyBlue } from "../styles/colors";

export default function ProgressBarComponent({ currentStep }) {
  return (
    <View style={styles.container}>
      <ProgressSteps
        currentStep={currentStep}
        orientation="horizontal"
        steps={[
          {
            title: (
              <Title>
                <Text>Information</Text>
              </Title>
            ),
            content: <Content></Content>,
          },
          {
            title: (
              <Title>
                <Text>Questionnaire</Text>
              </Title>
            ),
            content: <Content></Content>,
          },
          {
            title: (
              <Title>
                <Text>Overview</Text>
              </Title>
            ),
            content: <Content></Content>,
          },
          {
            title: (
              <Title>
                <Text>Consent</Text>
              </Title>
            ),
            content: <Content></Content>,
          },
        ]}
        colors={{
          title: {
            text: {
              normal: "lightgrey",
              active: medBuddyBlue,
              completed: medBuddyBlue,
            },
          },
          marker: {
            text: {
              normal: "grey",
              active: "#005f73",
              completed: "#f4f3ee",
            },
            line: {
              normal: "lightgrey",
              active: medBuddyBlue,
              completed: medBuddyBlue,
            },
          },
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "60%",
    marginTop: 30,
  },
});
