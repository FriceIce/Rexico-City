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

const selectedDelivery = ref<string | null>(null)
const selectedPayment = ref<string | null>(null)
</script>

<template>
  <section class="hero">
    <div class="hero-content">
      <img src="/src/assets/images/loggan.png" alt="Rexico City" class="hero-image" />
      <h1>Payment journey starts here</h1>
      <button class="djunglebutton">Shopping Cart</button>

      <div class="pl-6 pt-6 pb-12 mt-7 bg-orange-400 w-3/4 rounded-xl mx-auto">
        <h2 class="text-white text-3xl pb-6">Your Cart</h2>
        <article class="flex justify-around">
          <p class="text-white">Article</p>
          <p class="text-white">Price</p>
          <p class="text-white">Quantity</p>
          <p class="text-white">Sum</p>
        </article>

        <ul class="flex justify-around">
          <li>Dino Card</li>
          <li>420/st</li>
          <li>3</li>
          <li>1260</li>
          <!-- <button @click="removeItem" class="">X</button> -->
        </ul>
      </div>
    </div>

    <div class="mt-20 max-w-md mx-auto space-y-8 bg-white rounded-md p-10">
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
                <span class="inline-block bg-pink-200 text-pink-800 text-sm font-semibold px-2 py-1 rounded">
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
        <div class="text-2xl font-bold my-2">1260 kr</div>
        <button
          class="bg-black text-white w-full py-3 rounded text-lg font-semibold hover:bg-gray-900 transition-colors"
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
  height: 110rem;
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
