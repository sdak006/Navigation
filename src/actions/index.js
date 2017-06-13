import { EMAIL_CHANGED } from './tyepes'

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};