<template>
    <div class="calendar">
      <vue-calendar />
    </div>
  </template>
  
  <script lang="ts">
  import VueCalendar from 'vue-calendars';
  
  export default {
    components: {
      VueCalendar,
    },
  };
  </script>
  
  <style scoped>
  .calendar {
    padding: 2rem;
  }
  </style>
  