import { createStore } from "vuex";
import { ITaskProps } from "@/types/Task";
const TASK_STORAGE_KEY = "tasks";

const store = createStore({
  state: {
    tasks: [] as ITaskProps[],
  },
  mutations: {
    setTasks(state, tasks: ITaskProps[]) {
      state.tasks = tasks;
    },
    addTask(state, task: ITaskProps) {
      state.tasks.push(task);
      localStorage.setItem(TASK_STORAGE_KEY, JSON.stringify(state.tasks));
    },
    updateTask(state, updatedTask: ITaskProps) {
      const task = state.tasks.find((task) => task.id === updatedTask.id);
      if (task) {
        task.name = updatedTask.name;
      }
      localStorage.setItem(TASK_STORAGE_KEY, JSON.stringify(state.tasks));
    },
    deleteTask(state, taskId: number) {
      state.tasks = state.tasks.filter((task) => task.id !== taskId);
      localStorage.setItem(TASK_STORAGE_KEY, JSON.stringify(state.tasks));
    },
  },
  actions: {
    addTask({ commit }, task: ITaskProps) {
      commit("addTask", task);
    },
    updateTask({ commit }, updatedTask: ITaskProps) {
      commit("updateTask", updatedTask);
    },
    deleteTask({ commit }, taskId: number) {
      commit("deleteTask", taskId);
    },
  },
});

const tasksData = localStorage.getItem(TASK_STORAGE_KEY);
if (tasksData != null) {
  store.commit("setTasks", JSON.parse(tasksData));
}

export default store;
