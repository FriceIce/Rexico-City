<template>
    <div>
      <Navbar />
      <HeroSection />
      <Links/>
      <HorizontalCards />
      <HorizontalCards2 />
      <Footer />
    </div>
  </template>

  <script lang="ts">
  import Navbar from '@/components/Navbar.vue';
  import HeroSection from '@/components/HeroSection.vue';
  import Links from '@/components/Links.vue';
  import HorizontalCards from '@/components/HorizontalCards.vue';
  import HorizontalCards2 from '@/components/HorizontalCards2.vue';
  import Footer from '@/components/Footer.vue';

  export default {
    components: {
      Navbar,
      HeroSection,
      Links,
      HorizontalCards,
      HorizontalCards2,
      Footer,
    },
  };
  </script>


  <style>


  </style>
