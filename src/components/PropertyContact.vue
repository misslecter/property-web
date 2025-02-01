<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/vue/24/outline';
import AppLinkWithIcon from '@/components/layout/AppLinkWithIcon.vue';

// Get the `t` function from vue-i18n
const { t } = useI18n();

/**
 * If you still want to build the image path from
 * "projectName" + "/" + "contact.photo", you can do so in a computed.
 */
const contactPhotoSrc = computed(() => {
  return `${t('name')}/${t('contact.photo')}`;
});
</script>

<template>
  <div class="divide-y divide-gray-700 overflow-hidden rounded-lg bg-white bg-opacity-[0.07]">
    <div class="px-4 py-5 sm:px-6">
      <div class="flex w-full items-center justify-between space-x-6">
        <!-- Contact Photo -->
        <img
          class="h-20 w-20 flex-shrink-0 rounded-full bg-white"
          :src="contactPhotoSrc"
          alt=""
        />

        <div class="flex-1">
          <!-- Contact Name -->
          <h3 class="text-xl font-bold text-white">
            {{ t('contact.name') }}
          </h3>

          <!-- Contact Title -->
          <p class="mt-1 text-white opacity-70">
            {{ t('contact.title') }}
          </p>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-4 px-4 py-5 sm:p-6">
      <!-- Contact Email -->
      <AppLinkWithIcon
        :title="t('contact.email')"
        :to="`mailto:${t('contact.email')}`"
        :icon="EnvelopeIcon"
        size="md"
      />

      <!-- Contact Phone -->
      <AppLinkWithIcon
        :title="t('contact.phone')"
        :to="`tel:${t('contact.phone')}`"
        :icon="PhoneIcon"
        size="md"
      />
    </div>
  </div>
</template>
