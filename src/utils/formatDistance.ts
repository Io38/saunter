export const formatDistance = (distance: number) => {
  if (distance < 1000) {
    return `${Math.floor(distance)} m`;
  }
  return `${(distance / 1000).toFixed(1)} km`;
};
