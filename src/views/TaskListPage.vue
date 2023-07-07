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
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
}

h2 {
  text-align: center;
}

</style>
