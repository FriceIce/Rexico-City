<template>
  <header class="navbar">
    <nav class="relative">
      <ShoppingCart v-if="store.openShoppingCart" />

      <div class="search-icon" @click="goToSearch">
        <font-awesome-icon icon="magnifying-glass" />
      </div>

      <!-- Logo (Rexico City) -->
      <div class="logo" @click="goToHome">Rexico City</div>

      <div class="flex gap-2 md:gap-6 items-center h-full">
        <div
          :class="`relative ${store.shoppingCart.length === 0 && 'hidden'}`"
          @click="store.openShoppingCart = !store.openShoppingCart"
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
    }
  },
}
</script>

<style scoped>
.logo {
  display: grid;
  place-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  color: white;
  padding: 0rem;
  text-decoration: none;
  padding-inline: 6px;
  height: 100%;
  transition: color 0.3s ease-in-out;
}

.logo:hover {
  /* color: var(--orange); */ /* Optional hover effect */
  background-color: rgba(255, 255, 255, 0.2);
}

.search-icon {
  display: grid;
  place-items: center;
  font-size: 1.2rem;
  cursor: pointer;
  z-index: 1001;
  padding: 0rem;
  transition: background-color 0.3s ease;
  width: 4rem;
  height: 100%;
  text-align: center;
}

.search-icon:hover {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 0rem;
}

.hamburger {
  display: grid;
  place-items: center;
  font-size: 1.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  z-index: 1001;
  width: 4rem;
  height: 100%;
}

.hamburger:hover {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 0rem;
}

.navbar {
  display: flex;
  justify-content: center;
  min-height: 48px;
  position: sticky;
  inset: 0 0 0 0;
  z-index: 10;

  background-color: var(--green);
  color: white;
  /* padding: 10px; */
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
  top: 48px;
  right: 0;
  background-color: #094c45;
  display: none;
  padding: 50px;
  border-bottom-left-radius: 4px;
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

@media (max-width: 740px) {
  .hamburger {
    font-size: 1.5rem;
    cursor: pointer;
    /* width: auto; */
  }

  .hamburger:hover {
    background: none;
  }
}
</style>
