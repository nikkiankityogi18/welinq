<script setup>
import LeftSection from "./LeftSection.vue";
import MidSection from "./MidSection.vue";
import Header from "./Header.vue";
import RightSection from "./RightSection.vue";
</script>

<template>
  <div class="page-color flex w-full">
    <LeftSection />
    <div class="flex flex-col w-full">
      <Header />
      <div class="flex flex-row w-full">
        <MidSection />
        <RightSection />
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-color {
  background-color: #f4f5ff;
}
</style>
