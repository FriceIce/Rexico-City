<template>
  <div class="card-page">
    <h1 class="main-title">DINO RIDE</h1>
    <div class="image-container">
      <img src="../assets/images/dino_ride.png" alt="Dino Ride 2" class="responsive-image" />
    </div>
    <div class="description">
      <p>
      <h2>Dino ride - premiere in 2025! 🫨🫧</h2>
      <br>
      We are happy to present next year's big new attraction - DINO RIDE. Feel the adrenaline pumping in the super ride
      "Dino Ride", which is guaranteed to rock your world! The attraction is suitable for the whole family - with
      oscillating and pumping movements, it creates a ride that offers weightlessness, falling and speed, which provides
      a real thrill in the stomach for both experienced and newbies!

      When this super ride opens in the spring of 2025, it will be the second attraction of its kind in the WHOLE world
      and the first in Northern Europe 👀💨
      <br>
      <br>
      <h4>"Whether you are 4 or 84 years old, you will feel the same tingle in your stomach when you get to experience
        both weightlessness and falling combined with speed."
        <br>
        <br>Adam Olsson, CEO at Rexico City
      </h4>
      </p>
    </div>


    <div class="image-container">
      <img src="../assets/images/dino_ride.png" alt="Dino Ride 2" class="responsive-image" />
    </div>

    <div class="table-container">
      <h3>Facts About Dino Ride</h3>
      <table>
        <tr>
          <th>Manufacturer</th>
          <td>RES Rides (Switzerland)</td>
        </tr>
        <tr>
          <th class="highlight">Attraction Type</th>
          <td class="highlight">Rollercoaster</td>
        </tr>
        <tr>
          <th>Height Requirement</th>
          <td>95 cm with an adult, 120 cm alone</td>
        </tr>
        <tr>
          <th class="highlight">Capacity</th>
          <td class="highlight">20 people per ride</td>
        </tr>
        <tr>
          <th>Premiere</th>
          <td>Spring 2025</td>
        </tr>
      </table>
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
.card-page {
  background-color: rgb(83, 168, 130);
  text-align: center;
  margin-top: 2rem;
  height: auto;
  padding: 20px;
}


.main-title {
  font-size: 5rem;
  font-weight: bold;
  padding-bottom: 20px;
  color: #fff;
}

.image-container {
  margin: 2rem 0;

}

.responsive-image {
  max-width: 100%;
  width: 500px;
  height: auto;
  border-radius: 8px;
  margin: auto;
}


.description {
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.5rem;
  line-height: 1.6;
  color: #fff;
  padding-bottom: 2rem;
}


.table-container {
  margin: 2rem auto;
  max-width: 800px;
}

h3 {
  font-size: 1.5rem;
  font-weight: bold;
  padding: 1rem;
  background-color: white;
}
h4 {
  font-size: 1.7rem;

}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 1rem;

}

th {
  font-weight: bold;
  background-color: #fff;
  font-size: 1.2rem;

}

th.highlight {
  background-color: #f0f0f0;


}


tr:nth-child(odd) {
  background-color: #fff;
}

tr:nth-child(even) {
  background-color: #f0f0f0;
}

td {
  text-align: right;
  font-family: Arial, sans-serif;
}

td.highlight {
  background-color: #f0f0f0;
  text-align: right;
  font-family: Arial, sans-serif;
}

button {
  margin-top: 2rem;
  padding: 10px 20px;
  background-color: var(--green);
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: var(--green);
}
</style>
