import { TextStyle } from "react-native";
import AppTheme from "@/Theme/index";

const { font } = AppTheme;

type MultiTextOptions = {
  text: string;
  size: keyof typeof font.size;
  type: keyof typeof font.types;
};

export type MyTextProps = {
  text?: string | number | boolean;
  type?: keyof typeof font.types;
  size?: keyof typeof font.size;
  verAlign?: "top" | "bottom" | "center";
  horAlign?: "left" | "right" | "center";
  textDecorationLine?:
    | "none"
    | "underline"
    | "underline line-through"
    | "line-through"
    | undefined;
  onPress?: (...args: unknown[]) => unknown;
  color?: string;
  numberOfLines?: number;
  margin?: Pick<
    TextStyle,
    | "marginLeft"
    | "marginRight"
    | "marginVertical"
    | "marginHorizontal"
    | "marginTop"
    | "marginBottom"
  >;
  multiText?: MultiTextOptions;
  newStyle?: TextStyle | any;
};
