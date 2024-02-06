<template>
  <div>
    <h1>Announcement</h1>
    {{ announcement }}
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig().public;
const route = useRoute();

const announcement = await $fetch(`/news/${route.params.id}`, {
  method: "GET",
  headers: { "X-MICROCMS-API-KEY": config.microCmsApiKey },
  baseURL: config.microCmsApiServiceUrl,
});
</script>
