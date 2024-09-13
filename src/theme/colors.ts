type ColorsThemeTokens = 'primary' | 'secondary' | 'light' | 'tertiary'

export const getColorTheme = (colorSelected: ColorsThemeTokens): string => {
  const color = {
    light: '#F0F8FF',
    primary: '#FFBC42',
    secondary: '#1D2F60',
    tertiary: '#B1B3B5',
  }
  return color[colorSelected]
}
