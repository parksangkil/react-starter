import {createStore} from "redux";
import {rootReducer} from "../reducers/root";
import {setUpMiddleware} from "./setUpMiddleware";
import * as storage from "redux-storage";

export function setUpStore(storageEngineMiddleware: any) {
    return createStore(
        storage.reducer(rootReducer),  // required by redux-storage
        undefined,
        setUpMiddleware(storageEngineMiddleware)
    );
};
