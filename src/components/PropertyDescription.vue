<script setup lang="ts">
import { inject } from "vue";
import { GLOBAL_INFO_KEY } from "@/model/constants.ts";

const info = inject(GLOBAL_INFO_KEY);

if (!info) {
  throw new Error("Info not provided");
}
</script>

<template>
  <div class="py-8">
    <a
      v-if="info.descriptionEn?.length"
      href="#english"
      class="italic text-primary opacity-80 transition-opacity hover:opacity-90"
      >Go to the English description</a
    >
    <p v-for="(part, index) of info.description" :key="index" class="my-4 leading-loose">
      {{ part }}
    </p>
    <div v-if="info.descriptionEn?.length" id="english" class="pt-4">
      <hr class="opacity-40" />
      <p v-for="(part, index) of info.descriptionEn" :key="index" class="mb-4 mt-8 leading-loose">
        {{ part }}
      </p>
    </div>
  </div>
</template>
