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
import PropertyPrice from "@/components/PropertyPrice.vue";

provide(GLOBAL_INFO_KEY, info as unknown as Info);
</script>

<template>
  <div class="min-h-screen px-4 pb-16 text-gray-600">
    <ImageGallery />
    <PropertyAddress />

    <div class="container mx-auto sm:px-6 lg:px-8">
      <div class="flex flex-col gap-16 py-16 lg:flex-row lg:gap-28">
        <div class="top-16 flex w-full flex-col gap-16 self-start lg:sticky lg:min-w-[400px]">
          <PropertyPrice />
          <PropertyContact />
        </div>
        <div class="flex flex-col">
          <PropertyStats />
          <PropertyDescription />
          <PropertyDownloads />
        </div>
      </div>
    </div>
  </div>
</template>
