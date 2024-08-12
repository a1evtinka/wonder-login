import { FormEvent, ChangeEvent, useState, useEffect, useRef } from 'react';
import { resetPosition } from '../shared/helpers/resetPosition';
import { changePositionRandomly } from '../shared/helpers/changePositionRandomly';
import Input from '../shared/components/Input';
import styled from 'styled-components'
import { LOGIN_AGREEMENTS } from '../shared/constants';
import Checkbox from '../shared/components/Checkbox';
import Button from '../shared/components/Button';

interface ILoginForm {
    isMoving: boolean;
}

function LoginForm( { isMoving }: ILoginForm) {

  const loginInput = useRef<HTMLInputElement | null>(null);
  const passwordInput = useRef<HTMLInputElement | null>(null);

  const [formData, setFormData] = useState({ 
    login: '', 
    password: '',
    terms: false, });

  const isFormValid = formData.login.length >= 7 && formData.password.length >= 7;

  useEffect(() => {
    if (isMoving && loginInput.current && passwordInput.current) {
        resetPosition(loginInput.current)
        resetPosition(passwordInput.current)
    }
  }, [isMoving])
  
  const changePosition = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (isMoving) {
      changePositionRandomly(e.currentTarget)
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Congrats! Now you are allowed to text me in Telegram @a1evtinka")
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
      <form onSubmit={handleSubmit}>
        <InputWrapper>
            <Input
            label='Login'
              type="text"
              name="login"
              value={formData.login}
              onChange={handleInputChange}
              onInput={changePosition}
              ref={loginInput}
            />
            <Input
              label='Password'
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              onInput={changePosition}
              className="form-input"
              ref={passwordInput}
            />
          <CheckboxWrapper>
          {LOGIN_AGREEMENTS.map((agreement) => 
         <Checkbox
         label={agreement}
         type="checkbox"
         checked={formData.terms}
         onChange={handleInputChange}
       />)}
          </CheckboxWrapper>
        </InputWrapper>
        <Button label={"Enter"} type="submit" disabled={!isFormValid} />
      </form>
  )
}

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  align-items: flex-end;
  width: 70%;
  gap: 16px;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  align-items: flex-end;
  gap: 16px;
`;

export default LoginForm
