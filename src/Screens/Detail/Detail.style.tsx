import { FlatList, StyleSheet } from "react-native";
import AppTheme from "@/Theme";

const {
  colors,
  device: { width, height, winWidth, winHeight },
} = AppTheme;

export const styles = StyleSheet.create({
  body: { flex: 1, paddingTop: "8%", paddingHorizontal: 8 },
  container: {
    backgroundColor: colors.white,
    borderRadius: 10,
    elevation: 8,
    padding: 4,
    margin: 6,
  },
  icon: {
    position: "absolute",
    top: 50,
    right: 20,
    zIndex: 1,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
  },
  info: {
    padding: 10,
    backgroundColor: colors.white,
    borderRadius: 10,
    elevation: 10,
    margin: 6,
    gap: 6,
    marginTop: 12,
  },
  charArea: {
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  flatListContent: {
    width: "100%",
    height: "100%",
  },
  charInfo: {
    justifyContent: "center",
    alignItems: "center",
    width: "34%",
    height: 180, // chnged later
  },
  charImage: {
    width: "90%",
    height: "60%",
    borderRadius: 50,
  },
});
