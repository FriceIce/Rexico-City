<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { useRoute } from 'vue-router'
import { computed, ref, watch } from 'vue'
import ShoppingCartModal from '@/components/ShoppingCartModal.vue'
import PurchaseSummary from '@/components/PurchaseSummary.vue'
import axios from 'axios'
import { useShoppingCartStore } from '@/stores/shoppingCartStore'

const store = useShoppingCartStore()

const ticketCounter = ref<number>(0)
const nextStep = ref<boolean>(false)
const price = ref<number>(0)
const showSummary = ref<boolean>(true)

const setShowSummary = () => (showSummary.value = !showSummary.value)

const setNextStep = () => {
  showSummary.value = true // This sets showSummary state to true, ensuring that the "summary-list" is alwasy open when the user initially enters the <PurchaseSummary /> component.
  nextStep.value = !nextStep.value
}

const numberOfTickets = computed(() => {
  const tickets = ticketCounter.value
  return tickets > 1 ? `${tickets} pcs` : `${tickets} pc`
})

watch(nextStep, () => {
  // If the "next step" btn is pressed and the fetched data is truthy then multiply the ticket price with the current ticket counter
  if (nextStep.value && data.value) {
    price.value = data.value.price * ticketCounter.value
  }
})

// useRoute for accessing route params
const route = useRoute()

const fetchTicketInfo = async () => {
  const ticketId = route.params.id
  const response = await axios.get(`/database/tickets/ticket-info-${ticketId}.json`)
  return response.data
}

const { data, isLoading, isError } = useQuery<Product>({
  queryKey: ['ticketInfo', route.params.ticketId],
  queryFn: fetchTicketInfo,
})
</script>

<template>
  <main v-if="!isLoading && data && !isError" class="relative h-[calc(100dvh-104px)]">
    <ShoppingCartModal v-if="store.showShoppingCartModal" />
    <div class="bg-[#f1f9f6] text-black w-full flex flex-col items-center p-6">
      <section v-if="!nextStep" class="space-y-16 py-[29px] md:py-20">
        <article class="space-y-8 max-w-[610px]">
          <section class="space-y-6">
            <h1 class="font-bold text-3xl md:text-5xl">{{ data.title }}</h1>
            <p class="">
              {{ data.description }}
            </p>
          </section>
          <section class="">
            <h2 class="font-bold text-xl md:text-3xl">This is included:</h2>
            <ul>
              <li
                v-for="(item, index) in data.includes"
                :key="index"
                class="list-disc list-inside text-sm md:text-base"
              >
                {{ item }}
              </li>
            </ul>
          </section>
        </article>
        <section class="space-y-10 max-w-[610px] w-full">
          <div class="flex justify-between w-full">
            <div>
              <p>{{ data.cardType }}</p>
              <p>$ {{ data.price }}/each</p>
            </div>
            <div class="flex items-center gap-4">
              <button
                :disabled="ticketCounter === 0"
                :class="`bg-[#2a7056] size-12 rounded-full grid place-items-center ${ticketCounter === 0 && 'opacity-50 cursor-not-allowed'}`"
                @click="ticketCounter--"
              >
                <p class="text-white text-center">-</p>
              </button>
              <p class="w-2">{{ ticketCounter }}</p>
              <button
                class="bg-[#2a7056] size-12 rounded-full grid place-items-center lg:cursor-pointer"
                @click="ticketCounter++"
              >
                <p class="text-white text-center">+</p>
              </button>
            </div>
          </div>
          <button
            :disabled="ticketCounter === 0"
            :class="`bg-[#006649] text-white w-full py-[12px] rounded-full ${ticketCounter === 0 && 'opacity-50 cursor-not-allowed'}`"
            @click="setNextStep()"
          >
            Next step
          </button>
        </section>
      </section>
      <PurchaseSummary
        :data
        :next-step
        :show-summary
        :ticket-counter
        :price
        :number-of-tickets
        :set-show-summary
        :set-next-step
      />
    </div>
  </main>
</template>
