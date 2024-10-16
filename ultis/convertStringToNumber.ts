export function convertStringToNumber(str: string): number | null {
  const num = Number(str);
  return isNaN(num) ? null : num;
}
