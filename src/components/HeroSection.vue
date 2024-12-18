<template>
  <section class="hero">
    <div class="hero-content">
      <video autoplay loop muted playsinline class="hero-video">
        <source src="/src/assets/images/jurassic.mp4" type="video/mp4" />
      </video>
      <img src="/src/assets/images/loggan.png" alt="Rexico City" class="hero-image" />
      <h1>Your journey starts here</h1>
      <router-link to="/ReadMore">
        <button>Read More</button>
      </router-link>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  setup() {
    const readMore = () => {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
    }
    return { readMore }
  },
}
</script>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  height: 45rem;
}

.hero-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

.hero-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
  text-align: center;
  padding: 0rem;
}

.hero-content img {
  margin-top: 3rem;
  width: 28rem;
  max-width: 100%;
}

.hero-content h1 {
  font-size: 3rem;
  color: white;
  margin-top: 3.5rem;
  padding: 0rem;
  border-radius: 10px;
  text-shadow: 6px 7px 10px rgba(0, 0, 0, 0.3);
}

.hero-content button {
  height: 6rem;
  width: 7rem;
  margin: 2rem auto 0;
  transition: all 0.3s ease;
  text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
}

button {
  font-family: jungle;
  padding: 0rem;
  font-size: 1.8rem;
  border: 2px solid rgba(255, 255, 255, 0.2);
  background-color: var(--orange);
  color: white;
  cursor: pointer;
  border-radius: 50%;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  transform: translateY(0);
}

button:hover {
  background-color: rgb(224, 132, 33);
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  border-color: rgba(255, 255, 255, 0.4);
}

@media (max-width: 768px) {
  .hero {
    height: 30rem;
  }

  .hero-content img {
    margin-top: 2rem;
    width: 20rem;
  }

  .hero-content h1 {
    font-size: 2rem;
    margin-top: 2rem;
  }

  .hero-content button {
    height: 4rem;
    width: 5rem;
    margin-top: 1.5rem;
  }

  button {
    font-size: 1.2rem;
  }
}

@media (max-width: 375px) {
  .hero {
    height: 25rem;
  }

  .hero-content img {
    margin-top: 1.5rem;
    width: 15rem;
  }

  .hero-content h1 {
    font-size: 1.5rem;
    margin-top: 1.5rem;
  }

  .hero-content button {
    height: 3rem;
    width: 4rem;
    margin-top: 1rem;
  }

  button {
    font-size: 1rem;
  }
}
</style>
