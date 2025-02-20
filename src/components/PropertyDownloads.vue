<script setup lang="ts">
import assets from "../assets/prosek/assets.json";
import type { Assets } from "@/model/Assets.ts";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const { downloads } = assets as Assets;
const { basePath, items } = downloads;

const projectName = import.meta.env.VITE_PROJECT_NAME;
</script>

<template>
  <ul role="list" class="divide-y divide-gray-700 rounded-md border border-gray-700">
    <li
      v-for="file in items"
      :key="file.filename"
      class="flex items-center justify-between py-4 pl-4 pr-5 text-sm/6"
    >
      <div class="flex w-0 flex-1 items-center">
        <!-- Icon -->
        <svg
          class="size-5 shrink-0 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M15.621 4.379a3 3 0 0 0-4.242 0l-7 7a3 3 0 0 0 4.241 4.243h.001l.497-.5a.75.75 0 0 1 1.064 1.057l-.498.501-.002.002a4.5 4.5 0 0 1-6.364-6.364l7-7a4.5 4.5 0 0 1 6.368 6.36l-3.455 3.553A2.625 2.625 0 1 1 9.52 9.52l3.45-3.451a.75.75 0 1 1 1.061 1.06l-3.45 3.451a1.125 1.125 0 0 0 1.587 1.595l3.454-3.553a3 3 0 0 0 0-4.242Z"
            clip-rule="evenodd"
          />
        </svg>

        <!-- File name + label (PDF) -->
        <div class="ml-4 flex min-w-0 flex-1 gap-4">
          <!-- Show the file name from translations -->
          <span class="truncate font-medium">{{ t(`${file.tName}`) }}</span>
          <span class="shrink-0 text-gray-400">PDF</span>
        </div>
      </div>

      <div class="ml-4 shrink-0">
        <!-- "Download" link. The text is localized. The actual PDF filename is from the array. -->
        <a
          class="font-medium text-primary opacity-80 hover:opacity-100"
          :href="`${projectName}/${basePath}/${file.filename}`"
          :download="file.filename"
        >
          {{ t("downloads.label") }}
        </a>
      </div>
    </li>
  </ul>
</template>
