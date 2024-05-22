import React from "react";
import { TextInput, View } from "react-native";
import { MyInputProps } from "./Index";
import AppTheme from "@/Theme";
import { styles } from "./MyInput.style";
import { Feather } from "@expo/vector-icons";

const { colors } = AppTheme;

const MyInput = (props: MyInputProps) => {
  const {
    value,
    handleChange,
    placeholder,
    isSecureText,
    onFocus,
    handleOnBlur,
    returnKeyType,
    multiline,
    maxLength,
    isNumeric,
    keyboardType,
    disabled,
    capitalizeFirstLetter,
    isSearch = false,
    onSubmitEditing,
  } = props;

  const getStyle = () => {
    return {
      ...styles.input,
    };
  };

  const handleChangeText = (text: string) => {
    console.debug("text", text);
    handleChange(text);
  };

  return (
    <>
      <View style={styles.body}>
        <TextInput
          style={getStyle()}
          value={value}
          editable={!disabled}
          placeholder={placeholder}
          placeholderTextColor={colors.black}
          onChangeText={handleChangeText}
          secureTextEntry={isSecureText}
          returnKeyType={returnKeyType}
          multiline={multiline}
          maxLength={maxLength}
          autoCapitalize={capitalizeFirstLetter ? "sentences" : "none"}
          onFocus={onFocus}
          onBlur={handleOnBlur}
          keyboardType={isNumeric ? "numeric" : keyboardType}
          onSubmitEditing={onSubmitEditing}
        />
        {isSearch && (
          <Feather
            name="search"
            size={24}
            color="black"
            style={styles.search}
          />
        )}
      </View>
    </>
  );
};

export default MyInput;
