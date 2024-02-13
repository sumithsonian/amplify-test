export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig().public;

  const query = getQuery(event);
  const limit = Number(query?.limit) || 10;

  const announcements = await $fetch("/news", {
    method: "GET",
    headers: { "X-MICROCMS-API-KEY": config.microCmsApiKey },
    baseURL: config.microCmsApiServiceUrl,
  });

  return announcements;
});
