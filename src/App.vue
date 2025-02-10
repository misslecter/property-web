<script setup lang="ts">
import { h, type VNode } from "vue";
import { useI18n } from "vue-i18n";

import ImageGallery from "@/components/ImageGallery.vue";
import PropertyDescription from "@/components/PropertyDescription.vue";
import PropertyStats from "@/components/PropertyStats.vue";
import PropertyDownloads from "@/components/PropertyDownloads.vue";
import PropertyAddress from "@/components/PropertyAddress.vue";
import PropertyContact from "@/components/PropertyContact.vue";
import PropertyPrice from "@/components/PropertyPrice.vue";
import AppContainer from "@/components/layout/AppContainer.vue";
import PropertyBadges from "@/components/PropertyBadges.vue";
import AppLinkWithIcon from "@/components/layout/AppLinkWithIcon.vue";
import { ArrowDownIcon } from "@heroicons/vue/24/outline";
import AppBackToTop from "@/components/layout/AppBackToTop.vue";
import Property3d from "@/components/PropertyVirtualTour.vue";
import AppLink from "@/components/layout/AppLink.vue";
import { Language } from "@/model/Language.ts";
import { getLanguageTitle } from "@/model/helpers/getLanguageTitle.ts";

const { locale, t } = useI18n();

const imageIcon: VNode = h("img", {
  src: "/360.svg",
});

function setLanguage(language: Language) {
  locale.value = language;
}
</script>

<template>
  <div id="top" class="min-h-screen bg-black pb-[140px] text-gray-300">
    <AppContainer>
      <!-- HEADER / NAV AREA -->
      <div class="flex flex-col pb-[4rem]">
        <div class="flex flex-col items-center gap-4 py-4 lg:flex-row">
          <!-- Address -->
          <div class="flex flex-1">
            <PropertyAddress />
          </div>

          <!-- LANGUAGE TOGGLE BUTTON -->
          <div class="order-first flex flex-1 justify-center gap-4 lg:order-none">
            <AppLink
              v-for="lang in Language"
              :title="getLanguageTitle(lang)"
              :active="locale === lang"
              @click="setLanguage(lang)"
            />
          </div>

          <!-- 3D TOUR LINK -->
          <div class="flex flex-1 justify-end">
            <AppLinkWithIcon :title="t('3dTour')" to="#3d" :icon="imageIcon" />
          </div>
        </div>

        <!-- TITLE / CTA -->
        <div class="flex flex-1 flex-col items-center justify-center gap-20">
          <div
            class="animate-fadeIn pt-[4rem] text-center font-headings text-6xl font-thin text-white lg:text-[8rem] lg:leading-[9rem]"
          >
            {{ t("title.live") }}<br />
            {{ t("title.in") }}
            <span class="font-normal text-primary">{{ t("title.perfect") }}</span>
            {{ t("title.luxury") }}
          </div>

          <PropertyBadges />

          <a href="#gallery" class="mt-8 animate-fadeInDelayed3 opacity-0 hover:opacity-70">
            <ArrowDownIcon class="w-10 animate-bounce" />
          </a>
        </div>
      </div>
    </AppContainer>

    <!-- GALLERY SECTION -->
    <div id="gallery" class="animate-fadeInDelayed3 opacity-0">
      <ImageGallery />
    </div>

    <!-- MAIN CONTENT SECTION -->
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

    <!-- 3D TOUR -->
    <div id="3d">
      <Property3d />
    </div>

    <!-- BACK TO TOP BUTTON -->
    <AppBackToTop />
  </div>
</template>
