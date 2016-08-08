import * as React from "react";
import {Provider} from "react-redux";
import {setUpStore} from "./setUpStore";
import {StorageEngine} from "redux-storage";
import * as storage from "redux-storage";

// tslint:disable-next-line:variable-name
export function createProvider(
    App: typeof React.Component,
    storageEngine: StorageEngine
): JSX.Element {
    const storageEngineMiddleware = storage.createMiddleware(storageEngine);
    const store = setUpStore(storageEngineMiddleware);
    const load = storage.createLoader(storageEngine);
    load(store);

    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}
