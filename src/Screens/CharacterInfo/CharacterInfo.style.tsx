import { StyleSheet } from "react-native";
import AppTheme from "@/Theme";

const {
  colors,
  borders: { radius, width: bWidth },
} = AppTheme;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "8%",
    paddingHorizontal: 8,
  },
  backIcon: {
    position: "absolute",
    top: 20,
    left: 10,
    zIndex: 1,
  },
  addFavorite: {
    position: "absolute",
    top: 20,
    right: 20,
    zIndex: 1,
  },
  image: {
    width: "100%",
    height: 340,
    borderRadius: radius.medium,
  },
  infoArea: {
    padding: 16,
    backgroundColor: colors.white,
    borderRadius: radius.medium,
    borderWidth: bWidth.regular,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    gap: 14,
  },
});
