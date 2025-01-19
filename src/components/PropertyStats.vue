<script setup lang="ts">
import { inject } from "vue";
import { GLOBAL_INFO_KEY } from "@/model/constants.ts";

const info = inject(GLOBAL_INFO_KEY)?.value;

if (!info) {
  throw new Error("Info not provided");
}
</script>

<template>
  <div class="-mx-4 grid grid-cols-2 gap-px sm:-mx-6 lg:grid-cols-4">
    <div v-for="stat in info.stats" :key="stat.name" class="px-4 py-6 sm:px-6 lg:px-8">
      <p class="mb-2 flex items-baseline gap-x-2">
        <span class="text-4xl font-semibold tracking-tight">{{ stat.value }}</span>
        <span v-if="stat.unit" class="text-sm text-gray-400">{{ stat.unit }}</span>
      </p>
      <p class="text-sm font-medium leading-6 text-gray-400">{{ stat.name }}</p>
    </div>
  </div>
</template>
