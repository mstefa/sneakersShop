import { Action, QueryUsers, User } from "../../types";

export const INCREMENT = "INCREMENT";
export const SHOW_USERS = "GET_USERS";
export const ADD_USER = "ADD_USER";
export const LOADING = "LOADING";

export const increment = () =>
  <Action>{
    type: INCREMENT,
  };
