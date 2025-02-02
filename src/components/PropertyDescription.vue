<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";

// Access Vue I18n
const { tm } = useI18n();

// Compute the description dynamically from i18n
const description = computed(() => tm('description'));
</script>

<template>
  <div class="py-8">
    <p v-for="(part, index) in description" :key="index" class="my-4 leading-loose">
      {{ part }}
    </p>
  </div>
</template>
