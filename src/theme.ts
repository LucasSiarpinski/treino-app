import { useColorScheme } from 'react-native';

export interface ThemeColors {
  background: string;
  surface: string;
  primary: string;
  onPrimary: string;
  primaryText: string;
  text: string;
  textSecondary: string;
  border: string;
}

export const themeColors: { dark: ThemeColors; light: ThemeColors } = {
  dark: {
    background: '#101214',
    surface: '#1D2226',
    primary: '#B8F34A',
    onPrimary: '#101214',
    primaryText: '#B8F34A',
    text: '#F4F6F2',
    textSecondary: '#B4BEC3',
    border: '#2C3238',
  },
  light: {
    background: '#F6F7F4',
    surface: '#FFFFFF',
    primary: '#B8F34A',
    onPrimary: '#101214',
    primaryText: '#3F6B00',
    text: '#101214',
    textSecondary: '#5B666C',
    border: '#E1E5E8',
  },
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
} as const;

export const touchTarget = {
  min: 48,
  buttonHeight: 56,
} as const;

export function useAppTheme(): ThemeColors {
  const scheme = useColorScheme();
  return scheme === 'light' ? themeColors.light : themeColors.dark;
}
