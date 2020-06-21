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
      width: 320px;
      padding: 8px 16px;
      background: ${({ theme }) => theme.darkOrange};
      color: #fff;
    }
  }

  > button {
    color: ${({ theme }) => theme.darkGray};
    text-decoration: underline;
  }
`;

export const ToggleCheckBox = styled.label`
  position: relative;
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 10px;
  justify-content: start;
  align-items: center;
  height: 24px;
  width: 100%;
  padding:  0px 16px;
  color: ${({ theme }) => theme.darkGray};
  font-weight: bold;
  
  >input{
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  };

  >span{
    height: 100%;
    width: 50px;
    position: relative;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.darkGray};
    transition: .4s;
    border-radius: 34px;
  };

  >span:before{
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 4px;
    bottom: 3px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
  };

  >input:checked + span{
    background-color: ${({ theme }) => theme.darkOrange};
  };

  >input:focus + span {
    box-shadow: 0 0 1px ${({ theme }) => theme.darkOrange};
  };

  >input:checked + span:before{
    transform: translateX(26px);
  };
`
