import React from "react";
import Router from "@/Router/Router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    "TT-Commons-Bold": require("./src/Assets/Fonts/TT Commons Bold.otf"),
    "TT-Commons-Light": require("./src/Assets/Fonts/TT Commons Light.otf"),
    "TT-Commons-Regular": require("./src/Assets/Fonts/TT Commons Regular.otf"),
    "TT-Commons-Thin": require("./src/Assets/Fonts/TT Commons Thin.otf"),
    "TT-Commons-ExtraBold": require("./src/Assets/Fonts/TT Commons ExtraBold.otf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Router />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
  },
});
