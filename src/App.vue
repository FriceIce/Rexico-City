<script setup lang="ts">
/* import { RouterLink, RouterView } from 'vue-router' */
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue';
import Links from './components/Links.vue';
import VueCalendar from './components/VueCalendar.vue';
import HorizontalCards from './components/HorizontalCards.vue';
import HorizontalCards2 from './components/HorizontalCards2.vue';
import Footer from './components/Footer.vue';

</script>

<template>
  <div id="app">
    <Navbar />
    <HeroSection />
    
     
      
        <Links/>
        <VueCalendar />
      
      
        <HorizontalCards />
      
     
        <HorizontalCards2 />
    
    
    <Footer />
  </div>
</template>

<style >

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  background-image: url("./assets/images/jungle.png");
  --green: rgb(9, 76, 69);
  --orange: rgb(253, 150, 38);
  --grey: rgb(51, 51, 51);
  --white: rgb(255, 255, 255);

  font-family: 'jungle'
}

@font-face {
  font-family: "jungle";
  src: url(/fonts/JungleAdventurer.ttf);
  font-weight: normal;
  font-style: normal;
}




</style>
