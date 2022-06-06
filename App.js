import { StyleSheet, Text, View } from 'react-native';
import TaskInput from './components/TaskInput/TaskInput';
import { useState } from 'react';
import TasksList from './components/TasksList/TasksList';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (description) => {
    if (description !== '') {
      setTasks((currentTasks) => [
        ...currentTasks,
        { id: Math.random(), description: description, isChecked: false },
      ]);
    }
  };

  const handleTaskCheckChange = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        task.isChecked = !task.isChecked;
      }
      return task;
    });

    setTasks(updatedTasks);
  };
  const handleTaskDelete = (taskId) => {
    const updatedTasks = tasks.filter((task) => {
      return task.id !== taskId;
    });

    setTasks(updatedTasks);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todos!</Text>
      <View style={styles.inputWrapper}>
        <TaskInput
          onSubmit={(taskDescription) => addTask(taskDescription)}
        ></TaskInput>
      </View>
      <TasksList
        data={tasks}
        onTaskCheckChange={(id) => handleTaskCheckChange(id)}
        onTaskDelete={(id) => handleTaskDelete(id)}
      ></TasksList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
    width: '100%',
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
