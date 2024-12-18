<template>
  <div class="nav-links">
    <router-link to="/calendar">Calendar</router-link>
    <router-link to="/tickets">Tickets</router-link>
    <router-link to="/mypage">Mypage</router-link>
  </div>
</template>

<script lang="ts">
export default {
  name: 'NavLinks'
};
</script>

<style scoped>
.nav-links {
  display: flex;
  gap: 2rem;
  padding: 1rem;
  justify-content: center;
}

.nav-links a,
.nav-links .router-link-active {
  color: white;
  text-decoration: none;
  font-size: 2rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  position: relative;
}

.nav-links a:after,
.nav-links .router-link-active:after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: var(--green);
  transition: width 0.3s ease;
}

.nav-links a:hover,
.nav-links .router-link-active:hover {
  color: var(--orange);
}

.nav-links a:hover:after,
.nav-links .router-link-active:hover:after {
  width: 100%;
}

@media (max-width: 768px) {
  .nav-links {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .nav-links a {
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
  }
}

@media (max-width: 375px) {
  .nav-links {
    gap: 0.9rem;
    padding: 1rem;
  }

  .nav-links a {
    font-size: 1.2rem;
    padding: 0.5rem;
  }
}
</style>
