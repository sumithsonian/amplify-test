export default defineEventHandler((event) => {
  const query = getQuery(event);
  const limit = Number(query?.limit) || 10;

  const contents = [
    {
      id: "ozj3jo4qw",
      name: "ほげ",
    },
    {
      id: "ozj3jo4qw",
      name: "ほげ2",
    },
    {
      id: "ozj3jo4qw",
      name: "ほげ3",
    },
    {
      id: "ozj3jo4qw",
      name: "ほげ4",
    },
    {
      id: "ozj3jo4qw",
      name: "ほげ5",
    },
  ];

  const limitedContents = contents.slice(0, limit);

  return {
    contents: limitedContents,
    totalCount: 54,
    offset: 0,
    limit,
  };
});
