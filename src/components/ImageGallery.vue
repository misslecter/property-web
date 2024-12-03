<script setup lang="ts">
import { inject, ref } from "vue";
import { GLOBAL_INFO_KEY } from "@/model/constants.ts";
import { ArrowLongLeftIcon, ArrowLongRightIcon } from "@heroicons/vue/24/outline";

const appBasePath = import.meta.env.VITE_BASE_PATH;
const info = inject(GLOBAL_INFO_KEY);

if (!info) {
  throw new Error("Info not provided");
}

const { name, gallery } = info;
const { images, basePath } = gallery;

const currentIndex = ref<number>(0);

const showNext = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length;
};

const showPrevious = () => {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length;
};
</script>

<template>
  <div class="h-[calc(100vh-36px)] w-full py-4">
    <div class="relative h-full w-full overflow-hidden rounded-xl">
      <!-- Images -->
      <div
        class="flex h-full transition-transform duration-500"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div v-for="(image, index) in images" :key="image" class="h-full w-full flex-shrink-0">
          <img
            class="h-full w-full object-cover"
            :src="`${appBasePath}/public/${name}/${basePath}/${image}`"
            :alt="'Image ' + (index + 1)"
          />
        </div>
      </div>

      <!-- Navigation Buttons -->
      <button
        @click="showPrevious"
        class="drop-shadow-3xl absolute left-4 top-1/2 -translate-y-1/2 transform hover:opacity-80"
      >
        <ArrowLongLeftIcon class="h-10 w-10 text-white" />
      </button>
      <button
        @click="showNext"
        class="drop-shadow-3xl absolute right-4 top-1/2 -translate-y-1/2 transform hover:opacity-80"
      >
        <ArrowLongRightIcon class="h-10 w-10 text-white" />
      </button>
    </div>
  </div>
</template>
