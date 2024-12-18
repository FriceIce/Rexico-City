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
import { useRouter } from 'vue-router'

const store = useShoppingCartStore()
const selectedDelivery = ref<string | null>(null)
const selectedPayment = ref<string | null>(null)
const router = useRouter()

const goToBuyCompleted = () => {
  if (selectedPayment && selectedDelivery) {
    router.push('/buycompleted')
  } else {
    alert('Please select a delivery method and payment option before proceeding.')
  }
}
</script>

<template>
  <section class="hero">
    <div class="hero-content flex flex-col items-center text-center px-4 md:px-8">
      <img
        src="/src/assets/images/loggan.png"
        alt="Rexico City"
        class="hero-image w-full max-w-xs sm:max-w-md"
      />
      <h1 class="text-3xl md:text-4xl font-bold mt-4 text-white">Payment journey starts here</h1>
      <button
        class="djunglebutton bg-orange-400 text-white text-2xl font-semibold py-2 px-4 rounded-lg shadow-md mt-4 hover:bg-orange-500 transition"
      >
        Shopping Cart
      </button>

      <div class="w-full max-w-md bg-orange-400 text-white rounded-lg shadow-lg mt-6 p-4 md:p-6">
        <h1 class="text-xl md:text-2xl font-semibold">{{ store.setItemsCount }} articles</h1>
        <ul class="mt-4 space-y-4 max-h-[calc(100vh-320px)] overflow-y-auto">
          <li
            v-for="product in store.shoppingCart"
            :key="product.id"
            class="flex gap-4 items-center border-b border-green-600"
          >
            <img :src="product.src" alt="dino card" class="w-16 h-16 rounded" />
            <div class="flex-1">
              <div class="flex justify-between items-center">
                <p class="font-medium">{{ product.cardType }}</p>
                <img src="/images/green_right_arrow.svg" alt="arrow" class="w-6 h-6" />
              </div>
              <div class="flex justify-between items-center mt-2">
                <div class="flex items-center space-x-2">
                  <button
                    class="bg-green-600 text-white w-8 h-8 flex items-center justify-center rounded"
                    @click="store.deleteProduct({ ...product, amount: 1 })"
                  >
                    -
                  </button>
                  <p class="text-lg">{{ product.amount }}</p>
                  <button
                    class="bg-green-600 text-white w-8 h-8 flex items-center justify-center rounded"
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
        <div class="flex justify-between mt-4 text-lg">
          <p class="text-green-600">Total</p>
          <p class="font-semibold">$ {{ store.setTotal }}</p>
        </div>
      </div>
    </div>

    <div class="mt-8 w-full max-w-md mx-auto bg-white rounded-lg p-4 md:p-6 mb-6">
      <!-- Leverans -->
      <div class="mb-6">
        <h2 class="text-lg font-semibold mb-2">Leverans</h2>
        <div class="space-y-2">
          <label
            class="flex items-start gap-2 p-4 border rounded-lg hover:bg-gray-100 cursor-pointer"
          >
            <input type="radio" name="delivery" value="sms" v-model="selectedDelivery" />
            <div class="flex-1 text-sm">
              <p class="font-medium">Mina sidor och SMS</p>
              <p class="text-gray-600">
                Gratis · Entrébiljetter och Ticket to Ride kommer som SMS och till Mina Sidor.
                Häften och presentkort hämtas i en kassa när du besöker parken.
              </p>
            </div>
          </label>
        </div>
      </div>

      <!-- Betalningssätt -->
      <div class="mb-6">
        <h2 class="text-lg font-semibold mb-2">Betalningssätt</h2>
        <label class="block p-4 border rounded-lg hover:bg-gray-100 cursor-pointer mb-4">
          <div class="flex items-start gap-2">
            <input type="radio" name="paymentMethod" value="klarna" v-model="selectedPayment" />
            <div class="flex-1 text-sm">
              <p class="font-medium flex justify-between">
                Betala med Klarna
                <span class="bg-pink-200 text-black px-2 py-1 rounded">Klarna</span>
              </p>
              <p class="text-gray-600 mt-1">Säkert och smidigt</p>
              <div class="flex space-x-2 mt-2">
                <img :src="visaLogo" alt="Visa" class="h-6" />
                <img :src="bankidLogo" alt="BankID" class="h-6" />
                <img :src="swishLogo" alt="Swish" class="h-6" />
              </div>
            </div>
          </div>
        </label>
        <label class="block p-4 border rounded-lg hover:bg-gray-100 cursor-pointer">
          <div class="flex items-start gap-2">
            <input type="radio" name="paymentMethod" value="kort" v-model="selectedPayment" />
            <div class="flex-1 text-sm">
              <p class="font-medium">Betala med kort</p>
              <p class="text-gray-600 mt-1">Fyll i kortuppgifter</p>
            </div>
          </div>
        </label>
      </div>

      <!-- Totalsumma och CTA -->
      <div class="text-center">
        <div class="text-lg font-semibold">
          Totalbelopp <a href="#" class="underline text-sm">Visa detaljer</a>
        </div>
        <p class="text-2xl font-bold mt-2">$ {{ store.setTotal }}</p>
        <button
          class="bg-black text-white w-full py-3 rounded-lg mt-4 hover:bg-pink-400 transition disabled:bg-gray-400 cursor-pointer"
          :disabled="!selectedPayment || !selectedDelivery"
          @click="goToBuyCompleted"
        >
          Betala köp
        </button>
        <p class="text-xs text-gray-600 mt-4">
          Genom att klicka på "Betala köp" godkänner jag <a href="#" class="underline">Villkor</a>.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
}

.hero-image {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}

.djunglebutton {
  width: 100%;
  height: 4rem;
}

.hero-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
  text-align: center;
  padding: 1rem;
}

.hero-content img {
  margin-top: 3rem;
  width: 28rem;
  max-width: 100%;
}

.hero-content h1 {
  font-size: 3rem;
  color: white;
  margin-top: 3.5rem;
  padding: 0rem;
  border-radius: 10px;
  text-shadow: 6px 7px 10px rgba(0, 0, 0, 0.3);
}
</style>
