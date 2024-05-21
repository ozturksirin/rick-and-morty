import Toast from "react-native-toast-message";

const visibilityTime = 5000;
export const MyToastShow = (header: string, desc: string, isError = true) => {
  Toast.show({
    type: isError ? "error" : "success",
    text1: header,
    text2: desc,
    visibilityTime,
    autoHide: true,
  });
};
