<script setup lang="ts">
import Navbar from './components/Navbar.vue';
</script>

<template>
  <div id="app">
    <Navbar />
    <router-view />
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
