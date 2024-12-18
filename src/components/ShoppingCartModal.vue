<script setup lang="ts">
import { useShoppingCartStore } from '@/stores/shoppingCartStore'
import { RouterLink } from 'vue-router'
const store = useShoppingCartStore()
const setToCheckout = () => {
  store.openShoppingCart = true
  store.showShoppingCartModal = false
}
</script>

<template>
  <section
    class="space-y-4 bg-white rounded px-6 py-12 w-[95%] max-w-[560px] absolute bottom-10 z-10 left-[50%] translate-x-[-50%] text-center modal-shadow"
  >
    <div class="flex w-full">
      <h4 class="flex-1 text-3xl font-bold text-center">Hurray! 🥳 🎉</h4>
      <button
        class="flex-none p-2 rounded-full border-2 border-black translate-y-[-25px] lg:hover:scale-105"
        @click="store.showShoppingCartModal = false"
      >
        <img src="/images/close_btn.svg" alt="close modal button" class="size-4 object-contain" />
      </button>
    </div>
    <p class="text-neutral-600 text-xl">The product is no added to the cart!</p>
    <div class="flex justify-around gap-2 mx-auto w-[100%] md:w-[80%] text-white">
      <RouterLink to="/tickets">
        <button
          class="bg-[#7448c4] py-[10px] px-5 rounded-full lg:hover:scale-105 transition-all"
          @click="store.showShoppingCartModal = !store.showShoppingCartModal"
        >
          Continue shopping
        </button>
      </RouterLink>
      <button
        class="bg-[#2a7056] py-[10px] px-5 rounded-full lg:hover:scale-105 transition-all"
        @click="setToCheckout()"
      >
        To checkout
      </button>
    </div>
  </section>
</template>

<style>
.modal-shadow {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}
</style>
