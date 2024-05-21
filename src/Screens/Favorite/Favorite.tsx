import React, { useEffect } from "react";
import { FlatList, Image, SafeAreaView, View } from "react-native";
import { FavoriteCharacter, FavoriteProps } from "./Index";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MyToastShow } from "@/Utils";
import { MyText } from "@/Components";
import { styles } from "./Favorite.style";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/Store";
import { getFavoriteCharacter } from "@/Store/Slices/CharacterSlice";

const Favorite = (props: FavoriteProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const favoriteCharacter = useSelector(
    (state: RootState) => state.character.favoriteCharacter
  );

  // const handleGetFavorite = async () => {
  //   try {
  //     const favorite = await AsyncStorage.getItem("@FAVORITE_CHARACTERS");
  //     if (favorite) {
  //       const favoriteData: FavoriteCharacter[] = JSON.parse(favorite);
  //       setFavoriteCharacters(favoriteData);
  //     } else {
  //       MyToastShow("No favorite characters found", "warning");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleGetFavorite = async () => {
    try {
      await dispatch(getFavoriteCharacter());
    } catch (error) {}
  };

  useEffect(() => {
    handleGetFavorite();
  }, [dispatch]);

  return (
    <>
      <SafeAreaView style={styles.container}>
        {favoriteCharacter ? (
          <FlatList
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            horizontal={false}
            data={favoriteCharacter}
            renderItem={({ item }) => (
              <>
                <View
                  style={{
                    backgroundColor: "lightgrey",
                    margin: 4,
                    borderRadius: 8,
                    padding: 4,
                    alignItems: "center",
                    justifyContent: "center",
                    width: "48%",
                  }}>
                  <Image
                    source={{ uri: item.image }}
                    style={styles.charImage}
                  />
                  <MyText
                    text={item.name}
                    verAlign="center"
                    horAlign="center"
                    size="text"
                    color="black"
                    type="bold"
                  />
                </View>
              </>
            )}
          />
        ) : (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}>
            <MyText
              text="No favorite characters"
              verAlign="center"
              horAlign="center"
              size="large"
            />
          </View>
        )}
      </SafeAreaView>
    </>
  );
};

export default Favorite;
