import {applyMiddleware, combineReducers, createStore} from "redux";
import {counterReducer} from "./counterReducer";
import thunk from "redux-thunk";

type AppStoreType = typeof store;
export type AppStateType = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  counter: counterReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));