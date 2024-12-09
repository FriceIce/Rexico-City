<template>
    <section class="hero">
      <div class="hero-content">
      <video autoplay loop muted playsinline class="hero-video">
      <source src="/src/assets/images/jurassic.mp4" type="video/mp4">
      </video>
        <!-- <h1>Rexico City Live</h1> -->
        <img src="/src/assets/images/loggan.png" alt="Rexico City" class="hero-image">
        <h1>Your journey starts here</h1>
        <button @click="readMore">Read More</button>
      </div>
      
    </section>
   
  </template>
  
  <script lang="ts">
  export default {
    setup() {
      const readMore = () => {
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
      };
      return { readMore };
    },
  };
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
  }


  .hero-content img{
    margin-top: 2rem;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    width: 28rem;
  }


  .hero-content h1 {
    font-size: 3rem; 
    color: white;
    margin-top: 3.5rem;
    display: flex;
    justify-content: center;
    padding: 1rem;
    border-radius: 10px;
    text-shadow: 6px 7px 10px rgba(0, 0, 0, 0.3);
    }


  

  .hero-content button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 6rem;
    width: 7rem;
    margin: 0 auto;
    margin-top: 3.5rem;
    transition: all 0.3s ease;
    text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  }

  button {
    font-family: jungle;
    padding: 0.5rem 1rem;
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
    background-color: rgb(255, 165, 0);
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
    border-color: rgba(255, 255, 255, 0.4);
  }
  
  button:hover {
    background-color: rgb(224, 132, 33);
  }
/* -------------------mobile v------------------------ */

  @media (max-width: 375px) {

    .hero {
    position: relative;
    height: 30rem;
    overflow: hidden;
    /* border: 5px solid pink; */

  }

  .hero-content img{
    margin-top: 1.8rem;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    width: 20rem;
  }

  .hero-video {
  
  width: 100%;
  height: 40rem;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}



  .hero-content h1 {
    font-size: 1.7rem; 
    color: white;
    margin-top: 1.7rem;
    display: flex;
    justify-content: center;
    padding: 1rem;
    border-radius: 10px;
    text-shadow: 6px 7px 10px rgba(0, 0, 0, 0.3);
    }

  .hero-content button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3rem;
    width: 4rem;
    margin: 0 auto;
    margin-top: 1.2rem;
    transition: all 0.3s ease;
    text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  }

  button {
    font-family: jungle;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border: 2px solid rgba(255, 255, 255, 0.2);
    background-color: var(--orange);
    color: white;
    cursor: pointer;
    border-radius: 50%;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(5px);
    transform: translateY(0);
  }

  }
  </style>
