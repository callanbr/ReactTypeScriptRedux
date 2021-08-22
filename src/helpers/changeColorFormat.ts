const colorToHex = (color: number): string => {
  const hex = color.toString(16);
  return hex.length == 1 ? '0' + hex : hex;
};

export const RgbToHex = (r: number, g: number, b: number): string => {
  return '#' + colorToHex(r) + colorToHex(g) + colorToHex(b);
};

export const HexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};
