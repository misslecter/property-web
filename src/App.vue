<script setup lang="ts">
import info from "./assets/prosek/info.json";
import { provide } from "vue";
import { GLOBAL_INFO_KEY } from "@/model/constants.ts";
import ImageGallery from "@/components/ImageGallery.vue";

provide(GLOBAL_INFO_KEY, info);
</script>

<template>
  <div class="min-h-screen p-4">
    <ImageGallery />
  </div>
</template>
