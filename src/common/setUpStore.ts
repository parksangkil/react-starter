import {createStore, applyMiddleware} from "redux";
import * as thunk from "redux-thunk";
import {rootReducer} from "./reducers/root";

export function setUpStore(initialState: any) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk.default)
    );
};
