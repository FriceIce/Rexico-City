<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useShoppingCartStore } from '@/stores/shoppingCartStore'
const store = useShoppingCartStore()
</script>

<template>
  <section
    class="space-y-4 bg-white rounded px-6 py-12 w-[95%] max-w-[560px] absolute bottom-10 left-[50%] translate-x-[-50%] text-center"
  >
    <div class="flex w-full">
      <h4 class="flex-1 text-3xl font-bold text-center">Hurray! 🥳 🎉</h4>
      <button
        class="flex-none p-2 rounded-full border-2 border-black translate-y-[-25px] lg:hover:scale-105"
      >
        <img src="/images/close_btn.svg" alt="close modal button" class="size-4 object-contain" />
      </button>
    </div>
    <p class="text-neutral-600 text-xl">The product is no added to the cart!</p>
    <div class="flex justify-around gap-2 mx-auto w-[100%] md:w-[80%] text-white">
      <RouterLink to="/tickets">
        <button class="bg-[#7448c4] py-[10px] px-5 rounded-full lg:hover:scale-105 transition-all">
          Continue shopping
        </button>
      </RouterLink>
      <button
        class="bg-[#2a7056] py-[10px] px-5 rounded-full lg:hover:scale-105 transition-all"
        @click="store.openShoppingCart = !store.openShoppingCart"
      >
        To checkout
      </button>
    </div>
  </section>
</template>
