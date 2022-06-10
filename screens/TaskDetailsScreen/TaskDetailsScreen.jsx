import { TextInput, StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import ThemeColors from '../../styles/colors';

const TaskDetailsScreen = ({
  task,
  handleTitleChange,
  handleDescriptionChange,
  handleGoBack,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task Details</Text>
      <View>
        <TextInput
          value={task?.title || ''}
          multiline
          style={styles.titleInput}
          onChangeText={handleTitleChange}
          placeholder="Title"
        ></TextInput>
        <TextInput
          value={task?.description || ''}
          multiline
          style={styles.descriptionInput}
          onChangeText={handleDescriptionChange}
          placeholder="Description"
        ></TextInput>
      </View>
      <View style={styles.buttonsWrapper}>
        <Pressable
          style={[styles.button, styles.doneButton]}
          onPress={handleGoBack}
        >
          <Text style={styles.buttonText}>Mark as done</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.backButton]}
          onPress={handleGoBack}
        >
          <Text style={styles.buttonText}>Go back</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default TaskDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 10,
    width: '100%',
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    marginBottom: 20,
  },
  titleInput: {
    fontSize: 20,
    marginBottom: 10,
    padding: 10,
    backgroundColor: ThemeColors.inputBackgroundColor,
  },
  descriptionInput: {
    fontSize: 16,
    backgroundColor: ThemeColors.inputBackgroundColor,
    padding: 10,
    height: 300,
    textAlignVertical: 'top',
  },
  buttonsWrapper: {
    width: '100%',
    bottom: 0,
  },
  button: {
    borderRadius: 100,
    alignItems: 'center',
    paddingVertical: 12,
    width: '100%',
  },
  doneButton: { backgroundColor: ThemeColors.primary, marginBottom: 5 },
  backButton: {
    backgroundColor: ThemeColors.pink,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
