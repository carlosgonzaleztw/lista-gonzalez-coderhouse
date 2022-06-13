import { StyleSheet, TextInput } from 'react-native';
import React from 'react';

const CustomTextInput = ({ style, children, ...props }) => {
  return (
    <TextInput {...props} style={[styles.text, style]}>
      {children}
    </TextInput>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'poppins-regular',
  },
});
