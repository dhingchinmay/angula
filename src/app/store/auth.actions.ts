import { Action } from '@ngrx/store';

export const DO_REGISTER_USER = 'DO_REGISTER_USER';
export const REGISTER_USER = 'REGISTER_USER';
export const DO_LOGIN_USER = 'DO_LOGIN_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT = 'LOGOUT';
export const SET_TOKEN = 'SET_TOKEN';

export class DoSignUp implements Action{
  readonly type = DO_REGISTER_USER;
  constructor(public payload : {email : string , password : string }){}
}
export class DoSignIn implements Action{
  readonly type = DO_LOGIN_USER;
  constructor(public payload : {email : string , password : string }){}
}
export class SignUp implements Action{
  readonly type = REGISTER_USER;
}
export class SignIn implements Action{
  readonly type = LOGIN_USER;
}
export class LogOut implements Action{
  readonly type = LOGOUT;
}
export class SetToken implements Action{
  readonly type = SET_TOKEN;
  constructor( public payload : string){}
}

export type AuthAction = SignUp | SignIn | LogOut | SetToken ;