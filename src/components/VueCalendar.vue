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

<style scoped>
/* Container for centering the content */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Box containing the calendar and the opening hours */
.calendar-box {
  display: flex;
  width: 100%;
  gap: 2rem;
  padding: 2rem;
  background-color: var(--green);
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Calendar style */
.calendar .p-datepicker {
  background-color: white;
  border-radius: 8px;
  width: 300px;
  height: 300px;
}

/* Make the dates bigger */
.calendar .p-datepicker .p-calendar-table td {
  font-size: 1.5rem; /* Increase font size for date cells */
  padding: 10px; /* Add padding for better spacing */
}

/* Make weekdays bigger */
.calendar .p-datepicker .p-datepicker-weekday {
  font-size: 1.2rem; /* Increase font size for weekdays */
}

/* Make the month name bigger */
.p-datepicker-header {
  padding: 2rem;
}

/* Calendar table font size */
.calendar .p-datepicker .p-calendar-table {
  font-size: 1.5rem; /* Increase font size for the calendar table */
}

/* Opening hours box */
.hours-box {
  flex: 1;
  border: 1px solid #ddd;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  width: 300px;
  height: 100px;
}

/* Heading style for the hours box */
.hours-box h3 {
  margin-bottom: 1rem;
  font-size: 1.25rem;
  font-weight: bold;
}
</style>
