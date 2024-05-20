import React from "react";
import { HomeProps } from "./Index";
import { View } from "react-native";
import { Card, MyText } from "@/Components";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/Store";
import { getEpisodes } from "@/Store/Slices/EpisodeSlice";

const Home = (props: HomeProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const fetchEpisodes = () => {
    dispatch(getEpisodes());
  };

  return (
    <>
      <View>
        <Card
          episode="Pilot"
          season="1"
          airDate="2021-07-01"
          onPress={() => fetchEpisodes()}
        />
      </View>
    </>
  );
};

export default Home;
