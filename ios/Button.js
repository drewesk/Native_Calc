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
  borderColor: "#C4EFE0"
};

const styles = ({
  container: {
    backgroundColor: "#A4E8D0",
    flex: 1,
    ...baseContainer,
  },
  specialContainer: {
    backgroundColor: "#3AEBAB",
    flex: 2,
    ...baseContainer,
  },
  text: {
    fontSize: 36,
  },
});

const Button = ({ text , special, onPress }) => (
  <TouchableOpacity onPress={ onPress } style={ special ? styles.specialContainer : styles.container }>
    <Text style={ styles.text }>{ text }</Text>
  </TouchableOpacity>
);

export default Button;
