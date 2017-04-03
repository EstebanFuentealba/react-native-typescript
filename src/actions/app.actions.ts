
import { APP_LOAD } from './actionTypes';
import { IAction } from "../interfaces/IAction";

export function init() : IAction<any> {
  console.log("INIT APP")
  return {
    type: APP_LOAD
  };
};