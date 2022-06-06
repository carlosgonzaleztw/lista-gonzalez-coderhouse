import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import ThemeColors from '../../../styles/colors';
import CheckBox from 'expo-checkbox';

const Task = ({ onDelete, isChecked, onCheckChange, description }) => {
  return (
    <View style={styles.root}>
      <CheckBox value={isChecked} onValueChange={onCheckChange}></CheckBox>
      <Text style={styles.text}>{description}</Text>
      <Pressable style={styles.button} onPress={onDelete}>
        <Text style={styles.buttonText}>x</Text>
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
  },
  text: {
    width: '60%',
  },
  button: {
    backgroundColor: ThemeColors.accent,
    borderRadius: 100,
    alignItems: 'center',
    height: 30,
    width: 30,
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});
