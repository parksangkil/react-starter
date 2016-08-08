import * as Redux from "redux";
import {createStore} from "redux";
import {rootReducer} from "../reducers/root";
import {setUpMiddleware} from "./setUpMiddleware";
import * as Storage from "redux-storage";
import {State} from "./State";

export function setUpStore(
    storageEngineMiddleware: Redux.Middleware
): Redux.Store<State> {
    return createStore(
        Storage.reducer(rootReducer),  // required by redux-storage
        undefined,
        setUpMiddleware(storageEngineMiddleware)
    );
};
