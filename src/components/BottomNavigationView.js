import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { buttonStyle } from '../styles/commonStyle';

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
    <TouchableOpacity style={[buttonStyle.button, buttonStyle.primaryButton, styles.primaryButtonPosition]} onPress={handlePress}>
      <Text style={buttonStyle.primaryButtonText}>Next</Text>
    </TouchableOpacity>
  );
}

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
    <TouchableOpacity style={[buttonStyle.button, buttonStyle.secondaryButton, styles.secondaryButtonPosition]} onPress={handlePress}>
      <Text style={buttonStyle.secondaryButtonText}>Back</Text>
    </TouchableOpacity>
  );
}

export function BottomNavigationView({ navigateTo, primaryButtonPressed, secondaryButtonPressed, page}) {
  return (
    <View style={styles.bottomNav}>
      <SecondaryButton secondaryButtonPressed={secondaryButtonPressed} />
      <Text style={styles.page}>{page}</Text>
      <PrimaryButton navigateTo={navigateTo} primaryButtonPressed={primaryButtonPressed} />
    </View>
  );
}

const navigationButtonsMargin = 5;

const styles = StyleSheet.create({
  bottomNav: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  page: {
    flex: 1,
    textAlign: 'center',
  },
  primaryButtonPosition: {
    position: 'absolute',
    right: navigationButtonsMargin,
  },
  secondaryButtonPosition: {
    position: 'absolute',
    left: navigationButtonsMargin, 
  },
});
