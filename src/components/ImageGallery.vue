<script setup lang="ts">
import { ref } from "vue";
import { ArrowLongLeftIcon, ArrowLongRightIcon } from "@heroicons/vue/24/outline";
import assets from "../assets/prosek/assets.json";
import type { Assets } from "@/model/Assets.ts";

const projectName = import.meta.env.VITE_PROJECT_NAME;

const { gallery } = assets as Assets;
const { items, basePath } = gallery;

const currentIndex = ref<number>(0);
const autoplayInterval = ref<number>(0);

const showNext = () => {
  currentIndex.value = (currentIndex.value + 1) % items.length;
};

const showPrevious = () => {
  currentIndex.value = (currentIndex.value - 1 + items.length) % items.length;
};

const autoplay = () => {
  autoplayInterval.value = setInterval(showNext, 3000);
};

const stopAutoplay = () => {
  clearInterval(autoplayInterval.value);
};

autoplay();
</script>

<template>
  <div class="h-[300px] w-full lg:h-screen">
    <div class="relative h-full w-full overflow-hidden">
      <!-- Images -->
      <div
        class="flex h-full transition-transform duration-500"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div v-for="(image, index) in items" :key="image" class="h-full w-full flex-shrink-0">
          <img
            class="h-full w-full object-cover"
            :src="`${projectName}/${basePath}/${image}`"
            :alt="'Image ' + (index + 1)"
          />
        </div>
      </div>

      <!-- Navigation Buttons -->
      <button
        @click="
          () => {
            showPrevious();
            stopAutoplay();
          }
        "
        class="absolute left-4 top-1/2 -translate-y-1/2 transform border border-black bg-primary px-2 hover:scale-105"
      >
        <ArrowLongLeftIcon class="h-8 w-8 text-black md:h-10 md:w-10" />
      </button>
      <button
        @click="
          () => {
            showNext();
            stopAutoplay();
          }
        "
        class="absolute right-4 top-1/2 -translate-y-1/2 transform border border-black bg-primary px-2 hover:scale-105"
      >
        <ArrowLongRightIcon class="h-8 w-8 text-black md:h-10 md:w-10" />
      </button>
    </div>
  </div>
</template>
