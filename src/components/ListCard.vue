<script>
export default {
  name: "ListCard",
  props: {
    dataArray: Object,
  },
};
</script>

<template>
  <div class="w-full bg-white rounded-xl mr-4 ml-4">
    <div class="flex flex-col">
      <div class="flex flex-col justify-center items-center mt-6">
        <div class="flex justify-center items-center w-20 h-20 rounded-full">
          <img
            class="rounded-full w-20 h-20 object-cover"
            :src="dataArray.photoUrl"
          />
        </div>
        <p class="font-semibold text-lg text-pricecolor mt-2">
          ${{ dataArray.hourlyRate }}/hr
        </p>
        <div class="flex">
          <p class="mx-2 font-semibold text-lg">{{ dataArray.nickname }}</p>
          <img class="py-1" src="/img/online.png" />
        </div>
        <p class="font-medium text-[10px] text-onlinecolor">
          Last active 10min ago
        </p>
      </div>

      <div class="flex ml-6 mt-3">
        <div><img class="mr-4" src="/img/exp.png" /></div>
        <p class="font-medium text-sm leading-5">
          {{ dataArray.expertExperience }} yrs of experience
        </p>
      </div>
      <div class="flex ml-6 mt-3">
        <div><img class="mr-4" src="/img/spacialist.png" /></div>
        <div
          class="flex overflow-hidden whitespace-nowrap text-ellipsis show-text"
        >
          <p
            v-for="item in dataArray.expertFocusArea"
            class="font-medium text-sm leading-5"
          >
            {{ item }},
          </p>
        </div>
      </div>
      <div class="flex ml-6 mt-3 mb-8">
        <div><img class="mr-4" src="/img/digree.png" /></div>
        <p class="font-medium text-sm leading-5">
          Dialectical Behaviour Therap..
        </p>
      </div>
      <div class="flex ml-6 mb-6">
        <button
          class="bg-btncolor px-8 rounded-lg py-3 font-semibold text-base mr-4"
        >
          Book session
        </button>
        <div
          class="flex justify-center items-center bg-chatbtncolor px-4 rounded-full ml-2"
        >
          <img src="/img/chat-icon.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.show-text {
  max-width: 120px;
}
</style>
