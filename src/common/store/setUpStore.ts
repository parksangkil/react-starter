import {createStore} from "redux";
import {rootReducer} from "../reducers/root";
import {setUpMiddleware} from "./setUpMiddleware";

export function setUpStore(initialState: any) {
    return createStore(
        rootReducer,
        initialState,
        setUpMiddleware()
    );
};
