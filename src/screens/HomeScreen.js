import {useState} from 'react';
import {View, FlatList, TouchableOpacity, Text, StyleSheet} from 'react-native';
import TaskItem from '../components/TaskItem';
import TaskModal from '../components/TaskModal';
import useTasksStore from '../store/useTasksStore';

const HomeScreen = () => {
  const {tasks, addTask, updateTask, deleteTask} = useTasksStore();
  const [modalVisible, setModalVisible] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  const handleOpenModal = task => {
    setCurrentTask(task);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setCurrentTask(null);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={({item}) => (
          <TaskItem
            task={item}
            onEdit={handleOpenModal}
            onDelete={deleteTask}
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
      <TouchableOpacity
        onPress={() => handleOpenModal(null)}
        style={styles.button}>
        <Text style={styles.text}>Добавить задачу</Text>
      </TouchableOpacity>
      <TaskModal
        visible={modalVisible}
        onClose={handleCloseModal}
        onAddTask={addTask}
        onUpdateTask={updateTask}
        task={currentTask}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  button: {
    padding: 18,
    backgroundColor: '#eaeaea',
  },
  text: {
    paddingVertical: 8,
    borderWidth: 2,
    borderColor: '#20232a',
    borderRadius: 8,
    backgroundColor: 'green',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
