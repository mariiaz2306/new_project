import { combineReducers } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import { createStore } from "redux";
import searchReducer from "./reducer/searchReducer";
import { cartReducer } from './reducer/cartReducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cartReducer'] //here i decide that reducer will not be renewed
  };
  
const persistedReducer = persistReducer(persistConfig, combineReducers({
    cartReducer,
    search: searchReducer,
}));

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);