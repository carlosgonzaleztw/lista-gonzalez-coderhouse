import { StyleSheet, FlatList } from 'react-native';
import React from 'react';
import Task from '../common/Task/Task';

const TasksList = ({ data }) => {
  //   const tasks = data.map((task) => {
  //     console.log('adding tasks');
  //     return (
  //       <Task
  //         isChecked={task.isChecked}
  //         description={task.description}
  //         key={task.id}
  //       ></Task>
  //     );
  //   });

  console.log('DATA INSIDE LIST: ', data);

  const renderItem = ({ item }) => {
    console.log('task info: ', item);
    return (
      <Task
        isChecked={item.isChecked}
        description={item.description}
        key={item.id}
        onCheckChange={() => null}
        onDelete={() => null}
      ></Task>
    );
  };

  return <FlatList data={data} renderItem={renderItem} />;
};

export default TasksList;

const styles = StyleSheet.create({});
