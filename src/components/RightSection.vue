<script setup>
import { ref } from "vue";
import { Calendar, DatePicker } from "v-calendar";
import "v-calendar/style.css";

const timeSlot = ref([
  "10:00 AM",
  "10:30 Am",
  "11:00 Am",
  "11:30 Am",
  "12:00 Am",
  "12:30 AM",
]);

const date = ref(new Date());
</script>

<template>
  <div class="right-section mx-4 bg-white mt-6">
    <!-- first Section   -->
    <div class="flex mx-4 pt-6">
      <div class="w-24 h-24 flex justify-center items-center">
        <img src="/img/sneha-ai-img.png/" />
      </div>
      <div class="flex flex-col ml-4">
        <h3 class="font-medium text-lg">Sneha ai</h3>
        <p class="font-normal text-sm">Anxiety , Depression specialist</p>
        <div class="mt-2">
          <button
            class="bg-activebtncolor px-6 py-2 rounded-lg font-medium text-base text-white"
          >
            View Profile
          </button>
        </div>
      </div>
    </div>

    <!-- Second Section  -->
    <div
      class="flex justify-center mx-4 mt-6 border border-bordercolor rounded-lg"
    >
      <DatePicker class="w-full" v-model="date" borderless />
    </div>

    <!-- Third Section  -->
    <div
      class="flex justify-center mx-4 mt-6 border border-bordercolor rounded-lg"
    >
      <div class="flex flex-col justify-center items-center">
        <h3 class="font-medium text-lg mt-4">Session Period</h3>
        <button
          class="font-medium text-sm bg-btncolor mt-4 py-2 px-6 rounded-lg"
        >
          60 min
        </button>
        <p class="font-semibold text-sm my-4 text-center note-color">
          Note: *Session period will be of 60min
        </p>
      </div>
    </div>

    <!-- Forth Section  -->
    <div
      class="flex justify-center mx-4 mt-6 border border-bordercolor rounded-lg"
    >
      <div class="flex flex-col justify-center">
        <h3 class="text-center font-medium text-lg">Select Time</h3>
        <div class="flex justify-center font-normal text-base mt-2">
          <span class="p-1 mx-2 my-2 bg-activebtncolor rounded-full"></span>
          <p>Am</p>
          <span class="p-1 mx-2 my-2 bg-notegraycolor rounded-full"></span>
          <p>Pm</p>
        </div>
        <div class="flex flex-col">
          <div class="flex flex-row my-4">
            <p
              class="mr-2 font-normal text-sm"
              v-for="time in timeSlot.slice(0, 3)"
            >
              {{ time }}
            </p>
          </div>
          <div class="flex flex-row mb-6">
            <p
              class="mr-2 font-normal text-sm"
              v-for="time in timeSlot.slice(3, 6)"
            >
              {{ time }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Fifth Section  -->
    <div class="flex justify-center mx-4 my-6 rounded-lg">
      <button class="bg-activebtncolor py-2 px-16 rounded-lg">
        Book session
      </button>
    </div>
  </div>
</template>

<style scoped>
.right-section {
  max-width: 426px;
}
.note-color {
  color: #848484;
}
</style>
