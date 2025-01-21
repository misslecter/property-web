<script setup lang="ts">
import { inject } from "vue";
import { GLOBAL_INFO_KEY } from "@/model/constants.ts";

const info = inject(GLOBAL_INFO_KEY);

if (!info) {
  throw new Error("Info not provided");
}
</script>

<template>
  <div class="flex flex-col gap-2">
    <p class="text-gray-400">Cena</p>
    <p class="text-4xl font-extrabold text-primary">{{ info.price }}</p>
  </div>
</template>
