<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { useRoute } from 'vue-router'
import axios from 'axios'
import { ref } from 'vue'

const ticketCounter = ref<number>(0)

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
  <main v-if="!isLoading && data && !isError" class="">
    <div class="bg-white text-black w-full flex flex-col items-center">
      <section class="space-y-16 px-4 py-[29px] md:py-20">
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
                :class="`bg-[#2a7056] size-12 rounded-full grid place-items-center lg:cursor-pointer ${ticketCounter === 0 && 'opacity-50'}`"
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
            :class="`bg-[#006649] text-white w-full py-[12px] rounded-full ${ticketCounter === 0 && 'opacity-50'}`"
          >
            Next step
          </button>
        </section>
      </section>
    </div>
  </main>
</template>
