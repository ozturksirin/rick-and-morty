import { StyleSheet } from "react-native";
import AppTheme from "@/Theme";

const { colors, borders } = AppTheme;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "8%",
    paddingHorizontal: 8,
    maxWidth: "100%",
  },
  favoriteArea: {
    backgroundColor: "lightgrey",
    margin: 4,
    borderRadius: 8,
    padding: 4,
    alignItems: "center",
    justifyContent: "center",
    width: "48%",
  },
  charImage: {
    width: 150,
    height: 150,
    borderRadius: 12,
  },
  removeIcon: {
    position: "absolute",
    top: 6,
    right: 14,
    zIndex: 1,
  },
  notArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
