<template>
  <div>
    <h1>Home</h1>
    <h2>Event</h2>
    <ul>
      <li v-for="event of events.contents" :key="event.id">
        <NuxtLink :to="`/events/${event.id}`"> {{ event.name }} </NuxtLink>
      </li>
    </ul>
    <h2>News</h2>
    <ul>
      <li v-for="announcement of announcements.contents" :key="announcement.id">
        <NuxtLink :to="`/announcements/${announcement.id}`"> {{ announcement.title }} </NuxtLink>
      </li>
    </ul>
    {{ news }}
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig().public;

const events = await $fetch("/api/events");
const announcements = await $fetch("/news", {
  method: "GET",
  headers: { "X-MICROCMS-API-KEY": config.microCmsApiKey },
  baseURL: config.microCmsApiServiceUrl,
});
</script>
