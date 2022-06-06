import { StyleSheet, Text, View } from 'react-native';
import TaskInput from './components/TaskInput/TaskInput';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todos!</Text>
      <TaskInput onPress={() => console.log('pressed from APP')}></TaskInput>
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
});
