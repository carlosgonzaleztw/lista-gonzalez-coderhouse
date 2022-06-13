import { Pressable, View, TextInput, StyleSheet, Text } from 'react-native';
import React, { useState } from 'react';
import ThemeColors from '../../styles/colors';

const TaskInput = ({ onSubmit }) => {
  const [inputText, setInputText] = useState('');

  const handleOnSubmit = () => {
    onSubmit(inputText);
    setInputText('');
  };

  const handleInputChange = (text) => {
    setInputText(text);
  };

  return (
    <View style={styles.root}>
      <TextInput
        value={inputText}
        placeholder="Create new task"
        style={styles.input}
        onChangeText={(text) => handleInputChange(text)}
      ></TextInput>
      <Pressable style={styles.button} onPress={handleOnSubmit}>
        <CustomText style={styles.buttonText}>Add</CustomText>
      </Pressable>
    </View>
  );
};

export default TaskInput;

const styles = StyleSheet.create({
  root: { width: '100%' },
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
