<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import AppLinkWithIcon from "@/components/layout/AppLinkWithIcon.vue";
import { MapPinIcon } from "@heroicons/vue/24/outline";

// Get the `t` function from vue-i18n
const { t } = useI18n();


</script>

<template>
  <AppLinkWithIcon
    :title="t('address.value')"
    :to="t('address.mapLink')"
    :icon="MapPinIcon"
    target="_blank"
  />
</template>
