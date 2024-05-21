import React from "react";
import { MyText } from "@/Components";
import { Image, SafeAreaView, View } from "react-native";
import { DetailProps } from "./Index";
import { styles } from "./Detail.style";
import { MaterialIcons } from "@expo/vector-icons";
const Detail = (props: DetailProps) => {
  const { route, navigation } = props;
  const { id, episode, name, airDate } = route.params;
  return (
    <SafeAreaView style={styles.body}>
      <MaterialIcons
        name="arrow-back-ios-new"
        size={34}
        onPress={() => navigation.goBack()}
        color="black"
        style={styles.icon}
      />
      <View style={styles.container}>
        <Image
          source={require("@/Assets/Images/season.jpg")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.info}>
        <MyText
          text="Epsisode Name: "
          size="header"
          type="bold"
          multiText={{
            text: name,
            size: "medium",
            type: "regular",
          }}
        />
        <MyText
          text="Episode: "
          size="header"
          type="bold"
          multiText={{
            text: episode,
            size: "medium",
            type: "regular",
          }}
        />
        <MyText
          text="Air Date: "
          size="header"
          type="bold"
          multiText={{
            text: airDate,
            size: "medium",
            type: "regular",
          }}
        />
      </View>
      <View style={styles.charArea}>
        <MyText text="Characters" size="header" type="bold" />
      </View>
    </SafeAreaView>
  );
};

export default Detail;
