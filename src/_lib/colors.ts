export const hexToRgb = (hex: string) => {
  const hexValue = hex.replace('#', '')

  const r = parseInt(hexValue.substring(0, 2), 16)
  const g = parseInt(hexValue.substring(2, 4), 16)
  const b = parseInt(hexValue.substring(4, 6), 16)

  return { r, g, b }
}

export const calculateLuminance = (rgb: {
  r: number
  g: number
  b: number
}) => {
  const { r, g, b } = rgb

  const rsrgb = r / 255
  const gsrgb = g / 255
  const bsrgb = b / 255

  const rL = rsrgb <= 0.04045 ? rsrgb / 12.92 : ((rsrgb + 0.055) / 1.055) ** 2.4
  const gL = gsrgb <= 0.04045 ? gsrgb / 12.92 : ((gsrgb + 0.055) / 1.055) ** 2.4
  const bL = bsrgb <= 0.04045 ? bsrgb / 12.92 : ((bsrgb + 0.055) / 1.055) ** 2.4

  const luminance = 0.2126 * rL + 0.7152 * gL + 0.0722 * bL

  return luminance
}

export const calculateRGBsContrast = (text: string, background: string) => {
  const rgbText = hexToRgb(text)
  const rgbBackground = hexToRgb(background)

  const luminanceText = calculateLuminance(rgbText)
  const luminanceBackground = calculateLuminance(rgbBackground)

  const contrast =
    (Math.max(luminanceText, luminanceBackground) + 0.05) /
    (Math.min(luminanceText, luminanceBackground) + 0.05)

  return +contrast.toFixed(2)
}
