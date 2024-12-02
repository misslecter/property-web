<script setup lang="ts">
import info from "./assets/prosek/info.json";
import { provide } from "vue";
import { GLOBAL_INFO_KEY } from "@/model/constants.ts";
import ImageGallery from "@/components/ImageGallery.vue";
import PropertyDescription from "@/components/PropertyDescription.vue";
import PropertyStats from "@/components/PropertyStats.vue";
import type { Info } from "@/model/Info.ts";
import PropertyDownloads from "@/components/PropertyDownloads.vue";
import PropertyAddress from "@/components/PropertyAddress.vue";
import PropertyContact from "@/components/PropertyContact.vue";

provide(GLOBAL_INFO_KEY, info as unknown as Info);
</script>

<template>
  <div class="min-h-screen px-4 text-gray-600">
    <ImageGallery />
    <div class="grid grid-cols-2 gap-8">
      <div class="flex flex-col gap-8">
        <PropertyAddress />
        <PropertyContact />
        <PropertyDownloads />
      </div>
      <div class="flex flex-col">
        <PropertyStats />
        <PropertyDescription />
      </div>
    </div>
  </div>
</template>
