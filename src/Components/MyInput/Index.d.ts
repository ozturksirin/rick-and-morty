export type MyInputProps = {
  value: string;
  handleChange: (text: string) => void;
  placeholder: string;
  isSecureText?: boolean;
  onBlur?: (...args: unknown[]) => unknown;
  onFocus?: (...args: unknown[]) => unknown;
  onChange: (...args: unknown[]) => unknown;
  handleOnBlur?: () => void;
  returnKeyType?: "done" | "next" | "go" | "search" | "send";
  multiline?: boolean;
  maxLength?: number;
  isNumeric?: boolean;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  disabled?: boolean;
  isTitle?: boolean;
  isSearch?: boolean;
  onSubmitEditing?: (...args: unknown[]) => unknown;
};
