<template>
  <div class="listContainer">
    <form @submit.prevent="addTask">
      <label>
        <input class="input" v-model="formData.name" />
      </label>
      <button class="btn" type="submit">Create task</button>
    </form>
    <ul>
      <TaskItem v-for="task in tasks" :key="task.id" :task="task" />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive } from "vue";
import { useStore } from "vuex";
import { ITaskProps } from "@/types/Task";
import TaskItem from "./TaskItem.vue";

const store = useStore();
const tasks = computed(() => store.state.tasks);
const formData = reactive({
  name: "",
});

const addTask = () => {
  if (!formData.name) {
    alert('enter task name')
  };

  const newTask: ITaskProps = {
    id: Date.now(),
    name: formData.name,
  };
  store.dispatch("addTask", newTask);
  formData.name = "";
};
</script>

<style scoped>
.listContainer {
  margin: 0 30px;
}

.input {
  height: 30px;
  width: 400px;
  padding: 0 10px;
  border-radius: 8px;
  border: none;
  outline-color: #bc43c9;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);

}

.btn {
  padding: 6px 20px;
  cursor: pointer;
  margin-left: 30px;
  border-radius: 5px;
  border: 1px solid #000;
  background-color: transparent;
  transition: box-shadow 0.2s ease-in-out, transform 0.1s ease-in-out;
}

.btn:hover {
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
  color: #bc43c9;
  border-color: #bc43c9;
}

.btn:active {
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  transform: translateY(1px);
}

ul {
  list-style: none;
  padding: 0;
}
</style>
