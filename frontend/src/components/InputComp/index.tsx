import React, { InputHTMLAttributes, useState } from "react";
import { Wrapper } from "./style";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const InputComp = ({ ...inputProps }: Props) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Wrapper isFocused={isFocused}>
      <input
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...inputProps}
      />
    </Wrapper>
  );
};

export default InputComp;
