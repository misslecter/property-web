<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { PlayCircleIcon } from "@heroicons/vue/24/outline";
import AppButtonWithIcon from "@/components/layout/AppButtonWithIcon.vue";

// Access Vue I18n
const { t } = useI18n();

// Compute the virtual tour link from translations
const virtualTourLink = computed(() => t("virtualTourLink"));

// Open function to launch the tour in a new tab
const open = () => window.open(virtualTourLink.value);
</script>

<template>
  <div class="relative">
    <!-- Iframe for the 3D Virtual Tour -->
    <iframe
      :src="virtualTourLink"
      width="100%"
      class="h-[300px] lg:h-screen"
      :title="t('3dTour')"
    ></iframe>

    <!-- Fullscreen overlay with the "Start Tour" button -->
    <div class="fullscreen bg-radial-black absolute inset-0 flex items-center justify-center">
      <AppButtonWithIcon @click="open" :title="t('startTour')" :icon="PlayCircleIcon" />
    </div>
  </div>
</template>
