/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    loveTextPrimary: '#B00020',
    loveTextSecondary: '#D81B60',
    loveCardBackground: '#FFF0F5',
    loveCardBorder: '#FFC0CB',
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    loveTextPrimary: '#eb34e5',
    loveTextSecondary: '#FFB6C1',
    loveCardBackground: '#2e232b',
    loveCardBorder: '#B71C1C',
  },
};
