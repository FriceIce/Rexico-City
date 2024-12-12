<script setup lang="ts"></script>
<template>
  <ul class="card-layout gap-x-6 gap-y-24 flex-wrap">
    <li class="flex max-w-[360px] bg-[#0e6e61] h-full w-full rounded-lg mx-auto lg:mx-0 shadow-xl">
      <div class="relative flex flex-col">
        <div class="absolute top-[-64px] left-[50%] translate-x-[-50%] w-[220px]">
          <img
            src="../assets/images/dino_card.png"
            alt=""
            class="w-full h-[128px] object-cover object-center rounded-lg shadow-lg"
          />
        </div>
        <section class="flex-1 flex flex-col gap-4 space-y-4 w-full text-center pt-[80px] p-4">
          <div class="flex flex-col gap-3 justify-between">
            <h1 class="font-bold text-4xl">Green Card</h1>
            <p class="">
              Free entry EVERY open day including ALL concerts and dance nights all summer 2025! ⭐️
            </p>
          </div>
          <div class="flex-1 flex flex-col justify-end gap-3">
            <p class="text-xl">42 $</p>
            <button
              class="bg-[#e06891] w-full py-[12px] rounded-full lg:hover:scale-105 transition-all"
            >
              Buy now
            </button>
          </div>
        </section>
      </div>
    </li>
    <li class="flex max-w-[360px] bg-[#ffebc6] w-full rounded-lg mx-auto lg:mx-0 shadow-xl">
      <div class="relative flex flex-col">
        <div class="absolute top-[-64px] left-[50%] translate-x-[-50%] w-[220px]">
          <img
            src="../assets/images/gold_card.png"
            alt=""
            class="w-full h-[128px] object-cover object-center rounded-lg shadow-lg"
          />
        </div>
        <section class="flex-1 flex flex-col gap-4 space-y-4 w-full text-center pt-[80px] p-4">
          <div class="flex flex-col gap-3 justify-between">
            <h1 class="font-bold text-4xl text-[#886611]">Gold Card + Green Card included!</h1>
            <p class="text-black">
              Right now, you get the Green Card for free when you purchase a Gold Card! 👀
            </p>
          </div>
          <div class="flex-1 flex flex-col justify-end gap-3">
            <p class="text-xl text-black">189.9 $</p>
            <button
              class="bg-[#2e3038] w-full py-[12px] rounded-full lg:hover:scale-105 transition-all"
            >
              Buy now
            </button>
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
