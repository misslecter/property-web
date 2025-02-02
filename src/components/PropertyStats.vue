<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";

// Access Vue I18n
const { tm } = useI18n();

// Compute stats dynamically from i18n
const stats = computed(() => tm('stats'));
</script>

<template>
  <div class="-mx-4 grid grid-cols-2 gap-px sm:-mx-6 lg:grid-cols-4">
    <div v-for="(stat, index) in stats" :key="index" class="px-4 py-6 sm:px-6 lg:px-8">
      <p class="mb-2 flex items-baseline gap-x-2">
        <span class="text-4xl font-semibold tracking-tight">{{ stat.value }}</span>
        <span v-if="stat.unit" class="text-sm text-gray-400">{{ stat.unit }}</span>
      </p>
      <p class="text-sm font-medium leading-6 text-gray-400">{{ stat.name }}</p>
    </div>
  </div>
</template>
