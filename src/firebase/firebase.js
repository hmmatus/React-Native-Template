import firebase from '@react-native-firebase/app'
import '@react-native-firebase/auth'
import '@react-native-firebase/firestore'

let auth = firebase.auth()

let db = firebase.firestore()

export function loginWithCredentials(email,pass){
    return auth.signInWithEmailAndPassword(email,pass)
    .then(snap=>{
        return snap.user
    })
    .catch(err=>{
        return err.message
    })
}

export function logout(){
    return auth.signOut()
}