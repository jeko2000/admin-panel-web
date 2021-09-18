export function truncate(
  str: string,
  maxLength: number,
  suffix = '...'
): string {
  if (str.length < maxLength) {
    return str;
  }
  return str.substr(0, maxLength) + suffix
}
export function formatDate(date: Date): string {
  return date.toLocaleString();
}
