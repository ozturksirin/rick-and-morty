import React, { useEffect } from "react";
import { MyText } from "@/Components";
import { FlatList, Image, Pressable, SafeAreaView, View } from "react-native";
import { DetailProps } from "./Index";
import { styles } from "./Detail.style";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/Store";
import { getCharacter, setAllCharacter } from "@/Store/Slices/CharacterSlice";
const Detail = (props: DetailProps) => {
  const { route, navigation } = props;
  const { episode, name, airDate, characters } = route.params;
  const dispatch = useDispatch<AppDispatch>();
  // console.debug("characters", characters);

  const char = useSelector((state: RootState) => state.character.allCharacter);
  console.debug("char", char);

  const handleCharacter = async () => {
    if (char) {
      await dispatch(setAllCharacter());
    }
    // Tüm id'leri almak
    const ids = characters.map((char: any) => char.split("/").pop());
    console.debug("IDs:", ids);
    if (ids.length > 0) {
      ids.forEach((id: number) => {
        if (id) {
          dispatch(getCharacter(id));
        }
      });
    }
  };

  useEffect(() => {
    handleCharacter();
  }, [dispatch, characters]);

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
        <FlatList
          data={char}
          keyExtractor={(item) => item.id.toString()}
          horizontal={false}
          showsVerticalScrollIndicator={true}
          numColumns={3}
          style={styles.flatListContent}
          renderItem={({ item }) => (
            <Pressable
              style={styles.charInfo}
              // onPress={() => navigation.navigate("CharakterInfo", {})}
            >
              <Image
                source={{ uri: item.image }}
                style={styles.charImage}
                resizeMode="cover"
              />
              <MyText text={item.name} size="text" type="bold" />
            </Pressable>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Detail;
