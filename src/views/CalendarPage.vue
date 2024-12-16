<template>
  <div>
    <!-- <Navbar /> -->
    <div class="calendar-page">
      <VueCalendar />

    </div>
    <!-- <Footer /> -->
  </div>
</template>

<script lang="ts">
/* import Navbar from '@/components/Navbar.vue'; */
import VueCalendar from '@/components/VueCalendar.vue';
/* import Footer from '@/components/Footer.vue'; */


export default {
  components: {
    /* Navbar, */
    VueCalendar,
    /* Footer, */

  },
};
</script>

<style scoped>
.calendar-page {
  padding: 2rem;
}
</style>
