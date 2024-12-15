<template>
  <header class="navbar">
    <nav>
      <div class="search-icon" @click="goToSearch">
        <font-awesome-icon icon="magnifying-glass" />
      </div>
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
import { useRouter } from 'vue-router'
import { FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

library.add(faMagnifyingGlass)

export default {
  components: {
  FontAwesomeIcon,
  },
  setup() {
    const isMenuOpen = ref(false);
    const router = useRouter()

    const toggleMenu = () => { isMenuOpen.value = !isMenuOpen.value;};
    const goToSearch = () => {router.push('/search')}
    
    return { isMenuOpen, toggleMenu, goToSearch };
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

.search-icon {
  position: absolute;
  top: 0.5rem;
  left: 1rem;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1001;
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
  top: 3.2rem;
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



@media (max-width: 375px) {
  .hamburger {
  position: fixed;
  top: 0.5rem;
  right: 0.8rem;
  display: block;
  font-size: 1.5rem;
  cursor: pointer;
}

ul {
  flex-direction: column;
  position: absolute;
  top: 3.2rem;
  right: 0;
  background-color: black;
  display: none;
  padding: 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease-in-out;
}
}


</style>
