import { StyleSheet } from "react-native";
import AppTheme from "@/Theme";

const { colors } = AppTheme;

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
});
