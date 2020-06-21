import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-auto-flow: row;
  place-items: center;
  place-content: center;
  row-gap: 32px;

  h2 {
    font-size: 32px;
    color: ${({ theme }) => theme.darkGray};
  }

  button {
    display: grid;
    place-content: center;
    border: none;
    background: none;
    height: 32px;

    padding: 8px 16px;
    border-radius: 4px;
  }

  > form {
    display: grid;
    grid-auto-flow: row;
    justify-content: center;
    justify-items: center;
    row-gap: 8px;

    > button {
      background: ${({ theme }) => theme.darkOrange};
      color: #fff;
      width: 320px;
      padding: 8px 16px;
    }
  }

  > button {
    color: ${({ theme }) => theme.darkGray};
    text-decoration: underline;
  }
`;
