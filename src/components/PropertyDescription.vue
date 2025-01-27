<script setup lang="ts">
import { inject } from "vue";
import { GLOBAL_INFO_KEY } from "@/model/constants.ts";

const info = inject(GLOBAL_INFO_KEY);

if (!info) {
  throw new Error("Info not provided");
}
</script>

<template>
  <div>
    <a
      v-if="info.descriptionEn?.length"
      href="#english"
      class="block text-center text-primary text-xl italic opacity-80 transition-opacity hover:opacity-90"
    >
      English description below
    </a>

    <p
      v-for="(part, index) of info.description"
      :key="index"
      class="my-4 leading-loose text-center text-xl"
    >
      {{ part }}
    </p>

    <div v-if="info.descriptionEn?.length" id="english" class="pt-4">
      <hr class="opacity-40" />
      <p
        v-for="(part, index) of info.descriptionEn"
        :key="index"
        class="mb-4 mt-8 leading-loose text-center text-xl"
      >
        {{ part }}
      </p>
    </div>
  </div>
</template>
