import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { buttonStyle } from '../styles/commonStyle';

// PrimaryButton component
export function PrimaryButton({ navigateTo, primaryButtonPressed }) {
  const navigation = useNavigation();

  const handlePress = () => {
    if (primaryButtonPressed) {
      primaryButtonPressed();
    } else {
      navigation.navigate(navigateTo);
    }
  };

  return (
    <TouchableOpacity style={[buttonStyle.button, buttonStyle.primary]} onPress={handlePress}>
      <Text style={buttonStyle.primaryButtonText}>Next</Text>
    </TouchableOpacity>
  );
};

// SecondaryButton component
export function SecondaryButton({ secondaryButtonPressed }) {
  const navigation = useNavigation();

  const handlePress = () => {
    if (secondaryButtonPressed) {
      secondaryButtonPressed();
    } else {
      navigation.goBack();
    }
  };

  return (
    <TouchableOpacity style={[buttonStyle.button, buttonStyle.secondary]} onPress={handlePress}>
      <Text style={buttonStyle.secondaryButtonText}>Back</Text>
    </TouchableOpacity>
  );
};

// BottomNavigationView component
export function BottomNavigationView({ navigateTo, primaryButtonPressed, secondaryButtonPressed }) {
  return (
    <View>
      <PrimaryButton navigateTo={navigateTo} primaryButtonPressed={primaryButtonPressed} />
      <Text>{page}</Text>
      <SecondaryButton secondaryButtonPressed={secondaryButtonPressed} />
    </View>
  );
};