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
        <InputComp type="text" placeholder="Name" />
        <InputComp type="text" placeholder="Nickname" />
        <InputComp type="text" placeholder="Email" />
        <InputComp type="password" placeholder="Password" />
        <InputComp type="password" placeholder="Confirm Password" />
        <button type="submit">Sign Up</button>
      </form>
      <button onClick={() => push(routes.login)}>Login</button>
    </Wrapper>
  );
};

export default LoginPage;
