<script setup lang="ts">
import { inject } from "vue";
import { GLOBAL_INFO_KEY } from "@/model/constants.ts";
import AppLink from "@/components/layout/AppLink.vue";
import { MapPinIcon } from "@heroicons/vue/24/outline";

const info = inject(GLOBAL_INFO_KEY)?.value;

if (!info) {
  throw new Error("Info not provided");
}
</script>

<template>
  <AppLink
    :title="info.address.value"
    :to="info.address.mapLink"
    :icon="MapPinIcon"
    target="_blank"
  />
</template>
