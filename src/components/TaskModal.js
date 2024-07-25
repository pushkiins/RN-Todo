import {useState, useEffect} from 'react';
import {
  Modal,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

const TaskModal = ({visible, onClose, onAddTask, onUpdateTask, task}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setCompleted(task.completed);
    } else {
      setTitle('');
      setDescription('');
      setCompleted(false);
    }
  }, [task]);

  const handleSave = () => {
    if (task) {
      onUpdateTask(task.id, {...task, title, description, completed});
    } else {
      onAddTask({id: Date.now(), title, description, completed});
    }
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={{top: 150}}>
        <TextInput
          placeholder="Заголовок"
          value={title}
          onChangeText={setTitle}
          style={styles.input}
        />
        <TextInput
          placeholder="Описание"
          value={description}
          onChangeText={setDescription}
          style={styles.input}
        />
        <TouchableOpacity onPress={handleSave} style={styles.button}>
          <Text style={styles.text}>Сохранить</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onClose} style={styles.button}>
          <Text style={styles.text}>Закрыть</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
  text: {
    paddingVertical: 8,
    borderWidth: 2,
    borderColor: '#20232a',
    borderRadius: 8,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: {
    padding: 2,
    backgroundColor: '#eaeaea',
    borderRadius: 8,
  },
});

export default TaskModal;
