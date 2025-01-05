<script setup lang="ts">
import { inject, ref } from "vue";
import { GLOBAL_INFO_KEY } from "@/model/constants.ts";
import { ArrowLongLeftIcon, ArrowLongRightIcon } from "@heroicons/vue/24/outline";

const info = inject(GLOBAL_INFO_KEY);

if (!info) {
  throw new Error("Info not provided");
}

const { name, gallery } = info;
const { images, basePath } = gallery;

const currentIndex = ref<number>(0);
const autoplayInterval = ref<number>(0);

const showNext = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length;
  stopAutoplay();
};

const showPrevious = () => {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length;
  stopAutoplay();
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
        <div v-for="(image, index) in images" :key="image" class="h-full w-full flex-shrink-0">
          <img
            class="h-full w-full object-cover"
            :src="`${name}/${basePath}/${image}`"
            :alt="'Image ' + (index + 1)"
          />
        </div>
      </div>

      <!-- Navigation Buttons -->
      <button
        @click="showPrevious"
        class="absolute left-4 top-1/2 -translate-y-1/2 transform drop-shadow-3xl hover:opacity-80"
      >
        <ArrowLongLeftIcon class="h-10 w-10 text-white" />
      </button>
      <button
        @click="showNext"
        class="absolute right-4 top-1/2 -translate-y-1/2 transform drop-shadow-3xl hover:opacity-80"
      >
        <ArrowLongRightIcon class="h-10 w-10 text-white" />
      </button>
    </div>
  </div>
</template>
