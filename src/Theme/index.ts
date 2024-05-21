import { Dimensions, Platform, ViewStyle, StyleProp } from "react-native";

export const OS = Platform.OS === "android" ? "android" : "ios";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const winWidth = Dimensions.get("window").width;
const winHeight = Dimensions.get("window").height;

const fontType = {
  android: {
    bold: "TT-Commons-Bold",
    light: "TT-Commons-Light",
    regular: "TT-Commons-Regular",
    thin: "TT-Commons-Thin",
    xBold: "TT-Commons-ExtraBold",
  },
  ios: {
    bold: "TT-Commons-Bold",
    light: "TT-Commons-Light",
    regular: "TT-Commons-Regular",
    thin: "TT-Commons-Thin",
    xBold: "TT-Commons-ExtraBold",
  },
};

const AppTheme = {
  defaultOpacity: 0.9,
  device: {
    width,
    height,
    winWidth,
    winHeight,
  },
  font: {
    types: fontType[OS],
    size: {
      header: 22,
      subheader: 18,
      text: 16,
      error: 10,
      medium: 18,
      large: 32,
      extraLarge: 48,
    },
  },
  colors: {
    button: {
      light: "",
      dark: "",
      regular: "",
    },
    error: "#FF3333",
    white: "#FFFFFF",
    black: "#000000",
  },
  borders: {
    width: {
      narrow: 0.3,
      slim: 0.7,
      regular: 1,
      bold: 1.5,
    },
    radius: {
      circle: 100,
      button: 50,
      large: 20,
      medium: 14,
      regular: 10,
      small: 8,
    },
  },

  image: {
    contain: {
      resizeMode: "contain",
    },
    wrapper: <StyleProp<ViewStyle>>{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  },
};

export const flexStyles = (flex: number) => ({ flex: flex });

export default AppTheme;
