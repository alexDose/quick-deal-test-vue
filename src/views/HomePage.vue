<template>
  <div class="container">
    <h1>Welcome!</h1>
    <button class="btn" @click="$router.push('/tasks')">
      Go to tasks list
    </button>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.container {
  width: 800px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  margin: 50px;
}

.btn {
  border: 1px solid #000;
  width: 200px;
  height: 50px;
  font-size: 20px;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
  margin: 30px;
  transition: box-shadow 0.2s ease-in-out, transform 0.1s ease-in-out;
}

.btn:hover {
  box-shadow: 0 20px 35px rgba(0, 0, 0, 0.3);
  color: #bc43c9;
  border-color: #bc43c9;
}

.btn:active {
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  transform: translateY(1px);
}

</style>
