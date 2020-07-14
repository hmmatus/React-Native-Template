import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import thunk from 'redux-thunk'
import authReducer from './reducers/authDuck'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootPersistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: []
  }
  const authPersistConfig = {
    key: 'auth',
    storage: AsyncStorage,
    blacklist: [],
  }


let rootReducer = combineReducers({
    auth:persistReducer(authPersistConfig,authReducer),
})

const persistedReducer = persistReducer(rootPersistConfig,rootReducer);
const store = createStore(persistedReducer,composeEnhancers(applyMiddleware(thunk)));
const persistor = persistStore(store);
// export default function generateStore() {
//     let store = createStore(
//         rootReducer,
//         composeEnhancers(applyMiddleware(thunk))
//     )
//     return store

// }

export {store,persistor}