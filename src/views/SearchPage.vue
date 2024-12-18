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
    <div class="cards-list">
      <HorizontalCards :cards="filteredCards" />
    </div>
  </div>
</template>
  
<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import HorizontalCards from '@/components/HorizontalCards.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { cardData } from '../data/cardsData';

export interface Card {
  id: number;
  title: string;
  content: string;
  image?: string;
}

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
    const searchQuery = ref('');
    const cards = ref<Card[]>(cardData);

    // Computed property for filtering cards
    const filteredCards = computed(() => {
      if (!searchQuery.value.trim()) {
        // Return an empty array if searchQuery is empty
        return [];
      }
      return cards.value.filter(
        (card) =>
          card.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
          card.content.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    });

    const goBack = () => {
      router.back();
    };

    return { goBack, searchQuery, filteredCards };
  },
});
</script>

<style scoped>
.search-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: var(--green);
  padding: 1rem;
}

.close-icon {
  position: absolute;
  top: 1rem;
  right: 1.6rem;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--white);
}

.search-bar {
  width: 100%;
  max-width: 600px;
  padding: 0.5rem;
  font-size: 1rem;
  margin-bottom: 1rem;
  box-sizing: border-box;
}

.cards-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 600px;
}

@media (max-width: 600px) {
  .search-bar {
    font-size: 0.875rem;
    padding: 0.5rem;
  }

  .close-icon {
    font-size: 1.25rem;
  }
}
</style>
