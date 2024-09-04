import { forwardRef } from "react";
import { ITextInput } from "../interface/ITextInput";

const TextInput = forwardRef<HTMLInputElement, ITextInput>((props, ref) => {
  const { placeholder, id, className, handleOnChange, value, handleOnKeyDown } =
    props;

  return (
    <input
      type="text"
      id={id}
      className={className}
      placeholder={placeholder}
      onChange={handleOnChange}
      value={value}
      onKeyDown={handleOnKeyDown}
      ref={ref} // Attach the ref here
    />
  );
});

export default TextInput;
