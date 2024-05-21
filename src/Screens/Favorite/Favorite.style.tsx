import { StyleSheet } from "react-native";
import AppTheme from "@/Theme";

const { colors, borders } = AppTheme;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "8%",
    paddingHorizontal: 8,
  },
  charImage: {
    width: 150,
    height: 150,
    borderRadius: 12,
  },
});
