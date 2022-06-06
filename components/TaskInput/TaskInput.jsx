import { Pressable, View, TextInput, StyleSheet, Text } from 'react-native';
import React from 'react';
import ThemeColors from '../../styles/colors';

const TaskInput = ({ onPress }) => {
  return (
    <View style={styles.root}>
      <TextInput placeholder="Create new task" style={styles.input}></TextInput>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Add</Text>
      </Pressable>
    </View>
  );
};

export default TaskInput;

const styles = StyleSheet.create({
  root: { width: '90%' },
  input: {
    backgroundColor: ThemeColors.inputBackgroundColor,
    color: ThemeColors.inputTextColor,
    width: '100%',
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 20,
    fontSize: 16,
    marginBottom: 8,
  },
  button: {
    backgroundColor: ThemeColors.accent,
    borderRadius: 100,
    alignItems: 'center',
    paddingVertical: 12,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});
