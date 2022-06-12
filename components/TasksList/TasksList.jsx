import { StyleSheet, View, Text, FlatList } from 'react-native';
import React from 'react';
import Task from '../common/Task/Task';

const TasksList = ({
  tasks,
  onTaskCheckChange,
  onTaskDelete,
  onViewDetails,
}) => {
  const renderItem = ({ item }) => {
    return (
      <Task
        isChecked={item.isChecked}
        task={item}
        description={item.description}
        onCheckChange={() => onTaskCheckChange(item.id)}
        onDelete={() => onTaskDelete(item.id)}
        onViewDetails={() => onViewDetails(item)}
      ></Task>
    );
  };

  return (
    <FlatList
      data={tasks}
      renderItem={renderItem}
      style={styles.root}
      keyExtractor={(item) => item.id}
    />
  );
};

export default TasksList;

const styles = StyleSheet.create({
  root: {
    width: '100%',
  },
});
