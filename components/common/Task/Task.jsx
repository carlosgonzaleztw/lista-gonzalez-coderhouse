import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import ThemeColors from '../../../styles/colors';
import CheckBox from 'expo-checkbox';
import CustomText from '../CustomText/CustomText';

const Task = ({ onDelete, isChecked, onCheckChange, task, onViewDetails }) => {
  return (
    <View style={styles.root}>
      <CheckBox
        value={isChecked}
        onValueChange={() => onCheckChange(task)}
      ></CheckBox>
      <Pressable style={styles.textWrapper} onPress={() => onViewDetails(task)}>
        <CustomText style={[isChecked ? styles.disabled : '', styles.title]}>
          {task.title}
        </CustomText>
        <CustomText style={styles.description}>
          Press to see the details
        </CustomText>
      </Pressable>
      <Pressable
        style={[
          styles.button,
          isChecked
            ? { backgroundColor: ThemeColors.disabledText }
            : { backgroundColor: ThemeColors.primary },
        ]}
        onPress={() => onDelete(task)}
      >
        <CustomText style={styles.buttonText}>X</CustomText>
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
  title: {
    fontSize: 18,
    fontFamily: 'poppins-bold',
  },
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
