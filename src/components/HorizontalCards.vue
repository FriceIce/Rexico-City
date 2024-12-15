<template>
  <div class="cards-container">
    <div
      class="cards"
      v-for="card in cards"
      :key="card.id"
    >
      <div class="card">
        <h3>{{ card.title }}</h3>
        <p>{{ card.content }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
interface Card {
  id: number | string;
  title: string;
  content: string;
}

export default {
  props: {
    cards: {
      type: Array as () => Card[],
      required: true,
    },
  },
};
</script>

<style scoped>
.cards-container {
  padding: 5rem;
  width: 80%;
  margin: 0 auto;
  overflow-x: auto;
  display: flex;
  gap: 1rem;
  justify-content: flex-start;  
  align-items: center;
}

.cards {
  flex: 0 0 auto;
}

.card {
  background-color: #f4f4f4;
  padding: 2rem;
  height: 300px;
  width: 200px;
  text-align: center;
  border: 1px solid #ddd;
  padding: auto;
}

@media (max-width: 375px) {
  .cards-container {
    justify-content: center;  
   /*  border: 2px solid pink; */
    height: 19.1rem;
    overflow-y: hidden;
  }
}
</style>
