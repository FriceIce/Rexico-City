<template>
  <header class="navbar">
    <nav>
      <div class="logo"></div>
      <div class="hamburger" @click="toggleMenu">
        ☰
      </div>
      <ul :class="{ open: isMenuOpen }">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  setup() {
    const isMenuOpen = ref(false);
    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };
    return { isMenuOpen, toggleMenu };
  },
};
</script>

<style scoped>
.logo {
  position: absolute;
  top: 0.9rem;
  left: 50%;
  transform: translateX(-50%);
}

.navbar {
  height: 3rem;
  position: sticky;
  top: 0;
  background-color: var(--green);
  color: white;
  padding: 1rem;
  z-index: 1000;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul {
  flex-direction: column;
  position: absolute;
  top: 1.8rem;
  right: 0;
  background-color: black;
  display: none;
  padding: 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease-in-out;
}

ul.open {
  display: flex;
}

ul li {
  margin: 0.5rem 0;
}

ul li a {
  color: white;
  text-decoration: none;
  transition: color 0.3s ease-in-out;
}

ul li a:hover {
  color: var(--orange);
}

.hamburger {
  position: fixed;
  top: 0.5rem;
  right: 1.2rem;
  display: block;
  font-size: 1.5rem;
  cursor: pointer;
}
</style>
