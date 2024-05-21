import React from "react";
import { HomeProps } from "./Index";
import { FlatList, SafeAreaView, View } from "react-native";
import { Card } from "@/Components";
import { useSelector } from "react-redux";
import { RootState } from "@/Store";

const Home = (props: HomeProps) => {
  const { navigation } = props;
  const episodes = useSelector((state: RootState) => state.episode.episodes);

  return (
    <>
      <SafeAreaView
        style={{
          paddingTop: "8%",
          paddingHorizontal: 8,
        }}>
        <FlatList
          data={episodes?.results}
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
                })
              }
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </SafeAreaView>
    </>
  );
};

export default Home;
