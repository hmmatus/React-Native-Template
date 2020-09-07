import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore';

const auth = firebase.auth();

const db = firebase.firestore();

export function loginWithCredentials(email, pass) {
  return auth.signInWithEmailAndPassword(email, pass)
    .then((snap) => snap.user)
    .catch((err) => `${err.message}`);
}

export function registerWithCredentials(data) {
  const { email, pass } = data;
  return auth.createUserWithEmailAndPassword(email, pass)
    .then((res) => {
      db.collection('usuarios').doc(res.user.uid).set({
        ...data,
        userInfo: {
          displayName: res.user.displayName,
          uid: res.user.uid,
          photo: res.user.photoURL,
        },
      }).catch((err) => {
        throw new Error(err);
      });
    })
    .catch((err) => `${err.message}`);
}

export function logout() {
  return auth.signOut();
}
