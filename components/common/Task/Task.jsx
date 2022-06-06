import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import ThemeColors from '../../../styles/colors';
import CheckBox from 'expo-checkbox';

const Task = ({ onDelete, isChecked, onCheckChange, description }) => {
  return (
    <View style={styles.root}>
      <CheckBox value={isChecked} onValueChange={onCheckChange}></CheckBox>
      <Text style={[isChecked ? styles.disabled : '', styles.text]}>
        {description}
      </Text>
      <Pressable
        disabled={isChecked}
        style={[
          styles.button,
          isChecked
            ? { backgroundColor: ThemeColors.disabledText }
            : { backgroundColor: ThemeColors.accent },
        ]}
        onPress={onDelete}
      >
        <Text style={styles.buttonText}>X</Text>
      </Pressable>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    width: '60%',
  },
  disabled: {
    color: ThemeColors.disabledText,
    textDecorationLine: 'line-through',
  },
  button: {
    borderRadius: 100,
    alignItems: 'center',
    height: 30,
    width: 30,
    justifyContent: 'center',
  },

  buttonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
  },
});
