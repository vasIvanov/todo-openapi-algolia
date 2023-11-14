import React from 'react';
import {TextInput, Text, StyleSheet} from 'react-native';

const Input = ({onChangeText, value, label, secureTextEntry}: any) => (
  <>
    <Text>{label}</Text>
    <TextInput
      onChangeText={onChangeText}
      style={styles.input}
      value={value}
      autoCapitalize="none"
      secureTextEntry={secureTextEntry}
    />
  </>
);

export default Input;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    minWidth: 150,
    maxWidth: 300,
  },
});
