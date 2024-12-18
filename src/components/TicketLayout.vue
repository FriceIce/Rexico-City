<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { RouterLink } from 'vue-router'
import axios from 'axios'

const fetchTickets = async () => {
  const response = await axios.get('/database/tickets/cards.json')
  console.log(response.data)
  return response.data
}

const { data, isLoading } = useQuery<Array<TicketCard>>({
  queryKey: ['tickets'],
  queryFn: () => fetchTickets(),
})
</script>
<template>
  <ul class="card-layout gap-x-6 gap-y-24 flex-wrap">
    <li
      v-if="!isLoading && data"
      v-for="ticket in data"
      :key="ticket.id"
      class="flex max-w-[360px] h-full w-full rounded-lg mx-auto lg:mx-0 shadow-xl"
      :style="`background: ${ticket.background}`"
    >
      <div class="relative flex flex-col">
        <div class="absolute top-[-64px] left-[50%] translate-x-[-50%] w-[220px]">
          <img
            :src="ticket.image.src"
            :alt="ticket.image.alt"
            class="w-full h-[128px] object-cover object-center rounded-lg shadow-lg"
          />
        </div>
        <section class="flex-1 flex flex-col gap-4 space-y-4 w-full text-center pt-[80px] p-4">
          <div class="flex flex-col gap-3 justify-between">
            <h1 class="font-bold text-4xl" :style="`color: ${ticket.title.color}`">
              {{ ticket.title.text }}
            </h1>
            <p class="" :style="`color: ${ticket.subtitle.color}`">
              {{ ticket.subtitle.text }}
            </p>
          </div>
          <div class="flex-1 flex flex-col justify-end gap-3">
            <p class="text-xl" :style="`color: ${ticket.subtitle.color}`">$ {{ ticket.price }}</p>
            <RouterLink :to="`/tickets/${ticket.id}`">
              <button
                class="w-full py-[12px] rounded-full lg:hover:scale-105 transition-all"
                :style="`background: ${ticket.button.bgColor}`"
              >
                Buy now
              </button>
            </RouterLink>
          </div>
        </section>
      </div>
    </li>
  </ul>
</template>

<style scoped>
.card-layout {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  
}
</style>
