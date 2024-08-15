import LOGIN_AGREEMENTS from '../shared/constants';

export interface ILoginForm {
    isMoving: boolean;
}

type LoginAgreementsKeys = keyof typeof LOGIN_AGREEMENTS;

export type ICheckbox = {
  [key in LoginAgreementsKeys]: boolean;
}

export interface ILoginData {
    login: string;
    password: string;
    checkboxes: ICheckbox;
}
