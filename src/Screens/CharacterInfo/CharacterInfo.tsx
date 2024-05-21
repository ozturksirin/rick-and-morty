import React, { useEffect } from "react";
import { Image, SafeAreaView, View } from "react-native";
import { styles } from "./CharacterInfo.style";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/Store";
import {
  getFavoriteCharacter,
  getSingleCharacter,
} from "@/Store/Slices/CharacterSlice";
import { CharacterInfoProps } from "./Index";
import { MaterialIcons } from "@expo/vector-icons";
import { MyText } from "@/Components";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MyToastShow } from "@/Utils";

const CharacterInfo = (props: CharacterInfoProps) => {
  const { route, navigation } = props;
  const { charId } = route.params;
  const dispatch = useDispatch<AppDispatch>();
  const singleCharacter = useSelector(
    (state: RootState) => state.character?.singleCharacter
  );

  const handleSingleCharacter = async () => {
    try {
      dispatch(getSingleCharacter(charId));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleSingleCharacter();
  }, [dispatch]);

  const handleFavorite = async () => {
    try {
      const favoriteCharacters = await AsyncStorage.getItem(
        "@FAVORITE_CHARACTERS"
      );
      let favoriteCharactersArray = favoriteCharacters
        ? JSON.parse(favoriteCharacters)
        : [];
      if (favoriteCharactersArray.some((char: any) => char.id === charId)) {
        return MyToastShow(
          "Already in Favorites",
          "This character is already in favorites"
        );
      }
      favoriteCharactersArray.push({
        id: charId,
        name: singleCharacter?.name,
        image: singleCharacter?.image,
      });
      await AsyncStorage.setItem(
        "@FAVORITE_CHARACTERS",
        JSON.stringify(favoriteCharactersArray)
      );
      MyToastShow(
        "Added to Favorites",
        "This character has been added to favorites",
        false
      );
      return dispatch(getFavoriteCharacter());
    } catch (error) {
      console.error(error);
      return MyToastShow(
        "Error",
        "An error occurred while adding to favorites"
      );
    }
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1 }}>
          <MaterialIcons
            name="arrow-back-ios-new"
            size={36}
            onPress={() => navigation.goBack()}
            color="black"
            style={styles.backIcon}
          />
          <MaterialIcons
            name="favorite"
            size={36}
            color="black"
            style={styles.addFavorite}
            onPress={() => handleFavorite()}
          />
          <Image
            source={{ uri: singleCharacter?.image }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={{ flex: 1 }}>
          <MyText text="Character Info" size="large" type="bold" />
          <View style={styles.infoArea}>
            <MyText
              text="Name "
              size="header"
              type="bold"
              multiText={{
                text: singleCharacter?.name || "",
                size: "subheader",
                type: "regular",
              }}
            />
            <MyText
              text="Status "
              size="header"
              type="bold"
              multiText={{
                text: singleCharacter?.status || "",
                size: "subheader",
                type: "regular",
              }}
            />
            <MyText
              text="Species "
              size="header"
              type="bold"
              multiText={{
                text: singleCharacter?.species || "",
                size: "subheader",
                type: "regular",
              }}
            />
            <MyText
              text="Type "
              size="header"
              type="bold"
              multiText={{
                text: singleCharacter?.type || "",
                size: "subheader",
                type: "regular",
              }}
            />
            <MyText
              text="Gender "
              size="subheader"
              multiText={{
                text: singleCharacter?.gender || "",
                size: "subheader",
                type: "regular",
              }}
            />
            <MyText
              text="Origin "
              size="header"
              type="bold"
              multiText={{
                text: singleCharacter?.origin?.name || "",
                size: "subheader",
                type: "regular",
              }}
            />

            <MyText
              text="Location "
              size="header"
              type="bold"
              multiText={{
                text: singleCharacter?.location?.name || "",
                size: "subheader",
                type: "regular",
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default CharacterInfo;
