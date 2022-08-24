type ThemesType = {
  light: ThemeType;
  dark: ThemeType;
};

export type ThemeType = {
  background: string;
  textColor: string;
  buttonBackground: string;
  borderColor: string;
  footerBackground: string;
};

const themes: ThemesType = {
  light: {
    background: "#FFFFFF",
    textColor: "#353535",
    buttonBackground: "#7B62FF",
    borderColor: "#B1BDC9",
    footerBackground: "#353535",
  },
  dark: {
    background: "#353535",
    textColor: "#FFFFFF",
    buttonBackground: "#7B62FF",
    borderColor: "#B1BDC9",
    footerBackground: "#222326",
  },
};

export default themes;
