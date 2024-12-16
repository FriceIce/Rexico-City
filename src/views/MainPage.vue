<template>
    <div>
      <Navbar />
      <HeroSection />
      <Links/>
      <HorizontalCards :cards="cardData"/>
      <!-- <HorizontalCards2 /> -->
      <!-- <Footer /> -->
    </div>
  </template>

  <script setup lang="ts">
  import Navbar from '@/components/Navbar.vue';
  import HeroSection from '@/components/HeroSection.vue';
  import Links from '@/components/Links.vue';
  import HorizontalCards from '@/components/HorizontalCards.vue';
 /*  import HorizontalCards2 from '@/components/HorizontalCards2.vue'; */
  import { cardData } from '../data/cardsData';
  /* import Footer from '@/components/Footer.vue'; */
  </script>


  <style>


  </style>
