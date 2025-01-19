<script setup lang="ts">
import infoCs from "./assets/prosek/infoCs.json";
import infoEn from "./assets/prosek/infoEn.json";
import { h, provide, type Ref, ref, type VNode } from "vue";
import { GLOBAL_INFO_KEY } from "@/model/constants.ts";
import ImageGallery from "@/components/ImageGallery.vue";
import PropertyDescription from "@/components/PropertyDescription.vue";
import PropertyStats from "@/components/PropertyStats.vue";
import type { Info } from "@/model/Info.ts";
import PropertyDownloads from "@/components/PropertyDownloads.vue";
import PropertyAddress from "@/components/PropertyAddress.vue";
import PropertyContact from "@/components/PropertyContact.vue";
import PropertyPrice from "@/components/PropertyPrice.vue";
import AppContainer from "@/components/layout/AppContainer.vue";
import AppBadges from "@/components/layout/AppBadges.vue";
import AppLink from "@/components/layout/AppLink.vue";
import { ArrowDownIcon } from "@heroicons/vue/24/outline";
import AppBackToTop from "@/components/layout/AppBackToTop.vue";
import Property3d from "@/components/PropertyVirtualTour.vue";

const imageIcon: VNode = h("img", {
  src: "/360.svg",
});

enum Language {
  Cs = "cs",
  En = "en",
}

const localizedInfo = ref(infoCs);
const setLanguage = (language: Language) => {
  localStorage.setItem("language", language);
  localizedInfo.value = language === Language.En ? infoEn : infoCs;
  console.log(localizedInfo.value);
};

provide(GLOBAL_INFO_KEY, localizedInfo as unknown as Ref<Info>);
</script>

<template>
  <div id="top" class="min-h-screen bg-black pb-[140px] text-gray-300">
    <AppContainer>
      <div class="flex flex-col pb-[4rem]">
        <div class="flex flex-col items-center justify-between gap-4 py-4 lg:flex-row">
          <div class="flex flex-1">
            <PropertyAddress />
          </div>
          <div class="flex flex-1 items-center justify-center gap-4">
            <a
              :href="'#' + lang"
              @click="() => setLanguage(lang)"
              v-for="lang in Object.values(Language)"
              class="xs:text-xs sm:text-sm"
            >
              {{ lang }}
            </a>
          </div>
          <div class="flex flex-1 justify-end">
            <AppLink title="3D prohlídka" to="#3d" :icon="imageIcon" />
          </div>
        </div>
        <div class="flex flex-1 flex-col items-center justify-center gap-20">
          <div
            class="animate-fadeIn pt-[4rem] text-center font-headings text-6xl font-thin text-white lg:text-[8rem] lg:leading-[9rem]"
          >
            Bydlete<br />v <span class="font-normal text-primary">dokonalém</span> luxusu
          </div>

          <AppBadges />

          <a href="#gallery" class="mt-8 animate-fadeInDelayed3 opacity-0 hover:opacity-70">
            <ArrowDownIcon class="w-10 animate-bounce" />
          </a>
        </div>
      </div>
    </AppContainer>

    <div id="gallery" class="animate-fadeInDelayed3 opacity-0">
      <ImageGallery />
    </div>

    <AppContainer>
      <div class="flex flex-col gap-16 py-16 lg:flex-row lg:gap-28">
        <div class="top-16 flex w-full flex-col gap-16 self-start lg:sticky lg:min-w-[400px]">
          <PropertyPrice />
          <PropertyContact />
        </div>
        <div class="flex flex-col">
          <PropertyStats />
          <PropertyDescription />
          <PropertyDownloads />
        </div>
      </div>
    </AppContainer>

    <div id="3d">
      <Property3d />
    </div>
  </div>

  <AppBackToTop />
</template>
