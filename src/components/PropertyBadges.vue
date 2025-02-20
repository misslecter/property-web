<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { ArrowDownTrayIcon } from "@heroicons/vue/24/outline";
import AppLinkWithIcon from "@/components/layout/AppLinkWithIcon.vue";
import assets from "../assets/prosek/assets.json";
import type { Assets } from "@/model/Assets.ts";

const { t, tm } = useI18n();
const { badges } = assets as Assets;
const { basePath, items } = badges;

const projectName = import.meta.env.VITE_PROJECT_NAME;
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-12 lg:flex-row">
    <div
      v-for="(badge, index) in items"
      :key="index"
      :class="{
        'animate-fadeInDelayed': Number(index) === 0,
        'animate-fadeInDelayed2': Number(index) === 1,
      }"
      class="flex flex-1 items-center justify-center gap-4 opacity-0 md:gap-8"
    >
      <img src="../assets/img/leaf-left.png" alt="Leaf left" class="w-[40px]" />

      <div class="flex flex-1 flex-col items-center gap-2">
        <!-- Title translated using Vue I18n -->
        <div
          class="whitespace-nowrap text-center font-bold italic md:text-lg"
          å
          v-html="'&quot;' + tm(`${badge.tTitle}`) + '&quot;'"
        />

        <!-- Download link if available -->
        <AppLinkWithIcon
          v-if="badge"
          :title="t(`${badge.tName}`)"
          :to="`${projectName}/${basePath}/${badge.filename}`"
          :icon="ArrowDownTrayIcon"
          :download="badge.filename"
        />
      </div>

      <img src="../assets/img/leaf-right.png" alt="Leaf right" class="w-[40px]" />
    </div>
  </div>
</template>
