<template>
  <div class="card-page4">
    <div class="top-image-container">
      <div class="top-text">
        <p>
          🍔 Try Our Fantastic Triassic Burger! 🍔<br />
          Welcome to the ultimate burger experience! Our Triassic Burger is not just any burger – it's a bold adventure in taste.
          Featuring a perfectly grilled patty, melted cheese, fresh veggies, and our special house-made sauce, this burger is the perfect blend of juicy, savory, and tangy flavors.
          <br />
          Every ingredient is carefully selected to create a mouthwatering, harmonious bite. Whether you're a burger enthusiast or someone looking for something new, the Triassic Burger is here to satisfy your cravings.
          <br />
          Indulge in a flavor-packed meal that will leave you wanting more. It’s time to try the burger that’s as unforgettable as it is delicious – the Triassic Burger is waiting for you!
        </p>
      </div>
      <div class="images-container">
        <img src="../assets/images/burger.png" alt="top image" class="top-image" />
      </div>
    </div>

    <h1>Pringing</h1>

    <div class="burger-container">
      <div class="images-container">
        <img src="../assets/images/burgerbackground.png" alt="burger" class="burger" />
      </div>

      <div class="pricing-container">
        <div class="pricing-card">
          <h3> Standard Menu </h3>
          <p class="price">$19.99</p>
          <ul>
            <li>🍔 Triassic Burger 🍔 <br>
              A juicy beef burger with melted cheese, crispy veggies, and our secret sauce.</li>
            <li>🍟 Fresh, crispy fries, perfect for dipping!</li>
            <li>🥤 Choose between cola, lemonade, or fanta.</li>
          </ul>

        </div>

        <div class="pricing-card">
          <h3> Max Menu </h3>
          <p class="price">$30.99</p>
          <ul>
            <li>🍔 Max Triassic Burger 🍔<br>
              A double patty burger with extra cheese, bacon, and BBQ sauce for the ultimate burger experience.</li>
            <li>🍟 Large fries with rich dipping sauces, the perfect side for your burger!</li>
            <li>🥤 Choose between cola, sprite, or sugar-free drinks.</li>

          </ul>

        </div>

        <div class="pricing-card">
          <h3> Kids Menu </h3>
          <p class="price">$5.99</p>
          <ul>
            <li>Mini Triassic Burger <br>
              A smaller burger for kids, with cheese and ketchup.</li>
            <li>🍟 Light and crispy fries, just the right size for little ones!</li>
            <li>🧃 Choose between apple or orange juice.</li>
          </ul>

        </div>
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
.card-page4 {
  text-align: center;
  margin-top: 2rem;
  background-color: rgb(83, 168, 130);
  height: auto;
  padding: 20px;
}

.top-image-container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  margin-bottom: 20px;
}

.top-text {
  color: white;
  max-width: 50%;
  text-align: center;
  font-size: 1.5rem;
  padding: 20px;
}

.images-container {
  flex-shrink: 0;
}

.top-image {
  width: 100%;
  max-width: 500px;
  height: auto;
  object-fit: cover;
}

h1{
  color: white;
  font-size: 5rem;
}
.burger-container {
  display: flex;
  justify-content: center;
  position: relative;
  flex-wrap: wrap;
}

.burger-container img {
  width: 60%;
  height: auto;
  margin: auto;
  object-fit: cover;
}


.pricing-container {
  display: flex;
  gap: 20px;
  align-items: flex-end;
  justify-content: center;
  margin-top: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.pricing-card {
  background: #ffffff;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease;
  width: 320px;
  border: 1px solid #d4edda;
  cursor: pointer;
}

.pricing-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.featured {
  transform: translateY(-30px);
  border: 2px solid #28a745;
  background: linear-gradient(135deg, #e8f5e9, #ffffff);
}

.featured:hover {
  transform: translateY(-40px);
}

.pricing-card.selected {
  border-color: #218838;
  transform: translateY(-15px) scale(1.05);
}

/* Typography */
h3 {
  margin: 0;
  font-size: 24px;
  color: #28a745;
}

.price {
  font-size: 36px;
  margin: 10px 0;
  color: #155724;
}

/* List Styles */
ul {
  list-style: none;
  padding: 0;
  margin: 20px 0;
}

ul li {
  margin: 10px 0;
  color: #555;
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

@media (max-width: 768px) {
  .top-image-container {
    flex-direction: column;
    align-items: center;
  }

  .top-text {
    max-width: 100%;
    font-size: 1.2rem;
  }

  .burger-container {
    flex-direction: column;
    position: relative;
    gap: 20px;
  }

  .pricing-container {
    flex-direction: column;
    position: relative;
    top: auto;
    left: auto;
    transform: translate(0, 0);
  }

  .pricing-card {
    width: 100%;
    max-width: 400px;
    margin-bottom: 20px;
  }

  button {
    width: 100%;
  }
}

</style>
