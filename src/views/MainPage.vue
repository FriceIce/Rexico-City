<template>
    <div>
      <Navbar />
      <HeroSection />
      <VueCalendar />
      <HorizontalCards />
      <Footer />
    </div>
  </template>
  
  <script lang="ts">
  import Navbar from '@/components/Navbar.vue';
  import HeroSection from '@/components/HeroSection.vue';
  import VueCalendar from '@/components/VueCalendar.vue';
  import HorizontalCards from '@/components/HorizontalCards.vue';
  import Footer from '@/components/Footer.vue';
  
  export default {
    components: {
      Navbar,
      HeroSection,
      VueCalendar,
      HorizontalCards,
      Footer,
    },
  };
  </script>
  

  <style>


  </style>