<template>
  <section>
    <div>
      <img src="../assets/images/scammed_text.gif" alt="" class="gif">
      <img src="../assets/images/scammed.png" alt="" class="image">
    </div>
  </section>
</template>

<style scoped>
.image {
  width: 100%;
  height: auto;
  position: relative;
}

.gif {
  margin-left: 63rem;
  margin-top: 15rem;
  width: 25rem;
  height: 5rem;
  z-index: 3;
  position: fixed;
  animation: moveGif 1s infinite;
  
}

@keyframes moveGif {
  0% { transform: scale(1); }
  50% { transform: scale(3.3); }
  
}

/* To make the animation move more slowly, increase the animation-duration in the .gif class */

@media (max-width: 350px) {
  .gif {
    width: 15rem;
    height: 3rem;
    position: static;
    margin: 10px auto;
    display: block;
    animation: none;
  }

  .image {
    width: 100rem;
    
  }
}
</style>
