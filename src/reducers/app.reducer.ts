import { IRootState } from '../interfaces/IRootState';
import { APP_LOAD } from '../actions/actionTypes';
import { IAction } from "../interfaces/IAction";
import { IApp } from "../interfaces/IApp";
import initialState from '../store/initialState';

export default function (state: IRootState = initialState, action: IAction<any>) {
  switch (action.type) {
    case APP_LOAD:
      return { ...state , loading: false };
    default:
      return state;
  }
};