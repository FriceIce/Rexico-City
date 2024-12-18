<script setup lang="ts">
import TicketsLayout from '@/components/TicketLayout.vue'
</script>
<template>
  <section class="text-white max-w-[960px] w-[100%] mx-auto">
    <div class="px-4 pb-20">
      <header
        class="space-y-6 bg-[#073024] text-center max-w-[640px] w-[100%] p-6 mx-auto my-10 md:my-16 rounded shadow-xl"
      >
        <h1 class="text-[30px] md:text-[50px] font-bold">Prices & Tickets</h1>
        <p class="text-base">
          On this page, we have gathered season passes, tickets, and experiences for an epic day at
          Rexico city.
        </p>
        <div class="space-y-4">
          <h3 class="text-2xl font-bold">Right now:</h3>
          <div class="">
            <p>Christmas offer on the Gold Card 👀🦕</p>
            <p>Purchase one Gold Card = one Green Card absolutely free</p>
            <p>(Value at 42 $)</p>
          </div>
        </div>
      </header>
      <div class="space-y-[100px]">
        <div class="">
          <h2 class="text-3xl">Season Pass 2025</h2>
          <p class="text-base">
            Buy one of our season passes and enjoy free admission with unlimited rides all summer.
            Don’t miss the special offer on the Gold Pass ⭐️
          </p>
        </div>
        <div class="w-full">
          <TicketsLayout />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
