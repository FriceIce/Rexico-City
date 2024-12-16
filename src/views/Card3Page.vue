<template>
    <div class="card-page">
      <h1>Welcome to Card 3 Page</h1>
      <p>Details about Card 3 go here.</p>
      <button @click="goBack">Back to Home</button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default defineComponent({
    setup() {
      const router = useRouter();
  
      const goBack = () => {
        router.push('/');
      };
  
      return { goBack };
    },
  });
  </script>
  
  <style scoped>
  .card-page {
    text-align: center;
    margin-top: 2rem;
  }
  </style>
  