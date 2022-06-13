import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const CustomText = ({ style, children, ...props }) => {
  return (
    <Text {...props} style={{ ...styles.text, ...style }}>
      {children}
    </Text>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'poppins-regular',
  },
});
