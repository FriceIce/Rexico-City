<template>
    <div class="search-page">
      <div class="close-icon" @click="goBack">
        <font-awesome-icon icon="xmark" />
      </div>
      <h1>Search Page</h1>
      <p>Search functionality coming soon!</p>
    </div>
  </template>
  
  <script lang="ts">
  import { useRouter } from 'vue-router';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { faXmark } from '@fortawesome/free-solid-svg-icons';
  
  library.add(faXmark);
  
  export default {
    components: {
      FontAwesomeIcon,
    },
    setup() {
      const router = useRouter();
  
      const goBack = () => {
        router.push('/');
      };
  
      return { goBack };
    },
  };
  </script>
  
  <style scoped>
  .search-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: var(--light-gray);
  }
  
  .close-icon {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 2rem;
    cursor: pointer;
  }
  </style>
  