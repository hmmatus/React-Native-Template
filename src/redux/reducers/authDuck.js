import { loginWithCredentials, logout } from '../../firebase/firebase'
//Constantes
let initialData = {
    loggedIn: false,
    fetching: false
}
let LOGIN = "LOGIN"
let LOGIN_SUCCESS = "LOGIN_SUCCESS"
let LOGIN_ERROR = "LOGIN_ERROR"

let LOG_OUT = "LOG_OUT"

//reducer
export default function reducer(state = initialData, action) {
    switch (action.type) {
        case LOGIN_ERROR:
            return { ...state, fetching: false, error: action.payload }
        case LOGIN_SUCCESS:
            return { ...state, fetching: false, loggedIn: true, ...action.payload }
        case LOGIN:
            return { ...state, fetching: true }
        case LOG_OUT:
            return { ...initialData }

        default:
            return state;

    }

}

//actions
export let doLoginWithCredentialsAction = (email,pass) => (dispatch) => {
    dispatch({
        type:LOGIN,
    })
    return loginWithCredentials(email,pass)
    .then(res=>{
        dispatch({
            type:LOGIN_SUCCESS,
            payload:{
                displayName:res.displayName,
                uid:res.uid,
            }
        })
    })
    .catch(err=>{
        dispatch({
            type:LOGIN_ERROR,
            payload:err
        })
    })
}

export let doLogout = () => (dispatch) =>{
    return logout()
    .then(()=>{
        dispatch({
            type:LOG_OUT,
        })
    })
}