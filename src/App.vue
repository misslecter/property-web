<script setup lang="ts">
import info from "./assets/prosek/info.json";
import { h, provide, type VNode } from "vue";
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
import AppLinkWithIcon from "@/components/layout/AppLinkWithIcon.vue";
import { ArrowDownIcon } from "@heroicons/vue/24/outline";
import AppBackToTop from "@/components/layout/AppBackToTop.vue";

provide(GLOBAL_INFO_KEY, info as unknown as Info);

const imageIcon: VNode = h("img", {
  src: "/360.svg",
});
</script>

<template>
  <div id="top" class="min-h-screen bg-black pb-[160px] text-gray-300">
    <AppContainer>
      <div class="flex flex-col pb-[4rem]">
        <div class="flex flex-col items-center justify-between gap-4 py-4 lg:flex-row">
          <PropertyAddress />
          <AppLinkWithIcon title="3D prohlídka" to="#3d" :icon="imageIcon" />
        </div>
        <div class="flex flex-1 flex-col items-center justify-center gap-20">
          <div
            class="font-headings pt-[4rem] text-center text-6xl font-thin text-white lg:text-[8rem] lg:leading-[8rem]"
          >
            Bydlete<br />v <span class="text-primary font-normal">ultimátním</span> luxusu
          </div>

          <AppBadges />

          <a href="#gallery">
            <ArrowDownIcon class="w-10" />
          </a>
        </div>
      </div>
    </AppContainer>

    <div id="gallery">
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
      <iframe
        src="https://my.matterport.com/show/?m=VdxdAxDqy1g"
        width="100%"
        class="h-[300px] lg:h-screen"
        title="Example Website"
      >
      </iframe>
    </div>
  </div>

  <AppBackToTop />
</template>
