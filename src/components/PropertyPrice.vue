<script setup lang="ts">
import { useI18n } from 'vue-i18n';

// Get the translation function from vue-i18n
const { t } = useI18n();
</script>

<template>
  <div class="flex flex-col gap-2">
    <!-- Translate "Cena" into different languages -->
    <p class="text-gray-400">{{ t('priceLabel') }}</p>

    <!-- Translate the price string (e.g. "28 790 000 Kč" / "CZK 28,790,000") -->
    <p class="text-4xl font-extrabold text-primary">{{ t('price') }}</p>
  </div>
</template>
