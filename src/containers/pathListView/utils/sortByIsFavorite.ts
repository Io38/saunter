export const sortByIsFavorite = <T extends { isFavorite: boolean }>(
  data: T[]
): T[] => {
  return data
    .slice()
    .sort((a, b) => Number(b.isFavorite) - Number(a.isFavorite));
};
