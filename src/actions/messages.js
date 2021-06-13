import { CREATE_MESSAGE } from './types';

// CREATE MESSAGE
export const createMessage = (msg, type) => {
  return {
    type: CREATE_MESSAGE,
    payload: msg,
    message_type: type
  };
};

