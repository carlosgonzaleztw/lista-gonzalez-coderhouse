import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import ListScreen from './screens/ListScreen/ListScreen';
import TaskDetailsScreen from './screens/TaskDetailsScreen/TaskDetailsScreen';

const testTask = {
  title: 'What happens if a title is way too long?',
  description:
    'This is a description for a tasks that has more than one line, in fact I believe it will be more than two lines',
  id: 1,
  isChecked: false,
};

export default function App() {
  const [tasks, setTasks] = useState([
    {
      title: 'What happens if a title is way too long?',
      description:
        'This is a description for a tasks that has more than one line, in fact I believe it will be more than two lines',
      id: 1,
      isChecked: false,
    },
  ]);

  const [selectedTask, setSelectedTask] = useState(null);

  const addTask = (title, description) => {
    if (description !== '') {
      setTasks((currentTasks) => [
        ...currentTasks,
        {
          id: Math.random(),
          title: title,
          description: description,
          isChecked: false,
        },
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

  const handleOnAddTask = () => {
    setSelectedTask({
      id: Math.random(),
      title: '',
      description: '',
      isChecked: false,
    });
  };

  let content;

  content = (
    <ListScreen tasks={tasks} handleOnAddTask={handleOnAddTask}></ListScreen>
  );

  if (selectedTask !== null) {
    content = (
      <TaskDetailsScreen
        task={selectedTask}
        handleGoBack={() => setSelectedTask(null)}
      ></TaskDetailsScreen>
    );
  }

  return <View style={styles.container}>{content}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
});
