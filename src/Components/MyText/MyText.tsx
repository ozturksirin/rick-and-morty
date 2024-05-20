import React from "react";
import { Text, TextStyle } from "react-native";
import AppTheme from "@/Theme/index";
import { MyTextProps } from "./Index";

const { font, colors } = AppTheme;

const MyText = (props: MyTextProps) => {
  const {
    type = "regular",
    size = "text",
    text = "Random Text",
    horAlign,
    verAlign,
    onPress,
    color = colors.black,
    margin,
    textDecorationLine,
    numberOfLines = undefined,
    newStyle,
    multiText,
  } = props;

  let style: TextStyle = {
    textAlign: horAlign,
    textAlignVertical: verAlign,
    fontFamily: font.types[type],
    fontSize: font.size[size],
    color,
    backgroundColor: undefined,
    textDecorationLine,
    ...margin,
    ...newStyle,
  };

  return (
    <Text
      numberOfLines={numberOfLines}
      disabled={!onPress}
      onPress={onPress}
      style={style}>
      {`${text}`}
      {multiText && (
        <Text
          numberOfLines={numberOfLines}
          disabled={!onPress}
          onPress={onPress}
          style={{
            ...style,
            fontFamily: font.types[multiText.type],
            fontSize: font.size[multiText.size],
          }}>
          {`${multiText.text}`}
        </Text>
      )}
    </Text>
  );
};

export default MyText;
