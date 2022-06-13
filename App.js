import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import ListScreen from './screens/ListScreen/ListScreen';
import TaskDetailsScreen from './screens/TaskDetailsScreen/TaskDetailsScreen';
import { useFonts } from 'expo-font';
import ThemeColors from './styles/colors';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [loaded] = useFonts({
    'poppins-regular': require('./assets/fonts/Poppins/Poppins-Regular.ttf'),
    'poppins-bold': require('./assets/fonts/Poppins/Poppins-Bold.ttf'),
    'poppins-italic': require('./assets/fonts/Poppins/Poppins-Italic.ttf'),
  });

  if (!loaded) {
    return <ActivityIndicator size="large" color={ThemeColors.primary} />;
  }

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

  const handleGoBack = (currentTask) => {
    if (currentTask.title === '') {
      setSelectedTask(null);
      return;
    }

    const isNewTask = !tasks.some((task) => {
      return task.id === currentTask.id;
    });

    if (isNewTask) {
      setTasks([...tasks, currentTask]);
    } else {
      const updatedTasks = tasks.map((task) => {
        if (task.id === currentTask.id) {
          return currentTask;
        } else {
          return task;
        }
      });

      setTasks(updatedTasks);
    }

    setSelectedTask(null);
  };

  let content;

  content = (
    <ListScreen
      tasks={tasks}
      onAddTask={handleOnAddTask}
      onViewDetails={(task) => setSelectedTask(task)}
      onTaskDelete={(task) => handleTaskDelete(task)}
      onTaskCheckChange={(task) => handleTaskCheckChange(task)}
    ></ListScreen>
  );

  if (selectedTask !== null) {
    content = (
      <TaskDetailsScreen
        task={selectedTask}
        onGoBack={handleGoBack}
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
    justifyContent: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
    fontFamily: 'poppins-regular',
  },
});
