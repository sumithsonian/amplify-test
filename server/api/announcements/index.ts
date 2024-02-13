export default defineEventHandler((event) => {
  const config = useRuntimeConfig().public;

  const query = getQuery(event);
  const limit = Number(query?.limit) || 10;

  const announcements = $fetch("/news", {
    method: "GET",
    headers: { "X-MICROCMS-API-KEY": config.microCmsApiKey },
    baseURL: config.microCmsApiServiceUrl,
  });

  return announcements;
});
