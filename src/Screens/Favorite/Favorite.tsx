import React, { useEffect } from "react";
import { Alert, FlatList, Image, SafeAreaView, View } from "react-native";
import { FavoriteProps } from "./Index";
import { MyToastShow } from "@/Utils";
import { MyText } from "@/Components";
import { styles } from "./Favorite.style";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/Store";
import { getFavoriteCharacter } from "@/Store/Slices/CharacterSlice";
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Favorite = (props: FavoriteProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const favoriteCharacter = useSelector(
    (state: RootState) => state.character.favoriteCharacter
  );

  const handleGetFavorite = async () => {
    try {
      await dispatch(getFavoriteCharacter());
    } catch (error) {
      return MyToastShow("error", "Failed to get favorite characters");
    }
  };

  useEffect(() => {
    handleGetFavorite();
  }, [dispatch]);

  const handleRemoveFavorite = async (id: number) => {
    try {
      const favorite = await AsyncStorage.getItem("@FAVORITE_CHARACTERS");
      if (favorite !== null) {
        const favoriteData = JSON.parse(favorite);
        const newFavorite = favoriteData.filter(
          (item: { id: number }) => item.id !== id
        );
        Alert.alert("Remove from favorite", "Are you sure?", [
          {
            text: "Cancel",
            onPress: () => {
              return null;
            },
            style: "cancel",
          },
          {
            text: "YES",
            onPress: async () => {
              await AsyncStorage.setItem(
                "@FAVORITE_CHARACTERS",
                JSON.stringify(newFavorite)
              );
              MyToastShow("success", "Character removed from favorite", false);
              await dispatch(getFavoriteCharacter());
            },
          },
        ]);
      }
    } catch (error) {
      console.error(error);
      MyToastShow("error", "Failed to remove character from favorite");
    }
  };

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
                <View style={styles.favoriteArea}>
                  <MaterialIcons
                    name="delete"
                    size={30}
                    color="#577B8D"
                    style={styles.removeIcon}
                    onPress={() => handleRemoveFavorite(item.id)}
                  />
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
          <View style={styles.notArea}>
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
