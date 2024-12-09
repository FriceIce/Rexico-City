<template>
  <div class="container">
    <div class="calendar-box">
      <!-- Calendar on the left side -->
      <div class="calendar">
        <AppDatePicker v-model="date" inline show-week />
      </div>

      <!-- Box with opening hours on the right side -->
      <div class="hours-box">
        <h3>Our Opening Hours</h3>
        <p>{{ openingHoursText }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  setup() {
    const date = ref(new Date());

    const openingHoursText = computed(() => {
      const selectedDate = date.value;
      const isClosed = selectedDate.getDate() === 24 && selectedDate.getMonth() === 11;
      if (isClosed) {
        return `Friday ${selectedDate.getDate()} December\nThe park is closed on this day.`;
      } else {
        return `Friday ${selectedDate.getDate()} December\nWe are open as usual.`;
      }
    });

    return {
      date,
      openingHoursText,
    };
  },
});
</script>

<style >

/* Container for centering the content */
.container {
  display: flex;

  height: 70vh;
  background-color: rgb(122, 176, 132);
  flex-direction: column;
}

/* Box containing the calendar and the opening hours */
.calendar-box {
  display: flex;
  gap: 2rem;
  height: 200px;
  height: auto;
  margin-top: 3rem;


}

/* Calendar style */
.calendar  {
  background-color: white;
  border-radius: 8px;
  height: 300px;
  width: 500px;

}

.calendar .p-datepicker {
    width: 100%;
  }

/* Make the dates bigger */
.p-datepicker .p-datepicker-day-view {
  font-size: 2rem;
}


/* Opening hours box */
.hours-box {
  flex: 1;
  border: 1px solid #ddd;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 8px;
height: 150px;
  max-width: 500px;
}

.hours-box h3 {
  margin-bottom: 1rem;
  font-size: 2rem;
  font-weight: bold;
}

.hours-box p {
  font-size: 1.5rem;
}

.p-datepicker-header{
  margin: 1rem;

}

/* Media Query for screens smaller than 1000px */
@media (max-width: 1000px) {
  .calendar-box {
    flex-direction: column;


  }

  .calendar .p-datepicker {
    width: 100%;
    margin: auto;
  }

  .hours-box {
    width: 100%;
    margin: auto;
  }
}

</style>
