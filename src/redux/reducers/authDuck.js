import { loginWithCredentials, logout, registerWithCredentials } from '../../firebase/firebase'
//Constantes
let initialData = {
    loggedIn: false,
    fetching: false
}
let LOGIN = "LOGIN"
let LOGIN_SUCCESS = "LOGIN_SUCCESS"
let LOGIN_ERROR = "LOGIN_ERROR"

let LOG_OUT = "LOG_OUT"

let REGISTER = "REGISTER"
let REGISTER_SUCCESS = "REGISTER_SUCCESS"
let REGISTER_ERROR = "REGISTER_ERROR"

//reducer
export default function reducer(state = initialData, action) {
    switch (action.type) {
        case LOGIN_ERROR:
            return { ...state, fetching: false, loginError: action.payload }
        case LOGIN_SUCCESS:
            return { ...state, fetching: false, loggedIn: true, ...action.payload }
        case LOGIN:
            return { ...state, fetching: true }
        case REGISTER:
            return { ...state, fetching: true }
        case REGISTER_SUCCESS: {
            return { ...state, fetching: false }
        }
        case REGISTER_ERROR:
            return { ...state, fetching: false, registerError: action.payload }
        case LOG_OUT:
            return { ...initialData }

        default:
            return state;

    }

}

//actions
export let doLoginWithCredentialsAction = (email, pass) => (dispatch) => {
    dispatch({
        type: LOGIN,
    })
    return loginWithCredentials(email, pass)
        .then(res => {
            console.log('Result action ' + res.typeof)
            if (res.uid) {
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: {
                        displayName: res.displayName,
                        uid: res.uid,
                    }
                })
            }
            else {
                throw new Error(res)
            }
        })
        .catch(error => {
            //console.log(error)
            dispatch({
                type: LOGIN_ERROR,
                payload: error+""
                
            })
        })
}

export let doRegisterAction = (data) => (dispatch) => {
    dispatch({
        type: REGISTER
    })
    return registerWithCredentials(data)
        .then((res) => {
            //console.log(res)
            if (!res) {
                dispatch({
                    type: REGISTER_SUCCESS,
                })
                return
            }
            else {
                throw new Error(res)
            }

        })
        .catch(error => {
            console.log("catch "+error)
            dispatch({
                type: REGISTER_ERROR,
                payload: error+""
            })
        })
}

export let doLogout = () => (dispatch) => {
    return logout()
        .then(() => {
            dispatch({
                type: LOG_OUT,
            })
        })
}