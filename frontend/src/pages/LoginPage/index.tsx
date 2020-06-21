import React from "react";
import { Wrapper } from "./style";
import InputComp from "../../components/InputComp";
import { useHistory } from "react-router-dom";
import { routes } from "../../routes";

const LoginPage = () => {
  const { push } = useHistory();

  return (
    <Wrapper>
      <h2>Spotenu</h2>
      <form>
        <InputComp type="text" placeholder="Email or Nickname" />
        <InputComp type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      <button onClick={() => push(routes.signUp)}>Sign Up</button>
    </Wrapper>
  );
};

export default LoginPage;
