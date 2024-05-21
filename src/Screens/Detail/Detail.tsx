import React, { useEffect } from "react";
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
  // console.debug("characters", characters);

  const char = useSelector((state: RootState) => state.character.allCharacter);
  // console.debug("char", char);

  const handleCharacter = async () => {
    if (char) {
      await dispatch(setAllCharacter());
    }
    // Tüm id'leri almak
    const ids = characters.map((char: any) => char.split("/").pop());
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

  const [search, setSearch] = React.useState("");

  return (
    <SafeAreaView style={styles.body}>
      <View style={{ flex: 0.5 }}>
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
          value={search}
          handleChange={() => {
            setSearch(search);
          }}
          placeholder="Character Name"
          isSearch={true}
        />
      </View>
      <View style={{ flex: 1 }}>
        <View style={styles.charArea}>
          <MyText text="Characters" size="header" type="bold" />
          <FlatList
            data={char}
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
      </View>
    </SafeAreaView>
  );
};

export default Detail;
