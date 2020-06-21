import styled, { css } from "styled-components";

interface WrapperProps {
  isFocused: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  width: 320px;
  padding: 8px 16px;
  border: 2px solid #fff;
  border-radius: 4px;
  height: 40px;
  background: #fff;
  border-color: ${({ isFocused, theme }) => isFocused && theme.darkOrange};

  > input {
    height: 100%;
    background: none;
    border: none;
    color: ${({ theme }) => theme.darkGray};
  }
`;
