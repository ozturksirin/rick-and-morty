import React from "react";
import { HomeProps } from "./Index";
import { FlatList, SafeAreaView, View } from "react-native";
import { Card, MyInput } from "@/Components";
import { useSelector } from "react-redux";
import { RootState } from "@/Store";
import { styles } from "./Home.style";

const Home = (props: HomeProps) => {
  const { navigation } = props;
  const episodes = useSelector((state: RootState) => state.episode.episodes);
  const [search, setSearch] = React.useState("");

  const handleFilter = () => {
    if (search === "") {
      return episodes?.results;
    }
    return episodes?.results.filter((item) => {
      return item.name.toLowerCase().includes(search.toLowerCase());
    });
  };

  return (
    <>
      <SafeAreaView style={styles.body}>
        <MyInput
          onChange={handleFilter}
          isSearch={true}
          placeholder="Episode Name"
          value={search}
          handleChange={(text) => {
            setSearch(text);
          }}
        />
        <View style={{ paddingBottom: 20 }}>
          <FlatList
            keyExtractor={(item) => item.id.toString()}
            data={handleFilter()}
            renderItem={({ item }) => (
              <Card
                episode={item.name}
                season={item.episode}
                airDate={item.air_date}
                onPress={() =>
                  navigation.navigate("Detail", {
                    id: item.id,
                    name: item.name,
                    episode: item.episode,
                    airDate: item.air_date,
                    characters: item.characters,
                  })
                }
              />
            )}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Home;
