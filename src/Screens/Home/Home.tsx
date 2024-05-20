import React from "react";
import { HomeProps } from "./Index";
import { View } from "react-native";
import { Card, MyText } from "@/Components";

const Home = (props: HomeProps) => {
  return (
    <>
      <View>
        <Card
          episode="Pilot"
          season="1"
          airDate="2021-07-01"
          onPress={() => console.debug("click")}
        />
      </View>
    </>
  );
};

export default Home;
