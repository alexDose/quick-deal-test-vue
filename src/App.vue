<template>
  <div id="app">
    <navbar></navbar>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
</script>

<style scoped>
:global(body) {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background-color: #f9e6fc;
}

#app {
  height: 100vh;
}

main {
  display: flex;
  justify-content: center;
  height: calc(100vh - 50px)
}

</style>
