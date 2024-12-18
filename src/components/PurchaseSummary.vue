<script setup lang="ts">
import { useShoppingCartStore } from '@/stores/shoppingCartStore.ts'
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

const store = useShoppingCartStore()
</script>
<template>
  <section
    v-if="nextStep && data"
    class="flex flex-col items-center justify-center gap-6 w-full max-w-[610px] h-full"
  >
    <div class="bg-[#1b5240] text-white w-full py-8 px-4 rounded">
      <h3 class="text-3xl pb-6">Summary</h3>
      <div class="space-y-5">
        <div class="flex items-center gap-4 justify-between">
          <div class="flex items-center gap-3">
            <img
              src="/images/chevron-icon.svg"
              alt="chevon arrow"
              @click="setShowSummary()"
              :class="`size-8 cursor-pointer transition-all ${!showSummary && 'rotate-[180deg]'}`"
            />
            <p class="w-max">Tickets</p>
          </div>
          <div class="flex gap-4">
            <p class="">{{ numberOfTickets }}</p>
            <p class="">$ {{ price }}</p>
          </div>
        </div>
        <!-- This will show the all the tickets selected in the previous section in a list.  -->
        <div
          :class="`grid transition-all duration-200 ease-linear
              ${showSummary ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`"
        >
          <ul
            :class="`space-y-4 overflow-hidden border-b transition-all duration-200 ease-linear ${showSummary && 'pb-6'}`"
          >
            <li v-for=", in Array(ticketCounter)" class="flex gap-2 justify-between">
              <p class="ml-11">{{ data.cardType }}</p>
              <p class="">$ {{ data.price }}</p>
            </li>
          </ul>
        </div>
        <div class="flex justify-between">
          <h4 class="font-bold text-xl">Total</h4>
          <p class="text-xl font-bold">
            $ {{ String(price).indexOf('.') >= 0 ? price.toFixed(2) : price }}
          </p>
        </div>
      </div>
    </div>
    <div class="flex gap-4 w-full">
      <button
        class="flex-1 bg-[#e6fbf6] text-[#2a7056] py-[10px] rounded-full border-2 border-[#2a7056]"
        @click="setNextStep()"
      >
        Back
      </button>
      <button
        class="flex-1 bg-[#2a7056] text-white py-[10px] rounded-full border-2 border-[#2a7056] flex justify-center"
        @click="
          () => {
            store.addProduct({ ...data, amount: ticketCounter })
            store.showShoppingCartModal = true
          }
        "
      >
        Add to cart
      </button>
    </div>
  </section>
</template>
