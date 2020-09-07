import { loginWithCredentials, logout, registerWithCredentials } from '../../firebase/firebase';
// Constantes
const initialData = {
  loggedIn: false,
  fetching: false,
};
const LOGIN = 'LOGIN';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_ERROR = 'LOGIN_ERROR';

const LOG_OUT = 'LOG_OUT';

const REGISTER = 'REGISTER';
const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const REGISTER_ERROR = 'REGISTER_ERROR';

// reducer
export default function reducer(state = initialData, action) {
  switch (action.type) {
    case LOGIN_ERROR:
      return { ...state, fetching: false, loginError: action.payload };
    case LOGIN_SUCCESS:
      return {
        ...state, fetching: false, loggedIn: true, ...action.payload,
      };
    case LOGIN:
      return { ...state, fetching: true };
    case REGISTER:
      return { ...state, fetching: true };
    case REGISTER_SUCCESS: {
      return { ...state, fetching: false };
    }
    case REGISTER_ERROR:
      return { ...state, fetching: false, registerError: action.payload };
    case LOG_OUT:
      return { ...initialData };

    default:
      return state;
  }
}

// actions
export const doLoginWithCredentialsAction = (email, pass) => (dispatch) => {
  dispatch({
    type: LOGIN,
  });
  return loginWithCredentials(email, pass)
    .then((res) => {
      if (res.uid) {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            displayName: res.displayName,
            uid: res.uid,
          },
        });
      } else {
        throw new Error(res);
      }
    })
    .catch((error) => {
      // console.log(error)
      dispatch({
        type: LOGIN_ERROR,
        payload: `${error}`,

      });
    });
};

export const doRegisterAction = (data) => (dispatch) => {
  dispatch({
    type: REGISTER,
  });
  return registerWithCredentials(data)
    .then((res) => {
      // console.log(res)
      if (!res) {
        dispatch({
          type: REGISTER_SUCCESS,
        });
      } else {
        throw new Error(res);
      }
    })
    .catch((error) => {
      dispatch({
        type: REGISTER_ERROR,
        payload: `${error}`,
      });
    });
};

export const doLogout = () => (dispatch) => logout()
  .then(() => {
    dispatch({
      type: LOG_OUT,
    });
  });
