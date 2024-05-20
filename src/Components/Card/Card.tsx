import React from "react";
import { CardProps } from "./Index";
import { Pressable, View } from "react-native";
import MyText from "../MyText/MyText";
import { styles } from "./Card.styles";

const Card = (props: CardProps) => {
  const { episode, season, airDate, onPress } = props;

  const handleOnPress = async () => {
    if (onPress) {
      await onPress();
    }
  };

  return (
    <>
      <View style={styles.body}>
        <Pressable onPress={() => handleOnPress()}>
          <MyText
            text="Episode: "
            size="header"
            multiText={{
              text: episode,
              size: "header",
              type: "bold",
            }}
          />
          <MyText
            text="Season: "
            size="header"
            multiText={{
              text: season,
              size: "header",
              type: "bold",
            }}
          />
          <MyText
            text="Air Date: "
            size="header"
            multiText={{
              text: airDate,
              size: "header",
              type: "bold",
            }}
          />
        </Pressable>
      </View>
    </>
  );
};

export default Card;
