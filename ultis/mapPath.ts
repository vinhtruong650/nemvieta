export function pathMapper(str: string): string {
  const pathMap: { [key: string]: string } = {
    "san-pham": "sản phẩm",
    nem: "nệm",
  };

  return pathMap[str] || str;
}
