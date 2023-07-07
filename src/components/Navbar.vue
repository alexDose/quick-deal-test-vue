<template>
  <div class="nav">
    <h3>Task Manager App</h3>
    <div class="mainLink">
      <div class="link" @click="$router.push('/')">
        Main
      </div>
      <div class="link" @click="$router.push('/tasks')">
        Task List
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.nav {
  padding: 0 40px;
  height: 50px;
  display: flex;
  align-items: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
}

.mainLink {
  display: flex;
  margin-left: auto;
}

.link {
  padding: 10px;
  cursor: pointer;
  text-align: center;
  color: #000;
}

.link:hover {
  color: #bc43c9;
}

</style>
