<script setup lang="ts">
import { inject } from "vue";
import { GLOBAL_INFO_KEY } from "@/model/constants.ts";
import { MapPinIcon } from "@heroicons/vue/24/outline";

const info = inject(GLOBAL_INFO_KEY);

if (!info) {
  throw new Error("Info not provided");
}
</script>

<template>
  <div class="flex gap-2 align-middle">
    <MapPinIcon class="w-4" />
    <p class="text-sm">{{ info.address.value }}</p>
  </div>
</template>
