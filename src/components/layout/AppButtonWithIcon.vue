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
  title?: string;
  icon: FunctionalComponent<HTMLAttributes & VNodeProps> | VNode;
}>();
</script>

<template>
  <a
    :href="to"
    class="flex cursor-pointer items-center gap-2 border border-black bg-primary px-2 py-1 font-bold text-black hover:scale-105 md:gap-4 md:p-4 md:text-lg"
  >
    {{ title }}
    <component :is="icon" class="w-4 md:w-[1.6rem]" />
  </a>
</template>
