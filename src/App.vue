<script setup lang="ts">
import info from "./assets/prosek/info.json";
import { provide } from "vue";
import { GLOBAL_INFO_KEY } from "@/model/constants.ts";
import ImageGallery from "@/components/ImageGallery.vue";
import PropertyDescription from "@/components/PropertyDescription.vue";

provide(GLOBAL_INFO_KEY, info);
</script>

<template>
  <div class="min-h-screen px-4 text-gray-600">
    <ImageGallery />
    <PropertyDescription />
  </div>
</template>
