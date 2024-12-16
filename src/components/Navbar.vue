<template>
  <header class="navbar">
    
    <nav>
      <div class="search-icon" @click="goToSearch">
        <font-awesome-icon icon="magnifying-glass" />
      </div>

      <!-- Logo (Rexico City) -->
      <div class="logo" @click="goToHome">
        Rexico City
      </div>
      
      <div class="hamburger" @click="toggleMenu">
        ☰ 
      </div>
      <ul :class="{ open: isMenuOpen }">
        <li><a href="/">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import router from '@/router';

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
    const goToHome = () => {
      router.push('/')
    }
    return { isMenuOpen, toggleMenu, goToSearch, goToHome };
  },
};
</script>

<style scoped>
.logo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  color: white;
  text-decoration: none;
  transition: color 0.3s ease-in-out;
}

.logo:hover {
  color: var(--orange); /* Optional hover effect */
}

.search-icon {
  position: fixed;
  top: -0.1rem;
  left: 0.1rem;
  font-size: 1.2rem;
  cursor: pointer;
  z-index: 1001;
  padding: 0.8rem;
  transition: background-color 0.3s ease;
  width: 4rem;
  text-align: center;
}

.search-icon:hover {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 0rem;
}

.hamburger {
  position: fixed;
  display: block;
  right: 0.1rem;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.8rem;
  transition: background-color 0.3s ease;
  z-index: 1001;
  width: 4rem;
  text-align: center; /* Added to center the icon */
}

.hamburger:hover {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 0rem;
}

.navbar {
  display: flex;
  justify-content: center;
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
