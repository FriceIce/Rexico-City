<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <main class="">
    <div class="bg-white text-black w-full flex flex-col items-center">
      <section class="space-y-16 px-4 py-[29px] md:py-20">
        <article class="space-y-8 max-w-[610px]">
          <section class="space-y-6">
            <h1 class="font-bold text-3xl md:text-5xl">The Green Dino Card</h1>
            <p class="">
              With the Green Card, you get free entry on ALL open days! This means that, just like
              usual, you can enjoy all concert and dance evenings throughout the summer season of
              2025, but also visit the park on days when there are no concerts.
            </p>
          </section>
          <section class="">
            <h2 class="font-bold text-xl md:text-3xl">This is included:</h2>
            <ul>
              <li class="list-disc list-inside text-sm md:text-base">
                Entrance to ALL opening days of the park during the summer season 2025 ☀️
              </li>
              <li class="list-disc list-inside text-sm md:text-base">
                Entrance to ALL concerts during the entire summer season 2025 on Stora och Lilla
                Scen 🎶
              </li>
              <li class="list-disc list-inside text-sm md:text-base">
                Access to all dance evenings at Dansbanan 💃
              </li>
            </ul>
          </section>
        </article>
        <section class="space-y-10 max-w-[610px] w-full">
          <div class="flex justify-between w-full">
            <div>
              <p>Green Dino Card</p>
              <p>$ 42/each</p>
            </div>
            <div class="flex items-center gap-4">
              <button
                class="bg-[#2a7056] size-12 opacity-50 rounded-full grid place-items-center lg:cursor-pointer"
              >
                <p class="text-white text-center">-</p>
              </button>
              <p>0</p>
              <button
                class="bg-[#2a7056] size-12 rounded-full grid place-items-center lg:cursor-pointer"
              >
                <p class="text-white text-center">+</p>
              </button>
            </div>
          </div>
          <button class="bg-[#006649] text-white w-full py-[12px] rounded-full opacity-50">
            Next step
          </button>
        </section>
      </section>
    </div>
  </main>
</template>
