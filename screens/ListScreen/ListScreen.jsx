import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import TasksList from '../../components/TasksList/TasksList';
import ThemeColors from '../../styles/colors';

const ListScreen = (tasks, handleOnAddTask) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todos!</Text>
      <View style={styles.inputWrapper}>
        <Pressable style={styles.button} onPress={handleOnAddTask}>
          <Text style={styles.buttonText}>Add a new task</Text>
        </Pressable>
      </View>
      <TasksList
        tasks={tasks}
        onTaskCheckChange={(id) => null}
        onTaskDelete={(id) => null}
      ></TasksList>
    </View>
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 10,
    width: '100%',
  },
  button: {
    backgroundColor: ThemeColors.primary,
    borderRadius: 100,
    alignItems: 'center',
    paddingVertical: 12,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    marginBottom: 20,
  },
  inputWrapper: {
    width: '100%',
    marginBottom: 30,
    alignItems: 'center',
  },
});
