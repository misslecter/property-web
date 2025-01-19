<script setup lang="ts">
import { ArrowUpIcon } from "@heroicons/vue/24/outline";

import { onBeforeUnmount, onMounted, ref } from "vue";
import AppButtonWithIcon from "@/components/layout/AppButtonWithIcon.vue";

// Declare a reactive variable to store the scroll position
const scrollPosition = ref(0);

// Function to update the scroll position
const updateScrollPosition = () => {
  scrollPosition.value = window.scrollY; // Update scroll position
};

// Add the event listener when the component is mounted
onMounted(() => {
  window.addEventListener("scroll", updateScrollPosition);
});

// Remove the event listener before the component is unmounted to clean up
onBeforeUnmount(() => {
  window.removeEventListener("scroll", updateScrollPosition);
});
</script>

<template>
  <div
    class="fixed bottom-0 right-0 p-8 transition-transform"
    :style="{ transform: `translateX(${scrollPosition > 0 ? 0 : 100}%)` }"
  >
    <AppButtonWithIcon title="Nahoru" to="#top" :icon="ArrowUpIcon" />
  </div>
</template>
