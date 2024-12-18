<template>
  <div class="search-page">
    <div class="close-icon" @click="goBack">
      <font-awesome-icon icon="xmark" />
    </div>
    <div class="search-bar-container">
      <font-awesome-icon icon="search" class="search-icon" />
      <input
        v-model="searchQuery"
        class="search-bar"
        placeholder="What are you looking for?"
      />
    </div>
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
import { faXmark, faSearch } from '@fortawesome/free-solid-svg-icons';
import { cardData } from '../data/cardsData';

export interface Card {
  id: number;
  title: string;
  content: string;
  image?: string;
}

// Add the X and search icons to FontAwesome's library
library.add(faXmark, faSearch);

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
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
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

.search-bar-container {
  position: sticky;
  top: 7rem;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 0rem;
}

.search-icon {
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
  color: #888;
}

.search-bar {
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 25px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  outline: none;
  transition: box-shadow 0.3s ease;
}

.search-bar:focus {
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}

.cards-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 600px;
  margin-top: 14rem;
}

@media (max-width: 600px) {

  .search-bar-container {
  position: fixed;
  margin-top: 0rem;
  width: 80%;
  max-width: 600px;
  margin-bottom: 30rem;
}
  .search-bar {
    
    font-size: 0.875rem;
    padding: 0.5rem 0.75rem 0.5rem 2rem;
  }

  .search-icon {
    left: 0.75rem;
  }

  .close-icon {
    font-size: 1.25rem;
  }

  .cards-list {
    display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 600px;
  margin-top: 9rem; /* reduce the large margin */
  overflow: auto;
}
}
</style>
