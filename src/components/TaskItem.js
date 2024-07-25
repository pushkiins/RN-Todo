import {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const TaskItem = ({task, onEdit, onDelete}) => {
  const [isText, setIsText] = useState(false);
  return (
    <View style={{gap: 10}}>
      <View style={styles.wrapperTask}>
        <Text style={styles.textTask}>{task.title}</Text>
        <TouchableOpacity
          onPress={() => {
            setIsText(trek => !trek);
          }}
          style={
            (styles.buttonСheck, {backgroundColor: !isText ? 'red' : 'green'})
          }>
          <Text style={styles.textTask}>
            {isText ? 'выполненная' : 'невыполненная'}
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => onEdit(task)} style={styles.button}>
        <Text style={styles.text}>Редактировать</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onDelete(task.id)} style={styles.button}>
        <Text style={styles.text}>Удалить</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapperTask: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
  text: {
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  textTask: {
    paddingTop: 5,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#20232a',
  },
  button: {
    padding: 10,
    backgroundColor: '#eaeaea',
    borderRadius: 8,
  },
  textButton: {
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  buttonСheck: {
    padding: 10,
    backgroundColor: '#eaeaea',
    borderRadius: 8,
  },
});

export default TaskItem;
