<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { ArrowDownTrayIcon } from "@heroicons/vue/24/outline";
import AppLinkWithIcon from "@/components/layout/AppLinkWithIcon.vue";

// Access Vue I18n
const { t, tm } = useI18n();

// Compute badges dynamically from i18n
const badges = computed(() => tm("badges"));

const appBasePath = import.meta.env.VITE_BASE_PATH;
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-12 lg:flex-row">
    <div
      v-for="(badge, index) in badges"
      :key="index"
      :class="{
        'animate-fadeInDelayed': Number(index) === 0,
        'animate-fadeInDelayed2': Number(index) === 1,
      }"
      class="flex flex-1 items-center justify-center gap-4 opacity-0 md:gap-8"
    >
      <img src="../../assets/img/leaf-left.png" alt="Leaf left" class="w-[40px]" />

      <div class="flex flex-1 flex-col items-center gap-2">
        <!-- Title translated using Vue I18n -->
        <div
          class="whitespace-nowrap text-center font-bold italic md:text-lg"
          v-html="'&quot;' + t(`badges.${index}.title`) + '&quot;'"
        />

        <!-- Download link if available -->
        <AppLinkWithIcon
          v-if="badge.download"
          :title="t(`badges.${index}.download.name`)"
          :to="`${appBasePath}/${t('name')}/${badge.download.basePath}/${badge.download.filename}`"
          :icon="ArrowDownTrayIcon"
          :download="badge.download.filename"
        />
      </div>

      <img src="../../assets/img/leaf-right.png" alt="Leaf right" class="w-[40px]" />
    </div>
  </div>
</template>
