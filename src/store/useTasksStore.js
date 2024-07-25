import {create} from 'zustand';

const useTasksStore = create(set => ({
  tasks: [],
  addTask: task => set(state => ({tasks: [...state.tasks, task]})),
  updateTask: (id, updatedTask) =>
    set(state => ({
      tasks: state.tasks.map(task => (task.id === id ? updatedTask : task)),
    })),
  deleteTask: id =>
    set(state => ({
      tasks: state.tasks.filter(task => task.id !== id),
    })),
  toggleTaskStatus: id =>
    set(state => ({
      tasks: state.tasks.map(task =>
        task.id === id ? {...task, completed: !task.completed} : task,
      ),
    })),
}));

export default useTasksStore;
