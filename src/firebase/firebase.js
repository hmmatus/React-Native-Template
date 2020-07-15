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
        //console.log('Error in login '+err.message)
        return err.message+""
    })
}

export function registerWithCredentials(data){
    let {email,pass} = data
    return auth.createUserWithEmailAndPassword(email,pass)
    .then(res=>{
         db.collection('usuarios').doc(res.user.uid).set({
            ...data,
            userInfo:{
                displayName:res.user.displayName,
                uid:res.user.uid,
                photo:res.user.photoURL,
            }
        }).then(()=>{
            console.log("User added")
        })
        .catch(err=>{
            throw new Error(err)
        })
    })
    .catch(err=>{
        //console.log('Error in register '+err.message)
        return err.message+""
    })
}

export function logout(){
    return auth.signOut()
}