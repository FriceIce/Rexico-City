<script setup lang="ts"></script>
<template>
  <section
    class="fixed top-10 right-0 z-10 space-y-6 w-full max-w-[530px] h-full sm:h-max text-black bg-white px-2 pt-6 pb-16 shadow-xl rounded"
  >
    <!-- I'll create a state and use it to display the amount of items in the shopping cart -->
    <h1 class="text-2xl">Your cart (2 articles)</h1>
    <div>
      <ul class="space-y-4 max-h-[calc(100vh-320px)] overflow-y-auto px-2">
        <li class="flex gap-4 items-center border-b-2 border-b-[#006649] pb-4">
          <img
            src="/images/dino_card.png"
            alt="dino card"
            class="size-12 object-center object-cover rounded cursor-pointer"
          />
          <div class="w-full">
            <div class="flex justify-between items-center gap-2 w-full h-[36px]">
              <p class="">Green Dino card</p>
              <img src="/images/green_right_arrow.svg" alt="" class="size-6 cursor-pointer" />
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-center text-white">
                <button class="bg-[#2a7056] size-10 rounded-[5px]">-</button>
                <p class="grid place-items-center text-black size-7 text-lg">1</p>
                <button class="bg-[#2a7056] size-10 rounded-[5px]">+</button>
              </div>
              <p class="text-lg">$ 42</p>
            </div>
          </div>
        </li>
        <li class="flex gap-4 items-center border-b-2 border-b-[#006649] pb-4">
          <img
            src="/images/dino_card.png"
            alt="dino card"
            class="size-12 object-center object-cover rounded cursor-pointer"
          />
          <div class="w-full">
            <div class="flex justify-between items-center gap-2 w-full h-[36px]">
              <p class="">Green Dino card</p>
              <img src="/images/green_right_arrow.svg" alt="" class="size-6 cursor-pointer" />
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-center text-white">
                <button class="bg-[#2a7056] size-10 rounded-[5px]">-</button>
                <p class="grid place-items-center text-black size-7 text-lg">1</p>
                <button class="bg-[#2a7056] size-10 rounded-[5px]">+</button>
              </div>
              <p class="text-lg">$ 42</p>
            </div>
          </div>
        </li>
      </ul>
      <div class="flex justify-between w-full text-lg pt-2 px-2">
        <p class="text-[#2a7056]">Total</p>
        <p class="">$ 84</p>
      </div>
    </div>
    <div class="">
      <div class="flex flex-col gap-2">
        <button
          class="py-[10px] bg-[#2a7056] text-white rounded-full w-full border-2 border-[#2a7056]"
        >
          To payment
        </button>
        <router-link to="/tickets" class="py-[10px] bg-white text-[#2a7056] rounded-full border-2 border-[#2a7056] flex justify-center" >
        <button>
           Continue shopping
        </button>
        </router-link>
      </div>
    </div>
  </section>
</template>
