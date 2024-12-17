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
  </div>
  <div class="cards">
    <div class="card" v-for="n in 3" :key="n">
      <h2>Card {{ n }}</h2>
      <p>Rexy meny {{ n }}.</p>
    </div>
  </div>

    
    

    <button @click="goBack">Back to Home</button>
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

.card-page3 {
  height: 100vh;
  width: 100vw;
}

.container {
  display: flex;
  flex-direction:row;
  justify-content:space-around ;
  align-items: center;
  height: 100wh;
  width: 100vw;
  /* border: 2px solid pink; */
}

.text {
  display: flex;
  flex-direction: column;
  justify-content:space-around;
  align-items: center;
  background-color: white;
  height: 50rem;
  width: 40rem;
  padding: 3rem;
  
  
}

.text h1 {
  font-size: 2.5rem;
}

.text h2 {
  margin-top: -4rem;
  font-size: 2rem;
}

.text h3 {
  margin-top: -4rem;
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
  gap: 2rem; /* Add space between the cards */
  width: 100rem;
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
}



@media (max-width: 1000px) {
  
  .image {
  object-fit:cover  ;
  width: 70rem;
  height: 30rem;
}

.text {
  display: flex;
  flex-direction: column;
  justify-content:space-around;
  align-items: center;
  background-color: white;
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

  @media (max-width:500px) {
  
  .image {
  object-fit:cover  ;
  height: 20rem;
  width: 26rem;
  
}

.text {
  display: flex;
  flex-direction: column;
  justify-content:space-around;
  align-items: center;
  background-color: white;
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
  display: flex;
  flex-direction:column-reverse;
  justify-content: space-between;
  align-items: center;
  height: 100wh;
  width: 100vw;
  /* border: 2px solid pink; */
}




  }
 
  
  </style>
  