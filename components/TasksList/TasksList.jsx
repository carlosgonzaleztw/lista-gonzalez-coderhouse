import { StyleSheet, FlatList } from 'react-native';
import React from 'react';
import Task from '../common/Task/Task';

const TasksList = ({ data, onTaskCheckChange, onTaskDelete }) => {
  const renderItem = ({ item }) => {
    return (
      <Task
        isChecked={item.isChecked}
        description={item.description}
        onCheckChange={() => onTaskCheckChange(item.id)}
        onDelete={() => onTaskDelete(item.id)}
      ></Task>
    );
  };

  return (
    <FlatList
      data={data}
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
