export function slugANormal(str: string) {
  return str.toLowerCase().replace(/\s+/g, "-");
}
