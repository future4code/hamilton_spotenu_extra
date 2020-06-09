import styled from "styled-components";

export const Wrapper = styled.div`
  width: 320px;
  padding: 8px 16px;
  border: 2px solid #fff;
  border-radius: 4px;
  height: 40px;
  background: #fff;

  > input {
    height: 100%;
    background: none;
    border: none;
    color: ${({ theme }) => theme.darkGray};
  }

  :focus {
    border-color: ${({ theme }) => theme.darkOrange};
  }
`;
