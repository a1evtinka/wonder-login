import { FormEvent, ChangeEvent, useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import resetPosition from '../shared/helpers/resetPosition';
import changePositionRandomly from '../shared/helpers/changePositionRandomly';
import Input from '../shared/components/Input';
import LOGIN_AGREEMENTS from '../shared/constants';
import Checkbox from '../shared/components/Checkbox';
import Button from '../shared/components/Button';

interface ILoginForm {
    isMoving: boolean;
}
interface ICheckbox {
    REMEMBER: boolean;
    FORGET: boolean;
    TERMS: boolean;
    DONATE: boolean;
    EXTRA: boolean;
}

interface ILoginData {
    login: string;
    password: string;
    checkboxes: ICheckbox
}

function LoginForm({ isMoving }: ILoginForm) {
  const loginInput = useRef<HTMLInputElement | null>(null);
  const passwordInput = useRef<HTMLInputElement | null>(null);

  const [formData, setFormData] = useState<ILoginData>({
    login: '',
    password: '',
    checkboxes: {
      REMEMBER: false,
      FORGET: false,
      TERMS: false,
      DONATE: false,
      EXTRA: false,
    },
  });

  const isFormValid = formData.login.length >= 7 && formData.password.length >= 7;

  useEffect(() => {
    if (!isMoving && loginInput.current && passwordInput.current) {
      resetPosition(loginInput.current);
      resetPosition(passwordInput.current);
    }
  }, [isMoving]);

  const changePosition = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (isMoving) {
      changePositionRandomly(e.currentTarget);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Congrats! You are allowed to text me in Telegram: @a1evtinka');
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      name, value,
    } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      name, checked,
    } = event.target;

    setFormData((prevState) => ({
      ...prevState,
      checkboxes: {
        ...prevState.checkboxes,
        [name]: checked,
      },
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormFieldsWrapper>
        <Input
          label="Login"
          type="text"
          name="login"
          value={formData.login}
          onChange={handleInputChange}
          onInput={changePosition}
          ref={loginInput}
        />
        <Input
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          onInput={changePosition}
          className="form-input"
          ref={passwordInput}
        />
        <CheckboxWrapper>
          {Object.entries(LOGIN_AGREEMENTS).map(([key, label]) => (
            <Checkbox
              label={label}
              key={key}
              name={key}
              type="checkbox"
              checked={formData.checkboxes[key as keyof ICheckbox]}
              onChange={handleCheckboxChange}
            />
          ))}
        </CheckboxWrapper>
      </FormFieldsWrapper>
      <Button label="Enter" type="submit" disabled={!isFormValid} />
    </form>
  );
}

export default LoginForm;

const FormFieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  margin-bottom: 16px;
  align-items: flex-end;
  width: 80%;
  gap: 16px;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  align-items: flex-end;
  gap: 16px;
`;