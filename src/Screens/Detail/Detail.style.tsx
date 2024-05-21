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
    top: 20,
    right: 20,
    zIndex: 1,
  },
  image: {
    width: "100%",
    height: 190,
    borderRadius: 8,
  },
  charArea: {
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  charInfo: {
    justifyContent: "center",
    alignItems: "center",
    width: "34%",
    height: 190, // chnged later
    paddingBottom: 14,
  },
  charImage: {
    width: "90%",
    height: "60%",
    borderRadius: 50,
  },
});
