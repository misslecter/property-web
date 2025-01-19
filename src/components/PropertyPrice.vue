<!--<script setup lang="ts">-->
<!--import { inject } from "vue";-->
<!--import { GLOBAL_INFO_KEY } from "@/model/constants.ts";-->

<!--const info = inject(GLOBAL_INFO_KEY);-->

<!--console.log("price", info);-->

<!--if (!info) {-->
<!--  throw new Error("Info not provided");-->
<!--}-->
<!--</script>-->

<script>
import { inject } from "vue";
import { GLOBAL_INFO_KEY } from "@/model/constants.ts";

const info = inject(GLOBAL_INFO_KEY);
console.log(info);
</script>

<template>
  <p class="text-4xl font-extrabold text-primary">{{ info.value.price }}</p>
</template>
