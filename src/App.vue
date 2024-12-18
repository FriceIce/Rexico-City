<script setup lang="ts">
import { useRoute } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from '../src/components/Footer.vue'
const route = useRoute()
</script>

<template>
  <div id="app" class="relative">
    <Navbar v-if="!route.meta.hideNavbar" />
    <router-view v-slot="{ Component }">
      <transition name="slide-right">
        <component :is="Component" />
      </transition>
    </router-view>

    <Footer />
  </div>
</template>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  background-image: url('./assets/images/jungle.png');
  --green: rgb(9, 76, 69);
  --orange: rgb(253, 150, 38);
  --grey: rgb(51, 51, 51);
  --white: rgb(255, 255, 255);

  font-family: 'jungle';
}

@font-face {
  font-family: 'jungle';
  src: url(/fonts/JungleAdventurer.ttf);
  font-weight: normal;
  font-style: normal;
}

/* Slide-in effect for entering from the right */
.slide-right-enter-active {
  transition: transform 0.3s ease-out;
}
.slide-right-enter {
  transform: translateX(100%);
}
.slide-right-leave-active {
  transition: transform 0.3s ease-out;
}
.slide-right-leave-to {
  transform: translateX(100%);
}

/* Responsive design */
#app {
  padding: 0px;
}

@media (max-width: 768px) {
  #app {
    padding: 0px;
  }

  Navbar,
  Footer {
    font-size: 14px;
  }

  .slide-right-enter-active,
  .slide-right-leave-active {
    transition: transform 0.2s ease-out;
  }
}

@media (max-width: 480px) {
  #app {
    padding: 0px;
    margin: 0;
  }

  Navbar,
  Footer {
    font-size: 12px;
  }

  .slide-right-enter-active,
  .slide-right-leave-active {
    transition: transform 0.1s ease-out;
  }
}
</style>
