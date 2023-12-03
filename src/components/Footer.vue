<script setup>
import { ref } from "vue";

const footerContent = ref([
  { title: "Product", subTitles: ["Affiliate program"] },
  {
    title: "Resources",
    subTitles: ["Blog", "Become Therapists", "Apply for Therapist"],
  },
  { title: "Useful links", subTitles: ["Terms", "Privacy policy"] },
]);
const socialMediaContent = ref([
  {
    title: "Follow us on ",
    subTitles: [
      { img: "/img/facebook.png", subTitle: "Facebook" },
      { img: "/img/linkedin.png", subTitle: "Linkedin" },
      { img: "/img/twitter.png", subTitle: "Twitter" },
      { img: "/img/instagram.png", subTitle: "Instagram" },
    ],
  },
]);
</script>

<template>
  <div class="footer-color">
    <div class="flex py-16">
      <div class="flex justify-end w-[350px]">
        <div class="w-32 h-32">
          <img src="/img/footer-image.png" alt="footer-image" />
        </div>
      </div>

      <div class="flex flex-row mx-10">
        <div
          class="flex flex-row mx-16"
          v-for="item in footerContent"
          :key="item"
        >
          <div class="flex flex-col">
            <h3 class="text-heading my-4 font-medium">{{ item.title }}</h3>
            <div
              class="text-xl mt-4"
              v-for="subTitle in item.subTitles"
              :key="subTitle"
            >
              <p>{{ subTitle }}</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div v-for="item in socialMediaContent" :key="item">
          <div>
            <h3 class="text-heading my-4 font-medium">{{ item.title }}</h3>
          </div>
          <div class="flex mt-4" v-for="list in item.subTitles" :key="list">
            <img :src="list.img" :alt="list.subTitle" />
            <p class="px-4 text-xl">{{ list.subTitle }}</p>
          </div>
        </div>
      </div>
    </div>
    <hr class="footer-line my-5" />
    <p class="text-center text-xl text-black mb-5">
      © 2023 Einstein Limited. All rights reserved.
    </p>
  </div>
</template>

<style scoped>
.footer-color {
  background-color: #eeefff;
}
.footer-line {
  width: 100%;

  border: 1px solid gray; /* Adjust border styles as needed */
  opacity: 0.2;
}
</style>
