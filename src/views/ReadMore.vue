<!-- <template>
  <div class="info-page">
    <header class="info-header">
      <h1>Welcome to the Information Page</h1>
      <p>Explore different sections of our site through this page.</p>
    </header>

    <nav class="info-navigation">
      <button @click="navigateTo('/calendar')">Calendar</button>
      <button @click="navigateTo('/tickets')">Tickets</button>
      <button @click="navigateTo('/search')">Search</button>
    </nav>

    <section class="info-content">
      <article>
        <h2>About Rexico City</h2>
        <p>
          Rexico City is the ultimate destination for dinosaur enthusiasts. Learn more about our
          attractions and events on this page.
        </p>
      </article>

      <article>
        <h2>Upcoming Events</h2>
        <p>Check out our calendar for the latest events happening in Rexico City.</p>
      </article>

      <article>
        <h2>Get Your Tickets</h2>
        <p>Purchase tickets for your favorite attractions directly from the Tickets page.</p>
      </article>
    </section>
  </div>
</template>

<script lang="ts">
import { useRouter } from 'vue-router'

export default {
  name: 'MoreInfo',
  setup() {
    const router = useRouter()

    const navigateTo = (path: string) => {
      router.push(path)
    }

    return { navigateTo }
  },
}
</script>

<style scoped>
.info-page {
  padding: 2rem;
  font-family: Arial, sans-serif;
}

.info-header {
  text-align: center;
  margin-bottom: 2rem;
}

.info-header h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.info-header p {
  font-size: 1.2rem;
  color: #666;
}

.info-navigation {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.info-navigation button {
  padding: 0.8rem 1.2rem;
  font-size: 1rem;
  border: none;
  background-color: var(--orange, #f57c00);
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.info-navigation button:hover {
  background-color: var(--dark-orange, #e65100);
}

.info-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

.info-content h2 {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}

.info-content p {
  font-size: 1.1rem;
  color: #333;
}
</style> -->

<template>
  <section class="text-white max-w-[960px] w-[90%] mx-auto">
    <div class="p-4">
      <header
        class="space-y-6 bg-[#073024] text-center max-w-[640px] w-[90%] p-6 mx-auto my-10 md:my-16 rounded shadow-xl"
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
