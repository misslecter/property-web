<script setup lang="ts">
import { inject } from "vue";
import { GLOBAL_INFO_KEY } from "@/model/constants.ts";
import { ArrowDownTrayIcon } from "@heroicons/vue/24/outline";
import AppLinkWithIcon from "@/components/layout/AppLinkWithIcon.vue";

const appBasePath = import.meta.env.VITE_BASE_PATH;
const info = inject(GLOBAL_INFO_KEY);

if (!info) {
  throw new Error("Info not provided");
}
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-12 lg:flex-row">
    <div
      v-for="(badge, index) in info.badges"
      :key="index"
      class="flex flex-1 items-center justify-center gap-4 md:gap-8"
    >
      <img src="../../assets/img/leaf-left.png" alt="Leaf left" class="w-[40px]" />
      <div class="flex flex-1 flex-col items-center gap-2">
        <div
          class="whitespace-nowrap text-center font-bold italic md:text-lg"
          v-html="'&quot;' + badge.title + '&quot;'"
        />
        <AppLinkWithIcon
          v-if="badge.download"
          :title="badge.download.name"
          :to="`${appBasePath}/public/${info.name}/${badge.download.basePath}/${badge.download.filename}`"
          :icon="ArrowDownTrayIcon"
          :download="badge.download.filename"
        />
      </div>

      <img src="../../assets/img/leaf-right.png" alt="Leaf right" class="w-[40px]" />
    </div>
  </div>
</template>
