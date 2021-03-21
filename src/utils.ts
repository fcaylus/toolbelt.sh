import { getContrastRatio } from '@material-ui/core';

export function randInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function rgbToHex(rgb: number[]): string {
  const toHex = (c: number) => {
    const hex = c.toString(16);
    return hex.length == 1 ? '0' + hex : hex;
  };

  return `#${toHex(rgb[0])}${toHex(rgb[1])}${toHex(rgb[2])}`;
}

export function contrastTextColor(backgroundColor: string): string {
  const ratioToWhite = getContrastRatio('#ffffff', backgroundColor);
  const ratioToBlack = getContrastRatio('#000000', backgroundColor);

  return ratioToWhite > ratioToBlack ? '#ffffff' : '#000000';
}
