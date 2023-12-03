<script setup></script>

<template>
  <div class="w-full">
    <div class="flex justify-between mx-12 my-8">
      <!-- First Section  -->
      <div class="flex justify-center items-center">
        <h3 class="font-semibold text-3xl">Therapists</h3>
      </div>

      <!-- Second Section  -->
      <div class="flex">
        <div class="rounded-full bg-white p-4 mx-2">
          <img class="" src="/img/filter-icon.png" alt="filter-icon" />
        </div>
        <div class="relative">
          <input
            type="text"
            class="2xl:w-[600px] xl:w-[420px] py-4 pl-20 rounded-full"
            placeholder="Search for session"
            @input="handleInput"
          />

          <img class="absolute top-4 left-8" src="/img/search.png" />
        </div>
      </div>

      <!-- Third Section  -->
      <div class="flex">
        <img class="mx-2 py-1" src="/img/bell-icon.png" />
        <img class="ml-2 py-1" src="/img/profileimg.png" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.search-box {
  min-width: 300px;
  max-width: 600px;
  width: 100%;
}
</style>
