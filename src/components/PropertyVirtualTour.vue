<script setup lang="ts">
import { inject } from "vue";
import { GLOBAL_INFO_KEY } from "@/model/constants.ts";
import { PlayCircleIcon } from "@heroicons/vue/24/outline";
import AppButtonWithIcon from "@/components/layout/AppButtonWithIcon.vue";

const info = inject(GLOBAL_INFO_KEY)?.value;

if (!info) {
  throw new Error("Info not provided");
}

const open = () => window.open(info.virtualTourLink);
</script>

<template>
  <div class="relative">
    <iframe
      :src="info.virtualTourLink"
      width="100%"
      class="h-[300px] lg:h-screen"
      title="3D prohlídka"
    >
    </iframe>

    <div class="fullscreen bg-radial-black absolute inset-0 flex items-center justify-center">
      <AppButtonWithIcon @click="open" title="Spustit prohlídku" :icon="PlayCircleIcon" />
    </div>
  </div>
</template>
