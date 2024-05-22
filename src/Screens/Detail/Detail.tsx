import React, { useEffect, useState } from "react";
import { MyInput, MyText } from "@/Components";
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
  const [search, setSearch] = useState("");

  const char = useSelector((state: RootState) => state.character.allCharacter);

  const handleCharacter = async () => {
    if (char) {
      await dispatch(setAllCharacter());
    }
    const ids = characters.map((char: string) => char.split("/").pop());
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

  const handleFilter = () => {
    if (search === "") {
      return char;
    }
    if (char === null) {
      console.log("char is not found");
      return [];
    }

    return char.filter((item) => {
      return item.name.toLowerCase().includes(search.toLowerCase());
    });
  };

  return (
    <SafeAreaView style={styles.body}>
      <View>
        <MaterialIcons
          name="arrow-back-ios-new"
          size={36}
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
        <MyInput
          onChange={handleFilter}
          isSearch={true}
          placeholder="Character Name"
          value={search}
          handleChange={(text) => {
            setSearch(text);
          }}
        />
      </View>
      <View style={styles.charArea}>
        <MyText text="Characters" size="header" type="bold" />
        <FlatList
          data={handleFilter()}
          keyExtractor={(item) => item.id.toString()}
          horizontal={false}
          showsVerticalScrollIndicator={true}
          numColumns={3}
          renderItem={({ item }) => (
            <Pressable
              style={styles.charInfo}
              onPress={() =>
                navigation.navigate("CharacterInfo", {
                  charId: item.id,
                })
              }>
              <Image
                source={{ uri: item.image }}
                style={styles.charImage}
                resizeMode="cover"
              />
              <MyText text={item?.name} size="text" type="bold" />
              <MyText text={item?.status} size="text" type="regular" />
              <MyText text={item?.species} size="small" type="regular" />
            </Pressable>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Detail;
