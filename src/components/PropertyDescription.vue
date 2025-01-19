<script setup lang="ts">
import { inject } from "vue";
import { GLOBAL_INFO_KEY } from "@/model/constants.ts";

const info = inject(GLOBAL_INFO_KEY)?.value;

if (!info) {
  throw new Error("Info not provided");
}
</script>

<template>
  <div class="py-8">
    <p v-for="(part, index) of info.description" :key="index" class="my-4 leading-loose">
      {{ part }}
    </p>
  </div>
</template>
