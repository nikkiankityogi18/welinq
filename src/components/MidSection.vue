<script>
// import { ref, onMounted } from "vue";
import axios from "axios";
import ListCard from "./ListCard.vue";

export default {
  name: "MidSection",
  components: { ListCard },
  data() {
    return {
      therapistData: [],
      btnList: [
        "Tags",
        "Depression",
        "Relationship",
        "Social anxiety",
        "Social anxiety",
        "Social anxiety",
        "Social anxiety",
        "Fighting",
      ],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      try {
        const response = await axios.get(
          " https://api-container-ph3rhhnyiq-uc.a.run.app/therapists"
        );
        this.therapistData = response.data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
};
// const btnList = ref([
//   "Tags",
//   "Depression",
//   "Relationship",
//   "Social anxiety",
//   "Social anxiety",
//   "Social anxiety",
//   "Social anxiety",
//   "Fighting",
// ]);
// const TherapistData = ref(null);
// const getData = async () => {
//   try {
//     const response = await axios.get(
//       " https://api-container-ph3rhhnyiq-uc.a.run.app/therapists"
//     );
//     TherapistData.value = response.data;
//     console.log(response.data, TherapistData);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// };

// onMounted(getData);
</script>

<template>
  <div class="flex flex-col">
    <div class="flex flex-wrap mx-12 bordert mt-6">
      <div class="flex ml-4" v-for="(item, index) in btnList" :key="index">
        <ul>
          <li
            class="text-xs p-3 rounded-md"
            :class="index === 0 ? 'bg-black text-white' : 'bg-white text-black'"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
    <div class="flex flex-wrap ml-12 mt-8 bordert">
      <div
        class="profile-box overflow-hidden my-4"
        v-for="item in therapistData"
        :key="item"
      >
        <ListCard :dataArray="item" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.bordert {
  max-width: 1000px;
  width: 100%;
}
.profile-box {
  width: 100%;
  max-width: 290px;
}
</style>
