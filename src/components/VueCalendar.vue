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
        <p v-html="openingHoursText" class="opening-hours-text"></p>
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
        return `Friday ${selectedDate.getDate()} December<br>The park is closed on this day.`;
      } else {
        return `Friday ${selectedDate.getDate()} December<br>We are open as usual.`;
      }
    });

    return {
      date,
      openingHoursText,
    };
  },
});
</script>

<style>




/* Container for centering the content */
.container {
  display: flex;
  justify-content: space-between;

  height: 70vh;
  width: 100%;
  background-color: rgb(153, 216, 165);
  flex-direction: column;
  margin-bottom: 2rem;
}

/* Box containing the calendar and the opening hours */
.calendar-box {
  display: flex;
 margin: auto;
  gap: 2rem;
  height: 200px;
  height: auto;
  margin-top: 3rem;


}

/* Calendar style */
.calendar  {
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


.p-datepicker-header{
  margin-bottom: 2rem;

}
.p-datepicker-title{
  background-color: var(--green);
  color: var(--white);
  padding: 1rem;
  border-radius: 8px
  ;
}
.p-datepicker-day:hover{
background-color: var(--green);
color: var(--white);
}
.p-datepicker-select-month {
  font-size: 1.5rem;

}
.p-datepicker-select-year{
 display: none;
}

.p-icon.p-button-icon{
  color: var(--white);
  background-color: var(--green);
  color: var(--white);
  padding: 1rem;
  border-radius: 8px
}

.p-datepicker-day-cell.p-datepicker-other-month {
  color: #0000008f;
}
.p-datepicker-weeknumber{
  display:none ;
}
.p-datepicker-weekheader.p-disabled{
  display:none;
}


/* Opening hours box */
.hours-box {
  flex: 1;
  padding: 1rem;
  margin-right: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
height: 200px;
  max-width: 300px;
}

.opening-hours-text{
  color: rgb(9, 76, 69) ;
}
.hours-box h3 {
  margin-bottom: 1rem;
  font-size: 2rem;
  font-weight: bold;
}

.hours-box p {
  font-size: 1.5rem;
  line-height: 1.5;
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
