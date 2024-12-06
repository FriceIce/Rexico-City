<template>
  <div class="nav-links">
    <a href="#calendar">Calendar</a>
    <a href="#tickets">Tickets</a>
    <a href="#mypage">Mypage</a>
  </div>
</template>
  
<script lang="ts">
export default {};
</script>
  
<style scoped>
.nav-links {
  display: flex;
  gap: 2rem;
  padding: 1rem;
  justify-content: center;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  position: relative;
}

.nav-links a:after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: var(--green);
  transition: width 0.3s ease;
}

.nav-links a:hover {
  color: var(--orange);
}

.nav-links a:hover:after {
  width: 100%;
}
</style>