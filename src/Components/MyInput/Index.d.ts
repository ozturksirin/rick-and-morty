export type MyInputProps = {
  value: string;
  handleChange: (text: string) => void;
  placeholder: string;
  isSecureText?: boolean;
  onFocus?: () => void;
  handleOnBlur?: () => void;
  returnKeyType?: "done" | "next" | "go" | "search" | "send";
  multiline?: boolean;
  maxLength?: number;
  isNumeric?: boolean;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  disabled?: boolean;
  isTitle?: boolean;
  capitalizeFirstLetter?: boolean;
  isSearch?: boolean;
};
