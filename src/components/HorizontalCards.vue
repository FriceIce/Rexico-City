<template>
    <div class="cards-container">
      <div class="cards" v-for="i in 5" :key="i">
        <div class="card">Card {{ i }}</div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  export default {};
  </script>
  
  <style scoped>
  .cards-container {
    padding: 5rem;
    width: 80%;
    margin: 0 auto;
    overflow-x: auto;
    display: flex;
    gap: 1rem;
    justify-content: flex-start;  /* changed from center to flex-start */
    align-items: center;
  }

  .cards {
    flex: 0 0 auto;
  }

  .card {
    background-color: #f4f4f4;
    padding: 2rem;
    height: 300px;
    width: 200px;
    text-align: center;
    border: 1px solid #ddd;
    padding: auto;
  }
  </style>
  