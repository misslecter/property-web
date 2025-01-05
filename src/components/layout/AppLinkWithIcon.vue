<script setup lang="ts">
import {
  defineProps,
  type FunctionalComponent,
  type HTMLAttributes,
  type VNode,
  type VNodeProps,
} from "vue";

// Define the type of props
const props = defineProps<{
  to: string;
  title: string;
  icon: FunctionalComponent<HTMLAttributes & VNodeProps> | VNode;
  download?: string;
  target?: string;
}>();
</script>

<template>
  <div class="flex gap-2 align-middle text-white opacity-50 hover:opacity-80">
    <component :is="icon" class="w-4" />
    <a
      :href="props.to"
      :download="props.download"
      :target="target"
      class="text-center text-xs sm:text-sm"
      >{{ props.title }}</a
    >
  </div>
</template>
