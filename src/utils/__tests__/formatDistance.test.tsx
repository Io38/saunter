import { formatDistance } from "../formatDistance";

describe("formatDistance", () => {
  it("should format distance in meters when less than 1000 meters", () => {
    const distance = 500;
    const formatted = formatDistance(distance);
    expect(formatted).toBe("500 m");
  });

  it("should format distance in kilometers when equal to or more than 1000 meters", () => {
    const distance1 = 1000;
    const distance2 = 2500;
    const formatted1 = formatDistance(distance1);
    const formatted2 = formatDistance(distance2);
    expect(formatted1).toBe("1.0 km");
    expect(formatted2).toBe("2.5 km");
  });
});
