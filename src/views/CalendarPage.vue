<template>
  <div>
    <Navbar />
    <div class="calendar-page">
      <VueCalendar />
      <h1>heeeeeej</h1>
    </div>
  </div>
</template>

<script lang="ts">
import Navbar from '@/components/Navbar.vue';
import VueCalendar from '@/components/VueCalendar.vue';

export default {
  components: {
    Navbar,
    VueCalendar,
  },
};
</script>

<style scoped>
.calendar-page {
  padding: 2rem;
}
</style>
