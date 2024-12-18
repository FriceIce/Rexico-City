<script setup lang="ts">
import { useShoppingCartStore } from '@/stores/shoppingCartStore.ts'
import { RouterLink } from 'vue-router'
const store = useShoppingCartStore()
</script>
<template>
  <section
    class="fixed top-[48px] right-0 z-10 space-y-6 w-full max-w-[530px] h-full sm:h-max text-black bg-white px-2 pt-6 pb-16 shadow-xl rounded-bl-lg"
  >
    <!-- I'll create a state and use it to display the amount of items in the shopping cart -->
    <h1 class="text-2xl">Your cart ({{ store.setItemsCount }} articles)</h1>
    <div>
      <ul class="space-y-4 max-h-[calc(100vh-320px)] overflow-y-auto px-2">
        <li
          v-for="product in store.shoppingCart"
          :key="product.id"
          class="flex gap-4 items-center border-b-2 border-b-[#006649] pb-4"
        >
          <RouterLink :to="`/tickets/${product.id}`" class="size-12">
            <img
              :src="product.src"
              :alt="product.cardType"
              class="size-full object-center object-cover rounded cursor-pointer"
            />
          </RouterLink>
          <div class="w-full">
            <div class="flex justify-between items-center gap-2 w-full h-[36px]">
              <p class="">{{ product.cardType }}</p>
              <img src="/images/green_right_arrow.svg" alt="arrow" class="size-6 cursor-pointer" />
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-center text-white">
                <button
                  class="bg-[#2a7056] size-10 rounded-[5px]"
                  @click="store.deleteProduct({ ...product, amount: 1 })"
                >
                  -
                </button>
                <p class="grid place-items-center text-black size-7 text-lg">
                  {{ product.amount }}
                </p>
                <button
                  class="bg-[#2a7056] size-10 rounded-[5px]"
                  @click="store.addProduct({ ...product, amount: 1 })"
                >
                  +
                </button>
              </div>
              <p class="text-lg">$ {{ store.calcProductTotal(product) }}</p>
            </div>
          </div>
        </li>
      </ul>
      <div class="flex justify-between w-full text-lg pt-2 px-2">
        <p class="text-[#2a7056]">Total</p>
        <p class="">$ {{ store.setTotal }}</p>
      </div>
    </div>
    <div class="">
      <div class="flex flex-col gap-2" @click="store.openShoppingCart = !store.openShoppingCart">
        <!-- Här kan du läga pathen till de du vill annars kan vi plocka bort router-linken -->
        <router-link to="/topayment">
          <button
            class="py-[10px] bg-[#2a7056] text-white rounded-full w-full border-2 border-[#2a7056]"
          >
            To payment
          </button>
        </router-link>
        <router-link
          to="/tickets"
          class="py-[10px] bg-white text-[#2a7056] rounded-full border-2 border-[#2a7056] flex justify-center"
        >
          <button>Continue shopping</button>
        </router-link>
      </div>
    </div>
  </section>
</template>
