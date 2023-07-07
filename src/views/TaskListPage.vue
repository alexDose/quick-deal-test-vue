<template>
  <div class="container">
    <h2>Tasks</h2>
    <TaskList />
  </div>
</template>

<script setup lang="ts">
import TaskList from "@/components/TaskList.vue";
</script>

<style scoped>
.container {
  width: 800px;
  min-height: 500px;
  border-radius: 15px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  max-height: 500px;
  overflow: scroll;
  box-shadow: 0 20px 35px rgba(0, 0, 0, 0.3);
}

h2 {
  text-align: center;
}

</style>
