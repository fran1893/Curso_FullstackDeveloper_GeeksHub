import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authentication/authSlice";

import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import sessionStorage from "redux-persist/lib/storage/session";

const rootPersistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['auth'] //hay que poner la key
}
 
const authPersistConfig = {
  key: 'auth',
  storage: sessionStorage,
}

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
})

const persistedReducer = persistReducer(rootPersistConfig, rootReducer)


export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store)


// export const store = configureStore({
//   reducer: {
//     auth: authReducer,
//   },
// });
