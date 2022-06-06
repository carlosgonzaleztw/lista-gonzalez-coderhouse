import { StyleSheet, Text, View } from 'react-native';
import TaskInput from './components/TaskInput/TaskInput';
import { useState } from 'react';
import TasksList from './components/TasksList/TasksList';

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, description: 'text', isChecked: false },
  ]);

  const addTask = (description) => {
    if (description !== '') {
      setTasks((currentTasks) => [
        ...currentTasks,
        { id: Math.random(), description: description, isChecked: false },
      ]);
    }
    console.log('TASKS: ', tasks);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todos!</Text>
      <View style={styles.inputWrapper}>
        <TaskInput
          onSubmit={(taskDescription) => addTask(taskDescription)}
        ></TaskInput>
      </View>
      <TasksList data={tasks}></TasksList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 50,
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
