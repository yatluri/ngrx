import { Action } from '../models/action.model';
export function loginReducer(state, action: Action) {
  switch (action.type) {
    case 'MASK_USER_NAME':
      return {
        ...state,
        maskUserName: action.payload
      };
    default:
      return state;
  }
}
