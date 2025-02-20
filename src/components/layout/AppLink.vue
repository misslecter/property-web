<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{
  onClick: () => void;
  title: string;
  active?: boolean;
}>();
</script>

<template>
  <button
    @click="onClick"
    :class="{ 'text-primary': active, 'text-white': !active }"
    class="text-sm opacity-70 hover:opacity-80"
  >
    {{ title }}
  </button>
</template>
