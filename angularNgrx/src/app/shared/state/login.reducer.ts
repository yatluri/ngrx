import { Action } from '@shared/models/action.model';
export function loginReducer(state, action: Action) {
  switch (action.type) {
    case 'IS_USER_LOGGED_IN':
      return {
        ...state,
        isUserLoggedIn: action.payload
      };
    default:
      return state;
  }
}
