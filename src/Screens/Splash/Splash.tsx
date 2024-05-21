import React, { useEffect } from "react";
import { SplashProps } from "./Index";
import { View } from "react-native";
import { MyText } from "@/Components";
import LottieView from "lottie-react-native";
import { styles } from "./Splash.style";
import { AppDispatch } from "@/Store";
import { useDispatch } from "react-redux";
import { getEpisodes } from "@/Store/Slices/EpisodeSlice";

const Splash = (props: SplashProps) => {
  const { navigation } = props;
  const dispatch = useDispatch<AppDispatch>();

  const Start = async () => {
    await dispatch(getEpisodes());
    setTimeout(() => {
      navigation.replace("Home");
    }, 3000);
  };
  useEffect(() => {
    Start();
  }, []);

  return (
    <>
      <LottieView
        source={require("@/Assets/Animations/Rick.json")}
        autoPlay
        loop
        style={styles.lottie}
        speed={0.8}
        resizeMode="contain"
      />
      <MyText
        text="Loading.."
        size="large"
        type="bold"
        verAlign="center"
        horAlign="center"
      />
    </>
  );
};

export default Splash;
