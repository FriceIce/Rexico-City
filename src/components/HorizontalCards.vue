<template>
  <div class="cards-container">
    <div
      class="cards"
      v-for="card in cards"
      :key="card.id"
    >
      <div class="card" @click="goToCardDetails(card.id)">
        <!-- Card Image -->
        <img class="card-image" :src="card.image" />
        <!-- Card Title -->
        <h3>{{ card.title }}</h3>
        <!-- Card Content -->
        <p>{{ card.content }}</p>
        <!-- Additional Text -->
        <p class="additional-text">{{ card.additionalText }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

interface Card {
  id: number | string;
  title: string;
  content: string;
  image: string;
  additionalText?: string;
}

export default defineComponent({
  props: {
    cards: {
      type: Array as () => Card[],
      required: true,
    },
  },
  setup() {
    const router = useRouter();

    const goToCardDetails = (id: number | string) => {
      if (id === 1) {
        router.push('/tickets'); // Navigate to TicketsPage for Card 1
      } else if (id === 2) {
        router.push('/card2'); // Navigate to Card2Page for Card 2
      } else if (id === 3) {
        router.push('/card3'); // Navigate to Card3Page for Card 3
      } else if (id === 4) {
        router.push('/card4'); // Navigate to Card4Page for Card 4
      }
    };

    return { goToCardDetails };
  },
});
</script>

<style scoped>
.cards-container {
  padding: 0rem;
  width: 100%;
  margin: 0 auto;
  overflow-x: auto;
  display: flex;
  gap: 1rem;
  justify-content: center;  
  align-items: center;
  margin-bottom: 3rem;
}

.cards {
  flex: 0 0 auto;
}

.card {
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;
  height: 28rem;
  width: 18rem;
  text-align: center;
  border-radius: 1rem;
  padding: auto;
  transition: transform 0.3s ease;
  cursor: pointer;
}

.card h3 {
  margin-top: 1rem;
  font-size: 2rem;
}

.card-image {
  width: 100%;
  height: auto;
  border-radius: 1rem 1rem 0 0;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

@media (max-width: 768px) {
  .cards-container {
    flex-direction: column;
    padding: 1rem;
  }

  .card {
    width: 100%;
    height: auto;
  }

  .card h3 {
    font-size: 1.5rem;
  }
}

@media (max-width: 375px) {
  .cards-container {
    padding: 1rem;
  }

  .card {
    width: 100%;
    height: auto;
  }

  .card h3 {
    font-size: 1.2rem;
  }
}
</style>
