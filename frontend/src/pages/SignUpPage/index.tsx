import React, {useState, useCallback, useMemo} from "react";
import { Wrapper, ToggleCheckBox } from "./style";
import InputComp from "../../components/InputComp";
import { useHistory } from "react-router-dom";
import { routes } from "../../routes";

const LoginPage = () => {
  const { push } = useHistory();
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckbox = useCallback( (event: React.ChangeEvent<HTMLInputElement>):void=>{
    setIsChecked(event.target.checked);
  }, []);

  
  return (
    <Wrapper>
      <h2>Spotenu</h2>
      <form>
        <ToggleCheckBox>
          <p>Banda ?</p>
          <input type="checkbox" onChange={handleCheckbox}/>
          <span />
        </ToggleCheckBox>
        <InputComp type="text" placeholder="Name" />
        <InputComp type="text" placeholder="Nickname" />
        <InputComp type="text" placeholder="Email" />
        {isChecked && <InputComp type="text" placeholder="Descrição" />}
        <InputComp type="password" placeholder="Password" />
        <InputComp type="password" placeholder="Confirm Password" />
        <button type="submit">Sign Up</button>
      </form>
      <button onClick={() => push(routes.login)}>Login</button>
    </Wrapper>
  );
};

export default LoginPage;
