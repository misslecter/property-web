<script setup lang="ts">
import { inject } from "vue";
import { GLOBAL_INFO_KEY } from "@/model/constants.ts";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/vue/24/outline";
import AppLinkWithIcon from "@/components/layout/AppLinkWithIcon.vue";

const info = inject(GLOBAL_INFO_KEY);

if (!info) {
  throw new Error("Info not provided");
}
</script>

<template>
  <div class="divide-y divide-gray-700 overflow-hidden rounded-lg bg-white bg-opacity-[0.07]">
    <div class="px-4 py-5 sm:px-6">
      <div class="flex w-full items-center justify-between space-x-6">
        <img
          class="h-20 w-20 flex-shrink-0 rounded-full bg-white"
          :src="`${info.name}/${info.contact.photo}`"
          alt=""
        />
        <div class="flex-1">
          <h3 class="text-xl font-bold text-white">
            {{ info.contact.name }}
          </h3>
          <p class="mt-1 text-white opacity-70">{{ info.contact.title }}</p>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-4 px-4 py-5 sm:p-6">
      <AppLinkWithIcon
        :title="info.contact.email"
        :to="`mailto:${info.contact.email}`"
        :icon="EnvelopeIcon"
        size="md"
      />
      <AppLinkWithIcon
        :title="info.contact.phone"
        :to="`tel:${info.contact.phone}`"
        :icon="PhoneIcon"
        size="md"
      />
    </div>
  </div>
</template>
