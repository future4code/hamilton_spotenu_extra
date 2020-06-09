import React, { InputHTMLAttributes } from "react";
import { Wrapper } from "./style";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const InputComp = ({ ...inputProps }: Props) => {
  return (
    <Wrapper>
      <input {...inputProps} />
    </Wrapper>
  );
};

export default InputComp;
