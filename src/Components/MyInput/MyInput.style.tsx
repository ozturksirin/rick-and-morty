import { StyleSheet } from "react-native";
import AppTheme from "@/Theme";

const { colors } = AppTheme;

const enumStyle = {
  enumInput: {
    padding: 10,
    color: colors.black,
  },
};

export const styles = StyleSheet.create({
  body: {
    margin: 10,
  },

  input: {
    ...enumStyle.enumInput,
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 50,
  },
  search: {
    position: "absolute",
    right: 20,
    top: 12,
  },
});
