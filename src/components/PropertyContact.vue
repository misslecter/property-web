<script setup lang="ts">
import { inject } from "vue";
import { GLOBAL_INFO_KEY } from "@/model/constants.ts";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/vue/24/outline";

const appBasePath = import.meta.env.VITE_BASE_PATH;
const info = inject(GLOBAL_INFO_KEY);

if (!info) {
  throw new Error("Info not provided");
}
</script>

<template>
  <div class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow-2xl">
    <div class="px-4 py-5 sm:px-6">
      <div class="flex w-full items-center justify-between space-x-6">
        <img
          class="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
          :src="`${appBasePath}/public/${info.name}/${info.contact.photo}`"
          alt=""
        />
        <div class="flex-1 truncate">
          <h3 class="truncate text-sm font-medium text-gray-900">{{ info.contact.name }}</h3>
          <p class="mt-1 truncate text-sm text-gray-500">{{ info.contact.title }}</p>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-4 bg-gray-50 px-4 py-5 sm:p-6">
      <div class="flex gap-4 align-middle">
        <EnvelopeIcon class="w-4" />
        <a :href="`mailto:${info.contact.email}`" class="text-sm">{{ info.contact.email }}</a>
      </div>
      <div class="flex gap-4 align-middle">
        <PhoneIcon class="w-4" />
        <a :href="`tel:${info.contact.phone.replace(' ', '')}`" class="text-sm">{{
          info.contact.phone
        }}</a>
      </div>
    </div>
  </div>
</template>
