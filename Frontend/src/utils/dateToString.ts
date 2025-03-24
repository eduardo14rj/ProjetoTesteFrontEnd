export function dateToString(date: Date): string {
  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  const month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
  const day = ('0' + dateObj.getDate()).slice(-2);
  const hour = ('0' + dateObj.getHours()).slice(-2);
  const minute = ('0' + dateObj.getMinutes()).slice(-2);
  return `${day}/${month}/${year} ${hour}:${minute}`;
}