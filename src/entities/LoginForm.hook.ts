import { useState, useEffect, useRef, FormEvent, ChangeEvent } from 'react';
import resetPosition from '../shared/helpers/resetPosition';
import changePositionRandomly from '../shared/helpers/changePositionRandomly';
import { ICheckbox, ILoginData } from './LoginForm.types';
import LOGIN_AGREEMENTS from '../shared/constants';

function useLoginForm(isMoving: boolean) {
  const loginInput = useRef<HTMLInputElement | null>(null);
  const passwordInput = useRef<HTMLInputElement | null>(null);

  const [formData, setFormData] = useState<ILoginData>({
    login: '',
    password: '',
    checkboxes: (Object.keys(LOGIN_AGREEMENTS) as Array<keyof ICheckbox>).reduce(
      (acc, key) => {
        acc[key] = false;
        return acc;
      },
      {} as ICheckbox,
    ),
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

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      name, value,
    } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Congrats! You are allowed to text me in Telegram: @a1evtinka');
  };

  return {
    formData,
    isFormValid,
    loginInput,
    passwordInput,
    changePosition,
    handleInputChange,
    handleCheckboxChange,
    handleSubmit,
  };
}

export default useLoginForm;
