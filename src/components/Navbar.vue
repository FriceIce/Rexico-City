<template>
  <header class="navbar">
    <nav class="relative">
      <ShoppingCart v-if="openShoppingCart" />

      <div class="search-icon" @click="goToSearch">
        <font-awesome-icon icon="magnifying-glass" />
      </div>

      <!-- Logo (Rexico City) -->
      <div class="logo" @click="goToHome">Rexico City</div>

      <div class="flex gap-4 items-center">
        <div
          :class="`relative ${store.shoppingCart.length === 0 && 'hidden'}`"
          @click="openShoppingCart = !openShoppingCart"
        >
          <img src="/images/shopping_cart.svg" alt="shopping cart" class="size-5 cursor-pointer" />
          <div
            class="bg-[#ff97a4] text-black text-[10px] absolute top-[-8px] right-[-10px] size-[17px] rounded-full flex items-center justify-center"
          >
            {{ store.setItemsCount }}
          </div>
        </div>
        <div class="hamburger" @click="toggleMenu">☰</div>
      </div>
      <ul :class="{ open: isMenuOpen }">
        <li><a href="/">Home</a></li>
        <li><a href="#about">About</a></li>

        <li>
          <router-link to="/ReadMore">
            <button>Contact</button>
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useShoppingCartStore } from '@/stores/shoppingCartStore.ts'
import ShoppingCart from './ShoppingCart.vue'

library.add(faMagnifyingGlass)

export default {
  components: {
    FontAwesomeIcon,
    ShoppingCart,
  },
  setup() {
    const isMenuOpen = ref(false)
    const openShoppingCart = ref<boolean>(false)
    const router = useRouter()
    const store = useShoppingCartStore()
    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value
    }
    const goToSearch = () => {
      router.push('/search')
    }
    const goToHome = () => {
      router.push('/')
    }

    return {
      isMenuOpen,
      toggleMenu,
      goToSearch,
      goToHome,
      store,
      openShoppingCart,
    }
  },
}
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
  padding: 0.8rem;
  text-decoration: none;
  transition: color 0.3s ease-in-out;
}

.logo:hover {
  /* color: var(--orange); */ /* Optional hover effect */
  background-color: rgba(255, 255, 255, 0.2);
  z-index: -3000;
}

.search-icon {
  position: static;
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
  position: static;
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
  justify-items: justify-bewteen;
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
  width: 100%;
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
