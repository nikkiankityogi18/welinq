<script setup>
import { ref } from "vue";

const navItems = ref([
  { itemName: "Home", itemImgSrc: "/img/home.png" },
  { itemName: "My Sessions", itemImgSrc: "/img/sessions.png" },
  { itemName: "Therapist", itemImgSrc: "/img/sessions.png" },
  { itemName: "Quizzes", itemImgSrc: "/img/quiz.png" },
  { itemName: "Webinars", itemImgSrc: "/img/webinars.png" },
  { itemName: "Profile", itemImgSrc: "/img/profile.png" },

  // Add more objects as needed
]);
</script>

<template>
  <div class="left-section flex flex-col items-center">
    <div
      class="flex justify-center items-center bg-logobgcolor w-4/5 mx-auto my-8 p-8"
    >
      <img src="/img/logo.png" />
    </div>
    <div class="w-full">
      <ul class="w-4/5 m-auto">
        <li
          class="flex my-4"
          :class="index == 2 ? 'bg-activebtncolor rounded-md text-white' : ''"
          v-for="(item, index) in navItems"
          :key="index"
        >
          <img class="px-4 py-2" :src="item.itemImgSrc" />
          <p
            :class="index == 2 ? 'text-white' : ''"
            class="flex justify-center items-center px-4 font-normal text-lg text-navitemtextcolor"
          >
            {{ item.itemName }}
          </p>
        </li>
      </ul>
    </div>
    <div class="mt-8 w-4/5 m-auto">
      <img src="/img/leftcalimg.png" />
    </div>
  </div>
</template>

<style scoped>
.left-section {
  min-width: 350px;
  background-color: white;
}
</style>
