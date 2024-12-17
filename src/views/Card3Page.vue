<template>
  <div class="card-page3">
    <div class="container">
      <div class="text">
        <h1>HEY THERE!</h1>
        <h2>I is me, Rexy! 🦖</h2>
        <h3>
          Come on over and join me for an afternoon tea. 
          I have prepared a lovely table under the warm sunshine, 
          complete with freshly baked scones and fragrant tea. 🫖
        </h3>
        <h3>
          Do not mind my towering size or toothy grin—today, 
          I am all about good manners and great company. 
          Let us share a cup and enjoy a moment where the past 
          meets the present. 🍰
        </h3>
        <h3>
          Care to raise a teacup with me?
        </h3>
      </div> 
      <div>
        <img src="../assets/images/afternoon_tea2.png" alt="image" class="image" />
      </div>
    </div>
    <div class="cards">
      <div class="card">
        <h2>A CUP OF REX</h2>
        <h3>$10</h3>
        <p>Enjoy tea with Rexy and delight in homemade scones.</p>
      </div>
      <div class="card">
        <h2>GRANDMA REXY SCONES</h2>
        <h3>$5</h3>
        <p>Discover stories about the prehistoric tea party.</p>
      </div>
      <div class="card">
        <h2>MMM... WARM REXY COOCOA</h2>
        <h3>$3</h3>
        <p>Take a picture with Rexy and get a souvenir cup! 🦖</p>
      </div>
    </div>
    <button @click="goBack">Back to Home</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const router = useRouter();

    const goBack = () => {
      router.push('/');
    };

    return { goBack };
  },
});
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  
}



/* .card-page3 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  
} */

.card-page3 {
  text-align: center;
  margin-top: 2rem;
  background-color: rgb(83, 168, 130);
  height: auto;
  
}

.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* border: 2px solid pink; */
  margin-left: 4.6rem;
  
}

.text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 50rem;
  width: 40rem;
  padding: 3rem;
}

.text h1 {
  font-size: 3rem;
  margin-top: -4rem;
}

.text h2 {
  margin-top: 1.5rem;
  font-size: 2rem;
}

.text h3 {
  margin-top: 3rem;
  font-size: 1.5rem;
}

.image {
  object-fit: cover;
  width: 60rem;
  height: 50rem;
}

.cards {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
}

.card {
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  width: 15rem;
  height: 20rem;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.card h2 {
  color: rgb(27, 169, 5);
  font-size: 2rem;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}




button {
  margin-top: 3rem;
  margin-bottom: 2rem;
  padding: 10px 20px;
  background-color: var(--green);
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  color: rgb(103, 167, 103);
}


@media (max-width: 1000px) {
  .image {
    object-fit: cover;
    width: 70rem;
    height: 30rem;
  }

  .text {
    height: 30rem;
    width: 40rem;
  }

  .text h1 {
    font-size: 2rem;
  }

  .text h2 {
    margin-top: 0.3rem;
    font-size: 1.4rem;
  }

  .text h3 {
    margin-top: 1rem;
    font-size: 1rem;
  }
}

@media (max-width: 500px) {
  .image {
    object-fit: cover;
    height: 20rem;
    width: 26rem;
  }

  .text {
    height: 20rem;
    width: 26rem;
  }

  .text h1 {
    font-size: 2rem;
    margin-top: 3rem;
  }

  .text h2 {
    margin-top: 0.1rem;
    font-size: 1.4rem;
  }

  .text h3 {
    margin-top: 1rem;
    font-size: 1rem;
  }

  .container {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
  }
}
</style>
