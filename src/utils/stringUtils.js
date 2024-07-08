export function convertTime(time) {
  return new Date(time * 1000).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

export function convertSeconds(time) {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  return minutes === 0 ? `${hours} hrs` : `${hours} hrs ${minutes} mins`;
}
