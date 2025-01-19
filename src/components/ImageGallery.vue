<script setup lang="ts">
import { inject, ref } from "vue";
import { GLOBAL_INFO_KEY } from "@/model/constants.ts";
import { ArrowLongLeftIcon, ArrowLongRightIcon } from "@heroicons/vue/24/outline";

const info = inject(GLOBAL_INFO_KEY)?.value;

if (!info) {
  throw new Error("Info not provided");
}

const { name, gallery } = info;
const { images, basePath } = gallery;

const currentIndex = ref<number>(0);
const autoplayInterval = ref<number>(0);

const showNext = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length;
};

const showPrevious = () => {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length;
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
