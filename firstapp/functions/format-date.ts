export function formatDate(date: Date | string): string {
  const newDate = new Date(date);

  const options: Intl.DateTimeFormatOptions = {
    weekday: "short", //Abbreviated weekday neame (eg) Thu
    day: "2-digit", //Two-digit day of the month
    month: "short",
    year: "numeric",
  };
  return newDate.toLocaleDateString("en-US", options);
}
