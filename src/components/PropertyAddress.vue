<script setup lang="ts">
import { inject, ref } from "vue";
import { GLOBAL_INFO_KEY } from "@/model/constants.ts";
import AppLinkWithIcon from "@/components/layout/AppLinkWithIcon.vue";
import { MapPinIcon } from "@heroicons/vue/24/outline";

const info = inject(GLOBAL_INFO_KEY);

if (!info) {
  throw new Error("Info not provided");
}
</script>

<template>
  <AppLinkWithIcon
    :title="info.address.value"
    :to="info.address.mapLink"
    :icon="MapPinIcon"
    target="_blank"
  />
</template>
