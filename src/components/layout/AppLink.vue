<script setup lang="ts">
import {
  defineProps,
  type FunctionalComponent,
  type HTMLAttributes,
  type VNode,
  type VNodeProps,
} from "vue";

defineProps<{
  to?: string;
  title: string;
  size?: "sm" | "md";
  icon?: FunctionalComponent<HTMLAttributes & VNodeProps> | VNode;
  download?: string;
  target?: string;
}>();
</script>

<template>
  <div class="flex gap-2 align-middle text-white opacity-70 hover:opacity-80">
    <component v-if="icon" :is="icon" class="w-4" />
    <a
      :href="to"
      :download="download"
      :target="target"
      :class="{ 'sm:text-md': size === 'md', 'sm:text-sm': !size || size === 'sm' }"
      class="xs:text-xs truncate text-center"
      >{{ title }}</a
    >
  </div>
</template>
