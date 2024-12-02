<script setup lang="ts">
import { inject } from "vue";
import { GLOBAL_INFO_KEY } from "@/model/constants.ts";

const appBasePath = import.meta.env.VITE_BASE_PATH;
const info = inject(GLOBAL_INFO_KEY);

if (!info) {
  throw new Error("Info not provided");
}

const { name, gallery } = info;
const { images, basePath } = gallery;
const columns: string[][] = [];

const chunkSize = 3;
for (let i = 0; i < images.length; i += chunkSize) {
  const chunk = images.slice(i, i + chunkSize);
  columns.push(chunk);
}
</script>

<template>
  <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
    <div v-for="(column, index) in columns" :key="index" class="grid gap-4">
      <div v-for="image in column" :key="image">
        <img
          class="h-auto max-w-full rounded-lg"
          :src="`${appBasePath}/public/${name}/${basePath}/${image}`"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
