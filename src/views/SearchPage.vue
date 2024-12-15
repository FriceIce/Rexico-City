<template>
  <div class="search-page">
    <div class="close-icon" @click="goBack">
      <font-awesome-icon icon="xmark" />
    </div>
    <input
      v-model="searchQuery"
      class="search-bar"
      placeholder="What are you looking for?"
    />
    <div v-if="filteredCards.length" class="cards-list">
      <HorizontalCards :cards="filteredCards" />
    </div>
    <p v-else>No results found.</p>
  </div>
</template>
  
<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import HorizontalCards from '@/components/HorizontalCards.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import type { Card } from '@/types/types';

// Add the X icon to FontAwesome's library
library.add(faXmark);

export default defineComponent({
  name: 'SearchPage',
  components: {
    FontAwesomeIcon,
    HorizontalCards,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();

    const cards = ref<Card[]>([]);
    const searchQuery = ref('');

    // Retrieve cards from query params
    if (route.query.cards && typeof route.query.cards === 'string') {
      try {
        cards.value = JSON.parse(route.query.cards) as Card[];
      } catch (error) {
        console.error('Failed to parse cards:', error);
      }
    }

    // Computed property for filtering cards
    const filteredCards = computed(() =>
      cards.value.filter(
        (card) =>
          card.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
          card.content.toLowerCase().includes(searchQuery.value.toLowerCase())
      )
    );

    const goBack = () => {
      router.back();
    };

    return { goBack, searchQuery, filteredCards };
  },
});
</script>


  

 <!--  <style>
  :root {
    --light-gray: rgb(14, 76, 69);
  }

</style> -->
  <style scoped>

  

  .search-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: var(--green);
  }
  
  .close-icon {
    position: absolute;
    top: 1rem;
    right: 1.6rem;
    font-size: 1.5rem;
    cursor: pointer;
    /* border: 2px solid #39ff14; */
    color: var(--white)
  }

  .search-bar {
  width: 80%;
  padding: 0.5rem;
  
  
  font-size: 1rem;
  margin-bottom: 45rem;
 
}

.card-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
}
  </style>
  