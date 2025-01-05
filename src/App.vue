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

provide(GLOBAL_INFO_KEY, info as unknown as Info);

const imageIcon: VNode = h("img", {
  src: "/360.svg",
});
</script>

<template>
  <div class="min-h-screen scroll-smooth bg-black px-4 pb-16 text-gray-300">
    <AppContainer>
      <div class="flex items-center justify-between py-4">
        <PropertyAddress />
        <AppLinkWithIcon title="3D prohlídka" to="#3d" :icon="imageIcon" />
      </div>

      <div class="font-headings text-center text-7xl font-thin text-white">
        Bydlete<br />v <span class="text-primary font-normal">ultimátním</span> luxusu
      </div>

      <AppBadges />
    </AppContainer>

    <ImageGallery />

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
        class="lg:h-[600px]"
        title="Example Website"
      >
      </iframe>
    </div>
  </div>
</template>
