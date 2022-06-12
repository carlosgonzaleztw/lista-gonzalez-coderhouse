import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import ThemeColors from '../../../styles/colors';
import CheckBox from 'expo-checkbox';

const Task = ({ onDelete, isChecked, onCheckChange, task, onViewDetails }) => {
  return (
    <View style={styles.root}>
      <CheckBox value={isChecked} onValueChange={onCheckChange}></CheckBox>
      <Pressable style={styles.textWrapper} onPress={() => onViewDetails(task)}>
        <Text style={[isChecked ? styles.disabled : '', styles.title]}>
          {task.title}
        </Text>
        <Text style={styles.description}>Press to see the details</Text>
      </Pressable>
      <Pressable
        style={[
          styles.button,
          isChecked
            ? { backgroundColor: ThemeColors.disabledText }
            : { backgroundColor: ThemeColors.primary },
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
  textWrapper: {
    width: '60%',
  },
  title: { fontSize: 16, fontWeight: 'bold' },
  description: { fontSize: 10 },
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
