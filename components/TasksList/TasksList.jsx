import { StyleSheet, FlatList } from 'react-native';
import React from 'react';
import Task from '../common/Task/Task';

const TasksList = ({ data }) => {
  const renderItem = ({ item }) => {
    return (
      <Task
        isChecked={item.isChecked}
        description={item.description}
        key={item.id}
        onCheckChange={() => console.log('changing check')}
        onDelete={() => null}
      ></Task>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      style={styles.root}
      contentInset={{ right: 20, top: 20, left: 0, bottom: 20 }}
    />
  );
};

export default TasksList;

const styles = StyleSheet.create({
  root: {
    width: '100%',
  },
});
