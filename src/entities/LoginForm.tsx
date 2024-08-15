import styled from 'styled-components';

import Input from '../shared/components/Input';
import LOGIN_AGREEMENTS from '../shared/constants';
import Checkbox from '../shared/components/Checkbox';
import Button from '../shared/components/Button';
import { ICheckbox, ILoginForm } from './LoginForm.types';
import useLoginForm from './LoginForm.hook';

function LoginForm({ isMoving }: ILoginForm) {
  const {
    formData,
    isFormValid,
    loginInput,
    passwordInput,
    changePosition,
    handleInputChange,
    handleCheckboxChange,
    handleSubmit,
  } = useLoginForm(isMoving);
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
