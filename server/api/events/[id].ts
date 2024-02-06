export default defineEventHandler(async (event) => {
  const items: { contents: Array<{ id: string }> } =
    await $fetch('/api/events');
  const item = items.contents.find(
    (row) => row.id === event.context.params?.id,
  );
  return item || {};
});
