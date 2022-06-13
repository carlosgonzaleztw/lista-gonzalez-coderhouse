import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import TasksList from '../../components/TasksList/TasksList';
import ThemeColors from '../../styles/colors';
import Header from '../../components/common/Header/Header';

const ListScreen = ({
  tasks,
  onAddTask,
  onViewDetails,
  onTaskDelete,
  onTaskCheckChange,
}) => {
  return (
    <View style={styles.container}>
      <Header title={'Todos!'} />
      <View style={styles.inputWrapper}>
        <Pressable style={styles.button} onPress={onAddTask}>
          <Text style={styles.buttonText}>Create a new task</Text>
        </Pressable>
      </View>
      <TasksList
        tasks={tasks}
        onTaskCheckChange={(task) => onTaskCheckChange(task)}
        onTaskDelete={(task) => onTaskDelete(task)}
        onViewDetails={(task) => onViewDetails(task)}
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
