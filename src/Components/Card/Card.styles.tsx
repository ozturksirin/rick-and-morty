import AppTheme from "@/Theme";
import { StyleSheet } from "react-native";

const { colors } = AppTheme;

export const styles = StyleSheet.create({
  body: {
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 10,
    marginHorizontal: 8,
  },
});
