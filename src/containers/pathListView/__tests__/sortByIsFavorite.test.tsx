import { sortByIsFavorite } from "../utils/sortByIsFavorite";

describe("sortByIsFavorite", () => {
  it("should sort the data with isFavorite true first", () => {
    const data = [
      { id: 1, isFavorite: false },
      { id: 2, isFavorite: true },
      { id: 3, isFavorite: true },
      { id: 4, isFavorite: false },
    ];

    const sortedData = sortByIsFavorite(data);

    expect(sortedData).toEqual([
      { id: 2, isFavorite: true },
      { id: 3, isFavorite: true },
      { id: 1, isFavorite: false },
      { id: 4, isFavorite: false },
    ]);
  });

  it("should handle empty data", () => {
    const data: any = [];

    const sortedData = sortByIsFavorite(data);

    expect(sortedData).toEqual([]);
  });

  it("should handle data with all isFavorite values as false", () => {
    const data = [
      { id: 1, isFavorite: false },
      { id: 2, isFavorite: false },
      { id: 3, isFavorite: false },
    ];

    const sortedData = sortByIsFavorite(data);

    expect(sortedData).toEqual([
      { id: 1, isFavorite: false },
      { id: 2, isFavorite: false },
      { id: 3, isFavorite: false },
    ]);
  });
});
