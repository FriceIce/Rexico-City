<script setup lang="ts">
defineProps<{
  data: Product
  nextStep: boolean
  showSummary: boolean
  price: number
  ticketCounter: number
  numberOfTickets: string
  setShowSummary: () => void
  setNextStep: () => void
}>()

import { ref } from 'vue'

import visaLogo from '../assets/images/visaLogo.png'
import bankidLogo from '../assets/images/bankidLogo.png'
import swishLogo from '../assets/images/swishLogo.png'
import { useShoppingCartStore } from '@/stores/shoppingCartStore.ts'

const store = useShoppingCartStore()
const selectedDelivery = ref<string | null>(null)
const selectedPayment = ref<string | null>(null)
</script>

<template>
  <section class="hero">
    <div class="hero-content">
      <img src="/src/assets/images/loggan.png" alt="Rexico City" class="hero-image" />
      <h1>Payment journey starts here</h1>
      <button class="djunglebutton">Shopping Cart</button>

      <div class=" mx-auto pt-2 mt-8 bg-orange-400 space-y-6 w-full max-w-[530px] h-full sm:h-max text-white px-2 pb-16 shadow-xl rounded-md "
      >
      <h1 class="text-2xl">Your cart ({{ store.setItemsCount }} articles)</h1>
    <div>
      <ul class="space-y-4 max-h-[calc(100vh-360px)] overflow-y-auto px-2">
        <li v-for="product in store.shoppingCart" :key="product.id" class="flex gap-4 items-center border-b-2 border-b-[#006649] pb-4">
          <img
            :src="product.src"
            alt="dino card"
            class="w-2 h-16 rounded cursor-pointer"
          />
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
                <p class="grid place-items-center text-white size-7 text-lg">
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
    </div>
  </div>

    <div class="mt-20 max-w-md mx-auto space-y-8 bg-white rounded-md p-10 mb-5">
      <!-- Leveranssektion -->
      <div>
        <h2 class="text-lg font-semibold mb-2">Leverans</h2>
        <div class="space-y-2">
          <label
            class="flex items-start space-x-2 p-4 border rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <input
              type="radio"
              name="delivery"
              value="sms"
              v-model="selectedDelivery"
              class="mt-1"
            />
            <div class="flex-1">
              <div class="font-medium">Mina sidor och SMS</div>
              <p class="text-sm text-gray-600">
                Gratis · Entrébiljetter och Ticket to Ride kommer som SMS och till
                Mina Sidor. Häften och presentkort hämtas i en kassa när du besöker parken.
              </p>
            </div>
          </label>
        </div>
      </div>

      <!-- Betalningssätt -->
      <div>
        <h2 class="text-lg font-semibold mb-2">Betalningssätt</h2>

        <!-- Betala med Klarna -->
        <label
          class="block p-4 border rounded-lg hover:bg-gray-100 transition-colors cursor-pointer mb-4"
        >
          <div class="flex items-start space-x-2">
            <input
              type="radio"
              name="paymentMethod"
              value="klarna"
              v-model="selectedPayment"
              class="mt-1"
            />
            <div class="flex-1">
              <div class="flex items-center justify-between">
                <span class="font-medium">Betala med Klarna</span>
                <span class="inline-block bg-pink-200 text-black text-sm font-semibold px-2 py-1 rounded">
                  Klarna
                </span>
              </div>
              <p class="text-sm text-gray-600 mt-1">Säkert och smidigt</p>
              <p class="text-sm text-gray-700 mt-2">
                ✔ Betala säkert med Klarnas <a href="#" class="underline">Köparskydd</a>. Se <a href="#" class="underline">betalalternativ</a>.
              </p>
              <div class="flex space-x-2 mt-2">
                <img :src="visaLogo" alt="Visa" class="h-6" />
                <img :src="bankidLogo" alt="BankID" class="h-6" />
                <img :src="swishLogo" alt="Swish" class="h-6" />
              </div>
            </div>
          </div>
        </label>

        <!-- Betala med kort -->
        <label
          class="block p-4 border rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
        >
          <div class="flex items-start space-x-2">
            <input
              type="radio"
              name="paymentMethod"
              value="kort"
              v-model="selectedPayment"
              class="mt-1"
            />
            <div class="flex-1">
              <div class="font-medium">Betala med kort</div>
              <p class="text-sm text-gray-600 mt-1">Fyll i kortuppgifter</p>
            </div>
          </div>
        </label>
      </div>

      <!-- Totalsumma och CTA -->
      <div class="text-center">
        <div class="text-xl font-semibold">
          Totalbelopp <a href="#" class="underline text-sm font-normal">Visa detaljer</a>
        </div>
        <div class="text-2xl font-bold my-2">$ {{ store.setTotal }}</div>
        <button
          class="bg-black text-white w-full py-3 rounded text-lg font-semibold hover:bg-gray-900 transition-colors cursor-pointer"
          :disabled="!selectedPayment || !selectedDelivery"
        >
          Betala köp
        </button>
        <p class="text-xs text-gray-600 mt-2">
          Genom att klicka på "Betala köp" godkänner jag <a href="#" class="underline">Villkor för Klarnas Shoppingtjänst</a>.
          Jag godkänner <a href="#" class="underline">villkoren</a> för AB Gröna Lunds Tivoli. Jag bekräftar min <a href="#" class="underline">ångerrätt</a>.
        </p>
        <div class="text-xs text-gray-500 mt-2 space-x-2">
          <a href="#" class="underline">KCO Dataskyddsinformation</a>
          <a href="#" class="underline">Klarnas Dataskyddsinformation</a>
          <a href="#" class="underline">Dataskyddsinformation</a>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  height: 100%;
}

.hero-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
}

.hero-content img {
  margin-top: 2rem;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 28rem;
}

.hero-content h1 {
  font-size: 3rem;
  color: white;
  margin-top: 3.5rem;
  display: flex;
  justify-content: center;
  padding: 1rem;
  border-radius: 10px;
  text-shadow: 6px 7px 10px rgba(0, 0, 0, 0.3);
}

.hero-content .djunglebutton {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6rem;
  width: 100%;
  margin: 0 auto;
  margin-top: 3.5rem;
  transition: all 0.3s ease;
  text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
}

.djunglebutton {
  width: 100%;
  font-family: jungle;
  padding: 0.5rem 1rem;
  font-size: 1.8rem;
  border: 2px solid rgba(255, 255, 255, 0.2);
  background-color: var(--orange);
  color: white;
  cursor: pointer;
  /* border-radius: 50; */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  transform: translateY(0);
}

.djunglebutton:hover {
  background-color: rgb(255, 165, 0);
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  border-color: rgba(255, 255, 255, 0.4);
}

.djunglebutton:hover {
  background-color: rgb(224, 132, 33);
}
/* -------------------mobile v------------------------ */

@media (max-width: 375px) {
  .hero {
    position: relative;
    height: 30rem;
    overflow: hidden;
    /* border: 5px solid pink; */
  }

  .hero-content img {
    margin-top: 1.8rem;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    width: 20rem;
  }

  .hero-content h1 {
    font-size: 1.7rem;
    color: white;
    margin-top: 1.7rem;
    display: flex;
    justify-content: center;
    padding: 1rem;
    border-radius: 10px;
    text-shadow: 6px 7px 10px rgba(0, 0, 0, 0.3);
  }

  .hero-content button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3rem;
    width: 4rem;
    margin: 0 auto;
    margin-top: 1.2rem;
    transition: all 0.3s ease;
    text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  }
}
</style>
