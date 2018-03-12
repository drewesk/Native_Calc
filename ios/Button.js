import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity } from 'react-native';

const baseContainer = {
  alignItems: "center",
  justifyContent: "center",
  borderRightWidth: 5,
  borderColor: "#3F554D"
};

const baseText = {
  fontSize: 36,
};

const styles = ({
  container: {
    backgroundColor: "#485F57",
    flex: 1,
    ...baseContainer,
  },
  specialContainer: {
    backgroundColor: "#485F52",
    flex: 2,
    ...baseContainer,
  },
  text: baseText,
  specialText: {
    ...baseText,
    color: '#FFF',
  },
});

const Button = ({ text , special, onPress }) => (
  <TouchableOpacity
    onPress={ () => onPress(text) }
    style={ special ? styles.specialContainer : styles.container }>
    <Text style={ special ? styles.specialText : styles.text }>
      { text }
    </Text>
  </TouchableOpacity>
);

export default Button;
