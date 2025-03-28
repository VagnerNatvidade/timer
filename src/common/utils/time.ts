export function timeToSeconds(time: string) {
  const [hours = "0", minutes = "0", seconds = "0"] = time.split(":");

  const hoursToSecond = Number(hours) * 3600;
  const minutesToSeconds = Number(minutes) * 60;
  return hoursToSecond + minutesToSeconds + Number(seconds);
}
